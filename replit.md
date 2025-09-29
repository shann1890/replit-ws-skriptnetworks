# Skript Networks - IT Consultancy & Technology Solutions

## Overview

Skript Networks is a professional IT consultancy and technology solutions provider specializing in network architecture, cybersecurity, smart home automation, and enterprise technology implementations. The application is a modern landing page showcasing the company's services, expertise, and technology partnerships, with integrated blog functionality for technical articles and industry insights.

The project serves as both a marketing website and information hub, targeting enterprise clients, SMEs, and residential customers in Malaysia seeking comprehensive IT infrastructure and smart technology solutions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type-safe component development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom design system based on shadcn/ui components
- **State Management**: TanStack Query for server state and API data fetching
- **Build System**: Vite for fast development and optimized production builds
- **Component Library**: Custom components built on Radix UI primitives for accessibility

### Backend Architecture
- **Server Framework**: Express.js with TypeScript for RESTful API endpoints
- **Database Layer**: Drizzle ORM with dual database support (SQLite for development, PostgreSQL for production)
- **API Design**: RESTful endpoints for articles, contact forms, and content management
- **File Structure**: Modular architecture with separate storage implementations for different database systems
- **Development Tools**: Hot module replacement via Vite integration with Express

### Data Storage Solutions
- **Primary Database**: PostgreSQL with Neon Database integration for production
- **Development Database**: SQLite with better-sqlite3 for local development
- **ORM Strategy**: Drizzle ORM providing type-safe database operations across both database systems
- **Schema Management**: Unified schema definition supporting both SQLite and PostgreSQL dialects
- **Data Seeding**: Automated sample data population for blog articles and company information

### Authentication and Authorization
- **Current State**: Basic structure in place with user schema definitions
- **Future Implementation**: Session-based authentication using connect-pg-simple for PostgreSQL sessions
- **Security Model**: Designed for admin-only content management access

### Design System
- **Typography**: Fira Code monospace font family for technical branding
- **Color Palette**: Deep blue primary (#220 85% 25%) with purple accents (#270 75% 45%)
- **Component Standards**: shadcn/ui components with custom styling and consistent spacing
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Visual Identity**: Professional IT consultancy aesthetic drawing inspiration from enterprise technology companies

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Hook Form with Zod validation
- **Database**: @neondatabase/serverless for PostgreSQL, better-sqlite3 for SQLite
- **UI Components**: Complete Radix UI component suite for accessible interfaces
- **Styling**: Tailwind CSS with PostCSS processing and custom configuration

### Development Tools
- **Build Tools**: Vite with React plugin and TypeScript support
- **Code Quality**: TypeScript for type safety, ESLint configuration
- **Development Experience**: Replit integration with cartographer and runtime error overlay

### API and Data Management
- **Query Management**: TanStack React Query for server state synchronization
- **Form Handling**: React Hook Form with Hookform Resolvers for Zod integration
- **Date Handling**: date-fns for date formatting and manipulation

### Database and Storage
- **ORM**: Drizzle ORM with drizzle-kit for migrations and schema management
- **Session Storage**: connect-pg-simple for PostgreSQL session management
- **File Storage**: Local file system for SQLite development database

### Production Considerations
- **Database**: Configured for Neon Database PostgreSQL in production
- **Environment**: Environment variable configuration for database URLs and settings
- **Deployment**: Express server with static file serving for production builds