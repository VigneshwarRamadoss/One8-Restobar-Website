import Link from 'next/link';
import Image from 'next/image';
import { getOperatingHours, getVenueContact } from '@/lib/cms/content-provider';
import { getActiveNavItems } from '@/lib/config/navigation';
import ReservationTrigger from '../reservation/ReservationTrigger';
import LiveStatus from './LiveStatus';
import styles from './Footer.module.css';

export default async function Footer() {
  const showCredit = true;
  const hours = await getOperatingHours();
  const contact = await getVenueContact();
  const navItems = getActiveNavItems();

  // Strip internal draft labels in production
  const cleanAddress = contact.address && !contact.address.includes('[DRAFT') ? contact.address : null;
  const cleanCity = contact.city && !contact.city.includes('[DRAFT') ? contact.city : null;
  const cleanHours = hours.hoursDetail && !hours.hoursDetail.includes('[DRAFT') ? hours.hoursDetail : null;

  return (
    <footer className={styles.footer} data-theme="night">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h2 className={styles.logo}>One 8 Restobar</h2>
            {(cleanAddress || cleanCity) && (
              <address className={styles.address}>
                {cleanAddress && <p>{cleanAddress}</p>}
                {cleanCity && <p>{cleanCity}</p>}
                {contact.mapsUrl && (
                  <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Get directions
                  </a>
                )}
              </address>
            )}
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>Opening Hours</h3>
            <div className={styles.hoursStatus}>
              <LiveStatus />
            </div>
            {cleanHours ? (
              <p className={styles.hoursDetail}>{cleanHours}</p>
            ) : (
              <p className={styles.hoursDetail}>Hours available upon reservation enquiry.</p>
            )}
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>Navigation</h3>
            <nav aria-label="Footer navigation">
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {navItems.map(item => (
                  <li key={item.href}>
                    <Link href={item.href} className={styles.link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={`${styles.column} ${styles.reserveColumn}`}>
            <ReservationTrigger variant="secondary" href={contact.openTableUrl} />
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <Link href="/privacy" className={styles.link}>Datenschutz</Link>
            <span aria-hidden="true">|</span>
            <Link href="/legal" className={styles.link}>Impressum</Link>
            <span aria-hidden="true">|</span>
            <span>© {new Date().getFullYear()} One 8 Restobar</span>
          </div>

          {showCredit && (
            <div className={styles.credit}>
              <a href="https://thedot.com" target="_blank" rel="noopener noreferrer" aria-label="Website design by The Dot company">
                Website design by The Dot company{' '}
                <Image src="/the-dot-logo.svg" alt="The Dot logo" width={14} height={14} className={styles.dotLogo} aria-hidden="true" />
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
