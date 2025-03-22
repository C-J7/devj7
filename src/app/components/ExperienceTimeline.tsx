'use client';

import { motion } from 'framer-motion';
import styles from '@/app/styles/Experience.module.css';

const experiences = [
  {
    company: "Innovision Academy(Now Photizo)",
    role: "Frontend Developer",
    date: "November 2023 - May 2024",
    description: "Led the development of responsive web applications using modern frameworks."
  },
  {
    company: "MIRG-ICAIR",
    role: "Volunteer",
    date: "December 2024",
    description: "Volunteered for the 4th International Conference on AI and Robotics."
  },
  {
    company: "Golden Treats and Sweets(UK)",
    role: "Software Engineer",
    date: "May 2024 - June 2024",
    description: "Implemented design systems and improved user experience metrics by 40%."
  },
  {
    company: "Toon Central",
    role: "Social Media Manager(Lead)",
    date: "November 2024 - March 2025",
    description: "Led the Media team in creating engaging content and managing social media platforms that boosted user engagement by 54%."
  },
  {
    company: "NITHUB University of Lagos",
    role: "Game Developer|| Game Designer",
    date: "December 2024 - February 2025",
    description: "Built a 3D Space Shooter Called SPACEON, exhibited at the OMNIVERSE SUMMIT 2025."
  },
];

export default function ExperienceTimeline({ id }: { id?: string })  {
    return (
      <section className={styles.experienceSection}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Work Experience
        </motion.h2>
        
        <div className={styles.timeline}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={styles.timelineItem}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.timelineContent}>
                <div className={styles.timelineHeader}>
                  <h3 className={styles.company}>{exp.company}</h3>
                  <span className={styles.accentBar}></span>
                </div>
                <p className={styles.role}>{exp.role}</p>
                <p className={styles.date}>{exp.date}</p>
                <p className={styles.description}>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    );
  }