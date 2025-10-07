# Nath's Medical Portfolio

A modern, responsive portfolio website for a medical student showcasing professional experience, research, and clinical interests. Built with React, TypeScript, and Vite with full internationalization support.

## 🌟 Features

### 🌍 Multilingual Support
- **Three languages**: Spanish (ES), English (EN), German (DE)
- Automatic browser language detection
- Persistent language preference storage
- Complete UI translation including navigation, content, and forms

### 🎨 Modern Design
- **Dark/Light theme** with system preference detection
- **Responsive design** optimized for all devices (desktop, tablet, mobile)
- **Smooth animations** with Framer Motion and CSS transitions
- **Professional medical aesthetic** with custom styling
- **Accessibility-focused** with proper ARIA labels and keyboard navigation

### 📱 Mobile-First Responsive
- Optimized breakpoints for all screen sizes
- Touch-friendly navigation and interactions
- Adaptive typography scaling
- Mobile-optimized image sizing and layout

### 🔧 Technical Excellence
- **TypeScript** for type safety and better development experience
- **Modern React** with hooks and functional components
- **Vite** for fast development and optimized builds
- **ESLint** for code quality and consistency
- **CSS Custom Properties** for theming and maintainability

### 📄 Portfolio Sections
- **Hero Section**: Professional introduction with portrait
- **Profile**: Academic background and medical interests
- **Availability**: Current status and contact preferences
- **Experience**: Clinical and academic experience timeline
- **Research**: Publications and research interests
- **Contact**: Multiple ways to get in touch

### 🎯 Special Features
- **Secret route**: Hidden page at `/sqm/letter` with password protection
- **Intersection Observer**: Smooth reveal animations on scroll
- **Local storage**: Remembers theme and language preferences
- **SEO optimized**: Proper meta tags and semantic HTML

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
├── components/          # React components
│   ├── Header.tsx      # Navigation and theme toggle
│   ├── HeroSection.tsx # Main hero with portrait
│   ├── ProfileSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ResearchSection.tsx
│   ├── ContactSection.tsx
│   └── SecretLetterPage.tsx
├── data/
│   └── translations.ts # Multi-language content
├── types/
│   └── content.ts      # TypeScript type definitions
├── constants/
│   └── sections.ts     # Section IDs for navigation
├── assets/             # Static assets
├── App.tsx            # Main application component
├── App.css           # Custom styles and responsive design
└── main.tsx          # Application entry point
```

### Key Technologies

- **React 18.3.1**: Modern React with hooks and concurrent features
- **TypeScript 5.6.0**: Static type checking and better IDE support
- **Vite 5.4.0**: Fast build tool with HMR (Hot Module Replacement)
- **Framer Motion 12.23.22**: Smooth animations and transitions
- **Lucide React 0.545.0**: Beautiful, customizable icons
- **Tailwind CSS 3.4.0**: Utility-first CSS framework
- **PostCSS & Autoprefixer**: CSS processing and vendor prefixes

## 🎨 Customization

### Content Updates
Edit the translations in `src/data/translations.ts` to update:
- Personal information and bio
- Experience and education details
- Research interests and publications
- Contact information and social links

### Styling
- **Global styles**: `src/index.css`
- **Component styles**: `src/App.css`
- **Theme variables**: CSS custom properties in App.css
- **Responsive breakpoints**: Mobile-first approach with clamp() functions

### Images
Place images in `public/Media/Images/`:
- `NathCoverImage.jpg`: Main portrait image
- Additional assets as needed

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
- `tailwind.config.js`: Tailwind CSS configuration
- `eslint.config.js`: ESLint rules and plugins

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
- **Email**: nath@example.com
- **LinkedIn**: [Nath's LinkedIn Profile]
- **GitHub**: [@SantiQ0905](https://github.com/SantiQ0905)

---

*Built with ❤️ for the medical community*
