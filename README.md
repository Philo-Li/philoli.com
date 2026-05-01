# Create. Capture. Build.

I paint, photograph, write, and build things.
This is what happens when curiosity meets craft and code.

**[philoli.com](https://philoli.com)**

## Structure

- `src/`: Astro site source
- `public/`: static assets
- `scripts/i18n/`: locale generation scripts
- `services/opencode-go-proxy/`: standalone Cloudflare Worker used by the ebook translator

## Commands

- `npm run dev`: run the Astro site
- `npm run build`: build the Astro site
- `npm run i18n:translate`: generate locale JSON files from `src/i18n/en.json`
- `npm run proxy:dev`: run the Cloudflare proxy locally
- `npm run proxy:deploy`: deploy the Cloudflare proxy
