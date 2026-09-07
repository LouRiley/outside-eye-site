# The Outside Eye — landing page

A single-page, static site. No build step, no framework — just
`index.html`, `styles.css`, and `script.js`.

## Files

```
index.html          the page
styles.css           all styling
script.js            footer year + optional checkout-link wiring
assets/favicon.svg   O|E monogram favicon
```

## Before you launch — two things to replace

1. **Email address.** The placeholder `hello@theoutsideeye.com` appears
   twice in `index.html` (offer section + footer), each marked with an
   HTML comment: `REPLACE with your real branded email address`.

2. **Checkout / intake link.** The two "Start the Reality Check — $349"
   buttons currently point at `#`. Once you have a Stripe Payment Link,
   Gumroad link, or intake form ready, either:
   - paste the URL into `CHECKOUT_URL` near the top of `script.js`, or
   - replace `href="#"` on the `data-role="checkout-link"` elements in
     `index.html` directly.

## Deploying to GitHub Pages

1. Create a new GitHub repository (e.g. `outside-eye-site`).
2. Upload these files to the repo root, preserving the `assets/`
   folder — either via the GitHub web UI ("Add file → Upload files")
   or:
   ```
   git init
   git add .
   git commit -m "Launch The Outside Eye landing page"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment," set **Source** to "Deploy from a
   branch," branch `main`, folder `/ (root)`. Save.
5. GitHub gives you a URL like `https://<you>.github.io/<repo>/`
   within a minute or two.
6. Optional: to use `theoutsideeye.com`, add a `CNAME` file to the
   repo root containing just your domain, and point your domain's
   DNS at GitHub Pages (GitHub's Pages docs have the exact records).

## Notes

- Type is loaded from Google Fonts (Bodoni Moda + Inter) via the
  `<link>` tags in `<head>` — no local font files needed.
- The page respects `prefers-reduced-motion` and has visible
  keyboard focus states.
- No analytics, cookies, or tracking are included.
