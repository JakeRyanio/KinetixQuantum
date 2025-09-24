# Kinetix Quantum - Capital in Motion

A production-ready Next.js 14 website for Kinetix Quantum Fund, featuring a cinematic, kinetic aesthetic that showcases live animated Capital-in-Motion Flywheel and clean investor-ready sections.

## 🚀 Features

- **Interactive Capital-in-Motion Flywheel**: Animated orbital diagram with 8 allocation nodes
- **Quantum Finance Aesthetic**: Dark, luxe design with cyan/violet/lime accents
- **Smooth Animations**: Framer Motion powered page and component animations
- **Fully Responsive**: Mobile-first design with adaptive layouts
- **SEO Optimized**: Complete metadata, OpenGraph, and structured data
- **Contact API**: Built-in contact form with API endpoint
- **Performance Focused**: Optimized for Lighthouse scores ≥90

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom quantum finance theme
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React
- **Fonts**: Space Grotesk (headings) + Inter (body)

## 🎨 Design System

### Color Palette
- `#0B0F14` - Quantum Dark (base)
- `#0F172A` - Quantum Slate
- `#111827` - Quantum Gray
- `#22D3EE` - Quantum Cyan (primary accent)
- `#C084FC` - Quantum Violet (secondary accent)
- `#C3FF5E` - Quantum Lime (tertiary accent)
- `#94A3B8` - Border/muted text

### Typography
- **Headings**: Space Grotesk (quantum finance feel)
- **Body**: Inter (clean readability)

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Flywheel.tsx          # Interactive orbital diagram
│   │   ├── AllocationCard.tsx    # Allocation display cards
│   │   ├── Nav.tsx               # Navigation component
│   │   ├── Footer.tsx            # Footer component
│   │   └── Section.tsx           # Reusable section wrapper
│   ├── api/
│   │   └── contact/
│   │       └── route.ts          # Contact form API endpoint
│   ├── globals.css               # Global styles + theme
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Main page entry point
│   └── homepage.tsx              # Main site component
├── components/ui/                # shadcn/ui components
├── lib/
│   ├── data.ts                   # Site data (allocations, team, etc.)
│   └── utils.ts                  # Utility functions
└── public/                       # Static assets
```

## 🚦 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📊 Key Sections

1. **Hero** - Title, manifesto excerpt, CTA buttons
2. **Capital-in-Motion Flywheel** - Interactive animated orbital diagram
3. **Allocations** - 8 strategic allocation cards with details
4. **Why Kinetix Quantum** - 4 key advantages with icons
5. **Impact Loop** - Charity flyback + venture pool mechanics
6. **Team** - Team member cards with roles
7. **Contact CTA** - Email capture with investment range selection

## 🎯 Interactive Flywheel

The centerpiece component features:
- 8 orbital nodes representing allocation categories
- Smooth animations with hover/click interactions
- Desktop: Circular orbital layout
- Mobile: Responsive 2x4 grid with float animations
- Side panel with detailed allocation information

## 📱 Responsive Design

- **Desktop**: Full orbital flywheel with side navigation
- **Tablet**: Adapted layouts with maintained animations
- **Mobile**: Grid-based flywheel, hamburger navigation, optimized forms

## 🔧 Customization

### Updating Content
Edit `/lib/data.ts` to modify:
- Allocation categories and percentages
- Team member information
- Company advantages
- Manifesto text

### Styling
Modify `/src/app/globals.css` and `tailwind.config.ts` for:
- Color scheme adjustments
- Animation timings
- Typography changes

### API Integration
The contact form connects to `/api/contact/route.ts`. In production:
- Replace console.log with database storage
- Add email notifications
- Integrate with CRM systems

## 🚀 Deployment

Ready for immediate deployment on Vercel:

```bash
npm run build
npm start
```

Or deploy to Vercel with one click from your repository.

## 📈 Performance

Optimized for:
- Lighthouse Performance Score ≥90
- Smooth animations on mid-range devices
- Fast loading with proper image optimization
- SEO-friendly with complete metadata

## 🎨 Animation Philosophy

Following "quantum finance" principles:
- Smooth orbital arcs and luminous lines
- Micro-glow effects on hover
- Subtle parallax and float animations
- 400-800ms transitions with ease in/out
- Preference for flow over flashy effects

## 📞 Contact Integration

Built-in contact form with:
- Client-side validation
- API endpoint for form submission
- Investment range selection
- Company/organization fields
- Message textarea for detailed inquiries

---

**Capital is not static. It is energy.**  
*Kinetix Quantum treats money as a kinetic force—flowing across real assets, future markets, and timeless stores of value.*