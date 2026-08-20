import { MenuItem as MenuItemType, formatPrice } from '@/lib/cms/content-provider';
import styles from './MenuItem.module.css';

interface Props {
  item: MenuItemType;
  currency?: string;
}

export default function MenuItem({ item, currency = 'INR' }: Props) {
  const isMultiVariant = item.variants.length > 1;

  return (
    <div className={styles.itemContainer} data-item-id={item.id}>
      <dt className={styles.nameRow}>
        <span className={styles.name}>{item.name}</span>
        
        {item.dietary && item.dietary.length > 0 && (
          <span className={styles.dietaryMarkers} aria-label={`Dietary tags: ${item.dietary.join(', ')}`}>
            {item.dietary.map(marker => (
              <abbr key={marker} title={getDietaryTitle(marker)} className={styles.marker}>
                {marker}
              </abbr>
            ))}
          </span>
        )}

        {item.status === 'source-draft' && <span className={styles.draftBadge}>[DRAFT]</span>}
        {item.availability === 'unavailable' && <span className={styles.draftBadge}>[UNAVAILABLE]</span>}
      </dt>

      {item.description && (
        <dd className={styles.description}>
          {item.description}
        </dd>
      )}

      {/* Render Single Variant Inline or Stacked Variants */}
      {!isMultiVariant && item.variants.length === 1 && (
        <dd className={styles.priceRow}>
          {item.variants[0].label && <span className={styles.variantLabel}>{item.variants[0].label} — </span>}
          <span>{formatPrice(item.variants[0].price, currency)}</span>
        </dd>
      )}

      {isMultiVariant && (
        <dd className={styles.variantsList}>
          {item.variants.map(variant => (
            <div key={variant.id} className={styles.variantRow}>
              <span className={styles.variantLabel}>{variant.label}</span>
              <span className={styles.variantPrice}>{formatPrice(variant.price, currency)}</span>
            </div>
          ))}
        </dd>
      )}
    </div>
  );
}

function getDietaryTitle(marker: string): string {
  switch (marker) {
    case 'V': return 'Vegetarian';
    case 'VG': return 'Vegan';
    case 'GF': return 'Gluten-free';
    default: return marker;
  }
}
