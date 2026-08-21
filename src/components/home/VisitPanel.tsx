import { getOperatingHours, getVenueContact } from '@/lib/cms/content-provider';
import ReservationTrigger from '../reservation/ReservationTrigger';
import styles from './VisitPanel.module.css';

export default async function VisitPanel() {
  const hours = await getOperatingHours();
  const contact = await getVenueContact();

  const addressText = contact.address && !contact.address.includes('[DRAFT') ? contact.address : 'Düsseldorf City Centre';
  const cityText = contact.city && !contact.city.includes('[DRAFT') ? contact.city : null;
  const statusLabel = hours.label && !hours.label.includes('[DRAFT') ? hours.label : 'Open for Evening Service';
  const hoursDetailText = hours.hoursDetail && !hours.hoursDetail.includes('[DRAFT') ? hours.hoursDetail : 'Mon - Sat: 17:30 - 01:00, Sun: Closed';

  return (
    <section className={styles.section} aria-labelledby="visit-panel-title">
      <div className={styles.container}>
        <h2 id="visit-panel-title" className={styles.title}>Visit Us</h2>
        
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.label}>Location</h3>
            <address className={styles.address}>
              <p>{addressText}</p>
              {cityText && <p>{cityText}</p>}
            </address>
            {contact.mapsUrl && (
              <a 
                href={contact.mapsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.link}
              >
                Get Directions
              </a>
            )}
          </div>

          <div className={styles.column}>
            <h3 className={styles.label}>Hours</h3>
            <div className={styles.status}>
              <span className={`${styles.indicator} ${hours.status === 'open_now' ? styles.success : styles.neutral}`} aria-hidden="true" />
              <span className={styles.statusLabel}>{statusLabel}</span>
            </div>
            <p className={styles.hoursDetail}>{hoursDetailText}</p>
          </div>

          <div className={`${styles.column} ${styles.contactColumn}`}>
            <h3 className={styles.label}>Contact & Reservations</h3>
            {contact.phone && !contact.phone.includes('[DRAFT') ? (
              <p><a href={`tel:${contact.phone}`} className={styles.link}>{contact.phone}</a></p>
            ) : null}
            {contact.email && !contact.email.includes('[DRAFT') ? (
              <p><a href={`mailto:${contact.email}`} className={styles.link}>{contact.email}</a></p>
            ) : null}
            <div className={styles.ctaWrapper}>
              <ReservationTrigger variant="primary" href={contact.openTableUrl} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
