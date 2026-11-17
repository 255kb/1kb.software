import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Software development`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Application development and training from a team of developers based in Luxembourg.",
  manifest: "/site.webmanifest",
  other: { "apple-mobile-web-app-title": "1kB" },
  icons: [
    {
      rel: "icon",
      url: "/favicon-32x32.png",
      href: "/favicon-32x32.png",
      type: "image/png",
      sizes: "32x32",
    },
    {
      rel: "icon",
      url: "/favicon-16x16.png",
      href: "/favicon-16x16.png",
      type: "image/png",
      sizes: "16x16",
    },
    {
      rel: "shortcut icon",
      url: "/favicon.ico",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  ],
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return children;
}
