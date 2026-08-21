'use client';

import Link from 'next/link';
import styles from './reservation.module.css';

interface Props {
  partySize: number;
  experienceId: string;
  maxPartySize: number;
  onSelectPartySize: (size: number) => void;
  onSelectExperience: (id: string) => void;
  onCloseModal?: () => void;
}

const experiences = [
  { id: 'dining', title: 'The Dining Room', desc: 'Shared plates & dinner' },
  { id: 'bar', title: 'Cocktail Bar', desc: 'Craft pours & social' },
  { id: 'terrace', title: 'Outdoor Terrace', desc: 'Al fresco dining' },
  { id: 'private-events', title: 'Private Lounge', desc: 'Group celebrations' },
  { id: 'any', title: 'No Preference', desc: 'First available table' },
];

export default function ReservationStepParty({
  partySize,
  experienceId,
  maxPartySize,
  onSelectPartySize,
  onSelectExperience,
  onCloseModal,
}: Props) {
  const isLargeParty = partySize > maxPartySize;

  return (
    <div className={styles.fieldGroup}>
      <label className={styles.label}>02 — Guests & Seating Preference *</label>

      {/* Party Size Selector */}
      <div style={{ marginBottom: '1.25rem' }}>
        <span className={styles.label} style={{ fontSize: '0.8125rem', fontWeight: 500 }}>
          Number of Guests
        </span>
        <div className={styles.gridChoices} style={{ marginTop: '0.5rem' }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <button
              key={num}
              type="button"
              className={`${styles.choiceBtn} ${partySize === num ? styles.choiceBtnSelected : ''}`}
              onClick={() => onSelectPartySize(num)}
            >
              {num === 9 ? '9+' : `${num} ${num === 1 ? 'Guest' : 'Guests'}`}
            </button>
          ))}
        </div>
      </div>

      {/* Large Party Redirect Warning */}
      {isLargeParty && (
        <div className={styles.errorSummary} style={{ marginBottom: '1rem', backgroundColor: 'var(--paper-50)' }}>
          <div className={styles.errorSummaryTitle} style={{ color: 'var(--ink-950)' }}>
            Large Group Booking (9+ Guests)
          </div>
          <p style={{ margin: '0 0 0.75rem', fontSize: '0.875rem', color: 'var(--mineral-700)' }}>
            For groups larger than {maxPartySize} guests, please submit an enquiry through our Events team to ensure proper space allocation.
          </p>
          <Link
            href="/events"
            className={styles.nextBtn}
            onClick={onCloseModal}
            style={{ width: '100%', textDecoration: 'none' }}
          >
            Plan an Event Enquiry ↗
          </Link>
        </div>
      )}

      {/* Experience Preference */}
      {!isLargeParty && (
        <div>
          <span className={styles.label} style={{ fontSize: '0.8125rem', fontWeight: 500 }}>
            Seating Area
          </span>
          <div className={styles.gridChoices} style={{ marginTop: '0.5rem' }}>
            {experiences.map(exp => (
              <button
                key={exp.id}
                type="button"
                className={`${styles.choiceBtn} ${experienceId === exp.id ? styles.choiceBtnSelected : ''}`}
                onClick={() => onSelectExperience(exp.id)}
                style={{ textAlign: 'center', padding: '0.625rem' }}
              >
                <span>{exp.title}</span>
                <span style={{ fontSize: '0.6875rem', opacity: 0.8, marginTop: '2px' }}>{exp.desc}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
