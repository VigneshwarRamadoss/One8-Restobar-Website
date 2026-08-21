import { Metadata } from 'next';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import { getVenueContact } from '@/lib/cms/content-provider';

export const metadata: Metadata = {
  title: 'Legal Notice (Impressum)',
  description: 'Legal Notice and Impressum for One 8 Restobar.',
  alternates: {
    canonical: '/legal',
  },
};

export default async function LegalPage() {
  const contact = await getVenueContact();

  return (
    <>
      <Header />
      <main id="main-content" style={{ padding: 'calc(var(--spacing-xl) * 2) var(--content-padding)', maxWidth: '800px', margin: '0 auto', color: 'var(--chalk-0)' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: 'var(--spacing-lg)', color: 'var(--chalk-0)' }}>Legal Notice (Impressum)</h1>
        
        <div style={{ fontFamily: 'var(--font-interface)', fontSize: '1rem', lineHeight: 1.6, color: 'var(--mineral-300)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2>Information according to § 5 TMG</h2>
          <p>
            One 8 Restobar<br />
            {contact.address || 'Düsseldorf City Centre'}<br />
            {contact.city || 'Düsseldorf'}
          </p>

          <h2>Represented by:</h2>
          <p>The Dot Restobar Operating Division</p>

          <h2>Contact</h2>
          <p>
            Phone: {contact.phone || 'Direct line upon booking confirmation'}<br />
            Email: {contact.email || 'Email details upon enquiry'}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
