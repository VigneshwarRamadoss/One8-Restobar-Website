import { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import MenuPageHeader from '@/components/menus/MenuPageHeader';
import MenuMetadata from '@/components/menus/MenuMetadata';
import MenuContainer from '@/components/menus/MenuContainer';
import AllergenNotice from '@/components/menus/AllergenNotice';
import VisitCTA from '@/components/menus/VisitCTA';
import MenuUnavailableState from '@/components/menus/MenuUnavailableState';
import { getMenuBySlug, getAllMenus, getVenueContact } from '@/lib/cms/content-provider';
import styles from './MenuSlug.module.css';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const menus = await getAllMenus();
  return menus.map(menu => ({
    slug: menu.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const menu = await getMenuBySlug(slug);

  if (!menu) {
    return {
      title: 'Menu Not Found | One 8 Restobar',
      description: 'The requested menu could not be found.',
    };
  }

  return {
    title: `${menu.title} | One 8 Restobar`,
    description: menu.description,
    alternates: {
      canonical: `/menus/${menu.slug}`,
    },
    openGraph: {
      title: `${menu.title} | One 8 Restobar`,
      description: menu.description,
      url: `/menus/${menu.slug}`,
      type: 'website',
    },
  };
}

export default async function MenuDetailPage({ params }: Props) {
  const { slug } = await params;
  const menu = await getMenuBySlug(slug);
  const allMenus = await getAllMenus();
  const contact = await getVenueContact();

  if (!menu) {
    return (
      <>
        <Header />
        <main className={styles.wrapper}>
          <div className={styles.container}>
            <MenuUnavailableState 
              title="Menu Not Found" 
              message="The requested menu page does not exist or has been moved." 
            />
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const otherMenus = allMenus.filter(m => m.slug !== menu.slug);


  // JSON-LD Menu Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: menu.title,
    description: menu.description,
    inLanguage: menu.locale,
    hasMenuSection: menu.chapters.flatMap(chapter => chapter.categories.map(cat => ({
      '@type': 'MenuSection',
      name: cat.displayTitle,
      hasMenuItem: cat.menuItems.map(item => ({
        '@type': 'MenuItem',
        name: item.name,
        description: item.description,
        offers: {
          '@type': 'Offer',
          price: item.variants.length > 0 ? item.variants[0].price : 0,
          priceCurrency: menu.currency,
        },
      })),
    }))),
  };

  return (
    <>
      {menu.status !== 'source-draft' && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Header />
      <main className={styles.wrapper}>
        <div className={styles.container}>
          <MenuPageHeader
            title={menu.title}
            description={menu.description}
            breadcrumbItems={[
              { label: 'Menus', href: '/menus' },
              { label: menu.title },
            ]}
            pdf={menu.pdf}
            isDraft={menu.isDraft}
          />

          <MenuMetadata
            serviceApplicability={menu.serviceApplicability}
            effectiveDate={menu.effectiveDate}
            lastUpdated={menu.lastUpdated}
            currency={menu.currency}
          />

          <MenuContainer 
            chapters={menu.chapters} 
            currency={menu.currency} 
            hasDietaryMarkers={false}
          />

          <AllergenNotice />

          {/* Navigation to other menus */}
          <nav className={styles.otherMenusNav} aria-label="Other menus">
            <h3 className={styles.otherMenusTitle}>Explore Other Menus</h3>
            <div className={styles.otherMenusLinks}>
              {otherMenus.map(om => (
                <Link key={om.id} href={`/menus/${om.slug}`} className={styles.otherMenuLink}>
                  View {om.title} →
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <VisitCTA contact={contact} />
      </main>
      <Footer />
    </>
  );
}
