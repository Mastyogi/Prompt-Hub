# Testing Guide — Rajnikant Landing Page

**Goal:** Validate all functionality before launch

---

## 🧪 Local Testing

### 1. Start Development Server
```bash
npm install
npm run dev
# Opens http://localhost:3000
```

### 2. Open in Browser
- Chrome/Firefox/Safari
- Open DevTools (F12)
- Check Console for errors
- Check Network tab for API calls

---

## ✅ Functional Tests

### Navigation
- [ ] Click logo → scrolls to top
- [ ] Click "Features" → scrolls to #features
- [ ] Click "Demo" → scrolls to #demo
- [ ] Click "Proof" → scrolls to #proof
- [ ] Click "FAQ" → scrolls to #faq
- [ ] All links work on mobile too

### Buttons
- [ ] "Get Started" buttons clickable
- [ ] "Watch Demo" buttons clickable
- [ ] Buttons change color on hover
- [ ] Buttons scale on click

### Mobile Menu
- [ ] Menu icon visible on mobile (<640px)
- [ ] Click icon → menu opens
- [ ] Click link → menu closes
- [ ] Click icon again → menu closes
- [ ] No menu on desktop

### Scroll Animations
- [ ] Hero section fades in
- [ ] Cards slide up as you scroll
- [ ] Smooth scrolling on link clicks
- [ ] No janky animations

---

## 📋 Form Testing

### Valid Input
- [ ] Enter name "John Doe"
- [ ] Enter email "john@example.com"
- [ ] Click "Get Started Free"
- [ ] Shows loading state
- [ ] Shows success message
- [ ] Form clears after success
- [ ] Auto-reset after 3 seconds

### Empty Input
- [ ] Leave name empty
- [ ] Try submit
- [ ] Shows error: "Please fill all fields"
- [ ] Form not submitted

### Invalid Email
- [ ] Enter name
- [ ] Enter invalid email "notanemail"
- [ ] Click submit
- [ ] Shows error: "Please enter a valid email"
- [ ] Form not submitted

### Valid but Nonexistent
- [ ] Enter "test@test.com"
- [ ] Should still accept (validation passes)
- [ ] Lead captured with that email

### Special Characters
- [ ] Name: "José María"
- [ ] Email: "test+tag@example.com"
- [ ] Both should work

---

## 📱 Responsive Tests

### Mobile (320px width)
```bash
# In Chrome: F12 → Device Toolbar → iPhone SE
```

- [ ] All sections render
- [ ] Text readable
- [ ] Buttons clickable
- [ ] Form inputs visible
- [ ] Menu works
- [ ] No horizontal scroll
- [ ] Spacing looks good

### Tablet (768px)
```bash
# Device Toolbar → iPad
```

- [ ] Layout adjusts correctly
- [ ] Two-column sections work
- [ ] Form centered
- [ ] Navigation good
- [ ] No overflow

### Desktop (1200px+)
- [ ] Full layout
- [ ] Side-by-side sections
- [ ] All features visible
- [ ] Spacing balanced

### Test Devices
- [ ] iPhone (Safari)
- [ ] Android phone (Chrome)
- [ ] iPad (Safari)
- [ ] Desktop 1920x1080
- [ ] Ultrawide 3440x1440

---

## ⚡ Performance Tests

### Build
```bash
npm run build
```

- [ ] Build succeeds
- [ ] No warnings
- [ ] Build time < 30s
- [ ] Build size < 5MB

### Load Time
1. Open DevTools → Network
2. Reload page (Cmd/Ctrl+Shift+R)
3. Check:
   - [ ] Total time < 2 seconds
   - [ ] JS bundle < 200KB
   - [ ] CSS bundle < 50KB
   - [ ] Images optimized

### Lighthouse
1. Open DevTools → Lighthouse
2. Run audit
3. Check scores:
   - [ ] Performance > 90
   - [ ] Accessibility > 90
   - [ ] Best Practices > 90
   - [ ] SEO > 90

### Core Web Vitals
```bash
# Use PageSpeed Insights
# URL: https://pagespeed.web.dev
```

- [ ] LCP < 2.5s (Largest Contentful Paint)
- [ ] FID < 100ms (First Input Delay)
- [ ] CLS < 0.1 (Cumulative Layout Shift)

---

## 🔗 API Tests

### Health Check
```bash
curl http://localhost:3000/api/health
```

Expected response:
```json
{
  "status": "ok",
  "timestamp": "2026-04-08T...",
  "version": "1.0.0"
}
```

### Lead Capture
```bash
curl -X POST http://localhost:3000/api/leads/capture \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "name": "Test User",
    "source": "landing_page"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Lead captured successfully",
  "lead_id": "lead_1712640000000"
}
```

### Error Handling
- [ ] Missing email → 400 with error message
- [ ] Invalid email → 400 with error message
- [ ] Network error → Form shows error
- [ ] API timeout → Form shows error

---

## 🌍 Browser Compatibility

### Desktop
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile
- [ ] Chrome Mobile
- [ ] Safari iOS
- [ ] Firefox Mobile
- [ ] Samsung Internet

### Older Browsers (Optional)
- [ ] IE11 (should degrade gracefully)
- [ ] Safari 12 (CSS may not be perfect)

---

## ♿ Accessibility Tests

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Can activate buttons with Enter
- [ ] Focus visible (outline or highlight)
- [ ] Focus order logical (top to bottom)
- [ ] Can close mobile menu with Escape

### Screen Reader (NVDA/JAWS/VoiceOver)
- [ ] All images have alt text
- [ ] Form labels associated with inputs
- [ ] Buttons labeled clearly
- [ ] Headings hierarchical (h1, h2, h3)
- [ ] Links have descriptive text (not "click here")

### Color Contrast
- [ ] Text readable on background
- [ ] No color-only information
- [ ] Sufficient contrast ratio (4.5:1)

---

## 🔒 Security Tests

### No Sensitive Data in Code
- [ ] No API keys in repository
- [ ] No passwords in code
- [ ] No tokens committed
- [ ] Check `.gitignore` working

### Form Security
- [ ] Email input sanitized
- [ ] No XSS vulnerabilities
- [ ] Form data validated server-side
- [ ] HTTPS enforced (post-deploy)

### CORS
- [ ] API accepts requests from landing page
- [ ] API rejects requests from other origins
- [ ] Credentials handled securely

---

## 📊 Analytics Tests

### Google Analytics (if set up)
- [ ] Page view tracked
- [ ] Scroll depth tracked
- [ ] Button clicks tracked
- [ ] Form submission tracked
- [ ] Check in GA dashboard

### Error Tracking (if set up)
- [ ] Console errors logged
- [ ] API errors logged
- [ ] Form errors logged
- [ ] Check in error dashboard

---

## 🚀 Pre-Deployment Checklist

### Code Quality
- [ ] No console errors
- [ ] No warnings
- [ ] Code formatted
- [ ] Comments clear

### Content
- [ ] All text proofread
- [ ] No typos
- [ ] Links correct
- [ ] Images loaded
- [ ] Videos embedded

### Functionality
- [ ] Form works
- [ ] All sections render
- [ ] Animations smooth
- [ ] Mobile responsive

### Performance
- [ ] Build successful
- [ ] Load time acceptable
- [ ] Lighthouse score good
- [ ] No large resources

### Security
- [ ] No sensitive data
- [ ] Env vars set
- [ ] HTTPS ready
- [ ] CORS configured

---

## 📝 Test Report Template

```markdown
# Landing Page Test Report
Date: 2026-04-08
Tester: [Your Name]

## Summary
✅ All tests passed
⚠️ 2 minor issues found
❌ 0 critical issues

## Functional Tests
- [x] Navigation works
- [x] Form submits
- [x] Animations smooth
- [x] Mobile menu works
- [x] All CTAs clickable

## Responsive Tests
- [x] Mobile (320px)
- [x] Tablet (768px)
- [x] Desktop (1200px)

## Performance
- [x] Load time < 2s
- [x] Lighthouse > 90
- [x] CWV passing

## Issues Found
1. Minor: Button hover slightly off on mobile
   - Status: Fixed
   - Commit: abc123

## Conclusion
Ready for production deployment.
Approved by: [Your Name]
```

---

## 🐛 Known Issues & Fixes

### Issue: Form not submitting
**Cause:** API endpoint not configured
**Fix:** Set `NEXT_PUBLIC_API_URL` in .env.local

### Issue: Mobile menu not closing
**Cause:** Click handler not propagating
**Fix:** Update Header.jsx line 45

### Issue: Animations jerky on mobile
**Cause:** Too many simultaneous animations
**Fix:** Reduce number of Framer Motion components

### Issue: Images not loading
**Cause:** Public folder path incorrect
**Fix:** Use `/images/name.jpg` (not `./images/`)

---

## ✅ Final Sign-Off

Before launch, confirm:

```
[ ] All functional tests passed
[ ] All responsive tests passed
[ ] Performance acceptable
[ ] Security verified
[ ] Form working
[ ] Analytics configured
[ ] No critical bugs
[ ] Ready for production

Signed off by: ________________
Date: ________________
```

---

**Next:** Deploy to Vercel, monitor metrics, iterate based on data.
