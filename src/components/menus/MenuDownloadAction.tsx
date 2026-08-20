import { MenuDocument } from '@/lib/cms/content-provider';
import styles from './MenuDownloadAction.module.css';

interface Props {
  pdf?: MenuDocument | null;
}

export default function MenuDownloadAction({ pdf }: Props) {
  if (!pdf || !pdf.url) {
    return (
      <div className={styles.unavailable} title="PDF download is currently unavailable for this menu">
        <span className={styles.label}>PDF Format</span>
        <span className={styles.status}>Not Available</span>
      </div>
    );
  }

  return (
    <a 
      href={pdf.url} 
      download 
      className={styles.downloadButton}
      aria-label={`${pdf.label}${pdf.fileSize ? ` (${pdf.fileSize})` : ''}`}
    >
      <span className={styles.label}>{pdf.label}</span>
      {pdf.fileSize && <span className={styles.fileInfo}>{pdf.fileType || 'PDF'} · {pdf.fileSize}</span>}
    </a>
  );
}
