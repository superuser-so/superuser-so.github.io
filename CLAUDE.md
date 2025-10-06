# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Marketing website for Superuser - a SaaS product combining PostHog analytics and Intercom-style customer messaging for solopreneurs and small businesses. Built as a static site using Eleventy + Vite + Tailwind CSS v4 + Handlebars.

## Development Commands

```bash
npm run dev      # Start Eleventy dev server with hot reload (http://localhost:8080)
npm run build    # Production build (runs Eleventy then Vite for CSS)
npm start        # Preview production build
npm run clean    # Remove _site/ directory
```

## Build Architecture

**Two-stage build process:**

1. **Eleventy** (`.eleventy.js`) - Generates HTML from Handlebars templates and Markdown
   - Input: `src/`
   - Output: `_site/`
   - Uses Eleventy Vite Plugin for integration
   - Processes `.hbs` templates and `.md` files (with Handlebars templating)

2. **Vite** (`vite.config.js`) - Builds CSS separately
   - Input: `src/css/main.css`
   - Output: `_site/css/main.css`
   - Tailwind CSS v4 processed via `@tailwindcss/vite` plugin
   - Runs after Eleventy, with `emptyOutDir: false` to preserve HTML

**Why this matters:** The build order is critical. Eleventy must run first to generate HTML structure, then Vite processes CSS without clearing the directory. Both configs must stay synchronized on output directory (`_site/`).

## Template System

**Handlebars limitations:**
- No built-in helpers like `eq` or `slugify` (unlike Nunjucks/Liquid)
- Cannot use filters in permalinks (e.g., `{{ title | slugify }}` doesn't work)
- Blog post permalinks must be explicitly defined in frontmatter

**Layouts:**
- `base.hbs` - Main layout with `{{> header}}` and `{{> footer}}` partials
- `blog-post.hbs` - Blog-specific layout (wraps content, not used as base layout)
- All templates use `{{{content}}}` (triple-stash) for unescaped HTML

## Blog Post Structure

Required frontmatter format:
```yaml
---
title: Post Title
author: Author Name
date: 2025-01-15
excerpt: Brief summary
tags:
  - post           # Required for Eleventy collections
  - category1
layout: blog-post.hbs
permalink: /blog/post-slug/   # Must be explicit (no slugify filter)
---
```

The `post` tag is essential - Eleventy uses `collections.post` to list all blog posts.

## Styling (Tailwind v4)

- Custom theme defined in `src/css/main.css` using `@theme` directive
- Custom color variables: `--color-primary-*` and `--color-accent-*`
- No `tailwind.config.js` needed (Tailwind v4 uses CSS-based config)
- Custom utilities: `.gradient-hero`, `.section-padding`

## GitHub Pages Deployment

- Deployed to: `https://superuser-so.github.io/`
- Uses GitHub Actions workflow: `.github/workflows/deploy.yml`
- **Important:** `pathPrefix: "/"` in `.eleventy.js` (not `/superuser-so/`)
- All internal links use root paths (e.g., `/pages/features/`, not relative paths)
- Workflow runs `npm run build` which executes both Eleventy and Vite builds
