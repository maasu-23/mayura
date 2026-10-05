import { site } from '../data/site';
import { Reveal } from './Reveal';

export function BrandCarousel() {
  const { eyebrow, headline, items } = site.brands;
  const loop = [...items, ...items];
  return (
    <section className="overflow-hidden border-y border-line bg-paper-dim py-16">
      <Reveal className="mx-auto max-w-6xl px-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-peacock-dim">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">{headline}</h2>
      </Reveal>
      <div className="group mt-10 flex w-full">
        <div className="marquee-track flex shrink-0 animate-[marquee_30s_linear_infinite] gap-6 pr-6 group-hover:[animation-play-state:paused]">
          {loop.map((brand, i) => (
            <div
              key={i}
              aria-hidden={i >= items.length}
              className="flex h-20 w-48 shrink-0 items-center justify-center rounded-2xl border border-line bg-paper-hi font-mono text-sm uppercase tracking-widest text-ink-dim"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
