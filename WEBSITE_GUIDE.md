# LuxeScents - Premium Perfume E-Commerce Landing Page

A modern, professional e-commerce landing page for a premium perfume brand built with **React**, **Vite**, and **Tailwind CSS**.

## 🎨 Features

✨ **Hero Section** - Eye-catching banner with featured perfume bottle image, trusted users badge, and CTA button

✨ **Featured Collection** - Grid showcase of perfume products with ratings and pricing

✨ **Testimonials** - Customer reviews section with star ratings and social proof

✨ **Newsletter Signup** - Email subscription form for marketing

✨ **Responsive Design** - Fully responsive across mobile, tablet, and desktop devices

✨ **Modern UI** - Clean, elegant interface with gradient backgrounds and smooth transitions

✨ **Professional Navigation** - Fixed pill-shaped navbar with dropdown menus

✨ **Footer** - Complete footer with company info, links, and legal pages

## 📂 Project Structure

```
perfume-website/
├── public/
│   ├── assets/
│   │   ├── banners/          # Avatar images for testimonials
│   │   ├── icons/            # Custom SVG icons
│   │   └── perfumes/         # Product images
│   └── favicon.ico
├── src/
│   ├── assets/               # Static assets (images, fonts)
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx      # Reusable button component
│   │   │   ├── Navbar.jsx      # Fixed navigation bar
│   │   │   └── Footer.jsx      # Footer component
│   │   └── sections/
│   │       ├── Hero.jsx        # Hero banner section
│   │       ├── FeaturedCollection.jsx
│   │       ├── Testimonials.jsx
│   │       └── Newsletter.jsx
│   ├── layouts/
│   │   └── MainLayout.jsx    # Main layout wrapper
│   ├── pages/
│   │   ├── Home.jsx          # Home page
│   │   ├── Shop.jsx          # Shop page
│   │   └── About.jsx         # About page
│   ├── styles/
│   │   └── index.css         # Global styles & Tailwind
│   ├── App.jsx               # App router setup
│   └── main.jsx              # Entry point
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── index.html
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd perfume-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm preview
```

## 🎨 Customization

### Colors & Branding
Edit `src/index.css` to change primary colors and fonts:
```css
@theme {
    --font-serif: "Playfair Display", serif;
    --font-sans: "Inter", sans-serif;
    --color-primary: #000000;
    --color-secondary: #eef7fb;
}
```

### Navigation Links
Update links in `src/components/common/Navbar.jsx` to match your site structure

### Products
Modify product data in `src/sections/FeaturedCollection.jsx` to display your perfume catalog

### Images
Place your assets in `public/assets/`:
- Hero perfume image: `public/assets/perfumes/hero-perfume.png`
- Product images: `public/assets/perfumes/perfume-[1-4].png`
- Avatar images: `public/assets/banners/avatar-[1-3].jpg`

## 🛠 Technologies Used

- **React 19** - UI library
- **Vite 7** - Build tool
- **Tailwind CSS 4** - Styling
- **React Router 7** - Client-side routing
- **Lucide React** - Icon library
- **Google Fonts** - Playfair Display & Inter fonts

## 📝 Key Components

### Button.jsx
Reusable button component with variants:
```jsx
<Button variant="black">Click Me</Button>
<Button variant="outline">Register</Button>
```

### MainLayout.jsx
Wraps all pages with consistent header, footer, and background:
```jsx
<MainLayout>
  <HomePage />
</MainLayout>
```

### Hero.jsx
Main landing section with:
- Trusted users badge
- Large headline with serif accent
- Call-to-action button
- Featured product image area

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔐 SEO & Performance

- Semantic HTML structure
- Optimized image paths
- Fast loading with Vite
- Clean CSS with Tailwind purging

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For issues or questions, please create an issue in the repository or contact support@luxescents.com

---

**Happy coding! 🎨✨**
