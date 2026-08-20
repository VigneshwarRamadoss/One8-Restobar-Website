import { Metadata } from 'next';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import ExperienceIndex from '@/components/home/ExperienceIndex';
import { getExperiences } from '@/lib/cms/content-provider';

export const metadata: Metadata = {
  title: 'Experiences',
  description: 'Five ways to experience One 8 Restobar: Bar, Restaurante, Bistro, Patio and Cocina.',
  alternates: {
    canonical: '/experiences',
  },
  openGraph: {
    title: 'Experiences | One 8 Restobar',
    description: 'Five ways to experience One 8 Restobar.',
    url: '/experiences',
    type: 'website',
  },
};

export default async function ExperiencesPage() {
  const experiences = await getExperiences();

  return (
    <>
      <Header />
      <main id="main-content">
        <ExperienceIndex experiences={experiences} />
      </main>
      <Footer />
    </>
  );
}
