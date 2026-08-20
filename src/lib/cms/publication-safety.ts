import type { VenueContact, OperatingHours } from './types';

export function isDevEnvironment(): boolean {
  return process.env.NODE_ENV !== 'production' || process.env.NEXT_PUBLIC_PREVIEW_MODE === 'true';
}

/**
 * Strips [DRAFT] tags and pending placeholders in production mode.
 * In dev/preview mode, returns the string or preserves draft indication cleanly.
 */
export function sanitizeText(text: string | null | undefined): string | null {
  if (!text) return null;
  const containsDraft = text.includes('[DRAFT') || text.toLowerCase().includes('pending');
  if (!isDevEnvironment() && containsDraft) {
    return null;
  }
  return text;
}

export function getCleanContact(contact: VenueContact) {
  const isDev = isDevEnvironment();
  const phone = sanitizeText(contact.phone);
  const email = sanitizeText(contact.email);
  const address = sanitizeText(contact.address);
  const city = sanitizeText(contact.city);
  const openTableUrl = sanitizeText(contact.openTableUrl);
  const mapsUrl = sanitizeText(contact.mapsUrl);

  return {
    phone,
    email,
    address,
    city,
    openTableUrl,
    mapsUrl,
    isDraft: contact.isDraft ?? false,
    isFullyConfigured: Boolean(phone && email && address),
    isDev,
  };
}

export function getCleanHours(hours: OperatingHours) {
  const isDev = isDevEnvironment();
  const label = sanitizeText(hours.label);
  const hoursDetail = sanitizeText(hours.hoursDetail);
  const location = sanitizeText(hours.location);

  return {
    status: hours.status,
    label,
    hoursDetail,
    location,
    isDraft: hours.isDraft ?? false,
    isFullyConfigured: Boolean(hoursDetail && label),
    isDev,
  };
}
