# Deployment Guide

## Vercel Deployment

This project is configured to work properly with Vercel deployment without refresh issues.

### Files Created for Vercel:

1. **`vercel.json`** - Main configuration file that handles client-side routing
2. **`public/_redirects`** - Backup redirects file
3. **HashRouter** - Using HashRouter instead of BrowserRouter for better compatibility

### Deployment Steps:

1. **Push to GitHub:**

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically detect it's a Vite project
   - Build command: `npm run build`
   - Output directory: `dist`

### Why This Works:

- **HashRouter**: Uses URL hashes (#) which don't trigger server requests on refresh
- **vercel.json**: Redirects all routes to index.html for client-side routing
- **\_redirects**: Backup file for static hosting compatibility

### Testing:

After deployment, test these scenarios:

- ✅ Direct URL access (e.g., `yoursite.vercel.app/#/about`)
- ✅ Page refresh on any route
- ✅ Navigation between sections
- ✅ Back/forward browser buttons

### Alternative (if you prefer BrowserRouter):

If you want to use BrowserRouter instead of HashRouter:

1. Change back to `BrowserRouter` in `App.jsx`
2. Keep the `vercel.json` file
3. The `vercel.json` will handle the routing redirects

The current setup with HashRouter is more reliable for static hosting.
