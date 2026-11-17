import TrainingPageContent from "@/components/TrainingPageContent";
import { courses, getCourse, trainingMetadata, type TrainingPageProps } from "@/lib/training";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export const generateMetadata = trainingMetadata;
export function generateStaticParams() { return courses.map(({ slug }) => ({ locale: "fr", slug })); }

export default async function FormationPage({ params }: TrainingPageProps) {
  const { locale, slug } = await params;
  if (locale !== "fr" || !slug) notFound();
  const course = getCourse(slug);
  setRequestLocale(locale);
  return <TrainingPageContent locale={locale} slug={course.slug} />;
}
