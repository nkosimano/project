import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui';
import { MessageCircle } from 'lucide-react';
import styles from './CallToAction.module.css';

export const CallToAction: React.FC = () => {
  const navigate = useNavigate();
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
              onClick={() => navigate('/connect')}
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};