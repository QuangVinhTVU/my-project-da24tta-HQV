<!-- Copilot / AI agent instructions for this static site project -->
# Copilot instructions — my-project-da24tta-HQV

Purpose
- Short: help contributors and AI agents make small, safe changes to this static, multi-page website built with plain HTML/CSS/JS.

Big picture
- This repository is a static, client-side site (no backend). Key folders: `html/` (pages), `css/` (styles), `js/` (scripts), `assets/images/` (images). The root `index.html` links into `html/` pages.
- There are two parallel project folders in the workspace with nearly identical structure; operate inside `my-project-da24tta-HQV/` unless the user asks to edit the `-2` copy.

Important files & examples
- `index.html`: entry list of pages (open this in a browser to navigate the site).
- `html/*.html`: individual pages (e.g. `dangnhap.html`, `sanpham_oto.html`) — edit these to change content and script includes.
- `js/lib.js`: contains DOM utility/example code. Example: `createItem(obj)` builds a product card using `obj.img`, `obj.name`, `obj.price`, `obj.description` and CSS classes `container-item`, `container-image`, `container-info`.
- `js/cars.js` and `css/cars.css`: style + behavior for product displays; mimic their patterns when adding new components.
- `assets/images/`: image assets referenced by relative paths in HTML/JS.

Conventions and patterns to follow
- Encoding and language: files use Vietnamese text and UTF-8; preserve encoding and comments in Vietnamese where present.
- DOM updates: scripts use imperative DOM creation (`document.createElement`, `appendChild`) and `innerHTML` for small fragments. When modifying, follow existing style instead of switching to frameworks or ES modules.
- Styling: CSS classes are applied directly in JS. Keep class names consistent with those used in `css/*.css` (e.g., `container-item`).
- Filenames: relative links are used heavily (e.g., `<a href="html/page1.html">`). Use relative paths and maintain the `html/`, `css/`, `js/`, `assets/` layout.

Developer workflows
- No build system or package manager present. To run locally: open `index.html` in a browser or use VS Code Live Server extension for automatic reloads.
- Debugging: use browser DevTools console for JS errors; check network tab for missing images or wrong relative paths.
- Adding assets: put images in `assets/images/` and reference them with `assets/images/<name>` from pages under the same project folder.

Safety & quality notes
- `innerHTML` is present in `js/lib.js` — when adding content from untrusted sources, sanitize or use `textContent` to avoid XSS.
- Keep changes small and page-scoped: this is a simple site where edits are easiest to verify by opening affected HTML files in the browser.

If you need more context
- Inspect `html/` pages and the two `my-project-*` folders to confirm which copy is authoritative. Ask the human which folder to modify if unclear.

Ask the user: any conventions to prefer between the two project copies? Should we remove duplicate copy (`-2`) or synchronize changes to both?
