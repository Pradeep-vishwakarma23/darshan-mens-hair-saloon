# DARSHAN MEN'S HAIR SALOON — WEBSITE SPECIFICATION

## 1. Project Goal

Build a premium, modern, responsive website for:

DARSHAN MEN'S HAIR SALOON

The website must work perfectly on:
- Mobile
- Tablet
- Desktop

The website should feel like a professional premium men's salon/barbershop.

---

## 2. Technology

Use:

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- CSS variables
- Responsive CSS media queries

Do NOT use a backend for Version 1.

Do NOT use React unless specifically requested later.

The website must be deployable as a static website.

---

## 3. Brand Identity

Brand name:

DARSHAN MEN'S HAIR SALOON

Primary logo:
DS monogram / Darshan Salon logo supplied by the client.

Visual direction:

Premium
Modern
Elegant
Men's grooming
Professional
Minimal but visually impressive

Primary palette:

Dark theme:
- Deep black
- Charcoal
- Gold
- White

Light theme:
- Warm white
- Dark charcoal
- Gold
- Soft neutral tones

Gold should be used as an accent, not excessively.

---

# 4. Theme System

The website must support:

🌙 Dark Mode
☀️ Light Mode

Dark mode should be the default.

Add a theme toggle in the navigation.

The selected theme must persist after page refresh using localStorage.

All sections must adapt correctly to both themes.

Do not use colors that become unreadable in either theme.

---

# 5. Responsive Design

The website must be mobile-first.

Target:

Mobile:
360px+

Tablet:
768px+

Desktop:
1024px+

Large desktop:
1440px+

Requirements:

- No horizontal scrolling
- Responsive typography
- Responsive images
- Responsive navigation
- Responsive gallery
- Responsive service cards
- Responsive buttons
- Responsive spacing
- Touch-friendly controls
- Fast loading

---

# 6. Navigation

Desktop navigation:

DS Logo
Home
Services
Gallery
About
Reviews
Contact
Theme Toggle

Mobile:

DS Logo
Hamburger menu
Theme Toggle

Navigation should remain clean and professional.

Smooth scrolling should be enabled.

---

# 7. Hero Section

Create a premium hero section.

Content:

DARSHAN
MEN'S HAIR SALOON

Suggested tagline:

"Style. Confidence. You."

Primary CTA:

BOOK APPOINTMENT

Secondary CTA:

CALL NOW

Use the salon logo and high-quality salon/haircut imagery.

Add subtle professional animations.

Do not overuse animations.

---

# 8. Services Section

Title:

OUR SERVICES

Create professional service cards.

Initial services:

- Haircut
- Beard Styling
- Hair Styling
- Hair Wash
- Hair Treatment
- Kids Haircut
- Grooming
- Premium Grooming

Each card should contain:

Icon
Service name
Short description

Prices should NOT be invented.

Keep pricing ready to add later.

---

# 9. Gallery

Title:

OUR WORK

Create a responsive image gallery.

Requirements:

Mobile:
2 columns

Tablet:
3 columns

Desktop:
4 columns

Use actual salon/client images when supplied.

Images should use:

object-fit: cover

Add subtle hover effects on desktop.

Do not distort images.

---

# 10. About Section

Title:

ABOUT DARSHAN MEN'S HAIR SALOON

Create a short professional introduction.

Do not invent facts such as:
- Years of experience
- Number of customers
- Awards
- Locations
- Certifications

Only use information supplied by the client.

---

# 11. Google Reviews

Create:

CUSTOMER REVIEWS

The website should ultimately use Google as the source of truth.

Important:

Customers should submit their review ONLY on Google.

Do NOT create a separate website review submission system.

Add:

"Review us on Google"

button.

The button will later be connected to the salon's actual Google Business Profile review link.

Prepare the UI so Google review integration can be added later.

Do NOT invent Google reviews.

Do NOT create fake reviews.

---

# 12. Contact Section

Create:

CONTACT US

Include:

Phone
WhatsApp
Location
Opening Hours

Do not invent phone number, address or opening hours.

Use placeholders until the client provides the real information.

Buttons:

CALL NOW
WHATSAPP
GET DIRECTIONS

---

# 13. Appointment

Create a prominent:

BOOK APPOINTMENT

CTA.

Version 1 can use WhatsApp as the appointment method.

Do not create a complicated booking backend.

Prepare the code so a WhatsApp appointment link can be configured easily.

---

# 14. Google Maps

Add a Google Maps section.

Do not invent the salon location.

Use a placeholder until the client supplies the exact Google Maps location/link.

---

# 15. Floating Mobile Actions

On mobile, provide easy access to:

WhatsApp
Call

These should be touch-friendly.

Do not cover important website content.

---

# 16. Footer

Footer should contain:

DS logo
DARSHAN MEN'S HAIR SALOON
Quick Links
Contact
Social links when supplied
Copyright

Do not invent social media URLs.

---

# 17. UX Requirements

The website must feel:

Fast
Premium
Simple
Professional
Trustworthy

Avoid:

Excessive animations
Excessive gradients
Huge blocks of text
Clutter
Unnecessary popups
Fake statistics
Fake reviews
Invented business information

---

# 18. Accessibility

Use:

Semantic HTML
Alt text for images
Keyboard navigation
Visible focus states
Accessible buttons
Good color contrast
ARIA labels where appropriate

Theme toggle and mobile menu must be keyboard accessible.

---

# 19. SEO

Add:

Meaningful page title
Meta description
Viewport meta tag
Open Graph basics
Semantic headings
Image alt text

Suggested title:

Darshan Men's Hair Saloon | Premium Men's Grooming

Do not add fake location information.

---

# 20. Performance

Optimize for:

Fast initial loading
Lazy-loaded gallery images
Compressed images where possible
Minimal JavaScript
No unnecessary libraries

---

# 21. Code Quality

Keep the code:

Clean
Readable
Modular
Well commented
Easy to modify

Use CSS variables for theme colors.

Keep all configurable business information easy to find.

Example:

BUSINESS_NAME
PHONE
WHATSAPP
ADDRESS
GOOGLE_REVIEW_URL
GOOGLE_MAPS_URL

Do not hard-code these values throughout multiple files.

---

# 22. Required Files

Create:

index.html
style.css
script.js
README.md

Create:

images/

Create:

images/gallery/

Create:

images/logo/

---

# 23. Important Development Rule

The localhost website is the master design.

Before deployment:

Test:

Mobile
Tablet
Desktop

Test:

Dark mode
Light mode
Navigation
Theme persistence
Buttons
Gallery
Contact links
Google review button
WhatsApp
Call button

Fix all console errors.

---

# 24. AI DEVELOPMENT RULE

Do not randomly change the design.

Do not remove requested functionality.

Do not invent business information.

Do not invent reviews.

Do not invent prices.

Do not invent address or phone number.

If information is missing, use a clearly marked placeholder.

Keep the website ready for real client information.

---

# 25. Version 1 Definition

Version 1 is complete when:

✓ Responsive mobile website
✓ Responsive tablet website
✓ Responsive desktop website
✓ Dark theme
✓ Light theme
✓ Theme persistence
✓ Premium DS branding
✓ Hero section
✓ Services
✓ Gallery
✓ About
✓ Google Reviews section
✓ Google review CTA
✓ Contact
✓ WhatsApp CTA
✓ Call CTA
✓ Google Maps placeholder
✓ Appointment CTA
✓ Footer
✓ SEO basics
✓ Accessibility basics
✓ No console errors

---

# 26. Future Features

Do NOT implement these in Version 1 unless requested:

- Online payment
- Customer accounts
- Admin dashboard
- Database
- Online booking database
- Staff management
- Loyalty program
- AI hairstyle recommendation
- Customer login
- Backend API

Keep the architecture ready for future expansion.