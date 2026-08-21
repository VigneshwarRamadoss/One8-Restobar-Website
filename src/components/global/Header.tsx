import Link from 'next/link';
import LocaleSwitch from './LocaleSwitch';
import ReservationTrigger from '../reservation/ReservationTrigger';
import MobileNavigation from './MobileNavigation';
import HeaderScrollWrapper from './HeaderScrollWrapper';
import ActiveLink from './ActiveLink';
import { getActiveNavItems } from '@/lib/config/navigation';
import styles from './Header.module.css';

export default function Header() {
  const activeNavItems = getActiveNavItems();

  return (
    <HeaderScrollWrapper>
      <div className={styles.logoArea}>
        <Link href="/" className={styles.logo} aria-label="One 8 Restobar homepage">
          <span className={styles.logoMark}>One 8</span>
        </Link>
      </div>

      <nav className={styles.navArea} aria-label="Main navigation">
        <ul className={styles.navList}>
          {activeNavItems.map(item => (
            <li key={item.href}>
              <ActiveLink href={item.href} className={styles.navLink}>
                {item.label}
              </ActiveLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.actionsArea}>
        <LocaleSwitch />
        <ReservationTrigger variant="nav" className={styles.desktopCTA} />
        <MobileNavigation activeNavItems={activeNavItems} />
      </div>
    </HeaderScrollWrapper>
  );
}
