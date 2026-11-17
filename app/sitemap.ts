import type { MetadataRoute } from "next";
import {
  getArticleCanonicalSlugs,
  getArticleRouteSlug,
} from "@/lib/articleRoutes";
import { SITE_URL } from "@/lib/seo";
import { courses, trainingPath } from "@/lib/training";
import {
  getSolutionCanonicalSlugs,
  getSolutionRouteSlug,
} from "@/lib/solutionRoutes";

export const dynamic = "force-static";

const LOCALES = ["en", "fr"] as const;

function withBase(path: string) {
  return `${SITE_URL}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const articleSlugs = getArticleCanonicalSlugs();
  const solutionSlugs = getSolutionCanonicalSlugs();

  const entries: MetadataRoute.Sitemap = [
    {
      url: withBase("/"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  LOCALES.forEach((locale) => {
    const aboutPath = locale === "fr" ? "/a-propos" : "/about";

    entries.push(
      {
        url: withBase(`/${locale}`),
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.9,
      },
      {
        url: withBase(`/${locale}${aboutPath}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      },
      ...(articleSlugs.length > 0
        ? [
            {
              url: withBase(`/${locale}/articles`),
              lastModified: now,
              changeFrequency: "weekly" as const,
              priority: 0.8,
            },
          ]
        : []),
      {
        url: withBase(`/${locale}/services`),
        lastModified: now,
        changeFrequency: "weekly",
        priority: 0.8,
      },
      {
        url: withBase(`/${locale}/contact`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: withBase(`/${locale}${locale === "fr" ? "/produits" : "/products"}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: withBase(`/${locale}${trainingPath(locale)}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      },
      {
        url: withBase(`/${locale}/privacy`),
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.3,
      },
      {
        url: withBase(`/${locale}/terms`),
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.3,
      }
    );

    articleSlugs.forEach((slug) => {
      entries.push({
        url: withBase(`/${locale}/articles/${getArticleRouteSlug(slug, locale)}`),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });

    solutionSlugs.forEach((slug) => {
      entries.push({
        url: withBase(
          `/${locale}/services/${getSolutionRouteSlug(slug, locale)}`
        ),
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
      });
    });
    courses.forEach(({ slug }) => entries.push({
      url: withBase(`/${locale}${trainingPath(locale, slug)}`),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }));
  });

  return entries;
}
