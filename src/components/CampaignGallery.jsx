import React, { useState } from 'react';
import { campaigns } from '../data/campaigns';
import CampaignModal from './CampaignModal';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { galleryContent } from '../data/content';
import './CampaignGallery.css';

const CampaignGallery = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const openModal = (campaign) => {
    setSelectedCampaign(campaign);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCampaign(null);
    document.body.style.overflow = 'auto';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="gallery-section" id="campaigns">
      <div className="container">
        <motion.div 
          className="gallery-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">{galleryContent.sectionTitle}</h2>
          <p className="section-subtitle">
            {galleryContent.sectionSubtitle}
          </p>
        </motion.div>

        <motion.div 
          className="campaign-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {campaigns.map((campaign) => (
            <motion.div 
              key={campaign.id} 
              className="campaign-card glass-panel group"
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => openModal(campaign)}
            >
              <div className="card-image-wrapper">
                <img 
                  src={campaign.thumbnail} 
                  alt={campaign.title} 
                  className="card-image"
                  loading="lazy"
                />
                <div className="card-overlay">
                  <div className="view-btn">
                    {galleryContent.viewProjectButton} <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
              <div className="card-content">
                <div className="card-meta">
                  <span className="card-type">{campaign.type}</span>
                  <span className="card-date">{campaign.date}</span>
                </div>
                <h3 className="card-title">{campaign.title}</h3>
                <p className="card-role">{campaign.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedCampaign && (
        <CampaignModal campaign={selectedCampaign} onClose={closeModal} />
      )}
    </section>
  );
};

export default CampaignGallery;
