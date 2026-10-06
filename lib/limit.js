// Tiny global rate limiter. Global (not per-IP) on purpose: X-Forwarded-For can be forged, and this is one person's site.
const hits = (globalThis.__hits ??= new Map());

export function tooMany(key, max, windowMs) {
  const recent = (hits.get(key) ?? []).filter((t) => Date.now() - t < windowMs);
  hits.set(key, recent);
  return recent.length >= max;
}
export const record = (key) => hits.get(key).push(Date.now());
