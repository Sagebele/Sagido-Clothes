# Sagido Website

A modern, minimal fashion website built with **React + TypeScript + Tailwind**, focused on clean visuals, strong branding, and a smooth user experience.

This project showcases a complete e-commerce frontend with responsive design, dynamic navigation, animated components, and a comprehensive product browsing experience.

---

## ✨ Current Features

### 🧭 Navigation & Layout
- **Dynamic Navigation Bar** with:
  - Transparent/solid variants based on scroll position
  - Mobile hamburger menu with smooth animations
  - Desktop search bar with form submission
  - Mobile search functionality
  - User, favorites, and shopping cart icons with count badges
  - Currency selector (EUR/USD) with dynamic routing
  - Multi-level dropdown menus with auto-close on navigation
- **Responsive Design** that adapts to all screen sizes
- **Root Layout** wrapping all pages with persistent navigation and footer

### 🏠 Homepage Sections
- **Hero Section** with background image overlay and seasonal messaging
- **Category Cards** featuring Women, Men, and Junior collections with:
  - High-quality product images
  - Scroll-triggered animations (left-to-right, bottom-to-top, right-to-left)
  - Hover effects and smooth transitions
  - "Shop Now" buttons for each category
- **About Us Section** with:
  - Company mission: "Feel Good. Look Good. Do Good."
  - Detailed brand story emphasizing sustainability and individuality
  - Professional photography with fade-in animations
- **Information Section** highlighting:
  - Free shipping over $50
  - Easy 30-day returns
  - Customer service availability
- **Featured Looks Carousel** with:
  - Horizontal scrollable image gallery
  - Hover zoom effects
  - Professional fashion photography
- **Comprehensive Footer** including:
  - About section (About Us, Privacy Policy)
  - Help section (Contact, Shipping, Returns, FAQs)
  - Social media links (Instagram, Facebook, TikTok, Pinterest)
  - Newsletter subscription form
  - Copyright information and terms

### 📱 Pages
- **Homepage** (`/:currency`) - Complete landing experience
- **Women Page** (`/:currency/women`) - Category-specific layout
- **Men Page** (`/:currency/men`) - Category-specific layout
- **Junior Page** (`/:currency/junior`) - Category-specific layout
- **Explore Page** (`/:currency/explore`) - Featured collections with animations
- **About Us Page** (`/:currency/aboutus`) - Detailed company information
- **Contact Us** (`/:currency/contactus`) - Contact form
- **FAQs** (`/:currency/faqs`) - Frequently asked questions
- **Shipping** (`/:currency/shipping`) - Shipping information
- **Returns** (`/:currency/returns`) - Return policy
- **Privacy Policy** (`/:currency/privacypolicy`) - Privacy information
- **Page Not Found** (`/:currency/notfound`) - Error page without navbar

### 🛍️ Shopping Features
- **Product Cards** with:
  - Image flip on hover effect
  - Animated "add to cart" functionality with ball animation
  - Animated "add to favorites" functionality with ball animation
  - Real-time cart count updates
  - Glassy background UI effects on icons
- **Cart System** with:
  - Centralized Context API state management
  - Icon references for animated feedback
  - Persistent cart management
  - Cart count badge display in navbar
- **Favorites System** (structure ready for implementation)

### ✨ Animations
- **Scroll-triggered animations**:
  - `left-to-right-anim` - Elements slide in from left
  - `right-to-left-anim` - Elements slide in from right
  - `bottom-to-top-anim` - Elements slide up from bottom
  - `scroll-fade-in` - Fade in with side translation
  - `women-background-animation` - Opacity animation for backgrounds
- **Interactive animations**:
  - Ball animation flying from button to cart/favorites icon (0.6s cubic-bezier)
  - Image hover zoom effects
  - Smooth navbar transitions
  - Dropdown menu animations

### 🧠 State Management
- **Cart Context** (unified):
  - Manages cart items and count
  - Provides icon references for animations
  - Custom `useCart()` hook
- **Navbar Context**:
  - Controls navbar appearance (transparent/solid variant)
  - Custom `useNavbar()` hook

### 🎨 UI/UX Features
- **Glassy Effects** with backdrop blur on icons and overlays
- **Image Opacity Animations** on homepage without transform changes
- **Hover Effects** on category cards and product cards
- **Smooth Transitions** throughout the app
- **Professional Typography** with varied font sizes and weights

### 🧩 Hooks
- **useScrollAnimation()** - Detect when elements enter viewport and trigger animations
- **useNavbar()** - Access navbar configuration and state
- **useCart()** - Access cart state, methods, and icon references
- **useCurrencyRouting()** - Handle currency selection and routing
- **useNavbarDropdowns()** - Manage dropdown menu state
- **useNavbarVariantLock()** - Lock navbar variant based on route

### 🛠 Technical Features
- **React Router** with dynamic currency-based routing
- **Context API** for centralized state management
- **Font Awesome Icons** throughout the interface
- **Local Storage** integration for currency persistence
- **Intersection Observer** for scroll animation detection
- **Form Handling** for search and newsletter signup
- **Accessibility** considerations with proper labels

---

## 🧱 Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **React Router DOM v7** - Client-side routing with currency support
- **Tailwind CSS** - Utility-first styling framework
- **Font Awesome** - Icon library (solid icons)
- **Vite** - Fast build tool and dev server
- **ESLint** - Code quality

---

## 🚧 Planned Features / To-Do

- [ ] Product filtering and sorting
- [ ] Product detail pages with size/color selection
- [ ] Shopping cart checkout process
- [ ] User authentication and account management
- [ ] Wishlist persistence (currently structure-ready)
- [ ] Order history and tracking
- [ ] Admin panel for content management
- [ ] Advanced search with filters
- [ ] Product reviews and ratings
- [ ] Backend API integration (currently uses local state)
- [ ] Payment gateway integration
- [ ] Email notifications
- [ ] Inventory management

---

## 🎯 Project Goals

The goal of this project is to create a **fully functional fashion e-commerce platform** that demonstrates modern web development practices, with emphasis on:

- Clean, maintainable code architecture
- Exceptional user experience and design
- Performance optimization
- Accessibility compliance
- Scalable component structure
- Smooth animations and transitions

---

## 📁 Project Structure

```
src/
├── App.tsx
├── main.tsx
├── assets/
│   └── images/
│       ├── AboutUsPage/
│       ├── HomePage/
│       │   ├── aboutUs.jpg
│       │   ├── backgroundImage.jpg
│       │   ├── juniorCardImage.jpg
│       │   ├── linkWebsite.jpg
│       │   ├── MainImage.jpg
│       │   ├── manCardImage.jpg
│       │   └── womanCardImage.jpg
│       └── women-clothing/
│           ├── background.jpg
│           ├── testImageFront.jpg
│           └── testimageBack.jpg
├── components/
│   ├── AnimatedBall.tsx
│   ├── clothingCards.tsx
│   ├── Footer.tsx
│   ├── HomePage/
│   │   ├── AboutUs.tsx
│   │   ├── CategoryCards.tsx
│   │   ├── HeroImage.tsx
│   │   ├── Information.tsx
│   │   └── PictureCarousel.tsx
│   └── Nav/
│       ├── DropsConfig.ts
│       ├── MainDropdown.tsx
│       └── Navbar.tsx
├── context/
│   ├── CartContext.ts
│   ├── CartProvider.tsx
│   ├── NavbarContext.ts
│   ├── NavbarProvider.tsx
│   ├── useCart.ts
│   ├── useNavbar.ts
│   └── useToast.ts (deprecated)
├── Hooks/
│   ├── ScrollAnimation.ts
│   └── Navbar/
│       ├── CurrencyRouting.tsx
│       ├── HoverDropdown.tsx
│       ├── NavbarDropdowns.tsx
│       └── NavbarVariantLock.tsx
├── layouts/
│   └── RootLayout.tsx
├── pages/
│   ├── AboutUsPage.tsx
│   ├── ContactUs.tsx
│   ├── ExplorePage.tsx
│   ├── FAQsPage.tsx
│   ├── HomePage.tsx
│   ├── JuniorPage.tsx
│   ├── MenPage.tsx
│   ├── PageNotFound.tsx
│   ├── PrivacyPolicy.tsx
│   ├── ReturnsPage.tsx
│   ├── Shipping.tsx
│   └── WomenPage.tsx
├── styles/
│   ├── AboutUs.css
│   ├── AnimatedBall.css
│   ├── Form.css
│   ├── Header.css
│   ├── index.css
│   ├── ScrollAnimation.css
│   └── Toast.css (deprecated)
└── utils/
    └── currencyHelper.ts
```

---

## 🔄 Recent Updates

### Context Management
- **Consolidated Cart Context**: Merged CartIconContext and CartContext into a single unified context for better state management
- **Removed separate icon reference context**: Icon refs are now managed alongside cart state
- **Cleaned up unused contexts**: Removed deprecated ToastContext system

### Animation System
- **Renamed animation classes** for consistency:
  - `card-slide-left-to-right` → `left-to-right-anim`
  - `card-slide-bottom-to-top` → `bottom-to-top-anim`
  - `card-slide-right-to-left` → `right-to-left-anim`
- **Implemented proper scroll animation integration** across all components
- **Fixed CSS timing functions**: Corrected invalid `ease-in-in` to `ease-in-out`

### Page Enhancements
- **Explore Page**: New page showcasing featured clothing collections with scroll animations
- **Page Not Found**: Moved outside RootLayout to display without navbar
- **Enhanced routing**: Added explore page route with currency support

### UI Improvements
- **Glassy background effects**: Added backdrop-blur and semi-transparent backgrounds to icons
- **Image animations**: Implemented fade-in animations for images
- **Hover effects**: Enhanced category cards and product cards with smooth transitions

---

## 📝 Notes

- The app uses currency-based routing (EUR/USD) with localStorage persistence
- All animations use CSS transitions for performance
- Cart state is managed via Context API (currently no persistence)
- Mobile-first responsive design approach
- All animation class names follow consistent naming convention: `[direction]-anim`

---
