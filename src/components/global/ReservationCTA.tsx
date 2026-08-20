import Link from 'next/link';
import styles from './ReservationCTA.module.css';

interface Props {
  className?: string;
  variant?: 'primary' | 'secondary' | 'nav';
  href?: string | null;
}

export default function ReservationCTA({ className = '', variant = 'primary', href }: Props) {
  // Reservation URL is configuration-driven. If missing, show non-production indicator.
  const reservationUrl = href || process.env.NEXT_PUBLIC_RESERVATION_URL || null;
  const variantClass = styles[variant] || styles.primary;

  if (!reservationUrl) {
    return (
      <button 
        type="button"
        className={`${styles.cta} ${variantClass} ${styles.unconfigured} ${className}`}
        aria-label="Reserve a table (Configuration required)"
        title="Reservation link is unconfigured in development mode"
      >
        Reserve a table <span className={styles.draftBadge}>[DRAFT]</span>
      </button>
    );
  }

  return (
    <Link 
      href={reservationUrl}
      className={`${styles.cta} ${variantClass} ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reserve a table"
    >
      Reserve a table
    </Link>
  );
}
