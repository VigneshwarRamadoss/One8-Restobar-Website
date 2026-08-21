import styles from './reservation.module.css';

interface ErrorSummaryProps {
  errors: Record<string, string[]>;
  errorMessage?: string | null;
}

export function ReservationErrorSummary({ errors, errorMessage }: ErrorSummaryProps) {
  const errorKeys = Object.keys(errors);
  if (errorKeys.length === 0 && !errorMessage) return null;

  return (
    <div className={styles.errorSummary} role="alert" aria-live="assertive" tabIndex={-1}>
      <div className={styles.errorSummaryTitle}>Please review the following requirements:</div>
      {errorMessage && <p style={{ margin: '0 0 0.5rem', fontSize: '0.875rem' }}>{errorMessage}</p>}
      {errorKeys.length > 0 && (
        <ul className={styles.errorSummaryList}>
          {errorKeys.map(key => (
            <li key={key}>{errors[key][0]}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function ReservationSkeleton() {
  return (
    <div className={styles.body} style={{ opacity: 0.6 }} aria-busy="true">
      <div style={{ height: '44px', backgroundColor: 'var(--sand-500)', borderRadius: '2px' }} />
      <div style={{ height: '120px', backgroundColor: 'var(--sand-500)', borderRadius: '2px' }} />
      <div style={{ height: '48px', backgroundColor: 'var(--sand-500)', borderRadius: '2px' }} />
    </div>
  );
}
