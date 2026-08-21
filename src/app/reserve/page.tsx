import { Metadata } from 'next';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import ReservationTrigger from '@/components/reservation/ReservationTrigger';
import { getReservationConfig } from '@/lib/reservation/reservation-config';
import styles from './ReservePage.module.css';

export const metadata: Metadata = {
  title: 'Reserve a Table | One 8 Restobar',
  description: 'Book your dining table or explore private dining options at One 8 Restobar.',
  alternates: {
    canonical: '/reserve',
  },
};

export default function ReservePage() {
  const config = getReservationConfig();

  return (
    <>
      <Header />
      <main id="main-content" className={styles.page}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <p className={styles.eyebrow}>RESERVATIONS</p>
            <h1 className={styles.title}>Reserve your table.</h1>
            <p className={styles.lead}>
              Choose your preferred date, party size and time. Your reservation is confirmed only after availability has been verified.
            </p>
          </div>

          <div className={styles.formCard}>
            <p style={{ fontSize: '0.9375rem', color: 'var(--mineral-700)', margin: 0 }}>
              Launch the interactive reservation system or reach our hosting team directly.
            </p>

            <ReservationTrigger variant="primary" label="Open Reservation System" />

            {config.venuePhone && (
              <div style={{ marginTop: '1rem', borderTop: '1px solid var(--sand-500)', paddingTop: '1rem' }}>
                <strong>Direct Telephone Booking:</strong>
                <p style={{ margin: '0.25rem 0 0' }}>
                  <a href={`tel:${config.venuePhone}`} style={{ color: 'var(--ink-950)', textDecoration: 'underline' }}>
                    {config.venuePhone}
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
