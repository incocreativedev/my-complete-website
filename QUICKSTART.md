# 🎯 Quick Start Guide - Brian Chang Photography Prints

## What You Just Received

A complete, production-ready **React + Vite + Tailwind CSS** photography print shop with:
- Dark, cinematic design inspired by Taiwan (张 branding)
- Live Airtable integration for managing your photos
- Masonry galleries with full-screen lightbox
- Fully responsive (mobile-first)
- Ready to deploy in minutes

---

## ⚡ Get Running in 5 Steps

### Step 1: Set Up Airtable (15 minutes)
1. Go to [airtable.com](https://airtable.com) and create a free account
2. Open `AIRTABLE_SETUP.md` and follow the instructions exactly
3. Create your base with Albums and Photos tables
4. Upload 2-3 albums with 10-15 photos to start
5. Get your **Base ID** and **Personal Access Token**

### Step 2: Install Dependencies (2 minutes)
```bash
# Open Terminal/Command Prompt
cd path/to/brian-chang-prints

# Install packages
npm install
```

### Step 3: Configure Environment (1 minute)
```bash
# Copy the example file
cp .env.example .env

# Open .env in a text editor and add your credentials:
VITE_AIRTABLE_API_KEY=your_token_here
VITE_AIRTABLE_BASE_ID=your_base_id_here
```

### Step 4: Run Locally (1 minute)
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser. Your site should load with your photos!

### Step 5: Deploy to Vercel (5 minutes)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up (free)
3. Click "New Project" → Import from GitHub
4. Add environment variables (same as your `.env` file)
5. Deploy!

**Your site will be live at:** `your-project.vercel.app`

---

## 📁 Key Files You'll Work With

### Regular Updates
- **Airtable** → Add new photos and albums here (no coding needed!)

### Occasional Updates
- `src/constants/index.js` → Site name, contact email, navigation
- `src/pages/About.jsx` → Your photographer story

### Rarely Touch
- Everything else is already configured and working

---

## 🎨 Customization

### Update Contact Info
Edit `src/constants/index.js`:
```javascript
contact: {
  email: 'your-email@example.com', // Change this
  instagram: '@brianpandachang',
  instagramUrl: 'https://instagram.com/brianpandachang',
}
```

### Change Site Colors
Edit `tailwind.config.js` → `theme.extend.colors`

### Modify About Page
Edit `src/pages/About.jsx` → Update your story

---

## 🚀 Next Steps (Phase 2)

Once you're comfortable with Phase 1, we'll add:
1. **Shopping Cart** → Users can add prints to cart
2. **Printful Integration** → Auto-sync orders for fulfillment
3. **Stripe Checkout** → Accept payments globally
4. **Dynamic Pricing** → Prices adjust by size/format

---

## 🆘 Common Issues

**Photos not showing?**
- Check Airtable field names match exactly (case-sensitive)
- Verify "Available for Sale" checkbox is checked
- Make sure you uploaded images to the attachment fields

**Site won't build?**
```bash
# Try this:
rm -rf node_modules
npm install
npm run dev
```

**Environment variables not working?**
- Make sure file is named `.env` (not `.env.txt`)
- Restart dev server after changing `.env`
- In Vercel, add them in Project Settings → Environment Variables

---

## 📞 Questions?

1. Check `README.md` for detailed documentation
2. Review `AIRTABLE_SETUP.md` for database help
3. Follow `DEPLOYMENT_CHECKLIST.md` for launch steps

---

## ✨ What Makes This Special

This isn't a template — it's a **design-first, production-grade application** built specifically for your brand:

- **Visual Hierarchy**: Every spacing, color, and typography decision considers cognitive load and emotional impact
- **Dark Theme**: Carefully calibrated grays that let photos breathe without harsh contrast
- **Taiwan Identity**: 张 as a mark of craft, woven naturally into the brand
- **Performance**: Lazy loading, optimized images, route-based code splitting
- **Accessibility**: Semantic HTML, keyboard navigation, focus states
- **Scalable Architecture**: Clean separation of concerns, ready to grow

This is built to sell your work, not just display it.

---

**Now go upload your photos and watch your work come alive. 🎉**
