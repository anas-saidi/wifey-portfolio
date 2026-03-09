import React from 'react';
import { X, Calendar, PenTool } from 'lucide-react';
import { modalContent } from '../data/content';
import './CampaignModal.css';

const CampaignModal = ({ campaign, onClose }) => {
  if (!campaign) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={24} />
        </button>
        
        <div className="modal-header-image">
          <img src={campaign.thumbnail} alt={campaign.title} loading="lazy" />
          <div className="modal-header-overlay">
             <span className="modal-type badge">{campaign.type}</span>
             <h2 className="modal-title">{campaign.title}</h2>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-meta">
            <div className="meta-item">
              <Calendar size={18} className="text-red" />
              <div>
                <span className="meta-label">{modalContent.dateLabel}</span>
                <span className="meta-value">{campaign.date}</span>
              </div>
            </div>
            <div className="meta-item">
              <PenTool size={18} className="text-red" />
              <div>
                <span className="meta-label">{modalContent.roleLabel}</span>
                <span className="meta-value">{campaign.role}</span>
              </div>
            </div>
          </div>

          <div className="modal-description">
            <h3>{modalContent.overviewTitle}</h3>
            <p>{campaign.description}</p>
          </div>

          <div className="modal-tools">
            <h3>{modalContent.toolsTitle}</h3>
            <div className="tools-list">
              {campaign.tools.map((tool, idx) => (
                <span key={idx} className="tool-tag">{tool}</span>
              ))}
            </div>
          </div>

          <div className="modal-gallery">
            <h3>{modalContent.galleryTitle}</h3>
            <div className="gallery-images">
              {campaign.gallery.map((img, idx) => (
                <img key={idx} src={img} alt={`${campaign.title} - vue ${idx + 1}`} loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignModal;
