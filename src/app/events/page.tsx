import { Metadata } from 'next';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import EventEnquiryForm from '@/components/events/EventEnquiryForm';
import { getExperiences } from '@/lib/cms/content-provider';
import styles from './EventsPage.module.css';

export const metadata: Metadata = {
  title: 'Events & Private Dining',
  description: 'Start an event or private dining enquiry with One 8 Restobar.',
  alternates: {
    canonical: '/events',
  },
  openGraph: {
    title: 'Events & Private Dining | One 8 Restobar',
    description: 'Start an event or private dining enquiry with One 8 Restobar.',
    url: '/events',
    type: 'website',
  },
};

const enquiryOutline = [
  ['01', 'The occasion'],
  ['02', 'Date and party size'],
  ['03', 'How to reach you'],
];

export default async function EventsPage() {
  const experiences = await getExperiences();
  const approvedSpaces = experiences.filter(experience => !experience.isDraft);

  return (
    <>
      <Header />
      <main id="main-content" className={styles.page}>
        <section className={styles.hero} aria-labelledby="events-title">
          <div className={styles.frame}>
            <p className={styles.eyebrow}>Private gatherings at One 8</p>

            <div className={styles.heroGrid}>
              <div>
                <h1 id="events-title" className={styles.title}>
                  Events,
                  <span>thoughtfully hosted.</span>
                </h1>
              </div>

              <div className={styles.introduction}>
                <p className={styles.lead}>
                  Tell us what you are planning. We will use the details to understand the occasion and confirm what One 8 can offer.
                </p>
                <a href="#event-enquiry" className={styles.anchorLink}>
                  Start your enquiry <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>

            <ol className={styles.outline} aria-label="Enquiry overview">
              {enquiryOutline.map(([number, label]) => (
                <li key={number}>
                  <span className={styles.outlineNumber}>{number}</span>
                  <span>{label}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="event-enquiry" className={styles.enquiry} aria-labelledby="enquiry-title">
          <div className={`${styles.frame} ${styles.enquiryGrid}`}>
            <div className={styles.enquiryIntro}>
              <p className={styles.eyebrowDark}>Your event, clearly understood</p>
              <h2 id="enquiry-title" className={styles.enquiryTitle}>Start with the essentials.</h2>
              <p className={styles.enquiryCopy}>
                Share the practical details first. Space, format and availability can be confirmed after the team reviews your request.
              </p>

              <div className={styles.reassurance}>
                <span className={styles.reassuranceRule} aria-hidden="true" />
                <p>No payment is taken through this form. Submitting an enquiry does not confirm a booking.</p>
              </div>
            </div>

            <EventEnquiryForm spaces={approvedSpaces} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
