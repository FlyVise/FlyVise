export interface PortfolioProject {
  id: number;
  title: string;
  description: string;
  category: string;
  categoryLabel: string;
  image: string;
  technologies: string[];
  links: {
    type: string;
    label: string;
    url: string;
  }[];
}

export const portfolioData: PortfolioProject[] = [
  {
    id: 1,
    title: 'Modern Corporate Website',
    description: 'A sleek and professional corporate website with interactive elements and smooth animations that perfectly represents the client\'s brand identity.',
    category: 'web',
    categoryLabel: 'Web Design',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React', 'Node.js', 'GSAP', 'MongoDB'],
    links: [
      { type: 'demo', label: 'Live Demo', url: 'https://example.com/corporate' },
      { type: 'code', label: 'Code', url: 'https://github.com/example/corporate' },
    ],
  },
  {
    id: 2,
    title: 'Fitness Tracking App',
    description: 'A comprehensive fitness app with workout tracking, nutrition planning, and social features to help users achieve their health goals.',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
    links: [
      { type: 'app-store', label: 'App Store', url: 'https://example.com/fitness-app' },
      { type: 'play-store', label: 'Play Store', url: 'https://example.com/fitness-play' },
    ],
  },
  {
    id: 3,
    title: 'Fashion E-commerce Platform',
    description: 'A modern e-commerce platform with advanced filtering, wishlist functionality, and seamless checkout experience for fashion retailers.',
    category: 'ecommerce',
    categoryLabel: 'E-commerce',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    links: [
      { type: 'demo', label: 'Visit Site', url: 'https://example.com/ecommerce' },
      { type: 'case-study', label: 'Case Study', url: 'https://example.com/ecommerce-case' },
    ],
  },
  {
    id: 4,
    title: 'Tech Startup Brand Identity',
    description: 'Complete brand identity package including logo design, color palette, typography, and brand guidelines for an innovative tech startup.',
    category: 'branding',
    categoryLabel: 'Branding',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Adobe Illustrator', 'Figma', 'After Effects', 'Photoshop'],
    links: [
      { type: 'gallery', label: 'View Gallery', url: 'https://example.com/branding-gallery' },
      { type: 'download', label: 'Brand Guide', url: 'https://example.com/brand-guide' },
    ],
  },
  {
    id: 5,
    title: 'Analytics Dashboard',
    description: 'An intuitive analytics dashboard with real-time data visualization, custom reports, and interactive charts for business intelligence.',
    category: 'web',
    categoryLabel: 'Web Application',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Vue.js', 'D3.js', 'Express', 'Socket.io'],
    links: [
      { type: 'demo', label: 'Live Demo', url: 'https://example.com/analytics' },
      { type: 'video', label: 'Video Tour', url: 'https://example.com/analytics-tour' },
    ],
  },
  {
    id: 6,
    title: 'Food Delivery App',
    description: 'A comprehensive food delivery application with real-time tracking, multiple payment options, and an intuitive user interface.',
    category: 'mobile',
    categoryLabel: 'Mobile App',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    technologies: ['Flutter', 'Firebase', 'Google Maps', 'Stripe'],
    links: [
      { type: 'demo', label: 'Try Demo', url: 'https://example.com/food-delivery' },
      { type: 'case-study', label: 'Features', url: 'https://example.com/food-features' },
    ],
  },
];