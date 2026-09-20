/**
 * Animated hero backdrop. A pure-CSS animated gradient in the peacock/brass
 * palette — no WebGL, no version-fragile dependency chain, renders
 * identically everywhere. `prefers-reduced-motion` freezes the animation via
 * the global rule in index.css rather than a JS guard.
 */
export function GradientBackdrop() {
  return <div className="gradient-backdrop absolute inset-0" aria-hidden />;
}
