import LandingCta from "@/components/landing/LandingCta";
import LandingHero from "@/components/landing/LandingHero";
import LandingOutcomes from "@/components/landing/LandingOutcomes";
import LandingSplit from "@/components/landing/LandingSplit";
import LandingValueProps from "@/components/landing/LandingValueProps";
import { routing } from "@/i18n/routing";
import { renderMdx } from "@/lib/mdx";
import { buildPageMetadata } from "@/lib/seo";
import { getSolution } from "@/lib/solutions";
import {
  getSolutionCanonicalSlug,
  getSolutionRouteSlug,
  getSolutionRouteSlugs,
} from "@/lib/solutionRoutes";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ComponentProps } from "react";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    getSolutionRouteSlugs(locale).map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const { meta } = getSolution(slug, locale);
  const altLocale = locale === "fr" ? "en" : "fr";
  const canonicalSlug = getSolutionCanonicalSlug(slug, locale);
  const altSlug = getSolutionRouteSlug(canonicalSlug, altLocale);
  return buildPageMetadata({
    title: meta.title,
    description: meta.excerpt,
    locale,
    path: `/services/${slug}`,
    alternatePath: `/services/${altSlug}`,
  });
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const slugs = getSolutionRouteSlugs(locale);
  if (!slugs.includes(slug)) {
    notFound();
  }

  const { content } = getSolution(slug, locale);
  const MdxContent = await renderMdx(content, locale, {
    LandingHero: (props) => (
      <LandingHero
        {...(props as ComponentProps<typeof LandingHero>)}
        locale={locale}
      />
    ),
    LandingValueProps: (props) => (
      <LandingValueProps
        {...(props as ComponentProps<typeof LandingValueProps>)}
      />
    ),
    LandingSplit: (props) => (
      <LandingSplit {...(props as ComponentProps<typeof LandingSplit>)} />
    ),
    LandingOutcomes: (props) => (
      <LandingOutcomes
        {...(props as ComponentProps<typeof LandingOutcomes>)}
      />
    ),
    LandingCta: (props) => (
      <LandingCta
        {...(props as ComponentProps<typeof LandingCta>)}
        locale={locale}
      />
    ),
  });

  return (
    <div className="flex flex-1 flex-col">
      <div className="prose prose-zinc max-w-none dark:prose-invert">
        <MdxContent />
      </div>

    </div>
  );
}
