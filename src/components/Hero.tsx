import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { site } from '../data/site';
import { FillButton } from './FillButton';
import { GradientBackdrop } from './GradientBackdrop';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  // Image is oversized (130% height, see below) so this range never reveals
  // an edge — subtle drift, not a full parallax rig.
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src="/hero/bedroom-luxury-chandelier.jpg"
          alt=""
          style={{ y }}
          className="absolute left-0 top-[-15%] h-[130%] w-full object-cover"
        />
      </div>
      <div className="absolute inset-0">
        <GradientBackdrop />
      </div>
      {/* Text sits in the left ~55%, so the scrim needs to be solid there and
          drop off fast — a slow 3-stop fade (Tailwind's from/via/to) stays
          >30% opaque past the text and washes out the photo on the right. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, #F8F8F6 0%, #F8F8F6 42%, rgba(248,248,246,0.55) 52%, rgba(248,248,246,0) 68%)',
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-paper" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-6xl px-6"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-peacock-dim">
          {site.region} · Residential Interiors
        </p>
        <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight text-ink md:text-7xl">
          {site.hero.headline}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-ink-dim">{site.hero.sub}</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <FillButton href={site.contacts[1].href}>{site.hero.cta}</FillButton>
        </div>
      </motion.div>
    </section>
  );
}
