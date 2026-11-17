type Props = {
  overline: string;
  title: string;
  items: string[];
};

export default function LandingOutcomes({ overline, title, items }: Props) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
        {overline}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-xl border border-zinc-100 bg-white p-5 text-sm leading-6 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
          >
            <SectionIcon name="check" />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}
import SectionIcon from "@/components/SectionIcon";

