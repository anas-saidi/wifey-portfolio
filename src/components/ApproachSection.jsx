import { motion } from 'framer-motion';
import { approachContent } from '../data/content';
import './ApproachSection.css';

const ApproachSection = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="about-section" id="approach" style={{ paddingTop: '2rem' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div 
          className="about-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{ textAlign: 'center', margin: '0 auto' }}
        >
          <motion.div className="section-label" variants={itemVariants} style={{ justifyContent: 'center' }}>{approachContent.sectionLabel}</motion.div>
          <motion.h2 className="about-heading" dangerouslySetInnerHTML={{ __html: approachContent.sectionTitle }} variants={itemVariants}></motion.h2>

          <motion.div className="pillars" style={{ marginTop: '3rem', textAlign: 'left' }}>
             {approachContent.pillars.map((pillar, index) => (
               <motion.div className="pillar glass-panel" key={index} variants={itemVariants}>
                 <div className="pillar-icon">
                    {index === 0 ? '🎯' : index === 1 ? '⚡' : '🛡️'}
                 </div>
                 <div className="pillar-content">
                   <div className="pillar-name">{pillar.title}</div>
                   <div className="pillar-desc">{pillar.description}</div>
                 </div>
               </motion.div>
             ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default ApproachSection;
