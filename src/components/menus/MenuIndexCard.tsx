import Link from 'next/link';
import { Menu } from '@/lib/cms/content-provider';
import styles from './MenuIndexCard.module.css';

interface Props {
  menu: Menu;
  index: number;
}

export default function MenuIndexCard({ menu, index }: Props) {
  const numberLabel = (index + 1).toString().padStart(2, '0');
  const actionLabel = getMenuActionLabel(menu.slug);

  return (
    <article className={styles.card} aria-labelledby={`menu-card-title-${menu.slug}`}>
      <div className={styles.number}>{numberLabel}</div>
      
      <div className={styles.content}>
        <div className={styles.metaGroup}>
          <span className={styles.service}>{menu.serviceApplicability}</span>
          <span className={styles.date}>Updated {menu.effectiveDate}</span>
        </div>

        <h2 id={`menu-card-title-${menu.slug}`} className={styles.title}>
          <Link href={`/menus/${menu.slug}`} className={styles.titleLink}>
            {menu.title}
          </Link>
        </h2>

        <p className={styles.description}>{menu.description}</p>

        <div className={styles.actionRow}>
          <Link href={`/menus/${menu.slug}`} className={styles.actionLink}>
            {actionLabel}
          </Link>
        </div>
      </div>

      <div className={styles.mediaStage} aria-hidden="true">
        <div className={styles.placeholder}>
          <span>Asset Required: {menu.title} Cover</span>
        </div>
      </div>
    </article>
  );
}

function getMenuActionLabel(slug: string): string {
  switch (slug) {
    case 'food': return 'View the food menu';
    case 'drinks': return 'Explore drinks';
    case 'wine': return 'View the wine list';
    default: return 'View menu';
  }
}
