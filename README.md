# Seed Pulse Fund - Official Website

A professional, animated website for Seed Pulse Fund built with modern web technologies.

## Features

- **Intro Animation**: Elegant 5-second loading animation with the company logo
- **Smooth Scroll Animations**: All sections fade in beautifully as you scroll
- **Minimal Design**: Black background with white text and subtle gray accents
- **Corporate Finance Aesthetic**: Professional, clean, and sophisticated design
- **No Traditional Header/Footer**: Everything blends seamlessly
- **Animated Background**: 
  - Rotating glass panels with low transparency
  - Dynamic scroll follower that switches sides and changes size
- **Interactive Elements**: 
  - Hover effects on cards and links
  - Custom cursor (desktop)
  - Smooth parallax effects
  - Auto-hiding navigation on scroll down
  - Back-to-top button with glassmorphism effect
  - Team LinkedIn links with animated arrows
- **Fully Responsive**: Works on all devices

## Sections

1. **Hero** - Main headline and call-to-action
2. **About Us** - Company overview
3. **Origin Story** - Founder's story with gradient background
4. **Vision** - Company vision with decorative corners
5. **Portfolio** - Investment portfolio cards
6. **Team** - Leadership team members
7. **Investor Message** - Message to investors
8. **Partner With Us** - Investor contact form with fields for name, email, company, investment range, and message
9. **Contact** - Contact information

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with animations
- **Vanilla JavaScript** - Intersection Observer API for scroll animations

## Running the Website

### Option 1: Local Server (Recommended)
```bash
# Navigate to the project directory
cd /Users/marukaneko/website-spf

# Start a local server on port 8000
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

### Option 2: Direct File Access
Simply open `index.html` in your browser (some animations may not work perfectly).

## Animation Details

- **Intro Animation**: 5 seconds elegant loading sequence with:
  - Floating particle effects (5 particles with staggered timing)
  - "SEED", "PULSE", "FUND" words revealing one by one
  - Two expanding decorative lines
  - "Fueling Bold Ideas From Day One" tagline fade-in
  - Smooth fade out to main content
- **Background Animations**:
  - Three rotating glass panels (25s, 30s, 35s cycles)
  - Scroll follower object that moves vertically, switches sides every 1000px, and changes size dynamically
- **Navigation**: Fades in after intro, hides on scroll down, shows on scroll up
- **Hero Section**: Staggered text animations with parallax effect
- **Section Animations**: Fade up animations triggered by scroll
- **Team Cards**: Staggered animations (150ms delay between each)
- **Hover Effects**: 
  - Portfolio cards lift and brighten border with shimmer effect
  - Navigation links show underline animation
  - CTA button fills with white background
  - LinkedIn links with diagonal arrow animation
  - Back-to-top button lifts on hover
- **Back-to-Top**: Appears after scrolling 500px, smooth scroll to top on click

## Design System

### Colors
- **Background**: #000000 (Pure Black)
- **Text**: #ffffff (White)
- **Secondary Text**: #a8a8a8 (Gray)
- **Accents**: #1a1a1a (Light Gray)
- **Borders**: rgba(255, 255, 255, 0.1)

### Typography
- **Font Family**: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif
- **Hero Title**: 3-6rem (responsive)
- **Section Titles**: 2.5-4rem (responsive)
- **Body Text**: 1-1.3rem (responsive)

### Spacing
- **Section Padding**: 8rem vertical, 5% horizontal
- **Max Content Width**: 1200px

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Credits

Designed and developed for Seed Pulse Fund, 2025.

