import { SolutionDetails } from './SolutionModal';

export const solutionDetails: Record<string, SolutionDetails> = {
  storefront: {
    id: 'storefront',
    title: 'The Digital Storefront',
    subtitle: 'For professionals who need a powerful first impression',
    price: 'From R 8,500',
    priceDetails: 'One-time investment • No monthly fees',
    description: 'Transform your professional presence with a stunning website that tells your story, showcases your expertise, and converts visitors into clients. Perfect for consultants, agencies, and service providers who need to make an impact online.',
    features: [
      'A beautiful site to tell your story (up to 5 pages)',
      'Flawless on every device',
      'Found by your ideal customers (SEO)',
      'Seamless contact integration',
      'Swift, secure hosting'
    ],
    detailedFeatures: [
      {
        category: 'Design & Development',
        items: [
          'Custom responsive design tailored to your brand',
          'Up to 5 professionally crafted pages',
          'Mobile-first approach for all devices',
          'Fast loading times (under 3 seconds)',
          'Modern, clean aesthetic with your brand colors'
        ]
      },
      {
        category: 'Content & SEO',
        items: [
          'SEO-optimized content structure',
          'Google Analytics integration',
          'Meta tags and descriptions',
          'XML sitemap generation',
          'Local SEO optimization (if applicable)'
        ]
      },
      {
        category: 'Functionality',
        items: [
          'Contact forms with email notifications',
          'Social media integration',
          'Google Maps integration',
          'Newsletter signup forms',
          'Basic content management system'
        ]
      },
      {
        category: 'Hosting & Support',
        items: [
          '12 months of secure hosting included',
          'SSL certificate for security',
          'Regular backups and updates',
          '30 days of post-launch support',
          'Training on content updates'
        ]
      }
    ],
    timeline: '2-3 weeks from project start',
    process: [
      'Discovery call to understand your vision and requirements',
      'Brand analysis and design concept creation',
      'Content gathering and professional copywriting assistance',
      'Design mockups and your feedback incorporation',
      'Development and responsive testing across devices',
      'SEO optimization and performance tuning',
      'Launch, training, and handover with documentation'
    ],
    addOns: [
      {
        name: 'Professional Photography',
        price: 'From R 2,500',
        description: 'High-quality photos of your team, office, or products to enhance your site\'s visual appeal.'
      },
      {
        name: 'Advanced SEO Package',
        price: 'R 3,500',
        description: 'Comprehensive keyword research, competitor analysis, and advanced on-page optimization.'
      },
      {
        name: 'Content Writing',
        price: 'R 1,200/page',
        description: 'Professional copywriting that converts visitors into customers with compelling, SEO-friendly content.'
      }
    ]
  },
  workspace: {
    id: 'workspace',
    title: 'The Private Workspace',
    subtitle: 'For teams that need a secure, central hub',
    price: 'From R 20,000',
    priceDetails: 'Custom quote based on requirements',
    description: 'Create a secure, centralized digital workspace where your team can collaborate, share documents, and manage projects efficiently. Perfect for businesses that need internal tools, client portals, or team collaboration platforms.',
    features: [
      'An exclusive, secure world for your team',
      'Custom tools built for your workflow',
      'Controlled access with user roles',
      'Centralized document repository',
      'Fortified security protocols'
    ],
    detailedFeatures: [
      {
        category: 'Security & Access',
        items: [
          'Multi-factor authentication (MFA)',
          'Role-based access control',
          'Encrypted data transmission',
          'Regular security audits',
          'GDPR compliance features'
        ]
      },
      {
        category: 'Collaboration Tools',
        items: [
          'Real-time document collaboration',
          'Team messaging and notifications',
          'Project management dashboards',
          'File sharing with version control',
          'Calendar and scheduling integration'
        ]
      },
      {
        category: 'Custom Features',
        items: [
          'Workflow automation tools',
          'Custom reporting and analytics',
          'Integration with existing systems',
          'Mobile-responsive interface',
          'Offline capability for critical functions'
        ]
      },
      {
        category: 'Management & Support',
        items: [
          'User management dashboard',
          'Activity logs and audit trails',
          'Regular backups and disaster recovery',
          'Ongoing maintenance and updates',
          'Priority technical support'
        ]
      }
    ],
    timeline: '6-10 weeks depending on complexity',
    process: [
      'Comprehensive requirements analysis and workflow mapping',
      'Security assessment and compliance planning',
      'System architecture design and approval',
      'User interface design and user experience testing',
      'Backend development and database setup',
      'Security implementation and penetration testing',
      'User training and phased rollout with ongoing support'
    ],
    addOns: [
      {
        name: 'Advanced Analytics',
        price: 'From R 5,000',
        description: 'Custom dashboards and reporting tools to track team productivity and project metrics.'
      },
      {
        name: 'Third-party Integrations',
        price: 'R 2,500/integration',
        description: 'Connect with tools like Slack, Microsoft 365, Google Workspace, or industry-specific software.'
      },
      {
        name: 'Mobile App',
        price: 'From R 15,000',
        description: 'Native mobile application for iOS and Android with offline capabilities.'
      }
    ]
  },
  marketplace: {
    id: 'marketplace',
    title: 'The Online Marketplace',
    subtitle: 'For businesses ready to sell to the world',
    price: 'From R 25,000',
    priceDetails: 'Includes setup of 20 products',
    description: 'Launch your e-commerce empire with a powerful, scalable online store that grows with your business. From product management to secure payments, we\'ll build everything you need to sell successfully online.',
    features: [
      'A dynamic, intuitive e-commerce platform',
      'Effortless product management (20 setup for you)',
      'Trusted, secure payment gateways',
      'Personalized customer accounts',
      'Built to scale as you grow'
    ],
    detailedFeatures: [
      {
        category: 'E-commerce Core',
        items: [
          'Product catalog with unlimited products',
          'Inventory management system',
          'Order processing and fulfillment',
          'Shopping cart and checkout optimization',
          'Product search and filtering'
        ]
      },
      {
        category: 'Payment & Security',
        items: [
          'Multiple payment gateway integration',
          'Secure SSL encryption',
          'PCI DSS compliance',
          'Fraud detection and prevention',
          'Automated tax calculations'
        ]
      },
      {
        category: 'Customer Experience',
        items: [
          'Customer account creation and management',
          'Order history and tracking',
          'Wishlist and favorites functionality',
          'Product reviews and ratings',
          'Email notifications and receipts'
        ]
      },
      {
        category: 'Business Management',
        items: [
          'Comprehensive admin dashboard',
          'Sales analytics and reporting',
          'Customer relationship management',
          'Marketing tools and promotions',
          'SEO optimization for products'
        ]
      }
    ],
    timeline: '8-12 weeks for full implementation',
    process: [
      'Business model analysis and e-commerce strategy planning',
      'Product catalog setup and optimization (first 20 products)',
      'Payment gateway configuration and testing',
      'Custom design aligned with your brand identity',
      'Development of core e-commerce functionality',
      'Security implementation and compliance verification',
      'Launch preparation, staff training, and ongoing optimization'
    ],
    addOns: [
      {
        name: 'Advanced Marketing Suite',
        price: 'From R 8,000',
        description: 'Email marketing automation, abandoned cart recovery, and customer segmentation tools.'
      },
      {
        name: 'Multi-vendor Marketplace',
        price: 'From R 12,000',
        description: 'Allow other sellers to list products on your platform with commission management.'
      },
      {
        name: 'Inventory Management System',
        price: 'R 6,500',
        description: 'Advanced inventory tracking with low-stock alerts and supplier management.'
      }
    ]
  }
};