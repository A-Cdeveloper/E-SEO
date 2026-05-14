# E-SEO TEAM Website

A multilingual marketing site for E-SEO TEAM (web development and SEO). Built with **Next.js 16** (App Router), **React 19**, **TypeScript**, **PostgreSQL**, and **next-intl**.

Keep dependencies aligned with security advisories (e.g. [Next.js security releases](https://vercel.com/changelog/next-js-may-2026-security-release)).

## Live site

**[www.e-seo.info](https://www.e-seo.info)**

## Features

- **Locales**: English (`/en`) and Serbian (`/rs`) via `messages/*.json` and `src/i18n/`
- **UI**: Tailwind CSS, Framer Motion
- **Portfolio**: Prisma + PostgreSQL, client-side filters/pagination
- **Contact**: Server Actions, Zod validation, Resend + React Email templates
- **Rendering**: SSG for home, about, and contact (per locale); portfolio remains dynamic with cached DB reads
- **Edge**: `src/proxy.ts` (Next 16 proxy convention) wrapping `next-intl` routing

## Tech stack

| Area | Choices |
|------|---------|
| Framework | Next.js 16 (App Router, Turbopack build) |
| UI | React 19, Tailwind CSS, Framer Motion |
| i18n | next-intl v4 |
| Data | Prisma 5, PostgreSQL |
| Email | Resend, React Email (`@react-email/*`) |
| Quality | ESLint 9 + `eslint-config-next`, TypeScript strict |

## Project layout

```
src/
├── app/
│   ├── [locale]/           # Localized routes + layout + globals.css
│   ├── _components/        # Shared UI, portfolio widgets, etc.
│   └── _actions/           # Server actions (e.g. contact)
├── i18n/                   # Routing + request config for next-intl
├── db/                     # Prisma singleton
├── email-templates/        # React Email templates
├── utils/                  # Zod helpers, contact rate limit, …
└── images/

messages/                   # en.json, rs.json
prisma/schema.prisma
src/proxy.ts                # next-intl proxy (replaces legacy middleware file name)
```

## Prerequisites

- **Node.js 20+** (recommended for Next 16)
- **PostgreSQL** (connection string for Prisma)
- **Resend API key** if you want to send mail from the contact form

## Environment

Use **`.env.development`** locally and **`.env.production`** (or your host’s env UI) in production. Common variables:

| Variable | Purpose |
|----------|---------|
| `POSTGRES_URL` | Prisma / PostgreSQL connection |
| `RESEND_API_KEY` | Outbound mail from the contact form |
| `CONTACT_RATE_LIMIT_MAX` | Optional; default `5` submissions per IP window |
| `CONTACT_RATE_LIMIT_WINDOW_MS` | Optional; default `900000` (15 minutes) |
| `ENABLE_HSTS` | Set to `true` on non-Vercel HTTPS hosts if you want HSTS (Vercel production sets `VERCEL_ENV` automatically) |

**Resend `from` address:** not read from env. Production uses the verified sender constant in `src/app/_actions/index.ts` (`CONTACT_FORM_FROM`). In **`next dev`**, the code uses Resend’s **`onboarding@resend.dev`** sandbox sender so local testing does not require your domain `from`.

## Scripts

```bash
npm run dev          # next dev
npm run build        # prisma generate && next build
npm run start        # next start
npm run lint         # next lint
```

Prisma Studio (with dotenv files you maintain):

```bash
npm run pstudiolocal
npm run pstudioprod
```

## i18n

1. Add strings under `messages/<locale>.json`
2. Register locales in `src/i18n/routing.ts`
3. Use `next-intl` hooks / `getTranslations` in components and server modules

## Security headers

`next.config.mjs` sets baseline **CSP**, **Referrer-Policy**, **Permissions-Policy**, **nosniff**, and **HSTS** when `VERCEL_ENV === "production"` or `ENABLE_HSTS=true`. Tighten CSP further (e.g. nonces) if you add third-party scripts.

## Deployment

Deployed on **Vercel** (typical: production env vars + PostgreSQL provider such as Neon).

## License

Private and proprietary to E-SEO TEAM.

## Contact

- **Phone**: +381 63 7675989
- **Email**: kontakt@e-seo.info
- **Website**: [www.e-seo.info](https://www.e-seo.info)
