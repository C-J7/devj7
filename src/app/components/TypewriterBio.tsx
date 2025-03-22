import styles from '@/app/styles/Hero.module.css';

export default function TypewriterBio({ text }: { text: string }) {
  return (
    <div className={styles.typewriterContainer}>
      <p className={styles.typewriter}>{text}</p>
    </div>
  );
}