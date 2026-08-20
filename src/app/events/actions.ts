'use server';

import { z } from 'zod';

const eventSchema = z.object({
  // Step 1
  eventType: z.string().min(1, 'Please select an event type'),
  date: z.string().min(1, 'Please provide a preferred date'),
  time: z.string().min(1, 'Please provide an approximate time'),
  guests: z.string().regex(/^\d+$/, 'Please provide a valid guest count'),
  space: z.string().optional(),
  
  // Step 2
  name: z.string().min(2, 'Please provide your name'),
  email: z.string().email('Please provide a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().optional(),
  consent: z.string().refine(value => value === 'on', 'Please accept the privacy statement'),
  
  // Honeypot
  _honey: z.string().max(0, 'Spam detected').optional(),
});

export type EventFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitEventEnquiry(
  prevState: EventFormState,
  formData: FormData
): Promise<EventFormState> {
  const data = Object.fromEntries(formData.entries());
  
  const validatedFields = eventSchema.safeParse({
    eventType: data.eventType,
    date: data.date,
    time: data.time,
    guests: data.guests,
    space: data.space,
    name: data.name,
    email: data.email,
    phone: data.phone,
    company: data.company,
    message: data.message,
    consent: data.consent,
    _honey: data._honey,
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Please correct the errors in the form before submitting.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // If honeypot is filled, return success to fool bots
  if (validatedFields.data._honey) {
    return {
      success: true,
      message: 'Thank you for your enquiry. Our team will contact you shortly.',
    };
  }

  return {
    success: false,
    message: 'Online enquiries are temporarily unavailable. Please try again later.',
  };
}
