import styles from './PrevisualBadge.module.css';

export default function PrevisualBadge() {
  const shouldShowBadge = process.env.NEXT_PUBLIC_SHOW_PREVISUAL_BADGES === 'true';

  if (!shouldShowBadge) return null;

  return (
    <div 
      className={styles.badge} 
      aria-hidden="true" 
      style={{ pointerEvents: 'none' }}
    >
      PREVISUAL — CLIENT PHOTO REQUIRED
    </div>
  );
}
