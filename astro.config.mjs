// @ts-check
import { defineConfig } from 'astro/config';

// The repo lives at github.com/eia-washington/eia-uw.github.io, so GitHub Pages
// serves it at https://eia-washington.github.io/eia-uw.github.io/
//
// If the repo is ever renamed to exactly `eia-washington.github.io` (or a custom
// domain is added), change `base` to '/' and update `site`.
export default defineConfig({
  site: 'https://eia-washington.github.io',
  base: '/eia-uw.github.io',
  trailingSlash: 'ignore',
});
