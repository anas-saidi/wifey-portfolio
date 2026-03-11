import React from 'react';
import { X, Calendar, PenTool, FileText, Monitor, Folder, Image, ArrowUpRight } from 'lucide-react';
import { modalContent } from '../data/content';
import './CampaignModal.css';

const DeliverableIcon = ({ type }) => {
  const t = type?.toLowerCase();
  if (t === 'slides' || t === 'presentation') return <Monitor size={16} />;
  if (t === 'folder' || t === 'dossier') return <Folder size={16} />;
  if (t === 'image') return <Image size={16} />;
  return <FileText size={16} />;
};

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

          {campaign.deliverables?.length > 0 && (
            <div className="modal-deliverables">
              <h3>{modalContent.deliverablesTitle}</h3>
              <div className="deliverables-grid">
                {campaign.deliverables.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="deliverable-link"
                  >
                    <div className="deliverable-icon">
                      <DeliverableIcon type={item.type} />
                    </div>
                    <div className="deliverable-info">
                      <span className="deliverable-label">{item.label}</span>
                      <span className="deliverable-type">{item.type}</span>
                    </div>
                    <ArrowUpRight size={16} className="deliverable-arrow" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CampaignModal;
