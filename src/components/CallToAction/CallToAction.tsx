import React from 'react';
import { Button } from '../ui';
import { MessageCircle } from 'lucide-react';
import styles from './CallToAction.module.css';

export const CallToAction: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.headline}>Ready to Make an Impact?</h2>
          <p className={styles.description}>
            Your vision deserves a conversation. Let's find the perfect path forward, together.
          </p>
          <div className={styles.actions}>
            <Button 
              variant="accent" 
              size="large" 
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