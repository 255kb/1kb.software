import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { getAllArticles } from "@/lib/articles";
import ArticleCard from "@/components/ArticleCard";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.articles" });
  return buildPageMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    path: "/articles",
  });
}

export default async function ArticlesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("insights");
  const articles = getAllArticles(locale);

  return (
    <div className="mx-auto max-w-6xl px-6 py-24">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
          {t("subtitle")}
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard
            key={article.slug}
            article={article}
            readMoreLabel={t("readMore")}
          />
        ))}
      </div>
    </div>
  );
}
