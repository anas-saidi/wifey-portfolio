import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { heroContent } from '../data/content';
import './HeroSection.css';

const HeroSection = () => {
  const statsRowRef = useRef(null);

  useEffect(() => {
    const countUp = (el) => {
      const target = +el.dataset.target;
      const duration = 1800;
      const start = performance.now();
      const step = (now) => {
        const p = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.floor(ease * target);
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = target;
      };
      requestAnimationFrame(step);
    };
    const row = statsRowRef.current;
    if (!row) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('[data-target]').forEach(countUp);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    io.observe(row);
    return () => io.disconnect();
  }, []);

  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg">
        <div className="bg-pool pool-red"></div>
        <div className="bg-pool pool-peach"></div>
        <div className="bg-pool pool-blush"></div>
        <div className="bg-pool pool-cream"></div>
        <div className="hero-grid"></div>
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>
        <div className="pulse-dot pd-1"></div>
        <div className="pulse-dot pd-2"></div>
      </div>

      <div className="hero-body">
        <div className="container hero-container relative">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line"></span>
            {heroContent.eyebrow}
          </div>

          <h1 className="hero-title">
            {heroContent.titleLine1}<br />
            <span className="text-gradient-primary">{heroContent.titleHighlight}</span>
          </h1>

          <p className="hero-subtitle">
            {heroContent.subtitle}
          </p>

          <div className="hero-actions">
            <a href="#campaigns" className="btn btn-primary">
              {heroContent.primaryButton} <ArrowRight size={18} />
            </a>
            <a href="#approach" className="btn btn-secondary">
              {heroContent.secondaryButton}
            </a>
          </div>
        </motion.div>
        </div>
      </div>

      {/* SVG liquid-glass filter definitions */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="liquidGlass" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.018 0.022" numOctaves="3" seed="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="14" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            <feColorMatrix in="displaced" type="matrix" values="1.01 0 0 0 -0.005 0 1.0 0 0 0 0 0 0.99 0 0.005 0 0 0 1 0" />
          </filter>
          <filter id="liquidGlassStrong" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
            <feTurbulence type="fractalNoise" baseFrequency="0.016 0.020" numOctaves="4" seed="5" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="22" xChannelSelector="R" yChannelSelector="G" result="displaced" />
            <feColorMatrix in="displaced" type="matrix" values="1.02 0 0 0 -0.010 0 1.0 0 0 0 0 0 0.98 0 0.010 0 0 0 1 0" />
          </filter>
        </defs>
      </svg>

      <div className="stats-strip">
        <div className="container">
          <div className="stats-row" ref={statsRowRef}>
            {heroContent.stats.map((stat, i) => (
              <motion.div
                key={i}
                className={`liqglass${i === 1 ? ' featured' : ''}`}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.55 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="liqglass-specular"></div>
                <div className="liqglass-rim"></div>
                <div className="liqglass-fog"></div>
                <div className="liqglass-content">
                  <div className="stat-num">
                    <span data-target={stat.num}>0</span>
                    <span className="stat-suffix">{stat.suffix}</span>
                  </div>
                  <div className="stat-rule"></div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-caption">{stat.caption}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <div className="scroll-cue-line"></div>
        <div className="scroll-cue-text">{heroContent.scrollCue}</div>
      </div>
    </section>
  );
};

export default HeroSection;
