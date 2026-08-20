import styles from './DraftContentNotice.module.css';

interface Props {
  message?: string;
}

export default function DraftContentNotice({ message }: Props) {
  return (
    <div className={styles.notice} role="note" aria-label="Development content status">
      <span className={styles.badge}>DEVELOPMENT DRAFT</span>
      <p className={styles.text}>
        {message || 'This menu features temporary development data and unverified prices. Operational content, dietary claims, and pricing require client and legal sign-off before production release.'}
      </p>
    </div>
  );
}
