import { site } from '../data/site';

export function Credentials() {
  return (
    <section id="why" className="relative overflow-hidden border-y border-line bg-paper-dim">
      <div className="glow-orb absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2" />
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-peacock-dim">
          {site.credentials.eyebrow}
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-ink md:text-4xl">
          {site.credentials.headline}
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-line">
            <img
              src="/projects/wardrobe-pastel-glass.jpg"
              alt="Joinery made in Mayura's own factory"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            {site.credentials.items.map((item) => (
              <div key={item.title} className="rounded-2xl border border-line bg-paper-hi p-8">
                <p className="font-mono text-2xl font-semibold text-peacock">{item.title}</p>
                <p className="mt-3 text-ink-dim">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
