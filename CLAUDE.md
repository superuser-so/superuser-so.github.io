# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build System

**Two-stage build:** `npm run build` runs Eleventy then Vite sequentially.

1. Eleventy (`.eleventy.js`) - Generates HTML to `_site/`
2. Vite (`vite.config.js`) - Builds CSS to `_site/css/` with `emptyOutDir: false`

**Critical:** Build order matters. Vite must not clear Eleventy's output.

## Handlebars Limitations

- No built-in helpers (`eq`, `slugify`, etc.) - keep templates simple
- Blog post permalinks must be explicit in frontmatter (can't use `{{ title | slugify }}`)
- Tags must include `post` for collection listing

## Blog Post Format

```yaml
---
title: Post Title
tags:
  - post           # Required
  - category
layout: blog-post.hbs
permalink: /blog/explicit-slug/   # Required
---
```

## Tailwind v4

- Config in `src/css/main.css` via `@theme` (no JS config)
- Custom colors: `--color-primary-*`, `--color-accent-*`

## Deployment

- GitHub Pages: `https://superuser-so.github.io/`
- All links use root paths (`/pages/features/` not `../pages/features/`)
- `pathPrefix: "/"` in `.eleventy.js`
