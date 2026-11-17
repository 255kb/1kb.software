import { Link } from "@/i18n/navigation";
import SectionIcon from "@/components/SectionIcon";
import { routing } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getSolutionRouteSlug } from "@/lib/solutionRoutes";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.solutions" });
  return buildPageMetadata({ title: t("title"), description: t("description"), locale, path: "/services" });
}

const serviceCards = [
  { key: "applicationDevelopment", slug: "application-development", icon: "code" },
  { key: "codeAudit", slug: "code-audit", icon: "check" },
  { key: "hostingManagement", slug: "hosting-management", icon: "server" },
] as const;

export default async function SolutionsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("solutions.index");
  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="max-w-3xl">
        <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:border-brand-800 dark:bg-brand-950 dark:text-brand-300">{t("hero.badge")}</span>
        <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{t("hero.title")}</h1>
        <p className="mt-5 text-balance text-lg text-zinc-600 dark:text-zinc-400">{t("hero.subtitle")}</p>
      </div>
      <div id="benefits" className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCards.map(({ key, slug, icon }) => (
          <article key={key} className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
            <SectionIcon name={icon} />
            <h2 className="text-lg font-semibold">{t(`cards.${key}.title`)}</h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{t(`cards.${key}.description`)}</p>
            <div className="mt-auto pt-6"><Link href={{ pathname: "/services/[slug]", params: { slug: getSolutionRouteSlug(slug, locale) } }} className="inline-flex h-10 items-center justify-center rounded-full bg-brand-600 px-5 text-sm font-medium text-white no-underline transition-colors hover:bg-brand-700">{t("cta")}</Link></div>
          </article>
        ))}
      </div>
    </div>
  );
}
