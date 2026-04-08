# Setup Instructions — Rajnikant Landing Page

**Time Required:** 5 minutes

---

## Step 1: Install Dependencies

```bash
# Navigate to project directory
cd landing_page

# Install all packages
npm install

# Verify installation
npm --version  # Should be 9+
node --version # Should be 18+
```

---

## Step 2: Create Environment File

```bash
# Copy example file
cp .env.example .env.local

# Edit with your values
nano .env.local
```

**Minimum required:**
```
NEXT_PUBLIC_API_URL=http://localhost:3000
LEAD_MANAGER_API=http://localhost:5000/api
```

---

## Step 3: Start Development Server

```bash
npm run dev

# You should see:
# ✓ ready started server on 0.0.0.0:3000, url: http://localhost:3000
```

Open browser to: `http://localhost:3000`

You should see:
- ✅ Dark theme landing page
- ✅ All sections visible
- ✅ Header with navigation
- ✅ Hero section with CTAs
- ✅ All other sections below

---

## Step 4: Test Locally

### Test Navigation
1. Click "Features" → Scrolls to features section
2. Click "Demo" → Scrolls to social proof
3. Click "Proof" → Scrolls to social proof
4. Click "FAQ" → Scrolls to FAQ

### Test Form
1. Scroll to "Lead Capture" section
2. Fill "Name": John Doe
3. Fill "Email": test@example.com
4. Click "Get Started Free"
5. Should see success message
6. Form should clear

### Test Mobile
1. Press F12 (DevTools)
2. Click Device Toolbar (mobile icon)
3. Select "iPhone SE"
4. Verify:
   - Menu icon appears
   - Single column layout
   - All text readable
   - Form visible

### Test Console
1. Press F12
2. Click "Console" tab
3. Should see no errors (warnings OK)
4. Verify health check: Type in console:
   ```javascript
   fetch('/api/health').then(r => r.json()).then(console.log)
   ```
   Should return `{status: 'ok', ...}`

---

## Step 5: Build for Production

```bash
npm run build

# Expected output:
# ✓ Compiled successfully
# ✓ Linting and checking validity of types  
# ✓ Collecting page data
# ✓ Generating static pages (X/X)
# ✓ Finalizing page optimization
# Route (pages) Size
# ...
```

**Verify:**
- ✅ No errors
- ✅ Build size < 5MB
- ✅ All pages compiled

---

## Step 6: Test Production Build Locally

```bash
npm run start

# Open http://localhost:3000
```

Verify everything works the same as development.

---

## Step 7: Deploy (Choose One Option)

### Option A: Vercel (Easiest - Recommended)

```bash
# 1. Create GitHub repo
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/rajnikant-landing
git push -u origin main

# 2. Go to vercel.com
# 3. Click "New Project"
# 4. Select your GitHub repo
# 5. Click "Deploy"
# ✅ Live in 30 seconds!

# Domain: rajnikant-landing.vercel.app
# Custom domain: vercel.com/domains
```

### Option B: Docker

```bash
# Build image
docker build -t rajnikant-landing:latest .

# Run locally
docker run -p 3000:3000 rajnikant-landing:latest

# Push to Docker Hub
docker tag rajnikant-landing:latest yourusername/rajnikant-landing:latest
docker push yourusername/rajnikant-landing:latest

# Deploy to cloud (AWS, DigitalOcean, etc)
```

### Option C: Traditional Server

```bash
# On your VPS:
git clone https://github.com/yourusername/rajnikant-landing.git
cd rajnikant-landing
npm install
npm run build
npm run start

# Set up Nginx reverse proxy
# Enable SSL with Let's Encrypt
# Start on boot with systemd
```

---

## Step 8: Configure After Deploy

### Add Custom Domain
1. Go to Vercel dashboard (if using Vercel)
2. Project Settings → Domains
3. Add your domain (rajnikant.ai)
4. Update DNS records

### Connect Lead Manager
Edit `.env.local` (or Vercel env vars):
```
LEAD_MANAGER_API=https://your-api.example.com/leads
```

### Enable Analytics
1. Create Google Analytics 4 account
2. Get measurement ID
3. Set env var:
   ```
   NEXT_PUBLIC_GA_ID=G_XXXXXXXXXX
   ```
4. Update `src/pages/_app.jsx` with GA script

### Enable Error Tracking
1. Create Sentry account
2. Create Next.js project
3. Get DSN
4. Set env var:
   ```
   NEXT_PUBLIC_SENTRY_DSN=https://...@sentry.io/...
   ```

---

## Troubleshooting

### Port 3000 Already in Use
```bash
npm run dev -- -p 3001
# Runs on 3001 instead
```

### Dependencies Conflict
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Fails
```bash
npm run build 2>&1 | tail -20
# Shows last 20 lines of error
```

Check for:
- Syntax errors (console logs misspelled)
- Missing imports
- Unsupported Node version

### Form Not Working
1. Open DevTools (F12)
2. Go to Network tab
3. Click "Get Started Free"
4. Look for POST request to `/api/leads/capture`
5. Check response for error

Common issues:
- API endpoint not configured (set LEAD_MANAGER_API)
- Backend not running (start Python server)
- CORS error (check API CORS headers)

### Slow Build
```bash
# Clear cache
rm -rf .next
npm run build
```

### Lighthouse Score Low
1. Check what's failing
2. Optimize:
   - Images (use WebP)
   - CSS (remove unused)
   - JS (code splitting)
   - Fonts (system fonts instead)

---

## Quick Reference

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Check code quality |
| `npm run test` | Run tests |

---

## Checklist

### Before Going Live
- [ ] npm install succeeds
- [ ] npm run dev works
- [ ] No console errors
- [ ] Form submits successfully
- [ ] Mobile responsive (test on phone)
- [ ] npm run build succeeds
- [ ] No build errors
- [ ] npm run start works
- [ ] Deploy method tested
- [ ] Domain configured
- [ ] Analytics enabled (optional)

### After Going Live
- [ ] Site loads
- [ ] All sections visible
- [ ] Form works
- [ ] Performance acceptable
- [ ] No errors in console
- [ ] Mobile works
- [ ] Links verified
- [ ] SEO meta tags present

---

## Get Help

### Documentation
- README.md — Project overview
- DEPLOYMENT.md — Deploy options
- TESTING.md — Test procedures

### Debugging
1. Check browser console (F12)
2. Check Vercel logs (if deployed)
3. Check npm run build output
4. Search GitHub issues for error message

### Common Resources
- Next.js docs: nextjs.org/docs
- TailwindCSS docs: tailwindcss.com/docs
- Vercel docs: vercel.com/docs
- React docs: react.dev

---

**You're all set!** 

Next: Deploy → Monitor → Optimize

Go live in 5 minutes! 🚀
