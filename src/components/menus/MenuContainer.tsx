import MenuCategory from './MenuCategory';
import MenuEmptyState from './MenuEmptyState';
import { MenuChapter as MenuChapterType } from '@/lib/cms/content-provider';
import styles from './MenuContainer.module.css';

interface Props {
  chapters: MenuChapterType[];
  currency?: string;
}

export default function MenuContainer({ chapters, currency = 'INR' }: Props) {
  if (!chapters || chapters.length === 0) {
    return <MenuEmptyState activeFilter="ALL" onResetFilter={() => {}} />;
  }

  return (
    <div className={styles.container}>
      {/* Compact Chapter Navigation Index */}
      {chapters.length > 1 && (
        <nav className={styles.chapterNav} aria-label="Menu chapters">
          <span className={styles.chapterNavLabel}>Chapters:</span>
          <ul className={styles.chapterNavList}>
            {chapters.map((chapter, index) => (
              <li key={chapter.id}>
                <a href={`#${chapter.id}`} className={styles.chapterNavLink}>
                  <span className={styles.chapterNavNum}>
                    {(index + 1).toString().padStart(2, '0')}
                  </span>
                  {chapter.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className={styles.chapters}>
        {chapters.map((chapter, index) => {
          const num = (index + 1).toString().padStart(2, '0');
          return (
            <section key={chapter.id} className={styles.chapterWrapper} id={chapter.id}>
              <h2 className={styles.chapterTitle}>
                <span className={styles.chapterNum}>{num}</span> {chapter.title}
              </h2>
              {chapter.introduction && (
                <p className={styles.chapterIntro}>{chapter.introduction}</p>
              )}

              <div className={styles.categories}>
                {chapter.categories.map(category => (
                  <MenuCategory
                    key={category.id}
                    category={category}
                    currency={currency}
                    activeFilter="ALL"
                  />
                ))}
              </div>

              <div className={styles.backToTopWrapper}>
                <a href="#main-content" className={styles.backToTopLink}>
                  ↑ Back to top
                </a>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
