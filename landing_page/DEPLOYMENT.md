# Deployment Guide — Rajnikant Landing Page

**Quick Deploy:** 5 minutes to live

---

## 🚀 Option 1: Vercel (Easiest, Recommended)

### Prerequisites
- GitHub account (push code)
- Vercel account (free at vercel.com)

### Steps

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial landing page commit"
git remote add origin https://github.com/yourusername/rajnikant-landing.git
git push -u origin main
```

2. **Deploy on Vercel**
- Go to vercel.com
- Click "New Project"
- Select your GitHub repo
- Click "Deploy"
- Done! (takes 2 min)

### Environment Variables on Vercel
```
NEXT_PUBLIC_API_URL = https://api.rajnikant.ai
LEAD_MANAGER_API = https://api.rajnikant.ai/leads
```

### Custom Domain
- In Vercel dashboard → Project Settings → Domains
- Add your domain (rajnikant.ai)
- Update DNS records (Vercel provides)

---

## 🐳 Option 2: Docker (For Your Server)

### Build Image
```bash
# Create Dockerfile in project root:
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

### Build & Run
```bash
# Build
docker build -t rajnikant-landing:latest .

# Run
docker run -p 3000:3000 \
  -e NEXT_PUBLIC_API_URL=https://api.rajnikant.ai \
  -e LEAD_MANAGER_API=https://api.rajnikant.ai/leads \
  rajnikant-landing:latest
```

### Push to Docker Hub
```bash
docker tag rajnikant-landing:latest yourusername/rajnikant-landing:latest
docker push yourusername/rajnikant-landing:latest
```

---

## 🔧 Option 3: Manual VPS (AWS/DigitalOcean/Linode)

### Setup (Ubuntu 22.04)

1. **Install Node.js**
```bash
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. **Clone & Setup**
```bash
git clone https://github.com/yourusername/rajnikant-landing.git
cd rajnikant-landing
npm install
npm run build
```

3. **Create Systemd Service**
```bash
sudo nano /etc/systemd/system/rajnikant-landing.service
```

Paste:
```ini
[Unit]
Description=Rajnikant Landing Page
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/home/ubuntu/rajnikant-landing
ExecStart=/usr/bin/npm start
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

4. **Start Service**
```bash
sudo systemctl enable rajnikant-landing
sudo systemctl start rajnikant-landing
sudo systemctl status rajnikant-landing
```

5. **Setup Nginx Reverse Proxy**
```bash
sudo apt-get install -y nginx
sudo nano /etc/nginx/sites-available/default
```

Paste:
```nginx
upstream rajnikant {
    server localhost:3000;
}

server {
    listen 80;
    server_name rajnikant.ai www.rajnikant.ai;

    location / {
        proxy_pass http://rajnikant;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

6. **Enable SSL (Let's Encrypt)**
```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d rajnikant.ai -d www.rajnikant.ai
```

7. **Restart Nginx**
```bash
sudo systemctl restart nginx
```

---

## 📋 Pre-Deployment Checklist

### Code
- [ ] All components tested locally
- [ ] No console errors (`npm run dev`)
- [ ] Responsive (check mobile)
- [ ] Form submission works
- [ ] Links working

### Configuration
- [ ] Environment variables set
- [ ] API endpoints correct
- [ ] Database connection tested
- [ ] Analytics configured

### Performance
- [ ] `npm run build` succeeds
- [ ] Build size < 5MB
- [ ] No errors in build output
- [ ] Lighthouse score > 90

### Security
- [ ] API keys in .env (not in code)
- [ ] HTTPS enabled
- [ ] CORS configured
- [ ] Rate limiting set

### Content
- [ ] Copy reviewed & typo-checked
- [ ] Images compressed
- [ ] Links verified
- [ ] CTAs set correctly

---

## ✅ Post-Deployment

### Verify Live
```bash
curl https://rajnikant.ai/api/health
# Should return: {"status":"ok",...}
```

### Monitor
- **Errors:** Set up error tracking (Sentry, Rollbar)
- **Performance:** Monitor with Vercel Analytics or DataDog
- **Uptime:** Set up monitoring (Pingdom, Uptime Robot)
- **Logs:** Check logs in Vercel dashboard or via SSH

### Test Live Site
1. Visit homepage
2. Scroll through all sections
3. Fill lead form
4. Verify email capture works
5. Check mobile on phone
6. Test on different browsers

---

## 🔄 Continuous Deployment

### Auto-deploy on Git Push (Vercel)
- Connected to GitHub
- Auto-deploys on every push to `main`
- Preview URLs for PRs
- Rollback if needed

### Manual Deploy
```bash
# Code changes
git add .
git commit -m "Description"
git push origin main

# Vercel auto-deploys in 30 seconds
```

---

## 🐛 Troubleshooting

### Deploy Fails
**Check:**
- Build log in Vercel dashboard
- Environment variables set
- No syntax errors (`npm run build`)
- Node version compatible (18+)

### Site Loads Slow
**Optimize:**
- Check CDN enabled (Vercel does by default)
- Compress images
- Check API response times
- Enable caching headers

### Form Not Working
**Debug:**
- Check Network tab in DevTools
- Verify API endpoint
- Check CORS headers
- Check server logs

### Domain Not Resolving
**Fix:**
- Verify DNS records updated (wait 24h)
- Check domain registrar settings
- Ensure CNAME/A records correct

---

## 📊 Monitoring

### Set Up Analytics
```javascript
// src/pages/_app.jsx
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_ID');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
```

### Key Metrics to Track
- **Page Views:** Traffic volume
- **Bounce Rate:** Engagement
- **Scroll Depth:** Interest
- **CTA Clicks:** Conversion intent
- **Form Submissions:** Actual conversions
- **Conversion Rate:** Primary metric

---

## 🔐 Security

### Essential
- [ ] HTTPS enabled (auto on Vercel)
- [ ] API keys in .env only
- [ ] CORS configured
- [ ] Rate limiting on API
- [ ] Input validation on form

### Additional
- [ ] WAF enabled (optional)
- [ ] DDoS protection (Cloudflare)
- [ ] Regular backups
- [ ] Security headers set
- [ ] Dependency scanning

---

## 📞 Support

### Vercel Support
- Dashboard: vercel.com
- Docs: vercel.com/docs
- Email: support@vercel.com

### Troubleshooting
- Check `npm run build` output
- Review Vercel deployment logs
- Check function logs in dashboard
- Enable Debug mode

---

**Result:** Landing page live, collecting leads, optimizing conversions.

Next: Connect to lead system, monitor metrics, scale with ads.
