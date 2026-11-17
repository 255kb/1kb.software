import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { buildPageMetadata } from "@/lib/seo";

export const TRAINER_URL = "https://www.dlh.lu/shop?coaches=27794";

export const courses = [
  { slug: "api", days: 2, icon: "api" },
  { slug: "typescript", days: 3, icon: "code" },
  { slug: "angular", days: 3, icon: "layers" },
  { slug: "git", days: 3, icon: "git" },
] as const;

export function getCourse(slug: string) {
  const course = courses.find((item) => item.slug === slug);
  if (!course) notFound();
  return course;
}

export function trainingPath(locale: string, slug?: string) {
  return `${locale === "fr" ? "/formations" : "/training"}${slug ? `/${slug}` : ""}`;
}

export type TrainingPageProps = { params: Promise<{ locale: string; slug?: string }> };

export async function trainingMetadata({ params }: TrainingPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "training" });
  const course = slug ? getCourse(slug) : undefined;
  return buildPageMetadata({
    title: course ? t(`courses.${course.slug}.title`) : t("hero.title"),
    description: course ? t(`courses.${course.slug}.summary`) : t("hero.subtitle"),
    locale,
    path: trainingPath(locale, slug),
    alternatePath: trainingPath(locale === "fr" ? "en" : "fr", slug),
  });
}
