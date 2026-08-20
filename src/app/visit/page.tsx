import { Metadata } from 'next';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import VisitHero from '@/components/visit/VisitHero';
import VisitEssentials from '@/components/visit/VisitEssentials';
import WeeklyHours from '@/components/visit/WeeklyHours';
import ArrivalDetails from '@/components/visit/ArrivalDetails';
import ContactActions from '@/components/visit/ContactActions';
import PageConversionBand from '@/components/global/PageConversionBand';
import { getOperatingHours, getVenueContact } from '@/lib/cms/content-provider';
import styles from './VisitPage.module.css';

export const metadata: Metadata = {
  title: 'Visit & Hours',
  description: 'Location, opening hours, contact information, and table reservations for One 8 Restobar.',
  alternates: {
    canonical: '/visit',
  },
  openGraph: {
    title: 'Visit & Hours | One 8 Restobar',
    description: 'Location, opening hours, contact information, and table reservations for One 8 Restobar.',
    url: '/visit',
    type: 'website',
  },
};

export default async function VisitPage() {
  const hours = await getOperatingHours();
  const contact = await getVenueContact();

  return (
    <>
      <Header />
      <main id="main-content" className={styles.page}>
        <VisitHero contact={contact} />
        <VisitEssentials hours={hours} contact={contact} />
        <WeeklyHours hours={hours} />
        <ArrivalDetails contact={contact} />
        <ContactActions contact={contact} />
        <PageConversionBand
          eyebrow="Reservations & Menus"
          title="Plan your evening."
          lead="Book a table in advance or explore our full food menu before your visit."
          primaryCtaHref={contact.openTableUrl}
          secondaryLinks={[
            { label: 'View the food menu', href: '/menus/food' },
            { label: 'Explore private events', href: '/events' },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
