# The Outside Eye — landing page

A single-page, static site. No build step, no framework — just
`index.html`, `styles.css`, and `script.js`.

**Live at:** [getanoutsideeye.com](https://getanoutsideeye.com)
**Repo:** github.com/LouRiley/outside-eye-site (deployed via GitHub Pages)

## Status

- ✅ Domain connected (`getanoutsideeye.com`, DNS via Squarespace/Google
  Workspace, pointed at GitHub Pages)
- ✅ Email live: `hello@getanoutsideeye.com`
- ✅ Checkout connected: both "Start the Reality Check — $349" buttons
  go to a live Stripe Payment Link (set as `CHECKOUT_URL` near the top
  of `script.js`)

Nothing left to configure — this is the live, working version.

## Files

```
index.html          the page
styles.css           all styling
script.js            footer year + Stripe checkout-link wiring
assets/favicon.svg   O|E monogram favicon
```

## Making future changes

1. Edit the file(s) locally (or ask Claude to).
2. On github.com, go to the repo → **"Add file" → "Upload files."**
3. Select the changed file(s) — same filename overwrites what's there.
4. **Commit changes.**
5. GitHub Pages redeploys automatically, usually within a minute or two.

If the Stripe link ever needs to change, update `CHECKOUT_URL` in
`script.js` and re-upload just that one file.

## Notes

- Type is loaded from Google Fonts (Bodoni Moda + Inter) via the
  `<link>` tags in `<head>` — no local font files needed.
- The page respects `prefers-reduced-motion` and has visible
  keyboard focus states.
- No analytics, cookies, or tracking are included.

