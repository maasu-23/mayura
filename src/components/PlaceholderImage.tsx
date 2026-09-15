import { RoomScene } from './RoomScene';
import type { RoomVariant } from './RoomScene';

type Props = {
  /** Room to draw when there is no photograph. */
  scene: RoomVariant;
  /** Real image path. When set, the illustration is bypassed. */
  src?: string;
  alt?: string;
  /**
   * Corner label. Renders over a photograph as well as over an illustration —
   * an AI render must stay visibly tagged, so this is deliberately not skipped
   * once `src` is set. Pass `null` only for genuinely completed, photographed work.
   */
  tag?: string | null;
  className?: string;
};

export function PlaceholderImage({ scene, src, alt = '', tag = 'Illustration', className = '' }: Props) {
  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      {...(src ? {} : { role: 'img', 'aria-label': alt || 'Illustrated placeholder' })}
    >
      {src ? (
        <img src={src} alt={alt} loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <RoomScene variant={scene} />
      )}

      {tag && (
        <span className="absolute bottom-3 left-3 rounded-full border border-cream/20 bg-ink/60 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-cream/70 backdrop-blur-sm">
          {tag}
        </span>
      )}
    </div>
  );
}
