'use client';

import { TimeSlot } from '@/lib/reservation/reservation-provider';
import styles from './reservation.module.css';

interface Props {
  slots: TimeSlot[];
  selectedTime: string;
  onSelectTime: (time: string) => void;
  loading?: boolean;
  error?: string | null;
  isDraftFixture?: boolean;
}

export default function ReservationStepTime({
  slots,
  selectedTime,
  onSelectTime,
  loading,
  error,
  isDraftFixture,
}: Props) {
  const afternoonSlots = slots.filter(s => s.period === 'afternoon');
  const eveningSlots = slots.filter(s => s.period === 'evening');
  const lateSlots = slots.filter(s => s.period === 'late');

  if (loading) {
    return (
      <div className={styles.fieldGroup}>
        <span className={styles.label}>03 — Checking Availability…</span>
        <p style={{ fontSize: '0.875rem', color: 'var(--mineral-700)' }}>
          Retrieving live table availability for your requested date and party size.
        </p>
      </div>
    );
  }

  return (
    <div className={styles.fieldGroup}>
      <label className={styles.label}>03 — Select Time *</label>

      {isDraftFixture && (
        <div className={styles.devFixtureNotice}>
          [DEVELOPMENT FIXTURE — Simulated Availability Slots]
        </div>
      )}

      {error && (
        <div className={styles.errorSummary} style={{ marginBottom: '1rem' }}>
          <div className={styles.errorSummaryTitle}>Availability Notice</div>
          <p style={{ margin: 0, fontSize: '0.875rem' }}>{error}</p>
        </div>
      )}

      {slots.length === 0 && !error && (
        <p style={{ fontSize: '0.875rem', color: 'var(--mineral-700)' }}>
          No online availability was returned for this date. Please select another date or contact our team directly.
        </p>
      )}

      {eveningSlots.length > 0 && (
        <div style={{ marginBottom: '1rem' }}>
          <span className={styles.label} style={{ fontSize: '0.8125rem', color: 'var(--mineral-700)' }}>
            Evening (Dinner)
          </span>
          <div className={styles.gridChoices} style={{ marginTop: '0.375rem' }}>
            {eveningSlots.map(s => (
              <button
                key={s.time}
                type="button"
                className={`${styles.choiceBtn} ${selectedTime === s.time ? styles.choiceBtnSelected : ''} ${!s.available ? styles.choiceBtnDisabled : ''}`}
                onClick={() => s.available && onSelectTime(s.time)}
                disabled={!s.available}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {lateSlots.length > 0 && (
        <div style={{ marginBottom: '1rem' }}>
          <span className={styles.label} style={{ fontSize: '0.8125rem', color: 'var(--mineral-700)' }}>
            Late Evening
          </span>
          <div className={styles.gridChoices} style={{ marginTop: '0.375rem' }}>
            {lateSlots.map(s => (
              <button
                key={s.time}
                type="button"
                className={`${styles.choiceBtn} ${selectedTime === s.time ? styles.choiceBtnSelected : ''} ${!s.available ? styles.choiceBtnDisabled : ''}`}
                onClick={() => s.available && onSelectTime(s.time)}
                disabled={!s.available}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {afternoonSlots.length > 0 && (
        <div>
          <span className={styles.label} style={{ fontSize: '0.8125rem', color: 'var(--mineral-700)' }}>
            Afternoon
          </span>
          <div className={styles.gridChoices} style={{ marginTop: '0.375rem' }}>
            {afternoonSlots.map(s => (
              <button
                key={s.time}
                type="button"
                className={`${styles.choiceBtn} ${selectedTime === s.time ? styles.choiceBtnSelected : ''} ${!s.available ? styles.choiceBtnDisabled : ''}`}
                onClick={() => s.available && onSelectTime(s.time)}
                disabled={!s.available}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
