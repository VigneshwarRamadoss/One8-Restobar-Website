import Link from 'next/link';
import Image from 'next/image';
import PrevisualBadge from '../global/PrevisualBadge';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-heading">
      {/* H00: First Paint (Poster) */}
      <div className={styles.mediaStage}>
        <Image
          src="/images/previsual/01-home-hero-wide.png"
          alt=""
          fill
          className={styles.heroImage}
          sizes="100vw"
          preload={true}
          quality={88}
        />
        <PrevisualBadge />
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
          <Link href="/menus" className={styles.menuLink}>
            Explore the menu
          </Link>
        </div>
      </div>
    </section>
  );
}
