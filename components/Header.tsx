import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getArticleSlugMap } from "@/lib/articleRoutes";
import { getSolutionRouteSlug, getSolutionSlugMap } from "@/lib/solutionRoutes";
import Logo from "./Logo";
import LanguageSwitch from "./LanguageSwitch";
import MobileMenu from "./MobileMenu";

const navItems = [
  { key: "products", href: "/products" },
  { key: "training", href: "/training" },
] as const;

type SolutionItem = {
  key: string;
  canonicalSlug?: string;
};

const solutionGroups: { titleKey: string; items: SolutionItem[] }[] = [
  {
    titleKey: "benefits",
    items: [
      { key: "applicationDevelopment", canonicalSlug: "application-development" },
      { key: "codeAudit", canonicalSlug: "code-audit" },
      { key: "hostingManagement", canonicalSlug: "hosting-management" },
    ],
  },
];

export default function Header({ locale }: { locale: string }) {
  const t = useTranslations("common");
  const articleSlugMap = getArticleSlugMap();
  const solutionSlugMap = getSolutionSlugMap();

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-chrome/80">
      <nav className="mx-auto flex h-16 max-w-6xl items-center px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <Logo className="h-10 w-auto" />
        </Link>
        <ul className="ml-auto hidden items-center gap-8 text-sm font-medium text-zinc-600 md:flex dark:text-zinc-300">
          <li className="group relative">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 transition-colors hover:text-brand-600 focus:outline-none dark:hover:text-brand-400"
            >
              {t("nav.solutions")}
              <svg
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 8l4 4 4-4" />
              </svg>
            </Link>

            <div className="invisible absolute top-full left-0 z-40 mt-2 w-72 rounded-xl border border-zinc-100 bg-white p-3 opacity-0 shadow-2xl shadow-zinc-900/10 transition-all before:absolute before:inset-x-0 before:-top-2 before:h-2 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 dark:border-zinc-800 dark:bg-zinc-900 dark:shadow-none">
              <div className="space-y-3">
                {solutionGroups.map((group) => (
                  <div key={group.titleKey}>
                    <Link
                      href={{ pathname: "/services", hash: group.titleKey }}
                      className="mb-1 block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-zinc-500 transition-colors hover:text-brand-600 dark:text-zinc-400 dark:hover:text-brand-400"
                    >
                      {t(`nav.solutionsMenu.${group.titleKey}`)}
                    </Link>
                    <ul className="space-y-1">
                      {group.items.map((item) => (
                        <li key={item.key}>
                          <Link
                            href={
                              item.canonicalSlug
                                ? {
                                    pathname: "/services/[slug]" as const,
                                    params: { slug: getSolutionRouteSlug(item.canonicalSlug, locale) },
                                  }
                                : "/services"
                            }
                            className="block rounded-lg px-3 py-2 text-sm text-zinc-700 transition-colors hover:bg-brand-50 hover:text-brand-700 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-brand-300"
                          >
                            {t(`nav.solutionsMenu.items.${item.key}`)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </li>

          {navItems.map((item) => (
            <li key={item.key}>
              <Link
                className="transition-colors hover:text-brand-600 dark:hover:text-brand-400"
                href={item.href}
              >
                {t(`nav.${item.key}`)}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href="/about"
              className="transition-colors hover:text-brand-600 dark:hover:text-brand-400"
            >
              {t("nav.about")}
            </Link>
          </li>
        </ul>
        <div className="ml-auto flex items-center gap-3 md:ml-6">
          <LanguageSwitch
            locale={locale}
            solutionSlugMap={solutionSlugMap}
            articleSlugMap={articleSlugMap}
            switchToFrench={t("language.switchToFr")}
            switchToEnglish={t("language.switchToEn")}
          />
          <Link
            href="/contact"
            className="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white no-underline transition-colors hover:bg-brand-700 md:inline-flex"
          >
            {t("nav.contact")}
          </Link>
          <MobileMenu
            solutionsLabel={t("nav.solutions")}
            contactLabel={t("nav.contact")}
            openMenuLabel={t("nav.openMenu")}
            closeMenuLabel={t("nav.closeMenu")}
            navigationLabel={t("nav.navigation")}
            navLinks={[
              ...navItems.map((item) => ({
                label: t(`nav.${item.key}`),
                href: item.href,
              })),
              { label: t("nav.about"), href: "/about" },
            ]}
            solutionGroups={solutionGroups.map((group) => ({
              titleKey: group.titleKey,
              title: t(`nav.solutionsMenu.${group.titleKey}`),
              items: group.items.map((item) => ({
                key: item.key,
                label: t(`nav.solutionsMenu.items.${item.key}`),
                slug: item.canonicalSlug
                  ? getSolutionRouteSlug(item.canonicalSlug, locale)
                  : "",
              })),
            }))}
          />
        </div>
      </nav>
    </header>
  );
}
