import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import MenuPageHeader from '@/components/menus/MenuPageHeader';
import MenuMetadata from '@/components/menus/MenuMetadata';
import MenuContainer from '@/components/menus/MenuContainer';
import AllergenNotice from '@/components/menus/AllergenNotice';
import VisitCTA from '@/components/menus/VisitCTA';
import { getMenuBySlug, getAllMenus, getVenueContact } from '@/lib/cms/content-provider';
import { isContentPublishable } from '@/lib/cms/publication-policy';
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

  if (!menu || !isContentPublishable(menu.status)) {
    notFound();
  }

  return {
    title: menu.title,
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

  if (!menu || !isContentPublishable(menu.status)) {
    notFound();
  }

  const otherMenus = allMenus.filter(m => m.slug !== menu.slug);

  // JSON-LD Menu Structured Data - published items only
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Menu',
    name: menu.title,
    description: menu.description,
    inLanguage: menu.locale,
    hasMenuSection: menu.chapters.flatMap(chapter =>
      chapter.categories.map(cat => ({
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
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content" className={styles.wrapper}>
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
          />

          <AllergenNotice />

          {otherMenus.length > 0 && (
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
          )}
        </div>

        <VisitCTA contact={contact} />
      </main>
      <Footer />
    </>
  );
}
