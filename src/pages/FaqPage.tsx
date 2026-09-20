import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { faq } from '../data/faq';
import { Reveal } from '../components/Reveal';

export function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-6 pb-24 pt-40">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-peacock-dim">FAQ</p>
        <h1 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">Questions, answered</h1>
      </Reveal>

      <div className="mt-10 divide-y divide-line border-y border-line">
        {faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q} delay={i * 0.05}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-ink">{item.q}</span>
                <span className="font-mono text-peacock">{isOpen ? '−' : '+'}</span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm text-ink-dim">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
