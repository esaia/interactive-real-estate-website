import { defineSitemapEventHandler } from "#imports";
import type { SitemapUrlInput } from "#sitemap/types";

export default defineSitemapEventHandler(async (event) => {
  const articles = await queryCollection(event, "content").all();

  const blogs = articles.map((item) => {
    return {
      loc: `/blog${item.path}`,
      lastmod: new Date(),
      _sitemap: "pages",
    };
  });

  const demos = new Array(5)
    .fill(0)
    .map((_, i) => i + 1)
    .map((i) => {
      return {
        loc: `/demos/${i}`,
        lastmod: new Date(),
        _sitemap: "pages",
      };
    });

  // const data = [...blogs, ...demos];
  const data = demos; // temp until I will create blog

  return data satisfies SitemapUrlInput[];
});
