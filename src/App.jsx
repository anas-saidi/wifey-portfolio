import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CampaignGallery from './components/CampaignGallery';
import { footerContent } from './data/content';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CampaignGallery />
      </main>
      
      <footer style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--text-muted)', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
        <p>© {new Date().getFullYear()} {footerContent.text}</p>
      </footer>
    </div>
  );
}

export default App;
