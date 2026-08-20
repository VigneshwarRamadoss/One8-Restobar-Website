import { getCleanContact } from '@/lib/cms/publication-safety';
import type { VenueContact } from '@/lib/cms/types';
import styles from './ArrivalDetails.module.css';

interface Props {
  contact: VenueContact;
}

export default function ArrivalDetails({ contact }: Props) {
  const cleanContact = getCleanContact(contact);

  const hasAddress = Boolean(cleanContact.address);
  const hasMapsUrl = Boolean(cleanContact.mapsUrl);

  return (
    <section className={styles.section} aria-labelledby="arrival-title">
      <div className={styles.frame}>
        <div className={`${styles.grid} ${!hasMapsUrl && !hasAddress ? styles.gridSingle : ''}`}>
          <div>
            <div className={styles.header}>
              <p className={styles.eyebrow}>Location & Arrival</p>
              <h2 id="arrival-title" className={styles.title}>
                Getting to One 8
              </h2>
            </div>

            <div className={styles.detailsList}>
              {/* Address Block */}
              <div className={styles.block}>
                <span className={styles.blockLabel}>Street Address</span>
                {hasAddress ? (
                  <address className={styles.address}>
                    <p>{cleanContact.address}</p>
                    {cleanContact.city && <p>{cleanContact.city}</p>}
                  </address>
                ) : (
                  <p className={styles.text}>
                    Venue address details will be published upon grand opening. For private event directions, please contact our team directly.
                  </p>
                )}
                {hasMapsUrl && (
                  <a
                    href={cleanContact.mapsUrl!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Open in Google Maps ↗
                  </a>
                )}
              </div>

              {/* Transit & Access information only if clean */}
              <div className={styles.block}>
                <span className={styles.blockLabel}>Arrival & Entry</span>
                <p className={styles.text}>
                  Located in the dining district with ground-level step-free access to all primary dining rooms and bar areas.
                </p>
              </div>

              <div className={styles.block}>
                <span className={styles.blockLabel}>Parking & Valet</span>
                <p className={styles.text}>
                  Dedicated guest drop-off zone available at the main entrance. Nearby structured parking options available.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Location Card preview */}
          {hasMapsUrl ? (
            <div className={styles.mapCard}>
              <div className={styles.mapEmblem} aria-hidden="true">📍</div>
              <h3 className={styles.mapTitle}>One 8 Restobar</h3>
              <p className={styles.mapSub}>
                {cleanContact.address ? `${cleanContact.address}, ${cleanContact.city || ''}` : 'Location Map'}
              </p>
              <a
                href={cleanContact.mapsUrl!}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.mapBtn}
              >
                Open in Google Maps ↗
              </a>
              {cleanContact.isDraft && cleanContact.isDev && (
                <span className={styles.devBadge}>[PREVIEW: Map URL Configured]</span>
              )}
            </div>
          ) : (
            <div className={styles.mapCard}>
              <div className={styles.mapEmblem} aria-hidden="true">🏛️</div>
              <h3 className={styles.mapTitle}>One 8 Restobar</h3>
              <p className={styles.mapSub}>Location map will be activated upon publication.</p>
              {cleanContact.isDev && (
                <span className={styles.devBadge}>[PREVIEW: Awaiting Maps URL]</span>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
