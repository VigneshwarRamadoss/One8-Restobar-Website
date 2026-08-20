import Link from 'next/link';
import { isDevEnvironment } from '@/lib/cms/publication-safety';
import styles from './AboutHero.module.css';

export default function AboutHero() {
  const isDev = isDevEnvironment();

  return (
    <section className={styles.hero} aria-labelledby="about-hero-title">
      <div className={styles.frame}>
        <p className={styles.eyebrow}>About One 8</p>

        <div className={styles.heroGrid}>
          <div className={styles.content}>
            <h1 id="about-hero-title" className={styles.title}>
              One place.
              <span>Many reasons to stay.</span>
            </h1>

            <p className={styles.lead}>
              One 8 Restobar is a contemporary space shaped around shared plates, crafted pours, and evenings that move at their own pace.
            </p>

            <p className={styles.paragraph}>
              Hospitality here is intentional, calm, and detail-focused — built for conversation, quiet celebrations, and long tables that extend through the night.
            </p>

            <div className={styles.actions}>
              <Link href="/menus/food" className={styles.primaryLink}>
                Explore the menu
              </Link>
              <Link href="/visit" className={styles.secondaryLink}>
                Plan your visit <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className={styles.mediaStage} aria-hidden="true">
            <div className={styles.editorialGraphic}>
              <span className={styles.emblem}>18</span>
              <span className={styles.caption}>Atmosphere & Architecture</span>
              {isDev && <span className={styles.devBadge}>[PREVIEW: Photography Pending]</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
