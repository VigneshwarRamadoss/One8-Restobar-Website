import type { Menu, Experience, OperatingHours, VenueContact } from './types';
import { DRAFT_FOOD_MENU } from './data/food-menu';
import { DRAFT_EXPERIENCES } from './data/experiences';
import { DRAFT_HOURS } from './data/hours';
import { DRAFT_CONTACT } from './data/contact';

export * from './types';
export * from './format';

export async function getMenuBySlug(slug: string): Promise<Menu | null> {
  if (slug === 'food') return Promise.resolve(DRAFT_FOOD_MENU);
  return Promise.resolve(null);
}

export async function getAllMenus(): Promise<Menu[]> {
  // Unpublishing drinks and wine until approved source documents are supplied.
  return Promise.resolve([DRAFT_FOOD_MENU]);
}

export async function getExperiences(): Promise<Experience[]> {
  return Promise.resolve(DRAFT_EXPERIENCES);
}

export async function getMenu(): Promise<Menu> {
  return Promise.resolve(DRAFT_FOOD_MENU);
}

export async function getOperatingHours(): Promise<OperatingHours> {
  return Promise.resolve(DRAFT_HOURS);
}

export async function getVenueContact(): Promise<VenueContact> {
  return Promise.resolve(DRAFT_CONTACT);
}
