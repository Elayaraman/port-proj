# Developer Hub

## Executive Summary & Overview
Developer Hub is a lightweight, high-performance personal portfolio built using the modern Next.js App Router framework. The application serves as a unified digital showcase for software engineering projects, live GitHub activity, interactive frontend experiments, and a direct communication channel for visitors. The project deliberately utilizes various rendering strategies (Static Site Generation, Server-Side Rendering, and Client-Side Hydration) tailored to the performance and data requirements of each page.

## Objectives
- **Showcase Expertise**: Present professional history, skills, and featured engineering projects cleanly.
- **Real-time Data Integration**: Fetch and display real-time GitHub activity using dynamic server rendering.
- **Demonstrate Frontend Mastery**: Provide interactive, client-side demonstrations of core frontend development concepts.
- **Lead Generation**: Allow recruiters and visitors to reach out via a fully validated contact form.

## Architecture & Tech Stack

| Technology | Purpose | Rendering Strategy |
| :--- | :--- | :--- |
| Next.js (App Router) | Core Full-Stack React Framework | Hybrid (SSG / SSR / CSR) |
| TypeScript | Type Safety & Developer Experience | N/A |
| Tailwind CSS | Utility-first styling & responsiveness | Build-time |
| GitHub REST API | Fetching live profile & repository data | Server-Side Rendering (SSR) |
| React Hook Form + Zod | Schema validation & form state handling | Client-Side Hydration |
| Next.js Server Actions | Handling backend form submissions | Server-Side Processing |

## System Architecture & Routing Strategy

- `/` (Home) ──> Static Site Generation (SSG)
- `/projects` ──> Static Site Generation (SSG)
- `/github` ──> Server-Side Rendering (SSR)
- `/playground` ──> Client-Side Rendering (CSR)
- `/contact` ──> SSG with Client-Side Hydration + Server Actions

## Functional Requirements

### 1. Home Page (`/`)
- **Rendering Method**: Static Site Generation (SSG)
- **Purpose**: Primary landing page for visitors.
- **Core Components**:
  - **Hero Section**: Concise introduction and full technical stack highlight.
  - **Featured Projects**: Curated project highlights with clear Call-to-Action (CTA) buttons.
  - **Global Navigation**: Header and footer links to route seamlessly across the site.
- **Data Source**: Static local JSON or TypeScript data objects.

### 2. Projects Page (`/projects`)
- **Rendering Method**: Static Site Generation (SSG)
- **Purpose**: Grid/List showcase of personal and open-source contributions.
- **Card Information Architecture**:
  - Project Name & Short Description
  - Technology Stack Tags
  - Repository Link (GitHub)
  - Live Deployment Link (if applicable)
  - Project Status Indicator (Completed \| In Progress)
- **Data Source**: Local static data file (`projects.ts` / `projects.json`).

### 3. GitHub Page (`/github`)
- **Rendering Method**: Server-Side Rendering (SSR)
- **Purpose**: Real-time visibility into active repositories and GitHub profile stats.
- **Data Source**: GitHub REST API endpoints (`/users/{username}`, `/users/{username}/repos`).
- **UI Structure**:
  - **Profile Header**: Avatar, Full Name, Bio, Followers/Following metrics, and Public Repository counts.
  - **Repository Grid**: Latest repositories showing Title, Description, Primary Language tag, Star Count, and Last Updated date.

### 4. Playground Page (`/playground`)
- **Rendering Method**: Client-Side Rendering (CSR)
- **Purpose**: Dedicated space for interactive UI/UX experiments and frontend logic demos.
- **Initial Demo Module**:
  - **React State Playground**: Interactive counter featuring real-time visual feedback on state mutations and component re-render updates.

### 5. Contact Page (`/contact`)
- **Rendering Method**: SSG with Client-Side Hydration & Server Action submission
- **Purpose**: Secure, validated message collection.
- **Form Schema Requirements**:
  - **Name**: Text string (Required)
  - **Email**: Valid email format (Required)
  - **Message**: Non-empty text string (Required)
- **Execution Flow**:
  - Client-side input validation managed via Zod schema & React Hook Form.
  - Form payload submitted directly to a Next.js Server Action.
  - Server validates input payload, processes message, and returns standard Response payload (success \| error).
  - UI renders contextual feedback toast/banner based on the action result.

## Non-Functional Requirements

### Performance
- Google Lighthouse Performance Score >= 90 across all metrics.
- Optimized Core Web Vitals (First Contentful Paint, Largest Contentful Paint).

### Responsiveness & Accessibility
- Mobile-first design system fully responsive across mobile, tablet, and desktop viewports.
- Semantic HTML5 markup adhering to WCAG standards (keyboard navigation, screen-reader friendly).

### Code Quality & Technical Integrity
- 100% strict Type-safety enforced across all routes and API responses using TypeScript.
- Clean, scalable, modular folder layout following Next.js App Router conventions.

### SEO Optimization
- Complete metadata generation (Title, Description, OpenGraph tags) for all statically generated routes.
