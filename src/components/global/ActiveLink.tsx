'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface ActiveLinkProps {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function ActiveLink({ href, className, children, onClick }: ActiveLinkProps) {
  const pathname = usePathname();
  
  // Exact match for Home, prefix match for others (e.g. /menus, /experiences)
  // We make sure it's a path segment boundary to avoid partial matches
  // e.g. /menus should match /menus and /menus/tasting, but not /menus-something
  const isActive = href === '/' 
    ? pathname === '/' 
    : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className={className}
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
