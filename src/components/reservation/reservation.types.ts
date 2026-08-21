export type ReservationStep = 1 | 2 | 3 | 4 | 5; // 1: Date, 2: Party/Experience, 3: Time, 4: Guest Details, 5: Confirmation

export interface BookingDetails {
  date: string;
  partySize: number;
  experienceId: string;
  timeSlot: string;
  name: string;
  email: string;
  phone: string;
  occasion?: string;
  seatingRequest?: string;
  note?: string;
  consent: boolean;
  _honey?: string;
}

export type ReservationErrorCode =
  | 'EXPIRED_SLOT'
  | 'STALE_AVAILABILITY'
  | 'PROVIDER_TIMEOUT'
  | 'DOUBLE_SUBMIT'
  | 'CONFIG_MISSING'
  | 'UNAVAILABLE'
  | 'VALIDATION_ERROR'
  | 'NETWORK_ERROR';

export interface ReservationState {
  step: ReservationStep;
  isOpen: boolean;
  loading: boolean;
  details: Partial<BookingDetails>;
  errors: Record<string, string[]>;
  errorMessage: string | null;
  errorCode: ReservationErrorCode | null;
  confirmation: {
    bookingReference?: string;
    date?: string;
    time?: string;
    partySize?: number;
    experienceTitle?: string;
    venueAddress?: string;
    isDraftFixture?: boolean;
  } | null;
}
