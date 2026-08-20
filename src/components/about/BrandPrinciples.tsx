import styles from './BrandPrinciples.module.css';

const principles = [
  {
    number: '01',
    title: 'The plate',
    description:
      'Seasonal ingredients prepared with clarity and restraint. We focus on natural flavours, hearth techniques, and dishes designed for sharing across the table.',
  },
  {
    number: '02',
    title: 'The pour',
    description:
      'A curated list of classic cocktails, clean spirits, and precise wines selected to pair naturally with our kitchen and move seamlessly through the night.',
  },
  {
    number: '03',
    title: 'The room',
    description:
      'Warmed by tactile materials, acoustic comfort, and attentive service that moves thoughtfully around your evening without intrusion.',
  },
];

export default function BrandPrinciples() {
  return (
    <section className={styles.section} aria-labelledby="principles-title">
      <div className={styles.frame}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Our pillars</p>
          <h2 id="principles-title" className={styles.title}>
            How we build the experience.
          </h2>
        </div>

        <div className={styles.grid}>
          {principles.map((p) => (
            <article key={p.number} className={styles.item}>
              <div className={styles.itemHeader}>
                <span className={styles.number}>{p.number}</span>
                <h3 className={styles.itemTitle}>{p.title}</h3>
              </div>
              <p className={styles.paragraph}>{p.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
