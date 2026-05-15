# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173/mickey-ykm-page/
npm run build    # Production build to dist/
npm run preview  # Preview production build locally
```

No test runner is configured.

## Architecture

Static career website built with React + Vite + Tailwind CSS, deployed to GitHub Pages.

**Key config:**
- `vite.config.js` sets `base: '/mickey-ykm-page/'` — required for GitHub Pages routing. All asset paths are relative to this base.
- `package.json` uses `"type": "module"`, so all config files (`postcss.config.js`, `tailwind.config.js`) must use ESM syntax.

**Component structure** (`src/components/`): Each section of the single-page site is a self-contained component — `Hero`, `Experience`, `CaseStudies`, `Clients`, `Speaking`, `Footer`. All content (copy, data) lives inline in the component files as JS arrays/objects, not in separate data files.

**Content source:** `doc/cv_mickey_master.md` is the authoritative source for all professional content. `doc/project-info.md` defines the site's structural requirements and tone guidelines (formal, simple, professional).

## Deployment

Build with `npm run build`, then push the `dist/` folder contents to the `gh-pages` branch, or configure GitHub Actions to do so automatically.
