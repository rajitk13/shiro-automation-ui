<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# Project Overview

Shiro Automation UI is a Next.js 14 documentation site for the Shiro Automation CI/CD workflow runtime.

## Key Features

- **Mobile-first responsive design** with hamburger navigation (hidden on md+)
- **Floating AI toggle button** (bottom-right) that toggles between human and AI agent modes
- **Dynamic hero text** with animated transitions cycling through different value propositions
- **Realistic terminal animation** showing actual shiro execution output
- **SEO optimization** with sitemap, robots.txt, and comprehensive metadata
- **Deployment script** (`deploy.sh`) for Git pull + docker-compose rebuild
- **Theme support** with dark/light toggle
- **Git hooks** with Husky, Commitlint, and Prettier for code quality

## Important Components

- `components/MobileNav.tsx` — Hamburger menu for mobile navigation
- `components/FloatingAIButton.tsx` — Toggle button for AI/human mode switching
- `components/TerminalAnimation.tsx` — Animated terminal showing shiro execution
- `components/Animate.tsx` — Framer motion animation components (fadeUp, fadeIn, AnimatePresence)
- `deploy.sh` — Deployment script (git pull --rebase + docker-compose down + up)

## Pages

All pages have mobile-optimized padding (`px-4 sm:px-6 py-12 sm:py-20`) and responsive headings:

- `/` — Homepage with dynamic hero text and terminal animation
- `/architecture` — System design
- `/getting-started` — Quick start guide
- `/tech-stack` — Technology stack (includes Gemini AI provider)
- `/modules` — Community modules (GitHub API)
- `/integrations` — CI/CD platforms & AI providers (Jenkins marked as Planned, Gemini added)
- `/examples` — Workflow examples (includes Gemini configuration)
- `/roadmap` — Future plans
- `/ai-prompts` — AI reference page with latest shiro-automation info (toggle via floating button)

## Recent Updates

- Added dynamic hero text variations that cycle every 5 seconds with smooth fade transitions
- Updated terminal animation to show realistic shiro execution output (config resolution, step completion, workflow results)
- Fixed mobile responsiveness for hero text animation and buttons
- Updated AI prompts page with latest information from main shiro-automation repo (quickstart templates, CLI mode, validation, Gemini provider)
- Added Gemini AI provider support across architecture, integrations, tech-stack, and examples pages
- Removed startup chime sound (ChimeEffect component)
- Added Git hooks: Husky (pre-commit, commit-msg), Commitlint, Prettier
- Moved metadata export to separate `/app/metadata.ts` file
- Fixed code block readability in light mode with proper text color contrast

## Deployment

Run `./deploy.sh` to pull latest changes and rebuild Docker containers.

## Docker

- Port: 3222
- Node version: 22-alpine
- Simplified single-stage Dockerfile
