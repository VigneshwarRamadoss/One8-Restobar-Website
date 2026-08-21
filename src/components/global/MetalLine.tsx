'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './MetalLine.module.css';

type MetalTone = 'gold' | 'silver';

interface MetalLineProps {
  tone: MetalTone;
  className?: string;
}

export default function MetalLine({ tone, className = '' }: MetalLineProps) {
  const lineRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const line = lineRef.current;
    if (!line || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25, rootMargin: '0px 0px -12% 0px' },
    );

    observer.observe(line);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={lineRef}
      className={`${styles.line} ${styles[tone]} ${isVisible ? styles.visible : ''} ${className}`}
      aria-hidden="true"
    />
  );
}

