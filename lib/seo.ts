import type { Metadata } from "next";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://1kb.software";

export const SITE_NAME = "1kB";

type PageMetaInput = {
  title: string;
  description: string;
  locale: string;
  path: string;
  alternatePath?: string;
  image?: string;
  absoluteTitle?: boolean;
};

export function buildPageMetadata({
  title,
  description,
  locale,
  path,
  alternatePath,
  image,
  absoluteTitle,
}: PageMetaInput): Metadata {
  const altLocale = locale === "fr" ? "en" : "fr";
  const altOgLocale = locale === "fr" ? "en_US" : "fr_FR";
  const url = `${SITE_URL}/${locale}${path}`;
  const altUrl = `${SITE_URL}/${altLocale}${alternatePath ?? path}`;
  const ogImage = image ?? `${SITE_URL}/android-chrome-512x512.png`;
  const ogImageEntry = image
    ? { url: ogImage }
    : { url: ogImage, width: 512, height: 512 };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: {
        [locale]: url,
        [altLocale]: altUrl,
        "x-default": `${SITE_URL}/en${locale === "en" ? path : alternatePath ?? path}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: [altOgLocale],
      type: "website",
      images: [ogImageEntry],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
