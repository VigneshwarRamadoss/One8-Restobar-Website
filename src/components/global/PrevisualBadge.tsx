import { isDevEnvironment } from '@/lib/cms/publication-safety';
import styles from './PrevisualBadge.module.css';

export default function PrevisualBadge() {
  const isDev = isDevEnvironment();

  if (!isDev) return null;

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
