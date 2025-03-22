import { motion } from 'framer-motion';
import { Certificate } from '@/types';
import styles from '@/app/styles/Hero.module.css';

export default function CertificateCard({ cert, index }: { cert: Certificate, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={styles.card}
    >
      <h3>{cert.title}</h3>
      <p>{cert.issuer}</p>
      <p>{cert.date}</p>
      {/* {cert.credentialLink && (
        <a 
          href={cert.credentialLink} 
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          View Credential
        </a>
      )} */}
    </motion.div>
  );
}