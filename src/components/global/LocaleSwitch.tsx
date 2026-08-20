import styles from './LocaleSwitch.module.css';

export default function LocaleSwitch() {
  // As per FR-G04, hide the control until at least two complete locales exist.
  // Returning null or a visually hidden element for now.
  const hasAlternativeLocale = false;

  if (!hasAlternativeLocale) {
    return null;
  }

  return (
    <button className={styles.switch} aria-label="Sprache wechseln zu Englisch">
      EN
    </button>
  );
}
