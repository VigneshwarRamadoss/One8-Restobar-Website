export interface NavItem {
  label: string;
  href: string;
  isPublishable: boolean;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', isPublishable: true },
  { label: 'Menus', href: '/menus', isPublishable: true },
  // Unimplemented milestone routes remain registered but marked unpublishable
  { label: 'Experiences', href: '/experiences', isPublishable: false },
  { label: 'Events', href: '/events', isPublishable: false },
  { label: 'About', href: '/about', isPublishable: false },
  { label: 'Visit', href: '/visit', isPublishable: false },
];

/**
 * Returns active, publishable navigation items for public UI rendering.
 */
export function getActiveNavItems(): NavItem[] {
  return MAIN_NAV_ITEMS.filter(item => item.isPublishable);
}
