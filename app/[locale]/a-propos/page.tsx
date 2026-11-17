import AboutPageContent from "@/components/AboutPageContent";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ locale: "fr" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.about" });
  return buildPageMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    path: "/a-propos",
    alternatePath: "/about",
  });
}

export default async function AboutFrPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (locale !== "fr") {
    notFound();
  }

  setRequestLocale(locale);
  return <AboutPageContent locale={locale} />;
}
