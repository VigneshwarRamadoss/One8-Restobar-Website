'use client';

import { BookingDetails } from './reservation.types';
import styles from './reservation.module.css';

interface Props {
  details: Partial<BookingDetails>;
  onChangeDetail: (field: keyof BookingDetails, value: string | number | boolean) => void;
  errors: Record<string, string[]>;
}

export default function ReservationStepDetails({ details, onChangeDetail, errors }: Props) {
  return (
    <div className={styles.fieldGroup}>
      <span className={styles.label}>04 — Guest Details</span>

      {/* Honeypot field for spam prevention */}
      <div className={styles.visuallyHidden} aria-hidden="true">
        <label htmlFor="res-_honey">Do not fill this field</label>
        <input
          type="text"
          id="res-_honey"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          value={details._honey || ''}
          onChange={e => onChangeDetail('_honey', e.target.value)}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="res-name" className={styles.label}>Full Name *</label>
        <input
          type="text"
          id="res-name"
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
          placeholder="First and last name"
          value={details.name || ''}
          onChange={e => onChangeDetail('name', e.target.value)}
          required
        />
        {errors.name && <span className={styles.errorText}>{errors.name[0]}</span>}
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="res-email" className={styles.label}>Email Address *</label>
        <input
          type="email"
          id="res-email"
          className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
          placeholder="name@domain.com"
          value={details.email || ''}
          onChange={e => onChangeDetail('email', e.target.value)}
          required
        />
        {errors.email && <span className={styles.errorText}>{errors.email[0]}</span>}
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="res-phone" className={styles.label}>Telephone Number *</label>
        <input
          type="tel"
          id="res-phone"
          className={`${styles.input} ${errors.phone ? styles.inputError : ''}`}
          placeholder="+91 98765 43210"
          value={details.phone || ''}
          onChange={e => onChangeDetail('phone', e.target.value)}
          required
        />
        {errors.phone && <span className={styles.errorText}>{errors.phone[0]}</span>}
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="res-occasion" className={styles.label}>Occasion (Optional)</label>
        <select
          id="res-occasion"
          className={styles.select}
          value={details.occasion || ''}
          onChange={e => onChangeDetail('occasion', e.target.value)}
        >
          <option value="">Select an occasion</option>
          <option value="birthday">Birthday Celebration</option>
          <option value="anniversary">Anniversary</option>
          <option value="business">Business Dinner</option>
          <option value="casual">Casual Dining</option>
          <option value="other">Special Event</option>
        </select>
      </div>

      <div className={styles.fieldGroup}>
        <label htmlFor="res-note" className={styles.label}>Special Requests / Dietary Notes (Optional)</label>
        <textarea
          id="res-note"
          className={styles.textarea}
          rows={3}
          placeholder="Dietary requirements, seating preferences, or accessibility needs."
          value={details.note || ''}
          onChange={e => onChangeDetail('note', e.target.value)}
        />
      </div>

      <div style={{ marginTop: '0.5rem' }}>
        <label style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', cursor: 'pointer', fontSize: '0.8125rem' }}>
          <input
            type="checkbox"
            id="res-consent"
            checked={Boolean(details.consent)}
            onChange={e => onChangeDetail('consent', e.target.checked)}
            required
            style={{ marginTop: '3px' }}
          />
          <span>
            I agree that One 8 Restobar may process my contact details to confirm this table reservation. *
          </span>
        </label>
        {errors.consent && <span className={styles.errorText}>{errors.consent[0]}</span>}
      </div>
    </div>
  );
}
