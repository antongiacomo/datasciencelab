# CINI Lab on Data Science — Seminars

[![Vercel](https://img.shields.io/github/deployments/antongiacomo/datasciencelab/Production?logo=vercel&label=vercel&logoColor=white)](https://seminars.sesar.di.unimi.it/)

Website for the CINI National Lab on Data Science seminar series, *Tales on Data Science and Big Data*. It lists upcoming and past seminars, with speaker details, recordings, and attachments.

Live at [seminars.sesar.di.unimi.it](https://seminars.sesar.di.unimi.it/).

## Stack

- [Nuxt 4](https://nuxt.com/) with [Nuxt Content](https://content.nuxt.com/) for markdown-driven seminar pages
- [Tailwind CSS 4](https://tailwindcss.com/)
- Statically generated and deployed to GitHub Pages

## Getting started

Requires Node.js 24 or later.

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`.

## Adding a seminar

Each seminar is a markdown file under `content/seminars/`, named `YYMMDD-short-title.md` so files sort chronologically. Frontmatter fields:

```yaml
title: "Seminar title"
description: "One-line abstract, used for previews"
type: academic # academic | industry | young
date: DD-MM-YYYY
time: HH:mm
location: https://... # a meeting link, or a physical location
video_link: https://... # optional, once a recording is available
imgurl: https://... # optional social preview image
alt: "Image alt text"
resources: ["file.pdf"] # optional, files placed under public/resources/
people:
  - name: Speaker Name
    affiliation: Institution
    bio: Short bio.
    homepage: https://... # optional
```

The body of the file (below the frontmatter) is rendered as the seminar's full abstract/description.

## Build

```bash
npm run build     # production build
npm run generate  # fully static build
npm run preview   # preview a production build locally
```

Pushes to `master` trigger `.github/workflows/deployment.yml`, which runs `npm run build --preset=github_pages` and publishes the result to GitHub Pages.
