# Alexandros Liakos Website

A modern, luxury website for Greek hairstylist Alexandros Liakos, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Minimal, luxury, editorial design** - Fashion magazine-inspired aesthetic
- **Responsive layout** - Works beautifully on all devices
- **Interactive galleries** - Lightbox modals for image viewing
- **Smooth navigation** - Sticky navbar with active link highlighting
- **Contact form** - Client-side validation and demo submission
- **Video integration** - YouTube embed support
- **Accessibility** - Semantic HTML and keyboard navigation

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Google Fonts** - Playfair Display (serif) and Inter (sans-serif)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── celebrities/       # Celebrities gallery
│   ├── hair-art/          # Hair art with filters
│   ├── gino-salon/        # Salon showcase
│   ├── collections/       # Seasonal collections
│   ├── training/          # Training services
│   ├── video/             # Video content
│   ├── press/             # Press features
│   ├── about/             # Bio and timeline
│   ├── contact/           # Contact form
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── Layout.tsx        # Main layout wrapper
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer component
│   ├── GalleryGrid.tsx   # Responsive image grid
│   ├── Lightbox.tsx      # Image lightbox modal
│   └── SectionHeading.tsx # Section headers
└── data/                  # Data files
    ├── celebrities.ts    # Celebrity gallery data
    ├── hairArt.ts        # Hair art items
    ├── collections.ts    # Collection data
    ├── press.ts          # Press items
    ├── timeline.ts       # Career timeline
    ├── salon.ts          # Salon images
    └── videos.ts         # Video data
```

## Customization

### Colors

Edit `tailwind.config.ts` to change the accent color (currently soft copper `#B87333`).

### Content

Update the data files in the `data/` directory to replace placeholder content with real images and information.

### Images

Replace placeholder images with actual photos. Update image URLs in the data files or use Next.js Image component for optimization.

## Features by Page

- **Home**: Hero section with portrait, CTA buttons, and highlights strip
- **Celebrities**: Responsive grid gallery with hover overlays and lightbox
- **Hair Art**: Filterable gallery by category (Editorial, Runway, Salon, Everyday)
- **Gino Salon**: People & moments gallery, interior photos, salon info card
- **Collections**: Dropdown selector for different seasonal collections
- **Training**: Service cards for masterclasses, 1:1 coaching, and workshops
- **Video**: Featured video and grid of additional videos
- **Press**: Magazine feature cards with lightbox
- **About**: Bio section and career timeline
- **Contact**: Form with validation and contact information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved. © 2024 Alexandros Liakos

