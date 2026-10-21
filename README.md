# jparpar.com

My personal site. SvelteKit, fully prerendered with `@sveltejs/adapter-static`.

## Develop

```sh
npm install
npm run dev      # http://localhost:5173 (draft posts are visible here)
npm run build    # static site in build/
npm run preview  # serve the production build
```

## Deploy

`build/` is plain static files, so any static host works (GitHub Pages, Cloudflare Pages, Netlify, Vercel). Links assume the site is served from the domain root (a custom domain or a `<user>.github.io` repository).
