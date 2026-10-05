import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { site } from '../data/site';
import { Reveal } from './Reveal';

const SWIPE = 60;

export function Testimonials() {
  const { eyebrow, headline, items } = site.testimonials;
  const [[index, dir], setPage] = useState([0, 1]);

  const go = (d: number) => setPage([(index + d + items.length) % items.length, d]);
  const t = items[index];

  return (
    <section className="border-y border-line bg-paper-dim">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-peacock-dim">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">{headline}</h2>
        </Reveal>

        <div className="relative mt-10 min-h-[260px] overflow-hidden">
          <AnimatePresence mode="wait" custom={dir}>
            <motion.figure
              key={index}
              custom={dir}
              initial={{ opacity: 0, x: dir * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -60 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -SWIPE) go(1);
                else if (info.offset.x > SWIPE) go(-1);
              }}
              className="cursor-grab rounded-2xl border border-line bg-paper-hi p-8 active:cursor-grabbing md:p-10"
            >
              <blockquote className="text-lg leading-relaxed text-ink md:text-xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-medium text-ink">{t.name}</p>
                <p className="font-mono text-xs uppercase tracking-widest text-peacock-dim">
                  {t.place}
                </p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-peacock hover:text-peacock"
          >
            ←
          </button>
          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > index ? 1 : -1])}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-6 bg-peacock' : 'w-2 bg-ink/20'
                }`}
              />
            ))}
          </div>
          <button
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-peacock hover:text-peacock"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
