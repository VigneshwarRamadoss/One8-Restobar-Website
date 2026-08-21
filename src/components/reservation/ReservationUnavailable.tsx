import Link from 'next/link';
import { ReservationConfig } from '@/lib/reservation/reservation-config';
import styles from './reservation.module.css';

interface Props {
  config: ReservationConfig;
  onClose: () => void;
}

export default function ReservationUnavailable({ config, onClose }: Props) {
  return (
    <div className={styles.body}>
      <div style={{ padding: '1.5rem', backgroundColor: 'var(--chalk-0)', border: '1px solid var(--sand-500)', borderRadius: '2px' }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', margin: '0 0 0.5rem' }}>
          Table Reservations
        </h3>
        <p style={{ fontSize: '0.9375rem', color: 'var(--mineral-700)', margin: 0 }}>
          Online reservations are currently unavailable or undergoing maintenance. Please reach our host team directly using the details below.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '0.5rem' }}>
        {config.venuePhone && (
          <div className={styles.fieldGroup}>
            <span className={styles.label}>Telephone</span>
            <a href={`tel:${config.venuePhone}`} className={styles.input} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              {config.venuePhone}
            </a>
          </div>
        )}

        {config.venueEmail && (
          <div className={styles.fieldGroup}>
            <span className={styles.label}>Email Enquiry</span>
            <a href={`mailto:${config.venueEmail}`} className={styles.input} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
              {config.venueEmail}
            </a>
          </div>
        )}

        <div className={styles.fieldGroup}>
          <span className={styles.label}>Private Events & Large Parties</span>
          <p style={{ fontSize: '0.875rem', color: 'var(--mineral-700)', margin: '0 0 0.5rem' }}>
            For exclusive hire or parties larger than {config.maxPartySize} guests, please submit an enquiry to our events team.
          </p>
          <Link href="/events" className={styles.nextBtn} onClick={onClose} style={{ textDecoration: 'none', width: '100%', justifyContent: 'center' }}>
            Plan an Event Enquiry ↗
          </Link>
        </div>
      </div>

      <button type="button" className={styles.choiceBtn} onClick={onClose} style={{ marginTop: '1rem' }}>
        Close
      </button>
    </div>
  );
}
