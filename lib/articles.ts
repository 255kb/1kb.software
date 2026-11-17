import {
  getArticleCanonicalSlug,
  getArticleCanonicalSlugs,
  getArticleRouteSlug,
} from "@/lib/articleRoutes";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const articlesDir = path.join(process.cwd(), "content/articles");

export type ArticleMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  image?: string;
  locale: string;
};

export function getArticleSlugs(): string[] {
  return getArticleCanonicalSlugs();
}

export function getArticle(slug: string, locale: string) {
  const canonicalSlug = getArticleCanonicalSlug(slug, locale);
  const filePath = path.join(
    articlesDir,
    `${getArticleRouteSlug(canonicalSlug, locale)}.${locale}.mdx`,
  );
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return {
    meta: {
      ...data,
      slug: getArticleRouteSlug(canonicalSlug, locale),
      locale,
    } as ArticleMeta,
    content,
  };
}

export function getAllArticles(locale: string): ArticleMeta[] {
  const slugs = getArticleSlugs();
  return slugs
    .map((slug) => getArticle(slug, locale).meta)
    .sort((a, b) => (a.date > b.date ? -1 : 1));
}
