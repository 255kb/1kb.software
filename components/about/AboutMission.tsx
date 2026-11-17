type Props = {
  title: string;
  body: string;
};

export default function AboutMission({ title, body }: Props) {
  return (
    <article className="rounded-2xl border border-zinc-100 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">
      <SectionIcon name="rocket" />
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">{body}</p>
    </article>
  );
}
import SectionIcon from "@/components/SectionIcon";

