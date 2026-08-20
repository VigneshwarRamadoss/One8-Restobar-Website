import MenuIndexCard from './MenuIndexCard';
import Breadcrumbs from './Breadcrumbs';
import DraftContentNotice from './DraftContentNotice';
import VisitCTA from './VisitCTA';
import { Menu, VenueContact } from '@/lib/cms/content-provider';
import styles from './MenuIndex.module.css';

interface Props {
  menus: Menu[];
  contact?: VenueContact | null;
}

export default function MenuIndex({ menus, contact }: Props) {
  const isAnyDraft = menus.some(m => m.isDraft);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Breadcrumbs items={[{ label: 'Menus' }]} />
        
        {isAnyDraft && <DraftContentNotice />}

        <header className={styles.header}>
          <h1 className={styles.title}>Menus</h1>
          <p className={styles.description}>
            A contemporary restobar selection shaped around seasonal ingredients, 
            crafted pours, and curated European wines.
          </p>
        </header>

        <section className={styles.menuList} aria-label="Available restaurant menus">
          {menus.map((menu, index) => (
            <MenuIndexCard key={menu.id} menu={menu} index={index} />
          ))}
        </section>
      </div>

      <VisitCTA contact={contact} />
    </div>
  );
}
