# Roaradd - Software Services Website

## Overview

Roaradd is a multi-page software services company website built as a full-stack TypeScript application. The project features a React frontend with a modern component library and an Express.js backend with PostgreSQL database support. The site is a full marketing platform with individual pages for each product and service.

## Site Structure

### Pages
- `/` — Homepage: hero, stats, product previews, service previews, CTA
- `/products/trackit` — TrackIt product page (project tracking tool, links to trackit.roaradd.com)
- `/products/farm` — Farm product page (smart agriculture management)
- `/services/it-consulting` — IT Consulting service page
- `/services/aip` — AIP (AI Integration Platform) service page
- `/future` — Future of Future page (free worldwide SMS initiative)
- `/why-roaradd` — Company mission, values, differentiators, testimonials
- `/contact` — Detailed contact page with full form (name, email, company, phone, subject, message)

### Shared Components
- `client/src/components/layout.tsx` — Shared Header (with dropdown nav), Footer, GlassCard, PageWrapper components

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Styling**: Tailwind CSS with custom theme configuration supporting light/dark modes
- **Animations**: Framer Motion for page transitions and micro-interactions
- **Build Tool**: Vite with hot module replacement

The frontend follows a component-based architecture with:
- Pages in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/`
- Custom hooks in `client/src/hooks/`
- Utility functions and API client in `client/src/lib/`

### Backend Architecture
- **Framework**: Express.js 5 on Node.js
- **Language**: TypeScript with ES modules
- **API Design**: RESTful endpoints prefixed with `/api/`
- **Development**: Vite middleware integration for HMR during development
- **Production**: Static file serving from built frontend assets

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Current Storage**: In-memory storage class (`MemStorage`) with interface ready for database migration
- **Database Migrations**: Drizzle Kit configured for schema push operations

### Shared Code Pattern
The `shared/` directory contains code used by both frontend and backend:
- Database schema definitions
- TypeScript types inferred from schemas
- Zod validation schemas for API request/response validation

### Build System
- **Development**: `tsx` for running TypeScript directly
- **Production Build**: Custom build script using esbuild for server bundling and Vite for client
- **Output**: Server bundles to `dist/index.cjs`, client assets to `dist/public/`

## External Dependencies

### Database
- **PostgreSQL**: Primary database (configured via `DATABASE_URL` environment variable)
- **connect-pg-simple**: Session storage for PostgreSQL (available but not currently implemented)

### UI Framework
- **Radix UI**: Headless component primitives (accordion, dialog, dropdown, tabs, etc.)
- **shadcn/ui**: Pre-styled component implementations
- **Lucide React**: Icon library

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, and dev banner for Replit environment
- **Drizzle Kit**: Database schema management and migrations

### Styling
- **Tailwind CSS**: Utility-first CSS framework
- **PostCSS/Autoprefixer**: CSS processing
- **class-variance-authority**: Component variant management
- **tailwind-merge/clsx**: Conditional class name utilities