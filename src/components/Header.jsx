import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { navContent } from '../data/content';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      window.requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        setScrollY(y);
        setIsScrolled(y > 20);
        ticking = false;
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollProgress = Math.min(1, Math.max(0, (scrollY - 20) / 220));
  const navBlurPx = `${Math.round(28 + 20 * scrollProgress)}px`; // 28px -> 48px
  const navBgAlpha = (0.62 + 0.22 * scrollProgress).toFixed(2); // 0.62 -> 0.84

  return (
    <header
      className={`app-header ${isScrolled ? 'scrolled glass-panel' : ''}`}
      style={isScrolled ? { '--nav-blur': navBlurPx, '--nav-bg-alpha': navBgAlpha } : undefined}
    >
      <div className="container header-container">
        <div className="logo">
          <svg className="logo-heart" width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M11 19C5.5 14.5 1 11 1 6.5C1 3.46 3.46 1 6.5 1C8.3 1 9.92 1.9 11 3.26C12.08 1.9 13.7 1 15.5 1C18.54 1 21 3.46 21 6.5C21 11 16.5 14.5 11 19Z" fill="#E31837"/>
          </svg>
          <span className="logo-text">{navContent.logo}</span>
        </div>

        <nav className={`desktop-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#hero" onClick={() => setMobileMenuOpen(false)}>{navContent.home}</a>
          <a href="#approach" onClick={() => setMobileMenuOpen(false)}>{navContent.approach}</a>
          <a href="#campaigns" onClick={() => setMobileMenuOpen(false)}>{navContent.campaigns}</a>
          <a href="mailto:kandil.salma00@gmail.com" className="nav-cta">{navContent.contact}</a>
        </nav>

        <div className="header-actions">
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
