/**
 * Every piece of business-supplied copy lives here.
 *
 * Anything still marked TODO is a placeholder and must be replaced before the
 * site goes live. `grep -rn "TODO" src/` is the complete checklist.
 */

export const site = {
  name: 'Mayura',
  tagline: 'Residential Interior & Renovation, Customised to You',
  /** The business covers the whole state, not a single city. */
  region: 'Kerala',

  hero: {
    // Word-by-word reveal splits on whitespace, so keep this as one string.
    headline: 'Mayura — Residential Interior & Renovation, Customised to You',
    sub: 'We design and build homes across Kerala. Two services, one standard of finish, every detail decided with you.',
    cta: 'Book Free Consultation',
  },

  cta: {
    headline: 'Ready to start your renovation?',
    sub: 'Tell us about the space. We will walk you through what is possible, what it costs, and how long it takes — before you commit to anything.',
  },

  // TODO: replace all four with the store's real contact details.
  // `href` values are wired straight into the closing CTA.
  contacts: [
    { label: 'Phone', value: '+91 00000 00000', href: 'tel:+910000000000' },
    { label: 'WhatsApp', value: 'WhatsApp', href: 'https://wa.me/910000000000' },
    { label: 'Instagram', value: '@mayura', href: 'https://instagram.com/' },
    { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
  ],

  // All fourteen districts — the business covers the whole state.
  // TODO: trim this if any district is not actually served.
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
