import StaticPageContent from "@/components/StaticPageContent";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
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
  const t = await getTranslations({ locale, namespace: "metadata.privacy" });
  return buildPageMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    path: "/privacy",
  });
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <StaticPageContent category="privacy" locale={locale} />;
}
