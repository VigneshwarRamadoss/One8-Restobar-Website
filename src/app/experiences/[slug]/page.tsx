import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import PrevisualBadge from '@/components/global/PrevisualBadge';
import ReservationTrigger from '@/components/reservation/ReservationTrigger';
import { getExperiences } from '@/lib/cms/content-provider';
import { isContentPublishable } from '@/lib/cms/publication-policy';
import styles from './ExperienceDetail.module.css';

const imageMap: Record<string, string> = {
  'dining': '03-experience-dining.png',
  'bar': '04-experience-bar.png',
  'terrace': '05-experience-terrace.png',
  'private-events': '06-events-private-lounge.png',
};

const detailImageMap: Record<string, string> = {
  'dining': '07-menu-shared-plate.png',
  'bar': '04-experience-bar.png',
  'terrace': '05-experience-terrace.png',
  'private-events': '06-events-private-lounge.png',
};

const focalPointMap: Record<string, string> = {
  'dining': '52% 50%',
  'bar': '50% 50%',
  'terrace': '48% 50%',
  'private-events': '58% 50%',
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const experiences = await getExperiences();
  const experience = experiences.find(e => e.id === slug);

  if (!experience) {
    return { title: 'Not Found' };
  }

  return {
    title: `${experience.title} | One 8 Restobar`,
    description: experience.description,
  };
}

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = await params;
  const experiences = await getExperiences();
  const experience = experiences.find(e => e.id === slug);

  if (!experience) {
    notFound();
  }

  const isPublishable = isContentPublishable(
    experience.isDraft ? 'source-draft' : 'client-approved',
    process.env.NODE_ENV
  );

  if (!isPublishable) {
    notFound();
  }

  return (
    <>
      <Header />
      <main id="main-content" className={styles.main}>
        <section className={styles.hero} aria-labelledby="experience-title">
          <div className={styles.heroMedia} aria-hidden="true">
            <Image
              src={`/images/previsual/${imageMap[experience.id] || '03-experience-dining.png'}`}
              alt=""
              fill
              style={{ objectFit: 'cover', objectPosition: focalPointMap[experience.id] || '50% 50%' }}
              sizes="100vw"
              preload={true}
              quality={88}
            />
            <PrevisualBadge />
          </div>
          <div className={styles.heroContent}>
            <h1 id="experience-title" className={styles.title}>
              {experience.title}
            </h1>
            <p className={styles.promise}>{experience.description}</p>
          </div>
        </section>

        {/* Orientation Bar */}
        <section className={styles.orientationBar}>
          <div className={styles.orientationGrid}>
            <div className={styles.orientationItem}>
              <span className={styles.orientationLabel}>Best for</span>
              <span className={styles.orientationValue}>{experience.bestFor}</span>
            </div>
            <div className={styles.orientationItem}>
              <span className={styles.orientationLabel}>When</span>
              <span className={styles.orientationValue}>{experience.serviceCue}</span>
            </div>
            <div className={styles.orientationItem}>
              <span className={styles.orientationLabel}>Reserve</span>
              <ReservationTrigger variant="primary" />
            </div>
          </div>
        </section>

        <section className={styles.editorial}>
          <div className={styles.editorialContent}>
            <h2>Atmosphere & Concept</h2>
            <p>
              This is a structural placeholder for the editorial scene paragraph. Real-life imagery and deeper narrative about {experience.title} will be populated here.
            </p>
          </div>
          <div className={styles.gallery} aria-hidden="true">
            <Image
              src={`/images/previsual/${detailImageMap[experience.id] || '07-menu-shared-plate.png'}`}
              alt=""
              fill
              style={{ objectFit: 'cover', objectPosition: focalPointMap[experience.id] || '50% 50%' }}
              sizes="(max-width: 1023px) 100vw, 50vw"
              loading="lazy"
              quality={88}
            />
            <PrevisualBadge />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
