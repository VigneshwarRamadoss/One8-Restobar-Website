import { getCleanHours, getCleanContact } from '@/lib/cms/publication-safety';
import type { OperatingHours, VenueContact } from '@/lib/cms/types';
import styles from './VisitEssentials.module.css';

interface Props {
  hours: OperatingHours;
  contact: VenueContact;
}

export default function VisitEssentials({ hours, contact }: Props) {
  const cleanHours = getCleanHours(hours);
  const cleanContact = getCleanContact(contact);

  const hasAnyInfo = cleanHours.hoursDetail || cleanContact.address || cleanContact.phone;

  if (!hasAnyInfo) {
    return (
      <section className={styles.rail} aria-label="Visit overview">
        <div className={styles.frame}>
          <div className={styles.controlledState}>
            <p className={styles.value}>
              Operational details and schedule are currently being updated. For table enquiries and reservations, please reach out directly or check back shortly.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const isOpen = cleanHours.status === 'open_now';

  return (
    <section className={styles.rail} aria-label="Visit overview">
      <div className={styles.frame}>
        <div className={styles.grid}>
          {/* Item 1: Status & Today */}
          <div className={styles.item}>
            <span className={styles.label}>Venue Status</span>
            <div className={styles.statusIndicator}>
              <span className={`${styles.dot} ${isOpen ? styles.dotOpen : ''}`} aria-hidden="true" />
              <span>{isOpen ? 'Open Now' : 'Schedule'}</span>
            </div>
            {cleanHours.label && <p className={styles.value}>{cleanHours.label}</p>}
          </div>

          {/* Item 2: Hours */}
          <div className={styles.item}>
            <span className={styles.label}>Opening Schedule</span>
            <p className={styles.value}>
              {cleanHours.hoursDetail || 'Hours available upon reservation enquiry.'}
            </p>
          </div>

          {/* Item 3: Location / Directions */}
          <div className={styles.item}>
            <span className={styles.label}>Location</span>
            <address className={styles.value} style={{ fontStyle: 'normal' }}>
              {cleanContact.address ? (
                <>
                  <p className={styles.value}>{cleanContact.address}</p>
                  {cleanContact.city && <p className={styles.value}>{cleanContact.city}</p>}
                </>
              ) : (
                <p className={styles.value}>Location details available upon booking.</p>
              )}
            </address>
            {cleanContact.mapsUrl && (
              <a
                href={cleanContact.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Open in Google Maps ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
