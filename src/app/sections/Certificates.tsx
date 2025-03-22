import CertificateCard from '../components/CertificateCard';
import { certificates } from '../config/certificates';
import styles from '@/app/styles/Hero.module.css';

export default function Certificates({ id }: { id?: string }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.grid}>
        {certificates.map((cert, index) => (
          <CertificateCard 
            key={cert.id}
            cert={cert}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}