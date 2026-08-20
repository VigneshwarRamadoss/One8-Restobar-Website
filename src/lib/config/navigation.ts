export interface NavItem {
  label: string;
  href: string;
  isPublishable: boolean;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/', isPublishable: true },
  { label: 'Menus', href: '/menus', isPublishable: true },
  { label: 'Experiences', href: '/experiences', isPublishable: true },
  { label: 'Events', href: '/events', isPublishable: true },
  { label: 'About', href: '/about', isPublishable: true },
  { label: 'Visit', href: '/visit', isPublishable: true },
];

/**
 * Returns active, publishable navigation items for public UI rendering.
 */
export function getActiveNavItems(): NavItem[] {
  return MAIN_NAV_ITEMS.filter(item => item.isPublishable);
}
