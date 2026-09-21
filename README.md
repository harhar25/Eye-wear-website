# Harold Jey Eyewear

Production-ready Next.js website for Harold Jey Eyewear, built for local development and Vercel deployment.

## Stack

- Next.js App Router
- TypeScript
- React
- Tailwind CSS
- Framer Motion
- Lucide icons
- `next/image`

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Production Build

```bash
npm run lint
npm run type-check
npm run build
```

## Environment Variables

Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_JOTFORM_URL=https://form.jotform.com/Madjos/find-your-perfect-pair-of-eyeglass
NEXT_PUBLIC_JOTFORM_ID=262635038031046
NEXT_PUBLIC_SITE_URL=
```

The current public form URL and ID are also centralized as defaults in `lib/config.ts`, so the form works immediately. Set both Jotform variables in Vercel when replacing the form later. Only public Jotform values belong in these variables.

## Jotform and n8n

The website embeds Jotform only. The automation flow should remain:

Website -> Jotform -> n8n Webhook -> Validate Lead -> Normalize Lead -> Save Lead -> Send Confirmation Email -> Notify Business -> Future Follow-Up Automation

Do not expose n8n credentials, private webhook secrets, email credentials, or backend secrets in frontend code.

## Replace Placeholder Products

Edit `data/site.ts` and update the `products` array:

- `name`
- `category`
- `style`
- `frameShape`
- `material`
- `price`
- `image`
- optional `badge`

The UI reads from this data file, so future inventory can be connected to a CMS or database without rewriting the product cards.

## Replace Contact Information

Edit the centralized `contactDetails` object in `data/site.ts`. Phone, email, and social links are rendered as accessible links in the contact section and footer.

## Replace Images

Placeholder imagery is centralized in `eyewearImages` inside `data/site.ts`. Replace the image URLs with final product or brand photos, then keep alt text accurate and descriptive.

If you use new remote image hosts, add them to `next.config.mjs`.

## Vercel Deployment

1. Push the project to a Git repository.
2. Import the repository into Vercel.
3. Add `NEXT_PUBLIC_JOTFORM_URL` and `NEXT_PUBLIC_JOTFORM_ID` in Vercel project environment variables.
4. Add `NEXT_PUBLIC_SITE_URL` using the production domain.
5. Deploy.

## Quality Checklist

- Run linting with `npm run lint`.
- Run TypeScript checks with `npm run type-check`.
- Run the production build with `npm run build`.
- Test the mobile navigation.
- Test hash-link smooth scrolling.
- Confirm the Jotform loading, responsive embed, and direct-form fallback behavior.
- Confirm the company contact links before launch.
- Review legal pages before production use.
