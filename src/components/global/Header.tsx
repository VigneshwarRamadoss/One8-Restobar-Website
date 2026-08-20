'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ReservationCTA from './ReservationCTA';
import LocaleSwitch from './LocaleSwitch';
import styles from './Header.module.css';

const NAV_ITEMS = [
  { label: 'Experiences', href: '/erleben' },
  { label: 'Menus', href: '/menus' },
  { label: 'Events', href: '/events' },
  { label: 'About One 8', href: '/about' },
  { label: 'Visit', href: '/besuch' }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Use transparent style ONLY over homepage hero; use solid high-contrast header on all other routes
  const isOverlay = isHomePage && !isScrolled;
  const headerClass = `${styles.header} ${isOverlay ? styles.transparent : styles.scrolled}`;

  return (
    <header className={headerClass}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="One 8 Restobar homepage">
          <span className={styles.logoMark}>One 8</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {NAV_ITEMS.map(item => (
              <li key={item.href}>
                <Link href={item.href} className={styles.navLink}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <LocaleSwitch />
          <ReservationCTA variant="nav" className={styles.desktopCTA} />
          
          <button 
            type="button"
            className={styles.mobileMenuToggle}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Open navigation menu"
          >
            Menu
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={styles.mobileMenuModal} role="dialog" aria-modal="true" aria-label="Mobile navigation">
          <div className={styles.mobileMenuHeader}>
            <span className={styles.logoText}>One 8</span>
            <button 
              type="button"
              className={styles.mobileMenuClose} 
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close navigation menu"
            >
              Close
            </button>
          </div>
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.mobileNavLink} onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.mobileMenuFooter}>
            <ReservationCTA variant="primary" className={styles.mobileCTA} />
          </div>
        </div>
      )}
    </header>
  );
}
