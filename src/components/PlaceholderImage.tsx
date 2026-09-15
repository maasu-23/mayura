import { RoomScene } from './RoomScene';
import type { RoomVariant } from './RoomScene';

type Props = {
  /** Which room to draw while there is no photograph. */
  scene: RoomVariant;
  /** Real image path. When set, the illustration is bypassed entirely. */
  src?: string;
  alt?: string;
  /** Small corner label. Pass `null` to hide it. */
  tag?: string | null;
  className?: string;
};

/**
 * Stands in for photography that does not exist yet.
 *
 * The stand-in is a drawing, never a fake photo — it cannot be mistaken for a
 * finished project, which is what the brief requires of anything that is not
 * real completed work.
 *
 * TODO: every render of this component without a `src` is an outstanding asset.
 * Swapping in a real photo is a data change (`src/data/projects.ts`), never a
 * component change.
 */
export function PlaceholderImage({ scene, src, alt = '', tag = 'Illustration', className = '' }: Props) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt || 'Illustrated placeholder'}
      className={`relative h-full w-full overflow-hidden ${className}`}
    >
      <RoomScene variant={scene} />
      {tag && (
        <span className="absolute bottom-3 left-3 rounded-full border border-cream/20 bg-ink/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-cream/70 backdrop-blur-sm">
          {tag}
        </span>
      )}
    </div>
  );
}
