import Link from 'next/link';
import ReservationTrigger from '@/components/reservation/ReservationTrigger';
import { VenueContact } from '@/lib/cms/content-provider';
import styles from './VisitCTA.module.css';

interface Props {
  contact?: VenueContact | null;
}

export default function VisitCTA({ contact }: Props) {
  return (
    <section className={styles.section} aria-labelledby="visit-cta-title" data-theme="night">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 id="visit-cta-title" className={styles.title}>Join Us at One 8</h2>
          <p className={styles.description}>
            Experience our shared plates, signature pours, and ambient dining room in person.
          </p>
        </div>

        <div className={styles.actions}>
          <ReservationTrigger variant="primary" href={contact?.openTableUrl} />
          
          <Link href="/visit" className={styles.visitLink}>
            Plan your visit
          </Link>

          {contact?.mapsUrl && (
            <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className={styles.directionsLink}>
              Get directions
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
