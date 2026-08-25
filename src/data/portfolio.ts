export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tech: string[];
  tags: string[];
  image: string;
  metric: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Marketplace Engine',
    category: 'Backend Architecture',
    description:
      'Built a modular marketplace backend using .NET 8 Microservices with Clean Architecture and DDD. Implemented Repository Pattern and Unit of Work for high maintainability and testability.',
    tech: ['.NET 8', 'C#', 'Microservices', 'EF Core', 'SQL Server'],
    tags: ['Backend', 'Architecture'],
    image:
      'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metric: '300% throughput boost',
    featured: true,
  },
  {
    id: 2,
    title: 'Real-Time Logistics & IoT Dashboard',
    category: 'Full Stack',
    description:
      'Developed a full-stack dashboard with Angular and .NET featuring real-time data visualization via SignalR for logistics tracking across 1,000+ IoT endpoints.',
    tech: ['Angular', '.NET Core', 'SignalR', 'gRPC', 'Redis'],
    tags: ['Full Stack', 'Real-Time'],
    image:
      'https://images.pexels.com/photos/6424583/pexels-photo-6424583.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metric: '1,000+ IoT endpoints',
  },
  {
    id: 3,
    title: 'Multi-Tenant CRM/ERP Sync',
    category: 'Enterprise Integration',
    description:
      'Engineered a synchronization layer for CRM and ERP systems, handling large-scale data transfers with high consistency and secure data isolation across tenants.',
    tech: ['.NET 8', 'C#', 'RBAC', 'PostgreSQL', 'Docker'],
    tags: ['Enterprise', 'Integration'],
    image:
      'https://images.pexels.com/photos/34212916/pexels-photo-34212916.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metric: 'Multi-tenant secure',
  },
  {
    id: 4,
    title: 'Next.js Portfolio & PWA',
    category: 'Frontend',
    description:
      'Developed a high-performance personal portfolio using Next.js and Tailwind CSS, showcasing optimized web vitals, SEO best practices, and mobile responsiveness as a PWA.',
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    tags: ['Frontend', 'PWA'],
    image:
      'https://images.pexels.com/photos/159299/graphic-design-studio-tracfone-programming-html-159299.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metric: 'Optimized web vitals',
  },
  {
    id: 5,
    title: 'Marketplace Frontend Platform',
    category: 'Frontend',
    description:
      'Developed end-to-end web applications using Next.js and React for dynamic, SEO-friendly marketplace frontends with complex third-party REST API integrations.',
    tech: ['Next.js', 'React', 'Redux', 'TypeScript', 'Tailwind CSS'],
    tags: ['Frontend', 'SEO'],
    image:
      'https://images.pexels.com/photos/5483063/pexels-photo-5483063.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metric: 'SEO-optimized',
  },
  {
    id: 6,
    title: 'Containerized Legacy Migration',
    category: 'DevOps',
    description:
      'Containerized legacy services using Docker to streamline development environments and enable cloud migration, with automated CI/CD pipelines via Azure DevOps.',
    tech: ['Docker', 'Azure DevOps', 'Kubernetes', 'CI/CD'],
    tags: ['DevOps', 'Cloud'],
    image:
      'https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metric: 'Zero-downtime migration',
  },
];

export interface SkillCategory {
  id: number;
  name: string;
  count: number;
  items: string[];
  icon: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: 'Backend & Architecture',
    count: 10,
    items: ['.NET 8/Core', 'C#', 'ASP.NET Web API', 'Microservices', 'Clean Architecture', 'SignalR', 'gRPC', 'DDD', 'Entity Framework', 'LINQ'],
    icon: 'Server',
  },
  {
    id: 2,
    name: 'Frontend Development',
    count: 6,
    items: ['Angular', 'React.js', 'Next.js', 'Redux', 'TypeScript', 'Tailwind CSS'],
    icon: 'Layout',
  },
  {
    id: 3,
    name: 'Databases & DevOps',
    count: 11,
    items: ['SQL Server', 'PostgreSQL', 'Redis', 'MongoDB', 'SSRS', 'Azure DevOps', 'Docker', 'Kubernetes', 'TFS', 'Git', 'CI/CD Pipelines'],
    icon: 'Database',
  },
];

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  current?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Senior Software Developer',
    company: 'WE3DS Company',
    period: 'Jul 2024 — Present',
    location: 'Tanta, Egypt',
    current: true,
    achievements: [
      'Architected scalable .NET 8 Microservices using Clean Architecture and DDD to support enterprise marketplace workflows.',
      'Led the transition to multi-tenant architectures, ensuring secure data isolation and hierarchical RBAC.',
      'Engineered high-throughput integration layers and real-time telemetry backends using SignalR, managing 1,000+ IoT endpoints.',
      'Automated CI/CD pipelines using Azure DevOps and TFS, reducing deployment cycles significantly.',
      'Optimized database performance by 300% through strategic SQL query tuning, indexing, and Redis distributed caching.',
    ],
  },
  {
    id: 2,
    role: 'Full Stack Developer (Freelance)',
    company: 'Self-Employed',
    period: 'Nov 2023 — Jul 2024',
    location: 'Cairo, Egypt',
    achievements: [
      'Developed end-to-end web applications using Next.js and React for dynamic, SEO-friendly marketplace frontends.',
      'Built robust API backends with .NET Core for complex marketplace platforms.',
      'Integrated complex third-party REST APIs (Payments, Auth, Mapping) to extend platform capabilities.',
      'Containerized legacy services using Docker to streamline development environments and cloud migration.',
    ],
  },
];

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Project Lead',
    role: 'WE3DS Company',
    quote:
      'Mostafa transformed our marketplace architecture with .NET 8 microservices. His 300% database optimization and clean architecture approach set a new standard for our team.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Product Manager',
    role: 'Logistics Platform',
    quote:
      'The real-time IoT dashboard Mostafa built handles over a thousand endpoints flawlessly. His SignalR expertise and attention to performance are exceptional.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Startup Founder',
    role: 'Freelance Client',
    quote:
      'From frontend to backend to deployment, Mostafa delivered our marketplace platform end-to-end. His full-stack capabilities and DevOps knowledge are outstanding.',
    rating: 5,
  },
];

export interface TechBadge {
  id: number;
  name: string;
}

export const techStack: TechBadge[] = [
  { id: 1, name: '.NET 8' },
  { id: 2, name: 'C#' },
  { id: 3, name: 'ASP.NET' },
  { id: 4, name: 'Angular' },
  { id: 5, name: 'React' },
  { id: 6, name: 'Next.js' },
  { id: 7, name: 'TypeScript' },
  { id: 8, name: 'Microservices' },
  { id: 9, name: 'Docker' },
  { id: 10, name: 'Kubernetes' },
  { id: 11, name: 'Azure DevOps' },
  { id: 12, name: 'PostgreSQL' },
  { id: 13, name: 'Redis' },
  { id: 14, name: 'MongoDB' },
  { id: 15, name: 'SignalR' },
  { id: 16, name: 'gRPC' },
];

export interface Stat {
  id: number;
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { id: 1, value: 4, suffix: '+', label: 'Years Experience' },
  { id: 2, value: 300, suffix: '%', label: 'Performance Gain' },
  { id: 3, value: 1000, suffix: '+', label: 'IoT Endpoints' },
  { id: 4, value: 20, suffix: '+', label: 'Technologies' },
];

export const profile = {
  name: 'Mostafa Samir',
  title: 'Senior Full Stack Engineer',
  tagline: 'Building scalable, high-performance software',
  location: 'Tanta, Egypt',
  phone: '+20 106 735 8073',
  email: 'm.ssaid356@gmail.com',
  linkedin: 'https://linkedin.com/in/mostafasamirsaid',
  github: 'https://github.com/Mostafa-SAID7',
  summary:
    'Senior Full Stack Engineer with 4+ years of experience specializing in high-performance Microservices and modern Web Architectures. Expert in building scalable marketplace-ready solutions using .NET 8, ASP.NET Core Web API, and modern frontend frameworks including Angular, React, and Next.js.',
  education: {
    degree: 'B.Sc. in Computer Science',
    year: '2021',
    institution: 'Higher Technological Institute (HTI), Egypt',
  },
  certifications: ['Microsoft Certified: Azure Fundamentals (AZ-900)'],
  languages: ['English (Professional Fluency)', 'Arabic (Native)'],
};
