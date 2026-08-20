import Link from 'next/link';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import ReservationCTA from '@/components/global/ReservationCTA';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.container}>
          <span className={styles.code}>404</span>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.description}>
            The page you are looking for does not exist or has moved. Please explore our menus or return to the homepage.
          </p>

          <div className={styles.actions}>
            <Link href="/" className={styles.primaryLink}>
              Return Home
            </Link>
            <Link href="/menus" className={styles.secondaryLink}>
              View Menus
            </Link>
            <ReservationCTA variant="secondary" />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
