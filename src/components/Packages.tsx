import { site } from '../data/site';
import { FillButton } from './FillButton';
import { Reveal } from './Reveal';

export function Packages() {
  const { eyebrow, headline, items } = site.packages;
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-peacock-dim">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">{headline}</h2>
      </Reveal>
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {items.map((pkg, i) => (
          <Reveal key={pkg.name} delay={i * 0.1}>
            <div
              className={`flex h-full flex-col rounded-2xl border p-8 transition-transform duration-300 hover:-translate-y-1 ${
                'featured' in pkg && pkg.featured
                  ? 'border-peacock bg-paper-hi shadow-lg shadow-peacock/10'
                  : 'border-line bg-paper-hi'
              }`}
            >
              <h3 className="text-xl font-semibold text-ink">{pkg.name}</h3>
              <p className="mt-2 font-mono text-sm text-peacock">{pkg.price}</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm text-ink-dim">
                {pkg.points.map((pt, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="text-brass">✓</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <FillButton href={site.contacts[1].href} className="mt-8 !px-6 !py-3 !text-sm">
                Enquire
              </FillButton>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
