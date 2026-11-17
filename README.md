# EIA UW website

The website for Engineers in Action, University of Washington Chapter. Built with
[Astro](https://astro.build) and hosted free on GitHub Pages.

Live site: https://eia-washington.github.io/

Every push to `main` rebuilds and publishes the site automatically (about 1–2 minutes).
You can watch it under the repo's **Actions** tab.

## Editing content (no coding needed)

All the words, people, and projects live in plain data files. You never need to touch
the layout code to update the site.

| What you want to change | File |
| --- | --- |
| Chapter email, interest form link, socials, sponsor package link, homepage stats, tagline, hero photo, photo collage, sponsor page ("where your support goes", "what sponsors get") | `src/data/site.json` |
| Team members (name, role, major, grad year, headshot, LinkedIn) | `src/data/people.json` |
| Committees on the Join page (each can have a `photo`) | `src/data/committees.json` |
| "What a week looks like" on the Join page | `src/data/dayToDay.json` |
| Past bridges (one file per bridge, shown at `/bridges`) | `src/content/projects/*.md` |

### Things the site hides until they're filled in

- Any link in `site.json` that is empty or still contains `REPLACE_ME` (interest form,
  socials) is hidden instead of showing up broken. Until the interest form is set, the
  Join page buttons email the chapter instead.
- Homepage stats with a value of `"0"` are hidden. Each stat has a `phrase` such as
  `"built {value} bridges"`, and the home page joins them into one sentence
  ("So far we have built 3 bridges, served about 2,000 people, and grown to 40 members.").
- `heroImage` empty: the homepage hero shows a dark navy background instead of a photo.
- `joinCutout` empty: nothing shows beside the Join page headline.

### Hero photo

Use a wide, candid photo (at least 2000px wide) with the subject in the lower or middle
part of the frame, since the headline sits over the bottom left. Put it in
`public/images/` and set `heroImage` in `site.json`, e.g. `"/images/hero.jpg"`.

### Cutouts (sticker-style photos)

Remove the background from a photo (remove.bg or Canva's background remover), export it as
a transparent `.png`, and put it in `public/images/`. Any `.png` headshot in `people.json`
automatically shows as a sticker instead of a framed square. Set `joinCutout` in
`site.json` to put a cutout next to the Join page headline.

### Adding a person

1. Put their headshot in `public/images/people/` (square, ~600×600px). Use the same
   crop for everyone: head and shoulders, eyes about a third of the way down. Use `.jpg`
   for a normal photo or a transparent `.png` for a cutout sticker.
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

1. Put photos in `public/images/bridges/` (about 1400px wide, `.jpg`).
2. Copy `src/content/projects/2026-example-bridge.md` to a new file, e.g.
   `2027-community-name.md`. The file name becomes the page URL. Files with "example" in
   the name are templates and never appear on the site.
3. Fill in the fields at the top (between the `---` lines) and write the story below in
   full sentences. `connects` finishes the sentence "The bridge connects about N people
   to …", and `partners` lists the universities that designed it with us.

The bridge with the newest `date` is automatically featured on the home page as
"our most recent project".

### Embedding the sponsorship package

In Canva: **Share → More → Embed**, copy the embed link (it ends in `?embed`), and paste
it into `sponsorPackageEmbedUrl` in `src/data/site.json`. Until then the Sponsor page
shows a button linking to `sponsorPackageUrl`.

## Changing the look

Colors and the type scale are defined once at the top of `src/styles/global.css`. The
fonts (Bodoni Moda, IBM Plex Sans, Architects Daughter) are bundled through the
`@fontsource` packages and imported in `src/layouts/Base.astro`.

Style rules, so the site stays consistent as people edit it:

- Headings and buttons use sentence case ("Join the team", not "JOIN THE TEAM").
- Each section has at most one filled button; other actions are plain underlined links.
- Don't add numbers (01, 02) unless the items really are steps in order.
- Yellow is the only accent color. Use it for highlights, not for large areas.
- Handwritten text (`class="note"`) is for short notes that add information, like a
  caption or a time commitment.
- Write body text in full sentences.

## Running it on your computer (optional)

Needs Node.js 20 or newer.

```bash
npm install
npm run dev
```

Then open the address it prints (http://localhost:4321/).

## Project layout

```
src/
  data/          site-wide content (JSON)
  content/       past bridges (Markdown)
  pages/         one file per page (index, join, people, sponsor, bridges)
                 pages/projects/ only forwards old /projects links to /bridges
  components/    Nav, Footer, Photo, PersonCard, Cutout, BridgeDrawing (hero sketch)
  layouts/       shared page shell
  styles/        global.css (colors, fonts, buttons)
public/          images and files served as-is
```

## URL / repo name

The site is served at the root (`https://eia-washington.github.io/`) only because the
repo is named exactly `eia-washington.github.io` inside the `eia-washington` org.
Renaming the repo or the org moves the site. If that happens, or a custom domain is
added, update `site` and `base` in `astro.config.mjs`. All internal links go through
`url()` in `src/lib/url.ts`, so nothing else needs to change.

## Before launch checklist

- [x] Real bridges from the 2026–27 sponsorship packet (Pocoata, Tomata, Pilipilicito).
- [ ] Confirm the full 2026 travel team (the packet only names Christina Ho and Jack Provost) and the build month.
- [ ] Add the rest of the officers to `src/data/people.json`, with majors, grad years, headshots, and LinkedIn links.
- [ ] Confirm the committees in `src/data/committees.json` match how the chapter is actually organized.
- [ ] Set `interestFormUrl` and the three social links in `src/data/site.json`.
- [x] Homepage stats (3 bridges, about 475 people, about 25 members).
- [x] Hero, gallery, and bridge photos from the sponsorship packet.
- [ ] Committee photos and headshots.
- [ ] Update `sponsorUses`, `sponsorTiers`, and `bridgeCost` in `site.json` each year from the new sponsorship packet.
- [x] Public contact is uweiabridge@gmail.com (from the sponsorship packet).
- [ ] Update `meetingInfo` in `site.json` if the meeting time or room changes.
