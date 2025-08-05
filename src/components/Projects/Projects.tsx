import React, { useState } from 'react';
import { Card, CardBody, Button } from '../ui';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { ProjectModal, Project } from './ProjectModal';
import styles from './Projects.module.css';

// Array of project data with all projects included
const projects: Project[] = [
  {
    title: 'Africa Tennis Platform',
    description: 'Spearheaded DevOps initiatives for a high-traffic sports platform, focusing on building a scalable, secure, and automated cloud infrastructure. Led comprehensive database architecture refinement and optimization, implementing advanced security measures and performance tuning.',
    image: 'https://images.unsplash.com/photo-1528410390886-e62811f41bed?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['AWS Lambda', 'Docker', 'Kubernetes', 'GitHub Actions', 'PostgreSQL'],
    outcomes: [
      'Reduced deployment cycle time by 93%',
      'Achieved 99.95% system uptime',
      'Decreased infrastructure costs by 25%'
    ],
    links: {
      live: 'https://africatennis.com'
    }
  },
  {
    title: 'Charted Art Platform',
    description: 'Drove the DevOps strategy for an innovative art analytics platform, emphasizing rapid iteration cycles, robust infrastructure on Google Cloud Platform (GCP), and efficient data processing pipelines for complex analytics.',
    image: 'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2400',
    technologies: ['GCP Compute Resources', 'Docker', 'Kubernetes', 'Terraform', 'Azure DevOps', 'API Gateway'],
    outcomes: [
      'Improved data processing speeds by 20%',
      'Achieved 99.9% service uptime',
      'Reduced environment setup time by 60%'
    ],
    links: {
      live: 'https://chartedart.com'
    }
  },
  {
    title: 'Adv. Motsusi Professional Website',
    description: "Developed a professional website for Adv. Malebogo, a legal consultant. The site enhances online presence and client accessibility, featuring a clean design, user-friendly experience, and SEO optimization, aligning with Adv. Malebogo's testimonial.",
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=2000',
    technologies: ['React', 'Tailwind CSS', 'Vite', 'SEO'],
    outcomes: [
      'Established a strong professional online identity for Adv. Motsusi.',
      'Improved accessibility for potential clients seeking legal services.',
      'Enhanced search engine visibility through targeted SEO strategies.'
    ],
    links: {
      live: 'https://www.advmotsusi.co.za'
    }
  },
  {
    title: 'RTDynamicBC Website',
    description: 'Developed a modern, professional website for RTDynamicBC, a chartered accountant consultancy firm. The website features a clean design, responsive layout, and intuitive navigation to showcase their services and expertise.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2124&q=80',
    technologies: ['HTML', 'CSS', 'Java'],
    outcomes: [
      'Created a professional online presence',
      'Improved client engagement and accessibility',
      'Enhanced brand visibility'
    ],
    links: {
      live: 'https://rtdynamicbc.co.za'
    }
  },
  {
    title: "ReelApps: The Future of Talent Acquisition",
    description: "ReelApps is a comprehensive, AI-powered ecosystem that transforms talent discovery and showcase. It integrates dynamic candidate profiles (ReelCV), advanced skill verification (ReelSkills), and intelligent recruitment tools (ReelHunter) with personality assessments (ReelPersona) and collaborative project showcases (ReelProjects). Our platform leverages cutting-edge AI and secure, accessible technology to provide personalized experiences, reduce bias, and facilitate authentic talent connections, ensuring skills and real capabilities speak louder than traditional resumes.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070",
    technologies: [
      "React",
      "TypeScript",
      "AI/ML (Google Gemini API, Python FastAPI)",
      "PostgreSQL (Supabase)",
      "AWS Amplify (Deployment)",
      "Zustand (State Management)",
      "GitHub Actions (CI/CD)"
    ],
    outcomes: [
      "Transformed talent acquisition with an AI-driven ecosystem emphasizing verified skills and real-world projects",
      "Implemented secure, modal-based authentication with Single Sign-On (SSO) and role-based access across all micro-frontends, enhancing user experience and security",
      "Developed an adaptive learning and matching system powered by advanced AI analysis for job descriptions, candidate profiles, and project evidence"
    ],
    links: {
      live: "https://www.reelapps.co.za",
      reelcv: "https://reelcv.reelapps.co.za",
      reelhunter: "https://reelhunter.reelapps.co.za"
    }
  },
  {
    title: 'Sensalearn',
    description: 'Developed an innovative AI-powered language learning platform that leverages cutting-edge artificial intelligence to provide personalized and adaptive learning experiences. The platform features intelligent curriculum adaptation, real-time progress tracking, and interactive learning modules.',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2124&q=80',
    technologies: ['React', 'TypeScript', 'AI/ML', 'Google Cloud', 'Firebase'],
    outcomes: [
      'Created an adaptive learning system powered by AI',
      'Implemented personalized learning paths for each user',
      'Enhanced language acquisition through interactive modules'
    ],
    links: {
      live: 'https://sensa-ai-922211711157.europe-west1.run.app/'
    }
  },
  {
    title: 'IP Navigator',
    description: 'A platform designed for end-users to assess the patentability of their ideas, providing an actual score based on innovative algorithms. This tool empowers innovators by offering clear insights into the intellectual property landscape.',
    image: 'https://images.unsplash.com/photo-1626908013943-df94de54984c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    technologies: ['React', 'Python (Flask/FastAPI)', 'AI/ML (for patentability scoring)', 'PostgreSQL'],
    outcomes: [
      'Provided users with actionable patentability scores for their ideas',
      'Streamlined the initial intellectual property assessment process',
      'Empowered innovators with data-driven insights into patent potential'
    ],
    links: {
      live: 'https://ipnavigator.co.za'
    }
  },
  {
    title: 'THFC Scan Platform',
    description: 'A robust platform developed to optimize The Health Food Company (THFC) supply chain processes and operations. It facilitates efficient scanning, tracking, and management of inventory, ensuring seamless logistics and improved operational transparency.',
    image: 'https://images.unsplash.com/photo-1672552226380-486fe900b322?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2FyZWhvdXNlfGVufDB8fDB8fHww',
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Barcode Scanning APIs'],
    outcomes: [
      'Optimized supply chain efficiency for THFC',
      'Improved inventory accuracy and real-time tracking',
      'Enhanced operational transparency across the supply chain'
    ],
    links: {
      live: 'https://www.thfcscan.co.za'
    }
  },
  {
    title: 'Landulani Physiotherapy Website',
    description: 'Developed a professional online presence for a physiotherapy practice dedicated to improving quality of mobility through expert, evidence-based care. The site empowers patients through education and showcases the practice\'s services and expertise.',
    image: 'https://images.unsplash.com/photo-1622878179314-0b25f2ad50e4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGh5c2lvdGhlcmFweSUyMGNsaW5pY3xlbnwwfHwwfHx8MA%3D%3D',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'SEO'],
    outcomes: [
      'Established a trusted online presence for the physiotherapy clinic.',
      'Improved patient access to information and appointment booking.',
      'Showcased the principal physiotherapist\'s expertise and special interests.'
    ],
    links: {
      live: 'https://www.landulaniphysio.com'
    }
  }
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className={styles.projectsPage}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.title}>Featured Projects</h1>
          <p className={styles.subtitle}>
            Showcasing innovative solutions that demonstrate expertise in cloud architecture,
            DevOps practices, and digital transformation.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              variant="elevated" 
              className={`${styles.projectCard} ${styles[`delay-${index % 3}`]}`}
            >
              <div className={styles.imageContainer}>
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  className={styles.projectImage}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = `https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=800&h=450&fit=crop`;
                  }}
                />
                <div className={styles.imageOverlay} />
                <div className={styles.projectTitle}>
                  <h3>{project.title}</h3>
                </div>
              </div>
              
              <CardBody className={styles.projectBody}>
                <p className={styles.projectDescription}>
                  {project.description.length > 120 
                    ? `${project.description.substring(0, 120)}...` 
                    : project.description
                  }
                </p>
                
                <div className={styles.techStack}>
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={styles.techMore}>
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className={styles.projectActions}>
                  <Button
                    variant="accent"
                    size="small"
                    onClick={() => openModal(project)}
                    rightIcon={<Eye size={16} />}
                  >
                    View Details
                  </Button>
                  
                  {project.links.live && (
                    <Button
                      variant="ghost"
                      size="small"
                      onClick={() => window.open(project.links.live, '_blank')}
                      rightIcon={<ExternalLink size={16} />}
                    >
                      Live Site
                    </Button>
                  )}
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={closeModal} 
          />
        )}
      </div>
    </div>
  );
};