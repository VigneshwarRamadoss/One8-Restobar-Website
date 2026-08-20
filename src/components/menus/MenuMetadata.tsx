import styles from './MenuMetadata.module.css';

interface Props {
  serviceApplicability?: string[];
  effectiveDate?: string;
  lastUpdated?: string;
  currency: string;
}

export default function MenuMetadata({
  serviceApplicability,
  effectiveDate,
  lastUpdated,
  currency,
}: Props) {
  return (
    <div className={styles.container}>
      {serviceApplicability && (
        <div className={styles.item}>
          <span className={styles.label}>Service Period</span>
          <span className={styles.value}>{serviceApplicability.join(', ')}</span>
        </div>
      )}

      {effectiveDate && (
        <div className={styles.item}>
          <span className={styles.label}>Effective Season</span>
          <span className={styles.value}>{effectiveDate}</span>
        </div>
      )}

      {lastUpdated && (
        <div className={styles.item}>
          <span className={styles.label}>Last Updated</span>
          <span className={styles.value}>{lastUpdated}</span>
        </div>
      )}

      <div className={styles.item}>
        <span className={styles.label}>Prices</span>
        <span className={styles.value}>All prices in {currency} (exclusive of taxes)</span>
      </div>
    </div>
  );
}
