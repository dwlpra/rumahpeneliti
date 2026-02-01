# Rumah Peneliti - Development Guidelines

> Panduan ini ditujukan untuk memudahkan AI model (Claude, ChatGPT, Gemini, dll) dalam mengembangkan dan memelihara proyek ini dengan konsisten.

---

## 📋 Project Overview

**Nama Proyek:** Rumah Peneliti  
**Deskripsi:** Platform ekosistem lengkap untuk peneliti Indonesia - bukan hanya media artikel, tapi multifungsi platform  
**Bahasa:** Indonesian (Bahasa Indonesia)  
**Target Audience:** Peneliti muda, mahasiswa pascasarjana, akademisi Indonesia

### Platform Ecosystem

Rumah Peneliti adalah **ekosistem multifungsi** yang terdiri dari:

1. **Content Hub** - Artikel, tips riset, info beasiswa
2. **Program & Pelatihan** - Bootcamp, workshop, mentorship, webinar
3. **Event & Community** - Call for papers, seminar, workshop, conference
4. **Rumah Jurnal** - Platform publikasi jurnal (subdomain: jurnal.rumahpeneliti.com)

### Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.x | React framework dengan App Router |
| React | 19.x | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | Utility-first CSS |
| shadcn/ui | new-york style | UI component library |
| Framer Motion | via `motion/react` | Animations |
| Lucide React | latest | Icon library |
| date-fns | 4.x | Date formatting |
| Embla Carousel | 8.x | Carousel component |

### Deployment

- **Platform:** Cloudflare Pages (via Wrangler)
- **Command:** `pnpm build` → `wrangler pages deploy`

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (imports @/styles/globals.css)
│   ├── page.tsx            # Homepage
│   └── artikel/
│       ├── page.tsx        # Artikel listing page
│       └── [slug]/
│           └── page.tsx    # Dynamic artikel detail page
│
├── styles/                 # ⭐ ALL STYLING FILES
│   ├── globals.css         # Entry point CSS
│   ├── theme.css           # Design tokens (colors, typography, spacing)
│   └── utilities.css       # Custom utility classes
│
├── components/
│   ├── index.ts            # Central export (PENTING: selalu export di sini)
│   ├── layout/             # Layout components (Navbar, Footer)
│   ├── sections/           # Homepage sections
│   │   ├── HeroHeadline.tsx        # Value proposition hero
│   │   ├── HeroSection.tsx         # Featured articles showcase
│   │   ├── ProgramsShowcase.tsx    # ⭐ Program & pelatihan
│   │   ├── EventsSection.tsx       # ⭐ Events & activities
│   │   ├── FeaturedResearchers.tsx # Testimonials
│   │   ├── ArticlesGrid.tsx        # Latest articles grid
│   │   ├── RumahJurnalSection.tsx  # ⭐ Rumah Jurnal highlight
│   │   ├── CTASection.tsx          # CTA + Newsletter
│   │   └── TrendingCarousel.tsx    # Carousel component
│   ├── article/            # Article-specific components
│   │   └── ArticleDetail.tsx
│   └── ui/                 # shadcn/ui components (DO NOT MODIFY)
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       └── ... (other UI primitives)
│
├── data/
│   └── articles.json       # Static article data
│
├── lib/
│   ├── utils.ts            # Utility functions (cn helper)
│   └── articles.ts         # Article data access functions
│
└── types/
    └── article.ts          # TypeScript interfaces
```

---

## 🎨 Design System

> **PENTING:** Semua design tokens didefinisikan di `src/styles/theme.css`.
> Untuk mengubah warna/spacing/dll, ubah nilai di file tersebut.

### Styling File Structure

```
src/styles/                 # ⭐ ALL STYLING FILES IN ONE PLACE
├── globals.css             # Entry point - imported via @/styles/globals.css
│   └── @import "./theme.css"
│   └── @import "./utilities.css"
│   └── Base styles (html, body, headings, scrollbar)
│
├── theme.css               # DESIGN TOKENS (ubah brand di sini!)
│   ├── @theme { }          # Tailwind CSS v4 tokens
│   │   ├── Colors          # --color-primary-*, --color-accent-*, --color-neutral-*
│   │   ├── Typography      # --font-sans, --text-xs to --text-6xl
│   │   ├── Spacing         # --spacing-section, --spacing-card
│   │   ├── Radius          # --radius-sm to --radius-full
│   │   ├── Shadows         # --shadow-card, --shadow-card-hover
│   │   ├── Transitions     # --duration-fast, --duration-base
│   │   ├── Z-index         # --z-dropdown, --z-modal
│   │   └── Containers      # --container-7xl, --container-prose
│   │
│   └── :root { }           # Semantic CSS variables
│       ├── --background, --foreground, --muted
│       ├── --card, --card-foreground
│       ├── --primary, --accent, --destructive
│       └── --nav-*, --footer-*
│
└── utilities.css           # Custom utility classes
    ├── Layout              # .container-main, .section-padding
    ├── Text Colors         # .text-on-dark (ALWAYS white on dark bg)
    ├── Buttons             # .btn-outline-on-dark (for dark backgrounds)
    ├── Gradients           # .gradient-primary, .gradient-accent
    ├── Text                # .text-gradient-primary
    ├── Interactive         # .card-hover, .focus-ring, .link-underline
    ├── Scrollbar           # .scrollbar-thin, .scrollbar-hide
    ├── Line clamp          # .line-clamp-1 to .line-clamp-4
    └── Animations          # .animate-fade-in, .animate-fade-in-up
```

### Brand Colors

Gunakan CSS custom properties atau Tailwind classes:

```css
/* Primary - Navy Blue (Brand utama) */
--color-primary-900: #1e3a8a;  /* Darkest - untuk text & bg utama */
--color-primary-700: #1d4ed8;  /* Lighter - untuk gradients */
--color-primary-500: #3b82f6;  /* Medium - untuk links & accents */

/* Accent - Yellow/Gold (Highlight & CTA) */
--color-accent-400: #facc15;   /* Main accent */
--color-accent-500: #eab308;   /* Hover state */

/* Neutral - Gray scale */
--color-neutral-50: #f9fafb;   /* Background */
--color-neutral-900: #111827;  /* Text primary */
--color-neutral-600: #4b5563;  /* Text secondary */
--color-neutral-200: #e5e7eb;  /* Borders */
```

**Penggunaan di komponen:**

```tsx
// Via Tailwind classes (recommended)
<div className="bg-primary-900 text-white" />
<button className="bg-accent-400 hover:bg-accent-500" />

// Via CSS variables (untuk dynamic theming)
<div style={{ background: 'var(--color-primary-900)' }} />

// Via utility classes
<div className="gradient-primary" />  /* predefined gradient */
<h1 className="text-gradient-primary" /> /* gradient text */

// ⭐ PENTING: Untuk teks di atas background gelap
<h1 style={{ color: 'white' }}>Judul</h1>
// atau gunakan utility class:
<h1 className="text-on-dark">Judul</h1>
<button className="btn-outline-on-dark">Tombol</button>
```

### Dark Background Text Guidelines

**CRITICAL RULE:** Saat membuat komponen dengan background gelap (biru, hitam, gradient gelap), SELALU pastikan teks menggunakan warna putih dengan cara:

```tsx
// Method 1: Inline style (RECOMMENDED untuk komponen reusable)
<h1 style={{ color: 'white' }}>Judul</h1>
<p style={{ color: 'white' }}>Paragraf</p>
<Link href="#" style={{ color: 'white' }}>Link</Link>

// Method 2: Utility class
<h1 className="text-on-dark">Judul</h1>
<p className="text-on-dark-secondary">Paragraf dengan opacity</p>
<button className="btn-outline-on-dark">Tombol Outline</button>

// ❌ JANGAN hanya gunakan className="text-white" 
// karena bisa di-override oleh Tailwind atau tidak ter-render
```

### Typography

```css
--font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;

/* Font sizes */
--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;      /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;     /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
--text-5xl: 3rem;       /* 48px */
```

### Spacing Convention

```css
/* Defined in @theme */
--spacing-section: 5rem;      /* 80px - between sections */
--spacing-section-sm: 3rem;   /* 48px - mobile sections */
--spacing-container: 2rem;    /* 32px - container padding */
--spacing-card: 1.5rem;       /* 24px - card padding */
--spacing-element: 1rem;      /* 16px - between elements */
--spacing-tight: 0.5rem;      /* 8px - tight spacing */
```

**Utility classes tersedia:**

```tsx
<section className="section-padding">      {/* py responsive */}
<div className="container-main">           {/* max-width + padding */}
```

### Shadows

```css
--shadow-card: 0 4px 20px -2px rgb(0 0 0 / 0.08);
--shadow-card-hover: 0 8px 30px -4px rgb(0 0 0 / 0.12);
```

```tsx
// Predefined hover effect
<div className="card-hover">  {/* shadow + transform on hover */}
```

### Responsive Breakpoints

```css
sm: 640px   /* Mobile landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
```

### Animation Guidelines

```tsx
// Standard fade-up animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

// Staggered children
transition={{ delay: index * 0.1 }}

// Hover scale effect
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
```

---

## 🧩 Component Guidelines

### Creating New Components

1. **Location:**
   - Layout components → `src/components/layout/`
   - Section components → `src/components/sections/`
   - Feature-specific → `src/components/[feature]/`
   - UI primitives → Use shadcn/ui, don't create custom

2. **File Naming:**
   - PascalCase: `ComponentName.tsx`
   - One component per file

3. **Export Pattern:**
   ```tsx
   // Selalu named export
   export function ComponentName() { ... }
   
   // JANGAN gunakan default export
   // export default ComponentName ❌
   ```

4. **Register di index.ts:**
   ```tsx
   // src/components/index.ts
   export { ComponentName } from './folder/ComponentName'
   ```

### Component Template

```tsx
'use client' // Hanya jika butuh interaktivitas

import { ComponentProps } from '@/types/component' // jika ada
import { cn } from '@/lib/utils'
import { motion } from 'motion/react' // untuk animasi
import { IconName } from 'lucide-react' // untuk icons

interface ComponentNameProps {
  // Define props dengan jelas
  title: string
  description?: string
  className?: string
}

export function ComponentName({ 
  title, 
  description, 
  className 
}: ComponentNameProps) {
  return (
    <section className={cn("py-12 lg:py-20", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Content */}
      </div>
    </section>
  )
}
```

### Client vs Server Components

```tsx
// Server Component (default) - untuk data fetching
// src/app/page.tsx
import { getAllArticles } from '@/lib/articles'

export default function Page() {
  const articles = getAllArticles() // Server-side
  return <ArticlesGrid articles={articles} />
}

// Client Component - untuk interaktivitas
// src/components/sections/HeroSection.tsx
'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
```

---

## 📝 Content & Data Management

### Article Structure

```typescript
interface Article {
  id: string              // Unique identifier (kebab-case)
  slug: string            // URL-friendly slug
  title: string           // Article title
  excerpt: string         // Short description (max 200 chars)
  content: ArticleContent[] // Structured content blocks
  image: string           // Cover image URL
  category: string        // Category name
  categoryColor: string   // Tailwind classes for badge
  author: Author
  publishedDate: string   // Format: "25 Januari 2025"
  readTime: string        // Format: "6 menit baca"
  views?: string          // Format: "2.5K"
  tags: string[]
  relatedArticles?: string[] // Array of article IDs
}
```

### Adding New Article

1. Edit `src/data/articles.json`
2. Follow existing structure exactly
3. Use Unsplash for images: `https://images.unsplash.com/...?w=1080`
4. Use Pravatar for avatars: `https://i.pravatar.cc/150?img=[number]`

### Article Content Types

```typescript
type ContentType = 'heading' | 'paragraph' | 'list' | 'quote' | 'code'

// Heading
{ "type": "heading", "level": 2, "content": "Judul Bagian" }

// Paragraph
{ "type": "paragraph", "content": "Teks paragraf..." }

// List
{ "type": "list", "content": ["Item 1", "Item 2", "Item 3"] }

// Quote
{ "type": "quote", "content": "\"Kutipan inspiratif...\"" }

// Code (future)
{ "type": "code", "content": "const x = 1" }
```

---

## 🔧 Code Patterns

### Import Conventions

```tsx
// 1. React/Next imports
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// 2. Third-party libraries
import { motion } from 'motion/react'
import { format } from 'date-fns'

// 3. Internal components (via barrel export)
import { Button, Card, Badge } from '@/components/ui/button'
import { HeroSection, Statistics } from '@/components'

// 4. Types
import type { Article, ArticleCard } from '@/types/article'

// 5. Utils & data
import { cn } from '@/lib/utils'
import { getAllArticles } from '@/lib/articles'
```

### Path Aliases

```tsx
@/* → src/*

// Contoh penggunaan:
import { cn } from '@/lib/utils'
import { Article } from '@/types/article'
import { Navbar } from '@/components'
```

### Styling with Tailwind

```tsx
// Gunakan cn() untuk conditional classes
import { cn } from '@/lib/utils'

<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  className // props className untuk override
)} />

// Mobile-first responsive
<div className="text-sm md:text-base lg:text-lg" />

// Group hover
<div className="group">
  <span className="group-hover:text-blue-900" />
</div>
```

### Image Optimization

```tsx
import Image from 'next/image'

// Untuk gambar hero/featured
<Image
  src={imageUrl}
  alt={descriptiveAlt}
  fill
  priority // untuk above-the-fold
  className="object-cover"
  sizes="(max-width: 1024px) 100vw, 66vw"
/>

// Untuk gambar card/thumbnail
<Image
  src={imageUrl}
  alt={descriptiveAlt}
  fill
  className="object-cover"
  sizes="(max-width: 768px) 100vw, 33vw"
/>
```

### Link Navigation

```tsx
import Link from 'next/link'

// Internal links
<Link href="/artikel">Artikel</Link>
<Link href={`/artikel/${article.slug}`}>Baca Selengkapnya</Link>

// Anchor links (same page)
<Link href="/#artikel">Artikel</Link>

// External links
<a href="https://external.com" target="_blank" rel="noopener noreferrer">
```

---

## ✅ Do's and Don'ts

### ✅ DO

- Gunakan TypeScript dengan strict types
- Gunakan `'use client'` hanya jika diperlukan
- Export komponen via `@/components/index.ts`
- Gunakan `cn()` untuk className merging
- Ikuti mobile-first responsive design
- Gunakan semantic HTML (`section`, `article`, `nav`)
- Tambahkan `aria-label` untuk accessibility
- Gunakan Bahasa Indonesia untuk konten UI
- Gunakan `next/image` untuk semua gambar
- Gunakan `next/link` untuk semua internal links
- **PENTING:** Untuk teks di atas background gelap (biru/hitam), gunakan `style={{ color: 'white' }}` inline atau class `.text-on-dark` untuk memastikan teks selalu putih dan terbaca

### ❌ DON'T

- Jangan modifikasi file di `src/components/ui/` (shadcn managed)
- Jangan gunakan `export default` untuk komponen
- Jangan hardcode warna - gunakan Tailwind classes
- Jangan gunakan `<img>` tag biasa
- Jangan gunakan `<a>` untuk internal links
- Jangan gunakan inline styles (kecuali untuk enforcing colors pada dark background)
- Jangan buat komponen UI baru jika sudah ada di shadcn/ui
- Jangan lupa responsive breakpoints
- **JANGAN gunakan `text-white` atau `text-gray-900` pada komponen reusable** - gunakan inline style atau utility class `.text-on-dark` untuk memastikan konsistensi

---

## 🚀 Adding New Features

### 1. New Section Component

```bash
# 1. Create component file
src/components/sections/NewSection.tsx

# 2. Export from index
src/components/index.ts → export { NewSection } from './sections/NewSection'

# 3. Import in page
src/app/page.tsx → import { NewSection } from '@/components'
```

### 2. New Page Route

```bash
# Static page
src/app/about/page.tsx → /about

# Dynamic page
src/app/kategori/[category]/page.tsx → /kategori/[category]
```

### 3. New Data Type

```bash
# 1. Define type
src/types/newtype.ts

# 2. Create data access functions
src/lib/newtype.ts

# 3. Add data file (jika static)
src/data/newtype.json
```

---

## 🎯 UI Components Reference (shadcn/ui)

### Available Components

| Component | Import Path | Usage |
|-----------|-------------|-------|
| Button | `@/components/ui/button` | Actions, CTAs |
| Card | `@/components/ui/card` | Content containers |
| Badge | `@/components/ui/badge` | Labels, tags |
| Input | `@/components/ui/input` | Form inputs |
| Textarea | `@/components/ui/textarea` | Multi-line input |
| Dialog | `@/components/ui/dialog` | Modals |
| Sheet | `@/components/ui/sheet` | Side panels |
| Dropdown Menu | `@/components/ui/dropdown-menu` | Menus |
| Navigation Menu | `@/components/ui/navigation-menu` | Nav |
| Avatar | `@/components/ui/avatar` | User avatars |
| Tooltip | `@/components/ui/tooltip` | Hover hints |
| Scroll Area | `@/components/ui/scroll-area` | Custom scroll |
| Separator | `@/components/ui/separator` | Dividers |

### Adding New shadcn/ui Component

```bash
npx shadcn@latest add [component-name]
```

---

## 🧪 Testing & Quality

### Pre-commit Checklist

- [ ] TypeScript compiles without errors
- [ ] No console.log statements
- [ ] Responsive pada semua breakpoints
- [ ] Accessible (keyboard navigation, aria labels)
- [ ] Images have descriptive alt text
- [ ] Links work correctly

### Build Command

```bash
pnpm build  # Check for build errors
pnpm dev    # Development server at localhost:3000
```

### Landing Page UX Flow

Urutan section di homepage dirancang untuk **maksimum engagement**:

```
1. HeroHeadline          → Hook dengan value proposition
2. HeroSection           → Preview konten berkualitas (featured articles)
3. ProgramsShowcase      → Showcase program & pelatihan (value delivery)
4. EventsSection         → Community activities (FOMO + engagement)
5. FeaturedResearchers   → Social proof & testimonial
6. ArticlesGrid          → More content discovery
7. RumahJurnalSection    → Highlight sub-platform
8. CTASection            → Final conversion (contribute + newsletter)
```

**Prinsip UX:**
- **Hook** → Langsung tunjukkan value proposition
- **Value** → Tunjukkan apa yang bisa didapat (program, event, content)
- **Social Proof** → Testimoni researcher yang sudah sukses
- **Content** → Banyak artikel berkualitas
- **Conversion** → CTA jelas untuk action

**JANGAN:**
- Taruh "coming soon" terlalu prominent
- Redundant social proof (statistik di banyak tempat)
- CTA terlalu banyak yang membingungkan user

---

## 📖 Common Tasks

### Task: Tambah artikel baru

1. Edit `src/data/articles.json`
2. Tambahkan object artikel baru di awal array
3. Pastikan `id` dan `slug` unik

### Task: Tambah program/pelatihan baru

1. Edit `src/components/sections/ProgramsShowcase.tsx`
2. Tambahkan object di array `programs`
3. Set status: `'available' | 'coming-soon' | 'full'`

### Task: Tambah event baru

1. Edit `src/components/sections/EventsSection.tsx`
2. Tambahkan object di array `events`
3. Set type: `'call-for-paper' | 'seminar' | 'workshop' | 'webinar'`
4. Set status: `'open' | 'closing-soon' | 'upcoming'`

### Task: Update Rumah Jurnal stats

1. Edit `src/components/sections/RumahJurnalSection.tsx`
2. Update array `stats` dengan data terbaru

### Task: Ubah warna brand

1. Edit `src/styles/theme.css` di `@theme` block
2. Update color tokens: `--color-primary-*`, `--color-accent-*`
3. Utamakan: blue-900 → [new-primary], yellow-400 → [new-accent]

### Task: Tambah section baru di homepage

1. Buat file `src/components/sections/NewSection.tsx`
2. Export di `src/components/index.ts`
3. Import dan gunakan di `src/app/page.tsx`
4. Perhatikan UX flow untuk urutan yang optimal

### Task: Tambah page baru

1. Buat folder dan file di `src/app/[route]/page.tsx`
2. Gunakan layout yang konsisten dengan halaman lain

---

## 🔗 Important Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Lucide Icons](https://lucide.dev/icons)
- [Framer Motion](https://www.framer.com/motion/)

---

*Last updated: Februari 2026*
