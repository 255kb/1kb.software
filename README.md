# 1kb.software

1kB's software development, products and training website. Content is ported from the old site while retaining the existing Next.js App Router, Tailwind v4 design, next-intl locales and Firebase static-export setup.

## Getting started

```bash
npm install
npm run dev
```

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run typecheck` | TypeScript checking |
| `npm run lint` | ESLint |
| `npm run build` | Production static export |
| `npm run deploy:test` | Deploy to staging |
| `npm run deploy:prod` | Deploy to production |

## Content and routes

| Content | Existing route |
|---------|----------------|
| Home | `/en`, `/fr` |
| Services | `/[locale]/services` |
| Service details | `/[locale]/services/[slug]` |
| Products (Mockoon) | `/en/products`, `/fr/produits` |
| Training | `/en/training`, `/fr/formations` |
| Course details | `/en/training/[slug]`, `/fr/formations/[slug]` |
| About | `/en/about`, `/fr/a-propos` |
| Contact | `/[locale]/contact` |

English and French UI text and course summaries live in `messages/`. About, services, contact and legal content uses the MDX system in `content/`. Former AI articles and solution content have been removed. Article routes remain available with an empty listing for future content.

Services comprise application and MVP development (including AI-assisted development guidance), code and security audits (including AI-generated applications), and hosting and stack management. Application and MVP development share one page. New hosting detail routes are `/en/services/hosting-management` and `/fr/services/hebergement-gestion`. Audit scope, active security checks and operational support terms are agreed for each engagement.

The contact form POSTs JSON to `NEXT_PUBLIC_SEND_EMAIL_API`, using the original endpoint contract (`contactName`, `contactEmail`, `contactMessage`) and a `work_address` honeypot. Optional organization information is included in the message. Configure this public endpoint in the deployment environment before building; restart the development server after changing it. A 200 response confirms delivery; failures keep the entered information and display an email fallback. Contact details use `contact@1kb.software`.

Course pages cover APIs (2 days), TypeScript (3 days), Angular (3 days), and Git/GitHub (3 days), with summaries and major topics rather than full syllabuses. Custom training topics remain listed separately. For public dates, all courses link to the DLH trainer page (`https://www.dlh.lu/shop?coaches=27794`), not individual DLH course URLs that disappear when no session is scheduled. Mockoon features distinguish the free open-source tools from Mockoon Pro.

The blue brand palette is defined in `app/globals.css`, using the old site's primary color `#1a76a6`. Brand, client and product assets are copied into `public/`; the old website is not modified.

Product metrics and training credentials are localized in `messages/`: Mockoon's history, downloads and enterprise usage, and training experience with NumericALL, Oxiane, Crescera Solutions, CNFPC and DLH. Update these claims as the figures and references evolve.
