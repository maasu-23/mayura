import { site } from '../data/site';
import { Reveal } from './Reveal';

export function Credentials() {
  return (
    <section id="why" className="relative overflow-hidden border-y border-line bg-paper-dim">
      <div className="glow-orb absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2" />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-peacock-dim">
            {site.credentials.eyebrow}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-ink md:text-4xl">
            {site.credentials.headline}
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="h-full min-h-[280px] overflow-hidden rounded-2xl border border-line">
              <img
                src="/projects/wardrobe-study-nook.jpg"
                alt="Joinery made in Mayura's own factory"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {site.credentials.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-paper-hi p-6">
                  <p className="font-mono text-lg font-semibold text-peacock">{item.title}</p>
                  <p className="mt-2 text-sm text-ink-dim">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
