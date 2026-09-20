import { site } from '../data/site';
import { Reveal } from './Reveal';

export function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-peacock-dim">
          {site.services.eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-ink md:text-4xl">
          {site.services.headline}
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        {site.services.items.map((service, i) => (
          <Reveal key={service.title} delay={i * 0.1}>
            <div className="overflow-hidden rounded-2xl border border-line">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="bg-paper-hi p-8">
                <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
                <p className="mt-3 text-sm text-ink-dim">{service.body}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
