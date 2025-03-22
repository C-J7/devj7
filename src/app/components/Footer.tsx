'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IconBrandGithub, IconBrandX, IconBrandLinkedin } from '@tabler/icons-react';
import styles from '@/app/styles/Footer.module.css';

export default function Footer({ id }: { id?: string })  {
  const currentYear = new Date().getFullYear();
  const socials = [
    { icon: <IconBrandGithub />, href: 'https://github.com/C-J7' },
    { icon: <IconBrandX />, href: 'https://x.com/yourhandle' },
    { icon: <IconBrandLinkedin />, href: 'https://linkedin.com/in/yourprofile' }
  ];

  return (
    <footer className={styles.footer}>
        <div className={styles.info}>
            Lets connect and build something awesome together!
        </div>
      <div className={styles.content}>
        {/* Social Links */}
        <motion.div 
          className={styles.socials}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {socials.map((social, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={styles.socialLinkWrapper}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                {social.icon}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Info */}
        <div className={styles.info}>
          <p className={styles.text}>
            Built with <span className={styles.highlight}>Next.js</span>,{" "}
            <span className={styles.highlight}>TypeScript</span>, and{" "}
            <span className={styles.highlight}>Framer Motion</span>
          </p>
          <p className={styles.text}>
            © {currentYear} C-J7.  
            <span>  All rights reserved.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}