'use client';

import { useTheme } from '@/app/context/ThemeContext';
import {IconBrightnessUp, IconMoonStars } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import styles from '@/app/styles/Hero.module.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <motion.button 
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={styles.themeToggle}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -45, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 45, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
      {theme === 'light' ? <IconMoonStars className={styles.themeIcon} /> : <IconBrightnessUp className={styles.themeIcon}  />}
      </motion.div>
    </motion.button>
  );
}