import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import MarqueeStrip from './components/MarqueeStrip';
import AboutSection from './components/AboutSection';
import ApproachSection from './components/ApproachSection';
import CampaignGallery from './components/CampaignGallery';
import SocialLinksSection from './components/SocialLinksSection';
import { footerContent } from './data/content';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="site-bg" aria-hidden="true">
        <div className="site-bg-grid"></div>
        <div className="site-bg-drift site-drift-1"></div>
        <div className="site-bg-drift site-drift-2"></div>
        <div className="site-bg-drift site-drift-3"></div>
      </div>
      <Header />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <AboutSection />
        <ApproachSection />
        <CampaignGallery />
        <SocialLinksSection />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
        <p>© {new Date().getFullYear()} {footerContent.text}</p>
      </footer>
    </div>
  );
}

export default App;
