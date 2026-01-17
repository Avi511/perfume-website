# 🏗 LuxeScents Component Architecture

## Component Hierarchy

```
App.jsx (Routes & BrowserRouter)
│
└── MainLayout.jsx (Route element)
    ├── Navbar.jsx (fixed at top)
    │   ├── Logo/Brand
    │   ├── Nav Links (Home, Catalogue, Shop, Solutions, FAQ)
    │   ├── Cart Icon
    │   ├── Register Button
    │   └── Profile Icon
    │
    ├── Routes/Outlet
    │   │
    │   ├── Home.jsx (/)
    │   │   ├── Hero.jsx
    │   │   │   ├── TrustedBadge sub-component
    │   │   │   ├── ArrowCircle sub-component
    │   │   │   └── Perfume image display
    │   │   │
    │   │   ├── FeaturedCollection.jsx
    │   │   │   └── ProductCard x4
    │   │   │       ├── Product image
    │   │   │       ├── Category label
    │   │   │       ├── Product name
    │   │   │       ├── Star rating
    │   │   │       ├── Price
    │   │   │       └── Add to cart button
    │   │   │
    │   │   ├── Testimonials.jsx
    │   │   │   ├── Dark background section
    │   │   │   └── ReviewCard x3
    │   │   │       ├── Avatar image
    │   │   │       ├── Name & role
    │   │   │       ├── Star rating
    │   │   │       └── Review text
    │   │   │
    │   │   └── Newsletter.jsx
    │   │       ├── Headline
    │   │       ├── Description
    │   │       ├── Email input
    │   │       └── Subscribe button
    │   │
    │   ├── Shop.jsx (/shop)
    │   │   └── Catalogue template
    │   │
    │   └── About.jsx (/about)
    │       └── About page template
    │
    └── Footer.jsx (fixed at bottom)
        ├── Brand info column
        ├── Company links
        ├── Shop links
        ├── Support links
        ├── Divider
        └── Copyright & legal links
```

---

## 🔄 Data Flow

```
App.jsx (Router Context)
  ↓
MainLayout.jsx (Layout Context)
  ├─→ Navbar.jsx (Global Navigation)
  ├─→ Page Component (Route)
  │   └─→ Section Components (Content)
  │       ├─→ Hero.jsx
  │       ├─→ FeaturedCollection.jsx
  │       │   └─→ ProductCard x4
  │       ├─→ Testimonials.jsx
  │       │   └─→ ReviewCard x3
  │       └─→ Newsletter.jsx
  └─→ Footer.jsx (Global Footer)
```

---

## 📦 Reusable Components

### Button Component
```jsx
<Button variant="black">Click Me</Button>
<Button variant="outline">Register</Button>
```
**Props:**
- `children` - Button text/content
- `variant` - "black" | "outline"
- `onClick` - Click handler
- `className` - Extra Tailwind classes
- `ariaLabel` - Accessibility label

---

### Hero Component
**Props:** None (self-contained with data)

**Sub-components:**
- `TrustedBadge` - Shows avatars + user count
- `ArrowCircle` - Black circle with arrow icon

---

### FeaturedCollection Component
**Props:** None (self-contained)

**Data:** Array of perfume objects with:
- `id` - Unique identifier
- `name` - Product name
- `category` - Product category
- `price` - Product price
- `image` - Image path
- `rating` - Star rating (1-5)

---

### Testimonials Component
**Props:** None (self-contained)

**Data:** Array of review objects with:
- `id` - Unique identifier
- `name` - Customer name
- `role` - Customer role
- `rating` - Star rating (1-5)
- `text` - Review text
- `image` - Avatar image path

---

### Newsletter Component
**Props:** None

**Features:**
- Email input field
- Form submission handler
- Success feedback ready

---

## 🎨 Styling Approach

### Global Styles (`src/index.css`)
```css
@import url('Google Fonts...');
@import "tailwindcss";

@theme {
    --font-serif: "Playfair Display";
    --font-sans: "Inter";
    --color-primary: #000000;
    --color-secondary: #eef7fb;
}
```

### Component-Level Styling
All components use **Tailwind CSS utility classes** for styling:
```jsx
className="text-4xl font-bold text-gray-900 hover:opacity-90 transition"
```

### Responsive Design
```jsx
// Mobile first approach
className="text-2xl md:text-3xl lg:text-4xl"
// or
className="block md:flex lg:grid"
```

---

## 🔌 External Dependencies

```json
{
  "react": "^19.2.0",           // UI framework
  "react-dom": "^19.2.0",       // React rendering
  "react-router-dom": "^7.12.0", // Client-side routing
  "lucide-react": "^0.553.0",    // Icon library
  "tailwindcss": "^4.1.17",      // Styling
  "vite": "^7.2.2"               // Build tool
}
```

---

## 📱 Responsive Breakpoints

```
Mobile:    < 640px  (sm:)
Tablet:    640px-1024px (md:)
Desktop:   > 1024px (lg:)
Wide:      > 1280px (xl:)
```

**Implemented in:**
- Navigation (hidden on mobile, visible on md+)
- Hero (2 col on lg, 1 col on mobile)
- Product grid (1 col mobile, 2 col tablet, 4 col desktop)
- Footer (stack on mobile, row on md+)

---

## 🚀 Performance Optimizations

1. **Code Splitting**
   - Each route loads independently
   - Vite auto-splits chunks

2. **Image Optimization**
   - Use PNG/WebP for perfume images
   - Lazy loading available

3. **CSS Purging**
   - Tailwind removes unused CSS
   - Production: 35.28 KB (gzip: 6.37 kB)

4. **Bundle Size**
   - JavaScript: 246.45 KB (gzip: 78.30 kB)

---

## 🔐 State Management

Currently using **local component state** with `useState`:

```jsx
const [email, setEmail] = useState('');        // Newsletter
const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Navbar
```

For scaling to more components, consider:
- Context API for global state
- Redux/Zustand for complex state
- React Query for server state

---

## 🧪 Testing Ready

Structure supports:
```
tests/
├── components/
│   ├── Hero.test.jsx
│   ├── Button.test.jsx
│   └── ...
├── pages/
│   ├── Home.test.jsx
│   └── ...
└── utils/
    └── ...
```

Add testing with Jest + React Testing Library.

---

## 📞 Component Props Reference

### MainLayout
```jsx
<MainLayout>
  {children}  // Optional, usually not used with routing
</MainLayout>
```

### Navbar
```jsx
<Navbar />  // No props, fully self-contained
```

### Hero
```jsx
<Hero />    // No props, uses internal constants
```

### Button
```jsx
<Button
  variant="black"
  onClick={handleClick}
  ariaLabel="Button label"
  className="extra-classes"
>
  Button Text
</Button>
```

### Footer
```jsx
<Footer />  // No props, fully self-contained
```

---

## 🎯 Component Responsibility

| Component | Responsibility |
|-----------|-----------------|
| App.jsx | Route management |
| MainLayout | Page wrapper + structure |
| Navbar | Navigation & header |
| Footer | Footer links & info |
| Hero | Hero banner section |
| FeaturedCollection | Product showcase |
| Testimonials | Customer reviews |
| Newsletter | Email signup |
| Button | Reusable CTA |

---

## 🔄 Data Flow Example

```
User clicks "Add to Cart" button
  ↓
Button component onClick handler triggered
  ↓
Handler function in FeaturedCollection
  ↓
(Ready for: state update, API call, cart context update)
```

---

## ✅ Extensibility

Easy to add:
- **New pages** - Create in `pages/`, add route in App.jsx
- **New sections** - Create in `sections/`, import in Home.jsx
- **New components** - Create in `components/`, import where needed
- **New routes** - Add `<Route>` in App.jsx
- **Global state** - Wrap with Context Provider in App.jsx

---

**Well-structured, scalable, and ready to grow!** 🚀
