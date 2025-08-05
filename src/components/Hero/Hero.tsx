import React from 'react';
import { Button } from '../ui';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Digital Presence, <span className="gradient-text">Perfected</span>.
          </h1>
          <p className={styles.subtitle}>
            We craft elegant websites, powerful online stores, and secure business hubs. 
            Your vision, brought to life with clarity and purpose.
          </p>
          <div className={styles.cta}>
            <Button 
              variant="accent" 
              size="large" 
              rightIcon={<ArrowRight size={20} />}
              onClick={() => window.location.href = '/discovery'}
            >
              Begin Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};