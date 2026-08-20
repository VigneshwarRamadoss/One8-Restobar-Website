'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Experience } from '@/lib/cms/content-provider';
import styles from './ExperienceIndex.module.css';

interface Props {
  experiences: Experience[];
}

export default function ExperienceIndex({ experiences }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className={styles.section} aria-labelledby="experience-index-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 id="experience-index-title" className={styles.title}>The One 8 Experience</h2>
        </div>

        <div className={styles.grid}>
          {/* Desktop Media Stage */}
          <div className={styles.mediaStage} aria-hidden="true">
            {experiences.map((exp, index) => (
              <div 
                key={`media-${exp.id}`}
                className={`${styles.mediaLayer} ${index === activeIndex ? styles.active : ''}`}
              >
                <div className={styles.placeholder}>
                   <span>Asset Required: {exp.title} (Focal Crop)</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.list}>
            {experiences.map((exp, index) => {
              const displayNum = (index + 1).toString().padStart(2, '0');
              
              return (
                <div 
                  key={exp.id} 
                  className={styles.row}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                >
                  <div className={styles.index}>{displayNum}</div>
                  
                  <div className={styles.content}>
                    <h3 className={styles.name}>
                      {exp.title} {exp.isDraft && <span className={styles.draftBadge}>[DRAFT]</span>}
                    </h3>
                    <div className={styles.metadata}>
                      <span className={styles.bestFor}>{exp.bestFor}</span>
                      <span className={styles.serviceCue}>{exp.serviceCue}</span>
                    </div>
                    
                    {/* Mobile Media (hidden on desktop) */}
                    <div className={styles.mobileMedia} aria-hidden="true">
                      <div className={styles.placeholder}>
                        <span>Asset Required: {exp.title} (Compact Crop)</span>
                      </div>
                    </div>

                    <Link href={`/erleben/${exp.id}`} className={styles.link}>
                      Discover {exp.title}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
