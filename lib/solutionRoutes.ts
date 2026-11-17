import fs from "fs";
import path from "path";
import matter from "gray-matter";

const solutionsDir = path.join(process.cwd(), "content/solutions");

export type SolutionSlugMap = Record<string, Record<string, string>>;

function readSolutionFiles() {
  return fs
    .readdirSync(solutionsDir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const match = file.match(/^(.*)\.(fr|en)\.mdx$/);
      if (!match) return null;

      const [, routeSlug, locale] = match;
      const source = fs.readFileSync(path.join(solutionsDir, file), "utf8");
      const { data } = matter(source);
      const canonicalSlug = typeof data.slug === "string" ? data.slug : routeSlug;

      return { canonicalSlug, locale, routeSlug };
    })
    .filter((entry): entry is { canonicalSlug: string; locale: string; routeSlug: string } => Boolean(entry));
}

export function getSolutionSlugMap(): SolutionSlugMap {
  const map: SolutionSlugMap = {};

  for (const { canonicalSlug, locale, routeSlug } of readSolutionFiles()) {
    if (!map[locale]) {
      map[locale] = {};
    }

    map[locale][canonicalSlug] = routeSlug;
  }

  return map;
}

export function getSolutionRouteSlug(canonicalSlug: string, locale: string) {
  return getSolutionSlugMap()[locale]?.[canonicalSlug] ?? canonicalSlug;
}

export function getSolutionCanonicalSlug(routeSlug: string, locale: string) {
  const localeMap = getSolutionSlugMap()[locale];
  if (!localeMap) return routeSlug;

  const entry = Object.entries(localeMap).find(([, value]) => value === routeSlug);
  return entry?.[0] ?? routeSlug;
}

export function getSolutionRouteSlugs(locale: string) {
  return Object.values(getSolutionSlugMap()[locale] ?? {});
}

export function getSolutionCanonicalSlugs() {
  const map = getSolutionSlugMap();
  const slugs = new Set<string>();

  Object.values(map).forEach((localeMap) => {
    Object.keys(localeMap).forEach((slug) => {
      slugs.add(slug);
    });
  });

  return Array.from(slugs);
}
