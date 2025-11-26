# Deployment Guide - Eco Web Agency

This guide covers deploying the Eco Web Agency website to Netlify with a custom domain.

## Prerequisites

- Node.js 18+ installed
- A Netlify account (free tier works)
- Access to your domain registrar (for ecowebagency.com DNS configuration)
- A GitHub account (recommended for continuous deployment)

---

## Part 1: Deploy to Netlify

### Option A: Deploy via GitHub (Recommended)

1. **Initialize Git repository:**
   ```bash
   cd C:\Users\Seenu\Desktop\eco-web-agency
   git init
   git add .
   git commit -m "Initial commit: Eco Web Agency website"
   ```

2. **Create GitHub repository:**
   - Go to https://github.com/new
   - Create a new repository (e.g., `eco-web-agency`)
   - Don't initialize with README (we already have code)

3. **Push to GitHub:**
   ```bash
   git remote add origin https://github.com/yourusername/eco-web-agency.git
   git branch -M main
   git push -u origin main
   ```

4. **Connect to Netlify:**
   - Log in to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your `eco-web-agency` repository
   - Build settings should auto-detect:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`
   - Click "Deploy site"

### Option B: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project:**
   ```bash
   cd C:\Users\Seenu\Desktop\eco-web-agency
   npm run build
   ```

3. **Login to Netlify:**
   ```bash
   netlify login
   ```

4. **Deploy:**
   ```bash
   netlify deploy --prod
   ```
   - When prompted, choose "Create & configure a new site"
   - Select your team
   - Enter site name (e.g., `ecowebagency`)
   - Publish directory: `dist`

### Option C: Manual Drag & Drop

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to https://app.netlify.com/drop
   - Drag and drop the `dist` folder
   - Your site will be deployed with a random Netlify subdomain

---

## Part 2: Configure Environment Variables

Your site uses the Gemini API. You need to add the API key to Netlify:

1. **In Netlify Dashboard:**
   - Go to Site Settings → Environment Variables
   - Click "Add a variable"
   - Add:
     - **Key:** `GEMINI_API_KEY`
     - **Value:** Your Gemini API key
     - **Scopes:** All scopes

2. **Redeploy:**
   - After adding environment variables, trigger a new deployment
   - Go to Deploys → Trigger deploy → Deploy site

---

## Part 3: Set Up Custom Domain (ecowebagency.com)

### Step 1: Add Custom Domain in Netlify

1. **In Netlify Dashboard:**
   - Go to Site Settings → Domain Management
   - Click "Add custom domain"
   - Enter: `ecowebagency.com`
   - Click "Verify"
   - Also add `www.ecowebagency.com`

### Step 2: Configure DNS

You have two options for DNS configuration:

#### Option A: Use Netlify DNS (Recommended)

1. **In Netlify:**
   - After adding your domain, click "Set up Netlify DNS"
   - Netlify will provide 4 nameservers

2. **At Your Domain Registrar:**
   - Log in to where you bought ecowebagency.com
   - Find DNS/Nameserver settings
   - Replace existing nameservers with Netlify's 4 nameservers
   - Save changes

3. **Wait for Propagation:**
   - DNS changes can take 24-48 hours
   - Check status in Netlify Dashboard

#### Option B: Use External DNS

1. **At Your Domain Registrar:**
   - Add an A record:
     - **Type:** A
     - **Name:** @ (or leave blank)
     - **Value:** `75.2.60.5` (Netlify's load balancer IP)
     - **TTL:** 3600

   - Add a CNAME record for www:
     - **Type:** CNAME
     - **Name:** www
     - **Value:** your-site-name.netlify.app
     - **TTL:** 3600

2. **Verify in Netlify:**
   - Go back to Netlify Dashboard
   - Domain should show as "Awaiting external DNS"
   - Once DNS propagates, it will show as active

### Step 3: Enable HTTPS

1. **In Netlify Dashboard:**
   - Go to Site Settings → Domain Management → HTTPS
   - Click "Verify DNS configuration"
   - Once verified, click "Provision certificate"
   - Netlify will automatically provision a free Let's Encrypt SSL certificate

2. **Force HTTPS (Recommended):**
   - In the same section, enable "Force HTTPS"
   - This redirects all HTTP traffic to HTTPS

---

## Part 4: Verify Deployment

### Test the following:

1. **Site loads correctly:**
   - Visit https://ecowebagency.com
   - All pages should load

2. **Scroll-to-top works:**
   - Navigate between pages using header/footer links
   - Each page should start at the top (not scrolled down)

3. **All routes work:**
   - Test all navigation links
   - Refresh on any route (e.g., `/services/seo`)
   - Should not get 404 errors

4. **Contact form works:**
   - Submit the contact form
   - Check that Gemini API integration works

5. **Mobile responsive:**
   - Test on mobile devices or use browser dev tools
   - All pages should be mobile-friendly

---

## Part 5: Continuous Deployment (GitHub Method)

If you used GitHub deployment, every push to the main branch will automatically trigger a new deployment:

```bash
# Make changes to your code
git add .
git commit -m "Update homepage content"
git push origin main
```

Netlify will automatically:
1. Detect the push
2. Run `npm run build`
3. Deploy the new `dist` folder
4. Your changes will be live in ~2 minutes

---

## Build Configuration Summary

The following files configure the Netlify deployment:

- **`netlify.toml`** - Main Netlify configuration
  - Build command: `npm run build`
  - Publish directory: `dist`
  - SPA redirects for React Router
  - Security headers
  - Cache configuration

- **`public/_redirects`** - Backup redirect rules
  - Ensures SPA routing works correctly

- **`.gitignore`** - Prevents committing:
  - `node_modules/`
  - `dist/`
  - `.env` files
  - Build artifacts

---

## Troubleshooting

### Issue: 404 errors on refresh

**Solution:** Ensure `_redirects` file is in the `dist` folder after build:
```bash
npm run build
ls dist/_redirects  # Should exist
```

### Issue: Environment variables not working

**Solution:**
1. Check Netlify Dashboard → Environment Variables
2. Ensure variable name matches exactly: `GEMINI_API_KEY`
3. Redeploy after adding variables

### Issue: Scroll-to-top not working

**Solution:**
1. Verify `ScrollToTop` component is imported in `App.jsx`
2. Check browser console for errors
3. Clear browser cache and test again

### Issue: Custom domain not connecting

**Solution:**
1. Verify DNS records are correct
2. Wait 24-48 hours for DNS propagation
3. Use https://dnschecker.org to check propagation status
4. Ensure nameservers are updated at registrar

### Issue: SSL certificate not provisioning

**Solution:**
1. Verify DNS is fully propagated
2. Remove and re-add the domain in Netlify
3. Try clicking "Provision certificate" again
4. Contact Netlify support if issue persists

---

## Performance Optimization

After deployment, consider:

1. **Image Optimization:**
   - Compress images before uploading
   - Use modern formats (WebP)
   - Implement lazy loading

2. **Code Splitting:**
   - Already implemented via Vite
   - Each route loads only necessary code

3. **CDN Benefits:**
   - Netlify automatically distributes your site globally
   - Fast loading times worldwide

---

## Support & Resources

- **Netlify Documentation:** https://docs.netlify.com
- **Netlify Support:** https://answers.netlify.com
- **DNS Propagation Checker:** https://dnschecker.org
- **SSL Test:** https://www.ssllabs.com/ssltest/

---

## Quick Reference Commands

```bash
# Local development
npm run dev              # Start dev server at http://localhost:3000

# Build for production
npm run build           # Creates dist/ folder

# Preview production build
npm run preview         # Preview the dist/ folder locally

# Deploy (if using Netlify CLI)
netlify deploy --prod   # Deploy to production

# Git workflow
git add .
git commit -m "Your message"
git push origin main    # Triggers auto-deployment
```

---

**Congratulations!** Your Eco Web Agency website is now deployed and accessible at https://ecowebagency.com 🚀
