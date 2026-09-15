import { MotionConfig } from 'framer-motion';

import { ClosingCTA } from './components/ClosingCTA';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { PortfolioGrid } from './components/PortfolioGrid';
import { areasMarquee, servicesMarquee } from './data/marquee';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';
import { useSmoothScroll } from './hooks/useSmoothScroll';

/**
 * One long scroll, five sections, no routing — per the build brief.
 *
 * Hero -> Marquee (services) -> Portfolio -> Marquee (areas, reversed) -> CTA
 */
export default function App() {
  const reduced = usePrefersReducedMotion();
  useSmoothScroll(!reduced);

  return (
    // `reducedMotion="user"` makes framer-motion honour the OS setting for every
    // motion component at once — the CSS media query in index.css only reaches
    // declarative CSS animation, not JS-driven transforms like the hero headline.
    <MotionConfig reducedMotion="user">
      <main>
        <Hero />

        <Marquee items={servicesMarquee} label="Services we offer" duration={38} />

        <PortfolioGrid />

        {/* Same component, mirrored direction and a different keyword set. */}
        {/*
          Duration is tuned to the track width, not picked for its own sake:
          the fourteen Kerala district names make this track ~1.7x the services
          row, so an equal duration would scroll it at roughly twice the speed.
          58s keeps both rows reading at a similar pace.
        */}
        <Marquee
          items={areasMarquee}
          label="Districts we serve across Kerala"
          duration={58}
          reverse
        />

        <ClosingCTA />
      </main>
    </MotionConfig>
  );
}
