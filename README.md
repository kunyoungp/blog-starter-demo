# Mindlogic Blog - Next.js Blog Starter

A statically generated blog showcasing Mindlogic's AI solutions, built with Next.js, Markdown, and TypeScript.

## About Mindlogic

Mindlogic is a generative AI technology company based in Seoul, South Korea. We create conversational AI solutions that people want to talk to more.

**Our Products:**
- **Bliss** - Persona-based chatbot application for authentic celebrity interactions
- **FactChat** - Enterprise multi-LLM platform (ChatGPT, Claude, Gemini, LLaMA)
- **Informe** - 24/7 multilingual website chatbot trained on your documents

Visit [mindlogic.ai](https://mindlogic.ai) to learn more.

## Technology Stack

This blog showcases Next.js's [Static Generation](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Running Locally

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Your blog will be running on [http://localhost:3000](http://localhost:3000)!

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/kunyoungp/blog-starter-demo&project-name=mindlogic-blog&repository-name=mindlogic-blog)

## Building for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
├── _posts/              # Blog posts in Markdown format
├── public/
│   └── assets/
│       └── blog/        # Images and assets for blog posts
├── src/
│   ├── app/
│   │   ├── _components/ # React components
│   │   ├── posts/       # Dynamic post routes
│   │   ├── layout.tsx   # Root layout with metadata
│   │   └── page.tsx     # Homepage
│   ├── interfaces/      # TypeScript interfaces
│   └── lib/            # Utility functions and constants
└── README.md
```

## Adding New Blog Posts

Create a new Markdown file in `_posts/` with the following front matter:

```markdown
---
title: "Your Post Title"
excerpt: "A brief description of your post"
coverImage: "/assets/blog/your-post/cover.jpg"
date: "2025-01-30T09:00:00.000Z"
author:
  name: Mindlogic Team
  picture: "/assets/blog/authors/mindlogic.jpeg"
ogImage:
  url: "/assets/blog/your-post/cover.jpg"
---

Your markdown content here...
```

## Contact

- **Website**: [mindlogic.ai](https://mindlogic.ai)
- **Email**: contact@mindlogic.ai
- **Location**: 331 Bongeunsa-ro, Gangnam-gu, Seoul, South Korea

# Notes

`blog-starter` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).
