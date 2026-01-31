# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
npm run dev                # Start dev server on port 3000

# Building & Production
npm run build             # Build for production
npm run preview           # Preview production build

# Code Quality
npm run lint              # Lint with Biome
npm run format            # Format with Biome
npm run check             # Run all Biome checks (lint + format)

# Testing
npm run test              # Run Vitest tests
```

## Adding Components

Use shadcn to add new UI components:

```bash
pnpm dlx shadcn@latest add button
```

## Architecture Overview

### TanStack Start Framework

This is a **TanStack Start** application (SSR-enabled React framework) using:
- **TanStack Router** (v1.132.0) - File-based routing with SSR
- **TanStack Query** - Server state management with SSR integration
- **React 19.2.0** - Latest React with full SSR support
- **Vite 7** - Build tool with Nitro server runtime

### Routing System

**File-based routing** in `src/routes/`:
- Routes map 1:1 to files (e.g., `kontakt.tsx` → `/kontakt`)
- `__root.tsx` - Root layout with Navigation, devtools, and HTML shell
- Route tree auto-generated in `src/routeTree.gen.ts` by TanStack Router plugin
- Each route uses `createFileRoute()` and exports SEO metadata

**Key route pattern:**
```tsx
export const Route = createFileRoute('/path')({
  component: ComponentName,
  meta: () => [
    { title: 'Page Title' },
    { name: 'description', content: '...' }
  ]
})
```

**Router configuration** in `src/router.tsx`:
- Creates router with SSR query integration via `setupRouterSsrQueryIntegration()`
- Wraps routes with `QueryClientProvider`
- Provides `queryClient` through router context

### i18n Configuration

**Two-tone language system** (`src/lib/i18n.ts`):
- `fo` - Formal tone (default)
- `ca` - Casual tone

**Key features:**
- i18next with browser language detector
- Cookie-based persistence (`i18nextLng`, 1 year expiry)
- SSR support via `setSSRLanguage()` (reads cookie on server)
- Translation files: `src/lib/dict/formal.json` and `src/lib/dict/causual.json` (note: typo in filename)

**Usage:**
```tsx
const { t } = useTranslation()
t("services.visibility.title")
t("home.benefits.items", { returnObjects: true }) // Returns object/array
```

**Language switching:**
- `ToneToggle` component in Navigation
- Toggles between formal/casual with `i18n.changeLanguage()`

### Component Architecture

**UI Components** (`src/components/ui/`):
- Built with shadcn/ui + Radix UI primitives
- Uses Class Variance Authority (CVA) for variants
- Tailwind CSS with oklch color system
- Implements `asChild` pattern via Radix Slot

**Custom Components** (`src/components/custom/`):
- `ToneToggle` - Language tone switcher
- `TWMIcon` - Custom logo component

**Animated Components** (`src/components/animate-ui/`):
- Advanced animation system using Motion (Framer Motion v12.23.26)
- `AnimateIcon` - Context-based animation with multiple triggers:
  - `animateOnHover`, `animateOnTap`, `animateOnView`
  - Supports loop, delay, persist modes
- Icon components (e.g., `AudioLines`) inherit animation context
- Custom `Slot` primitive merges motion props and refs

**Navigation** (`src/components/navigation/`):
- Fixed top navigation with logo, links, and tone toggle
- Uses TanStack Router `Link` for SPA navigation
- Radix NavigationMenu with dropdown for services

### State Management & Data Fetching

**TanStack Query:**
- Setup in `src/integrations/tanstack-query/root-provider.tsx`
- Creates fresh QueryClient per SSR request
- Integrated with router via `MyRouterContext`

**Current data pattern:**
- App is content-driven (no active API calls yet)
- Ready for data fetching via Query hooks or route loaders

### Path Aliases

TypeScript paths configured in `tsconfig.json`:
- `@/*` → `./src/*`

Use imports like:
```tsx
import { Button } from '@/components/ui/button'
```

### Environment Variables

Type-safe env config using `@t3-oss/env-core` in `src/env.ts`.

Add new variables to `src/env.ts` schema, then use:
```tsx
import { env } from '@/env'
console.log(env.VITE_APP_TITLE)
```

### Styling System

- **Tailwind CSS 4** via `@tailwindcss/vite`
- **Global styles** in `src/styles.css`
- **Color system:** oklch custom properties with light/dark modes
- **Animations:** tw-animate-css (v1.3.6) utilities

### Key Utilities

- `src/lib/utils.ts` - `cn()` helper (clsx + tailwind-merge)
- `src/hooks/use-is-in-view.tsx` - Intersection observer for scroll animations

## Important Notes

- Demo files prefixed with `demo` can be deleted
- Route tree (`routeTree.gen.ts`) is auto-generated - don't edit manually
- Navigation component is in root layout, appears on all pages
- SSR is enabled - be mindful of server/client code boundaries
- Use `createIsomorphicFn()` for functions that run on both server and client
