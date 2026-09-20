import type { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

/**
 * CTA with a layered hover fill — a solid panel wipes up from the bottom edge
 * rather than the background cross-fading to a new colour. Composites on the
 * GPU via a transform, so it costs nothing to paint.
 */
export function FillButton({ href, children, className = '', dark = false }: Props) {
  const border = dark ? 'border-paper/25 text-paper' : 'border-ink/20 text-ink';
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border px-10 py-5 text-base font-medium uppercase tracking-[0.12em] transition-colors duration-300 hover:border-peacock hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-peacock ${border} ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 origin-bottom scale-y-0 bg-peacock transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 gpu"
      />
      <span className="relative">{children}</span>
    </a>
  );
}
