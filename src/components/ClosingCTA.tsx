import { site } from '../data/site';
import { FillButton } from './FillButton';

export function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <img
        src="/cta/bedroom-warm-wood.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
      <div className="relative mx-auto max-w-3xl px-6 py-28 text-center">
        <h2 className="text-3xl font-semibold text-paper md:text-4xl">{site.cta.headline}</h2>
        <p className="mt-4 text-paper/70">{site.cta.sub}</p>
        <div className="mt-10 flex justify-center">
          <FillButton href={site.contacts[1].href} dark>
            {site.hero.cta}
          </FillButton>
        </div>
      </div>
    </section>
  );
}
