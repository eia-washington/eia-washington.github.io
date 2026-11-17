// Prefix internal paths with the site's base path (see astro.config.mjs).
// Use for every internal link and every image in /public:
//   url('/join')  ->  /eia-uw.github.io/join
// External links (http...) pass through unchanged.
export function url(path = '/'): string {
  if (!path || /^(https?:|mailto:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
