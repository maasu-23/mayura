export type Project = {
  id: string;
  room: string;
  title: string;
  description: string;
  style: string;
  src: string;
  /**
   * False until a genuinely completed, photographed project replaces it.
   * These are real 3D design renders produced by Mayura's own team (not
   * AI-generated, not stock) — but they are pre-construction visualizations,
   * not photos of built work. Controls the "Design Render" badge.
   */
  completed: boolean;
};

export const projects: Project[] = [
  {
    id: 'living-room-tv-wall',
    src: '/projects/living-room-tv-wall.jpg',
    room: 'Living Room',
    title: 'Warm TV Wall',
    description:
      'A floating media unit with a slatted accent niche and a cove-lit ceiling that washes the room in warm light.',
    style: 'Contemporary',
    completed: false,
  },
  {
    id: 'kitchen-slate-blue',
    src: '/projects/kitchen-slate-blue.jpg',
    room: 'Modular Kitchen',
    title: 'Slate & Marble',
    description:
      'An L-shaped modular kitchen in slate-blue laminate, with a marble-look backsplash and full-height storage.',
    style: 'Modern',
    completed: false,
  },
  {
    id: 'bedroom-walnut-slat',
    src: '/projects/bedroom-walnut-slat.jpg',
    room: 'Master Bedroom',
    title: 'Walnut Slat Wall',
    description:
      'A fluted walnut headboard wall with twin pendant lights either side, framing a fabric-upholstered bed.',
    style: 'Modern',
    completed: false,
  },
  {
    id: 'dining-blue-velvet',
    src: '/projects/dining-blue-velvet.jpg',
    room: 'Dining',
    title: 'Ring Light Dining',
    description:
      'A ten-seater dining table in navy velvet, under a cluster of ring pendant lights against a slatted feature wall.',
    style: 'Contemporary',
    completed: false,
  },
  {
    id: 'wardrobe-pastel-glass',
    src: '/projects/wardrobe-pastel-glass.jpg',
    room: 'Wardrobe',
    title: 'Pastel & Glass',
    description:
      'A blush-and-mint glass-shutter wardrobe with sculpted pull handles, paired with a mirrored dressing nook.',
    style: 'Contemporary',
    completed: false,
  },
  {
    id: 'bedroom-twin-sunburst',
    src: '/projects/bedroom-twin-sunburst.jpg',
    room: 'Guest Bedroom',
    title: 'Twin Bed, Shared Wall',
    description:
      'Mirrored twin beds either side of a shared nightstand, with a sunburst wall installation as the room\'s focal point.',
    style: 'Contemporary',
    completed: false,
  },
];
