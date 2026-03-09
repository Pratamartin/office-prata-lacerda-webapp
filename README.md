# Prata, Lacerda & Videira WebApp

Institutional web application built with Next.js for the law firm Prata, Lacerda & Videira Advogadas.

## Technologies

- Next.js 15 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Nodemailer (contact form email delivery)

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
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_TO_EMAIL=contact@yourdomain.com
```

You can also copy from `.env.example`:

```bash
cp .env.example .env.local
```

### Important Notes

- The contact endpoint uses Gmail through Nodemailer.
- For Gmail accounts, use an app password (do not use your regular account password).
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

1. Configure `EMAIL_USER`, `EMAIL_PASS`, and `CONTACT_TO_EMAIL` in your provider (Vercel/server).
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
