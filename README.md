# Namibian Hockey Union

Federation website for the Namibian Hockey Union.

**Live:** [hockey.tangison.com](https://hockey.tangison.com)  
**Status:** Client production site  
**Visibility:** Public

## What this is

Public site for the NHU covering fixtures, teams, news and federation information.

## Stack

- Next.js (App Router)
- TypeScript

## Getting started

```bash
git clone https://github.com/tangison/namibian-hockey-union.git
cd namibian-hockey-union
npm install
npm run dev
```

The dev server runs on http://localhost:3000.

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start the development server. |
| `npm run build` | Production build. |
| `npm run start` | Serve the production build. |
| `npm run lint` | Run ESLint. |
| `npm run typecheck` | Run the TypeScript compiler with no emit. |

## Routes

17 page routes.

```
/
/about
/brand
/clubs
/contact
/cookies
/fixtures
/governance
/locked
/maintenance
/membership
/national-teams
/news
/privacy
/results
/sitemap
/terms
```

## Environment

Create `.env.local` for local secrets. Never commit it.

## Deployment

Deployed on Vercel. Production domains:

- `hockey.tangison.com`

## Maintainer

Built and maintained by **Tangison Technologies**, Windhoek, Namibia.

| | |
|---|---|
| Main line | [+264 83 411 522](tel:+264813411522) (`083411522`) |
| Email | contact@tangison.com |
| Web | https://tangison.com |

## Licence

Proprietary. Copyright Tangison Technologies. All rights reserved.
