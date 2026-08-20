'use client';

import { useActionState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { submitEventEnquiry, type EventFormState } from '@/app/events/actions';
import { Experience } from '@/lib/cms/content-provider';
import styles from './EventEnquiryForm.module.css';

interface Props {
  spaces: Experience[];
}

const initialState: EventFormState = {
  success: false,
  message: '',
};

function errorId(field: string) {
  return `${field}-error`;
}

export default function EventEnquiryForm({ spaces }: Props) {
  const [state, formAction, pending] = useActionState(submitEventEnquiry, initialState);
  const feedbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (state.message) {
      feedbackRef.current?.focus();
    }
  }, [state]);

  if (state.success) {
    return (
      <div ref={feedbackRef} className={styles.successMessage} role="status" tabIndex={-1}>
        <span className={styles.successIndex}>Enquiry sent</span>
        <h3 className={styles.successTitle}>Thank you.</h3>
        <p>{state.message}</p>
        <div className={styles.successActions}>
          <Link href="/menus">Explore the menu</Link>
          <Link href="/visit">Plan your visit</Link>
        </div>
      </div>
    );
  }

  const describedBy = (field: string) => state.errors?.[field] ? errorId(field) : undefined;

  return (
    <form action={formAction} className={styles.form} noValidate>
      <div className={styles.formHeader}>
        <div>
          <span className={styles.formKicker}>Event enquiry</span>
          <h3>Tell us the essentials</h3>
        </div>
        <p>Fields marked * are required</p>
      </div>

      {state.message && (
        <div ref={feedbackRef} className={styles.errorSummary} role="alert" tabIndex={-1}>
          <strong>We could not send your enquiry.</strong>
          <p>{state.message}</p>
        </div>
      )}

      <div className={styles.visuallyHidden} aria-hidden="true">
        <label htmlFor="_honey">Do not fill this out</label>
        <input type="text" name="_honey" id="_honey" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
          <span>01</span>
          <span>Event essentials</span>
        </legend>

        <div className={styles.fieldGrid}>
          <div className={styles.field}>
            <label htmlFor="eventType">Event type *</label>
            <select
              name="eventType"
              id="eventType"
              required
              aria-invalid={Boolean(state.errors?.eventType)}
              aria-describedby={describedBy('eventType')}
            >
              <option value="">Choose an occasion</option>
              <option value="private_dining">Private dining</option>
              <option value="corporate">Corporate gathering</option>
              <option value="celebration">Celebration</option>
              <option value="reception">Reception</option>
              <option value="other">Something else</option>
            </select>
            {state.errors?.eventType && <span className={styles.errorText} id={errorId('eventType')}>{state.errors.eventType[0]}</span>}
          </div>

          {spaces.length > 0 && (
            <div className={styles.field}>
              <label htmlFor="space">Space preference</label>
              <select name="space" id="space">
                <option value="">No preference</option>
                {spaces.map(space => (
                  <option key={space.id} value={space.id}>{space.title}</option>
                ))}
              </select>
            </div>
          )}

          <div className={styles.field}>
            <label htmlFor="date">Preferred date *</label>
            <input
              type="date"
              name="date"
              id="date"
              required
              aria-invalid={Boolean(state.errors?.date)}
              aria-describedby={describedBy('date')}
            />
            {state.errors?.date && <span className={styles.errorText} id={errorId('date')}>{state.errors.date[0]}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="time">Approximate time *</label>
            <input
              type="time"
              name="time"
              id="time"
              required
              aria-invalid={Boolean(state.errors?.time)}
              aria-describedby={describedBy('time')}
            />
            {state.errors?.time && <span className={styles.errorText} id={errorId('time')}>{state.errors.time[0]}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="guests">Estimated guest count *</label>
            <input
              type="number"
              name="guests"
              id="guests"
              min="1"
              inputMode="numeric"
              placeholder="For example, 24"
              required
              aria-invalid={Boolean(state.errors?.guests)}
              aria-describedby={describedBy('guests')}
            />
            {state.errors?.guests && <span className={styles.errorText} id={errorId('guests')}>{state.errors.guests[0]}</span>}
          </div>
        </div>
      </fieldset>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
          <span>02</span>
          <span>Contact details</span>
        </legend>

        <div className={styles.fieldGrid}>
          <div className={styles.field}>
            <label htmlFor="name">Full name *</label>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              required
              aria-invalid={Boolean(state.errors?.name)}
              aria-describedby={describedBy('name')}
            />
            {state.errors?.name && <span className={styles.errorText} id={errorId('name')}>{state.errors.name[0]}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email address *</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              required
              aria-invalid={Boolean(state.errors?.email)}
              aria-describedby={describedBy('email')}
            />
            {state.errors?.email && <span className={styles.errorText} id={errorId('email')}>{state.errors.email[0]}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="phone">Phone number</label>
            <input type="tel" name="phone" id="phone" autoComplete="tel" />
          </div>

          <div className={styles.field}>
            <label htmlFor="company">Company</label>
            <input type="text" name="company" id="company" autoComplete="organization" />
          </div>

          <div className={`${styles.field} ${styles.fullWidth}`}>
            <label htmlFor="message">Anything else we should know?</label>
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Tell us about the occasion, preferred format, accessibility needs or anything that will help the team understand your plans."
            />
          </div>
        </div>
      </fieldset>

      <div className={styles.consentBlock}>
        <label className={styles.checkboxLabel} htmlFor="consent">
          <input
            type="checkbox"
            name="consent"
            id="consent"
            required
            aria-invalid={Boolean(state.errors?.consent)}
            aria-describedby={describedBy('consent')}
          />
          <span>
            I agree that One 8 may use these details to respond to my enquiry. Read the <Link href="/privacy">Privacy Policy</Link>. *
          </span>
        </label>
        {state.errors?.consent && <span className={styles.errorText} id={errorId('consent')}>{state.errors.consent[0]}</span>}
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.submitButton} disabled={pending} aria-disabled={pending}>
          <span>{pending ? 'Sending enquiry…' : 'Send enquiry'}</span>
          {!pending && <span aria-hidden="true">↗</span>}
        </button>
        <p>Submitting this form is an enquiry only. It does not confirm a reservation or event booking.</p>
      </div>
    </form>
  );
}
