// Router for the single-file build. Routes: #/<lang>/<page>[/<anchor>]
const LANGS = ["en", "sk", "zh"];
const PAGES = ["home", "energy-market", "sitemap"];
let current = null;

// Single-file build: images come inlined from IMAGES. Split build: plain src.
if (typeof IMAGES !== "undefined") {
  document.querySelectorAll("img[data-img]").forEach((img) => {
    img.src = IMAGES[img.dataset.img];
  });
}

// English is the main language; Slovak and Chinese come from the switch.
const DEFAULT_LANG = "en";

function route() {
  const [lang, page, anchor] = location.hash.replace(/^#\/?/, "").split("/");
  const key = `${LANGS.includes(lang) ? lang : DEFAULT_LANG}/${PAGES.includes(page) ? page : "home"}`;
  const view = document.querySelector(`[data-view="${key}"]`);
  const switched = key !== current;

  if (switched) {
    document.querySelectorAll("[data-view]").forEach((v) => (v.hidden = v !== view));
    document.documentElement.lang = view.dataset.lang;
    document.title = view.dataset.title;
    current = key;
  }
  view.querySelectorAll("details[open]").forEach((d) => (d.open = false));

  // No section in the route means the top of the page, e.g. the logo.
  const target = anchor && view.querySelector(`#${CSS.escape(anchor)}`);
  const behavior = switched ? "instant" : "smooth";
  if (target) target.scrollIntoView({ behavior });
  else window.scrollTo({ top: 0, behavior });
}

// A link to the current route fires no hashchange, so route it directly.
document.addEventListener("click", (e) => {
  const a = e.target.closest('a[href^="#/"]');
  if (a && a.getAttribute("href") === location.hash) {
    e.preventDefault();
    route();
  }
});

window.addEventListener("hashchange", route);
route();
