const BASE = import.meta.env.BASE_URL

export interface Project {
  slug: string
  title: string
  type: string
  role: string
  githubUrl?: string
  figmaUrl?: string
  siteUrl?: string
  description: string[]
  tech: string[]
  cover: string
  gallery: { src: string; alt: string; kind: 'normal' | 'long' }[]
}

export const projects: Project[] = [
  {
    slug: 'user-management-app',
    title: 'User Management App',
    type: 'Frontend Web Application (SPA)',
    role: 'Front-end Developer',
    githubUrl: 'https://github.com/VladNesterchuk/User-Management-App',
    description: [
      `A single-page React application designed for managing users through an admin interface.
      The application allows adding, editing, deleting, and viewing user profiles with a clean and intuitive UI.The project includes an admin authentication system, modal windows for user details, and persistent data storage using localStorage.
      The interface dynamically updates without page reloads, demonstrating state management, conditional rendering, and component-based architecture.This project was created as a frontend-focused application to practice working with React, component communication, and UI logic similar to real-world admin dashboards.`,
    ],
    tech: ['React', 'JavaScript', 'CSS'],
    cover: `${BASE}images/projects/user-management-app/cover.png`,
    gallery: [
      { src: `${BASE}images/projects/user-management-app/8.png`, alt: 'Login page', kind: 'normal' },
      { src: `${BASE}images/projects/user-management-app/1.png`, alt: 'Login page', kind: 'normal' },
      { src: `${BASE}images/projects/user-management-app/2.png`, alt: 'Login page', kind: 'normal' },
      { src: `${BASE}images/projects/user-management-app/3.png`, alt: 'Login page', kind: 'normal' },
      { src: `${BASE}images/projects/user-management-app/4.png`, alt: 'Login page', kind: 'long' },
      { src: `${BASE}images/projects/user-management-app/5.png`, alt: 'Login page', kind: 'normal' },
      { src: `${BASE}images/projects/user-management-app/6.png`, alt: 'Login page', kind: 'normal' },
      { src: `${BASE}images/projects/user-management-app/7.png`, alt: 'Login page', kind: 'normal' },
    ],
  },
  {
    slug: 'yourmeal-e-commerce-website',
    title: 'YourMeal — E-commerce Website',
    type: 'E-commerce Website (HTML / CSS / JavaScript)',
    role: 'Front-end Developer',
    githubUrl: 'https://github.com/VladNesterchuk/YourMeal',
    figmaUrl: 'https://www.figma.com/design/zAASWcZBpUyFVnPFAYX8HH/YouMeal--youtube-?node-id=0-1&p=f&t=XLKQcDILqJoI8cyC-0',
    siteUrl: 'https://vladnesterchuk.github.io/YourMeal/',
    description: [
      `This project is a fast food online store website created based on a Figma design.
      The layout was developed using HTML and CSS with a focus on clean structure and accurate implementation of the original design. JavaScript was used to add interactivity and handle client-side logic such as cart functionality and order processing. Order data is sent to the server using PHP. 
      The website is fully responsive and adapted for desktop, tablet, and mobile devices to ensure a consistent user experience across different screen sizes.`,
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    cover: `${BASE}images/projects/yourmeal-e-commerce-website/cover.png`,
    gallery: [
      { src: `${BASE}images/projects/yourmeal-e-commerce-website/1.png`, alt: 'Homepage', kind: 'long' },
      { src: `${BASE}images/projects/yourmeal-e-commerce-website/2.png`, alt: 'Product list', kind: 'long' },
      { src: `${BASE}images/projects/yourmeal-e-commerce-website/3.png`, alt: 'Product list', kind: 'normal' },
      { src: `${BASE}images/projects/yourmeal-e-commerce-website/4.png`, alt: 'Product list', kind: 'normal' },
      { src: `${BASE}images/projects/yourmeal-e-commerce-website/5.png`, alt: 'Product list', kind: 'normal' },
    ],
  },
  {
    slug: 'family-smile-wordpress-landing',
    title: 'Family Smile — WordPress Landing Page',
    type: 'Multi-page Website (WordPress / CMS)',
    role: 'WordPress Developer',
    description: [
      'A multi-page dental clinic website built with WordPress.',
      'Includes: structured content pages, clear navigation, and contact forms built with WPForms.',
      'Features: custom layout created with Elementor, responsive design, and full adaptation for desktop, tablet, and mobile devices.',
    ],
    tech: ['WordPress', 'PHP',],
    cover: `${BASE}images/projects/family-smile-wordpress-landing/cover.png`,
    gallery: [
      { src: `${BASE}images/projects/family-smile-wordpress-landing/5.png`, alt: 'Landing above the fold', kind: 'normal' },
      { src: `${BASE}images/projects/family-smile-wordpress-landing/1.png`, alt: 'Landing above the fold', kind: 'long' },
      { src: `${BASE}images/projects/family-smile-wordpress-landing/2.png`, alt: 'Landing above the fold', kind: 'long' },
      { src: `${BASE}images/projects/family-smile-wordpress-landing/3.png`, alt: 'Landing above the fold', kind: 'long' },
      { src: `${BASE}images/projects/family-smile-wordpress-landing/4.png`, alt: 'Landing above the fold', kind: 'long' },   
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
