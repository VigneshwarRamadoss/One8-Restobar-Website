import { CompleteReservationInput } from './reservation-validation';

// Rate limiting cache & Idempotency store
const idempotencyStore = new Map<string, { timestamp: number; response: unknown }>();
const ipRateLimitStore = new Map<string, number[]>();

const IDEMPOTENCY_TTL_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5;

export function checkRateLimit(ip: string): { allowed: boolean; retryAfterSec?: number } {
  const now = Date.now();
  const timestamps = ipRateLimitStore.get(ip) || [];
  const validTimestamps = timestamps.filter(ts => now - ts < RATE_LIMIT_WINDOW_MS);

  if (validTimestamps.length >= RATE_LIMIT_MAX_REQUESTS) {
    const oldest = validTimestamps[0];
    const retryAfterSec = Math.ceil((RATE_LIMIT_WINDOW_MS - (now - oldest)) / 1000);
    return { allowed: false, retryAfterSec };
  }

  validTimestamps.push(now);
  ipRateLimitStore.set(ip, validTimestamps);
  return { allowed: true };
}

export function getIdempotencyResult(key: string): unknown | null {
  const record = idempotencyStore.get(key);
  if (!record) return null;
  if (Date.now() - record.timestamp > IDEMPOTENCY_TTL_MS) {
    idempotencyStore.delete(key);
    return null;
  }
  return record.response;
}

export function setIdempotencyResult(key: string, response: unknown): void {
  idempotencyStore.set(key, { timestamp: Date.now(), response });
}

export function sanitizeLogInput(data: Partial<CompleteReservationInput>): Record<string, unknown> {
  return {
    date: data.date,
    partySize: data.partySize,
    experienceId: data.experienceId,
    timeSlot: data.timeSlot,
    hasName: Boolean(data.name),
    hasEmail: Boolean(data.email),
    hasPhone: Boolean(data.phone),
    hasNote: Boolean(data.note),
    piiScrubbed: true,
  };
}
