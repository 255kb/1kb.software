import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import LandingCta from "@/components/landing/LandingCta";
import SectionIcon from "@/components/SectionIcon";
import { buildPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata.home" });
  return buildPageMetadata({ title: t("title"), description: t("description"), locale, path: "", absoluteTitle: true });
}

const offerings = [
  { key: "services", href: "/services", icon: "code" },
  { key: "training", href: "/training", icon: "book" },
  { key: "products", href: "/products", icon: "layers" },
] as const;

const clients = [
  { name: "Hubfinance", image: "hubfinance.png", href: "https://www.hubfinance.com/" },
  { name: "Smashing Magazine", image: "smashing-magazine.svg", href: "https://www.smashingmagazine.com/" },
  { name: "CNFPC", image: "cnfpc.png", href: "https://www.cnfpc.lu/" },
  { name: "Oxiane", image: "oxiane.png", href: "https://www.oxiane.lu/" },
  { name: "ADEM", image: "adem.svg", href: "https://adem.public.lu/" },
  { name: "Digital Learning Hub", image: "dlh.webp", href: "https://www.dlh.lu/" },
  { name: "Crescera Solutions", image: "crescera.png", href: "https://crescerasolutions.com/" },
];

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  return (
    <>
      <section className="relative overflow-hidden">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,var(--color-brand-100)_0%,transparent_70%)] dark:bg-[radial-gradient(60%_50%_at_50%_0%,var(--color-brand-950)_0%,transparent_70%)] dark:opacity-30" />
        <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center sm:pt-28">
          <span className="inline-flex rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:border-brand-800 dark:bg-brand-950 dark:text-brand-300">{t("hero.badge")}</span>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            {t("hero.titlePrefix")}{" "}<span className="text-brand-600 dark:text-brand-400">{t("hero.titleAccent")}</span>{t("hero.titleSuffix")}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-lg leading-8 text-zinc-600 dark:text-zinc-400">{t("hero.subtitle")}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-medium text-white no-underline transition-colors hover:bg-brand-700">{t("hero.primary")}</Link>
            <Link href="/services" className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium no-underline transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-zinc-700 dark:hover:text-brand-400">{t("hero.secondary")}</Link>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-16">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400">{t("hero.trust")}</p>
          <div className="mt-6 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-7">
            {clients.map((client) => (
              <a key={client.name} href={client.href} className="flex items-center justify-center px-2 py-4 opacity-70 transition-opacity hover:opacity-100">
                <Image src={`/images/logos/${client.image}`} alt={client.name} width={160} height={64} className={`h-10 w-auto max-w-full object-contain grayscale mix-blend-multiply dark:mix-blend-screen ${client.image === "crescera.png" ? "invert dark:invert-0" : "dark:invert"}`} />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="services" className="border-y border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-surface-muted">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">{t("offerings.title")}</h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">{t("offerings.subtitle")}</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {offerings.map(({ key, href, icon }) => (
              <article key={key} className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-8 transition-shadow hover:shadow-lg hover:shadow-brand-100/60 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:shadow-none">
                <SectionIcon name={icon} />
                <h3 className="text-lg font-semibold">{t(`offerings.${key}.title`)}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{t(`offerings.${key}.body`)}</p>
                <Link href={href} className="mt-6 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400">{t(`offerings.${key}.cta`)} →</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="cases" className="mx-auto w-full max-w-6xl px-6 py-24">
        <h2 className="text-center text-3xl font-semibold tracking-tight">{t("testimonial.title")}</h2>
        <figure className="mx-auto mt-12 max-w-2xl rounded-2xl border border-zinc-100 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <Image src="/images/logos/hubfinance.png" alt="Hubfinance" width={160} height={64} className="mb-6 h-10 w-auto grayscale mix-blend-multiply dark:invert dark:mix-blend-screen" />
          <blockquote className="text-lg leading-8 text-zinc-700 dark:text-zinc-300">“{t("testimonial.quote")}”</blockquote>
          <figcaption className="mt-6 flex items-center gap-4">
            <Image src="/images/testimonials/fabien-amoretti.jpg" alt="Fabien Amoretti" width={64} height={64} className="rounded-full" />
            <div><p className="text-sm font-semibold">Fabien Amoretti</p><p className="text-sm text-zinc-500 dark:text-zinc-400">{t("testimonial.role")}</p></div>
          </figcaption>
        </figure>
      </section>
      <div id="contact">
        <LandingCta title={t("cta.title")} body={t("cta.body")} primaryLabel={t("cta.primary")} primaryHref="/contact" locale={locale} />
      </div>
    </>
  );
}
