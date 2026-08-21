import Image from 'next/image';
import PrevisualBadge from '../global/PrevisualBadge';
import MetalLine from '../global/MetalLine';
import styles from './BrandProof.module.css';

export default function BrandProof() {
  return (
    <section className={styles.section} aria-labelledby="brand-proof-title">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 id="brand-proof-title" className="visually-hidden">Our Philosophy</h2>
          <MetalLine tone="silver" className={styles.metalRule} />
          <p className={styles.text}>
            A contemporary restobar shaped around shared plates, crafted pours, and evenings that move at their own pace. 
            Every detail—from the kitchen pass to the reflective ambiance of the bar—is intentionally designed to 
            create an authentic hospitality experience.
          </p>
        </div>
        
        <div className={styles.mediaFrame}>
           <Image
             src="/images/previsual/02-brand-proof-portrait.png"
             alt="A server sets a water glass beside a shared plate."
             fill
             style={{ objectFit: 'cover' }}
             sizes="(max-width: 767px) 100vw, 50vw"
             loading="lazy"
             quality={88}
           />
           <PrevisualBadge />
        </div>
      </div>
    </section>
  );
}
