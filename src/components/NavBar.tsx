import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { site } from '../data/site';

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/work', label: 'Work' },
  { href: '/#process', label: 'Process' },
  { href: '/#why', label: 'Why Mayura' },
  { href: '/faq', label: 'FAQ' },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/80 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/mayura-mark.png" alt="" className="h-7 w-7" />
          <span className="font-mono text-sm font-medium tracking-[0.2em] text-ink">
            {site.name.toUpperCase()}
          </span>
        </Link>
        <ul className="hidden gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                to={link.href}
                className="text-sm text-ink-dim transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={site.contacts[1].href}
          className="rounded-full bg-peacock px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-peacock-dim"
        >
          {site.hero.cta}
        </a>
      </nav>
    </header>
  );
}
