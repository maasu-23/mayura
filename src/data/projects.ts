export type Project = {
  id: string;
  room: string;
  title: string;
  description: string;
  style: string;
  src: string;
};

export const projects: Project[] = [
  {
    id: 'living-room-slat-divider',
    src: '/projects/living-room-slat-divider.jpg',
    room: 'Living Room',
    title: 'Slat Divider Living',
    description:
      'A fluted-wood TV wall paired with an open lattice room divider, framing the passage through to the next room.',
    style: 'Contemporary',
  },
  {
    id: 'kitchen-white-black',
    src: '/projects/kitchen-white-black.jpg',
    room: 'Modular Kitchen',
    title: 'Black & White U-Kitchen',
    description:
      'A full U-shaped modular kitchen in glossy black uppers and white lowers, with a marble-look backsplash and built-in fridge bay.',
    style: 'Modern',
  },
  {
    id: 'kitchen-dark-glossy',
    src: '/projects/kitchen-dark-glossy.jpg',
    room: 'Modular Kitchen',
    title: 'Dark Glass Kitchen',
    description:
      'High-gloss dark cabinetry with a built-in oven and microwave column, finished with a warm wood cornice.',
    style: 'Modern',
  },
  {
    id: 'bedroom-luxury-chandelier',
    src: '/projects/bedroom-luxury-chandelier.jpg',
    room: 'Master Bedroom',
    title: 'Chandelier Suite',
    description:
      'A navy upholstered headboard under a sculptural crystal chandelier, framed by walnut wall panelling.',
    style: 'Luxury',
  },
  {
    id: 'bedroom-moody-marble',
    src: '/projects/bedroom-moody-marble.jpg',
    room: 'Master Bedroom',
    title: 'Moody Marble Suite',
    description:
      'A channel-tufted leather headboard set into walnut fluting, against a textured charcoal stone wall.',
    style: 'Luxury',
  },
  {
    id: 'dining-hexagon-wall',
    src: '/projects/dining-hexagon-wall.jpg',
    room: 'Dining',
    title: 'Hexagon Feature Wall',
    description:
      'A ten-seater dining table under layered ring pendants, with a hexagon-tiled feature wall and a marble display cabinet.',
    style: 'Contemporary',
  },
  {
    id: 'wardrobe-study-nook',
    src: '/projects/wardrobe-study-nook.jpg',
    room: 'Wardrobe',
    title: 'Wardrobe & Study Nook',
    description:
      'Floor-to-ceiling wardrobes in a two-tone finish, with a built-in study nook tucked beside the window.',
    style: 'Contemporary',
  },
  {
    id: 'pooja-unit',
    src: '/projects/pooja-unit.jpg',
    room: 'Pooja Unit',
    title: 'Backlit Pooja Alcove',
    description:
      'A recessed pooja alcove with jaali-pattern side panels and a backlit mirror strip, finished in warm wood tones.',
    style: 'Traditional',
  },
  {
    id: 'crockery-display',
    src: '/projects/crockery-display.jpg',
    room: 'Crockery Unit',
    title: 'Hexagon Crockery Wall',
    description:
      'An open crockery display against a wood-slat wall, paired with a hexagon-tiled mirror feature and ring pendant lighting.',
    style: 'Contemporary',
  },
  {
    id: 'utility-nook',
    src: '/projects/utility-nook.jpg',
    room: 'Utility',
    title: 'Compact Utility Nook',
    description:
      'A space-efficient wash area with overhead cabinetry and a herringbone-tiled floor, built into a narrow footprint.',
    style: 'Minimalist',
  },
];
