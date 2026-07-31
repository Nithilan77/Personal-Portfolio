# Nithilan S — Portfolio

React 19 + Vite + Tailwind CSS v4. Dark/light theme, responsive, no backend.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
```

---

## The three things to do next

### 1. Add your portrait

Drop a photo at **`public/img/portrait.jpg`** and it appears automatically. Until
you do, the hero shows an "NS" monogram frame — that's a deliberate fallback, not
a broken image, so the site is safe to deploy as-is.

Shoot it against a plain wall, facing a window, shoulders square, neutral top.
Portrait crop, roughly 4:5. It gets a slight grayscale treatment to sit with the
palette.

### 2. Add the Filing Intelligence screenshot

Save it to `public/img/filing-intelligence.png`, then in
**`src/data/projects.js`** find the `filing-intelligence` entry and change:

```js
image: null,
```

to:

```js
image: "/img/filing-intelligence.png",
```

The best shot is the answer view with the inline `[n]` citations visible.

### 3. Deploy

1. Push this to GitHub.
2. Go to vercel.com, sign in with GitHub, **Add New -> Project**, pick the repo.
3. Vercel detects Vite automatically. Click Deploy.
4. **Project Settings -> Domains** -> change the domain to `nithilan.vercel.app`.

Every `git push` redeploys. If you later buy `nithilan.dev`, add it under the
same Domains screen and update the three `nithilan.vercel.app` URLs in
`index.html`.

---

## Editing content

Almost everything lives in **`src/data/projects.js`** — projects, experience,
skills, education. Edit that file rather than the components.

| What | Where |
| --- | --- |
| Projects, experience, skills, education | `src/data/projects.js` |
| Bio paragraphs, activities | `src/components/About.jsx` |
| Headline and hero stats | `src/components/Hero.jsx` |
| Colours and type | `src/index.css` (top of file) |
| Resume PDF | `public/Nithilan-S-Resume.pdf` |
| Social preview image | `public/og.png` |

### Certifications

Add a PDF or image to a folder under `public/certifications/`, then:

```bash
npm run update-certs
```

That rescans the folder and rewrites `src/data/certifications.json`.

### Contact form

Web3Forms, keyed to `nithilan7437@gmail.com`. The access key sits in
`src/components/Contact.jsx` — it's a public key, safe to commit. Submissions
arrive by email; there's no server to run.

---

## Design notes

- **Palette** — ink-blue near-black with a brass accent, inverted to cool paper
  in light mode. Both themes are defined as CSS variables at the top of
  `src/index.css`; change them there and everything follows.
- **Type** — Newsreader for display, IBM Plex Sans for body, IBM Plex Mono for
  anything numeric. The mono face carries all the data so measurements read as
  measurements.
- **The tables are the point.** Each project ends in a real metrics table, with
  the shipped configuration marked. That is the thing this site has that other
  student portfolios do not, so it is given the visual weight.
