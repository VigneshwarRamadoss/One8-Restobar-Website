import { getOperatingHours, getVenueContact } from '@/lib/cms/content-provider';
import ReservationTrigger from '../reservation/ReservationTrigger';
import styles from './VisitPanel.module.css';

export default async function VisitPanel() {
  const hours = await getOperatingHours();
  const contact = await getVenueContact();

  return (
    <section className={styles.section} aria-labelledby="visit-panel-title">
      <div className={styles.container}>
        <h2 id="visit-panel-title" className={styles.title}>Visit Us</h2>
        
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.label}>Location</h3>
            <address className={styles.address}>
              <p>{contact.address || '[DRAFT - Address Pending]'}</p>
              {contact.city && <p>{contact.city}</p>}
              <div className={styles.transport}>
                <p><strong>Accessibility / Transit:</strong> [DRAFT - Logistics Pending Confirmation]</p>
              </div>
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
              <span className={styles.statusLabel}>{hours.label}</span>
            </div>
            <p className={styles.hoursDetail}>{hours.hoursDetail}</p>
          </div>

          <div className={`${styles.column} ${styles.contactColumn}`}>
            <h3 className={styles.label}>Contact</h3>
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
            <div className={styles.ctaWrapper}>
              <ReservationTrigger variant="primary" href={contact.openTableUrl} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
