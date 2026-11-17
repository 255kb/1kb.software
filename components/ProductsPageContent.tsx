import Image from "next/image";
import LandingHero from "@/components/landing/LandingHero";
import LandingValueProps from "@/components/landing/LandingValueProps";
import SectionIcon from "@/components/SectionIcon";
import { getTranslations } from "next-intl/server";

const metricItems = [
  { key: "years", icon: "git" },
  { key: "downloads", icon: "layers" },
  { key: "companies", icon: "server" },
] as const;

export default async function ProductsPageContent({ locale }: { locale: string }) {
  const t = await getTranslations("products");
  return (
    <div className="flex flex-1 flex-col">
      <LandingHero badge={t("badge")} title={t("title")} subtitle={t("subtitle")} primaryLabel={t("visit")} primaryHref="https://mockoon.com" locale={locale} />
      <section className="mx-auto w-full max-w-6xl px-6 pb-16">
        <h2 className="text-center text-2xl font-semibold tracking-tight">{t("metrics.title")}</h2>
        <dl className="mt-8 grid gap-6 sm:grid-cols-3">
          {metricItems.map(({ key, icon }) => (
            <div key={key} className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <SectionIcon name={icon} />
              <dt className="text-sm text-zinc-600 dark:text-zinc-400">{t(`metrics.${key}.label`)}</dt>
              <dd className="mt-2 text-3xl font-semibold tracking-tight text-brand-600 dark:text-brand-400">{t(`metrics.${key}.value`)}</dd>
              <dd className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{t(`metrics.${key}.body`)}</dd>
            </div>
          ))}
        </dl>
      </section>
      <section id="mockoon" className="border-y border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-surface-muted">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div><h2 className="text-3xl font-semibold tracking-tight">{t("mockoon.title")}</h2><p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">{t("mockoon.body")}</p><a href="https://mockoon.com" className="mt-6 inline-flex text-sm font-medium text-brand-600 dark:text-brand-400">{t("visit")} →</a></div>
          <Image src="/images/mockoon-screenshot.png" alt={t("screenshotAlt")} width={960} height={640} className="h-auto w-full rounded-2xl border border-zinc-200 shadow-xl dark:border-zinc-800 dark:shadow-none" />
        </div>
      </section>
      <LandingValueProps title={t("featuresTitle")} items={[
        { icon: "api", title: t("features.responses.title"), body: t("features.responses.body") },
        { icon: "layers", title: t("features.data.title"), body: t("features.data.body") },
        { icon: "code", title: t("features.openapi.title"), body: t("features.openapi.body") },
        { icon: "git", title: t("features.proxy.title"), body: t("features.proxy.body") },
        { icon: "server", title: t("features.automation.title"), body: t("features.automation.body") },
        { icon: "check", title: t("features.offline.title"), body: t("features.offline.body") },
      ]} />
      <section className="border-y border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-surface-muted">
        <LandingValueProps title={t("pro.title")} items={[
          { icon: "code", title: t("pro.browser.title"), body: t("pro.browser.body") },
          { icon: "git", title: t("pro.collaboration.title"), body: t("pro.collaboration.body") },
          { icon: "server", title: t("pro.hosting.title"), body: t("pro.hosting.body") },
        ]} />
      </section>
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <a href="https://mockoon.com/features/" className="text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400">{t("allFeatures")} <span aria-hidden="true">→</span></a>
      </div>
    </div>
  );
}
