import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  getSolutionCanonicalSlug,
  getSolutionRouteSlug,
} from "@/lib/solutionRoutes";

const solutionsDir = path.join(process.cwd(), "content/solutions");

export type SolutionMeta = {
  slug: string;
  title: string;
  excerpt: string;
  locale: string;
};

export function getSolution(slug: string, locale: string) {
  const canonicalSlug = getSolutionCanonicalSlug(slug, locale);
  const routeSlug = getSolutionRouteSlug(canonicalSlug, locale);
  const filePath = path.join(solutionsDir, `${routeSlug}.${locale}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    meta: { slug: routeSlug, locale, ...data } as SolutionMeta,
    content,
  };
}