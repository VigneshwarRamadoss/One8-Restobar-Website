'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import ActiveLink from './ActiveLink';
import ReservationTrigger from '../reservation/ReservationTrigger';
import { NavItem } from '@/lib/config/navigation';
import styles from './Header.module.css';

interface MobileNavigationProps {
  activeNavItems: NavItem[];
}

export default function MobileNavigation({ activeNavItems }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleCloseMenu = useCallback(() => {
    setIsOpen(false);
    toggleButtonRef.current?.focus();
  }, []);

  // Body scroll lock & focus management when mobile menu opens/closes
  useEffect(() => {
    if (!isOpen) return;

    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on open
    const focusTimer = setTimeout(() => closeButtonRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = originalStyle;
      clearTimeout(focusTimer);
    };
  }, [isOpen]);

  // Focus trap & Escape key listener for mobile modal
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseMenu();
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
  }, [isOpen, handleCloseMenu]);

  return (
    <>
      <button
        ref={toggleButtonRef}
        type="button"
        className={styles.mobileMenuToggle}
        onClick={() => setIsOpen(true)}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-modal"
        aria-label="Open navigation menu"
      >
        Menu
      </button>

      {isOpen && (
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
              {activeNavItems.map(item => (
                <li key={item.href}>
                  <ActiveLink
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={handleCloseMenu}
                  >
                    {item.label}
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.mobileMenuFooter}>
            <ReservationTrigger variant="primary" className={styles.mobileCTA} />
          </div>
        </div>
      )}
    </>
  );
}
