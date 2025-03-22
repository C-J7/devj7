'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Image from 'next/image';
import TypewriterBio from '@/app/components/TypewriterBio';
import Certificates from '@/app/sections/Certificates';
import styles from '@/app/styles/Hero.module.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ExperienceTimeline from './components/ExperienceTimeline';
import Skills from './components/Skills';

export default function Home() {
  const bioText = "SOFTWARE ENGINEER, CERTIFIED FULLSTACK DEVELOPER.";
  const navLinks = ['Home', 'Expertise', 'Experience', 'Contact'];


  const developerBio = `A passionate software engineer with expertise in creating robust web applications and immersive user experiences. 
  Combining technical proficiency with creative problem-solving to deliver efficient, scalable solutions. 
  Continuously exploring new technologies while maintaining a strong focus on clean code architecture 
  and user-centric design principles.`;

  return (
    <main className={styles.container}>
    <Navbar navLinks={navLinks} />

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.textContainer}>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.title}
          >
           Bamgbose Christian
          </motion.h1>
          
          <TypewriterBio text={bioText} />
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className={styles.devtext}
          >
            {developerBio}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              className={styles.ctaButton}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Certifications
            </motion.button>
          </motion.div>
        </div>

        {/* Image Container */}
        <motion.div
          className={styles.imageContainer}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/portfolioPhotoofCee.jpg"
              alt="DEVJ7"
              fill
              className={styles.profileImage}
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Certificates Section */}
      <Certificates id="certificates"/>


      {/* Experience Timeline */}
      <ExperienceTimeline id="experience"/>

      {/* Expertise Section */} 
      <Skills id="expertise"/>

      {/* Footer */}
      <Footer id="contact"/>
    </main>
  );
}