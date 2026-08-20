import { getOperatingHours, getVenueContact } from '@/lib/cms/content-provider';
import ReservationCTA from '../global/ReservationCTA';
import LiveStatus from '../global/LiveStatus';
import styles from './DecisionRail.module.css';

export default async function DecisionRail() {
  const hours = await getOperatingHours();
  const contact = await getVenueContact();

  return (
    <div className={styles.rail}>
      <div className={styles.container}>
        <div className={styles.item}>
          <LiveStatus />
        </div>
        
        <div className={styles.item}>
          <span className={styles.label}>Location</span>
          <span className={styles.value}>{hours.location}</span>
        </div>

        <div className={styles.actions}>
          <ReservationCTA variant="secondary" href={contact.openTableUrl} />
          {contact.mapsUrl ? (
            <a 
              href={contact.mapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.link}
            >
              Directions
            </a>
          ) : (
            <span className={styles.disabledLink} title="Directions URL pending configuration">
              Directions <span className={styles.draftBadge}>[DRAFT]</span>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
