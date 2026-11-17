import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["fr", "en"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/about": {
      en: "/about",
      fr: "/a-propos",
    },
    "/articles": "/articles",
    "/articles/[slug]": "/articles/[slug]",
    "/services": "/services",
    "/services/[slug]": "/services/[slug]",
    "/training": {
      en: "/training",
      fr: "/formations",
    },
    "/training/[slug]": {
      en: "/training/[slug]",
      fr: "/formations/[slug]",
    },
    "/contact": "/contact",
    "/products": {
      en: "/products",
      fr: "/produits",
    },
    "/privacy": "/privacy",
    "/terms": "/terms",
  },
});
