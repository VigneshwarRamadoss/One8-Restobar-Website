import { isDevEnvironment } from '@/lib/cms/publication-safety';
import styles from './CraftStory.module.css';

export default function CraftStory() {
  const isDev = isDevEnvironment();

  return (
    <section className={styles.section} aria-labelledby="craft-story-title" data-theme="night">
      <div className={styles.frame}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Craft & Kitchen</p>
            <h2 id="craft-story-title" className={styles.title}>
              Precision in every execution.
            </h2>
          </div>

          <div>
            <p className={styles.lead}>
              Our kitchen operates on a simple premise: respect the ingredient, master the technique, and let heat and fire bring out the essential character of every dish.
            </p>
          </div>
        </div>

        <div className={styles.diptych} aria-hidden="true">
          <div className={`${styles.mediaFrame} ${styles.portrait}`}>
            <div className={styles.graphicContent}>
              <span className={styles.graphicTitle}>The Hearth</span>
              <span className={styles.graphicSub}>Kitchen & Process</span>
              {isDev && <span className={styles.devBadge}>[PREVIEW: Kitchen Imagery Pending]</span>}
            </div>
          </div>

          <div className={`${styles.mediaFrame} ${styles.detail}`}>
            <div className={styles.graphicContent}>
              <span className={styles.graphicTitle}>The Detail</span>
              <span className={styles.graphicSub}>Plating & Finish</span>
              {isDev && <span className={styles.devBadge}>[PREVIEW: Detail Imagery Pending]</span>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
