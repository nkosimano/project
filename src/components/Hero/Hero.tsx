import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';
import gsap from 'gsap';

export const Hero: React.FC = () => {
  const rootRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!rootRef.current) return;
    const ctx = gsap.context(() => {
      gsap.set([`.${styles.headline}`, `.${styles.subtitle}`, `.${styles.cta}`], { opacity: 0, y: 24 });
      gsap.to(`.${styles.headline}`, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
      gsap.to(`.${styles.subtitle}`, { opacity: 1, y: 0, duration: 0.8, delay: 0.15, ease: 'power3.out' });
      gsap.to(`.${styles.cta}`, { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className={styles.hero} ref={rootRef}>
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
              onClick={() => navigate('/discovery')}
            >
              Begin Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};