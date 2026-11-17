import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { getArticleSlugMap } from "@/lib/articleRoutes";
import { getSolutionSlugMap } from "@/lib/solutionRoutes";
import Logo from "./Logo";
import LanguageSwitch from "./LanguageSwitch";

const footerGroups = [
  {
    titleKey: "footer.columns.company",
    links: ["about", "methodology", "solutions"],
  },
  {
    titleKey: "footer.columns.resources",
    links: ["products", "contactUs"],
  },
  {
    titleKey: "footer.columns.legal",
    links: ["privacy", "terms"],
  },
] as const;

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations("common");
  const articleSlugMap = getArticleSlugMap();
  const solutionSlugMap = getSolutionSlugMap();
  const footerLinks = {
    about: "/about",
    methodology: "/training",
    solutions: "/services",
    products: "/products",
    contactUs: "/contact",
    privacy: "/privacy",
    terms: "/terms",
  } as const;

  return (
    <footer className="border-t border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-chrome">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              aria-label="1kB"
              className="flex items-center gap-2 font-semibold tracking-tight"
            >
              <Logo className="h-7 w-auto" />
              <span aria-hidden="true" className="text-[38px] leading-none text-zinc-500 dark:text-zinc-400">
                kB
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
              {t("footer.description")}
            </p>
            <div className="mt-4">
              <LanguageSwitch
                locale={locale}
                solutionSlugMap={solutionSlugMap}
                articleSlugMap={articleSlugMap}
                switchToFrench={t("language.switchToFr")}
                switchToEnglish={t("language.switchToEn")}
              />
            </div>
          </div>

          {footerGroups.map((group) => (
            <div key={group.titleKey}>
              <h4 className="text-sm font-semibold">{t(group.titleKey)}</h4>
              <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
                {group.links.map((linkKey) => (
                  <li key={linkKey}>
                    <Link
                      className="transition-colors hover:text-brand-600 dark:hover:text-brand-400"
                      href={footerLinks[linkKey]}
                    >
                      {t(`footer.links.${linkKey}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 pt-8 text-sm text-zinc-500 sm:flex-row dark:border-zinc-800">
          <p>
            © {new Date().getFullYear()} 1kB SARL-S. {t("footer.copyright")}
          </p>
          <p>{t("footer.tagline")}</p>
        </div>
        <p className="mt-4 text-center text-xs text-zinc-500 dark:text-zinc-400">
          LBR: B257186 · Permit: 10131092/0 · VAT: LU33209738
        </p>
      </div>
    </footer>
  );
}
