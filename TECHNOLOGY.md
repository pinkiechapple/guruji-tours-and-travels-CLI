# Technology Stack - bookdelhitempotraveller.com

## Core Framework & Language

| Technology | Version | Purpose |
|---|---|---|
| React | 18.3.1 | UI component library |
| TypeScript | 5.5.3 | Type-safe JavaScript |
| React Router | 7.13.1 | Client-side routing (SPA) |

## Build & Development

| Technology | Version | Purpose |
|---|---|---|
| Vite | 5.4.2 | Build tool & dev server |
| @vitejs/plugin-react | 4.3.1 | React Fast Refresh & JSX support |
| ES Modules | - | Native module system |

## Styling & Design

| Technology | Version | Purpose |
|---|---|---|
| Tailwind CSS | 3.4.1 | Utility-first CSS framework |
| PostCSS | 8.4.35 | CSS transformation pipeline |
| Autoprefixer | 10.4.18 | Vendor prefix generation |
| Google Fonts | - | Inter & Poppins typefaces |

## Icons & UI

| Technology | Version | Purpose |
|---|---|---|
| Lucide React | 0.344.0 | SVG icon library |

## Backend & Database

| Technology | Version | Purpose |
|---|---|---|
| Supabase | 2.57.4 | PostgreSQL database, auth, and real-time subscriptions |

## Code Quality

| Technology | Version | Purpose |
|---|---|---|
| ESLint | 9.9.1 | JavaScript/TypeScript linter |
| typescript-eslint | 8.3.0 | TypeScript-specific linting rules |
| eslint-plugin-react-hooks | 5.1.0 | React Hooks best practices |
| eslint-plugin-react-refresh | 0.4.11 | Fast Refresh compatibility checks |

## SEO & Performance

| Feature | Implementation |
|---|---|
| Structured Data | JSON-LD (LocalBusiness, Service, FAQ, BreadcrumbList, WebSite schemas) |
| Open Graph | Full OG meta tags for social sharing |
| Twitter Cards | Summary large image cards |
| Geo Tags | Geo-targeted meta for local SEO |
| Sitemap | XML sitemap for all pages |
| Robots.txt | Crawler directives |
| Canonical URLs | Per-page canonical links |
| Dynamic Meta | SEOHead component for per-page titles & descriptions |

## Hosting & Deployment

| Service | Purpose |
|---|---|
| Netlify / Static hosting | SPA hosting with `_redirects` for client-side routing |
| Supabase Edge Functions | Serverless backend (Deno runtime) |

## Custom Configuration

### Tailwind Theme Extensions
- Custom color palette: brand (goldenrod), charcoal (grays), WhatsApp green
- Custom animations: fade-in, slide-up, bounce-gentle, count-up
- Custom font families: heading (Poppins), body (Inter)

### TypeScript
- Target: ES2020
- Module: ESNext
- Strict mode enabled
- Path aliases configured

### Vite
- React plugin with Fast Refresh
- Lucide React excluded from dependency pre-bundling for optimal tree-shaking

## Architecture

- **Pattern**: Single Page Application (SPA)
- **Routing**: Client-side with React Router v7
- **State**: React Context (Language toggle)
- **Code Splitting**: Lazy-loaded pages via React.lazy + Suspense
- **Responsive**: Mobile-first with Tailwind breakpoints
- **Bilingual**: English/Hindi language support
