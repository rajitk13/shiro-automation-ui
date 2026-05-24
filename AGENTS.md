<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Overview

Shiro Automation UI is a Next.js 14 documentation site for the Shiro Automation CI/CD workflow runtime.

## Key Features

- **Mobile-first responsive design** with hamburger navigation (hidden on md+)
- **Floating AI toggle button** (bottom-right) that opens a modal with AI-friendly prompts for the project
- **SEO optimization** with sitemap, robots.txt, and comprehensive metadata
- **Deployment script** (`deploy.sh`) for Git pull + docker-compose rebuild
- **Theme support** with dark/light toggle

## Important Components

- `components/MobileNav.tsx` — Hamburger menu for mobile navigation
- `components/FloatingAIButton.tsx` — Toggle button for AI prompts modal
- `components/AIPromptsModal.tsx` — Full-screen modal with AI prompts content
- `contexts/AIContext.tsx` — React context for AI mode state management
- `deploy.sh` — Deployment script (git pull --rebase + docker-compose down + up)

## Pages

All pages have mobile-optimized padding (`px-4 sm:px-6 py-12 sm:py-20`) and responsive headings:
- `/` — Homepage
- `/architecture` — System design
- `/getting-started` — Quick start guide
- `/tech-stack` — Technology stack
- `/modules` — Community modules (GitHub API)
- `/integrations` — CI/CD platforms & AI providers
- `/examples` — Workflow examples
- `/roadmap` — Future plans
- `/ai-prompts` — AI reference page (also accessible via floating toggle)

## Deployment

Run `./deploy.sh` to pull latest changes and rebuild Docker containers.

## Docker

- Port: 3222
- Node version: 22-alpine
- Simplified single-stage Dockerfile
