import { site } from './site';

/** Row 1 — what we do. Scrolls left. */
export const servicesMarquee = [
  'Residential Interior',
  'Renovation',
  'Modular Kitchens',
  'Wardrobes',
  'False Ceiling',
  'Painting',
  'Electrical & Plumbing',
];

/** Row 2 — where we work: every district in Kerala. Scrolls right (reversed). */
export const areasMarquee = [...site.serviceAreas];

/** Used on the portfolio cards as style tags. */
export const designStyles = [
  'Modern',
  'Minimalist',
  'Traditional',
  'Scandinavian',
  'Industrial',
];
