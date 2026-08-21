import { z } from 'zod';

export const reservationStep1Schema = z.object({
  date: z.string().min(1, 'Please select a date'),
});

export const reservationStep2Schema = z.object({
  partySize: z.number().min(1, 'Party size must be at least 1').max(20, 'For parties larger than 8, please submit an events enquiry'),
  experienceId: z.string().min(1, 'Please select an experience preference'),
});

export const reservationStep3Schema = z.object({
  timeSlot: z.string().min(1, 'Please select a time slot'),
});

export const reservationStep4Schema = z.object({
  name: z.string().trim().min(2, 'Please enter your full name (at least 2 characters)'),
  email: z.string().trim().email('Please enter a valid email address'),
  phone: z.string().trim().min(7, 'Please enter a valid telephone number'),
  occasion: z.string().optional(),
  seatingRequest: z.string().optional(),
  note: z.string().max(500, 'Notes must be under 500 characters').optional(),
  consent: z.literal(true, {
    message: 'You must agree to the privacy terms to submit a reservation',
  }),
  _honey: z.string().max(0, 'Spam submission detected').optional(),
});

export const completeReservationSchema = reservationStep1Schema
  .merge(reservationStep2Schema)
  .merge(reservationStep3Schema)
  .merge(reservationStep4Schema);

export type CompleteReservationInput = z.infer<typeof completeReservationSchema>;
