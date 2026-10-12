# Ingrain Global — ingrain.global

Website for **Ingrain Global Standard Private Limited (IGS)**, an international ISO certification
body based in Madurai, India. Built from the tmpartner.in Next.js project (same architecture,
components and conventions) and re-written with the content, navigation and pages of the reference
site **ingrain.world**. Colours use the **tmpartner.in maroon theme** (`#60080e` / `#7a1017` /
`#82575b`, set on `:root` in `app/globals.css`); the logo is the official INGRAIN SVG
(`public/images/igs/ingrain-logo.svg`, plus a white `ingrain-logo-light.svg` for the footer).

> This is a **separate project folder**. Nothing in the tmpartner.in project was modified; the
> two sites deploy independently.

## Tech stack (unchanged from tmpartner.in)

- Next.js 15 (App Router), React 19
- Bootstrap 5 + Bootstrap Icons, plain CSS in `app/globals.css` (design tokens on `:root`)
- AOS scroll animations, Nodemailer (SMTP) for all forms
- **New:** `@fontsource/tinos` + `@fontsource/open-sans` — the ingrain.world fonts, self-hosted so
  builds don't depend on reaching Google Fonts

## Commands

```bash
npm install                 # install dependencies
cp .env.example .env.local  # then fill in SMTP details (see below)
npm run dev                 # local dev server → http://localhost:3000
npm run build               # production build
npm run start               # serve the production build (port 3000, or -p <port>)
npm run fetch-assets        # copy ingrain.world images + PDFs into /public (see "Assets")
```

## Pages

| Route | Content (from ingrain.world) |
|---|---|
| `/` | Hero ("Struggling with ISO Certification? We Make It Simple."), stats, About IGS, services, why IGS, certification process, FAQ + Request a Call Back, testimonials, latest news |
| `/about-us` | Where it all began (2008), growth timeline (2014 / 2022 / 2024), what makes us unique, mission & vision, founders |
| `/services` and `/services/[slug]` | Auditor Training Program (25 courses), ISO 9001, 14001, 45001, 27001, 22000, HACCP, HALAL — overview, benefits, summary |
| `/accreditation` | Accreditation statement, GAC / IAF / Exemplar Global |
| `/public-information` | 17 policy & procedure documents (profile, org chart, impartiality, certification rules, complaints, CB transfer) |
| `/news` and `/news/[slug]` | ISO 9001:2026, ISO 14001:2026, Exemplar Global transition guidance |
| `/apply-online` | Full certification application form (all fields from the reference) |
| `/verify-certificate` | Organization / Auditor certificate verification request |
| `/contact` | Head office, associate partners (Brazil, Chennai), hours, form, map |
| `/faq`, `/testimonials` | 5 FAQs, 5 client testimonials |
| `/terms-and-conditions`, `/training-terms`, `/privacy-policy` | Legal pages from the reference |

Old ingrain.world URLs (`/services/iso-90012015`, `/news/detail/...`) **301-redirect** to the new
routes (see `next.config.mjs`), so existing links and search results keep working if
ingrain.world is pointed at this app.

## Environment variables

| Variable | Required | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | recommended | Canonical domain, e.g. `https://ingrain.global` (default). Drives canonical URLs, sitemap, Open Graph and JSON-LD. Use `https://www.ingrain.global` instead if www is your primary. |
| `NEXT_PUBLIC_ASSET_MODE` | optional | `remote` (default) loads images/PDFs from ingrain.world; `local` loads the copies made by `npm run fetch-assets`. |
| `EMAIL_HOST`, `EMAIL_PORT`, `EMAIL_USER`, `EMAIL_PASS` | **yes, for forms** | SMTP mailbox used to send form emails (Hostinger: `smtp.hostinger.com`, port 465). |
| `EMAIL_FROM_NAME` | optional | Sender name (default "Ingrain Global Website"). |
| `ADMIN_EMAIL` / `CONTACT_RECEIVER` | optional | Inbox that receives enquiries, call-backs, applications, verification requests and subscribers (defaults to `EMAIL_USER`). |
| `NEXT_PUBLIC_GA_ID` | optional | Google Analytics 4 ID. |
| `GOOGLE_SITE_VERIFICATION` | optional | Search Console HTML-tag verification value. |

`NEXT_PUBLIC_*` values are baked in at build time — rebuild after changing them.

Without SMTP variables the site works fully, but form submissions show "Sorry! Something went
wrong" and the server log says `Email is not configured`.

## Forms → email

All forms post to API routes that email the IGS inbox (and auto-reply where relevant):

- `/api/contact` — contact page + homepage "Request a Call Back"
- `/api/apply` — Apply Online (every field is included in the email)
- `/api/verify` — certificate verification requests (IGS replies to the requester)
- `/api/subscribe` — footer "Subscribe Us"

## Assets (logo, images, PDFs)

The logo is bundled locally (`public/images/igs/`). Service images, news images and
public-information PDFs are the files published on ingrain.world. By default the site loads them **directly from ingrain.world**, so it works on day
one. Before ingrain.world is retired or redirected:

1. Run `npm run fetch-assets` on a machine with internet access → files land in
   `public/images/igs/` and `public/documents/`
2. Set `NEXT_PUBLIC_ASSET_MODE=local` and rebuild/redeploy

If an image can't load, a branded placeholder (or the text "IGS" wordmark for the logo) is shown
instead of a broken image.

Generated for this project (not from ingrain.world): `app/icon.png`, `app/apple-icon.png`
(maroon "IGS" favicon) and `public/images/og-cover.jpg` (1200×630 share image). Replace them with
official artwork if you have it.

## Deploying to ingrain.global

**Vercel (simplest)**
1. Push this folder to its own Git repository (separate from tmpartner.in) and import it in Vercel
2. Add the environment variables above (Project → Settings → Environment Variables)
3. Project → Settings → Domains → add `ingrain.global` and `www.ingrain.global`
4. At your domain registrar's DNS: `A @ → 76.76.21.21` and `CNAME www → cname.vercel-dns.com`
   (Vercel shows the exact values), then pick one as primary — the other redirects to it

**Hostinger Node.js app / VPS**
1. Upload the project (without `node_modules` and `.next`), set the environment variables in the
   panel
2. Build command `npm install && npm run build`, start command `npm run start`
3. Point the `ingrain.global` A record to the server and enable SSL
4. On a VPS, run with a process manager, e.g. `pm2 start npm --name ingrain -- start -- -p 3001`,
   and proxy the domain to that port with Nginx — use a different port from tmpartner.in

**After going live:** add `https://ingrain.global` as a property in Google Search Console and submit
`https://ingrain.global/sitemap.xml`. If you later point ingrain.world at this app, the redirects
above preserve its old service and news URLs.

## Editing content

All text lives in `data/`:
- `data/siteConfig.js` — name, phones, email, address, hours, associates, social links
- `data/services.js` — services, benefits, training course lists
- `data/content.js` — testimonials, FAQs, timeline, certification steps, public documents, news
- `data/team.js` — founders
- `data/assets.js` — image/PDF locations

## Project structure

```
app/            Routes (App Router); api/ holds the 4 form endpoints
components/     Navbar (with black top bar), Footer, Logo, SmartImage, Breadcrumb, ...
sections/       Page sections (Hero, ServicesOverview, ApplyForm, NewsPreview, ...)
data/           All content and configuration
lib/            seo.js (metadata + JSON-LD), mailer.js (SMTP + email templates), format.js
scripts/        fetch-assets.mjs
```
