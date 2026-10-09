import type { ReactNode } from 'react';

type Props = {
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  dark?: boolean;
  solid?: boolean;
};

/**
 * CTA with a layered hover fill — a solid panel wipes up from the bottom edge
 * rather than the background cross-fading to a new colour. Composites on the
 * GPU via a transform, so it costs nothing to paint.
 *
 * Renders a <button> when given onClick instead of href, e.g. to open a
 * modal rather than navigate directly.
 */
export function FillButton({ href, onClick, children, className = '', dark = false, solid = false }: Props) {
  const border = solid
    ? 'border-peacock bg-peacock text-paper hover:bg-peacock-dim hover:border-peacock-dim'
    : dark ? 'border-paper/25 text-paper' : 'border-ink/20 text-ink';
  const sharedClassName = `group relative inline-flex items-center justify-center overflow-hidden rounded-full border px-10 py-5 text-base font-medium uppercase tracking-[0.12em] transition-colors duration-300 hover:border-peacock hover:text-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-peacock ${border} ${className}`;
  const fill = (
    <>
      <span
        aria-hidden
        className="absolute inset-0 origin-bottom scale-y-0 bg-peacock transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 gpu"
      />
      <span className="relative">{children}</span>
    </>
  );
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={sharedClassName}>
        {fill}
      </button>
    );
  }
  return (
    <a href={href} className={sharedClassName}>
      {fill}
    </a>
  );
}
