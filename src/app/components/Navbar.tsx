'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import styles from '@/app/styles/Navbar.module.css';

export default function Navbar({ navLinks }: { navLinks: string[] }) {
  
  
  const getLinkHref = (link: string) => {
    switch(link.toLowerCase()) {
      case 'home': return '/';
      case 'expertise': return '#expertise';
      case 'experience': return '#experience';
      case 'contact': return '#contact';
      default: return `#${link.toLowerCase()}`;
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
        {navLinks.map((link) => (
          <motion.li
            key={link}
            className={styles.navItem}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href={getLinkHref(link)} 
              className={styles.navLink}
              scroll={false}
            >
              {link}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      <div className={styles.themeToggleContainer}>
        <ThemeToggle />
      </div>
    </nav>
  );
}