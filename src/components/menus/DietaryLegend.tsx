import styles from './DietaryLegend.module.css';

export default function DietaryLegend() {
  return (
    <div className={styles.legend} aria-label="Dietary markers legend">
      <span className={styles.title}>Dietary Keys:</span>
      <ul className={styles.list}>
        <li className={styles.item}>
          <abbr title="Vegetarian" className={styles.abbr}>V</abbr> Vegetarian
        </li>
        <li className={styles.item}>
          <abbr title="Vegan" className={styles.abbr}>VG</abbr> Vegan
        </li>
        <li className={styles.item}>
          <abbr title="Gluten-free" className={styles.abbr}>GF</abbr> Gluten-free
        </li>
      </ul>
    </div>
  );
}
