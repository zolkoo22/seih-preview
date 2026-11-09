# seih.eu preview

Review preview of the SEIH website (Slovak Energy Investment Holding a.s.),
served by GitHub Pages. Draft, not the live site.

A plain static page: open `index.html` in a browser, no server or build
needed. Home, energy market and sitemap in English, Slovak and Simplified
Chinese. It carries a noindex tag, so search engines do not list it.

```
index.html          all pages and languages
assets/site.css     styles (Tailwind build) and font faces
assets/app.js       page and language switching by URL hash
assets/img/         photos, logos, icon
assets/fonts/       Inter and Outfit
```

Links: `#/en/home`, `#/sk/energy-market`, `#/zh/sitemap`, `#/en/home/contact`.

## Update

Generated from the `seih-web` repo (Next.js):

```bash
cd ../seih-web
npm run build:site
cp dist/site/index.html ../seih-preview/
rm -rf ../seih-preview/assets && cp -r dist/site/assets ../seih-preview/
cd ../seih-preview
git add -A && git commit -m "Update preview" && git push
```
