import TrainingPageContent from "@/components/TrainingPageContent";
import { courses, getCourse, trainingMetadata, type TrainingPageProps } from "@/lib/training";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export const generateMetadata = trainingMetadata;
export function generateStaticParams() { return courses.map(({ slug }) => ({ locale: "en", slug })); }

export default async function TrainingCoursePage({ params }: TrainingPageProps) {
  const { locale, slug } = await params;
  if (locale !== "en" || !slug) notFound();
  const course = getCourse(slug);
  setRequestLocale(locale);
  return <TrainingPageContent locale={locale} slug={course.slug} />;
}
