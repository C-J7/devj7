'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import styles from '@/app/styles/Navbar.module.css';

export default function Navbar({ navLinks }: { navLinks: string[] }) {
  const handleHashScroll = (hash: string) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.logo}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={styles.logoPrimary}
        >
          C-J7
        </motion.span>
      </Link>

      <motion.ul
        className={styles.navList}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {navLinks.map((link) => {
          const isHome = link.toLowerCase() === 'home';
          const hash = `#${link.toLowerCase().replace(' ', '-')}`;

          return (
            <motion.li
              key={link}
              className={styles.navItem}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isHome ? (
                <Link href="/" className={styles.navLink}>
                  {link}
                </Link>
              ) : (
                <a
                  href={hash}
                  className={styles.navLink}
                  onClick={(e) => {
                    e.preventDefault();
                    handleHashScroll(hash);
                  }}
                >
                  {link}
                </a>
              )}
            </motion.li>
          );
        })}
      </motion.ul>

      <div className={styles.themeToggleContainer}>
        <ThemeToggle />
      </div>
    </nav>
  );
}