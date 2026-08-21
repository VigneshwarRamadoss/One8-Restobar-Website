import styles from './reservation.module.css';

interface Props {
  confirmation: {
    bookingReference?: string;
    date?: string;
    time?: string;
    partySize?: number;
    experienceTitle?: string;
    venueAddress?: string;
    isDraftFixture?: boolean;
  };
  supportsModify?: boolean;
  supportsCancel?: boolean;
  onClose: () => void;
}

export default function ReservationConfirmation({
  confirmation,
  supportsModify,
  supportsCancel,
  onClose,
}: Props) {
  return (
    <div className={styles.body}>
      {confirmation.isDraftFixture && (
        <div className={styles.devFixtureNotice}>
          [DEVELOPMENT FIXTURE — Simulated Booking Confirmation]
        </div>
      )}

      <div style={{ padding: '1.5rem', backgroundColor: 'var(--chalk-0)', border: '1px solid var(--sand-500)', borderRadius: '2px' }}>
        <span style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--mineral-700)' }}>
          CONFIRMED BOOKING
        </span>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', margin: '0.5rem 0' }}>
          {confirmation.bookingReference || 'CONFIRMED'}
        </h3>
        <p style={{ fontSize: '0.875rem', color: 'var(--mineral-700)', margin: 0 }}>
          Please present this reference upon arrival. A confirmation email has been dispatched.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9375rem' }}>
        <div>
          <strong>Date:</strong> {confirmation.date}
        </div>
        <div>
          <strong>Time:</strong> {confirmation.time}
        </div>
        <div>
          <strong>Party Size:</strong> {confirmation.partySize} Guest(s)
        </div>
        <div>
          <strong>Seating Area:</strong> {confirmation.experienceTitle || 'The Dining Room'}
        </div>
        <div>
          <strong>Address:</strong> {confirmation.venueAddress || '18 Residency Road, Richmond Town, Bengaluru'}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1rem' }}>
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            confirmation.venueAddress || 'One 8 Restobar'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.nextBtn}
          style={{ textDecoration: 'none', justifyContent: 'center' }}
        >
          Get Directions ↗
        </a>

        {supportsModify && (
          <button type="button" className={styles.choiceBtn} onClick={() => alert('Please call the venue to modify your booking.')}>
            Modify Reservation
          </button>
        )}

        {supportsCancel && (
          <button type="button" className={styles.choiceBtn} onClick={() => alert('Please call the venue to cancel your booking.')}>
            Cancel Reservation
          </button>
        )}

        <button type="button" className={styles.choiceBtn} onClick={onClose}>
          Done
        </button>
      </div>
    </div>
  );
}
