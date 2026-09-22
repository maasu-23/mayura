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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen ? 'bg-paper/80 backdrop-blur-md border-b border-line' : 'bg-transparent'
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
          className="hidden rounded-full bg-peacock px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-peacock-dim md:inline-block"
        >
          {site.hero.cta}
        </a>
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-0.5 w-5 bg-current transition-transform duration-200 ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] block h-0.5 w-5 bg-current transition-opacity duration-200 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] block h-0.5 w-5 bg-current transition-transform duration-200 ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-line bg-paper px-6 pb-8 pt-2 md:hidden">
          <ul className="flex flex-col gap-1">
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block py-3 text-base text-ink-dim transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={site.contacts[1].href}
            onClick={() => setMenuOpen(false)}
            className="mt-4 block rounded-full bg-peacock px-6 py-3 text-center text-sm font-medium text-paper transition-colors hover:bg-peacock-dim"
          >
            {site.hero.cta}
          </a>
        </div>
      )}
    </header>
  );
}
