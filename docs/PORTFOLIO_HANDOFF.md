# Portfolio Handoff

## Repository Boundary

- This repo is `portfolio`.
- Remote: `origin` -> `https://github.com/YACINBK/portfolio.git`
- Default branch: `main`
- Current tracked head at last check: `15d23f6` (`refactor: enhance skills tile, add experience section, and refine layout`)
- The nested folder [YACINBK-profile/](../YACINBK-profile) is a separate git repository.
- Do not treat [YACINBK-profile/](../YACINBK-profile) as part of the `portfolio` repo history, commit graph, or remote.
- The nested profile repo remote is `https://github.com/YACINBK/YACINBK.git`.

## Current Status Snapshot

- `portfolio` local branch and `origin/main` were aligned at `15d23f6`.
- The portfolio repo itself had a dirty worktree with a mix of tracked edits and untracked files.
- The nested `YACINBK-profile/` repo was the main source of confusion because it lives inside this workspace but has its own `.git`.
- Current tracked edits at the time of writing: `.gitignore`, `index.html`, `package-lock.json`, `package.json`, `src/App.jsx`, `src/components/layout/BentoGrid.jsx`, `src/components/layout/StatusFooter.jsx`, `src/components/tiles/ConnectTile.jsx`, `src/components/tiles/CurrentFocusTile.jsx`, `src/components/tiles/ExperienceTile.jsx`, `src/components/tiles/FocusTile.jsx`, `src/components/tiles/HeroTile.jsx`, `src/components/tiles/ProjectsTile.jsx`, `src/components/tiles/SkillsTile.jsx`, `src/index.css`, `vite.config.js`.
- Current deletions at the time of writing: `src/components/tiles/BioTile.jsx`, `src/components/tiles/PersonaTile.jsx`.
- Current untracked top-level paths at the time of writing: `.astro/`, `.firecrawl/`, `.playwright-cli/`, `GITHUB_PROFILE_README.md`, `astro.config.mjs`, `docs/`, `output/`, `readme-assets/`, `scripts/`, `src/components/ArchitectureDiagram.astro`, `src/components/CustomCursor.astro`, `src/components/FooterLinks.astro`, `src/components/GlobalHeader.astro`, `src/components/HubCard.astro`, `src/components/PageIntro.astro`, `src/components/PagerNav.astro`, `src/components/ProjectPoster.astro`, `src/components/WebGPUField.astro`, `src/components/WorkCard.astro`, `src/components/tiles/AboutTile.jsx`, `src/components/tiles/CertificationsTile.jsx`, `src/data/`, `src/layouts/`, `src/pages/`, `src/styles/`, `src/utils/`.

## What This Repo Contains

- Astro frontend for the portfolio site.
- Main entry and layout files:
  - `index.html`
  - `astro.config.mjs`
  - `vite.config.js`
  - `src/App.jsx`
  - `src/main.jsx`
  - `src/layouts/BaseLayout.astro`
- Global styles:
  - `src/index.css`
  - `src/styles/global.css`
- Page routes:
  - `src/pages/index.astro`
  - `src/pages/work/index.astro`
  - `src/pages/projects.astro`
  - `src/pages/lab.astro`
  - `src/pages/dossier.astro`
  - `src/pages/contact.astro`
  - `src/pages/systems.astro`
  - `src/pages/robots.txt.ts`
- Shared components:
  - `src/components/GlobalHeader.astro`
  - `src/components/FooterLinks.astro`
  - `src/components/PageIntro.astro`
  - `src/components/PagerNav.astro`
  - `src/components/HubCard.astro`
  - `src/components/ProjectPoster.astro`
  - `src/components/WebGPUField.astro`
  - `src/components/WorkCard.astro`
  - `src/components/ArchitectureDiagram.astro`
  - `src/components/CustomCursor.astro`
  - `src/components/layout/BentoGrid.jsx`
  - `src/components/layout/StatusFooter.jsx`
  - `src/components/tiles/*.jsx`
- Data files:
  - `src/data/site.js`
  - `src/data/portfolioData.js`
  - `src/utils/paths.js`

## Important Generated / Supporting Files

- `output/` contains screenshots and scrape artifacts from prior verification work.
- `.firecrawl/` contains scraped source material.
- `.playwright-cli/` contains local browser tooling state.
- `readme-assets/` at the portfolio root contains older visual assets from the broader project.
- `legacy_vanilla/` is a separate older implementation and should be treated as reference-only unless explicitly requested.

## Safe Working Rules

- Keep `portfolio` and `YACINBK-profile` isolated.
- When editing the GitHub profile README, work only inside [YACINBK-profile/](../YACINBK-profile).
- When editing the portfolio site, work only inside the root repo and ignore the nested profile repo.
- Do not move, delete, or reinitialize the nested repo unless explicitly asked.
- If a future task needs both repos, update both intentionally and mention the boundary in the final handoff.

## Current Repo Shape Notes

- The repo currently has many modified and untracked files because the portfolio implementation is still in progress.
- Existing tracked changes should not be reverted unless the user explicitly asks.
- The nested profile repo has been added to `.gitignore` here so it stops polluting `portfolio` status.

## Suggested Next Steps

1. Run `git status --short` in `portfolio` to confirm the nested repo is no longer shown.
2. Continue portfolio work from the root repo only.
3. If you need the GitHub profile again, switch into `YACINBK-profile` explicitly.
