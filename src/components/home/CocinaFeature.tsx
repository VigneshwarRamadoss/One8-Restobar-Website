import Image from 'next/image';
import PrevisualBadge from '../global/PrevisualBadge';
import styles from './CocinaFeature.module.css';

export default function CocinaFeature() {
  return (
    <section className={styles.section} aria-labelledby="craft-feature-title" data-theme="night">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 id="craft-feature-title" className={styles.title}>Craft & Kitchen</h2>
          <p className={styles.text}>
            Our kitchen runs on a simple philosophy: respect the ingredient, master the technique, 
            and let the fire do the rest. The focus is on authentic culinary methods, 
            executed with precision that honors every element on the plate.
          </p>
        </div>
        
        <div className={styles.diptych}>
          {/* Shot ID: 20g_kitchen_portrait_action_01 */}
          <div className={`${styles.mediaFrame} ${styles.portrait}`}>
             <Image
               src="/images/previsual/08-kitchen-plating-portrait.png"
               alt="A cook finishes a plate at the kitchen pass."
               fill
               style={{ objectFit: 'cover' }}
               sizes="(max-width: 767px) 100vw, 50vw"
               loading="lazy"
             />
             <PrevisualBadge />
          </div>
          {/* Shot ID: 20g_kitchen_action_detail_02 */}
          <div className={`${styles.mediaFrame} ${styles.detail}`}>
             <Image
               src="/images/previsual/09-kitchen-process-detail.png"
               alt=""
               fill
               style={{ objectFit: 'cover' }}
               sizes="(max-width: 767px) 100vw, 33vw"
               loading="lazy"
             />
             <PrevisualBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
