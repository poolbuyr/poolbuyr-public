# Demo product photography

Photographs for the pretend storefront at `/vendor/demo` — the shop owner
"Wolweverij Noord" and its wool catalogue.

These are **demo assets only**. They are not products we sell, and nothing in
the app references them by anything other than a hardcoded filename.

## Provenance

Sourced from [Pexels](https://www.pexels.com/license/) (free to use, no
attribution required — credited anyway). Per-image photographer and source URL
are in `CREDITS.json`.

## Regenerating

The fetch is not a committed script; it was run once with the Pexels key from
`.env.nuc`, resizing each photo to a centred 800×800 square crop and stepping
JPEG quality down until the file fit under 150KB:

```js
await sharp(buf)
  .resize(800, 800, { fit: 'cover', position: 'centre' })
  .jpeg({ quality, mozjpeg: true, progressive: true })
  .toFile(`demo-images/${slug}.jpg`);
```

To replace one, export a square image at 800×800 to `demo-images/<slug>.jpg` —
the filenames are the contract with `VendorDemoStore.tsx`, and a missing file
falls back to the card's gradient rather than showing a broken image.
