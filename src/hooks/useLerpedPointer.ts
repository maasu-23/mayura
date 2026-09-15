import { useEffect, useRef } from 'react';

type Options = {
  /** Lerp factor per frame. Lower = heavier, more trailing. */
  ease?: number;
  enabled?: boolean;
  /**
   * Before the first pointer input, drift the point in a slow figure to signal
   * that the hero is interactive. Stops permanently once the user takes over.
   */
  idleHint?: boolean;
};

/**
 * Smoothly follows the pointer and publishes its position onto the element as
 * the `--mx` / `--my` custom properties.
 *
 * Deliberately writes to `element.style` from inside a rAF loop rather than
 * going through React state: this updates every frame, and re-rendering the
 * hero 60 times a second would drop frames on exactly the low-end devices the
 * brief calls out.
 */
export function useLerpedPointer<T extends HTMLElement>({
  ease = 0.12,
  enabled = true,
  idleHint = true,
}: Options = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const centre = () => {
      const r = node.getBoundingClientRect();
      return { x: r.width / 2, y: r.height / 2 };
    };

    const start = centre();
    const target = { ...start };
    const current = { ...start };

    const write = () => {
      node.style.setProperty('--mx', `${current.x}px`);
      node.style.setProperty('--my', `${current.y}px`);
    };

    write();

    // Reduced motion: park the reveal in the centre, no loop, no listeners.
    if (!enabled) return;

    let interacted = false;
    let idleFrom = performance.now();
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      const r = node.getBoundingClientRect();
      interacted = true;
      target.x = event.clientX - r.left;
      target.y = event.clientY - r.top;
    };

    // Hand the hero back to the idle hint when the cursor leaves.
    const onLeave = () => {
      interacted = false;
      idleFrom = performance.now();
    };

    const loop = (time: number) => {
      if (!interacted && idleHint) {
        const c = centre();
        const t = (time - idleFrom) / 1000;
        target.x = c.x + Math.sin(t * 0.55) * c.x * 0.45;
        target.y = c.y + Math.sin(t * 0.85) * c.y * 0.16;
      }

      current.x += (target.x - current.x) * ease;
      current.y += (target.y - current.y) * ease;
      write();

      frame = requestAnimationFrame(loop);
    };

    frame = requestAnimationFrame(loop);

    // `pointermove` covers mouse and touch with one path. On touch the browser
    // keeps its native scrolling (no `touch-action: none`, or the page would
    // trap the finger at the hero) — so on mobile the reveal follows the drag.
    node.addEventListener('pointermove', onMove);
    node.addEventListener('pointerleave', onLeave);

    return () => {
      cancelAnimationFrame(frame);
      node.removeEventListener('pointermove', onMove);
      node.removeEventListener('pointerleave', onLeave);
    };
  }, [ease, enabled, idleHint]);

  return ref;
}
