import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';
import { useDoc } from '@docusaurus/theme-common/internal';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import { useLocation } from 'react-router-dom';

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
  // Extract the path from the location, because frontmatter.slug might not be defined.
  // The path is used to disambiguate between pages with the same title (e.g. 'Modules').
  const path = location;
//   const path = location.pathname.replace('/developers/weaviate', '');

  return (
    <Giscus
      {...GiscusParams}
    //   term={`Doc comment on ${frontMatter.title} (${path})`}
      term="Welcome to comments"
      theme={colorMode}
    />
  );
}

export function GiscusBlogPostComment() {
  const { colorMode } = useColorMode();
  const { frontMatter } = useBlogPost();

  return (
    <Giscus
      {...GiscusParams}
      term={'Blog comment on ' + frontMatter.title}
      theme={colorMode}
    />
  );
}