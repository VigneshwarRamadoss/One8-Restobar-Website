import { getOperatingHours } from '@/lib/cms/content-provider';
import styles from './LiveStatus.module.css';

export default async function LiveStatus() {
  const hours = await getOperatingHours();

  const isSuccess = hours.status === 'open_now';
  const statusClass = isSuccess ? styles.success : styles.neutral;

  return (
    <div className={styles.container}>
      <span className={`${styles.indicator} ${statusClass}`} aria-hidden="true" />
      <span className={styles.label}>{hours.label}</span>
    </div>
  );
}
