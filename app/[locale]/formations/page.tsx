import TrainingPageContent from "@/components/TrainingPageContent";
import { trainingMetadata, type TrainingPageProps } from "@/lib/training";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

export const generateMetadata = trainingMetadata;
export function generateStaticParams() { return [{ locale: "fr" }]; }

export default async function FormationsPage({ params }: TrainingPageProps) {
  const { locale } = await params;
  if (locale !== "fr") notFound();
  setRequestLocale(locale);
  return <TrainingPageContent locale={locale} />;
}
