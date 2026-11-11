// VEON demo base: technical setup only. Visual design comes from design/concept.md of each client.
import { defineConfig } from "astro/config";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Make the root build open straight from disk (file://…/dist/index.html) for review screenshots:
// absolute "/_astro/…" and "/favicon.svg" become relative, and the four main font files (Cyrillic and Latin of
// Geologica and Golos Text) are embedded into the CSS, because browsers block font requests from file://.
// Skipped when a base path is set (the GitHub Pages build stays with normal font files and preload)
// and for 404.html, which is served from any path.
const relativeAssets = () => {
  let base = "/";
  return {
    name: "veon-relative-assets",
    hooks: {
      "astro:config:done": ({ config }) => { base = config.base || "/"; },
      "astro:build:done": ({ dir }) => {
        if (base !== "/") return;
        const root = fileURLToPath(dir);
        const MAIN_FONT = /^(geologica|golos-text)-(cyrillic|latin)-wght-normal\.[\w-]+\.woff2$/;
        const embed = (css, dirOfCss) => css.replace(/url\(\s*(["']?)\.\/([^"')]+\.woff2)\1\s*\)/g, (m, q, name) => {
          if (!MAIN_FONT.test(name)) return m;
          const data = fs.readFileSync(path.join(dirOfCss, name)).toString("base64");
          return `url(data:font/woff2;base64,${data})`;
        });
        const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => (e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]));
        for (const file of walk(root)) {
          const rel = path.relative(root, file).split(path.sep).join("/");
          if (rel.endsWith(".html") && rel !== "404.html") {
            const up = "./" + "../".repeat(rel.split("/").length - 1);
            const html = fs.readFileSync(file, "utf8")
              .replace(/(["'(,\s])\/_astro\//g, `$1${up}_astro/`)
              .replace(/(["'])\/favicon\.svg/g, `$1${up}favicon.svg`)
              .replace(/<link rel="preload"[^>]*\.woff2"[^>]*>/g, "");
            fs.writeFileSync(file, html);
          } else if (rel.startsWith("_astro/") && rel.endsWith(".css")) {
            const css = fs.readFileSync(file, "utf8").replace(/url\(\s*(["']?)\/_astro\//g, "url($1./");
            fs.writeFileSync(file, embed(css, path.dirname(file)));
          }
        }
      },
    },
  };
};

export default defineConfig({
  build: { inlineStylesheets: "auto" },
  compressHTML: true,
  integrations: [relativeAssets()],
});
