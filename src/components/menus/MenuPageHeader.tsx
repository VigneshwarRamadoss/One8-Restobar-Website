import Breadcrumbs, { BreadcrumbItem } from './Breadcrumbs';
import DraftContentNotice from './DraftContentNotice';
import MenuDownloadAction from './MenuDownloadAction';
import { MenuDocument } from '@/lib/cms/content-provider';
import styles from './MenuPageHeader.module.css';

interface Props {
  title: string;
  description: string;
  breadcrumbItems: BreadcrumbItem[];
  pdf?: MenuDocument | null;
  isDraft?: boolean;
}

export default function MenuPageHeader({
  title,
  description,
  breadcrumbItems,
  pdf,
  isDraft = false,
}: Props) {
  return (
    <header className={styles.header}>
      <Breadcrumbs items={breadcrumbItems} />
      
      {isDraft && <DraftContentNotice />}

      <div className={styles.titleRow}>
        <div className={styles.textContent}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
        </div>

        <MenuDownloadAction pdf={pdf} />
      </div>
    </header>
  );
}
