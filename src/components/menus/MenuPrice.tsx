import { formatPrice } from '@/lib/cms/content-provider';
import styles from './MenuPrice.module.css';

interface Props {
  price: number;
  currency?: string;
  optionalPriceLabel?: string;
}

export default function MenuPrice({ price, currency = 'EUR', optionalPriceLabel }: Props) {
  const formattedDefault = formatPrice(price, currency);
  const displayText = optionalPriceLabel || formattedDefault;

  return (
    <span className={styles.price} aria-label={`Price: ${displayText}`}>
      {displayText}
    </span>
  );
}
