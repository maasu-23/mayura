import type { ReactNode } from 'react';
import { site } from '../data/site';

const SOCIAL_ICONS: Record<string, ReactNode> = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5.01-4.73.07-.96.04-1.48.2-1.83.34-.46.18-.78.39-1.13.73-.34.35-.55.67-.73 1.13-.14.35-.3.87-.34 1.83-.06 1.23-.07 1.58-.07 4.73s.01 3.5.07 4.73c.04.96.2 1.48.34 1.83.18.46.39.78.73 1.13.35.34.67.55 1.13.73.35.14.87.3 1.83.34 1.23.06 1.58.07 4.73.07s3.5-.01 4.73-.07c.96-.04 1.48-.2 1.83-.34.46-.18.78-.39 1.13-.73.34-.35.55-.67.73-1.13.14-.35.3-.87.34-1.83.06-1.23.07-1.58.07-4.73s-.01-3.5-.07-4.73c-.04-.96-.2-1.48-.34-1.83a3.02 3.02 0 0 0-.73-1.13 3.02 3.02 0 0 0-1.13-.73c-.35-.14-.87-.3-1.83-.34-1.23-.06-1.58-.07-4.73-.07Zm0 3.06a4.94 4.94 0 1 1 0 9.88 4.94 4.94 0 0 1 0-9.88Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.14-1.99a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M13.5 21v-7.9h2.65l.4-3.08H13.5V8.06c0-.89.25-1.5 1.52-1.5h1.63V3.8c-.28-.04-1.25-.12-2.37-.12-2.34 0-3.95 1.43-3.95 4.05v2.26H7.67v3.08h2.66V21h3.17Z" />
    </svg>
  ),
};

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
            <div className="mt-5 flex gap-4">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-paper/60 transition-colors hover:text-paper"
                >
                  {SOCIAL_ICONS[s.label]}
                </a>
              ))}
            </div>
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
