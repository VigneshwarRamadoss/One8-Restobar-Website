import styles from './BrandProof.module.css';

export default function BrandProof() {
  return (
    <section className={styles.section} aria-labelledby="brand-proof-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 id="brand-proof-title" className="visually-hidden">Our Philosophy</h2>
          <p className={styles.text}>
            A contemporary restobar shaped around shared plates, crafted pours, and evenings that move at their own pace. 
            Every detail—from the kitchen pass to the reflective ambiance of the bar—is intentionally designed to 
            create an authentic hospitality experience.
          </p>
        </div>
        
        <div className={styles.mediaFrame}>
           {/* Shot ID: 20g_detail_evening_tactile_portrait_01 */}
           <div className={styles.placeholder} aria-hidden="true">
             <span>Asset Required: Tactile Detail (Portrait)</span>
           </div>
        </div>
      </div>
    </section>
  );
}
