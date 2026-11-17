const staticPageRoutes = {
  about: {
    en: "about",
    fr: "a-propos",
  },
  privacy: {
    en: "privacy",
    fr: "confidentialite",
  },
  terms: {
    en: "terms",
    fr: "conditions",
  },
} as const;

export type StaticPageKey = keyof typeof staticPageRoutes;

export function getStaticPageRouteSlug(pageKey: StaticPageKey, locale: string) {
  return staticPageRoutes[pageKey][locale as keyof (typeof staticPageRoutes)[StaticPageKey]] ?? pageKey;
}

export function getStaticPageRouteFilename(pageKey: StaticPageKey, locale: string) {
  return `${getStaticPageRouteSlug(pageKey, locale)}.${locale}.mdx`;
}
