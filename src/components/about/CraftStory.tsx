import Image from 'next/image';
import PrevisualBadge from '../global/PrevisualBadge';
import styles from './CraftStory.module.css';

export default function CraftStory() {

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
            <Image
              src="/images/previsual/12-about-craft-reference.png"
              alt="Detail shot of hands preparing a dish, highlighting culinary craft, steam, ceramic and metal"
              fill
              style={{ objectFit: 'cover', objectPosition: '50% 58%' }}
              sizes="(max-width: 1199px) 100vw, 50vw"
              loading="lazy"
              quality={88}
            />
            <PrevisualBadge />
          </div>

          <div className={`${styles.mediaFrame} ${styles.detail}`}>
            <Image
              src="/images/previsual/09-kitchen-process-detail.png"
              alt=""
              fill
              style={{ objectFit: 'cover', objectPosition: '58% 50%' }}
              sizes="(max-width: 1199px) 100vw, 40vw"
              loading="lazy"
              quality={88}
            />
            <PrevisualBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
