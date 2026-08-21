'use client';

import { createReservation, ReservationBookingResult } from '@/lib/reservation/reservation-provider';
import { completeReservationSchema, CompleteReservationInput } from '@/lib/reservation/reservation-validation';
import { sanitizeLogInput } from '@/lib/reservation/reservation-security';

export async function createReservationAction(
  rawInput: CompleteReservationInput
): Promise<ReservationBookingResult> {
  // Zod server-side validation
  const validation = completeReservationSchema.safeParse(rawInput);
  if (!validation.success) {
    return {
      success: false,
      error: 'Please fix the errors in your submission.',
      errorCode: 'VALIDATION_ERROR',
    };
  }

  const input = validation.data;

  // Honeypot anti-spam check
  if (input._honey && input._honey.length > 0) {
    return {
      success: false,
      error: 'Spam submission detected.',
      errorCode: 'VALIDATION_ERROR',
    };
  }

  // PII-scrubbed server logging
  const sanitized = sanitizeLogInput(input);
  console.log('[Reservation Action] Processing booking:', JSON.stringify(sanitized));

  // Execute provider booking logic
  return await createReservation(input);
}
