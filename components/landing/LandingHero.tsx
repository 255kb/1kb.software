type Props = {
  badge: string;
  title: string;
  subtitle: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  locale?: string;
};

function localizeHref(href: string, locale?: string) {
  if (!locale) return href;
  if (href.startsWith("/#")) {
    return `/${locale}${href.slice(1)}`;
  }
  if (href.startsWith("/")) {
    return `/${locale}${href}`;
  }
  return href;
}

export default function LandingHero({
  badge,
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  locale,
}: Props) {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,var(--color-brand-100)_0%,transparent_70%)] dark:bg-[radial-gradient(60%_50%_at_50%_0%,var(--color-brand-950)_0%,transparent_70%)] dark:opacity-30"
      />
      <div className="mx-auto max-w-4xl px-6 pt-20 pb-16 text-center sm:pt-28">
        <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700 dark:border-brand-800 dark:bg-brand-950 dark:text-brand-300">
          {badge}
        </span>
        <h1 className="text-balance mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          {title}
        </h1>
        <p className="text-balance mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {subtitle}
        </p>
        {(primaryLabel || secondaryLabel) && (
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            {primaryLabel && primaryHref && (
              <a
                href={localizeHref(primaryHref, locale)}
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand-600 px-6 text-sm font-medium text-white no-underline transition-colors hover:bg-brand-700"
              >
                {primaryLabel}
              </a>
            )}
            {secondaryLabel && secondaryHref && (
              <a
                href={localizeHref(secondaryHref, locale)}
                className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium no-underline transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-zinc-700 dark:hover:border-brand-700 dark:hover:text-brand-400"
              >
                {secondaryLabel}
              </a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
