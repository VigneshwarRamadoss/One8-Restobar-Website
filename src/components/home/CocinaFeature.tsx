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
             <div className={styles.placeholder} aria-hidden="true">
               <span>Asset Required: Kitchen Team / Process (Portrait)</span>
             </div>
          </div>
          {/* Shot ID: 20g_kitchen_action_detail_02 */}
          <div className={`${styles.mediaFrame} ${styles.detail}`}>
             <div className={styles.placeholder} aria-hidden="true">
               <span>Asset Required: Process Detail</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
