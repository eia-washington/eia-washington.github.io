// @ts-check
import { defineConfig } from 'astro/config';

// The repo is github.com/eia-washington/eia-washington.github.io. Because the repo
// name matches `<org>.github.io`, GitHub Pages serves it at the root:
// https://eia-washington.github.io/
//
// If a custom domain is added later, change `site` to that domain.
export default defineConfig({
  site: 'https://eia-washington.github.io',
  base: '/',
  trailingSlash: 'ignore',
});
