import type { CSSProperties } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

type Props = {
  items: string[];
  /** Scroll right instead of left. Used for the second, mirrored marquee. */
  reverse?: boolean;
  /** Seconds for one full pass. Longer = slower. */
  duration?: number;
  label: string;
};

/**
 * Seamless looping keyword strip.
 *
 * The loop works because the track holds exactly two identical copies of the
 * list and the `marquee` keyframe translates it by -50% — so the moment the
 * animation restarts, copy two is sitting precisely where copy one began and
 * there is no visible jump. Changing either half of that pair breaks the seam.
 *
 * Keyframe ported from ~/projects/Carva/tailwind.config.js.
 */
export function Marquee({ items, reverse = false, duration = 34, label }: Props) {
  const reduced = usePrefersReducedMotion();

  const row = (
    <ul className="flex shrink-0 items-center" aria-hidden={reduced ? undefined : true}>
      {items.map((item, i) => (
        <li key={`${item}-${i}`} className="flex items-center whitespace-nowrap">
          <span className="px-8 font-display text-xl text-cream/85 sm:text-2xl">{item}</span>
          <span className="text-brass/70" aria-hidden>
            &bull;
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <section
      aria-label={label}
      className="relative overflow-hidden border-y border-brass/15 bg-ink-deep py-6"
    >
      {/* Soft edges, so words fade out rather than being sliced by the viewport. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink-deep to-transparent sm:w-32"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-deep to-transparent sm:w-32"
      />

      {reduced ? (
        // Static, and scrollable by hand — no infinite motion.
        <div className="flex overflow-x-auto">{row}</div>
      ) : (
        <div
          className="flex w-max animate-marquee gpu"
          style={
            {
              '--marquee-duration': `${duration}s`,
              animationDirection: reverse ? 'reverse' : 'normal',
            } as CSSProperties
          }
        >
          {/* Copy one carries the accessible text; copy two is decorative. */}
          <ul className="flex shrink-0 items-center">
            {items.map((item, i) => (
              <li key={`${item}-${i}`} className="flex items-center whitespace-nowrap">
                <span className="px-8 font-display text-xl text-cream/85 sm:text-2xl">
                  {item}
                </span>
                <span className="text-brass/70" aria-hidden>
                  &bull;
                </span>
              </li>
            ))}
          </ul>
          {row}
        </div>
      )}
    </section>
  );
}
