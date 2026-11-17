type Props = {
  title: string;
  body: string;
  primaryLabel: string;
  primaryHref: string;
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

export default function LandingCta({
  title,
  body,
  primaryLabel,
  primaryHref,
  locale,
}: Props) {
  return (
    <section className="px-6 pb-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-2xl border border-brand-100 bg-brand-50/50 px-6 py-8 sm:flex-row sm:items-center sm:px-8 dark:border-zinc-800 dark:bg-zinc-900/60">
        <div>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{title}</h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">{body}</p>
        </div>
        <div className="shrink-0">
          <a
            href={localizeHref(primaryHref, locale)}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-brand-600 px-5 text-sm font-medium text-white no-underline transition-colors hover:bg-brand-700"
          >
            {primaryLabel}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
