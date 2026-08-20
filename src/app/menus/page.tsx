import { Metadata } from 'next';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import MenuIndex from '@/components/menus/MenuIndex';
import { getAllMenus, getVenueContact } from '@/lib/cms/content-provider';

export const metadata: Metadata = {
  title: 'Menus | One 8 Restobar',
  description: 'Explore the food, drinks, and wine menus at One 8 Restobar. Shared plates, crafted pours, and curated vintages.',
  alternates: {
    canonical: '/menus',
  },
  openGraph: {
    title: 'Menus | One 8 Restobar',
    description: 'Explore the food, drinks, and wine menus at One 8 Restobar.',
    url: '/menus',
    type: 'website',
  },
};

export default async function MenusPage() {
  const menus = await getAllMenus();
  const contact = await getVenueContact();

  return (
    <>
      <Header />
      <main>
        <MenuIndex menus={menus} contact={contact} />
      </main>
      <Footer />
    </>
  );
}
