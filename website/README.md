# roaradd.com — AI Entry Point Website

Marketing website for roaradd.com's AI Entry Point (AIP) Gateway, built on Google's Agent-to-Agent (A2A) Protocol and Vertex AI.

## Tech Stack

- React + Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- lucide-react

## Local Development

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

## Build

```bash
# Standard build
pnpm run build:github

# Output goes to dist/public/
```

## GitHub Pages Deployment

This repo is configured to automatically deploy to GitHub Pages on every push to `main`.

### First-time Setup

1. Push this repo to GitHub
2. Go to your repository **Settings → Pages**
3. Under **Source**, select **GitHub Actions**
4. Push to `main` — the site will deploy automatically

The live URL will be: `https://<your-username>.github.io/<repo-name>/`

### Custom Domain (roaradd.com)

To use `roaradd.com`:

1. In **Settings → Pages**, add your custom domain `roaradd.com`
2. Add these DNS records at your domain registrar:

```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     <your-username>.github.io
```

3. Check **Enforce HTTPS** once DNS propagates (can take up to 48 hours)
4. Update `BASE_PATH` in the deploy workflow to `/` (already set correctly)

## Project Structure

```
src/
├── pages/
│   └── Home.tsx        # Main landing page
├── components/
│   └── ui/             # UI components (Button, Card, Badge)
├── lib/
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css           # Tailwind + theme variables
public/
└── images/
    └── hero-abstract.png
```
