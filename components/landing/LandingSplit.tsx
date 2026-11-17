type Props = {
  leftOverline: string;
  leftTitle: string;
  leftBody: string;
  rightOverline: string;
  rightTitle: string;
  rightSteps: string[];
};

export default function LandingSplit({
  leftOverline,
  leftTitle,
  leftBody,
  rightOverline,
  rightTitle,
  rightSteps,
}: Props) {
  return (
    <section className="border-y border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-surface-muted">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            {leftOverline}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{leftTitle}</h2>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">{leftBody}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400">
            {rightOverline}
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{rightTitle}</h2>
          <ul className="not-prose mt-6 list-none space-y-4 p-0">
            {rightSteps.map((step) => (
              <li key={step} className="flex gap-3 p-0">
                <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                <span className="text-sm leading-6 text-zinc-700 dark:text-zinc-300">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
