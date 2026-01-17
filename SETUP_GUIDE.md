# LuxeScents Website - Complete Setup & Deployment Guide

## ✅ What's Been Built

Your complete professional perfume e-commerce website is ready with:

### Pages & Routes
- **Home** (`/`) - Full landing page with all sections
- **Shop** (`/shop`) - Catalogue page (template ready for products)
- **About** (`/about`) - About page (ready to customize)

### Sections on Home Page
1. **Hero Section** - Professional banner with CTA
2. **Featured Collection** - Product grid showcase
3. **Testimonials** - Customer reviews with ratings
4. **Newsletter** - Email subscription form

### Components Ready to Use
- ✅ Navbar with dropdown menu
- ✅ Footer with links
- ✅ Button (multiple variants)
- ✅ Complete page layouts
- ✅ Responsive design

---

## 🎯 Next Steps to Customize

### 1. Add Your Perfume Images
Place these in `public/assets/perfumes/`:
- `hero-perfume.png` - Main hero bottle image (transparent background)
- `perfume-1.png` through `perfume-4.png` - Product images

And avatar images in `public/assets/banners/`:
- `avatar-1.jpg` - Customer avatar 1
- `avatar-2.jpg` - Customer avatar 2  
- `avatar-3.jpg` - Customer avatar 3

### 2. Update Branding
Edit these values:

**Logo/Brand Name** - In `src/components/common/Navbar.jsx`:
```jsx
<div className="text-2xl font-serif font-bold tracking-tight text-gray-900 mr-12">
    LuxeScents  // Change to your brand name
</div>
```

**Colors** - In `src/index.css`:
```css
@theme {
    --color-primary: #000000;      // Change primary color
    --color-secondary: #eef7fb;    // Change secondary color
}
```

### 3. Update Product Data
Edit `src/sections/FeaturedCollection.jsx` to add your perfumes:
```jsx
const perfumes = [
    {
        id: 1,
        name: 'Your Perfume Name',
        category: 'Men',
        price: '$XX',
        image: '/assets/perfumes/your-perfume.png',
        rating: 4.8
    },
    // ... add more
];
```

### 4. Update Links
Update navigation and footer links in:
- `src/components/common/Navbar.jsx`
- `src/components/common/Footer.jsx`

### 5. Add Your Content
- Update testimonials in `src/sections/Testimonials.jsx`
- Update footer info in `src/components/common/Footer.jsx`
- Customize About page in `src/pages/About.jsx`
- Customize Shop page in `src/pages/Shop.jsx`

---

## 🚀 Development

### Start Development Server
```bash
npm run dev
```
Visit `http://localhost:5173` in your browser

### Check for Errors
```bash
npm run lint
```

### Build for Production
```bash
npm run build
```
This creates optimized files in the `dist/` folder

### Preview Production Build
```bash
npm run preview
```

---

## 📦 Deployment Options

### Option 1: Vercel (Recommended - Free)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy - it auto-detects Vite

### Option 2: Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `dist`

### Option 3: Traditional Hosting
```bash
npm run build
# Upload the 'dist' folder to your web host
```

---

## 🎨 Design Details

### Typography
- **Headings**: Playfair Display (serif, elegant)
- **Body**: Inter (clean, modern sans-serif)

### Colors
- **Primary**: Black (#000000)
- **Background Gradient**: White to Pale Blue (#eef7fb)
- **Accent**: Gray shades for text

### Spacing & Layout
- **Max width**: 1400px
- **Responsive**: Mobile-first approach
- **Gaps**: Consistent spacing throughout

---

## 📊 File Summary

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main app with routing |
| `src/pages/Home.jsx` | Landing page assembler |
| `src/sections/Hero.jsx` | Hero banner |
| `src/sections/FeaturedCollection.jsx` | Product showcase |
| `src/sections/Testimonials.jsx` | Customer reviews |
| `src/sections/Newsletter.jsx` | Email signup |
| `src/layouts/MainLayout.jsx` | Page wrapper (Navbar + Footer) |
| `src/components/common/Navbar.jsx` | Navigation header |
| `src/components/common/Footer.jsx` | Footer |
| `src/components/common/Button.jsx` | Reusable button |
| `src/index.css` | Global styles & Tailwind |

---

## 🔧 Troubleshooting

### "Cannot find module"
```bash
npm install
```

### Styles not loading
Check `src/index.css` has `@import "tailwindcss"`

### Images not showing
1. Verify images are in `public/assets/`
2. Check image paths in components match file names
3. Make sure image files are PNG/JPG format

### Build errors
```bash
npm install
npm run build
```

---

## 📞 Support

For questions about:
- **React**: [React Docs](https://react.dev)
- **Tailwind**: [Tailwind Docs](https://tailwindcss.com)
- **Vite**: [Vite Docs](https://vitejs.dev)

---

## ✨ You're All Set!

Your professional perfume e-commerce website is ready. All you need to do is:

1. ✅ Add your perfume images
2. ✅ Update brand name and colors
3. ✅ Customize product data
4. ✅ Deploy to hosting

**Happy selling! 🎉**
