# Harold Jey Eyewear

Production-ready Next.js website and custom eyewear consultation for Harold Jey Eyewear.

## Stack

- Next.js App Router
- TypeScript and React
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod
- Lucide icons
- `next/image`

## Installation

```bash
npm install
```

## Development

Copy `.env.example` to `.env.local`, provide the server-side automation URL, and run:

```bash
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

```bash
N8N_WEBHOOK_URL=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`N8N_WEBHOOK_URL` is server-only. Never prefix it with `NEXT_PUBLIC_` or reference it from a client component. The browser sends consultation data to `/api/submit-lead`, and the API route relays validated JSON to the automation webhook.

## Lead Flow

```text
Website consultation
  -> POST /api/submit-lead
  -> Zod server validation
  -> n8n production webhook
  -> Lead processing
  -> Customer email
  -> Owner notification
  -> Future database storage
```

The n8n workflow receives this JSON shape:

```json
{
  "full_name": "",
  "email": "",
  "phone": "",
  "product_interest": "",
  "frame_style": "",
  "frame_shape": "",
  "frame_material": "",
  "budget": "",
  "message": ""
}
```

The API route rejects malformed data, limits request size, uses a bot honeypot, enforces an HTTPS webhook URL outside local loopback testing, and applies a request timeout. It returns generic upstream errors so automation details are not exposed to visitors.

## Consultation Content

Selection values and validation rules are centralized in `lib/lead-schema.ts`. The interactive experience lives in `components/forms/`, and the secure relay lives in `app/api/submit-lead/route.ts`.

When changing a choice, update the shared schema first so browser and server validation remain aligned. If field names change, update the corresponding n8n normalization expressions as well.

## Replace Products

Edit the `products` array in `data/site.ts`:

- `name`
- `category`
- `style`
- `frameShape`
- `material`
- `price`
- `image`
- optional `badge`

The product UI reads from this data file so inventory can later be connected to a CMS or database.

## Replace Contact Information

Edit the centralized `contactDetails` object in `data/site.ts`. Phone, email, social links, and address appear in the contact section and footer.

## Replace Images

Image assets are centralized in `eyewearImages` inside `data/site.ts`. Replace files in `public/images/` and keep the matching alt text accurate.

If a new remote image host is used, add it to `next.config.mjs`.

## Production Checks

```bash
npm run lint
npm run type-check
npm run build
```

Also verify:

- Keyboard and mobile navigation
- All six consultation steps on desktop and mobile
- Required field, email, and phone validation
- Success and upstream-error states
- The API payload against a non-production mock webhook
- The production n8n execution with one controlled test lead
- Contact and social links
- Legal copy before public launch

## Vercel Deployment

1. Import the repository into Vercel.
2. Add `N8N_WEBHOOK_URL` as a server-side Production environment variable.
3. Add `NEXT_PUBLIC_SITE_URL` using the public domain.
4. Deploy and run one controlled consultation submission.
5. Confirm the production execution and email nodes in n8n.
