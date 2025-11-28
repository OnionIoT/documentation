#!/usr/bin/env python3

"""Port the legacy Omega2 Markdown docs into the Docusaurus omega2-legacy tree."""

from __future__ import annotations

import json
import re
import shutil
import sys
from pathlib import Path


REPO_ROOT = Path(__file__).resolve().parents[1]
SOURCE_ROOT = (REPO_ROOT.parent / 'Onion-Docs' / 'Omega2' / 'Documentation').resolve()
DEST_ROOT = REPO_ROOT / 'omega2-legacy'

CHILD_PATTERN = re.compile(r"```{r\s+child\s*=\s*['\"]([^'\"]+)['\"]}\s*```", re.IGNORECASE)
FRONT_MATTER_PATTERN = re.compile(r'^---\s*\n(.*?)\n---\s*\n?', re.DOTALL)
HEADING_PATTERN = re.compile(r'^\s*#{1,6}\s*(.+?)\s*$', re.MULTILINE)
GISCUS_IMPORT = "import { GiscusDocComment } from '/src/components/GiscusComment';"


def normalize_newlines(text: str) -> str:
    return text.replace('\r\n', '\n').replace('\r', '\n')


def collect_child_targets() -> set[Path]:
    """Return the set of files that are only included via child directives."""
    targets: set[Path] = set()
    for path in SOURCE_ROOT.rglob('*.md'):
        text = normalize_newlines(path.read_text(encoding='utf-8'))
        for rel_path in CHILD_PATTERN.findall(text):
            child_path = (path.parent / rel_path).resolve()
            if not child_path.exists():
                print(f'[WARN] Missing child target referenced from {path}: {rel_path}', file=sys.stderr)
                continue
            if SOURCE_ROOT not in child_path.parents and child_path != SOURCE_ROOT:
                print(f'[WARN] Child path {child_path} is outside the documentation root; skipping.', file=sys.stderr)
                continue
            targets.add(child_path)
    return targets


def extract_title_from_front_matter(front_matter: str) -> str | None:
    for raw_line in front_matter.splitlines():
        line = raw_line.strip()
        if not line or line.startswith('#'):
            continue
        if line.lower().startswith('title:'):
            return line.split(':', 1)[1].strip().strip('"').strip("'")
    return None


def derive_title_from_body(body: str, path: Path) -> str:
    match = HEADING_PATTERN.search(body)
    if match:
        heading = match.group(1)
        heading = re.sub(r'\s*\{#.*?\}\s*', '', heading).strip()
        if heading:
            return heading
    # Fall back to the file name when no heading exists
    stem = path.stem.replace('-', ' ').replace('_', ' ').strip()
    return stem.title() if stem else 'Legacy Omega2 Docs'


def strip_handlebars(text: str) -> str:
    """Remove the legacy Handlebars block markers to show the raw content."""
    cleaned_lines = [
        line for line in text.splitlines()
        if '{{' not in line and '}}' not in line
    ]
    return '\n'.join(cleaned_lines)


def format_title_line(title: str) -> str:
    return f'title: {json.dumps(title)}'


def replace_child_blocks(text: str, current_path: Path, cache: dict[tuple[Path, bool], str]) -> str:
    def _replace(match: re.Match[str]) -> str:
        rel_path = match.group(1)
        child_path = (current_path.parent / rel_path).resolve()
        if not child_path.exists():
            print(f'[WARN] Missing child file {rel_path} referenced from {current_path}', file=sys.stderr)
            return ''
        if SOURCE_ROOT not in child_path.parents and child_path != SOURCE_ROOT:
            print(f'[WARN] Child file {child_path} is outside documentation root; skipping include.', file=sys.stderr)
            return ''
        snippet = render_markdown(child_path, inline=True, cache=cache)
        snippet = snippet.strip()
        return f'\n{snippet}\n'

    return CHILD_PATTERN.sub(_replace, text)


def render_markdown(path: Path, inline: bool, cache: dict[tuple[Path, bool], str]) -> str:
    key = (path.resolve(), inline)
    if key in cache:
        return cache[key]

    raw_text = normalize_newlines(path.read_text(encoding='utf-8'))
    title: str | None = None

    body = raw_text
    fm_match = FRONT_MATTER_PATTERN.match(raw_text)
    if fm_match:
        front_matter = fm_match.group(1)
        title = extract_title_from_front_matter(front_matter)
        body = raw_text[fm_match.end():]

    body = body.lstrip('\n')
    body = replace_child_blocks(body, path, cache)
    body = strip_handlebars(body)
    body = body.strip()

    if inline:
        cache[key] = body
        return body

    final_title = (title or derive_title_from_body(body, path)).strip()
    front_matter_lines = ['---', format_title_line(final_title or 'Legacy Omega2 Docs'), '---', '']
    doc_parts = front_matter_lines + [
        GISCUS_IMPORT,
        '',
        body,
        '',
        '<GiscusDocComment />',
    ]
    rendered = '\n'.join(doc_parts).rstrip() + '\n'
    cache[key] = rendered
    return rendered


def copy_non_markdown_assets() -> None:
    for path in SOURCE_ROOT.rglob('*'):
        if not path.is_file():
            continue
        if path.suffix.lower() == '.md':
            continue
        dest = DEST_ROOT / path.relative_to(SOURCE_ROOT)
        dest.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(path, dest)


def main() -> None:
    if not SOURCE_ROOT.exists():
        print(f'[ERROR] Could not find legacy docs at {SOURCE_ROOT}', file=sys.stderr)
        sys.exit(1)

    child_targets = collect_child_targets()

    if DEST_ROOT.exists():
        shutil.rmtree(DEST_ROOT)
    DEST_ROOT.mkdir(parents=True, exist_ok=True)

    copy_non_markdown_assets()

    cache: dict[tuple[Path, bool], str] = {}
    written = 0

    for path in sorted(SOURCE_ROOT.rglob('*.md')):
        if path.resolve() in child_targets:
            continue
        relative = path.relative_to(SOURCE_ROOT)
        content = render_markdown(path, inline=False, cache=cache)
        dest_path = DEST_ROOT / relative
        dest_path.parent.mkdir(parents=True, exist_ok=True)
        dest_path.write_text(content, encoding='utf-8')
        written += 1
        print(f'[INFO] Converted {relative}')

    print(f'[INFO] Completed conversion of {written} Markdown files into {DEST_ROOT}')


if __name__ == '__main__':
    main()
