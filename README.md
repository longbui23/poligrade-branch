# PoliGrade

Democracy Powered by Data, Not Drama

## Overview

PoliGrade is a political accountability platform that helps voters make informed decisions by providing data-driven evaluations of politicians, policy-based party alignments, and real-time political tracking.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: NextUI
- **Animation**: Framer Motion

## Project Structure

```
poligrade/
├── app/
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Home page with hero section
│   ├── globals.css         # Global styles
│   ├── grades/
│   │   └── page.tsx        # Politician grades page
│   ├── quiz/
│   │   └── page.tsx        # Voter alignment quiz page
│   ├── contact/
│   │   └── page.tsx        # Contact form page
│   └── donate/
│       └── page.tsx        # Donation page
├── components/
│   ├── Header.tsx          # Persistent navigation header
│   ├── Footer.tsx          # Site footer
│   └── Logo.tsx            # Brand logo component
├── ui/
│   └── Button.tsx          # Reusable button component
└── public/                 # Static assets
```

## Features

### Current

- **Politician Grades**: Browse and evaluate elected officials based on policy positions and voting records
- **Voter Alignment Quiz**: Interactive quiz to discover which policy-based party aligns with your beliefs
- **Responsive Design**: Mobile-first, accessible design with semantic HTML
- **Dark Mode Support**: Built-in dark mode compatibility
- **Smooth Navigation**: Client-side routing with Next.js Link components

### Planned (Phase 2-3)

- Real-time political news feed
- Detailed voting record tracking
- Fact-checking integration
- Six policy-based parties framework
- Expert volunteer collaboration system
- Bluesky integration for updates

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Development

The application uses:

- **Server Components** by default for better performance
- **Client Components** only where interactivity is needed (marked with `'use client'`)
- **TypeScript** for type safety
- **ESLint** for code quality

## Pages

- `/` - Landing page with hero section and feature overview
- `/grades` - Politicians page with sample grades and evaluations
- `/quiz` - Voter alignment quiz interface
- `/contact` - Contact form for inquiries
- `/donate` - Donation tiers and support information

## License

TBD

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
