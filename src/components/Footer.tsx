import { site } from '../data/site';

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink text-paper/70">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img src="/mayura-mark.png" alt="" className="h-6 w-6" />
              <p className="font-mono text-sm tracking-[0.2em] text-paper">
                {site.name.toUpperCase()}
              </p>
            </div>
            <p className="mt-3 max-w-xs text-sm">{site.tagline}</p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-brass">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              {site.contacts.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="transition-colors hover:text-paper">
                    {c.label}: {c.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-brass">
              Serving all of {site.region}
            </p>
            <p className="mt-3 text-sm leading-relaxed">{site.serviceAreas.join(' · ')}</p>
          </div>
        </div>

        <p className="mt-16 text-xs text-paper/40">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
