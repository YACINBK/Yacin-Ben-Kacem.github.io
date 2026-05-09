# Review Checklist

Use this checklist before pushing changes live.

## How To Run

```powershell
cd C:\Users\YACIN\Desktop\portfolio
npm.cmd run review
```

Open:

```text
http://127.0.0.1:4173/portfolio/
```

## Viewports

Check these widths in browser DevTools:

- `390 x 844`
- `375 x 812`
- `430 x 932`
- `768 x 1024`
- desktop around `1440px` wide

## Route Review

### Home `/`

- Intro is immediate and easy to scan.
- Current build section explains UX Insight clearly.
- Home sections make the available routes and repository links obvious.
- Focus bullets are readable and credible.
- Page map links are clear and easy to understand.

### Work `/work`

- Timeline reads naturally on desktop and mobile.
- Date, role, and organization hierarchy is clear.
- QuickFlow and UX Insight have enough context to be understood on first read.

### Projects `/projects`

- Each project is easy to scan in one pass.
- Problem and outcome copy feels specific.
- Stack tags stay readable on mobile.
- Source links point to the correct repositories.

### Applied Systems `/systems`

- Image vectorization pipeline reads as a real workflow, not just a tools list.
- Content automation and scraping flows feel structured and credible.
- Private vs public implementation labels are clear.

### Credentials `/dossier`

- Certificates are easy to scan.
- Toolkit groups read cleanly without turning into a wall of text.
- Education stays secondary to project work.

### Contact `/contact`

- Contact methods are obvious and clickable.
- Availability line reads cleanly.
- No broken external links.

## Global QA

- No horizontal scrolling.
- Header stays compact on mobile.
- Visual contrast feels strong enough and not washed out.
- Route transitions are smooth and not distracting.
- Internal navigation respects the `/portfolio/` base path.
- `robots.txt` and sitemap are generated in `dist`.
