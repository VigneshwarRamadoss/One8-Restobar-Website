'use client';

import { useState } from 'react';
import MenuCategory from './MenuCategory';
import MenuEmptyState from './MenuEmptyState';
import { MenuChapter as MenuChapterType, DietaryMarker } from '@/lib/cms/content-provider';
import styles from './MenuContainer.module.css';

type FilterOption = 'ALL' | DietaryMarker;

interface Props {
  chapters: MenuChapterType[];
  currency?: string;
}

export default function MenuContainer({ chapters, currency = 'INR' }: Props) {
  const [activeFilter, setActiveFilter] = useState<FilterOption>('ALL');

  // Count matching items
  const matchingItemCount = chapters.reduce((acc, chapter) => {
    return acc + chapter.categories.reduce((catAcc, cat) => {
      return catAcc + cat.menuItems.filter(item => {
        if (activeFilter === 'ALL') return true;
        return item.dietary?.includes(activeFilter as DietaryMarker);
      }).length;
    }, 0);
  }, 0);

  return (
    <div className={styles.container}>
      {/* Dietary filters and tags are hidden until kitchen-approved data exists. */}

      {matchingItemCount === 0 ? (
        <MenuEmptyState activeFilter={activeFilter} onResetFilter={() => setActiveFilter('ALL')} />
      ) : (
        <div className={styles.chapters}>
          {chapters.map((chapter, index) => {
            const num = (index + 1).toString().padStart(2, '0');
            return (
              <div key={chapter.id} className={styles.chapterWrapper} id={chapter.id}>
                <h2 className={styles.chapterTitle}>
                  <span className={styles.chapterNum}>{num}</span> {chapter.title}
                </h2>
                {chapter.introduction && <p className={styles.chapterIntro}>{chapter.introduction}</p>}
                
                <div className={styles.categories}>
                  {chapter.categories.map(category => (
                    <MenuCategory 
                      key={category.id} 
                      category={category} 
                      currency={currency} 
                      activeFilter={activeFilter} 
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
