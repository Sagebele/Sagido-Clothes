# Sagido Website

A modern, minimal fashion website built with **React + TypeScript + Tailwind**, focused on clean visuals, strong branding, and a smooth user experience.

This project showcases a complete e-commerce frontend with responsive design, dynamic navigation, and multiple interactive components.

---

## ✨ Current Features

### 🧭 Navigation & Layout
- **Dynamic Navigation Bar** with:
  - Transparent/solid variants based on scroll position
  - Mobile hamburger menu with smooth animations
  - Desktop search bar with form submission
  - Mobile search functionality
  - User, favorites, and shopping cart icons
  - Currency selector (EUR/USD)
- **Responsive Design** that adapts to all screen sizes
- **Theme Support** with light/dark mode capability(probably will be removed)

### 🏠 Homepage Sections
- **Hero Section** with background image overlay and seasonal messaging ("Happy Holidays from Sagido")
- **Category Cards** featuring Women, Men, and Junior collections with:
  - High-quality product images
  - Hover effects and smooth transitions
  - "Shop Now" buttons for each category
- **About Us Section** with:
  - Company mission: "Feel Good. Look Good. Do Good."
  - Detailed brand story emphasizing sustainability and individuality
  - Professional photography
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
- **Homepage** (`/`) - Complete landing experience
- **Women Page** (`/women`) - Category-specific layout
- **Men Page** (`/men`) - Category-specific layout
- **Junior Page** (`/junior`) - Category-specific layout

### 🛠 Technical Features
- **React Router** for client-side navigation
- **Context API** for theme and navbar state management
- **Font Awesome Icons** throughout the interface
- **Local Storage** integration for theme persistence
- **Form Handling** for search and newsletter signup
- **Accessibility** considerations with proper ARIA labels

---

## 🧱 Tech Stack

- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first styling framework
- **Font Awesome** - Icon library
- **Vite** - Fast build tool and dev server
- **ESLint + Prettier** - Code quality and formatting

---

## 🚧 Planned Features / To-Do

- [ ] Product detail pages with size/color selection
- [ ] Shopping cart functionality with local storage
- [ ] User authentication and account management
- [ ] Product filtering and sorting
- [ ] Wishlist functionality
- [ ] Checkout process
- [ ] Order history and tracking
- [ ] Admin panel for content management
- [ ] Advanced search with filters
- [ ] Product reviews and ratings
- [ ] Backend API integration
- [ ] Payment gateway integration

---

## 🎯 Project Goals

The goal of this project is to create a **fully functional fashion e-commerce platform** that demonstrates modern web development practices, with emphasis on:

- Clean, maintainable code architecture
- Exceptional user experience and design
- Performance optimization
- Accessibility compliance
- Scalable component structure

---



## 📁 Project Structure

```
src/
├── components/
│   ├── HomePage/
│   │   ├── AboutUs.tsx
│   │   ├── BackgroundLayout.tsx
│   │   ├── CategoryCards.tsx
│   │   ├── FooterHome.tsx
│   │   ├── Information.tsx
│   │   └── PictureCarousel.tsx
│   └── Navbar.tsx
├── context/
│   ├── NavbarContext.ts
│   ├── NavbarProvider.tsx
│   ├── ThemeContext.ts
│   ├── ThemeProvider.tsx
│   ├── useNavbar.ts
│   └── useTheme.ts
├── layouts/
│   └── RootLayout.tsx
├── pages/
│   ├── HomePage.tsx
│   ├── JuniorPage.tsx
│   ├── MenPage.tsx
│   └── WomenPage.tsx
├── assets/
│   └── images/
│   │   ├── HomePage/
│   │   | ├──Carousel
│   │   ├── Men
├── styles/
└── main.tsx
```

---
