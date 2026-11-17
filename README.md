# EIA UW website

The website for Engineers in Action, University of Washington Chapter. Built with
[Astro](https://astro.build) and hosted free on GitHub Pages.

Live site: https://eia-washington.github.io/eia-uw.github.io/

Every push to `main` rebuilds and publishes the site automatically (about 1–2 minutes).
You can watch it under the repo's **Actions** tab.

## Editing content (no coding needed)

All the words, people, and projects live in plain data files. You never need to touch
the layout code to update the site.

| What you want to change | File |
| --- | --- |
| Chapter email, interest form link, socials, sponsor package link, homepage stats, tagline | `src/data/site.json` |
| Team members (name, role, major, grad year, headshot, LinkedIn) | `src/data/people.json` |
| Committees on the Join page | `src/data/committees.json` |
| "What a week looks like" on the Join page | `src/data/dayToDay.json` |
| Past bridges (one file per bridge) | `src/content/projects/*.md` |

### Adding a person

1. Put their headshot in `public/images/people/` (square, ~600×600px, `.jpg`).
2. Add an entry to `src/data/people.json`:

   ```json
   {
     "name": "Jane Doe",
     "role": "Design Lead",
     "team": "Design",
     "major": "Civil Engineering",
     "gradYear": 2027,
     "photo": "/images/people/jane-doe.jpg",
     "linkedin": "https://www.linkedin.com/in/janedoe"
   }
   ```

   People are grouped on the page by `team`, in the order teams first appear in the file.
   Leave `photo` empty (`""`) to show their initials instead.

### Adding a bridge

1. Put photos in `public/images/projects/<year-name>/`.
2. Copy `src/content/projects/2026-example-bridge.md` to a new file, e.g.
   `2027-rio-something.md`. The file name becomes the page URL.
3. Fill in the fields at the top (between the `---` lines) and write the story below.

The bridge with the newest `date` is automatically featured on the home page as
"our most recent project".

### Embedding the sponsorship package

In Canva: **Share → More → Embed**, copy the embed link (it ends in `?embed`), and paste
it into `sponsorPackageEmbedUrl` in `src/data/site.json`. Until then the Sponsor page
shows a button linking to `sponsorPackageUrl`.

## Changing the look

Colors and fonts are defined once at the top of `src/styles/global.css`. Change them there.

## Running it on your computer (optional)

Needs Node.js 20 or newer.

```bash
npm install
npm run dev
```

Then open the address it prints (http://localhost:4321/eia-uw.github.io/).

## Project layout

```
src/
  data/          site-wide content (JSON)
  content/       past bridges (Markdown)
  pages/         one file per page (index, join, people, sponsor, projects)
  components/    Nav, Footer, Photo, PersonCard
  layouts/       shared page shell
  styles/        global.css (colors, fonts, buttons)
public/          images and files served as-is
```

## URL / repo name

Because the repo is `eia-washington/eia-uw.github.io`, GitHub serves it under
`/eia-uw.github.io/`. If the repo is renamed to `eia-washington.github.io` or a custom
domain is added, change `site` and `base` in `astro.config.mjs` (set `base` to `'/'`).
All internal links go through `url()` in `src/lib/url.ts`, so nothing else needs to change.
