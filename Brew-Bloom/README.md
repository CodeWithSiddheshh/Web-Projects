# Brew & Bloom - Premium Café Website

A stunning, modern, premium multi-page café website built with pure frontend technologies.

## 🎨 Overview

**Brew & Bloom** is a fictional premium café website showcasing:
- Sophisticated modern design
- Warm, elegant aesthetic
- Premium user experience
- Fully responsive layouts
- Professional coffee shop branding

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **Vanilla JavaScript** - Interactive features
- **Font Awesome 6.5.1** - Icon library
- **Google Fonts** - Playfair Display + Poppins
- **Unsplash** - High-quality imagery

**No frameworks, no backend, no dependencies** - Just pure frontend code.

## 📄 Pages

1. **index.html** - Home page with hero, featured drinks, about preview, testimonials
2. **menu.html** - Complete menu with category filtering (22 items)
3. **about.html** - Café story, philosophy, team, timeline, statistics
4. **gallery.html** - Visual gallery with lightbox and category filters (16 images)
5. **offers.html** - Special offers and promotional deals (6 offers)
6. **reservations.html** - Table reservation form with validation
7. **contact.html** - Contact information, form, and location details

## ✨ Features

### Design
- Premium color palette (browns, creams, gold accents)
- Elegant typography (Playfair Display + Poppins)
- Consistent branding across all pages
- Professional photography
- Modern card-based layouts

### Interactivity
- ✅ Sticky navigation with scroll effects
- ✅ Mobile hamburger menu
- ✅ Smooth scroll animations
- ✅ Scroll progress indicator
- ✅ Menu category filtering
- ✅ Gallery lightbox with keyboard navigation
- ✅ Form validation (reservations, contact)
- ✅ Success modals and toast notifications
- ✅ Animated statistics counters
- ✅ Back-to-top button
- ✅ Active navigation indicators
- ✅ Scroll reveal animations

### Responsive Design
- Desktop-first approach
- Tablet optimized (768px+)
- Mobile friendly (320px+)
- Touch-friendly interactions
- No horizontal scrolling

### Accessibility
- Semantic HTML5
- ARIA labels
- Keyboard navigation support
- Alt text on all images
- Proper heading hierarchy
- Good color contrast
- Focus indicators

## 🚀 Getting Started

### Quick Start

1. **Download/Clone** the project
2. **Open** `index.html` in your browser
3. **That's it!** No build process required.

### Recommended Browsers
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📁 Project Structure

```
cafe-website/
│
├── index.html              # Home page
├── menu.html               # Full menu
├── about.html              # About us
├── gallery.html            # Photo gallery
├── offers.html             # Special offers
├── reservations.html       # Table reservations
├── contact.html            # Contact page
│
├── css/
│   └── style.css          # All styles (47KB)
│
├── js/
│   └── script.js          # All interactions (10KB)
│
└── assets/
    ├── images/            # (Empty - using Unsplash CDN)
    └── icons/             # (Empty - using Font Awesome CDN)
```

## 🎨 Design System

### Color Palette

```css
Primary:    #3B2416  /* Deep Brown */
Secondary:  #8B5E3C  /* Medium Brown */
Background: #F8F4EE  /* Cream */
Accent:     #C89B6D  /* Gold */
Text:       #2B2118  /* Dark Brown */
White:      #FFFFFF  /* Pure White */
```

### Typography

- **Headings:** Playfair Display (serif)
- **Body:** Poppins (sans-serif)
- Font sizes scale responsively with clamp()

### Components

- Buttons (primary, outline, dark)
- Cards (menu, featured, team, testimonial, offer)
- Forms (validated inputs, textareas, selects)
- Navigation (desktop + mobile)
- Modals and toasts
- Hero sections
- Lightbox gallery

## 🧩 Key JavaScript Features

### Navigation
- Sticky navbar on scroll
- Mobile hamburger toggle
- Active page indicator

### Menu Filtering
```javascript
// Filter menu by category
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    // Show/hide cards based on category
  });
});
```

### Form Validation
```javascript
// Validates required fields, email format, phone format
validateForm(form, fields);
```

### Gallery Lightbox
- Click to expand images
- Arrow keys navigation
- ESC to close
- Previous/Next buttons

### Animations
- Scroll reveal (Intersection Observer)
- Counter animations
- Hover effects
- Fade transitions

## 📱 Responsive Breakpoints

```css
Desktop:  1200px+ (default)
Tablet:   768px - 1199px
Mobile:   320px - 767px
```

## 🔧 Customization

### Change Colors
Edit CSS variables in `css/style.css`:
```css
:root {
  --clr-primary: #3B2416;
  --clr-accent: #C89B6D;
  /* ... */
}
```

### Change Fonts
Update Google Fonts import and CSS variables:
```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font');
:root {
  --ff-heading: 'Your Font', serif;
}
```

### Add Menu Items
Copy existing `.menu-card` structure in `menu.html`:
```html
<div class="menu-card" data-category="coffee">
  <!-- Your content -->
</div>
```

### Modify Forms
Form validation is handled in `js/script.js`. Add new fields to the validation array.

## 🖼️ Images

All images are sourced from **Unsplash** via direct URLs. Every image on the website is unique (no duplicates).

### Image Categories Used
- Coffee & espresso
- Café interiors
- Food photography
- Desserts
- Baristas
- Café ambience
- Customer moments

To replace images, simply update the `src` attributes in HTML files.

## 🌐 Browser Compatibility

- Modern browsers (ES6+ required)
- CSS Grid support required
- Intersection Observer API used
- No IE11 support

## ⚡ Performance

- Lazy loading on all images except hero
- Minimal external dependencies
- Optimized CSS (no unused rules)
- Efficient JavaScript (event delegation)
- Total page weight: ~100-200KB (excluding images)

## 📋 Checklist

✅ 7 complete HTML pages  
✅ Fully responsive design  
✅ No emojis (Font Awesome icons only)  
✅ Unique images (no duplicates)  
✅ Semantic HTML5  
✅ Accessible forms with validation  
✅ Mobile navigation  
✅ Interactive features (filtering, lightbox, modals)  
✅ Smooth animations  
✅ Professional design  
✅ Consistent branding  
✅ Working navigation between pages  
✅ No console errors  
✅ No placeholder content  

## 🎯 Use Cases

- Portfolio project
- Client presentation
- Learning frontend development
- Template for real café website
- Design inspiration
- Educational purposes

## 📝 Notes

- **Forms are frontend-only** - they validate and show success messages but don't submit to a server
- **No authentication** - purely a static website
- **Newsletter subscription** - shows success toast but doesn't store data
- **Reservation system** - displays confirmation modal but doesn't persist bookings

To make this production-ready, you would need to:
1. Add a backend (Node.js, PHP, etc.)
2. Connect forms to a database
3. Implement actual reservation system
4. Set up email notifications
5. Add payment processing (if needed)

## 📄 License

This is a fictional café website created for demonstration purposes. All design elements are original. Images are from Unsplash (free to use under Unsplash license).

## 🤝 Credits

- **Design & Development:** Custom build
- **Icons:** Font Awesome 6.5.1
- **Fonts:** Google Fonts (Playfair Display, Poppins)
- **Images:** Unsplash photographers

---

**Brew & Bloom** - Where Every Cup Tells a Story ☕

Enjoy exploring the website!
