import MenuItem from './MenuItem';
import { MenuCategory as MenuCategoryType, DietaryMarker } from '@/lib/cms/content-provider';
import styles from './MenuCategory.module.css';

interface Props {
  category: MenuCategoryType;
  currency?: string;
  activeFilter?: 'ALL' | DietaryMarker;
}

export default function MenuCategory({ category, currency = 'EUR', activeFilter = 'ALL' }: Props) {
  // Filter items based on active dietary marker
  const filteredItems = category.menuItems.filter(item => {
    if (activeFilter === 'ALL') return true;
    return item.dietary?.includes(activeFilter);
  });

  if (filteredItems.length === 0) {
    return null; // Don't render empty category section when filtering
  }

  return (
    <section className={styles.section} aria-labelledby={`cat-title-${category.id}`}>
      <div className={styles.categoryHeader}>
        <h3 id={`cat-title-${category.id}`} className={styles.title}>
          {category.displayTitle}
        </h3>
      </div>

      <dl className={styles.itemList}>
        {filteredItems.map(item => (
          <MenuItem key={item.id} item={item} currency={currency} />
        ))}
      </dl>
    </section>
  );
}
