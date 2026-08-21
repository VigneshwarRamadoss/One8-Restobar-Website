import { BookingDetails } from './reservation.types';
import styles from './reservation.module.css';

interface Props {
  details: Partial<BookingDetails>;
  onGoToStep: (step: number) => void;
  isDraftFixture?: boolean;
}

export default function ReservationSummary({ details, onGoToStep, isDraftFixture }: Props) {
  const experienceNames: Record<string, string> = {
    dining: 'Dining Room',
    bar: 'Cocktail Bar',
    terrace: 'Terrace',
    'private-events': 'Private Lounge',
    any: 'No Preference',
  };

  return (
    <div
      style={{
        padding: '0.875rem 1rem',
        backgroundColor: 'var(--chalk-0)',
        border: '1px solid var(--sand-500)',
        borderRadius: '2px',
        fontSize: '0.8125rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.375rem',
      }}
    >
      {isDraftFixture && (
        <span style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'var(--terracotta-600)' }}>
          [DEV FIXTURE DATA]
        </span>
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>
          <strong>Date:</strong> {details.date || 'Not selected'}
        </span>
        {details.date && (
          <button type="button" onClick={() => onGoToStep(1)} className={styles.backBtn} style={{ padding: 0, minHeight: 'auto' }}>
            Edit
          </button>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>
          <strong>Party:</strong> {details.partySize ? `${details.partySize} Guest(s)` : 'Not selected'} •{' '}
          {details.experienceId ? experienceNames[details.experienceId] || details.experienceId : ''}
        </span>
        {details.partySize && (
          <button type="button" onClick={() => onGoToStep(2)} className={styles.backBtn} style={{ padding: 0, minHeight: 'auto' }}>
            Edit
          </button>
        )}
      </div>

      {details.timeSlot && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>
            <strong>Time:</strong> {details.timeSlot}
          </span>
          <button type="button" onClick={() => onGoToStep(3)} className={styles.backBtn} style={{ padding: 0, minHeight: 'auto' }}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}
