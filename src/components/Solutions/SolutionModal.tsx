import React from 'react';
import { Card, CardBody, Button } from '../ui';
import { X, Check, ArrowRight, Mail } from 'lucide-react';
import styles from './SolutionModal.module.css';

export interface SolutionDetails {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  priceDetails: string;
  description: string;
  features: string[];
  detailedFeatures: {
    category: string;
    items: string[];
  }[];
  timeline: string;
  process: string[];
  addOns?: {
    name: string;
    price: string;
    description: string;
  }[];
}

interface SolutionModalProps {
  solution: SolutionDetails;
  onClose: () => void;
}

export const SolutionModal: React.FC<SolutionModalProps> = ({ solution, onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleGetStarted = () => {
    window.location.href = '/discovery';
  };

  const handleContact = () => {
    window.location.href = '/connect';
  };

  return (
    <div className={styles.modalOverlay} onClick={handleOverlayClick}>
      <Card variant="elevated" className={styles.modal}>
        <CardBody className={styles.modalBody}>
          <button 
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
          
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>{solution.title}</h2>
            <p className={styles.modalSubtitle}>{solution.subtitle}</p>
            <div className={styles.priceSection}>
              <div className={styles.price}>{solution.price}</div>
              <div className={styles.priceDetails}>{solution.priceDetails}</div>
            </div>
          </div>
          
          <div className={styles.modalContent}>
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>What You Get</h3>
              <p className={styles.description}>{solution.description}</p>
              
              <div className={styles.featuresGrid}>
                {solution.detailedFeatures.map((category, index) => (
                  <div key={index} className={styles.featureCategory}>
                    <h4 className={styles.categoryTitle}>{category.category}</h4>
                    <ul className={styles.featureList}>
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className={styles.featureItem}>
                          <Check size={16} className={styles.checkIcon} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Our Process</h3>
              <div className={styles.processSteps}>
                {solution.process.map((step, index) => (
                  <div key={index} className={styles.processStep}>
                    <div className={styles.stepNumber}>{index + 1}</div>
                    <div className={styles.stepContent}>{step}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.section}>
              <h3 className={styles.sectionTitle}>Timeline & Delivery</h3>
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <strong>Expected Timeline:</strong> {solution.timeline}
                </div>
                <div className={styles.timelineNote}>
                  Timeline may vary based on project complexity and your response time to feedback.
                </div>
              </div>
            </div>
            
            {solution.addOns && solution.addOns.length > 0 && (
              <div className={styles.section}>
                <h3 className={styles.sectionTitle}>Optional Add-Ons</h3>
                <div className={styles.addOnsGrid}>
                  {solution.addOns.map((addOn, index) => (
                    <div key={index} className={styles.addOnCard}>
                      <div className={styles.addOnHeader}>
                        <h4 className={styles.addOnName}>{addOn.name}</h4>
                        <div className={styles.addOnPrice}>{addOn.price}</div>
                      </div>
                      <p className={styles.addOnDescription}>{addOn.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className={styles.modalActions}>
            <Button
              variant="accent"
              size="large"
              onClick={handleGetStarted}
              rightIcon={<ArrowRight size={20} />}
              className={styles.primaryAction}
            >
              Start Your Project
            </Button>
            <Button
              variant="glass"
              size="large"
              onClick={handleContact}
              rightIcon={<Mail size={20} />}
            >
              Ask Questions
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};