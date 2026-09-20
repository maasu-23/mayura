import { useState } from 'react';
import { faq } from '../data/faq';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-peacock-dim">FAQ</p>
      <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">Questions, answered</h2>

      <div className="mt-10 divide-y divide-line border-y border-line">
        {faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-ink">{item.q}</span>
                <span className="font-mono text-peacock">{isOpen ? '−' : '+'}</span>
              </button>
              {isOpen && <p className="pb-5 text-sm text-ink-dim">{item.a}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
