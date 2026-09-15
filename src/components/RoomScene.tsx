import { useId } from 'react';

export type RoomVariant =
  | 'living'
  | 'kitchen'
  | 'bedroom'
  | 'bath'
  | 'office'
  | 'dining'
  | 'before'
  | 'after';

type Palette = {
  ceil: string;
  back: string;
  wallL: string;
  wallR: string;
  floor: string;
  floorFar: string;
  /** Window glow and the light shaft it throws. */
  light: string;
  /** Furniture tones, dark to light. */
  a: string;
  b: string;
  c: string;
  /** Strength of the light shaft, 0–1. */
  glow: number;
};

const PALETTES: Record<RoomVariant, Palette> = {
  living: { ceil: '#1b1512', back: '#3a2c24', wallL: '#2e231c', wallR: '#241b16', floor: '#4a3427', floorFar: '#3a2a20', light: '#ffd9a0', a: '#5c4231', b: '#8a6a4a', c: '#c89b5a', glow: 0.5 },
  kitchen: { ceil: '#141a17', back: '#2b3a33', wallL: '#233029', wallR: '#1b2620', floor: '#33423a', floorFar: '#28342e', light: '#dff3e4', a: '#3f5a4c', b: '#5a7a68', c: '#a8c0b0', glow: 0.42 },
  bedroom: { ceil: '#1a1a1c', back: '#3c3c40', wallL: '#303034', wallR: '#26262a', floor: '#4a4038', floorFar: '#3a3230', light: '#f2ead8', a: '#52525a', b: '#7a7a82', c: '#cfc8bb', glow: 0.46 },
  bath: { ceil: '#16151d', back: '#332f44', wallL: '#292638', wallR: '#201e2c', floor: '#3a3550', floorFar: '#2c2840', light: '#e2dcff', a: '#454063', b: '#6a6390', c: '#c89b5a', glow: 0.44 },
  office: { ceil: '#181210', back: '#3a2620', wallL: '#2e1e19', wallR: '#241713', floor: '#3a2c26', floorFar: '#2c211d', light: '#ffcf9a', a: '#26262b', b: '#44444a', c: '#d07a44', glow: 0.48 },
  dining: { ceil: '#0f1a1b', back: '#1f3a3c', wallL: '#1a3032', wallR: '#142628', floor: '#2a4042', floorFar: '#203233', light: '#bff3ec', a: '#2f5254', b: '#47726f', c: '#c89b5a', glow: 0.46 },
  // The hero pair shares this geometry exactly, so the mask reveal reads as one
  // room being transformed rather than two different photographs.
  before: { ceil: '#1c1c1e', back: '#3a3a3e', wallL: '#303034', wallR: '#26262a', floor: '#38383c', floorFar: '#2c2c30', light: '#9aa0ac', a: '#3a3a3e', b: '#4a4a52', c: '#5a5a64', glow: 0.14 },
  after: { ceil: '#1d1611', back: '#4d3826', wallL: '#3a2a1c', wallR: '#2c2016', floor: '#5d412b', floorFar: '#452f20', light: '#ffd39a', a: '#6d4c30', b: '#a07a4e', c: '#e8bc78', glow: 0.72 },
};

/** One-point perspective box. Every variant is furnished inside this shell. */
const BACK = { x0: 232, x1: 568, y0: 168, y1: 392 };

type Props = { variant: RoomVariant; className?: string };

/**
 * A stylised interior, drawn rather than photographed.
 *
 * Stands in for real photography while staying unmistakably an illustration —
 * it can never be misread as a finished project, which is exactly what the
 * brief requires of anything that is not real completed work.
 */
export function RoomScene({ variant, className = '' }: Props) {
  // Gradient ids must be unique per instance or several scenes on one page
  // collide and all render with the first one's fills.
  const uid = useId().replace(/:/g, '');
  const p = PALETTES[variant];
  const g = (n: string) => `${n}-${uid}`;

  return (
    <svg
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
      className={`h-full w-full ${className}`}
      aria-hidden
    >
      <defs>
        <linearGradient id={g('floor')} x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor={p.floor} />
          <stop offset="100%" stopColor={p.floorFar} />
        </linearGradient>
        <linearGradient id={g('back')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.back} stopOpacity="0.75" />
          <stop offset="100%" stopColor={p.back} />
        </linearGradient>
        <radialGradient id={g('glow')} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor={p.light} stopOpacity={p.glow} />
          <stop offset="100%" stopColor={p.light} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={g('shaft')} x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0%" stopColor={p.light} stopOpacity={p.glow * 0.5} />
          <stop offset="100%" stopColor={p.light} stopOpacity="0" />
        </linearGradient>
        <linearGradient id={g('vig')} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#000" stopOpacity="0.30" />
          <stop offset="45%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.34" />
        </linearGradient>
      </defs>

      {/* Shell */}
      <polygon points="0,0 800,0 568,168 232,168" fill={p.ceil} />
      <polygon points="0,0 232,168 232,392 0,600" fill={p.wallL} />
      <polygon points="800,0 568,168 568,392 800,600" fill={p.wallR} />
      <polygon points="0,600 800,600 568,392 232,392" fill={`url(#${g('floor')})`} />
      <rect x={BACK.x0} y={BACK.y0} width={BACK.x1 - BACK.x0} height={BACK.y1 - BACK.y0} fill={`url(#${g('back')})`} />

      {/* Window on the back wall, plus the shaft it throws across the floor. */}
      <g>
        <rect x="430" y="196" width="112" height="126" rx="2" fill={p.light} opacity={0.10 + p.glow * 0.5} />
        <rect x="430" y="196" width="112" height="126" rx="2" fill="none" stroke={p.c} strokeOpacity="0.5" strokeWidth="2.5" />
        <line x1="486" y1="196" x2="486" y2="322" stroke={p.c} strokeOpacity="0.4" strokeWidth="2" />
        <line x1="430" y1="259" x2="542" y2="259" stroke={p.c} strokeOpacity="0.4" strokeWidth="2" />
        <polygon points="430,322 542,322 660,600 300,600" fill={`url(#${g('shaft')})`} />
        <ellipse cx="486" cy="250" rx="200" ry="150" fill={`url(#${g('glow')})`} />
      </g>

      <Furniture variant={variant} p={p} />

      {/* Skirting, to seat the walls on the floor. */}
      <polyline points="232,392 568,392" stroke="#000" strokeOpacity="0.28" strokeWidth="3" fill="none" />
      <rect x="0" y="0" width="800" height="600" fill={`url(#${g('vig')})`} />
    </svg>
  );
}

function Furniture({ variant, p }: { variant: RoomVariant; p: Palette }) {
  const shadow = (x: number, y: number, rx: number) => (
    <ellipse cx={x} cy={y} rx={rx} ry={rx * 0.16} fill="#000" opacity="0.26" />
  );

  switch (variant) {
    case 'living':
    case 'after':
      return (
        <g>
          {/* Rug */}
          <polygon points="250,560 560,560 505,470 305,470" fill={p.a} opacity="0.55" />
          {/* Sofa */}
          {shadow(400, 520, 150)}
          <rect x="262" y="424" width="276" height="70" rx="10" fill={p.b} />
          <rect x="262" y="404" width="276" height="34" rx="12" fill={p.a} />
          <rect x="250" y="418" width="30" height="72" rx="10" fill={p.a} />
          <rect x="520" y="418" width="30" height="72" rx="10" fill={p.a} />
          {/* Cushions */}
          <rect x="300" y="412" width="54" height="30" rx="7" fill={p.c} opacity="0.75" />
          <rect x="446" y="412" width="54" height="30" rx="7" fill={p.c} opacity="0.55" />
          {/* Coffee table */}
          {shadow(400, 556, 78)}
          <rect x="332" y="512" width="136" height="12" rx="4" fill={p.c} opacity="0.8" />
          <rect x="346" y="524" width="8" height="28" fill={p.a} />
          <rect x="446" y="524" width="8" height="28" fill={p.a} />
          {/* Floor lamp */}
          <rect x="606" y="330" width="6" height="180" fill={p.a} />
          <polygon points="586,300 632,300 624,334 594,334" fill={p.c} opacity="0.85" />
          {/* Wall art */}
          <rect x="268" y="214" width="82" height="104" rx="2" fill={p.c} opacity="0.28" />
          <rect x="268" y="214" width="82" height="104" rx="2" fill="none" stroke={p.c} strokeOpacity="0.5" strokeWidth="2" />
        </g>
      );

    case 'kitchen':
      return (
        <g>
          {/* Counter run */}
          {shadow(400, 500, 180)}
          <rect x="236" y="400" width="330" height="14" rx="3" fill={p.c} opacity="0.85" />
          <rect x="244" y="414" width="314" height="86" fill={p.a} />
          <line x1="348" y1="414" x2="348" y2="500" stroke="#000" strokeOpacity="0.3" strokeWidth="2" />
          <line x1="452" y1="414" x2="452" y2="500" stroke="#000" strokeOpacity="0.3" strokeWidth="2" />
          {/* Handles */}
          <rect x="300" y="430" width="34" height="4" rx="2" fill={p.c} opacity="0.7" />
          <rect x="404" y="430" width="34" height="4" rx="2" fill={p.c} opacity="0.7" />
          <rect x="508" y="430" width="34" height="4" rx="2" fill={p.c} opacity="0.7" />
          {/* Upper cabinets */}
          <rect x="248" y="182" width="150" height="74" rx="3" fill={p.b} opacity="0.85" />
          <line x1="323" y1="182" x2="323" y2="256" stroke="#000" strokeOpacity="0.3" strokeWidth="2" />
          {/* Pendants */}
          <line x1="330" y1="168" x2="330" y2="286" stroke={p.c} strokeOpacity="0.6" strokeWidth="2" />
          <path d="M316 286 h28 l-6 18 h-16 z" fill={p.c} opacity="0.9" />
          <line x1="470" y1="168" x2="470" y2="300" stroke={p.c} strokeOpacity="0.6" strokeWidth="2" />
          <path d="M456 300 h28 l-6 18 h-16 z" fill={p.c} opacity="0.9" />
        </g>
      );

    case 'bedroom':
      return (
        <g>
          {/* Headboard */}
          <rect x="300" y="286" width="200" height="106" rx="6" fill={p.b} opacity="0.9" />
          {/* Bed */}
          {shadow(400, 546, 170)}
          <polygon points="292,392 508,392 552,536 248,536" fill={p.a} />
          <polygon points="292,392 508,392 524,446 276,446" fill={p.c} opacity="0.55" />
          {/* Pillows */}
          <rect x="318" y="372" width="70" height="30" rx="10" fill={p.c} opacity="0.85" />
          <rect x="412" y="372" width="70" height="30" rx="10" fill={p.c} opacity="0.7" />
          {/* Side tables */}
          <rect x="246" y="396" width="44" height="12" rx="3" fill={p.c} opacity="0.7" />
          <rect x="252" y="408" width="32" height="44" fill={p.a} />
          <rect x="510" y="396" width="44" height="12" rx="3" fill={p.c} opacity="0.7" />
          <rect x="516" y="408" width="32" height="44" fill={p.a} />
          {/* Wardrobe wall, flush */}
          <rect x="586" y="150" width="120" height="330" fill={p.b} opacity="0.5" />
          <line x1="646" y1="150" x2="646" y2="480" stroke="#000" strokeOpacity="0.25" strokeWidth="2" />
        </g>
      );

    case 'bath':
      return (
        <g>
          {/* Vanity */}
          {shadow(360, 486, 100)}
          <rect x="268" y="392" width="186" height="12" rx="3" fill={p.c} opacity="0.8" />
          <rect x="276" y="404" width="170" height="78" fill={p.a} />
          <rect x="316" y="420" width="90" height="4" rx="2" fill={p.c} opacity="0.7" />
          {/* Mirror */}
          <rect x="300" y="228" width="120" height="146" rx="60" fill={p.light} opacity="0.14" />
          <rect x="300" y="228" width="120" height="146" rx="60" fill="none" stroke={p.c} strokeOpacity="0.65" strokeWidth="2.5" />
          {/* Tap */}
          <path d="M356 392 v-26 h16" fill="none" stroke={p.c} strokeWidth="4" strokeOpacity="0.9" />
          {/* Walk-in shower screen */}
          <rect x="500" y="212" width="112" height="268" fill={p.light} opacity="0.10" />
          <rect x="500" y="212" width="112" height="268" fill="none" stroke={p.c} strokeOpacity="0.55" strokeWidth="3" />
          <line x1="556" y1="212" x2="556" y2="480" stroke={p.c} strokeOpacity="0.28" strokeWidth="2" />
          {/* Tiled floor hint */}
          <g stroke="#fff" strokeOpacity="0.06" strokeWidth="2">
            <line x1="300" y1="600" x2="390" y2="400" />
            <line x1="500" y1="600" x2="440" y2="400" />
            <line x1="700" y1="600" x2="520" y2="400" />
          </g>
        </g>
      );

    case 'office':
      return (
        <g>
          {/* Shelving grid */}
          <rect x="250" y="192" width="150" height="150" fill="none" stroke={p.b} strokeWidth="4" />
          <line x1="250" y1="242" x2="400" y2="242" stroke={p.b} strokeWidth="4" />
          <line x1="250" y1="292" x2="400" y2="292" stroke={p.b} strokeWidth="4" />
          <line x1="325" y1="192" x2="325" y2="342" stroke={p.b} strokeWidth="4" />
          <rect x="258" y="206" width="30" height="32" fill={p.c} opacity="0.6" />
          <rect x="336" y="256" width="38" height="32" fill={p.c} opacity="0.35" />
          {/* Desk */}
          {shadow(430, 520, 150)}
          <rect x="288" y="416" width="290" height="14" rx="3" fill={p.c} opacity="0.65" />
          <rect x="300" y="430" width="10" height="86" fill={p.a} />
          <rect x="556" y="430" width="10" height="86" fill={p.a} />
          {/* Monitor */}
          <rect x="398" y="336" width="112" height="70" rx="4" fill={p.a} />
          <rect x="404" y="342" width="100" height="58" rx="2" fill={p.light} opacity="0.16" />
          <rect x="448" y="406" width="12" height="10" fill={p.a} />
          {/* Chair */}
          <rect x="376" y="452" width="76" height="12" rx="5" fill={p.b} />
          <rect x="384" y="392" width="60" height="62" rx="8" fill={p.b} opacity="0.85" />
          <rect x="410" y="464" width="8" height="46" fill={p.a} />
        </g>
      );

    case 'dining':
      return (
        <g>
          {/* Cove-lit false ceiling — the point of this project. */}
          <polygon points="150,0 650,0 540,112 260,112" fill={p.b} opacity="0.35" />
          <polygon points="260,112 540,112 528,124 272,124" fill={p.light} opacity="0.5" />
          {/* Pendant, centred over the table */}
          <line x1="400" y1="112" x2="400" y2="268" stroke={p.c} strokeOpacity="0.6" strokeWidth="2" />
          <path d="M366 268 h68 l-14 26 h-40 z" fill={p.c} opacity="0.9" />
          <ellipse cx="400" cy="300" rx="70" ry="16" fill={p.light} opacity="0.22" />
          {/* Table */}
          {shadow(400, 532, 170)}
          <polygon points="286,404 514,404 560,444 240,444" fill={p.c} opacity="0.7" />
          <rect x="300" y="444" width="10" height="76" fill={p.a} />
          <rect x="490" y="444" width="10" height="76" fill={p.a} />
          {/* Chairs */}
          <rect x="268" y="356" width="46" height="52" rx="6" fill={p.b} opacity="0.8" />
          <rect x="360" y="352" width="46" height="56" rx="6" fill={p.b} opacity="0.9" />
          <rect x="452" y="356" width="46" height="52" rx="6" fill={p.b} opacity="0.8" />
          <rect x="330" y="446" width="50" height="58" rx="6" fill={p.a} />
          <rect x="424" y="446" width="50" height="58" rx="6" fill={p.a} />
        </g>
      );

    case 'before':
      // Same shell, stripped: bare bulb, unfinished wall, leftover clutter.
      return (
        <g>
          {/* Bare bulb on a flex */}
          <line x1="400" y1="100" x2="400" y2="228" stroke={p.c} strokeOpacity="0.55" strokeWidth="2" />
          <circle cx="400" cy="236" r="11" fill={p.light} opacity="0.4" />
          {/* Patch of stripped plaster */}
          <path d="M270 210 l58 -10 l22 46 l-16 52 l-52 8 z" fill="#000" opacity="0.16" />
          {/* Skirting gap / lifted board */}
          <rect x="300" y="380" width="120" height="12" fill="#000" opacity="0.18" />
          {/* Step ladder */}
          <g stroke={p.c} strokeOpacity="0.5" strokeWidth="4" fill="none">
            <path d="M560 300 l-26 160" />
            <path d="M590 300 l26 160" />
            <path d="M552 348 h44" />
            <path d="M544 396 h60" />
          </g>
          {/* Boxes */}
          <rect x="280" y="470" width="86" height="64" fill={p.b} opacity="0.5" />
          <rect x="280" y="470" width="86" height="12" fill="#000" opacity="0.18" />
          <rect x="372" y="496" width="62" height="42" fill={p.b} opacity="0.38" />
          {/* Dust sheet */}
          <polygon points="430,600 700,600 620,506 476,516" fill={p.c} opacity="0.12" />
        </g>
      );
  }
}
