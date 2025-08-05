import { Question } from '../types/questionnaire';

export const questions: Question[] = [
  // Business Overview Section
  {
    id: 'business-type',
    type: 'single-choice',
    category: 'Business Overview',
    title: 'What type of business are you?',
    description: 'Help us understand your industry and business model',
    required: true,
    options: [
      { id: 'startup', text: 'Startup/New Business', value: 'startup' },
      { id: 'small-business', text: 'Small Business (1-50 employees)', value: 'small-business' },
      { id: 'medium-business', text: 'Medium Business (51-250 employees)', value: 'medium-business' },
      { id: 'enterprise', text: 'Enterprise (250+ employees)', value: 'enterprise' },
      { id: 'nonprofit', text: 'Non-profit Organization', value: 'nonprofit' },
      { id: 'freelancer', text: 'Freelancer/Consultant', value: 'freelancer' }
    ]
  },
  {
    id: 'industry',
    type: 'single-choice',
    category: 'Business Overview',
    title: 'Which industry best describes your business?',
    required: true,
    options: [
      { id: 'technology', text: 'Technology & Software', value: 'technology' },
      { id: 'healthcare', text: 'Healthcare & Medical', value: 'healthcare' },
      { id: 'finance', text: 'Finance & Banking', value: 'finance' },
      { id: 'retail', text: 'Retail & E-commerce', value: 'retail' },
      { id: 'education', text: 'Education & Training', value: 'education' },
      { id: 'manufacturing', text: 'Manufacturing & Industrial', value: 'manufacturing' },
      { id: 'professional', text: 'Professional Services', value: 'professional' },
      { id: 'creative', text: 'Creative & Design', value: 'creative' },
      { id: 'hospitality', text: 'Hospitality & Tourism', value: 'hospitality' },
      { id: 'other', text: 'Other', value: 'other' }
    ]
  },
  {
    id: 'business-goals',
    type: 'multiple-choice',
    category: 'Business Overview',
    title: 'What are your primary business goals for this project?',
    description: 'Select all that apply',
    required: true,
    options: [
      { id: 'increase-sales', text: 'Increase online sales', value: 'increase-sales' },
      { id: 'brand-awareness', text: 'Build brand awareness', value: 'brand-awareness' },
      { id: 'lead-generation', text: 'Generate more leads', value: 'lead-generation' },
      { id: 'customer-service', text: 'Improve customer service', value: 'customer-service' },
      { id: 'internal-efficiency', text: 'Increase internal efficiency', value: 'internal-efficiency' },
      { id: 'market-expansion', text: 'Expand to new markets', value: 'market-expansion' },
      { id: 'digital-transformation', text: 'Digital transformation', value: 'digital-transformation' }
    ]
  },

  // Current Situation Section
  {
    id: 'current-website',
    type: 'single-choice',
    category: 'Current Situation',
    title: 'Do you currently have a website?',
    required: true,
    options: [
      { id: 'no-website', text: 'No, this is our first website', value: 'no-website' },
      { id: 'outdated', text: 'Yes, but it\'s outdated and needs a complete redesign', value: 'outdated' },
      { id: 'basic', text: 'Yes, but it\'s very basic and needs major improvements', value: 'basic' },
      { id: 'good', text: 'Yes, it\'s decent but needs some enhancements', value: 'good' },
      { id: 'multiple', text: 'We have multiple websites that need consolidation', value: 'multiple' }
    ]
  },
  {
    id: 'current-challenges',
    type: 'multiple-choice',
    category: 'Current Situation',
    title: 'What challenges are you currently facing?',
    description: 'Select all that apply',
    required: true,
    options: [
      { id: 'low-traffic', text: 'Low website traffic', value: 'low-traffic' },
      { id: 'poor-conversion', text: 'Poor conversion rates', value: 'poor-conversion' },
      { id: 'outdated-design', text: 'Outdated design and user experience', value: 'outdated-design' },
      { id: 'mobile-issues', text: 'Mobile responsiveness issues', value: 'mobile-issues' },
      { id: 'slow-loading', text: 'Slow loading times', value: 'slow-loading' },
      { id: 'seo-problems', text: 'Poor search engine visibility', value: 'seo-problems' },
      { id: 'content-management', text: 'Difficulty updating content', value: 'content-management' },
      { id: 'security-concerns', text: 'Security vulnerabilities', value: 'security-concerns' }
    ]
  },
  {
    id: 'digital-presence',
    type: 'scale',
    category: 'Current Situation',
    title: 'How would you rate your current digital presence?',
    description: 'Consider your website, social media, and online visibility',
    required: true,
    min: 1,
    max: 10,
    scaleLabels: { min: 'Very Poor', max: 'Excellent' }
  },

  // Project Requirements Section
  {
    id: 'project-type',
    type: 'single-choice',
    category: 'Project Requirements',
    title: 'What type of digital solution do you need?',
    required: true,
    options: [
      { id: 'marketing-website', text: 'Marketing Website (showcase your business)', value: 'marketing-website' },
      { id: 'ecommerce', text: 'E-commerce Store (sell products online)', value: 'ecommerce' },
      { id: 'web-application', text: 'Web Application (custom functionality)', value: 'web-application' },
      { id: 'internal-portal', text: 'Internal Portal/Intranet (team collaboration)', value: 'internal-portal' },
      { id: 'marketplace', text: 'Marketplace Platform (connect buyers and sellers)', value: 'marketplace' },
      { id: 'booking-system', text: 'Booking/Reservation System', value: 'booking-system' },
      { id: 'not-sure', text: 'Not sure - need consultation', value: 'not-sure' }
    ]
  },
  {
    id: 'key-features',
    type: 'multiple-choice',
    category: 'Project Requirements',
    title: 'Which features are essential for your project?',
    description: 'Select all that are important to you',
    required: true,
    options: [
      { id: 'contact-forms', text: 'Contact forms and lead capture', value: 'contact-forms' },
      { id: 'online-payments', text: 'Online payment processing', value: 'online-payments' },
      { id: 'user-accounts', text: 'User registration and accounts', value: 'user-accounts' },
      { id: 'content-management', text: 'Easy content management system', value: 'content-management' },
      { id: 'search-functionality', text: 'Advanced search functionality', value: 'search-functionality' },
      { id: 'social-integration', text: 'Social media integration', value: 'social-integration' },
      { id: 'analytics', text: 'Analytics and reporting', value: 'analytics' },
      { id: 'multilingual', text: 'Multi-language support', value: 'multilingual' },
      { id: 'api-integration', text: 'Third-party API integrations', value: 'api-integration' },
      { id: 'mobile-app', text: 'Mobile app companion', value: 'mobile-app' }
    ]
  },
  {
    id: 'target-audience',
    type: 'textarea',
    category: 'Project Requirements',
    title: 'Describe your target audience',
    description: 'Who are your ideal customers? Include demographics, interests, and behaviors.',
    required: true,
    placeholder: 'e.g., Small business owners aged 30-50 who are looking for digital solutions to grow their business...'
  },

  // Design & User Experience Section
  {
    id: 'design-style',
    type: 'single-choice',
    category: 'Design & User Experience',
    title: 'What design style appeals to you most?',
    required: true,
    options: [
      { id: 'modern-minimal', text: 'Modern & Minimalist', value: 'modern-minimal' },
      { id: 'bold-creative', text: 'Bold & Creative', value: 'bold-creative' },
      { id: 'professional-corporate', text: 'Professional & Corporate', value: 'professional-corporate' },
      { id: 'warm-friendly', text: 'Warm & Friendly', value: 'warm-friendly' },
      { id: 'luxury-premium', text: 'Luxury & Premium', value: 'luxury-premium' },
      { id: 'playful-fun', text: 'Playful & Fun', value: 'playful-fun' },
      { id: 'classic-timeless', text: 'Classic & Timeless', value: 'classic-timeless' }
    ]
  },
  {
    id: 'color-preferences',
    type: 'multiple-choice',
    category: 'Design & User Experience',
    title: 'Which color schemes do you prefer?',
    description: 'Select up to 3 options',
    required: true,
    options: [
      { id: 'blue-trust', text: 'Blues (trust, professionalism)', value: 'blue-trust' },
      { id: 'green-growth', text: 'Greens (growth, nature)', value: 'green-growth' },
      { id: 'red-energy', text: 'Reds (energy, passion)', value: 'red-energy' },
      { id: 'purple-luxury', text: 'Purples (luxury, creativity)', value: 'purple-luxury' },
      { id: 'orange-enthusiasm', text: 'Oranges (enthusiasm, warmth)', value: 'orange-enthusiasm' },
      { id: 'neutral-sophisticated', text: 'Neutrals (sophisticated, timeless)', value: 'neutral-sophisticated' },
      { id: 'monochrome', text: 'Black & White (classic, bold)', value: 'monochrome' }
    ]
  },
  {
    id: 'user-experience-priority',
    type: 'scale',
    category: 'Design & User Experience',
    title: 'How important is cutting-edge user experience to you?',
    description: 'Consider animations, interactions, and modern web features',
    required: true,
    min: 1,
    max: 10,
    scaleLabels: { min: 'Simple is fine', max: 'Must be cutting-edge' }
  },

  // Technical Requirements Section
  {
    id: 'technical-complexity',
    type: 'single-choice',
    category: 'Technical Requirements',
    title: 'What level of technical complexity do you need?',
    required: true,
    options: [
      { id: 'simple', text: 'Simple - Basic website with standard features', value: 'simple' },
      { id: 'moderate', text: 'Moderate - Some custom features and integrations', value: 'moderate' },
      { id: 'complex', text: 'Complex - Advanced functionality and custom development', value: 'complex' },
      { id: 'enterprise', text: 'Enterprise - Highly complex with multiple systems integration', value: 'enterprise' }
    ]
  },
  {
    id: 'integrations-needed',
    type: 'multiple-choice',
    category: 'Technical Requirements',
    title: 'Which third-party integrations do you need?',
    description: 'Select all that apply',
    required: false,
    options: [
      { id: 'crm', text: 'CRM System (Salesforce, HubSpot, etc.)', value: 'crm' },
      { id: 'email-marketing', text: 'Email Marketing (Mailchimp, Constant Contact)', value: 'email-marketing' },
      { id: 'payment-gateways', text: 'Payment Gateways (Stripe, PayPal)', value: 'payment-gateways' },
      { id: 'inventory', text: 'Inventory Management Systems', value: 'inventory' },
      { id: 'accounting', text: 'Accounting Software (QuickBooks, Xero)', value: 'accounting' },
      { id: 'social-media', text: 'Social Media Platforms', value: 'social-media' },
      { id: 'analytics', text: 'Analytics Tools (Google Analytics, etc.)', value: 'analytics' },
      { id: 'booking', text: 'Booking/Scheduling Systems', value: 'booking' }
    ]
  },
  {
    id: 'performance-requirements',
    type: 'scale',
    category: 'Technical Requirements',
    title: 'How critical is website performance and speed?',
    description: 'Consider your audience and business needs',
    required: true,
    min: 1,
    max: 10,
    scaleLabels: { min: 'Standard is fine', max: 'Must be lightning fast' }
  },

  // Timeline & Budget Section
  {
    id: 'timeline',
    type: 'single-choice',
    category: 'Timeline & Budget',
    title: 'What is your ideal project timeline?',
    required: true,
    options: [
      { id: 'asap', text: 'ASAP - We need this urgently', value: 'asap' },
      { id: '1-month', text: '1 Month - Quick turnaround needed', value: '1-month' },
      { id: '2-3-months', text: '2-3 Months - Standard timeline', value: '2-3-months' },
      { id: '3-6-months', text: '3-6 Months - We can wait for quality', value: '3-6-months' },
      { id: 'flexible', text: 'Flexible - Quality over speed', value: 'flexible' }
    ]
  },
  {
    id: 'budget-range',
    type: 'single-choice',
    category: 'Timeline & Budget',
    title: 'What is your budget range for this project?',
    required: true,
    options: [
      { id: 'under-10k', text: 'Under R 10,000', value: 'under-10k' },
      { id: '10k-25k', text: 'R 10,000 - R 25,000', value: '10k-25k' },
      { id: '25k-50k', text: 'R 25,000 - R 50,000', value: '25k-50k' },
      { id: '50k-100k', text: 'R 50,000 - R 100,000', value: '50k-100k' },
      { id: 'over-100k', text: 'Over R 100,000', value: 'over-100k' },
      { id: 'discuss', text: 'Let\'s discuss based on requirements', value: 'discuss' }
    ]
  },
  {
    id: 'budget-flexibility',
    type: 'scale',
    category: 'Timeline & Budget',
    title: 'How flexible is your budget?',
    description: 'If we recommend additional features that would benefit your project',
    required: true,
    min: 1,
    max: 10,
    scaleLabels: { min: 'Fixed budget', max: 'Very flexible' }
  },

  // Additional Information Section
  {
    id: 'inspiration',
    type: 'textarea',
    category: 'Additional Information',
    title: 'Do you have any websites that inspire you?',
    description: 'Share URLs or describe websites you admire and why',
    required: false,
    placeholder: 'e.g., I love the clean design of Apple.com and the user experience of Airbnb...'
  },
  {
    id: 'special-requirements',
    type: 'textarea',
    category: 'Additional Information',
    title: 'Any special requirements or concerns?',
    description: 'Accessibility needs, compliance requirements, unique challenges, etc.',
    required: false,
    placeholder: 'e.g., Must be GDPR compliant, needs to work with screen readers, integration with legacy system...'
  },
  {
    id: 'success-metrics',
    type: 'textarea',
    category: 'Additional Information',
    title: 'How will you measure the success of this project?',
    description: 'What specific outcomes are you hoping to achieve?',
    required: true,
    placeholder: 'e.g., Increase online inquiries by 50%, improve user engagement, reduce bounce rate...'
  },

  // Contact Information Section
  {
    id: 'contact-info',
    type: 'contact',
    category: 'Contact Information',
    title: 'Your Contact Information',
    description: 'We\'ll use this to send you a personalized proposal',
    required: true
  }
];