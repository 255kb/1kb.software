import ContactPageContent from "@/components/ContactPageContent";
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
  const t = await getTranslations({ locale, namespace: "metadata.contact" });
  return buildPageMetadata({
    title: t("title"),
    description: t("description"),
    locale,
    path: "/contact",
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ContactPageContent locale={locale} />;
}
