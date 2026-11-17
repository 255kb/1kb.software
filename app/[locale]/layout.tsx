import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function buildOrganizationJsonLd(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-square-large.png`,
    description:
      "Application development and training from a team of developers based in Luxembourg.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: `${SITE_URL}/${locale}/contact`,
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const organizationJsonLd = buildOrganizationJsonLd(locale);

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <NextIntlClientProvider>
          <div className="flex flex-1 flex-col bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
            <Header locale={locale} />
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer locale={locale} />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
