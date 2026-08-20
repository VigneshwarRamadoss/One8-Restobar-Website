import styles from './AllergenNotice.module.css';

export default function AllergenNotice() {
  return (
    <aside className={styles.notice} aria-label="Allergen and cross-contact information">
      <h3 className={styles.title}>Allergen & Dietary Information</h3>
      <p className={styles.text}>
        Dietary markers are provided as general guidance. Please inform our team about allergies or dietary requirements before ordering. Cross-contact may occur in our kitchen. Prices are shown in Indian rupees. Applicable taxes are added as required.
      </p>
    </aside>
  );
}
