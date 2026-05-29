This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## JSON Blog System

Blog posts are generated from JSON files so future posts can be added without changing React code.

### Folder Structure

```txt
app/blog/page.js
app/blog/[slug]/page.js
components/blog/
content/blogs/[slug].json
lib/blogs.js
```

### Supported Block Types

- `hero`
- `heading`
- `paragraph`
- `image`
- `table`
- `faq`
- `cta`
- `lead_form`

### Add A Blog

Create one file at `content/blogs/[slug].json`. The file name should match the post slug, for example `content/blogs/sample-post.json`.

No React files need to be edited when adding a new blog. `lib/blogs.js` reads every JSON file in `content/blogs` during the build, and `app/blog/[slug]/page.js` statically generates a page for each slug.

### Rendering

`components/blog/BlogRenderer.js` maps each JSON block `type` to a React component. Unknown block types are skipped, so existing posts keep working when new optional block types are introduced later.

### SEO

Each JSON file has an `seo` object with `title` and `description`. The slug page uses those values in `generateMetadata`, including page title, description, Open Graph title, Open Graph description, and canonical URL.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
