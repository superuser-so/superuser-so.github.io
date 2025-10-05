# Superuser Website

Marketing website for **Superuser** - the all-in-one analytics and customer support platform combining the best of PostHog and Intercom, designed for solopreneurs and small SaaS businesses.

## Tech Stack

- **Static Site Generator**: [Eleventy](https://www.11ty.dev/) v3
- **Build Tool**: [Vite](https://vitejs.dev/) v6
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Templating**: Handlebars
- **Content**: Markdown + YAML frontmatter for blog posts

## Project Structure

```
superuser-so/
├── src/
│   ├── _includes/         # Handlebars layouts and partials
│   │   ├── base.hbs       # Base layout
│   │   ├── header.hbs     # Header partial
│   │   ├── footer.hbs     # Footer partial
│   │   └── blog-post.hbs  # Blog post layout
│   ├── _data/             # Global data files
│   ├── assets/            # Static assets (images, fonts)
│   ├── blog/              # Blog posts (Markdown)
│   │   ├── index.hbs      # Blog listing page
│   │   └── *.md           # Individual blog posts
│   ├── css/
│   │   └── main.css       # Tailwind CSS entry point
│   ├── pages/             # Static pages
│   │   ├── features.hbs
│   │   ├── pricing.hbs
│   │   └── about.hbs
│   └── index.hbs          # Homepage
├── _site/                 # Build output (gitignored)
├── .eleventy.js           # Eleventy configuration
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js v22 or higher
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd superuser-so
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The site will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm start` - Start production preview server
- `npm run clean` - Clean the build output directory

## Writing Blog Posts

Blog posts are written in Markdown with YAML frontmatter. Create a new file in `src/blog/`:

```markdown
---
title: Your Post Title
author: Author Name
date: 2025-01-15
excerpt: A brief summary of your post
tags:
  - post
  - category1
  - category2
layout: blog-post.hbs
---

Your markdown content here...
```

## Customization

### Colors

Edit the Tailwind theme in `src/css/main.css` to customize the color scheme.

### Navigation

Update the header links in `src/_includes/header.hbs`.

### Footer

Modify footer content in `src/_includes/footer.hbs`.

## Deployment

The site generates static HTML that can be deployed to any hosting service:

1. Build the site:
   ```bash
   npm run build
   ```

2. Deploy the `_site` directory to your hosting provider (Netlify, Vercel, GitHub Pages, etc.)

## License

MIT
