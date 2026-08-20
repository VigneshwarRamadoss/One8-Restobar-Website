/**
 * Format raw numerical price data using English (India) locale formatting and configured currency.
 */
export function formatPrice(price: number, currency: string = 'INR', locale: string = 'en-IN'): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    maximumFractionDigits: price % 1 === 0 ? 0 : 2,
  }).format(price);
}
