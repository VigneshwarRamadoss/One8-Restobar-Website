export type ContentStatus = "source-draft" | "client-approved" | "archived";
export type Availability = "available" | "seasonal" | "unavailable";
export type DietaryMarker = "V" | "VG" | "GF";

export interface MenuVariant {
  id: string;
  label: string;
  price: number; // Raw numerical price in INR
}

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  variants: MenuVariant[];
  dietary: DietaryMarker[];
  allergens: string[];
  availability: Availability;
  status: ContentStatus;
  sourcePage: number;
}

export interface MenuCategory {
  id: string;
  sourceTitle: string;
  displayTitle: string;
  order: number;
  menuItems: MenuItem[];
}

export interface MenuChapter {
  id: string;
  title: string;
  introduction?: string;
  order: number;
  categories: MenuCategory[];
}

export interface MenuDocument {
  url: string;
  fileSize?: string;
  effectiveDate?: string;
  accessible: boolean;
  label?: string;
  fileType?: string;
}

export interface Menu {
  id: string;
  slug: "food" | "drinks" | "wine";
  title: string;
  description: string;
  locale: "en";
  currency: "INR";
  effectiveDate?: string;
  lastUpdated?: string;
  serviceApplicability?: string[];
  status: ContentStatus;
  chapters: MenuChapter[];
  pdf?: MenuDocument | null;
  isDraft: boolean; // Retained for compatibility with existing components
}

export interface Experience {
  id: string;
  title: string;
  bestFor: string;
  serviceCue: string;
  description: string;
  isDraft: boolean;
}

export interface OperatingHours {
  status: 'open_now' | 'opens_later' | 'closed' | 'exceptional' | 'unknown';
  label: string;
  hoursDetail: string;
  location: string;
  isDraft: boolean;
}

export interface VenueContact {
  phone: string | null;
  email: string | null;
  address: string | null;
  city: string | null;
  openTableUrl: string | null;
  mapsUrl: string | null;
  isDraft: boolean;
}
