import SectionIcon, { type SectionIconName } from "@/components/SectionIcon";

type Item = {
  title: string;
  body: string;
  icon?: SectionIconName;
  detail?: string;
  href?: string;
  linkLabel?: string;
};

type Props = {
  title: string;
  items: Item[];
};

export default function LandingValueProps({ title, items }: Props) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <SectionIcon name={item.icon} />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.body}</p>
            {item.detail && <p className="mt-4 text-xs font-medium text-zinc-500 dark:text-zinc-400">{item.detail}</p>}
            {item.href && item.linkLabel && <a href={item.href} className="mt-auto pt-5 text-sm font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400">{item.linkLabel} <span aria-hidden="true">→</span></a>}
          </article>
        ))}
      </div>
    </section>
  );
}
