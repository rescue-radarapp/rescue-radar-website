# Rescue Radar Landing Page

A clean, mobile-first landing page for Rescue Radar vehicle recovery service.

## Deployment on Render

### Option 1: Deploy via Render Dashboard

1. Go to [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository (or use "Public Git Repository")
4. Configure:
   - **Name**: `rescue-radar-website`
   - **Runtime**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free (or Starter for production)
5. Click "Create Web Service"

### Option 2: Deploy via render.yaml (Blueprint)

1. Push this folder to a GitHub repository
2. In Render, go to "Blueprints" → "New Blueprint Instance"
3. Connect the repository
4. Render will auto-detect the `render.yaml` file

## Custom Domain Setup

### For rescue-radar.co.uk:

1. In Render dashboard, go to your web service
2. Click "Settings" → "Custom Domains"
3. Add `rescue-radar.co.uk` and `www.rescue-radar.co.uk`
4. Update your DNS records:

   **For root domain (rescue-radar.co.uk):**
   - Type: `A`
   - Name: `@`
   - Value: (Render will provide the IP)
   
   **For www subdomain:**
   - Type: `CNAME`
   - Name: `www`
   - Value: `rescue-radar-website.onrender.com`

5. Render will automatically provision SSL certificates (HTTPS)

### API Subdomain (api.rescue-radar.co.uk):

For your existing API on Render:
1. Go to your API service settings
2. Add custom domain: `api.rescue-radar.co.uk`
3. Add DNS record:
   - Type: `CNAME`
   - Name: `api`
   - Value: `rescue-radar-api.onrender.com`

## Local Development

```bash
npm install
npm start
```

Visit http://localhost:3000

## Features

- Mobile-first responsive design
- Dark theme with orange accent
- Fast loading (single HTML file, minimal dependencies)
- SEO optimized (meta tags, semantic HTML)
- Smooth scroll navigation
- Sections:
  - Hero with CTAs
  - How It Works (3 steps)
  - Coverage (UK-wide, starting Glasgow & Edinburgh)
  - Trust elements
  - Provider recruitment
  - Footer with contact

## Contact

help@rescue-radar.co.uk