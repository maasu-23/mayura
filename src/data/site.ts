/**
 * Every piece of business-supplied copy lives here.
 *
 * Anything still marked TODO is a placeholder and must be replaced before the
 * site goes live. `grep -rn "TODO" src/` is the complete checklist.
 */

export const site = {
  name: 'Mayura',
  tagline: 'Residential Interior & Renovation, Customised to You',
  city: 'Chennai',

  hero: {
    // Word-by-word reveal splits on whitespace, so keep this as one string.
    headline: 'Mayura — Residential Interior & Renovation, Customised to You',
    sub: 'We design and build homes in Chennai. Two services, one standard of finish, every detail decided with you.',
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

  // TODO: confirm the actual service areas within Chennai.
  serviceAreas: [
    'Adyar',
    'Anna Nagar',
    'Velachery',
    'T. Nagar',
    'OMR',
    'Porur',
    'Nungambakkam',
    'Thoraipakkam',
  ],
} as const;
