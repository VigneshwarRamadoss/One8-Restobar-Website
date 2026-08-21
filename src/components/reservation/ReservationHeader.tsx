import styles from './reservation.module.css';

interface Props {
  step: number;
  onClose: () => void;
  isUnavailable?: boolean;
}

export default function ReservationHeader({ step, onClose, isUnavailable }: Props) {
  return (
    <div className={styles.header}>
      <div>
        <span className={styles.eyebrow}>RESERVATIONS</span>
        <h2 className={styles.title}>
          {isUnavailable ? 'Reservation Enquiries' : step === 5 ? 'Reservation Confirmed' : 'Reserve your table.'}
        </h2>
        <p className={styles.subtext}>
          {isUnavailable
            ? 'Contact our team directly for table bookings and private dining.'
            : step === 5
            ? 'Your table is confirmed. We look forward to hosting you.'
            : 'Choose your preferred date, party size and time.'}
        </p>
      </div>

      <button
        type="button"
        className={styles.closeButton}
        onClick={onClose}
        aria-label="Close reservation window"
      >
        ×
      </button>
    </div>
  );
}
