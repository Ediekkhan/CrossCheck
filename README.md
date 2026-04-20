# CrossCheck - eCommerce Policy Compliance Monitor

A modern SaaS landing page for CrossCheck, a Chrome extension that prevents eCommerce listing suspensions through real-time policy monitoring.

## Overview

CrossCheck is a conversion-focused landing page built to showcase a product that monitors Amazon, Shopify, and WooCommerce listings in real-time and detects policy violations before platforms flag them.

## Features

- **Modern SaaS Design**: Clean, minimal aesthetic inspired by leading SaaS platforms
- **Conversion-Focused**: Multiple CTAs strategically placed throughout
- **Fully Responsive**: Optimized for desktop, tablet, and mobile
- **Animated Interactions**: Smooth transitions and micro-interactions using Framer Motion
- **Production-Ready**: TypeScript, Tailwind CSS, and best practices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: npm

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer component
│   ├── FeatureCard.tsx     # Reusable feature card
│   ├── PricingCard.tsx     # Pricing plan card
│   ├── StepCard.tsx        # Step card for how it works
│   ├── SectionHeader.tsx   # Section header component
│   └── sections/
│       ├── Hero.tsx                # Hero section with CTA
│       ├── TrustSection.tsx        # Social proof
│       ├── ProblemSection.tsx      # Pain points
│       ├── SolutionSection.tsx     # Solution overview
│       ├── FeaturesSection.tsx     # 5 key features
│       ├── HowItWorks.tsx          # 3-step process
│       ├── DemoSection.tsx         # Video demo placeholder
│       ├── BenefitsSection.tsx     # Benefits & outcomes
│       ├── PricingSection.tsx      # Pricing plans
│       └── FinalCTA.tsx            # Final call-to-action
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Design System

### Colors

- **Primary**: Blue (#0ea5e9 to #0369a1)
- **Accent**: Orange (#f97316 to #ea580c)
- **Dark**: Slate (#0f172a to #020617)

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, 2.25rem - 3.75rem
- **Body**: Regular, 1rem
- **Small**: Regular, 0.875rem

### Components

- Rounded corners: 2xl (1rem)
- Shadows: Soft and layered
- Spacing: 4px base unit (Tailwind)
- Animations: Smooth, 0.3-0.8s duration

## Sections Overview

1. **Hero** - Bold headline with dashboard mockup
2. **Trust** - Platform logos and social proof
3. **Problem** - Pain points with icons
4. **Solution** - Product benefits overview
5. **Features** - 5 key feature cards
6. **How It Works** - 3-step onboarding process
7. **Demo** - Video placeholder
8. **Benefits** - ROI and outcomes
9. **Pricing** - Free and Pro plans
10. **Final CTA** - Strong emotional close
11. **Footer** - Links and social

## Customization

### Updating Content

All text content is embedded in component files. To customize:

1. Edit `src/components/sections/` files for main sections
2. Update pricing plans in `PricingSection.tsx`
3. Modify features in `FeaturesSection.tsx`

### Styling

- Tailwind config: `tailwind.config.ts`
- Global styles: `src/app/globals.css`
- Component classes use Tailwind utilities

### Adding Sections

Create new files in `src/components/sections/` and import in `src/app/page.tsx`

## Performance

- Optimized images and lazy loading
- Smooth animations with Framer Motion
- Clean, semantic HTML
- Responsive grid layouts
- CSS-in-JS best practices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Support

For questions or issues, contact: hello@crosscheck.io

---

Built with ❤️ for conversion-focused SaaS landing pages.
