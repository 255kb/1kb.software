import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDir = path.join(process.cwd(), "content/articles");

export type ArticleSlugMap = Record<string, Record<string, string>>;

function readArticleFiles() {
  return fs
    .readdirSync(articlesDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const match = file.match(/^(.*)\.(fr|en)\.mdx$/);
      if (!match) return null;

      const [, routeSlug, locale] = match;
      const source = fs.readFileSync(path.join(articlesDir, file), "utf8");
      const { data } = matter(source);
      const canonicalSlug = typeof data.slug === "string" ? data.slug : routeSlug;

      return { canonicalSlug, locale, routeSlug };
    })
    .filter(
      (entry): entry is { canonicalSlug: string; locale: string; routeSlug: string } =>
        Boolean(entry)
    );
}

export function getArticleSlugMap(): ArticleSlugMap {
  const map: ArticleSlugMap = {};

  for (const { canonicalSlug, locale, routeSlug } of readArticleFiles()) {
    if (!map[locale]) {
      map[locale] = {};
    }

    map[locale][canonicalSlug] = routeSlug;
  }

  return map;
}

export function getArticleRouteSlug(canonicalSlug: string, locale: string) {
  return getArticleSlugMap()[locale]?.[canonicalSlug] ?? canonicalSlug;
}

export function getArticleCanonicalSlug(routeSlug: string, locale: string) {
  const localeMap = getArticleSlugMap()[locale];
  if (!localeMap) return routeSlug;

  const entry = Object.entries(localeMap).find(([, value]) => value === routeSlug);
  return entry?.[0] ?? routeSlug;
}

export function getArticleRouteSlugs(locale: string) {
  return Object.values(getArticleSlugMap()[locale] ?? {});
}

export function getArticleCanonicalSlugs() {
  const map = getArticleSlugMap();
  const slugs = new Set<string>();

  Object.values(map).forEach((localeMap) => {
    Object.keys(localeMap).forEach((slug) => slugs.add(slug));
  });

  return Array.from(slugs);
}
