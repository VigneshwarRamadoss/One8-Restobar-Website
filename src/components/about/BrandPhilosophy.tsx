import styles from './BrandPhilosophy.module.css';

export default function BrandPhilosophy() {
  return (
    <section className={styles.section} aria-labelledby="philosophy-title">
      <div className={styles.frame}>
        <div className={styles.rule} aria-hidden="true" />
        
        <div className={styles.grid}>
          <div className={styles.indexBlock}>
            <span className={styles.indexNumber}>01</span>
            <span className={styles.label}>Philosophy</span>
          </div>

          <div className={styles.content}>
            <h2 id="philosophy-title" className={styles.title}>
              Restrained by design, defined by detail.
            </h2>
            <p className={styles.narrative}>
              We approach hospitality without performance. Every room is arranged to bring people together, from quick aperitifs at the bar to unhurried dinners across the table. Every ingredient, glass, and surface is chosen with purpose, creating an atmosphere that feels welcoming from the moment you arrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
