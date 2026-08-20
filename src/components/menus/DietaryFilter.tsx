'use client';

import { DietaryMarker } from '@/lib/cms/content-provider';
import styles from './DietaryFilter.module.css';

export type FilterOption = 'ALL' | DietaryMarker;

interface Props {
  activeFilter: FilterOption;
  onFilterChange: (filter: FilterOption) => void;
  itemCount: number;
}

const FILTERS: { id: FilterOption; label: string }[] = [
  { id: 'ALL', label: 'All Items' },
  { id: 'V', label: 'Vegetarian (V)' },
  { id: 'VG', label: 'Vegan (VG)' },
  { id: 'GF', label: 'Gluten-free (GF)' },
];

export default function DietaryFilter({ activeFilter, onFilterChange, itemCount }: Props) {
  const getAnnouncement = () => {
    if (activeFilter === 'ALL') {
      return `Showing all ${itemCount} menu items.`;
    }
    const filterObj = FILTERS.find(f => f.id === activeFilter);
    return `Showing ${itemCount} items for ${filterObj?.label || activeFilter}.`;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.filterBar} role="region" aria-label="Dietary preferences filter">
        <span className={styles.filterTitle}>Filter by:</span>
        <div className={styles.buttonGroup}>
          {FILTERS.map(filter => {
            const isSelected = activeFilter === filter.id;
            return (
              <button
                key={filter.id}
                type="button"
                className={`${styles.filterButton} ${isSelected ? styles.active : ''}`}
                aria-pressed={isSelected}
                onClick={() => onFilterChange(filter.id)}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Screen reader live announcement */}
      <div className="visually-hidden" aria-live="polite" aria-atomic="true">
        {getAnnouncement()}
      </div>
    </div>
  );
}
