'use client';

import { motion } from 'framer-motion';
import { IconBrandNextjs, IconBrandReact, IconBrandTypescript, IconBrandJavascript, IconBrandPython, IconBrandNodejs, IconBrandGit, IconBrandFigma, IconBrandCpp, IconDatabase, IconCoffee, IconBrandUnity, IconBrandBlender } from '@tabler/icons-react';
import styles from '@/app/styles/Hero.module.css';

const skills = [
  { name: 'Next.js', icon: <IconBrandNextjs /> },
  { name: 'React', icon: <IconBrandReact /> },
  { name: 'TypeScript', icon: <IconBrandTypescript /> },
  { name: 'JavaScript', icon: <IconBrandJavascript /> },
  { name: 'Node.js', icon: <IconBrandNodejs /> },
  { name: 'Python', icon: <IconBrandPython /> },
  { name: 'C++', icon: <IconBrandCpp /> },
  { name: 'Java', icon: <IconCoffee /> },
  { name: 'C', nameOnly: true },
  { name: 'Express.js', nameOnly: true },
  { name: 'Unity', icon: <IconBrandUnity /> },
  { name: 'Blender', icon: <IconBrandBlender /> },
  { name: 'Figma', icon: <IconBrandFigma /> },
  { name: 'PostgreSQL', icon: <IconDatabase /> },
  { name: 'Git/Github', icon: <IconBrandGit /> }
];

export default function Skills({ id }: { id?: string })  {
  return (
    <section className={styles.skillsSection}>
      <h2 className={styles.sectionTitle}>Technical Expertise</h2>
      
      <div className={styles.skillsGrid}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={styles.skillItem}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            {skill.icon ? (
              <div className={styles.skillIcon}>
                {skill.icon}
              </div>
            ) : (
              <span className={styles.skillName}>{skill.name}</span>
            )}
            <p className={styles.skillText}>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}