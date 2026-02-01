# Implementation Plan: Navigation & Leistungen Updates

## Overview

Two major update areas:
1. **Navigation** - Fix links, improve mobile UX
2. **Leistungen** - Replace cards with section components, implement anchor navigation

---

## Part 1: Navigation Updates

### 1.1 Make Service Cards Clickable (Desktop)

**Current State:** Only the heading text inside each service card is a link.

**Target:** The entire card should be clickable as a link.

**Files to modify:**
- `src/components/navigation/index.tsx`

**Changes:**
- Wrap the entire service card `<div>` with TanStack Router `<Link>` component
- Apply hover styles to the full card area
- Ensure cursor pointer and focus states work on the card level

---

### 1.2 Fix Subsublinks (Full DOM Refresh Issue)

**Current State:** Desktop sublinks use `<a href={...}>` anchor tags which cause full page refresh.

**Target:** Use TanStack Router `<Link>` components for SPA navigation.

**Files to modify:**
- `src/components/navigation/index.tsx`

**Changes:**
- Replace `<a href={${service.href}#${sublink.anchor}}>` with:
  ```tsx
  <Link to={service.href} hash={sublink.anchor}>
  ```
- Import `Link` from `@tanstack/react-router`
- This enables client-side navigation + hash scrolling

---

### 1.3 Mobile Navigation Redesign

**Current State:**
- TWMLogoIcon shown on top left
- Border-b on top navbar
- Burger menu opens but not full width

**Target:**
- Single fixed burger button (top left, outline border)
- Remove TWMLogoIcon on mobile
- Remove border-b from topbar on mobile
- Full-width opening animation

**Files to modify:**
- `src/components/navigation/mobile-nav.tsx`
- `src/components/navigation/index.tsx` (if mobile toggle is here)

**Changes:**

1. **Remove TWMLogoIcon on mobile:**
   - Add `hidden md:flex` or similar to logo container
   - Or conditionally render based on viewport

2. **Remove border-b on mobile:**
   - Change `border-b` to `md:border-b` or `border-b-0 md:border-b`

3. **Burger button styling:**
   - Add outline border: `border border-border rounded-md`
   - Position: fixed top-left
   - Remove any background, keep only outline

4. **Full-width drawer:**
   - Ensure the mobile nav container uses `w-full` or `w-screen`
   - Check AnimatePresence animation for width constraints
   - May need to adjust from `max-w-*` to `w-full`

---

### 1.4 Mobile Navigation - Keep Simplified

**Decision:** Keep mobile nav simplified with only 4 main service routes (no subsublinks).

**No changes needed** - current mobile nav behavior is correct.

---

## Part 2: Leistungen Routes Updates

### 2.1 Create Sections Matching Nav Sublinks

**Source of truth:** `nav-data.ts` defines the sublinks → routes must have sections with matching `id` attributes.

**Nav sublinks (these become section IDs):**

| Route | Section IDs to Create |
|-------|----------------------|
| sichtbarkeit-steigern | `seo`, `local-seo`, `content`, `social`, `google-business`, `analytics` |
| digitale-werbung | `google-ads`, `meta-ads`, `display`, `remarketing`, `kampagnen`, `performance` |
| ki-automatisierung | `chatbots`, `automatisierung`, `ki-integration`, `workflows`, `datenanalyse`, `api` |
| webseiten-branding | `webdesign`, `responsive`, `ci`, `logo`, `branding`, `ux` |

**Each route gets 6 sections** with matching IDs so nav links work:
- Nav link: `/leistungen/sichtbarkeit-steigern#seo`
- Route element: `<section id="seo">...</section>`

**Files to modify:**
- All 4 route files (replace current cards with 6 sections each)

---

### 2.2 Replace Cards with Section Components

**Current State:** Routes render content using shadcn Card components in a grid.

**Target:** Replace with alternating Section components:
- `SectionImageLeft`
- `SectionImageRight`
- `SectionCentered`

**Files to modify:**
- `src/routes/leistungen/sichtbarkeit-steigern.tsx`
- `src/routes/leistungen/digitale-werbung.tsx`
- `src/routes/leistungen/ki-automatisierung.tsx`
- `src/routes/leistungen/webseiten-branding.tsx`

**Changes per route:**

1. Remove Card imports and grid layout
2. Import Section components from `@/components/sections`
3. For each content item, render alternating sections:
   ```tsx
   <section id="anchor-name">
     <SectionImageLeft
       image={{ src: "...", alt: "..." }}
       heading={t("...")}
       text={t("...")}
     />
   </section>
   ```
4. Alternate pattern: Left → Right → Centered → Left → Right → Centered...

---

### 2.3 Add Anchor IDs for Hash Navigation

**Target:** Each section must have an `id` matching the nav sublink anchors.

**Implementation:**
```tsx
<section id="seo" className="scroll-mt-20">
  <SectionImageLeft ... />
</section>
```

**Note:** `scroll-mt-20` accounts for fixed navigation height when scrolling to anchor.

---

### 2.4 Placeholder Icons as Images

**Target:** Use large Lucide icons as placeholder images with colorful backgrounds.

**Implementation approach:**
```tsx
// Create a reusable placeholder component or inline:
<div className="w-full aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
  <Search className="w-24 h-24 text-white" />
</div>
```

**Icon color palette suggestions:**
- Blue/Purple gradient
- Green/Teal gradient
- Orange/Red gradient
- Pink/Rose gradient
- Amber/Yellow gradient

**Lucide icons to use (example mapping):**
| Section | Icon |
|---------|------|
| SEO | `Search` |
| Analytics | `BarChart3` |
| Google Ads | `Megaphone` |
| Webdesign | `Layout` |
| Branding | `Palette` |
| Chatbots | `Bot` |
| KI | `Brain` |
| Video | `Video` |

---

## Implementation Order

### Phase 1: Navigation Fixes
1. Fix subsublinks to use TanStack Router `<Link>` (prevent DOM refresh)
2. Make service cards fully clickable as links
3. Mobile: Remove TWMLogoIcon
4. Mobile: Remove border-b from topbar
5. Mobile: Style burger button with outline border
6. Mobile: Make drawer full-width

### Phase 2: Leistungen Routes
1. Create reusable icon placeholder component (Lucide icon + gradient bg)
2. Refactor each route - replace cards with 6 sections each:
   - `sichtbarkeit-steigern` (6 sections: seo, local-seo, content, social, google-business, analytics)
   - `digitale-werbung` (6 sections: google-ads, meta-ads, display, remarketing, kampagnen, performance)
   - `ki-automatisierung` (6 sections: chatbots, automatisierung, ki-integration, workflows, datenanalyse, api)
   - `webseiten-branding` (6 sections: webdesign, responsive, ci, logo, branding, ux)
3. Each section gets `id` attribute + `scroll-mt-20` class
4. Use alternating Section components (Left/Right/Centered)
5. Test all navigation hash links scroll correctly

---

## Files Summary

**Navigation:**
- `src/components/navigation/index.tsx`
- `src/components/navigation/mobile-nav.tsx`
- `src/components/navigation/nav-data.ts`

**Routes:**
- `src/routes/leistungen/sichtbarkeit-steigern.tsx`
- `src/routes/leistungen/digitale-werbung.tsx`
- `src/routes/leistungen/ki-automatisierung.tsx`
- `src/routes/leistungen/webseiten-branding.tsx`

**New component (optional):**
- `src/components/ui/icon-placeholder.tsx` - Reusable colorful icon placeholder

---

## Decisions Made

| Question | Answer |
|----------|--------|
| Anchor naming | Routes will have sections matching nav-data sublinks (nav-data is source of truth) |
| Mobile sublinks | Keep simplified - only 4 main services, no subsublinks |
| Section pattern | Flexible alternation based on content |
| i18n | Translations ready for Leistungen content |
