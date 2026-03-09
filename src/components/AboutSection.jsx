import { motion } from 'framer-motion';
import { aboutContent } from '../data/content';
import './AboutSection.css';

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="about-section" id="about">
      <div className="container about-inner">
        
        {/* Left Column: Abstract Portrait */}
        <motion.div 
          className="about-visual"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-portrait">
            <div className="portrait-icon">✦</div>
          </div>
          <motion.div 
            className="about-badge glass-panel"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="about-badge-num">{aboutContent.badgeNum}</div>
            <div className="about-badge-label">{aboutContent.badgeLabel}</div>
          </motion.div>
        </motion.div>

        {/* Right Column: Copy & Pillars */}
        <motion.div 
          className="about-text"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="section-label" variants={itemVariants}>{aboutContent.sectionLabel}</motion.div>
          <motion.h2 className="about-heading" dangerouslySetInnerHTML={{ __html: aboutContent.sectionTitle }} variants={itemVariants}></motion.h2>
          <motion.p className="about-subtitle" variants={itemVariants}>
            {aboutContent.sectionSubtitle}
          </motion.p>
          
          <motion.div className="about-bio" variants={containerVariants}>
            {aboutContent.bio.map((paragraph, index) => (
              <motion.p key={index} variants={itemVariants} className="about-copy">
                {paragraph}
              </motion.p>
            ))}
          </motion.div>

          <motion.div className="skills-grid" variants={containerVariants} style={{ marginTop: '2rem' }}>
            {aboutContent.skills.map(skill => (
              <motion.span className="skill-chip" key={skill} variants={itemVariants}>{skill}</motion.span>
            ))}
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default AboutSection;
