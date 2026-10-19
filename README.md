# Mana Hubs

The Mana Hubs link tree, published on its own at [links.manahubs.com](https://links.manahubs.com).

This repository is only Mana Hubs. Mana Common, Mana Fashion, and Mana Tech stay on the combined staging site.

## Local preview

```bash
npm install
npm run dev
```

The dev server listens on port 4177.

## Production export

GitHub Pages builds this app with `STATIC_EXPORT=1` and no base path, so images and pages are served from `/`. The published artifact includes a `CNAME` file for `links.manahubs.com`.
