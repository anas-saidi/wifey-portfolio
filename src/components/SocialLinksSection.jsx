import { motion } from 'framer-motion';
import { ArrowUpRight, Instagram, Linkedin } from 'lucide-react';
import { socialContent } from '../data/content';
import './SocialLinksSection.css';

const iconByPlatform = {
  instagram: Instagram,
  linkedin: Linkedin,
};

const SocialLinksSection = () => {
  const companies = Array.isArray(socialContent?.companies) ? socialContent.companies : [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="social-section" id="social">
      <div className="container">
        <motion.div
          className="social-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">{socialContent?.sectionLabel}</div>
          <h2
            className="about-heading"
            dangerouslySetInnerHTML={{ __html: socialContent?.sectionTitle || '' }}
          />
          {socialContent?.sectionSubtitle && (
            <p className="social-subtitle">{socialContent.sectionSubtitle}</p>
          )}
        </motion.div>

        {companies.map((company, ci) => (
          <motion.div
            key={ci}
            className="social-company-group"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: ci * 0.1 }}
          >
            {company.name && (
              <div className="social-company-header">
                <span className="social-company-name">{company.name}</span>
                {company.contextLine && (
                  <span className="social-company-context">{company.contextLine}</span>
                )}
              </div>
            )}
            <motion.div
              className="social-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-120px" }}
            >
              {Array.isArray(company.links) && company.links.map((item, index) => {
                const Icon = iconByPlatform[item?.platform] || ArrowUpRight;
                const href = typeof item?.url === 'string' ? item.url : '#';

                return (
                  <motion.a
                    key={`${item?.platform || 'link'}-${index}`}
                    className="social-card glass-panel"
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={cardVariants}
                  >
                    <span className="social-icon" aria-hidden="true">
                      <Icon />
                    </span>
                    <span className="social-card-body">
                      <span className="social-card-title">{item?.label}</span>
                      {item?.description && (
                        <span className="social-card-desc">{item.description}</span>
                      )}
                    </span>
                    <span className="social-arrow" aria-hidden="true">
                      <ArrowUpRight />
                    </span>
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SocialLinksSection;

    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="social-section" id="social">
      <div className="container">
        <motion.div
          className="social-header"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="section-label">{socialContent?.sectionLabel}</div>
          <h2
            className="about-heading"
            dangerouslySetInnerHTML={{ __html: socialContent?.sectionTitle || '' }}
          />
          {socialContent?.sectionSubtitle && (
            <p className="social-subtitle">{socialContent.sectionSubtitle}</p>
          )}
          {(socialContent?.companyName || socialContent?.contextLine) && (
            <p className="social-context">
              {socialContent?.companyName && (
                <span className="social-company">{socialContent.companyName}</span>
              )}
              {socialContent?.contextLine && (
                <span className="social-context-line">{socialContent.contextLine}</span>
              )}
            </p>
          )}
        </motion.div>

        <motion.div
          className="social-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          {links.map((item, index) => {
            const Icon = iconByPlatform[item?.platform] || ArrowUpRight;
            const href = typeof item?.url === 'string' ? item.url : '#';

            return (
              <motion.a
                key={`${item?.platform || 'link'}-${index}`}
                className="social-card glass-panel"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
              >
                <span className="social-icon" aria-hidden="true">
                  <Icon />
                </span>
                <span className="social-card-body">
                  <span className="social-card-title">{item?.label}</span>
                  {item?.description && (
                    <span className="social-card-desc">{item.description}</span>
                  )}
                </span>
                <span className="social-arrow" aria-hidden="true">
                  <ArrowUpRight />
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinksSection;

