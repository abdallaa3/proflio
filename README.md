# Abdullah Kmar Portfolio

A bilingual Next.js portfolio for Abdullah Kmar, built with the App Router, TypeScript, Tailwind CSS, optimized static assets, Arabic RTL as the default experience, and English LTR support.

## Routes

- `/` redirects to `/ar`
- `/ar`
- `/en`
- `/ar/campaigns`
- `/en/campaigns`
- `/ar/cv`
- `/en/cv`

## Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Build bilingual Next.js portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

## Deploy on Vercel

1. Push the project to GitHub.
2. Open Vercel and choose New Project.
3. Import the GitHub repository.
4. Keep the default Next.js settings.
5. Deploy.

## Content editing

- Main Arabic and English content is in `src/lib/content.ts`.
- Locale helpers are in `src/lib/i18n.ts`.
- Public images are in `public/assets/images`.
- The downloadable CV is `public/assets/files/abdullah-mohammed-dm-cv.pdf`.

Before final deployment, update `metadataBase` and `siteUrl` if the production domain changes.
