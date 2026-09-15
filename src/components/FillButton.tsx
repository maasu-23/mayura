import type { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

/**
 * CTA with a layered hover fill — a solid panel wipes up from the bottom edge
 * rather than the background cross-fading to a new colour.
 *
 * The fill is a transform on a pseudo-layer (`scaleY` about the bottom origin),
 * so it composites on the GPU and costs nothing to paint.
 */
export function FillButton({ href, children, className = '' }: Props) {
  return (
    <a
      href={href}
      className={`group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-cream/25 px-8 py-4 text-sm font-medium uppercase tracking-[0.12em] text-cream transition-colors duration-300 hover:border-peacock-glow hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-peacock-glow ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-0 origin-bottom scale-y-0 bg-peacock-glow transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 gpu"
      />
      <span className="relative">{children}</span>
    </a>
  );
}
