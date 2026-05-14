/**
 * Best-effort sliding-window limiter keyed by client id (e.g. IP).
 * Works for single Node processes; on multi-instance serverless each instance
 * has its own bucket (weaker than Redis/Upstash). Good enough to slow basic abuse.
 */
const buckets = new Map<string, number[]>();

export function checkContactRateLimit(
  key: string,
  max: number,
  windowMs: number
): boolean {
  const now = Date.now();
  const stamps = buckets.get(key) ?? [];
  const recent = stamps.filter((t) => now - t < windowMs);
  if (recent.length >= max) {
    buckets.set(key, recent);
    return false;
  }
  recent.push(now);
  buckets.set(key, recent);
  return true;
}
