/**
 * Every piece of business-supplied copy lives here. Do not invent facts
 * (homes-completed counts, team size, etc.) — only what the business has
 * confirmed goes in this file.
 */

export const site = {
  name: 'Mayura',
  tagline: 'Residential Interior & Renovation, Customised to You',
  region: 'Kerala',

  hero: {
    headline: 'Interiors built around how you actually live',
    sub: 'We design and build homes across Kerala and Tamil Nadu. Two services, one standard of finish, every detail decided with you.',
    cta: 'Book Free Consultation',
  },

  /** Second location. Separate WhatsApp Business number and business name. */
  chennai: {
    name: 'Mayura Interiors Chennai',
    cta: 'Chat with Chennai',
    phone: '+91 80892 34739',
    whatsapp: 'https://wa.me/918089234739',
  },

  services: {
    eyebrow: 'What We Do',
    headline: 'Two services, one standard of finish',
    items: [
      {
        title: 'Interior Design',
        body: 'Full-home or single-room interiors — layout, materials, modular furniture and lighting, designed around how you actually use the space.',
        image: '/projects/living-room-slat-divider.jpg',
      },
      {
        title: 'Renovation',
        body: 'Structural and cosmetic renovation of existing homes — kitchens, bathrooms, false ceilings, and full strip-outs, rebuilt to your brief.',
        image: '/projects/kitchen-dark-glossy.jpg',
      },
    ],
  },

  credentials: {
    eyebrow: 'Why Mayura',
    headline: 'Ten years in, with our own factory floor.',
    items: [
      {
        title: '10+ years',
        body: 'A decade of residential interior and renovation work, across Kerala.',
      },
      {
        title: 'Our own factory',
        body: 'Wardrobes, kitchens and joinery are manufactured in our own factory, so the finish and the timeline stay in our hands.',
      },
      {
        title: 'Unlimited Catalogue',
        body: 'Browse and choose freely — no restricted product lists, no upsell tiers on materials or finishes.',
      },
      {
        title: 'Quality Checks',
        body: 'Every stage — materials, fabrication, installation — is inspected before it is signed off.',
      },
      {
        title: '45-Day Move-In',
        body: 'A committed timeline from confirmed order to move-in, tracked from day one.',
      },
      {
        title: 'Happy Homes',
        body: 'Real families living in the spaces we have designed and built, across Kerala.',
      },
    ],
  },

  /**
   * PLACEHOLDER entries are not confirmed by the business — replace or
   * remove before launch. Everything else here is already stated elsewhere
   * in this file.
   */
  stats: [
    { value: 10, suffix: '+', label: 'Years of experience' },
    { value: 45, suffix: '', label: 'Days to move-in' },
    { value: 14, suffix: '', label: 'Kerala districts served' },
    // PLACEHOLDER: confirm the real number with the client.
    { value: 100, suffix: '+', label: 'Homes completed' },
  ],

  testimonials: {
    eyebrow: 'Client Words',
    headline: 'Homes that feel like theirs',
    // PLACEHOLDER: replace with real client quotes, names and locations.
    items: [
      {
        quote:
          'Placeholder testimonial. Replace this with a real quote from a Mayura client about the design, the finish or the move-in.',
        name: 'Client Name',
        place: 'City, Kerala',
      },
      {
        quote:
          'Placeholder testimonial. Replace this with a real quote from a Mayura client about the design, the finish or the move-in.',
        name: 'Client Name',
        place: 'City, Kerala',
      },
      {
        quote:
          'Placeholder testimonial. Replace this with a real quote from a Mayura client about the design, the finish or the move-in.',
        name: 'Client Name',
        place: 'Chennai',
      },
    ],
  },

  // PLACEHOLDER: confirm the real finish range with the client.
  finishes: {
    eyebrow: 'Finishes',
    headline: 'Choose from every finish, not a short list',
    items: ['Laminate', 'Veneer', 'Acrylic', 'PU Paint', 'Glass', 'Membrane', 'Fluted Panels', 'Marble-look'],
  },

  // PLACEHOLDER: replace with the real brands Mayura works with.
  brands: {
    eyebrow: 'Materials & Brands',
    headline: 'Built with brands you know',
    items: ['Brand One', 'Brand Two', 'Brand Three', 'Brand Four', 'Brand Five', 'Brand Six', 'Brand Seven', 'Brand Eight'],
  },

  // Prices confirmed by the client. PLACEHOLDER: tier names and inclusions.
  packages: {
    eyebrow: 'Packages',
    headline: 'A package for every home',
    items: [
      { name: 'Essential', price: '₹6.5 – 10 Lakh', points: ['Placeholder inclusion', 'Placeholder inclusion', 'Placeholder inclusion'] },
      { name: 'Signature', price: '₹10 – 20 Lakh', points: ['Placeholder inclusion', 'Placeholder inclusion', 'Placeholder inclusion'], featured: true },
      { name: 'Luxury', price: '₹20 Lakh & above', points: ['Placeholder inclusion', 'Placeholder inclusion', 'Placeholder inclusion'] },
    ],
  },

  // PLACEHOLDER: set a YouTube video id to enable the player.
  video: {
    eyebrow: 'See Our Work',
    headline: 'Walk through a Mayura home',
    youtubeId: '',
  },

  cta: {
    headline: 'Ready to start your renovation?',
    sub: 'Tell us about the space. We will walk you through what is possible, what it costs, and how long it takes — before you commit to anything.',
  },

  /**
   * Phone and WhatsApp are deliberately the same number — it takes both
   * calls and messages, and offering each separately lets people pick.
   */
  contacts: [
    { label: 'Phone', value: '+91 90378 87921', href: 'tel:+919037887921' },
    { label: 'WhatsApp', value: 'WhatsApp', href: 'https://wa.me/919037887921' },
    {
      label: 'Email',
      value: 'askatmayurainteriors@gmail.com',
      href: 'mailto:askatmayurainteriors@gmail.com',
    },
  ],

  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/mayura_interiors/?hl=en' },
    { label: 'Facebook', href: 'https://www.facebook.com/MayuraInterior' },
  ],

  serviceAreas: [
    'Thiruvananthapuram',
    'Kollam',
    'Pathanamthitta',
    'Alappuzha',
    'Kottayam',
    'Idukki',
    'Ernakulam',
    'Thrissur',
    'Palakkad',
    'Malappuram',
    'Kozhikode',
    'Wayanad',
    'Kannur',
    'Kasaragod',
  ],

  /** Placeholder list — confirm actual Tamil Nadu coverage with the business. */
  tamilNaduAreas: [
    'Coimbatore',
    'Madurai',
    'Tiruchirappalli',
    'Salem',
    'Tirunelveli',
    'Erode',
    'Vellore',
    'Thanjavur',
  ],
} as const;
