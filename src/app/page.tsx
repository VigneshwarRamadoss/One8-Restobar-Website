import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import Hero from '@/components/home/Hero';
import DecisionRail from '@/components/home/DecisionRail';
import BrandProof from '@/components/home/BrandProof';
import ExperienceIndex from '@/components/home/ExperienceIndex';
import MenuFeature from '@/components/home/MenuFeature';
import EventFeature from '@/components/home/EventFeature';
import CocinaFeature from '@/components/home/CocinaFeature';
import VisitPanel from '@/components/home/VisitPanel';

import { getExperiences } from '@/lib/cms/content-provider';

export const metadata = {
  title: 'One 8 Restobar',
  description: 'A contemporary restobar shaped around shared plates, crafted pours, and evenings that move at their own pace.',
};

export default async function Home() {
  const experiences = await getExperiences();

  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <DecisionRail />
        <BrandProof />
        <ExperienceIndex experiences={experiences} />
        <MenuFeature />
        <EventFeature />
        <CocinaFeature />
        <VisitPanel />
      </main>
      <Footer />
    </>
  );
}
