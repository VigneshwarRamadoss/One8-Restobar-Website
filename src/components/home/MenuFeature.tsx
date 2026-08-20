import Link from 'next/link';
import { getMenu, formatPrice } from '@/lib/cms/content-provider';
import styles from './MenuFeature.module.css';

export default async function MenuFeature() {
  const menu = await getMenu();
  const highlightCategory = menu.chapters[0]?.categories[0];

  return (
    <section className={styles.section} aria-labelledby="menu-feature-title" data-theme="warm">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.titleGroup}>
            <h2 id="menu-feature-title" className={styles.title}>Taste of One 8</h2>
            <p className={styles.meta}>Current {menu.title} — Updated {menu.effectiveDate}</p>
          </div>
          
          <div className={styles.actions}>
            <Link href="/menus/food" className={styles.link}>View the food menu</Link>
          </div>
        </div>

        <div className={styles.layout}>
          <div className={styles.menuSnippet}>
            <h3 className={styles.categoryTitle}>
              {highlightCategory?.displayTitle} {menu.isDraft && <span className={styles.draftBadge}>[DRAFT]</span>}
            </h3>
            {highlightCategory && (
              <dl className={styles.menuList}>
                {highlightCategory.menuItems.slice(0, 3).map(item => (
                  <div key={item.id} className={styles.menuItem}>
                    <dt className={styles.itemName}>
                      {item.name}
                    </dt>
                    <dd className={styles.itemDesc}>{item.description}</dd>
                    <dd className={styles.itemPrice}>
                      {item.variants.length > 0 
                        ? formatPrice(item.variants[0].price, menu.currency) 
                        : ''}
                      {item.variants.length > 1 && ' +'}
                    </dd>
                  </div>
                ))}
              </dl>
            )}
          </div>

          <div className={styles.mediaFrame}>
            {/* Shot ID: 20g_menu_detail_dish_square_01 */}
            <div className={styles.placeholder} aria-hidden="true">
              <span>Asset Required: Hero Dish (Square)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
