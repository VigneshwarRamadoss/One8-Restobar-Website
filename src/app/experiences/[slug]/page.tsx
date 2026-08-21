import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import PrevisualBadge from '@/components/global/PrevisualBadge';
import ReservationCTA from '@/components/global/ReservationCTA';
import { getExperiences } from '@/lib/cms/content-provider';
import { isContentPublishable } from '@/lib/cms/publication-policy';
import styles from './ExperienceDetail.module.css';

const imageMap: Record<string, string> = {
  'dining': '03-experience-dining.png',
  'bar': '04-experience-bar.png',
  'terrace': '05-experience-terrace.png',
  'private-events': '06-events-private-lounge.png',
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
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              {experience.title}
              {experience.isDraft && <span className={styles.draftBadge}>[DRAFT]</span>}
            </h1>
            <p className={styles.promise}>{experience.description}</p>
          </div>
          <div className={styles.heroMedia} aria-hidden="true">
            <Image
              src={`/images/previsual/${imageMap[experience.id] || '03-experience-dining.png'}`}
              alt=""
              fill
              style={{ objectFit: 'cover' }}
              sizes="100vw"
            />
            <PrevisualBadge />
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
              <ReservationCTA variant="primary" />
            </div>
          </div>
        </section>

        {/* Editorial Scene & Gallery (Placeholders) */}
        <section className={styles.editorial}>
          <div className={styles.editorialContent}>
            <h2>Atmosphere & Concept</h2>
            <p>
              This is a structural placeholder for the editorial scene paragraph. Real-life imagery and deeper narrative about {experience.title} will be populated here.
            </p>
          </div>
          <div className={styles.gallery}>
            <div className={styles.placeholderGallery}>
              <span>Asset Required: Gallery images</span>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
