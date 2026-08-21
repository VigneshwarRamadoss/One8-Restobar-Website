'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ReservationConfig } from '@/lib/reservation/reservation-config';
import { checkAvailability, TimeSlot, ReservationBookingResult } from '@/lib/reservation/reservation-provider';
import { createReservationAction } from '@/app/reserve/actions';
import { BookingDetails, ReservationStep } from './reservation.types';
import { reservationStep1Schema, reservationStep2Schema, reservationStep3Schema, reservationStep4Schema } from './reservation.schema';

import ReservationHeader from './ReservationHeader';
import ReservationProgress from './ReservationProgress';
import ReservationStepDate from './ReservationStepDate';
import ReservationStepParty from './ReservationStepParty';
import ReservationStepTime from './ReservationStepTime';
import ReservationStepDetails from './ReservationStepDetails';
import ReservationSummary from './ReservationSummary';
import ReservationConfirmation from './ReservationConfirmation';
import ReservationUnavailable from './ReservationUnavailable';
import { ReservationErrorSummary } from './ReservationErrorSummary';

import styles from './reservation.module.css';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  initialConfig: ReservationConfig;
}

export default function ReservationDialog({ isOpen, onClose, initialConfig }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState<ReservationStep>(1);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string[]>>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const [details, setDetails] = useState<Partial<BookingDetails>>({
    date: new Date().toISOString().split('T')[0],
    partySize: 2,
    experienceId: 'dining',
    timeSlot: '',
    name: '',
    email: '',
    phone: '',
    consent: false,
  });

  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [confirmation, setConfirmation] = useState<ReservationBookingResult | null>(null);

  // Focus trap & ESC key listener
  useEffect(() => {
    if (!isOpen) return;

    // Body scroll lock
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !submitting) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, submitting]);

  // Load availability when entering Step 3
  useEffect(() => {
    let isCancelled = false;

    if (step === 3 && details.date && details.partySize && details.experienceId) {
      const fetchSlots = async () => {
        setLoading(true);
        setErrorMessage(null);
        try {
          const res = await checkAvailability({
            date: details.date!,
            partySize: details.partySize!,
            experienceId: details.experienceId!,
          });
          if (!isCancelled) {
            setSlots(res.slots);
            if (res.error) setErrorMessage(res.error);
          }
        } finally {
          if (!isCancelled) setLoading(false);
        }
      };

      fetchSlots();
    }

    return () => {
      isCancelled = true;
    };
  }, [step, details.date, details.partySize, details.experienceId]);

  if (!isOpen) return null;

  const handleNextStep = () => {
    setErrors({});
    setErrorMessage(null);

    if (step === 1) {
      const res = reservationStep1Schema.safeParse({ date: details.date });
      if (!res.success) {
        setErrors(res.error.flatten().fieldErrors);
        return;
      }
      setStep(2);
    } else if (step === 2) {
      const res = reservationStep2Schema.safeParse({
        partySize: details.partySize,
        experienceId: details.experienceId,
      });
      if (!res.success) {
        setErrors(res.error.flatten().fieldErrors);
        return;
      }
      setStep(3);
    } else if (step === 3) {
      const res = reservationStep3Schema.safeParse({ timeSlot: details.timeSlot });
      if (!res.success) {
        setErrors(res.error.flatten().fieldErrors);
        return;
      }
      setStep(4);
    }
  };

  const handleBackStep = () => {
    setErrors({});
    setErrorMessage(null);
    if (step > 1) {
      setStep((step - 1) as ReservationStep);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setErrorMessage(null);

    const res = reservationStep4Schema.safeParse(details);
    if (!res.success) {
      setErrors(res.error.flatten().fieldErrors);
      return;
    }

    setSubmitting(true);
    try {
      const serverResult = await createReservationAction({
        date: details.date!,
        partySize: details.partySize!,
        experienceId: details.experienceId!,
        timeSlot: details.timeSlot!,
        name: details.name!,
        email: details.email!,
        phone: details.phone!,
        occasion: details.occasion,
        seatingRequest: details.seatingRequest,
        note: details.note,
        consent: details.consent as true,
        _honey: details._honey,
      });

      if (serverResult.success) {
        setConfirmation(serverResult);
        setStep(5);
      } else {
        setErrorMessage(serverResult.error || 'Failed to confirm reservation.');
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Network error while confirming reservation.';
      setErrorMessage(msg);
    } finally {
      setSubmitting(false);
    }
  };

  const updateDetail = (field: keyof BookingDetails, value: string | number | boolean) => {
    setDetails(prev => ({ ...prev, [field]: value }));
  };

  const isUnavailable = initialConfig.mode === 'unavailable';

  if (!mounted) return null;

  return createPortal(
    <div className={styles.backdrop} onClick={onClose}>
      <div
        ref={dialogRef}
        className={styles.dialog}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Table reservation system"
      >
        <ReservationHeader step={step} onClose={onClose} isUnavailable={isUnavailable} />

        {!isUnavailable && <ReservationProgress currentStep={step} />}

        {isUnavailable ? (
          <ReservationUnavailable config={initialConfig} onClose={onClose} />
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <div className={styles.body}>
              <ReservationErrorSummary errors={errors} errorMessage={errorMessage} />

              {step > 1 && step < 5 && (
                <ReservationSummary
                  details={details}
                  onGoToStep={s => setStep(s as ReservationStep)}
                  isDraftFixture={initialConfig.enableFixtures}
                />
              )}

              {step === 1 && (
                <ReservationStepDate
                  selectedDate={details.date || ''}
                  onSelectDate={d => updateDetail('date', d)}
                  error={errors.date?.[0]}
                />
              )}

              {step === 2 && (
                <ReservationStepParty
                  partySize={details.partySize || 2}
                  experienceId={details.experienceId || 'dining'}
                  maxPartySize={initialConfig.maxPartySize}
                  onSelectPartySize={s => updateDetail('partySize', s)}
                  onSelectExperience={exp => updateDetail('experienceId', exp)}
                  onCloseModal={onClose}
                />
              )}

              {step === 3 && (
                <ReservationStepTime
                  slots={slots}
                  selectedTime={details.timeSlot || ''}
                  onSelectTime={t => updateDetail('timeSlot', t)}
                  loading={loading}
                  error={errorMessage}
                  isDraftFixture={initialConfig.enableFixtures}
                />
              )}

              {step === 4 && (
                <ReservationStepDetails
                  details={details}
                  onChangeDetail={updateDetail}
                  errors={errors}
                />
              )}

              {step === 5 && confirmation && (
                <ReservationConfirmation
                  confirmation={confirmation}
                  supportsModify={initialConfig.supportsModify}
                  supportsCancel={initialConfig.supportsCancel}
                  onClose={onClose}
                />
              )}
            </div>

            {step < 5 && (
              <div className={styles.dialogFooter}>
                {step > 1 ? (
                  <button type="button" className={styles.backBtn} onClick={handleBackStep} disabled={submitting}>
                    ← Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    className={styles.nextBtn}
                    onClick={handleNextStep}
                    disabled={
                      (step === 2 && (details.partySize || 0) > initialConfig.maxPartySize) ||
                      (step === 3 && !details.timeSlot)
                    }
                  >
                    Continue →
                  </button>
                ) : (
                  <button type="submit" className={styles.nextBtn} disabled={submitting || !details.consent}>
                    {submitting ? 'Confirming Reservation…' : 'Complete Reservation'}
                  </button>
                )}
              </div>
            )}
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}
