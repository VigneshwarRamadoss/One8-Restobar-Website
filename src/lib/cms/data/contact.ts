import type { VenueContact } from '../types';

export const DRAFT_CONTACT: VenueContact = {
  phone: process.env.NEXT_PUBLIC_VENUE_PHONE || null,
  email: process.env.NEXT_PUBLIC_VENUE_EMAIL || null,
  address: process.env.NEXT_PUBLIC_VENUE_ADDRESS || null,
  city: process.env.NEXT_PUBLIC_VENUE_CITY || null,
  openTableUrl: process.env.NEXT_PUBLIC_RESERVATION_URL || null,
  mapsUrl: process.env.NEXT_PUBLIC_MAPS_URL || null,
  isDraft: false
};
