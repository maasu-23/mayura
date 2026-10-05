import { motion } from 'framer-motion';
import { site } from '../data/site';
import { Reveal } from './Reveal';

export function Finishes() {
  const { eyebrow, headline, items } = site.finishes;
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-peacock-dim">{eyebrow}</p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-ink md:text-4xl">{headline}</h2>
      </Reveal>
      <div className="mt-10 flex flex-wrap gap-3">
        {items.map((item, i) => (
          <motion.span
            key={item}
            initial={{ opacity: 0, scale: 0.9, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3 }}
            className="rounded-full border border-line bg-paper-hi px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-peacock hover:text-peacock-dim"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
