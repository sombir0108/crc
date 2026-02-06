# CRC Chambers of Law - Website

A professional, responsive website for CRC Chambers of Law, featuring a classic design aesthetic with modern functionality.

## Overview

This website showcases CRC Chambers of Law, a distinguished legal practice offering comprehensive legal services across multiple disciplines. The website is built with HTML, CSS, and JavaScript to create a professional online presence that reflects the firm's commitment to excellence.

## Design Features

- **Classic Professional Design**: Inspired by traditional law firm aesthetics with a crimson and cream color palette
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Accessible**: WCAG AA compliant with semantic HTML and ARIA labels
- **Fast Loading**: Optimized assets and clean code for quick page loads
- **Interactive Elements**: Smooth scrolling, animated transitions, and user-friendly forms

## Pages

### 1. Homepage (index.html)
- Hero section with firm introduction
- Practice areas preview
- Team highlights
- Awards showcase
- Call-to-action sections

### 2. About Us (about.html)
- Firm history and founding story
- Vision and mission statements
- Core values
- Firm culture
- Professional associations

### 3. Practice Areas (practice-areas.html)
- Detailed descriptions of 9 practice areas:
  - Corporate Law
  - Commercial Litigation
  - Arbitration & ADR
  - Banking & Finance
  - Real Estate Law
  - Intellectual Property
  - Tax Law
  - Employment & Labour Law
  - Regulatory Compliance

### 4. Our Team (team.html)
- Partner profiles with detailed bios
- Senior associate listings
- Contact information for each attorney

### 5. Awards & Recognition (awards.html)
- Firm rankings from legal directories
- Individual lawyer recognition
- Firm awards
- Client testimonials
- Notable matters

### 6. Contact Us (contact.html)
- Contact information
- Interactive contact form with validation
- Google Maps integration
- Office hours and directions
- Practice area contacts

## Technology Stack

- **HTML5**: Semantic markup for accessibility and SEO
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript (ES6)**: Vanilla JavaScript for interactivity
- **Responsive Design**: Mobile-first approach with media queries

## File Structure

```
crcchamber/
├── index.html
├── about.html
├── practice-areas.html
├── team.html
├── awards.html
├── contact.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── main.js
│   └── form-validation.js
├── images/
│   └── (Add your images here)
└── README.md
```

## Setup Instructions

### 1. Download/Clone the Repository
```bash
git clone <repository-url>
cd crcchamber
```

### 2. Add Images
Place your images in the `images/` folder:
- `logo.svg` - Firm logo
- `hero-bg.jpg` - Hero section background
- `placeholder-avatar.jpg` - Team member photos

### 3. Customize Content

#### Update Firm Information
Replace placeholder content with actual firm information:
- Firm address in footer (all pages)
- Phone numbers and email addresses
- Office hours
- Team member profiles
- Practice area details
- Awards and recognition

#### Update Google Maps
In `contact.html`, replace the Google Maps embed URL with your actual office location:
```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL"></iframe>
```

To get your Google Maps embed URL:
1. Go to Google Maps
2. Search for your office address
3. Click "Share" > "Embed a map"
4. Copy the iframe code

### 4. Configure Contact Form
The contact form currently simulates submission. To connect it to a backend:

**Option 1: FormSubmit.co (Easy, no backend required)**
```html
<form action="https://formsubmit.co/your@email.com" method="POST">
```

**Option 2: Custom Backend**
Modify `js/form-validation.js` to send data to your API:
```javascript
fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
})
```

### 5. Deploy the Website

#### Static Hosting Options:

**Netlify (Recommended)**
1. Drag and drop the folder to netlify.com/drop
2. Or connect your Git repository for automatic deployments

**GitHub Pages**
1. Push code to GitHub
2. Go to Settings > Pages
3. Select branch and folder
4. Your site will be live at `username.github.io/crcchamber`

**Vercel**
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

**Traditional Web Hosting**
1. Upload all files via FTP/SFTP
2. Ensure `index.html` is in the root directory
3. Configure your domain

## Customization Guide

### Colors
Edit CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #cd2653;
    --secondary-color: #f5efe0;
    --text-primary: #000000;
    --text-secondary: #6d6d6d;
}
```

### Fonts
Change fonts in `css/style.css`:
```css
:root {
    --font-heading: Georgia, 'Times New Roman', serif;
    --font-body: Arial, Helvetica, sans-serif;
}
```

### Navigation Menu
Update menu items in the header of each HTML file:
```html
<ul class="nav-menu">
    <li><a href="index.html">Home</a></li>
    <!-- Add/remove menu items here -->
</ul>
```

## Features

### Interactive Elements
- ✅ Sticky navigation header
- ✅ Mobile hamburger menu
- ✅ Smooth scrolling
- ✅ Back-to-top button
- ✅ Disclaimer modal
- ✅ Cookie consent notice
- ✅ Form validation with error messages
- ✅ Keyboard navigation support

### Responsive Breakpoints
- Desktop: 1200px+
- Laptop: 1024px - 1199px
- Tablet: 768px - 1023px
- Mobile: 576px - 767px
- Small mobile: < 576px

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Accessibility Features
- Semantic HTML5 elements
- ARIA labels for screen readers
- Keyboard navigation
- Color contrast compliance (WCAG AA)
- Alt text for images
- Focus states for interactive elements

## Performance Optimization
- Minified CSS and JavaScript (production)
- Optimized images
- Lazy loading support
- Efficient CSS Grid and Flexbox layouts
- Minimal HTTP requests

## SEO Features
- Meta descriptions on all pages
- Semantic HTML structure
- Optimized heading hierarchy
- Clean URLs
- Mobile-friendly design
- Fast page load times

## Maintenance

### Regular Updates
- Keep content current (awards, team members, etc.)
- Update copyright year in footer
- Review and update practice area descriptions
- Add new blog posts or news items (if applicable)

### Content Management
- All content is in plain HTML for easy editing
- No database required
- Can integrate with a headless CMS if needed

### Backup
Regularly backup your website files, especially after making changes.

## Adding New Pages

1. Copy an existing HTML file as template
2. Update page title and meta description
3. Add navigation link in header
4. Update footer copyright if needed
5. Add any page-specific styles

## Analytics

To add Google Analytics:
```html
<!-- Add before closing </head> tag -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Security Considerations
- Form validation on both client and server side (implement server-side)
- Use HTTPS for production
- Sanitize user inputs on backend
- Regular security updates
- Keep dependencies minimal (currently none!)

## Support & Documentation

### Troubleshooting

**Mobile menu not working?**
- Check that `main.js` is loaded
- Verify hamburger ID matches JavaScript

**Form not submitting?**
- Configure form action URL
- Check console for JavaScript errors
- Verify all required fields have proper IDs

**Images not loading?**
- Check file paths are correct
- Ensure images are in `/images` folder
- Verify image file extensions match HTML

## License

This website template is proprietary and designed specifically for CRC Chambers of Law.

## Credits

- Design: Classic Professional Style
- Development: Custom HTML/CSS/JavaScript
- Icons: SVG icons (embedded)
- Fonts: System fonts for fast loading

---

## Contact

For questions or support regarding this website:
- **Email**: info@crcchambers.com
- **Phone**: +91 11 1234 5678

---

**CRC Chambers of Law**
Excellence in Legal Practice
*Integrity | Expertise | Commitment*
