// Prefix internal paths with the site's base path (see astro.config.mjs).
// Use for every internal link and every image in /public:
//   url('/join')  ->  /join
// External links (http...) pass through unchanged.
export function url(path = '/'): string {
  if (!path || /^(https?:|mailto:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

// True when a link in site.json has been filled in. Links that are empty or still
// contain REPLACE_ME are hidden on the site instead of showing up broken.
export function isSet(link?: string): boolean {
  return Boolean(link && !link.includes('REPLACE_ME'));
}

// True when a stat has a real value. "0" or empty values are hidden.
export function hasValue(value?: string | number): boolean {
  return value !== undefined && value !== '' && value !== '0' && value !== 0;
}
