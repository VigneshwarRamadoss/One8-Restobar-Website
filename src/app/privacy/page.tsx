import { Metadata } from 'next';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy (Datenschutz) for One 8 Restobar.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="main-content" style={{ padding: 'calc(var(--spacing-xl) * 2) var(--content-padding)', maxWidth: '800px', margin: '0 auto', color: 'var(--chalk-0)' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: 'var(--spacing-lg)', color: 'var(--chalk-0)' }}>Privacy Policy</h1>
        
        <div style={{ fontFamily: 'var(--font-interface)', fontSize: '1rem', lineHeight: 1.6, color: 'var(--mineral-300)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2>1. Data Protection at a Glance</h2>
          <p>
            General information on how we handle your personal data when you visit our website. Personal data is any data with which you could be personally identified.
          </p>

          <h2>2. Data Collection on Our Website</h2>
          <p>
            Data collected on this website is processed by the website operator. We collect data you provide to us (e.g., via the event enquiry form) and technical data automatically collected when you visit the site.
          </p>

          <h2>3. Third-Party Services</h2>
          <p>
            We use external services like OpenTable for reservations. When you use these services, their respective privacy policies apply.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
