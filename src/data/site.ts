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
    sub: 'We design and build homes across Kerala. Two services, one standard of finish, every detail decided with you.',
    cta: 'Book Free Consultation',
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
    ],
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
} as const;
