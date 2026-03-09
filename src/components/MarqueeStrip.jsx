import React from 'react';
import { marqueeContent } from '../data/content';
import './MarqueeStrip.css';

const MarqueeStrip = () => {
  const doubled = [...marqueeContent.items, ...marqueeContent.items];
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-sep">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeStrip;
