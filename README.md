# Prata, Lacerda & Videira WebApp

Institutional web application built with Next.js for the law firm Prata, Lacerda & Videira Advogadas.

## Technologies

- Next.js 15 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Brevo API (contact form email delivery)

## Main Structure

```text
src/
  app/
    api/contact/route.ts      # Contact endpoint
    layout.tsx                # Global layout and metadata
    page.tsx                  # Home
    about/page.tsx            # About
    areas/page.tsx            # Practice areas
    article/page.tsx          # Articles and publications
    contact/page.tsx          # Contact page
  components/
    header/
    footer/
    section-hero/
    section-areas/
    section-about/
    section-contact/
```

## Prerequisites

- Node.js 20+
- npm 10+

## Installation

```bash
npm install
```

## Environment Variables

Create a `.env.local` file at the project root:

```env
BREVO_API_KEY=your-brevo-api-key
BREVO_FROM_EMAIL=your-verified-sender@domain.com
BREVO_FROM_NAME=Prata, Lacerda & Videira
CONTACT_TO_EMAIL=contact@yourdomain.com
```

You can also copy from `.env.example`:

```bash
cp .env.example .env.local
```

### Important Notes

- The contact endpoint uses Brevo via HTTP API (recommended for Railway and other cloud platforms).
- `BREVO_FROM_EMAIL` must be a verified sender in Brevo.
- The backend validates email format before sending.
- The endpoint has a basic per-IP rate limit (returns HTTP 429 on excessive attempts).
- Without these variables, the `/api/contact` API returns HTTP 500 due to missing configuration.

## Scripts

```bash
npm run dev      # Development environment
npm run lint     # Lint
npm run build    # Production build
npm run start    # Start production server
```

## Routes

- /
- /about
- /areas
- /article
- /contact
- /api/contact (POST)

## Deploy

### Recommended Checklist

1. Configure `BREVO_API_KEY`, `BREVO_FROM_EMAIL`, `BREVO_FROM_NAME`, and `CONTACT_TO_EMAIL` in your provider (Railway/Vercel/server).
2. Run local validations:

```bash
npm run lint
npm run build
npm audit --omit=dev
```

3. Make sure links and static files in `public/` are correct.

## Contact Endpoint

- Method: `POST`
- Route: `/api/contact`
- Expected JSON body:

```json
{
  "nome": "Name",
  "email": "email@dominio.com",
  "telefone": "(92) 99999-9999",
  "areaAtuacao": "Environmental Law",
  "mensagem": "Message"
}
```

### Common Responses

- `200`: email sent successfully.
- `400`: invalid payload or invalid email.
- `429`: too many attempts from the same IP in a short period.
- `500`: internal error or missing environment configuration.

## License

All rights reserved to https://www.linkedin.com/in/martinho-prata/
