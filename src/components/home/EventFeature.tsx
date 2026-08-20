import Link from 'next/link';
import styles from './EventFeature.module.css';

export default function EventFeature() {
  return (
    <section className={styles.section} aria-labelledby="events-feature-title">
      <div className={styles.container}>
        <div className={styles.mediaFrame}>
          {/* Shot ID: 20g_events_group_setup_wide_01 */}
          <div className={styles.placeholder} aria-hidden="true">
            <span>Asset Required: Private Dining / Group Setup (Wide/Medium)</span>
          </div>
        </div>

        <div className={styles.content}>
          <h2 id="events-feature-title" className={styles.title}>Private Dining & Events</h2>
          <p className={styles.description}>
            Whether an intimate dinner or a full venue reception, 
            our spaces are configured to accommodate your event requirements.
          </p>

          <ul className={styles.capacityList}>
            <li>
              <span className={styles.capacityLabel}>Seated Dining</span>
              <span className={styles.capacityValue}>[DRAFT - Capacity Pending]</span>
            </li>
            <li>
              <span className={styles.capacityLabel}>Standing Reception</span>
              <span className={styles.capacityValue}>[DRAFT - Capacity Pending]</span>
            </li>
            <li>
              <span className={styles.capacityLabel}>Exclusive Hire</span>
              <span className={styles.capacityValue}>On request</span>
            </li>
          </ul>

          <Link href="/events" className={styles.link}>Plan an event</Link>
        </div>
      </div>
    </section>
  );
}
