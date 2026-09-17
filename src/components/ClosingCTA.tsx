import { useRef } from 'react';
import type { PointerEvent as ReactPointerEvent } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { site } from '../data/site';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { PlaceholderImage } from './PlaceholderImage';

export function ClosingCTA() {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // The background layer is taller than the section, so it can drift without
  // ever exposing an edge.
  const bgY = useTransform(scrollYProgress, [0, 1], ['-14%', '14%']);

  /**
   * Spotlight glow. Written straight onto the node rather than through state —
   * this fires on every pointer move and must not re-render the section.
   */
  const onCardMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card || reduced) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--spot-x', `${event.clientX - r.left}px`);
    card.style.setProperty('--spot-y', `${event.clientY - r.top}px`);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6 py-24"
    >
      <motion.div
        aria-hidden
        style={reduced ? undefined : { y: bgY }}
        className="absolute inset-x-0 -top-[14%] h-[128%] gpu"
      >
        {/* TODO: replace with one wide, warm, finished-interior photograph. */}
        <PlaceholderImage scene="after" src="/cta/interior-wide.webp" tag={null} alt="" />
      </motion.div>

      {/* Fades the image into the section above, so there is no hard seam. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-ink via-ink/45 to-ink/80"
      />

      <div
        ref={cardRef}
        onPointerMove={onCardMove}
        className="group relative w-full max-w-2xl overflow-hidden rounded-3xl border border-cream/15 bg-cream/[0.06] p-8 text-center shadow-[inset_0_1px_0_0_rgba(255,255,255,0.14)] backdrop-blur-xl sm:p-12"
      >
        {/* Spotlight, tracking the pointer across the card. */}
        {!reduced && (
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(420px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(74,222,148,0.16), transparent 65%)',
            }}
          />
        )}

        <div className="relative">
          <p className="mb-5 text-xs uppercase tracking-[0.28em] text-peacock-glow">
            {site.name} — {site.region}
          </p>

          <h2 className="font-display text-3xl leading-tight tracking-tighter text-cream sm:text-5xl">
            {site.cta.headline}
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-cream/70">
            {site.cta.sub}
          </p>

          {/*
            Bullet-separated row. The separators are their own elements and are
            hidden below `sm` — once the row wraps, a wrapped line would
            otherwise start with a stray leading bullet. From `sm` up the row
            fits on one line, so the bullets read correctly.
          */}
          <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
            {site.contacts.map((contact, i) => (
              <li key={contact.label} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden className="hidden text-brass/60 sm:inline">
                    &bull;
                  </span>
                )}
                <a
                  href={contact.href}
                  aria-label={`${contact.label}: ${contact.value}`}
                  className="text-sm text-cream/85 underline-offset-4 transition-colors hover:text-peacock-glow hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-peacock-glow"
                >
                  {contact.value}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
