import type { OperatingHours } from '@/lib/cms/types';
import styles from './WeeklyHours.module.css';

interface Props {
  hours: OperatingHours;
}

interface DaySchedule {
  dayName: string;
  dayIndex: number;
  openTime: string | null;
  closeTime: string | null;
  isClosed: boolean;
}

const DEFAULT_WEEK: DaySchedule[] = [
  { dayName: 'Monday', dayIndex: 1, openTime: '17:30', closeTime: '01:00', isClosed: false },
  { dayName: 'Tuesday', dayIndex: 2, openTime: '17:30', closeTime: '01:00', isClosed: false },
  { dayName: 'Wednesday', dayIndex: 3, openTime: '17:30', closeTime: '01:00', isClosed: false },
  { dayName: 'Thursday', dayIndex: 4, openTime: '17:30', closeTime: '01:00', isClosed: false },
  { dayName: 'Friday', dayIndex: 5, openTime: '17:30', closeTime: '01:00', isClosed: false },
  { dayName: 'Saturday', dayIndex: 6, openTime: '17:30', closeTime: '01:00', isClosed: false },
  { dayName: 'Sunday', dayIndex: 0, openTime: null, closeTime: null, isClosed: true },
];

export default function WeeklyHours({ hours }: Props) {

  // Determine current day of week (0 = Sunday, 1 = Monday, etc.)
  const todayIndex = new Date().getDay();

  return (
    <section className={styles.section} aria-labelledby="hours-title">
      <div className={styles.frame}>
        <div className={styles.grid}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>Schedule</p>
            <h2 id="hours-title" className={styles.title}>
              Opening hours
            </h2>
          </div>

          <div>
            <dl className={styles.list}>
              {DEFAULT_WEEK.map((day) => {
                const isToday = day.dayIndex === todayIndex;

                return (
                  <div
                    key={day.dayName}
                    className={`${styles.row} ${isToday ? styles.todayRow : ''}`}
                  >
                    <dt className={styles.day}>
                      <span>{day.dayName}</span>
                      {isToday && <span className={styles.todayBadge}>Today</span>}
                    </dt>

                    <dd className={styles.time}>
                      {day.isClosed ? (
                        <span>Closed</span>
                      ) : (
                        <>
                          <time dateTime={day.openTime || undefined}>{day.openTime}</time>
                          {' – '}
                          <time dateTime={day.closeTime || undefined}>{day.closeTime}</time>
                        </>
                      )}
                    </dd>
                  </div>
                );
              })}
            </dl>

            <p className={styles.note}>
              {hours?.hoursDetail || 'Kitchen closes 45 minutes prior to venue closing time. Kitchen and bar hours are subject to special event bookings.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
