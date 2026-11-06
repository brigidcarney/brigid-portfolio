# brigidcarney.com

Personal portfolio for Brigid Carney: Pilates, writing, music and nature
photography. Vite + React + Tailwind 4, deployed to GitHub Pages on push to
`main`. Brigid often edits by chatting, so explain changes in plain words.

## Working with Brigid

- Preview changes locally first (`npm run dev -- --port 5174`). Publish only
  when asked; a push to `main` goes live.
- All copy and links live in `src/data/site.ts`. Change text there, not in
  components.
- Never add her phone number or location (city, state) anywhere, including
  meta tags. Contact is email, LinkedIn and Instagram icons only.
- `brand-guide.pdf` ("Quiet Ritual") is private and gitignored. Read it for
  direction, but never commit it or copy its contents into the repo. Its
  palette and voice notes are ideas, not yet adopted; ask before applying them.

## Writing style

- **Lowercase** for headings, nav, taglines and buttons: "my experience",
  "get in touch", "see resume", and the experience section titles
  ("copywriting", "pilates", "photography").
- **Short lines are quiet and simple.** Taglines are a few words with `&`
  instead of "and": "pilates instructor, writer, violinist &
  photographer", "a free-spirited soul, rooted in ritual".
- **Long copy is her own voice:** first person, warm and lyrical, with music
  and nature imagery (rhythm, melodies, birdsong, rain, breeze). Keep her
  wording as written; don't tighten or "fix" it without asking.
- Use curly quotes and apostrophes (’ “ ”) in body copy.
- Buttons are verb + noun, lowercase: "see resume", "my instagram".
- Never write placeholder copy as if it were hers. Mark it clearly so she
  can replace it.

## Design

- **Palette** (`src/index.css`): cream `#f4ece3` page, ink `#2b2622` text,
  olive `#776c55` home band and underline accents. Experience bands are
  taupe `#74685f` (copywriting), slate `#4b5c63` (pilates) and moss
  `#756a52` (photography), with cream text.
- **Type:** Cormorant Garamond at regular weight for headings and the name;
  Jost Light for everything else. Nothing bold.
- **Lines stay thin.** Icons are 1.25px outlines with round caps, no filled
  shapes. The active nav item is a thin olive underline, not a weight change.
- **No rounded corners** (radius 0), no shadows on content, generous space.
- **Logo** is her hand-drawn moon and bird (`src/assets/logo.png`), used as a
  CSS mask so it takes the text color. Don't redraw or trace it.
- Short centered lines use `text-balance` so they don't leave one word alone
  on a phone.
- Check every layout change at 375, 768 and 1280px wide, with no sideways
  scrolling on phones.
