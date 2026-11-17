import type { SVGProps } from "react";

const paths = {
  code: "m8 8-4 4 4 4m8-8 4 4-4 4m-3-11-2 14",
  book: "M12 6v15M3 4h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5v15h-5a4 4 0 0 0-4 2 4 4 0 0 0-4-2H3Z",
  layers: "m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5",
  rocket: "M14 5c3-2 6-2 7-2 0 1 0 4-2 7l-7 7-5-5 7-7ZM7 12H3l4-5h5m0 10v4l5-4v-5M6 16l-3 5 5-3M15 7h2",
  check: "m5 12 4 4L19 6M4 4h6m10 10v6H4V4",
  api: "M8 5H4v14h4m8-14h4v14h-4M8 12h8m-3-3 3 3-3 3",
  git: "M6 5v10m0 4v-4m12-6v2a4 4 0 0 1-4 4H6M6 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM6 17a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
  server: "M3 3h18v7H3Zm0 11h18v7H3ZM7 6h.01M7 17h.01m4-11h6m-6 11h6",
} as const;

export type SectionIconName = keyof typeof paths;

export default function SectionIcon({ name = "layers", className = "", ...props }: SVGProps<SVGSVGElement> & { name?: SectionIconName }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`mb-4 h-6 w-6 shrink-0 text-brand-600 dark:text-brand-400 ${className}`} {...props}>
      <path d={paths[name]} />
    </svg>
  );
}
