import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import LandingHero from "@/components/landing/LandingHero";
import LandingCta from "@/components/landing/LandingCta";
import LandingValueProps from "@/components/landing/LandingValueProps";
import SectionIcon from "@/components/SectionIcon";
import { courses, getCourse, TRAINER_URL } from "@/lib/training";

export default async function TrainingPageContent({ locale, slug }: { locale: string; slug?: string }) {
  const t = await getTranslations("training");
  const course = slug ? getCourse(slug) : undefined;
  return (
    <>
      <LandingHero badge={t("hero.badge")} title={course ? t(`courses.${course.slug}.title`) : t("hero.title")} subtitle={course ? t(`courses.${course.slug}.summary`) : t("hero.subtitle")} primaryLabel={t("nextDates")} primaryHref={TRAINER_URL} secondaryLabel={t("contact")} secondaryHref="/contact" locale={locale} />
      {!course && <LandingValueProps title={t("credentials.title")} items={[
        { icon: "code", title: t("credentials.bootcamps.title"), body: t("credentials.bootcamps.body") },
        { icon: "book", title: t("credentials.professional.title"), body: t("credentials.professional.body") },
        { icon: "layers", title: t("credentials.public.title"), body: t("credentials.public.body") },
      ]} />}
      {course ? (
        <section className="mx-auto w-full max-w-6xl px-6 pb-16">
          <Link href="/training" className="text-sm font-medium text-brand-600 dark:text-brand-400">← {t("allCourses")}</Link>
          <div className="mt-8 grid gap-6 md:grid-cols-[2fr_1fr]">
            <article className="rounded-2xl border border-zinc-100 p-8 dark:border-zinc-800 dark:bg-zinc-900">
              <SectionIcon name={course.icon} />
              <h2 className="text-xl font-semibold">{t("topicsTitle")}</h2>
              <ul className="mt-6 space-y-4">
                {["one", "two", "three", "four", "five"].map((key) => <li key={key} className="flex gap-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />{t(`courses.${course.slug}.topics.${key}`)}</li>)}
              </ul>
            </article>
            <aside className="rounded-2xl border border-zinc-100 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900">
              <SectionIcon name="book" />
              <p className="text-sm font-semibold text-brand-700 dark:text-brand-300">{t("duration", { days: course.days })}</p>
              <h2 className="mt-5 text-lg font-semibold">{t("prerequisitesTitle")}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{t(`courses.${course.slug}.prerequisites`)}</p>
              <h2 className="mt-6 text-lg font-semibold">{t("methodTitle")}</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{t("methodBody")}</p>
            </aside>
          </div>
        </section>
      ) : (
        <section className="mx-auto w-full max-w-6xl px-6 pb-16">
          <h2 className="text-2xl font-semibold tracking-tight">{t("coursesTitle")}</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {courses.map((item) => (
              <article key={item.slug} className="flex flex-col rounded-2xl border border-zinc-100 p-8 dark:border-zinc-800 dark:bg-zinc-900">
                <SectionIcon name={item.icon} />
                <p className="mb-3 text-xs font-semibold text-brand-600 dark:text-brand-400">{t("duration", { days: item.days })}</p>
                <h3 className="text-lg font-semibold">{t(`courses.${item.slug}.title`)}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{t(`courses.${item.slug}.summary`)}</p>
                <Link href={{ pathname: "/training/[slug]", params: { slug: item.slug } }} className="mt-auto pt-6 text-sm font-medium text-brand-600 dark:text-brand-400">{t("viewCourse")} →</Link>
              </article>
            ))}
          </div>
        </section>
      )}
      <section className="border-y border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-surface-muted">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div><h2 className="text-xl font-semibold">{t("dlhTitle")}</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">{t("dlhBody")}</p></div>
            <a href={TRAINER_URL} className="shrink-0 text-sm font-medium text-brand-600 dark:text-brand-400">{t("nextDates")} →</a>
          </div>
        </div>
      </section>
      {!course && <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">{t("customTitle")}</h2>
        <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-600 dark:text-zinc-400">{t("customBody")}</p>
        <div className="mt-6 flex flex-wrap gap-2">{["JavaScript", "TypeScript", "Angular", "Node.js", "REST APIs", "Mockoon", "Git", "GitHub", "Electron", "Ionic", "Firebase"].map((topic) => <span key={topic} className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-300">{topic}</span>)}</div>
      </section>}
      <div className="pt-12"><LandingCta title={t("cta.title")} body={t("cta.body")} primaryLabel={t("contact")} primaryHref="/contact" locale={locale} /></div>
    </>
  );
}
