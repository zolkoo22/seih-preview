# seih.eu preview

Review preview of the SEIH website (Slovak Energy Investment Holding a.s.),
served by GitHub Pages. Draft, not the live site.

`index.html` is the whole site in one file (home, energy market, sitemap in
English, Slovak and Simplified Chinese). It carries a noindex tag, so search
engines do not list it.

Links: `#/en/home`, `#/sk/energy-market`, `#/zh/sitemap`.

## Update

The file is generated from the `seih-web` repo:

```bash
cd ../seih-web
npm run build:preview
cp dist/netlify-preview/index.html ../seih-preview/index.html
cd ../seih-preview
git commit -am "Update preview" && git push
```
