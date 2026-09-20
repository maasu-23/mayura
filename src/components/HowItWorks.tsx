import { howItWorks } from '../data/howItWorks';
import { Reveal } from './Reveal';

export function HowItWorks() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-peacock-dim">Process</p>
        <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
          From first visit to handover
        </h2>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {howItWorks.map((step, i) => (
          <Reveal key={step.step} delay={i * 0.1}>
            <div className="border-t-2 border-peacock pt-5">
              <p className="font-mono text-sm text-brass-dim">{step.step}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-dim">{step.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
