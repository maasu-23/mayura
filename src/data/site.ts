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

  /**
   * Supplied by the business. Per the brief's "Do Not Invent" rule, nothing
   * here may be added without the store confirming it — no homes-completed
   * count, no team size, no factory square footage.
   */
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
        // TODO: confirm exactly what is made in-house — this currently claims
        // wardrobes, kitchens and joinery, inferred from the service list.
        body: 'Wardrobes, kitchens and joinery are manufactured in our own factory, so the finish and the timeline stay in our hands.',
      },
    ],
  },

  cta: {
    headline: 'Ready to start your renovation?',
    sub: 'Tell us about the space. We will walk you through what is possible, what it costs, and how long it takes — before you commit to anything.',
  },

  /**
   * Real details, supplied by the business. `href` values are wired straight
   * into the closing CTA.
   *
   * Phone and WhatsApp are deliberately the same number — it is a mobile, so
   * it takes both calls and messages, and offering each separately lets people
   * pick.
   *
   * TODO: no Instagram handle yet. Add an entry here once there is one; it was
   * removed rather than left pointing at a placeholder URL.
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
