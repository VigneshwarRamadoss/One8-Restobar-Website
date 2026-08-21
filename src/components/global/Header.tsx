'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ReservationCTA from './ReservationCTA';
import LocaleSwitch from './LocaleSwitch';
import { getActiveNavItems } from '@/lib/config/navigation';
import styles from './Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const activeNavItems = getActiveNavItems();
  const isHomePage = pathname === '/';

  // Scroll listener for transparent header on homepage
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure route changes and refreshes always start cleanly at the top of the page
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.history.scrollRestoration = 'manual';
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, [pathname]);

  // Body scroll lock & focus management when mobile menu opens/closes
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Focus close button on open
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Focus trap & Escape key listener for mobile modal
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        toggleButtonRef.current?.focus();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;

        const firstElement = focusables[0];
        const lastElement = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const handleCloseMenu = () => {
    setIsMobileMenuOpen(false);
    toggleButtonRef.current?.focus();
  };

  const isOverlay = isHomePage && !isScrolled;
  const headerClass = `${styles.header} ${isOverlay ? styles.transparent : styles.scrolled}`;

  return (
    <>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <header className={headerClass}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo} aria-label="One 8 Restobar homepage">
            <span className={styles.logoMark}>One 8</span>
          </Link>

          <nav className={styles.desktopNav} aria-label="Main navigation">
            <ul className={styles.navList}>
              {activeNavItems.map(item => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={styles.navLink}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.actions}>
            <LocaleSwitch />
            <ReservationCTA variant="nav" className={styles.desktopCTA} />

            <button
              ref={toggleButtonRef}
              type="button"
              className={styles.mobileMenuToggle}
              onClick={() => setIsMobileMenuOpen(true)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-modal"
              aria-label="Open navigation menu"
            >
              Menu
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div
            id="mobile-nav-modal"
            ref={modalRef}
            className={styles.mobileMenuModal}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className={styles.mobileMenuHeader}>
              <span className={styles.logoText}>One 8</span>
              <button
                ref={closeButtonRef}
                type="button"
                className={styles.mobileMenuClose}
                onClick={handleCloseMenu}
                aria-label="Close navigation menu"
              >
                Close
              </button>
            </div>
            <nav className={styles.mobileNav} aria-label="Mobile main navigation">
              <ul className={styles.mobileNavList}>
                {activeNavItems.map(item => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={styles.mobileNavLink}
                        aria-current={isActive ? 'page' : undefined}
                        onClick={handleCloseMenu}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <div className={styles.mobileMenuFooter}>
              <ReservationCTA variant="primary" className={styles.mobileCTA} />
            </div>
          </div>
        )}
      </header>
    </>
  );
}
