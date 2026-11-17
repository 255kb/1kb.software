import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { ArticleMeta } from "@/lib/articles";

export default function ArticleCard({
  article,
  readMoreLabel,
}: {
  article: ArticleMeta;
  readMoreLabel: string;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
      {article.image ? (
        <Image
          src={article.image}
          alt={article.title}
          width={800}
          height={320}
          className="h-40 w-full object-cover"
        />
      ) : (
        <div className="h-40 bg-linear-to-br from-brand-200 to-brand-400 dark:from-brand-900 dark:to-brand-700" />
      )}
      <div className="flex flex-1 flex-col p-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
          {article.tag}
        </span>
        <h3 className="mt-2 text-lg font-semibold leading-snug">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {article.excerpt}
        </p>
        <Link
          href={{
            pathname: "/articles/[slug]",
            params: { slug: article.slug },
          }}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-600 dark:text-brand-400"
        >
          {readMoreLabel}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14M13 6l6 6-6 6"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
