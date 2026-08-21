import Link from 'next/link';
import { getCleanContact } from '@/lib/cms/publication-safety';
import type { VenueContact } from '@/lib/cms/types';
import styles from './ContactActions.module.css';

interface Props {
  contact: VenueContact;
}

export default function ContactActions({ contact }: Props) {
  const cleanContact = getCleanContact(contact);

  return (
    <section className={styles.section} aria-labelledby="contact-title">
      <div className={styles.frame}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Direct Channels</p>
          <h2 id="contact-title" className={styles.title}>
            Contact & Enquiries
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Channel 1: Telephone */}
          <div className={styles.item}>
            <span className={styles.itemLabel}>Direct Line</span>
            <h3 className={styles.itemTitle}>Telephone enquiries</h3>
            <p className={styles.description}>
              For same-day table availability, dietary consultations, or general reception assistance.
            </p>
            {cleanContact.phone ? (
              <a href={`tel:${cleanContact.phone}`} className={styles.link}>
                Call {cleanContact.phone} <span aria-hidden="true">→</span>
              </a>
            ) : (
              <p className={styles.description}>
                Direct telephone line details available upon booking confirmation.
              </p>
            )}
          </div>

          {/* Channel 2: Email */}
          <div className={styles.item}>
            <span className={styles.itemLabel}>General Desk</span>
            <h3 className={styles.itemTitle}>Email correspondence</h3>
            <p className={styles.description}>
              For guest feedback, press enquiries, corporate partnerships, or general questions.
            </p>
            {cleanContact.email ? (
              <a href={`mailto:${cleanContact.email}`} className={styles.link}>
                Email {cleanContact.email} <span aria-hidden="true">→</span>
              </a>
            ) : (
              <p className={styles.description}>
                Email channel details available upon grand opening announcement.
              </p>
            )}
          </div>

          {/* Channel 3: Table Reservations */}
          <div className={styles.item}>
            <span className={styles.itemLabel}>Dining</span>
            <h3 className={styles.itemTitle}>Table reservations</h3>
            <p className={styles.description}>
              Reserve a table online for groups up to 8 guests. For larger parties, please submit an event enquiry.
            </p>
            {cleanContact.openTableUrl ? (
              <a
                href={cleanContact.openTableUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Reserve via OpenTable <span aria-hidden="true">↗</span>
              </a>
            ) : (
              <Link href="/events" className={styles.link}>
                Request table reservation <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>

          {/* Channel 4: Private Events */}
          <div className={styles.item}>
            <span className={styles.itemLabel}>Gatherings</span>
            <h3 className={styles.itemTitle}>Events & Private Dining</h3>
            <p className={styles.description}>
              From intimate private dining rooms to full venue exclusivity, tell us what you are planning.
            </p>
            <Link href="/events" className={styles.link}>
              Start an event enquiry <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
