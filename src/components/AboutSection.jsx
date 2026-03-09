import React from 'react';
import { Users, Lightbulb, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { aboutContent } from '../data/content';
import './AboutSection.css';

const AboutSection = () => {
  const iconMap = [
    <Users size={32} className="text-red" />,
    <Lightbulb size={32} className="text-red" />,
    <ShieldCheck size={32} className="text-red" />
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="about-section" id="about">
      <div className="container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{aboutContent.sectionTitle}</h2>
          <p className="section-subtitle">
            {aboutContent.sectionSubtitle}
          </p>
        </motion.div>

        <motion.div 
          className="pillars-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {aboutContent.pillars.map((pillar, index) => (
            <motion.div key={index} className="glass-panel pillar-card" variants={itemVariants}>
              <div className="pillar-icon-wrapper">
                {iconMap[index]}
              </div>
              <h3 className="pillar-title">{pillar.title}</h3>
              <p className="pillar-description">{pillar.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
