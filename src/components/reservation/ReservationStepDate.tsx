'use client';

import styles from './reservation.module.css';

interface Props {
  selectedDate: string;
  onSelectDate: (date: string) => void;
  error?: string;
}

export default function ReservationStepDate({ selectedDate, onSelectDate, error }: Props) {
  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className={styles.fieldGroup}>
      <label htmlFor="reservation-date" className={styles.label}>
        01 — Select Date *
      </label>
      <input
        type="date"
        id="reservation-date"
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        min={todayStr}
        value={selectedDate || todayStr}
        onChange={e => onSelectDate(e.target.value)}
        required
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
}
