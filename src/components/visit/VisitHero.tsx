import ReservationTrigger from '@/components/reservation/ReservationTrigger';
import { getCleanContact } from '@/lib/cms/publication-safety';
import type { VenueContact } from '@/lib/cms/types';
import styles from './VisitHero.module.css';

interface Props {
  contact: VenueContact;
}

export default function VisitHero({ contact }: Props) {
  const cleanContact = getCleanContact(contact);

  return (
    <section className={styles.hero} aria-labelledby="visit-hero-title">
      <div className={styles.frame}>
        <p className={styles.eyebrow}>Plan your visit</p>

        <div className={styles.grid}>
          <div>
            <h1 id="visit-hero-title" className={styles.title}>
              Visit One 8
            </h1>
          </div>

          <div className={styles.intro}>
            <p className={styles.lead}>
              Everything you need to know about finding us, opening hours, reservations, and getting in touch.
            </p>

            <div className={styles.actions}>
              <ReservationTrigger variant="primary" href={cleanContact.openTableUrl} className={styles.primaryBtn} />
              {cleanContact.mapsUrl && (
                <a
                  href={cleanContact.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.secondaryLink}
                >
                  Get directions <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
