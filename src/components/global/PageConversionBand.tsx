import Link from 'next/link';
import ReservationCTA from './ReservationCTA';
import styles from './PageConversionBand.module.css';

interface SecondaryLink {
  label: string;
  href: string;
}

interface Props {
  eyebrow?: string;
  title?: string;
  lead?: string;
  primaryCtaHref?: string | null;
  secondaryLinks?: SecondaryLink[];
  theme?: 'light' | 'night';
}

export default function PageConversionBand({
  eyebrow = 'Plan an evening',
  title = 'Join us at One 8.',
  lead = 'Reserve a table in advance, explore our seasonal food menu, or get in touch for private gatherings.',
  primaryCtaHref,
  secondaryLinks = [
    { label: 'Explore the food menu', href: '/menus/food' },
    { label: 'Plan your visit', href: '/visit' },
  ],
  theme = 'light',
}: Props) {
  return (
    <section className={styles.section} data-theme={theme} aria-labelledby="conversion-title">
      <div className={styles.frame}>
        <div className={styles.content}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h2 id="conversion-title" className={styles.title}>{title}</h2>
          {lead && <p className={styles.lead}>{lead}</p>}

          <div className={styles.actions}>
            <ReservationCTA variant="primary" href={primaryCtaHref} className={styles.primaryBtn} />
            {secondaryLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.secondaryLink}>
                {link.label} <span aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
