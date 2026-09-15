import type { RoomVariant } from '../components/RoomScene';

export type Project = {
  id: string;
  /** Room type — shown as the card's eyebrow. */
  room: string;
  title: string;
  description: string;
  style: string;
  /**
   * Real photograph. Drop files into `public/projects/` and set this to e.g.
   * `/projects/adyar-living.jpg` — the card swaps from placeholder to photo with
   * no component change.
   */
  src?: string;
  /** Which room illustration to draw while `src` is undefined. */
  scene: RoomVariant;
  /**
   * False until a genuinely completed project is photographed. Controls the
   * "Sample Style" badge — per the brief, we do not imply these are built work.
   */
  completed: boolean;
};

/**
 * TODO: replace wholesale with real projects as photography is delivered.
 *
 * This array is the ONLY thing that changes when real content arrives. The grid,
 * the cards, and every animation are built against this shape and need no edits.
 */
export const projects: Project[] = [
  {
    id: 'living-warm-minimal',
    room: 'Living Room',
    title: 'Warm Minimal',
    description:
      'Open living with a low teak console, layered lighting, and a restrained palette that keeps the room feeling larger than it is.',
    style: 'Minimalist',
    scene: 'living',
    completed: false,
  },
  {
    id: 'kitchen-modular-galley',
    room: 'Modular Kitchen',
    title: 'Galley, Rebuilt',
    description:
      'A narrow kitchen reworked into a full galley run — tall pull-outs, under-cabinet lighting, and a quartz counter that wipes clean.',
    style: 'Modern',
    scene: 'kitchen',
    completed: false,
  },
  {
    id: 'bedroom-quiet-scandi',
    room: 'Master Bedroom',
    title: 'Quiet Scandinavian',
    description:
      'Pale oak, soft cotton, and a full-height wardrobe wall that disappears into the plaster. Storage without the bulk.',
    style: 'Scandinavian',
    scene: 'bedroom',
    completed: false,
  },
  {
    id: 'bath-renovation-stone',
    room: 'Bathroom',
    title: 'Stone & Brass',
    description:
      'A complete strip-out and re-tile. Concealed cisterns, a walk-in shower, and brass fittings that will patina rather than pit.',
    style: 'Traditional',
    scene: 'bath',
    completed: false,
  },
  {
    id: 'study-industrial-nook',
    room: 'Home Office',
    title: 'The Work Nook',
    description:
      'A spare-room conversion — blackened steel shelving, an acoustic panel wall, and cable management built into the desk.',
    style: 'Industrial',
    scene: 'office',
    completed: false,
  },
  {
    id: 'dining-false-ceiling',
    room: 'Dining',
    title: 'Light From Above',
    description:
      'A recessed false ceiling with a cove wash, sized so the pendant sits exactly over the table rather than near it.',
    style: 'Modern',
    scene: 'dining',
    completed: false,
  },
];

/** How many cards show before "View More" is pressed. */
export const INITIAL_VISIBLE = 4;
