import { getReservationConfig } from './reservation-config';
import { CompleteReservationInput } from './reservation-validation';

export interface TimeSlot {
  time: string; // e.g. "19:00"
  label: string; // e.g. "7:00 PM"
  period: 'afternoon' | 'evening' | 'late';
  available: boolean;
  isDraftFixture?: boolean;
}

export interface AvailabilityResult {
  date: string;
  partySize: number;
  experienceId: string;
  slots: TimeSlot[];
  venueTimezone: string;
  isDraftFixture?: boolean;
  error?: string;
}

export interface ReservationBookingResult {
  success: boolean;
  bookingReference?: string;
  date?: string;
  time?: string;
  partySize?: number;
  experienceTitle?: string;
  venueAddress?: string;
  error?: string;
  errorCode?: 'EXPIRED_SLOT' | 'STALE_AVAILABILITY' | 'PROVIDER_TIMEOUT' | 'DOUBLE_SUBMIT' | 'CONFIG_MISSING' | 'UNAVAILABLE' | 'VALIDATION_ERROR' | 'NETWORK_ERROR';
  isDraftFixture?: boolean;
}

export async function checkAvailability(params: {
  date: string;
  partySize: number;
  experienceId: string;
}): Promise<AvailabilityResult> {
  const config = getReservationConfig();

  if (config.mode === 'unavailable') {
    return {
      date: params.date,
      partySize: params.partySize,
      experienceId: params.experienceId,
      slots: [],
      venueTimezone: config.venueTimezone,
      error: 'Reservations are currently unavailable online. Please contact the restaurant directly.',
    };
  }

  // Server-enforced timezone check for date validity
  const todayStr = new Date().toISOString().split('T')[0];
  if (params.date < todayStr) {
    return {
      date: params.date,
      partySize: params.partySize,
      experienceId: params.experienceId,
      slots: [],
      venueTimezone: config.venueTimezone,
      error: 'Selected date is in the past.',
    };
  }

  // Generate slots for dev fixtures ONLY if explicitly enabled
  if (config.enableFixtures) {
    const slots: TimeSlot[] = [
      { time: '12:30', label: '12:30 PM', period: 'afternoon', available: true, isDraftFixture: true },
      { time: '13:00', label: '1:00 PM', period: 'afternoon', available: true, isDraftFixture: true },
      { time: '13:30', label: '1:30 PM', period: 'afternoon', available: false, isDraftFixture: true },
      { time: '19:00', label: '7:00 PM', period: 'evening', available: true, isDraftFixture: true },
      { time: '19:30', label: '7:30 PM', period: 'evening', available: true, isDraftFixture: true },
      { time: '20:00', label: '8:00 PM', period: 'evening', available: true, isDraftFixture: true },
      { time: '20:30', label: '8:30 PM', period: 'evening', available: false, isDraftFixture: true },
      { time: '21:00', label: '9:00 PM', period: 'late', available: true, isDraftFixture: true },
      { time: '21:30', label: '9:30 PM', period: 'late', available: true, isDraftFixture: true },
    ];

    return {
      date: params.date,
      partySize: params.partySize,
      experienceId: params.experienceId,
      slots,
      venueTimezone: config.venueTimezone,
      isDraftFixture: true,
    };
  }

  // Non-fixture production internal mode requires a real backend integration
  return {
    date: params.date,
    partySize: params.partySize,
    experienceId: params.experienceId,
    slots: [],
    venueTimezone: config.venueTimezone,
    error: 'No live reservation provider is configured.',
  };
}

export async function createReservation(
  input: CompleteReservationInput
): Promise<ReservationBookingResult> {
  const config = getReservationConfig();

  if (config.mode === 'unavailable') {
    return {
      success: false,
      error: 'Reservations are currently unavailable online.',
      errorCode: 'UNAVAILABLE',
    };
  }

  // Re-validate availability immediately before booking
  const avail = await checkAvailability({
    date: input.date,
    partySize: input.partySize,
    experienceId: input.experienceId,
  });

  if (avail.error || avail.slots.length === 0) {
    return {
      success: false,
      error: avail.error || 'The requested date is no longer available.',
      errorCode: 'STALE_AVAILABILITY',
    };
  }

  const slot = avail.slots.find(s => s.time === input.timeSlot);
  if (slot && !slot.available) {
    return {
      success: false,
      error: 'This time slot has just expired or been taken by another guest.',
      errorCode: 'EXPIRED_SLOT',
    };
  }

  if (config.enableFixtures) {
    const ref = `ONE8-DEV-${Math.floor(100000 + Math.random() * 900000)}`;
    const experienceTitles: Record<string, string> = {
      dining: 'The Dining Room',
      bar: 'Cocktail Bar',
      terrace: 'Outdoor Terrace',
      'private-events': 'Private Lounge',
    };

    return {
      success: true,
      bookingReference: ref,
      date: input.date,
      time: input.timeSlot,
      partySize: input.partySize,
      experienceTitle: experienceTitles[input.experienceId] || 'Dining Room',
      venueAddress: config.venueAddress || '18 Residency Road, Richmond Town, Bengaluru, Karnataka 560025',
      isDraftFixture: true,
    };
  }

  return {
    success: false,
    error: 'Live reservation system is not configured.',
    errorCode: 'CONFIG_MISSING',
  };
}

export async function modifyReservation(
  _reference: string,
  _input: Partial<CompleteReservationInput>
): Promise<ReservationBookingResult> {
  const config = getReservationConfig();
  if (!config.supportsModify) {
    return {
      success: false,
      error: 'Modification is not supported by the current provider. Please call the restaurant directly.',
      errorCode: 'UNAVAILABLE',
    };
  }

  return {
    success: false,
    error: 'Modification endpoint requires live provider integration.',
    errorCode: 'UNAVAILABLE',
  };
}

export async function cancelReservation(
  _reference: string
): Promise<{ success: boolean; message: string }> {
  const config = getReservationConfig();
  if (!config.supportsCancel) {
    return {
      success: false,
      message: 'Cancellation is not supported online. Please call the restaurant directly.',
    };
  }

  return {
    success: false,
    message: 'Cancellation endpoint requires live provider integration.',
  };
}
