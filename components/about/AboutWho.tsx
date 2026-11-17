type Props = {
  title: string;
  items: string[];
};

export default function AboutWho({ title, items }: Props) {
  return (
    <article className="rounded-2xl border border-zinc-100 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
      <SectionIcon name="code" />
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <ul className="mt-5 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-6 text-zinc-700 dark:text-zinc-300"
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-brand-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
import SectionIcon from "@/components/SectionIcon";

