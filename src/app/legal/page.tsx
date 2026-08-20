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
      <main id="main-content" style={{ padding: 'calc(var(--spacing-xl) * 2) var(--spacing-md)', maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'var(--spacing-lg)' }}>Legal Notice (Impressum)</h1>
        
        <div style={{ fontFamily: 'var(--font-interface)', fontSize: '1rem', lineHeight: 1.6, color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-md)' }}>
          <p><em>[DRAFT - Placeholder for official Impressum]</em></p>
          
          <h2>Information according to § 5 TMG</h2>
          <p>
            One 8 Restobar<br />
            {contact.address || 'Address Pending'}<br />
            {contact.city || 'City Pending'}
          </p>

          <h2>Represented by:</h2>
          <p>[Management Name Pending]</p>

          <h2>Contact</h2>
          <p>
            Phone: {contact.phone || '[Pending]'}<br />
            Email: {contact.email || '[Pending]'}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
