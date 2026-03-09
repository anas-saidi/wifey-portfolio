import React, { useState } from 'react';
import { campaigns } from '../data/campaigns';
import CampaignModal from './CampaignModal';
import { motion } from 'framer-motion';
import { galleryContent } from '../data/content';
import './CampaignGallery.css';

const bentoClass = ['bento-c1', 'bento-c2', 'bento-c3'];

const CampaignGallery = () => {
  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const openModal = (campaign) => {
    setSelectedCampaign(campaign);
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setSelectedCampaign(null);
    document.body.style.overflow = 'auto';
    document.body.classList.remove('modal-open');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
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
          <div className="section-label">{galleryContent.sectionLabel}</div>
          <h2 className="about-heading" dangerouslySetInnerHTML={{ __html: galleryContent.sectionTitle }}></h2>
          <p className="gallery-subtitle">{galleryContent.sectionSubtitle}</p>
        </motion.div>

        <motion.div
          className="campaign-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {campaigns.map((campaign, index) => (
            <motion.div
              key={campaign.id}
              className={`campaign-card ${bentoClass[index] || ''}`}
              variants={cardVariants}
              onClick={() => openModal(campaign)}
            >
              <img
                src={campaign.thumbnail}
                alt={campaign.title}
                className="card-image"
                loading="lazy"
              />
              <div className="card-overlay" />
              <div className="card-info">
                <div className="card-tag">
                  <span className="card-tag-dot" />
                  {campaign.type}
                </div>
                <h3 className="card-title">{campaign.title}</h3>
                <div className="card-meta">
                  <span>{campaign.date}</span>
                  <span className="card-meta-sep" />
                  <span>{campaign.role}</span>
                </div>
              </div>
              <div className="card-arrow">↗</div>
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
