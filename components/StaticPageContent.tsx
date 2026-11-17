import { renderMdx } from "@/lib/mdx";
import { getStaticPageContent } from "@/lib/static-pages";
import type { StaticPageKey } from "@/lib/staticPageRoutes";

type Props = {
  category: StaticPageKey;
  locale: string;
};

export default async function StaticPageContent({ category, locale }: Props) {
  const source = getStaticPageContent(category, locale);
  const MdxContent = await renderMdx(source, locale);

  return (
    <div className="mx-auto w-full max-w-3xl px-6 py-20">
      <div className="prose prose-zinc max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-brand-600 dark:prose-a:text-brand-400 prose-hr:border-zinc-200 dark:prose-hr:border-zinc-700">
        <MdxContent />
      </div>
    </div>
  );
}
