import React, { Suspense, lazy } from 'react';
import { LoadingSpinner } from './components/ui';
import { WebGLBackground } from './components/WebGLBackground/WebGLBackground';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Solutions } from './components/Solutions/Solutions';
import { CallToAction } from './components/CallToAction/CallToAction';
import { Footer } from './components/Footer/Footer';
import './styles/global.css';

// Lazy load page components with better error handling
const QuestionnairePage = lazy(() => 
  import('./components/Questionnaire/QuestionnairePage').then(module => ({ 
    default: module.QuestionnairePage 
  }))
);
const Connect = lazy(() => 
  import('./components/Connect/Connect').then(module => ({ 
    default: module.Connect 
  }))
);
const Privacy = lazy(() => 
  import('./components/Privacy/Privacy').then(module => ({ 
    default: module.Privacy 
  }))
);
const Terms = lazy(() => 
  import('./components/Terms/Terms').then(module => ({ 
    default: module.Terms 
  }))
);
const Projects = lazy(() => 
  import('./components/Projects/Projects').then(module => ({ 
    default: module.Projects 
  }))
);

// Enhanced loading component with themed spinner
const PageLoader = () => (
  <LoadingSpinner 
    fullScreen 
    size="large" 
    message="Loading page..." 
  />
);

function App() {
  // Simple routing based on pathname
  const isDiscoveryPage = window.location.pathname === '/discovery';
  const isConnectPage = window.location.pathname === '/connect';
  const isPrivacyPage = window.location.pathname === '/privacy';
  const isTermsPage = window.location.pathname === '/terms';
  const isProjectsPage = window.location.pathname === '/projects';

  if (isDiscoveryPage) {
    return (
      <div className="min-h-screen" style={{ paddingTop: '80px' }}>
        <WebGLBackground />
        <Header />
        <Suspense fallback={<PageLoader />}>
          <QuestionnairePage />
        </Suspense>
        <Footer />
      </div>
    );
  }

  if (isConnectPage) {
    return (
      <div className="min-h-screen" style={{ paddingTop: '80px' }}>
        <WebGLBackground />
        <Header />
        <Suspense fallback={<PageLoader />}>
          <Connect />
        </Suspense>
        <Footer />
      </div>
    );
  }

  if (isPrivacyPage) {
    return (
      <div className="min-h-screen" style={{ paddingTop: '80px' }}>
        <WebGLBackground />
        <Header />
        <Suspense fallback={<PageLoader />}>
          <Privacy />
        </Suspense>
        <Footer />
      </div>
    );
  }

  if (isTermsPage) {
    return (
      <div className="min-h-screen" style={{ paddingTop: '80px' }}>
        <WebGLBackground />
        <Header />
        <Suspense fallback={<PageLoader />}>
          <Terms />
        </Suspense>
        <Footer />
      </div>
    );
  }

  if (isProjectsPage) {
    return (
      <div className="min-h-screen" style={{ paddingTop: '80px' }}>
        <WebGLBackground />
        <Header />
        <Suspense fallback={<PageLoader />}>
          <Projects />
        </Suspense>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ paddingTop: '80px' }}>
      <WebGLBackground />
      <Header />
      <Hero />
      <Solutions />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;