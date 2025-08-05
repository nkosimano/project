import React from 'react';
import { useState } from 'react';
import { Card, CardHeader, CardBody, CardTitle, CardContent, Button } from '../ui';
import { Globe, Lock, ShoppingCart, Star } from 'lucide-react';
import { SolutionModal } from './SolutionModal';
import { solutionDetails } from './solutionData';
import styles from './Solutions.module.css';

const solutions = [
  {
    id: 'storefront',
    icon: Globe,
    title: 'The Digital Storefront',
    badge: 'Most Popular',
    price: 'From R 8,500',
    subtitle: 'For: Professionals who need a powerful first impression.',
    features: [
      'A beautiful site to tell your story (up to 5 pages)',
      'Flawless on every device',
      'Found by your ideal customers (SEO)',
      'Seamless contact integration',
      'Swift, secure hosting'
    ]
  },
  {
    id: 'workspace',
    icon: Lock,
    title: 'The Private Workspace',
    price: 'From R 20,000',
    subtitle: 'For: Teams that need a secure, central hub.',
    features: [
      'An exclusive, secure world for your team',
      'Custom tools built for your workflow',
      'Controlled access with user roles',
      'Centralized document repository',
      'Fortified security protocols'
    ]
  },
  {
    id: 'marketplace',
    icon: ShoppingCart,
    title: 'The Online Marketplace',
    price: 'From R 25,000',
    subtitle: 'For: Businesses ready to sell to the world.',
    features: [
      'A dynamic, intuitive e-commerce platform',
      'Effortless product management (20 setup for you)',
      'Trusted, secure payment gateways',
      'Personalized customer accounts',
      'Built to scale as you grow'
    ]
  }
];

export const Solutions: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  const openModal = (solutionId: string) => {
    setSelectedSolution(solutionId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedSolution(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className={styles.section} id="solutions">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Three paths to digital excellence.</h2>
        </div>
        
        <div className={styles.grid}>
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            const isPopular = solution.badge === 'Most Popular';
            
            return (
              <Card 
                key={solution.id} 
                variant={isPopular ? 'highlighted' : 'elevated'}
                className={`${styles.card} ${isPopular ? styles.popular : ''}`}
              >
                {isPopular && (
                  <div className={styles.badge}>
                    <Star size={16} />
                    <span>{solution.badge}</span>
                  </div>
                )}
                
                <CardHeader>
                  <div className={styles.cardHeader}>
                    <div className={styles.iconWrapper}>
                      <IconComponent size={28} className={styles.icon} />
                    </div>
                    <div>
                      <CardTitle className={styles.cardTitle}>{solution.title}</CardTitle>
                      <div className={styles.price}>{solution.price}</div>
                    </div>
                  </div>
                  <p className={styles.subtitle}>{solution.subtitle}</p>
                </CardHeader>
                
                <CardBody>
                  <div className={styles.features}>
                    <h4 className={styles.featuresTitle}>Includes:</h4>
                    <ul className={styles.featuresList}>
                      {solution.features.map((feature, index) => (
                        <li key={index} className={styles.feature}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={styles.cardActions}>
                    <Button 
                      variant={isPopular ? 'accent' : 'glass'} 
                      fullWidth
                      onClick={() => openModal(solution.id)}
                    >
                      Learn More
                    </Button>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>

        {selectedSolution && (
          <SolutionModal 
            solution={solutionDetails[selectedSolution]} 
            onClose={closeModal} 
          />
        )}
      </div>
    </section>
  );
};