import styles from './reservation.module.css';

interface Props {
  currentStep: number;
}

export default function ReservationProgress({ currentStep }: Props) {
  if (currentStep > 4) return null;

  return (
    <div className={styles.progress} aria-label={`Step ${currentStep} of 4`}>
      {[1, 2, 3, 4].map(step => (
        <div
          key={step}
          className={`${styles.progressBar} ${step <= currentStep ? styles.progressBarActive : ''}`}
        />
      ))}
    </div>
  );
}
