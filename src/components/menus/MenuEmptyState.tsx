import styles from './MenuEmptyState.module.css';

interface Props {
  activeFilter: string;
  onResetFilter: () => void;
}

export default function MenuEmptyState({ activeFilter, onResetFilter }: Props) {
  return (
    <div className={styles.container} role="status">
      <h3 className={styles.title}>No menu items found</h3>
      <p className={styles.message}>
        No dishes in this menu currently match the selected <strong>{activeFilter}</strong> filter.
      </p>
      <button type="button" className={styles.resetButton} onClick={onResetFilter}>
        Show all menu items
      </button>
    </div>
  );
}
