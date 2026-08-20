import { Metadata } from 'next';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import AboutHero from '@/components/about/AboutHero';
import BrandPhilosophy from '@/components/about/BrandPhilosophy';
import BrandPrinciples from '@/components/about/BrandPrinciples';
import CraftStory from '@/components/about/CraftStory';
import PageConversionBand from '@/components/global/PageConversionBand';
import styles from './AboutPage.module.css';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about One 8 Restobar — our culinary philosophy, approach to hospitality, and atmosphere.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About | One 8 Restobar',
    description: 'Learn about One 8 Restobar — our culinary philosophy, approach to hospitality, and atmosphere.',
    url: '/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className={styles.page}>
        <AboutHero />
        <BrandPhilosophy />
        <BrandPrinciples />
        <CraftStory />
        <PageConversionBand
          eyebrow="Join us"
          title="Experience One 8."
          lead="Explore our seasonal food menu, reserve a table, or plan your visit."
          secondaryLinks={[
            { label: 'Explore the food menu', href: '/menus/food' },
            { label: 'Plan your visit', href: '/visit' },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
