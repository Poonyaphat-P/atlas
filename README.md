# ATLAS

### Fashion E-Commerce Storefront

ATLAS is a full-stack e-commerce prototype for discovering footwear and apparel, exploring product collections, and managing a shopping cart and wishlist. Built with Next.js, TypeScript, and PostgreSQL, it combines a visual storefront with database-backed shopping interactions.

## Features

- **Product discovery** — Browse men's, women's, and kids' collections, new arrivals, and sale items.
- **Product details** — Explore image galleries, descriptions, pricing, available sizes, and stock information through dedicated product URLs.
- **Shopping cart** — Add products by size, adjust quantities, remove items, and view a calculated subtotal, tax, shipping, and total.
- **Wishlist** — Save and remove favorite products with persistent database storage.
- **Storefront presentation** — Promotional slideshows, product carousels, collection banners, and reusable navigation components.
- **Authentication integration** — Supabase clients and session-refresh handling, with email/password registration and sign-in under development.

## Tech Stack

| Layer | Technologies |
| --- | --- |
| Framework | Next.js 16 App Router, React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Database | PostgreSQL |
| Data access | Prisma ORM 7, PostgreSQL driver adapter |
| Authentication | Supabase Auth, Supabase SSR |
| Server mutations | Next.js Server Actions |
| Icons | Lucide React, React Icons |

## How It Works

Server Components query PostgreSQL through Prisma to render product collections and product detail pages. Client Components handle interactions such as image selection, size selection, and cart updates. Server Actions persist cart and wishlist changes and revalidate the relevant pages.

Supabase manages authentication sessions separately from the Prisma application data. Cart and wishlist operations currently use demo data; connecting them to the authenticated user's identity is a planned improvement.

## Getting Started

### Prerequisites

- Node.js compatible with Next.js 16 and Prisma 7 (Node.js 22.12+ recommended)
- npm
- A PostgreSQL database
- A Supabase project for authentication

### 1. Clone and install

```bash
git clone https://github.com/Poonyaphat-P/atlas.git
cd atlas
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```dotenv
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE"
DIRECT_URL="postgresql://USER:PASSWORD@HOST:5432/DATABASE"
NEXT_PUBLIC_SUPABASE_URL="https://YOUR_PROJECT.supabase.co"
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY="YOUR_SUPABASE_PUBLISHABLE_KEY"
```

`DATABASE_URL` is used by the application. Prisma CLI uses `DIRECT_URL` when provided and otherwise falls back to `DATABASE_URL`. For hosted databases with connection pooling, use the provider's direct connection URL for migrations.

Keep database credentials in your local environment; `.env` files are excluded from version control.

### 3. Initialize the database

Apply the existing migrations to your development database and generate the Prisma client:

```bash
npx prisma migrate deploy
npx prisma generate
```

Optionally populate a development database with sample products and demo cart data:

```bash
npx --yes tsx prisma/seed.ts
```

### 4. Start development

```bash
npm run dev
```

Open [localhost:3000](http://localhost:3000).

## Available Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npx prisma generate` | Generate the Prisma client |
| `npx prisma migrate deploy` | Apply existing database migrations |
| `npx prisma studio` | Inspect database records locally |

Database-backed pages require a configured, accessible database. Generate the Prisma client before building on a fresh installation.

## Project Structure

```text
prisma/
  migrations/           Database migration history
  schema.prisma         Application data models
  seed.ts               Sample products and demo data
src/
  app/                  App Router pages and layouts
    product/[slug]/     Dynamic product detail pages
    cart/               Shopping cart and price summary
    favorite/           Saved products
  components/           Storefront UI components
  lib/
    actions/            Cart and wishlist Server Actions
    supabase/           Browser and server authentication clients
    prisma.ts           Shared database client
  proxy.ts              Supabase session refresh
public/
  pictures/             Storefront imagery
```

## Development Status

ATLAS is an evolving portfolio project. Product browsing, cart mutations, and wishlist persistence are implemented. Current limitations and planned improvements include:

- Associate carts and favorites with authenticated users instead of demo records.
- Complete authentication UI integration; Google sign-in and password reset are not implemented.
- Implement checkout, payment processing, and order placement. Order models exist, but the checkout button currently has no transaction flow.
- Implement product search; the current search field is a UI placeholder.
- Refine mobile layouts, replace placeholder copy, and expand validation and automated test coverage.
