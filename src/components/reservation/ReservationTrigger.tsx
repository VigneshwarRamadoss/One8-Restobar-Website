'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getReservationConfig } from '@/lib/reservation/reservation-config';
import ReservationDialog from './ReservationDialog';
import styles from './reservation.module.css';

interface Props {
  className?: string;
  variant?: 'primary' | 'secondary' | 'nav' | 'overlayTrigger';
  label?: string;
  href?: string | null;
}

export default function ReservationTrigger({
  className = '',
  variant = 'primary',
  label = 'Reserve a table',
  href,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const config = getReservationConfig();

  const variantClass = styles[variant] || styles.primary;

  // External mode with URL configured
  if (config.mode === 'external' && (href || config.externalUrl)) {
    return (
      <Link
        href={href || config.externalUrl!}
        className={`${styles.trigger} ${variantClass} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Reserve a table (opens external booking)"
      >
        <span>{label}</span>
        <span aria-hidden="true">↗</span>
      </Link>
    );
  }

  // Unavailable mode: trigger redirects to no-JS /reserve page or opens dialog fallback
  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <button
        type="button"
        className={`${styles.trigger} ${variantClass} ${className}`}
        onClick={handleClick}
        aria-label={label}
      >
        <span>{label}</span>
      </button>

      {isOpen && (
        <ReservationDialog
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          initialConfig={config}
        />
      )}
    </>
  );
}
