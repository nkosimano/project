import React, { useState } from 'react';
import { Button } from '../ui';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';

// Preload page components on hover for instant navigation
const preloadPage = (path: string) => {
  switch (path) {
    case '/discovery':
      import('../Questionnaire/QuestionnairePage');
      break;
    case '/connect':
      import('../Connect/Connect');
      break;
    case '/projects':
      import('../Projects/Projects');
      break;
    case '/privacy':
      import('../Privacy/Privacy');
      break;
    case '/terms':
      import('../Terms/Terms');
      break;
  }
};

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.brand}>
            <button 
              className={styles.logoButton}
              onClick={() => window.location.href = '/'}
              aria-label="Go to homepage"
            >
              <h1 className={styles.logo}>RuleRev</h1>
            </button>
          </div>
          
          <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
            <a 
              href="#solutions" 
              className={styles.navLink}
            >
              Solutions
            </a>
            <a 
              href="/projects" 
              className={styles.navLink}
              onMouseEnter={() => preloadPage('/projects')}
            >
              Projects
            </a>
            <a 
              href="/discovery" 
              className={styles.navLink}
              onMouseEnter={() => preloadPage('/discovery')}
            >
              Discovery
            </a>
            <a 
              href="/connect" 
              className={styles.navLink}
              onMouseEnter={() => preloadPage('/connect')}
            >
              Connect
            </a>
          </nav>
          
          <button 
            className={styles.menuToggle}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};