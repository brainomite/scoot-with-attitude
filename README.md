# scoot-with-attitude

Coming-soon landing page for mobility scooter attachments with personality — little creatures with attitude that clip onto your ride. First up: **Duck Off**.

## Running locally

Static site, no build step. Serve the folder however you like, e.g.:

```
python3 -m http.server 8000
```

## Deploying to GitHub Pages

Push to `main` and enable Pages (Settings → Pages → Deploy from branch → `main` / root). `index.html` is already at the repo root.

## Replacing the placeholder photos

Drop your real photos into `images/`, overwriting:

- `images/duck-off-1.jpg` — the under-seat shot
- `images/duck-off-2.jpg` — the rear-rack shot

Same filenames, so no HTML changes needed.

## Wiring up the email signup

The "Notify Me" forms in `script.js` are currently front-end only (they just show a confirmation message, they don't send anywhere). To actually collect emails, wire the form `submit` handlers to a service like Mailchimp, ConvertKit, or Formspree.
