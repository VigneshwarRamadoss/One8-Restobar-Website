import type { Experience } from '../types';

export const DRAFT_EXPERIENCES: Experience[] = [
  {
    id: 'dining',
    title: 'The Dining Room',
    bestFor: 'Shared Plates & Dinner',
    serviceCue: 'Evening Service',
    description: 'A contemporary space shaped around shared plates and crafted dishes.',
    isDraft: false
  },
  {
    id: 'bar',
    title: 'Cocktail Bar',
    bestFor: 'Craft Pours & Social Evenings',
    serviceCue: 'Late Service',
    description: 'An intimate bar atmosphere focusing on signature cocktails and refined pours.',
    isDraft: false
  },
  {
    id: 'terrace',
    title: 'Outdoor Terrace',
    bestFor: 'Al Fresco Occasions',
    serviceCue: 'Seasonal',
    description: 'Open-air dining experience.',
    isDraft: false
  },
  {
    id: 'private-events',
    title: 'Private Lounge',
    bestFor: 'Group Celebrations & Events',
    serviceCue: 'By Enquiry',
    description: 'Dedicated space for private gatherings and corporate events.',
    isDraft: false
  }
];
