import { useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { INITIAL_VISIBLE, projects } from '../data/projects';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { ProjectCard } from './ProjectCard';

/** Staggered fade + slide + blur, for the cards revealed by "View More". */
const revealed: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(8px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, y: 16, filter: 'blur(6px)', transition: { duration: 0.28 } },
};

export function PortfolioGrid() {
  const reduced = usePrefersReducedMotion();
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Two decorative light shapes drifting at different rates. The brief's
  // suggested on-brand substitute for the reference's floating clouds.
  const softLightY = useTransform(scrollYProgress, [0, 1], ['-12%', '22%']);
  const softShadowY = useTransform(scrollYProgress, [0, 1], ['18%', '-16%']);

  const visible = expanded ? projects : projects.slice(0, INITIAL_VISIBLE);
  const hidden = projects.length - INITIAL_VISIBLE;

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative overflow-hidden px-6 py-24 sm:py-32"
    >
      {!reduced && (
        <>
          <motion.div
            aria-hidden
            style={{ y: softLightY }}
            className="pointer-events-none absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-peacock/20 blur-[120px] gpu"
          />
          <motion.div
            aria-hidden
            style={{ y: softShadowY }}
            className="pointer-events-none absolute -right-40 bottom-0 h-[32rem] w-[32rem] rounded-full bg-brass/10 blur-[140px] gpu"
          />
        </>
      )}

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.28em] text-peacock-glow">
            Selected Work
          </p>
          <h2 className="font-display text-3xl leading-tight tracking-tighter text-cream sm:text-5xl">
            Rooms we would be glad to build again
          </h2>
          <p className="mt-5 text-base leading-relaxed text-cream/65">
            Every project starts from the room you already have. These are the
            directions we work in — the specification behind each one is decided
            with you.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
          <AnimatePresence initial={false}>
            {visible.map((project, i) => {
              const isExtra = i >= INITIAL_VISIBLE;
              return (
                <motion.div
                  key={project.id}
                  custom={i - INITIAL_VISIBLE}
                  variants={revealed}
                  // The first four are always present; only the expanded ones animate in.
                  initial={isExtra ? 'hidden' : false}
                  animate="visible"
                  exit="exit"
                >
                  <ProjectCard project={project} index={i} breathing={!reduced} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {hidden > 0 && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="rounded-full border border-cream/20 px-7 py-3 text-xs uppercase tracking-[0.16em] text-cream/80 transition-colors hover:border-peacock-glow hover:text-peacock-glow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-peacock-glow"
            >
              {expanded ? 'Show less' : `View more (${hidden})`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
