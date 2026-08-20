import Link from 'next/link';
import ReservationCTA from '../global/ReservationCTA';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      {/* 
        H00: First Paint (Poster). 
        Since we lack assets, we use a neutral development placeholder.
        Shot ID: 20g_venue_evening_hero_wide_01
      */}
      <div className={styles.mediaStage}>
        <div className={styles.placeholder} aria-hidden="true">
          <span>Asset Required: Signature Hero Moment (Wide/Portrait)</span>
        </div>
        {/* Optional 20 degree reveal clip applied in CSS */}
        <div className={styles.mask} />
      </div>

      <div className={styles.content}>
        <div className={styles.textContent}>
          <h1 id="hero-heading" className={styles.title}>
            One 8 Restobar
          </h1>
          <p className={styles.subtitle}>
            Dinner, drinks and the energy between them.
          </p>
        </div>

        <div className={styles.actions}>
          <ReservationCTA variant="primary" />
          <Link href="/menus" className={styles.menuLink}>
            Explore the menu
          </Link>
        </div>
      </div>
    </section>
  );
}
