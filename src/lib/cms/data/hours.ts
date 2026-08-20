import type { OperatingHours } from '../types';

export const DRAFT_HOURS: OperatingHours = {
  status: 'unknown',
  label: '[DRAFT - Hours Pending Client Confirmation]',
  hoursDetail: 'Mon - Sat: 17:30 - 01:00, Sun: Closed [DRAFT]',
  location: '[DRAFT - Location Pending Confirmation]',
  isDraft: true
};
