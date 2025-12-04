import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import { useLocation } from '@docusaurus/router';

const GiscusParams = {
  repo: "OnionIoT/documentation",
  repoId: "R_kgDOKbtO9Q",
  category: "Docs Comments",
  categoryId: "DIC_kwDOKbtO9c4Cc9p4",
  mapping: "pathname",
  strict: "0",
  reactionsEnabled: "1",
  emitMetadata: "1",
  inputPosition: "bottom",
  lang: "en",
  loading: "eager",
  crossorigin: "anonymous",
};

export function GiscusDocComment() {
  const { colorMode } = useColorMode();
  const { frontMatter } = useDoc();
  const location = useLocation();
  const path = location?.pathname ?? '';
  const title = frontMatter?.title ?? 'Doc comment';
  const term = `${title} (${path})`;

  return (
    <Giscus
      {...GiscusParams}
      term={term}
      theme={colorMode}
    />
  );
}

export function GiscusBlogPostComment() {
  const { colorMode } = useColorMode();
  const { frontMatter } = useBlogPost();
  const title = frontMatter?.title ?? 'Blog comment';

  return (
    <Giscus
      {...GiscusParams}
      term={`Blog comment on ${title}`}
      theme={colorMode}
    />
  );
}
