import Link from 'next/link';
import { getOperatingHours, getVenueContact } from '@/lib/cms/content-provider';
import ReservationCTA from './ReservationCTA';
import LiveStatus from './LiveStatus';
import styles from './Footer.module.css';

export default async function Footer() {
  const showCredit = true; // Configurable flag per PRD / MASTER prompt
  const hours = await getOperatingHours();
  const contact = await getVenueContact();
  
  return (
    <footer className={styles.footer} data-theme="night">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h2 className={styles.logo}>One 8 Restobar</h2>
            <address className={styles.address}>
              <p>{contact.address || '[DRAFT - Address Pending]'}</p>
              {contact.city && <p>{contact.city}</p>}
              {contact.mapsUrl && (
                <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className={styles.link}>
                  Get directions
                </a>
              )}
            </address>
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>Opening Hours</h3>
            <div className={styles.hoursStatus}>
              <LiveStatus />
            </div>
            <p className={styles.hoursDetail}>{hours.hoursDetail}</p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.heading}>Contact</h3>
            {contact.phone ? (
              <p><a href={`tel:${contact.phone}`} className={styles.link}>{contact.phone}</a></p>
            ) : (
              <p className={styles.draftText}>Phone: [DRAFT - Pending]</p>
            )}
            {contact.email ? (
              <p><a href={`mailto:${contact.email}`} className={styles.link}>{contact.email}</a></p>
            ) : (
              <p className={styles.draftText}>Email: [DRAFT - Pending]</p>
            )}
          </div>
          
          <div className={`${styles.column} ${styles.reserveColumn}`}>
             <ReservationCTA variant="secondary" href={contact.openTableUrl} />
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <Link href="/impressum" className={styles.link}>Imprint</Link>
            <Link href="/datenschutz" className={styles.link}>Privacy Policy</Link>
          </div>
          
          {showCredit && (
            <div className={styles.credit}>
              <a href="https://thedot.com" target="_blank" rel="noopener noreferrer" aria-label="A digital experience by The Dot">
                A digital experience by The Dot <span className={styles.dot} aria-hidden="true"></span>
              </a>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
