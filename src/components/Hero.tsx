import { motion } from 'framer-motion';
import { site } from '../data/site';
import { useLerpedPointer } from '../hooks/useLerpedPointer';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { FillButton } from './FillButton';
import { PlaceholderImage } from './PlaceholderImage';
import { WordReveal } from './WordReveal';

/**
 * Two stacked full-bleed layers of the same room. The lower layer is the
 * "before"; the upper "after" layer is clipped to a soft circle that follows
 * the pointer — so moving across the hero reveals the transformation itself.
 *
 * TODO: replace both placeholders with a real before/after pair, shot from the
 * same position with the same crop. If no completed project is available, an
 * AI render is acceptable — but it must keep a visible "Concept render" tag.
 */
export function Hero() {
  const reduced = usePrefersReducedMotion();
  const ref = useLerpedPointer<HTMLElement>({ enabled: !reduced });

  return (
    <section
      ref={ref}
      id="hero"
      className="hero-stage relative flex min-h-[100svh] w-full items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <PlaceholderImage
          scene="before"
          tag="Before — illustration"
          alt="A room before renovation"
        />
      </div>

      <div className="hero-reveal absolute inset-0 gpu">
        <PlaceholderImage
          scene="after"
          tag="After — illustration"
          alt="The same room after renovation"
        />
      </div>

      {/* Lens ring, sitting exactly on the mask edge. */}
      {!reduced && (
        <div
          aria-hidden
          className="pointer-events-none absolute left-[var(--mx)] top-[var(--my)] h-[calc(var(--r)*2)] w-[calc(var(--r)*2)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cream/15 gpu"
        />
      )}

      {/* Scrim — keeps the headline legible over either layer. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-32 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 text-xs uppercase tracking-[0.28em] text-peacock-glow"
        >
          Interior &amp; Renovation — {site.city}
        </motion.p>

        <WordReveal
          text={site.hero.headline}
          className="max-w-4xl font-display text-4xl font-semibold leading-[1.06] tracking-tighter text-cream sm:text-6xl lg:text-7xl"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-xl text-base leading-relaxed text-cream/75"
        >
          {site.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <FillButton href="#contact">{site.hero.cta}</FillButton>

          {!reduced && (
            <span className="text-xs uppercase tracking-[0.18em] text-cream/45">
              {/* Desktop hovers, touch drags — same gesture, different words. */}
              <span className="hidden sm:inline">Move to reveal the after</span>
              <span className="sm:hidden">Drag to reveal the after</span>
            </span>
          )}
        </motion.div>
      </div>
    </section>
  );
}
