'use client';

import { useState, useEffect, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

interface HeaderScrollWrapperProps {
  children: ReactNode;
}

export default function HeaderScrollWrapper({ children }: HeaderScrollWrapperProps) {
  const [isScrolled, setIsScrolled] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.scrollY > 50;
    }
    return false;
  });
  const pathname = usePathname();

  useEffect(() => {

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const isOverlay = pathname === '/' && !isScrolled;
  const headerClass = `${styles.header} ${isOverlay ? styles.transparent : styles.scrolled}`;

  return (
    <>
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>
      <header className={headerClass}>
        {isOverlay && <div className={styles.protectiveGradient} aria-hidden="true" />}
        <div className={styles.container}>
          {children}
        </div>
      </header>
    </>
  );
}
