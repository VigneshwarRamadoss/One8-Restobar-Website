import Link from 'next/link';
import ReservationCTA from '@/components/global/ReservationCTA';
import styles from './MenuUnavailableState.module.css';

interface Props {
  title?: string;
  message?: string;
}

export default function MenuUnavailableState({
  title = 'Menu Currently Unavailable',
  message = 'The menu you are looking for is not published or is undergoing seasonal revision. Please explore our available menus or contact our team directly.',
}: Props) {
  return (
    <div className={styles.container} role="alert">
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.message}>{message}</p>
      
      <div className={styles.actions}>
        <Link href="/menus" className={styles.primaryLink}>
          View all available menus
        </Link>
        <ReservationCTA variant="secondary" />
      </div>
    </div>
  );
}
