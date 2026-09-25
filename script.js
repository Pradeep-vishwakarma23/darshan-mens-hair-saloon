/**
 * ==========================================================================
 * DARSHAN MEN'S HAIR SALOON - CLIENT SCRIPT
 * Version 1.0 - Clean, Modular, High-Performance
 * ==========================================================================
 */

'use strict';

/**
 * --------------------------------------------------------------------------
 * 1. CENTRAL SALON CONFIGURATION
 * Edit this single configuration object when real business information is provided.
 * All phone, WhatsApp, location, review, and map links across the site will
 * automatically update.
 * --------------------------------------------------------------------------
 */
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
  
  // Real Google Review URL (Direct Review Dialog)
  googleReviewUrl: "https://www.google.com/search?q=darshan+mens+hair+saloon#lrd=0x3bc8c7a50cd6e70f:0x659c3593e609f09d,3",
  
  // Business Information Not Provided Yet (Do not invent)
  openingHoursDisplay: "Timings available on call / Contact salon",
  
  // Social Media Links (Not provided yet)
  instagramUrl: "#",
  facebookUrl: "#",
  youtubeUrl: "#"
};

/**
 * --------------------------------------------------------------------------
 * 2. THEME CONTROLLER (Dark / Light Mode with localStorage Persistence)
 * --------------------------------------------------------------------------
 */
const ThemeManager = {
  storageKey: 'darshan_salon_theme',
  defaultTheme: 'dark', // Dark theme is default according to specification

  init() {
    const savedTheme = localStorage.getItem(this.storageKey);
    const initialTheme = savedTheme || this.defaultTheme;
    this.applyTheme(initialTheme);
    this.bindEvents();
  },

  applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(this.storageKey, theme);
    
    // Update theme toggle buttons aria attributes
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      const isLight = theme === 'light';
      btn.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
      btn.setAttribute('title', isLight ? 'Switch to dark theme' : 'Switch to light theme');
    });
  },

  toggle() {
    const currentTheme = document.documentElement.getAttribute('data-theme') || this.defaultTheme;
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
  },

  bindEvents() {
    const toggleBtns = document.querySelectorAll('.theme-toggle-btn');
    toggleBtns.forEach(btn => {
      btn.addEventListener('click', () => this.toggle());
    });
  }
};

/**
 * --------------------------------------------------------------------------
 * 3. NAVIGATION CONTROLLER (Sticky Header, Mobile Drawer, Smooth Scroll)
 * --------------------------------------------------------------------------
 */
const NavManager = {
  header: document.querySelector('.header'),
  hamburgerBtn: document.getElementById('hamburgerBtn'),
  mobileDrawer: document.getElementById('mobileDrawer'),
  mobileOverlay: document.getElementById('mobileNavOverlay'),
  navLinks: document.querySelectorAll('.nav-link, .mobile-nav-link'),

  init() {
    if (!this.header) return;
    this.bindScroll();
    this.bindMobileMenu();
    this.bindSmoothScroll();
    this.bindScrollSpy();
  },

  bindScroll() {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        this.header.classList.add('scrolled');
      } else {
        this.header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  },

  bindMobileMenu() {
    if (!this.hamburgerBtn || !this.mobileDrawer || !this.mobileOverlay) return;

    const openMenu = () => {
      this.hamburgerBtn.classList.add('active');
      this.hamburgerBtn.setAttribute('aria-expanded', 'true');
      this.mobileDrawer.classList.add('active');
      this.mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      this.hamburgerBtn.classList.remove('active');
      this.hamburgerBtn.setAttribute('aria-expanded', 'false');
      this.mobileDrawer.classList.remove('active');
      this.mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    };

    this.hamburgerBtn.addEventListener('click', () => {
      const isOpen = this.mobileDrawer.classList.contains('active');
      if (isOpen) closeMenu();
      else openMenu();
    });

    this.mobileOverlay.addEventListener('click', closeMenu);

    // Close on link click
    const mobileLinks = this.mobileDrawer.querySelectorAll('a, button');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.mobileDrawer.classList.contains('active')) {
        closeMenu();
      }
    });
  },

  bindSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  },

  bindScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          this.navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else if (href && href.startsWith('#')) {
              link.classList.remove('active');
            }
          });
        }
      });
    }, {
      rootMargin: '-20% 0px -70% 0px'
    });

    sections.forEach(section => observer.observe(section));
  }
};

/**
 * --------------------------------------------------------------------------
 * 4. GALLERY & LIGHTBOX CONTROLLER
 * Filter tabs, responsive presentation & full-screen lightbox with keyboard controls
 * --------------------------------------------------------------------------
 */
const GalleryManager = {
  galleryItems: document.querySelectorAll('.gallery-item'),
  filterButtons: document.querySelectorAll('.filter-btn'),
  lightbox: document.getElementById('lightboxModal'),
  lightboxImg: document.getElementById('lightboxImg'),
  lightboxTitle: document.getElementById('lightboxTitle'),
  lightboxCategory: document.getElementById('lightboxCategory'),
  lightboxCloseBtn: document.getElementById('lightboxCloseBtn'),
  lightboxPrevBtn: document.getElementById('lightboxPrevBtn'),
  lightboxNextBtn: document.getElementById('lightboxNextBtn'),
  currentIndex: 0,
  activeItems: [],

  init() {
    if (!this.galleryItems.length) return;
    this.activeItems = Array.from(this.galleryItems);
    this.bindFilters();
    this.bindLightbox();
  },

  bindFilters() {
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        this.filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        this.galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'scale(1)';
            }, 10);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 250);
          }
        });

        // Update active items list for lightbox navigation
        this.activeItems = Array.from(this.galleryItems).filter(item => {
          const category = item.getAttribute('data-category');
          return filterValue === 'all' || category === filterValue;
        });
      });
    });
  },

  bindLightbox() {
    if (!this.lightbox) return;

    this.galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        const activeIdx = this.activeItems.indexOf(item);
        this.openLightbox(activeIdx >= 0 ? activeIdx : 0);
      });

      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const activeIdx = this.activeItems.indexOf(item);
          this.openLightbox(activeIdx >= 0 ? activeIdx : 0);
        }
      });
    });

    if (this.lightboxCloseBtn) {
      this.lightboxCloseBtn.addEventListener('click', () => this.closeLightbox());
    }

    if (this.lightboxPrevBtn) {
      this.lightboxPrevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.showPrev();
      });
    }

    if (this.lightboxNextBtn) {
      this.lightboxNextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.showNext();
      });
    }

    this.lightbox.addEventListener('click', (e) => {
      if (e.target === this.lightbox) {
        this.closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (!this.lightbox.classList.contains('active')) return;
      if (e.key === 'Escape') this.closeLightbox();
      if (e.key === 'ArrowLeft') this.showPrev();
      if (e.key === 'ArrowRight') this.showNext();
    });
  },

  openLightbox(index) {
    if (!this.activeItems.length) return;
    this.currentIndex = (index + this.activeItems.length) % this.activeItems.length;
    this.updateLightboxContent();
    this.lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  closeLightbox() {
    this.lightbox.classList.remove('active');
    document.body.style.overflow = '';
  },

  showPrev() {
    if (!this.activeItems.length) return;
    this.currentIndex = (this.currentIndex - 1 + this.activeItems.length) % this.activeItems.length;
    this.updateLightboxContent();
  },

  showNext() {
    if (!this.activeItems.length) return;
    this.currentIndex = (this.currentIndex + 1) % this.activeItems.length;
    this.updateLightboxContent();
  },

  updateLightboxContent() {
    const currentItem = this.activeItems[this.currentIndex];
    if (!currentItem) return;

    const img = currentItem.querySelector('img');
    const title = currentItem.getAttribute('data-title') || 'Darshan Salon Gallery';
    const category = currentItem.getAttribute('data-category-label') || 'Hair Styling';

    if (this.lightboxImg && img) {
      this.lightboxImg.src = img.src;
      this.lightboxImg.alt = img.alt || title;
    }
    if (this.lightboxTitle) this.lightboxTitle.textContent = title;
    if (this.lightboxCategory) this.lightboxCategory.textContent = category;
  }
};

/**
 * --------------------------------------------------------------------------
 * 5. APPOINTMENT & WHATSAPP BOOKING CONTROLLER
 * Real-time date/time validation and formatted WhatsApp booking dispatch
 * --------------------------------------------------------------------------
 */
const AppointmentManager = {
  modal: document.getElementById('appointmentModal'),
  closeBtn: document.getElementById('appointmentCloseBtn'),
  form: document.getElementById('appointmentForm'),
  errorBox: document.getElementById('appointmentError'),
  serviceSelect: document.getElementById('appointmentService'),
  dateInput: document.getElementById('appointmentDate'),
  timeInput: document.getElementById('appointmentTime'),
  nameInput: document.getElementById('appointmentName'),

  // Helper to get local date in YYYY-MM-DD
  getLocalDateString(d = new Date()) {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  },

  // Helper to format 12h time string for user-friendly error messages
  formatTime12Hour(hours, minutes) {
    const period = hours >= 12 ? 'PM' : 'AM';
    const h12 = hours % 12 === 0 ? 12 : hours % 12;
    const mStr = String(minutes).padStart(2, '0');
    return `${h12}:${mStr} ${period}`;
  },

  init() {
    this.bindTriggers();
    this.bindModalEvents();
    this.bindInputBehaviors();
    this.bindFormSubmit();
  },

  bindTriggers() {
    const bookButtons = document.querySelectorAll('[data-action="book-appointment"], .btn-book-trigger');
    bookButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const preselectedService = btn.getAttribute('data-service');
        this.open(preselectedService);
      });
    });
  },

  bindModalEvents() {
    if (!this.modal) return;

    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', () => this.close());
    }

    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.close();
      }
    });
  },

  bindInputBehaviors() {
    // Open native date/time pickers when clicked
    if (this.dateInput) {
      this.dateInput.addEventListener('click', () => {
        try {
          if (typeof this.dateInput.showPicker === 'function') {
            this.dateInput.showPicker();
          }
        } catch (err) {}
      });

      this.dateInput.addEventListener('input', () => {
        this.clearError();
        this.syncTimeConstraints();
      });

      this.dateInput.addEventListener('change', () => {
        this.clearError();
        this.syncTimeConstraints();
      });
    }

    if (this.timeInput) {
      this.timeInput.addEventListener('click', () => {
        try {
          if (typeof this.timeInput.showPicker === 'function') {
            this.timeInput.showPicker();
          }
        } catch (err) {}
      });

      this.timeInput.addEventListener('input', () => {
        this.clearError();
      });

      this.timeInput.addEventListener('change', () => {
        this.clearError();
      });
    }

    if (this.nameInput) {
      this.nameInput.addEventListener('input', () => {
        this.clearError();
      });
    }
  },

  syncTimeConstraints() {
    if (!this.dateInput || !this.timeInput) return;

    const now = new Date();
    const todayStr = this.getLocalDateString(now);
    const selectedDate = this.dateInput.value;

    if (selectedDate === todayStr) {
      // If date is today, minimum allowed time is the next minute from current local time
      const nextMinute = new Date(now.getTime() + 60000);
      const minHours = String(nextMinute.getHours()).padStart(2, '0');
      const minMinutes = String(nextMinute.getMinutes()).padStart(2, '0');
      this.timeInput.min = `${minHours}:${minMinutes}`;
    } else {
      // Future date: any time allowed
      this.timeInput.removeAttribute('min');
    }
  },

  open(preselectedService) {
    if (!this.modal) return;
    this.clearError();

    const now = new Date();
    const todayStr = this.getLocalDateString(now);

    // Set min date to today's local date
    if (this.dateInput) {
      this.dateInput.min = todayStr;
      if (!this.dateInput.value || this.dateInput.value < todayStr) {
        this.dateInput.value = todayStr;
      }
    }

    // Set service if preselected
    if (preselectedService && this.serviceSelect) {
      this.serviceSelect.value = preselectedService;
    }

    // Recalculate time constraints
    this.syncTimeConstraints();

    this.modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },

  close() {
    if (!this.modal) return;
    this.modal.classList.remove('active');
    this.clearError();
    document.body.style.overflow = '';
  },

  showError(message) {
    if (this.errorBox) {
      this.errorBox.textContent = message;
      this.errorBox.style.display = 'block';
    } else {
      alert(message);
    }
  },

  clearError() {
    if (this.errorBox) {
      this.errorBox.textContent = '';
      this.errorBox.style.display = 'none';
    }
  },

  bindFormSubmit() {
    if (!this.form) return;

    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.clearError();

      const now = new Date();
      const todayStr = this.getLocalDateString(now);
      const selectedDate = this.dateInput ? this.dateInput.value.trim() : '';
      const selectedTime = this.timeInput ? this.timeInput.value.trim() : '';
      const clientName = this.nameInput ? this.nameInput.value.trim() : '';
      const service = this.serviceSelect ? this.serviceSelect.value : 'General Grooming';

      // 1. Validate Date exists
      if (!selectedDate) {
        this.showError('Please select your preferred appointment date.');
        if (this.dateInput) this.dateInput.focus();
        return;
      }

      // 2. Validate Date is NOT in the past
      if (selectedDate < todayStr) {
        this.showError('Past dates are not allowed. Please select today or a future date.');
        if (this.dateInput) this.dateInput.focus();
        return;
      }

      // 3. Validate Time exists
      if (!selectedTime) {
        this.showError('Please select your preferred appointment time.');
        if (this.timeInput) this.timeInput.focus();
        return;
      }

      // 4. Real-time check: If date is TODAY, time MUST be strictly after current local time
      if (selectedDate === todayStr) {
        const timeParts = selectedTime.split(':').map(Number);
        if (timeParts.length < 2 || isNaN(timeParts[0]) || isNaN(timeParts[1])) {
          this.showError('Please enter a valid appointment time.');
          if (this.timeInput) this.timeInput.focus();
          return;
        }

        const [selHours, selMinutes] = timeParts;
        const selTotalMinutes = selHours * 60 + selMinutes;
        const currentTotalMinutes = now.getHours() * 60 + now.getMinutes();

        if (selTotalMinutes <= currentTotalMinutes) {
          const formattedCurrent = this.formatTime12Hour(now.getHours(), now.getMinutes());
          this.showError(`For today's booking, please select a time after the current time (${formattedCurrent}).`);
          if (this.timeInput) this.timeInput.focus();
          return;
        }
      }

      // 5. Validate Client Name
      if (!clientName) {
        this.showError('Please enter your name for the appointment.');
        if (this.nameInput) this.nameInput.focus();
        return;
      }

      // 6. Generate EXACT WhatsApp Message
      const message = 
`*APPOINTMENT BOOKING REQUEST*
-------------------------
*Salon:* ${SALON_CONFIG.salonName}
*Client Name:* ${clientName}
*Service:* ${service}
*Preferred Date:* ${selectedDate}
*Preferred Time:* ${selectedTime}
-------------------------

Please confirm the appointment slot.

If you don't receive a response from the salon on WhatsApp, please call
${SALON_CONFIG.phoneDisplay} to verify and confirm your appointment.

Thank you!`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${SALON_CONFIG.whatsappNumber}?text=${encodedMessage}`;

      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      this.close();
    });
  }
};

/**
 * --------------------------------------------------------------------------
 * 6. CONFIGURATION BINDER & AUTO-INJECTOR
 * Syncs the HTML templates with the central SALON_CONFIG object
 * --------------------------------------------------------------------------
 */
const ConfigBinder = {
  init() {
    this.bindElements();
  },

  bindElements() {
    // Phone numbers & tel links
    document.querySelectorAll('[data-config="phone-display"]').forEach(el => {
      el.textContent = SALON_CONFIG.phoneDisplay;
    });

    document.querySelectorAll('[data-config="phone-link"]').forEach(el => {
      el.setAttribute('href', SALON_CONFIG.phoneTel);
    });

    // WhatsApp links
    document.querySelectorAll('[data-config="whatsapp-link"]').forEach(el => {
      const defaultText = encodeURIComponent(SALON_CONFIG.whatsappDefaultMessage);
      el.setAttribute('href', `https://wa.me/${SALON_CONFIG.whatsappNumber}?text=${defaultText}`);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });

    // Address, Plus Code & Hours
    document.querySelectorAll('[data-config="address"]').forEach(el => {
      el.textContent = SALON_CONFIG.addressDisplay;
    });

    document.querySelectorAll('[data-config="plus-code"]').forEach(el => {
      el.textContent = `Plus Code: ${SALON_CONFIG.plusCode}`;
    });

    document.querySelectorAll('[data-config="hours"]').forEach(el => {
      el.textContent = SALON_CONFIG.openingHoursDisplay;
    });

    // Google Review CTA links
    document.querySelectorAll('[data-config="google-review-url"]').forEach(el => {
      el.setAttribute('href', SALON_CONFIG.googleReviewUrl);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });

    // Google Maps URL links
    document.querySelectorAll('[data-config="google-maps-url"]').forEach(el => {
      el.setAttribute('href', SALON_CONFIG.googleMapsUrl);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });
  }
};

/**
 * --------------------------------------------------------------------------
 * 7. SCROLL ANIMATION OBSERVER
 * Gracefully reveals elements as they enter viewport
 * --------------------------------------------------------------------------
 */
const ScrollObserver = {
  init() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    if (!revealElements.length || !('IntersectionObserver' in window)) {
      revealElements.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  }
};

/**
 * --------------------------------------------------------------------------
 * 8. APPLICATION INITIALIZATION
 * --------------------------------------------------------------------------
 */
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  ConfigBinder.init();
  NavManager.init();
  GalleryManager.init();
  AppointmentManager.init();
  ScrollObserver.init();
});
