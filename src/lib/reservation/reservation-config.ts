export type ReservationMode = 'internal' | 'external' | 'unavailable';

export interface ReservationConfig {
  mode: ReservationMode;
  externalUrl: string | null;
  providerName: string;
  maxPartySize: number;
  venueTimezone: string;
  venuePhone: string | null;
  venueEmail: string | null;
  venueAddress: string | null;
  supportsModify: boolean;
  supportsCancel: boolean;
  enableFixtures: boolean;
}

export function getReservationConfig(): ReservationConfig {
  const rawMode = process.env.RESERVATION_MODE || process.env.NEXT_PUBLIC_RESERVATION_MODE;
  const isDev = process.env.NODE_ENV === 'development';
  const fixturesEnabled = process.env.RESERVATION_ENABLE_FIXTURES === 'true';

  let mode: ReservationMode = 'unavailable';

  if (rawMode === 'internal') {
    mode = 'internal';
  } else if (rawMode === 'external' || process.env.NEXT_PUBLIC_RESERVATION_URL) {
    mode = 'external';
  } else if (isDev && fixturesEnabled) {
    mode = 'internal';
  }

  const externalUrl = process.env.NEXT_PUBLIC_RESERVATION_URL || process.env.RESERVATION_EXTERNAL_URL || null;
  const providerName = process.env.RESERVATION_PROVIDER || 'One 8 Reservation Engine';
  const maxPartySize = parseInt(process.env.RESERVATION_MAX_PARTY_SIZE || '8', 10);
  const venueTimezone = process.env.VENUE_TIMEZONE || 'Asia/Kolkata';
  const venuePhone = process.env.NEXT_PUBLIC_VENUE_PHONE || process.env.VENUE_PHONE || null;
  const venueEmail = process.env.NEXT_PUBLIC_VENUE_EMAIL || process.env.VENUE_EMAIL || null;
  const venueAddress = process.env.NEXT_PUBLIC_VENUE_ADDRESS || process.env.VENUE_ADDRESS || null;

  const supportsModify = process.env.RESERVATION_SUPPORTS_MODIFY === 'true';
  const supportsCancel = process.env.RESERVATION_SUPPORTS_CANCEL === 'true';

  return {
    mode,
    externalUrl,
    providerName,
    maxPartySize: isNaN(maxPartySize) || maxPartySize < 1 ? 8 : maxPartySize,
    venueTimezone,
    venuePhone,
    venueEmail,
    venueAddress,
    supportsModify,
    supportsCancel,
    enableFixtures: isDev && fixturesEnabled,
  };
}
