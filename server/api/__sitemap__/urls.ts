import { defineSitemapEventHandler } from "#imports";
import type { SitemapUrlInput } from "#sitemap/types";

export default defineSitemapEventHandler(async (event) => {
  const articles = (await queryCollection(event, "blog").all()) || [];
  const docs = (await queryCollection(event, "doc").all()) || [];

  const blogUrls = articles.map((item) => {
    return {
      loc: item.path,
      lastmod: new Date(),
      _sitemap: "pages",
    };
  });

  const docUrls = docs.map((item) => {
    return {
      loc: item.path,
      lastmod: new Date(),
      _sitemap: "pages",
    };
  });

  const demoUrls = new Array(5)
    .fill(0)
    .map((_, i) => i + 1)
    .map((i) => {
      return {
        loc: `/demos/${i}`,
        lastmod: new Date(),
        _sitemap: "pages",
      };
    });

  const data = [...blogUrls, ...demoUrls, ...docUrls];

  return data satisfies SitemapUrlInput[];
});
