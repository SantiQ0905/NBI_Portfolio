# Nath's Medical Portfolio

A modern, responsive portfolio website for a medical student showcasing professional experience, research, and clinical interests. Built with React, TypeScript, and Vite with full internationalization support and modular CSS architecture.

## 🌟 Features

### 🌍 Multilingual Support
- **Three languages**: Spanish (ES), English (EN), German (DE)
- Automatic browser language detection
- Persistent language preference storage
- Complete UI translation including navigation, content, and forms

### 🎨 Modern Design
- **Dark/Light theme** with system preference detection and smooth transitions
- **Fully responsive design** optimized for all devices (desktop, tablet, mobile)
- **Mobile-optimized typography** with adaptive font sizing for better readability
- **Smooth animations** with CSS transitions and keyframe animations
- **Professional medical aesthetic** with custom color schemes and glassmorphism effects
- **Accessibility-focused** with proper ARIA labels, keyboard navigation, and reduced motion support

### 📱 Mobile-First Responsive
- Optimized breakpoints: 480px, 600px, 720px, 768px, 900px, 1024px
- Touch-friendly navigation and interactions
- **Reduced font sizes on mobile** for better section visibility and readability
- Adaptive typography scaling using clamp() and responsive units
- Mobile-optimized image sizing and layout
- Hamburger menu for mobile navigation

### 🔧 Technical Excellence
- **TypeScript** for type safety and better development experience
- **Modern React** with hooks and functional components
- **CSS Modules** for scoped styling and better maintainability
- **Vite** for fast development and optimized builds
- **ESLint** for code quality and consistency
- **CSS Custom Properties** for theming and maintainability
- **Modern CSS features**: color-mix(), clamp(), container queries

### 📄 Portfolio Sections
- **Hero Section**: Professional introduction with animated portrait frame
- **Profile**: Academic background and medical interests with chip tags
- **Experience**: Clinical and academic experience with card-based layout
- **Timeline**: Educational journey with visual timeline markers
- **Research**: Publications and research interests with interactive cards
- **Availability**: Current status and contact preferences
- **Contact**: Interactive contact form with multiple communication options

### 🎯 Special Features
- **Secret route**: Hidden page at `/sqm/letter` with password protection and themed styling
- **Intersection Observer**: Smooth reveal animations on scroll with stagger effects
- **Local storage**: Remembers theme and language preferences across sessions
- **SEO optimized**: Proper meta tags and semantic HTML structure
- **Contact form**: Client-side form validation with EmailJS integration
- **Animated components**: Floating badges, glowing frames, and sparkle effects
- **Performance optimized**: Code splitting, lazy loading, and optimized assets

## 🚀 Quick Start

### Prerequisites
- Node.js 20.17.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SantiQ0905/NBI_Portfolio.git
   cd NBI_Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🛠️ Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint
```

### Project Structure

```
src/
├── components/              # React components with CSS Modules
│   ├── Header.tsx          # Navigation with mobile menu
│   ├── Header.module.css   # Header styles
│   ├── HeroSection.tsx     # Animated hero with portrait
│   ├── HeroSection.module.css
│   ├── ProfileSection.tsx  # Academic background
│   ├── ProfileSection.module.css
│   ├── ExperienceSection.tsx # Clinical experience
│   ├── ExperienceSection.module.css
│   ├── TimelineSection.tsx # Educational timeline
│   ├── TimelineSection.module.css
│   ├── ResearchSection.tsx # Research & publications
│   ├── ResearchSection.module.css
│   ├── AvailabilitySection.tsx # Contact preferences
│   ├── AvailabilitySection.module.css
│   ├── ContactSection.tsx  # Contact form
│   ├── ContactSection.module.css
│   ├── Footer.tsx          # Site footer
│   ├── Footer.module.css
│   └── SecretLetterPage.tsx # Hidden page
│       └── SecretLetterPage.module.css
├── data/
│   └── translations.ts     # Multi-language content (ES/EN/DE)
├── types/
│   └── content.ts          # TypeScript type definitions
├── constants/
│   └── sections.ts         # Section IDs for navigation
├── services/
│   └── contactForm.ts      # Contact form service
├── styles/
│   └── global.css          # Global styles and utilities
├── assets/                 # Static assets
├── App.tsx                 # Main application component
├── index.css              # CSS variables and theme
└── main.tsx               # Application entry point

public/
└── Media/
    ├── Images/            # Image assets
    └── Videos/            # Video assets
```

### Key Technologies

- **React 18.3.1**: Modern React with hooks and concurrent features
- **TypeScript 5.6.0**: Static type checking and better IDE support
- **Vite 5.4.0**: Fast build tool with HMR (Hot Module Replacement)
- **React Router DOM 7.0.2**: Client-side routing for navigation
- **Lucide React 0.454.0**: Beautiful, customizable SVG icons
- **EmailJS**: Contact form email service integration
- **CSS Modules**: Scoped component styling
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixes

### CSS Architecture

The project uses **CSS Modules** for component-scoped styling:
- Each component has its own `.module.css` file
- Prevents style conflicts and naming collisions
- Better code organization and maintainability
- Global styles in `src/styles/global.css` for shared utilities
- Theme variables in `src/index.css` using CSS custom properties

## 🎨 Customization

### Content Updates
Edit the translations in `src/data/translations.ts` to update:
- Personal information and bio
- Experience and education details
- Research interests and publications
- Contact information and social links
- All content is available in ES, EN, and DE

### Styling
- **Global styles**: `src/styles/global.css` (utilities, animations, layouts)
- **Theme variables**: `src/index.css` (colors, spacing, typography)
- **Component styles**: Individual `.module.css` files for each component
- **Responsive breakpoints**: Mobile-first approach with media queries
- **Font scaling**: Using clamp() for fluid typography
- **Color system**: CSS custom properties with color-mix() for variants

### Theme Customization
Edit CSS variables in `src/index.css`:
```css
--color-primary: /* Primary brand color */
--color-accent: /* Accent color */
--color-surface: /* Background colors */
--color-text-primary: /* Text colors */
/* Plus dark mode variants */
```

### Images
Place images in `public/Media/Images/`:
- `NathCoverImage.jpg`: Main portrait image
- Additional assets as needed
- Optimize images for web (WebP recommended)

## 📦 Build & Deployment

### Production Build
```bash
npm run build
```

### Deployment Options
- **Netlify**: Connect GitHub repository for automatic deployments
- **Vercel**: Zero-config deployment with Git integration  
- **GitHub Pages**: Static site hosting
- **Any static hosting**: Upload `dist/` folder contents

### Environment Configuration
The app automatically detects:
- Browser language preference
- System theme preference (dark/light)
- Screen size for responsive behavior

## 🔧 Configuration

### TypeScript Configuration
- `tsconfig.json`: Project references configuration
- `tsconfig.app.json`: Application-specific TypeScript settings
- `tsconfig.node.json`: Node.js environment settings

### Build Configuration
- `vite.config.ts`: Vite build and development server settings
- `postcss.config.js`: PostCSS plugins configuration
- `eslint.config.js`: ESLint rules and plugins

### EmailJS Configuration (Optional)
To enable the contact form:
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Configure your email service
3. Update service credentials in `src/services/contactForm.ts`

## 📝 Recent Updates

### November 2025
- ✨ **Mobile Typography Optimization**: Reduced font sizes across all sections for better mobile readability
- 🎨 **CSS Modules Migration**: Migrated from global CSS to modular component styles
- 📱 **Enhanced Responsive Design**: Improved mobile breakpoints (480px, 768px, 900px)
- 🔧 **Performance Improvements**: Better code organization and maintainability
- ♿ **Accessibility Enhancements**: Added reduced motion support and ARIA labels

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is private and contains personal information. Please respect privacy and ask for permission before using any content.

## 📞 Contact

For questions about this portfolio or potential collaborations:
- **GitHub**: [@SantiQ0905](https://github.com/SantiQ0905)
- **Portfolio**: Contact form available on the website

## 🙏 Acknowledgments

- Built with modern web technologies and best practices
- Icons provided by [Lucide](https://lucide.dev/)
- Email service by [EmailJS](https://www.emailjs.com/)

---

*Built with ❤️ for the medical community*
