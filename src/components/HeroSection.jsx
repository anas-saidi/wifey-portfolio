import React from 'react';
import { ArrowRight, Activity, Network } from 'lucide-react';
import { motion } from 'framer-motion';
import { heroContent } from '../data/content';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="hero">
      {/* Background animated organic curves */}
      <div className="hero-background">
        <div className="curve curve-1"></div>
        <div className="curve curve-2"></div>
      </div>

      <div className="container hero-container relative">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="hero-title">
            {heroContent.titleLine1} <br />
            <span className="text-gradient-primary">{heroContent.titleHighlight}</span>
          </h1>
          
          <p className="hero-subtitle">
            {heroContent.subtitle}
          </p>
          
          <div className="hero-actions">
            <a href="#campaigns" className="btn btn-primary">
              {heroContent.primaryButton} <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn btn-secondary glass-panel">
              <Network size={18} />
              <span>{heroContent.secondaryButton}</span>
            </a>
          </div>
        </motion.div>
        
        {/* Optional decorative visual element */}
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-panel profile-abstract">
             <div className="pulse-ring"></div>
             {/* Abstract data-flow graphic mimicking IAM's branding */}
             <div className="data-flow-graphic">
               <div className="wave"></div>
               <div className="wave delay"></div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
