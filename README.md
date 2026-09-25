# Darshan Men's Hair Saloon — Website (Version 1)

A premium, modern, fully responsive website for **Darshan Men's Hair Saloon**. Built with clean semantic HTML5, modern CSS3 variables with dark/light themes, and lightweight Vanilla JavaScript.

---

## 🌟 Key Features

- **🌙 Dark / ☀️ Light Theme System**:
  - Dark mode set as default with rich charcoal, deep blacks, and gold accents.
  - Light mode with warm whites, soft neutrals, and amber-gold details.
  - State saved and automatically persisted across sessions using `localStorage`.
  - Accessible theme toggles on both desktop and mobile navigation.

- **📱 Mobile-First Responsive Design**:
  - Fully tested across **Mobile** (360px+), **Tablet** (768px+), and **Desktop** (1024px, 1440px+).
  - Floating mobile action bar with one-touch Call, WhatsApp, and Booking.
  - Touch-friendly controls, responsive typography, and fluid spacing.

- **✂️ Complete Service Showcase**:
  - Highlights all 8 core services: Haircut, Beard Styling, Hair Styling, Hair Wash, Hair Treatment, Kids Haircut, Grooming, and Premium Grooming.
  - Prices clearly designated as `[Price on Consultation]` ready for actual client rate card.

- **🖼️ Interactive Filterable Gallery & Fullscreen Lightbox**:
  - Responsive image grid (2 cols mobile, 3 cols tablet, 4 cols desktop).
  - Category filters: All Work, Haircuts, Beard Styling, Hair Styling, Spa & Grooming.
  - Accessible lightbox with keyboard navigation (`Esc` to close, `Arrow` keys to navigate).

- **💈 Owner & Master Barber Showcase**:
  - Highlights the salon owner's professional background: 1 year experience at Spin and specialized styling training in Bengaluru.
  - Authentic display of the owner's original photography with luxury framing.

- **⭐ Official Google Reviews Integration**:
  - Adheres strictly to authentic Google Business reviews without fake reviews.
  - Direct "Review Us On Google" and "Read Google Reviews" CTAs.

- **📅 WhatsApp Quick Booking Helper**:
  - Intuitive booking helper modal that generates a clean WhatsApp appointment template.

- **🛡️ Clean Placeholders & Single-File Configuration**:
  - No invented phone numbers, addresses, or prices.
  - All placeholders are clearly tagged for instant updates.

---

## 📁 Project Structure

```
darshan-salon/
│
├── index.html              # Main HTML5 document with semantic structure & SEO tags
├── style.css               # Design system, CSS custom properties, and responsive styles
├── script.js               # Theme toggle, gallery filter/lightbox, WhatsApp modal & config
├── README.md               # Documentation & client setup guide
├── SPEC.md                 # Complete project specification
│
└── images/
    ├── logo/                     # Original brand emblems & favicons
    │   ├── darshan-logo.png      # Primary circular DS brand logo
    │   ├── darshan-emblem.png    # High-resolution salon crest emblem
    │   └── darshan-favicon.png   # Browser tab favicon
    ├── owner/                    # Owner photography
    │   └── owner.png             # Raw photo of salon owner & master barber
    ├── hero/               # Hero background imagery
    │   └── hero-banner.jpg # Salon interior showcase
    ├── about/              # About section imagery
    │   └── about-salon.jpg # Master barber craft image
    └── gallery/            # Showcase gallery photos
        ├── haircut-fade.jpg
        ├── beard-styling.jpg
        ├── hair-styling.jpg
        ├── hair-wash.jpg
        ├── kids-haircut.jpg
        ├── grooming-facial.jpg
        ├── hair-treatment.jpg
        └── barber-craft.jpg
```

---

## ⚙️ Central Business Information Configuration

All business details are centralized in `script.js` in the `SALON_CONFIG` object:

```javascript
// Central configuration object in script.js:
const SALON_CONFIG = {
  salonName: "Darshan Men's Hair Saloon",
  tagline: "Style. Confidence. You.",
  
  // Real Contact Information
  phoneDisplay: "+91 84316 92794",
  phoneTel: "tel:+918431692794",
  
  whatsappDisplay: "+91 84316 92794",
  whatsappNumber: "918431692794",
  whatsappDefaultMessage: "Hello Darshan Men's Hair Saloon, I would like to book an appointment.",
  
  // Real Address & Location
  addressDisplay: "1, Barey Hills Main Rd, Shri Ganesha Nagar, Jagriti Colony, Azadpur, Kalaburagi, Karnataka 585105",
  plusCode: "8VM6+Q2 Kalaburagi, Karnataka",
  
  // Real Google Maps Link
  googleMapsUrl: "https://maps.app.goo.gl/uyRdwP7iL1KX5DWX7",
  
  // Real Google Review URL
  googleReviewUrl: "https://www.google.com/search?q=darshan+mens+hair+saloon#lrd=0x3bc8c7a50cd6e70f:0x659c3593e609f09d,3"
};
```

Updating this single object in `script.js` automatically populates all telephone links, WhatsApp messaging links, map directions, and review buttons across the entire website.

---

## 🚀 Running Locally

You can run this project with any local HTTP server:

```bash
# Using Python
python -m http.server 8000

# Or using Node npx http-server
npx http-server . -p 8000
```

Open `http://localhost:8000` in your web browser.

---

## 📋 Version 1 Compliance Checklist

- [x] Responsive mobile website (360px+)
- [x] Responsive tablet website (768px+)
- [x] Responsive desktop website (1024px & 1440px+)
- [x] Dark theme default
- [x] Light theme option
- [x] Theme persistence via `localStorage`
- [x] Approved original Darshan Salon brand logo & emblem
- [x] Hero section with tagline & CTAs
- [x] 8 Service cards with consultation pricing placeholders
- [x] Filterable gallery with responsive grid & lightbox
- [x] About section with 4 pillars
- [x] Google Reviews section with "Review Us on Google" CTA
- [x] Contact section with Phone, WhatsApp, Address, & Hours
- [x] WhatsApp appointment integration modal
- [x] Google Maps preview card
- [x] Floating mobile action bar (Call, WhatsApp, Book)
- [x] Semantic SEO tags & accessibility markup
- [x] Zero console errors
