"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useParams } from "next/navigation";

type SolutionSlugMap = Record<string, Record<string, string>>;
type ArticleSlugMap = Record<string, Record<string, string>>;

type LanguageSwitchProps = {
  locale: string;
  solutionSlugMap: SolutionSlugMap;
  articleSlugMap: ArticleSlugMap;
  switchToFrench: string;
  switchToEnglish: string;
};

export default function LanguageSwitch({
  locale,
  solutionSlugMap,
  articleSlugMap,
  switchToFrench,
  switchToEnglish,
}: LanguageSwitchProps) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const slug =
    params.slug == null
      ? undefined
      : Array.isArray(params.slug)
        ? params.slug[0]
        : params.slug;

  function switchLocale(targetLocale: (typeof routing.locales)[number]) {
    if (pathname === "/services/[slug]" && slug) {
      const canonicalSlug =
        Object.entries(solutionSlugMap[locale] ?? {}).find(([, value]) => value === slug)?.[0] ?? slug;

      router.replace(
        {
          pathname: "/services/[slug]",
          params: {
            slug: solutionSlugMap[targetLocale]?.[canonicalSlug] ?? canonicalSlug,
          },
        },
        { locale: targetLocale }
      );
    } else if (pathname === "/articles/[slug]" && slug) {
      const canonicalSlug =
        Object.entries(articleSlugMap[locale] ?? {}).find(([, value]) => value === slug)?.[0] ?? slug;

      router.replace(
        {
          pathname: "/articles/[slug]",
          params: {
            slug: articleSlugMap[targetLocale]?.[canonicalSlug] ?? canonicalSlug,
          },
        },
        { locale: targetLocale }
      );
    } else if (pathname === "/training/[slug]" && slug) {
      router.replace({ pathname: "/training/[slug]", params: { slug } }, { locale: targetLocale });
    } else {
      router.replace(
        pathname as Exclude<keyof typeof routing.pathnames, `${string}[${string}]${string}`>,
        { locale: targetLocale }
      );
    }
  }

  return (
    <div className="inline-flex items-center gap-2 text-sm">
      <div className="inline-flex items-center gap-1 rounded-full border border-zinc-200 bg-white p-1 dark:border-zinc-700 dark:bg-zinc-900">
        {routing.locales.map((targetLocale) => {
          const active = targetLocale === locale;
          const ariaLabel =
            targetLocale === "fr" ? switchToFrench : switchToEnglish;

          return (
            <button
              key={targetLocale}
              type="button"
              onClick={() => switchLocale(targetLocale)}
              className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium transition-colors ${
                active
                  ? "bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-200"
                  : "text-zinc-600 hover:text-brand-700 dark:text-zinc-300 dark:hover:text-brand-300"
              }`}
              aria-label={ariaLabel}
            >
              <span>{targetLocale}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

