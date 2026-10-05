import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../data/projects';
import { Reveal } from './Reveal';

const TABS = [
  { label: 'Kitchen', ids: ['kitchen-white-black', 'kitchen-dark-glossy'] },
  { label: 'Bedroom', ids: ['bedroom-luxury-chandelier', 'bedroom-moody-marble'] },
  { label: 'Living & Dining', ids: ['living-room-slat-divider', 'dining-hexagon-wall'] },
  {
    label: 'Storage & More',
    ids: ['wardrobe-study-nook', 'pooja-unit', 'crockery-display', 'utility-nook'],
  },
];

export function CategoryTabs() {
  const [active, setActive] = useState(0);
  const items = TABS[active].ids
    .map((id) => projects.find((p) => p.id === id))
    .filter((p) => p !== undefined);

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-peacock-dim">
          Explore by Space
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
          Every room, designed to order
        </h2>
        <div role="tablist" className="mt-8 flex flex-wrap gap-3">
          {TABS.map((tab, i) => (
            <button
              key={tab.label}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className="relative rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-peacock"
            >
              {i === active && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-peacock"
                  transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                />
              )}
              <span className={`relative ${i === active ? 'text-paper' : 'text-ink'}`}>
                {tab.label}
              </span>
            </button>
          ))}
        </div>
      </Reveal>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          role="tabpanel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {items.map((p) => (
            <figure key={p.id} className="group overflow-hidden rounded-2xl border border-line">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.src}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="bg-paper-hi p-5">
                <p className="font-mono text-xs uppercase tracking-widest text-peacock-dim">
                  {p.room}
                </p>
                <p className="mt-1 font-medium text-ink">{p.title}</p>
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
