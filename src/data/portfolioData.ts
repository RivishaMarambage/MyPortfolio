// Rivisha Marambage — Portfolio Data
export interface RelatedLink {
  label: string;
  value: string;
  url: string;
  newTab?: boolean;
}

export interface GalleryItem {
  alt: string;
  url: string;
}

export interface WorkItem {
  title: string;
  slug: string;
  summary: string;
  coverImage: string;
  video?: string;
  youtubeUrl?: string;
  categories: string[];
  tags: string[];
  relatedLinks?: RelatedLink[];
  gallery?: GalleryItem[];
  aspectRatio: string;
  gridSpan: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  tags: string[];
  mediaUrl: string;
  mediaType: 'video' | 'image';
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  type: string;
}

export interface CertificateItem {
  title: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
}

export const WORKS: WorkItem[] = [
  {
    title: "EchoClipz AI",
    slug: "echoclipz-ai",
    summary: "A creator-platform concept for transforming long-form video content into engaging short-form clips with AI-assisted ideation, automatic caption generation, smart editing suggestions, and audience analytics.\n\nDesigned and prototyped to address the growing creator economy need for efficient content repurposing workflows. The platform concept explores how AI can dramatically reduce the time between raw footage and published content.\n\nBuilt on a modern full-stack architecture with Next.js for the frontend, Supabase for real-time data and authentication, and planned integration with AI APIs for video analysis and clip extraction.",
    coverImage: "/api/media/file/mainscreen-1440x760-1.png",
    video: "/api/media/file/__Laptop%20Scene%2002.mp4",
    categories: ["AI Product", "SaaS"],
    tags: ["AI Product", "SaaS", "Next.js", "React"],
    relatedLinks: [
      {
        label: "Live Demo",
        value: "View Demo",
        url: "#",
        newTab: true
      },
      {
        label: "GitHub",
        value: "View Source",
        url: "https://github.com/RivishaMarambage",
        newTab: true
      }
    ],
    gallery: [
      {
        alt: "echoclipz dashboard",
        url: "/api/media/file/mockup-1600x1131-1.png"
      },
      {
        alt: "echoclipz editor",
        url: "/api/media/file/mockup2-1600x1131-1.png"
      },
      {
        alt: "echoclipz analytics",
        url: "/api/media/file/app-ux-mockar-2.png"
      }
    ],
    aspectRatio: "aspect-video",
    gridSpan: "md:col-span-9"
  },
  {
    title: "SteamBerry Café",
    slug: "steamberry-cafe",
    summary: "A full-featured café ordering experience built as a group project, featuring product selection with customizable options, a real-time cart system, loyalty program integration, and a smooth checkout flow.\n\nI led the frontend development and UI/UX design work, creating the Figma prototypes and translating them into a working React application. The visual design balances the warmth of a coffee-shop aesthetic with modern digital usability principles.\n\nThis project deepened my understanding of component-based architecture, state management across a complex user flow, and collaborative development workflows using Git.",
    coverImage: "/api/media/file/coffee1.jpg",
    categories: ["E-Commerce", "Group Project"],
    tags: ["E-Commerce", "React", "Figma", "UI/UX"],
    relatedLinks: [
      {
        label: "Live Demo",
        value: "View Demo",
        url: "#",
        newTab: true
      },
      {
        label: "GitHub",
        value: "View Source",
        url: "https://github.com/RivishaMarambage",
        newTab: true
      }
    ],
    gallery: [
      {
        alt: "steamberry menu",
        url: "/api/media/file/cup-mockup-selection.jpg"
      },
      {
        alt: "steamberry cart",
        url: "/api/media/file/cup-mockup.jpg"
      },
      {
        alt: "steamberry mockup",
        url: "/api/media/file/mockup1.jpg"
      },
      {
        alt: "steamberry app",
        url: "/api/media/file/mockup2.jpg"
      }
    ],
    aspectRatio: "aspect-square",
    gridSpan: "md:col-span-3"
  },
  {
    title: "Taprobit AI",
    slug: "taprobit-ai",
    summary: "An AI-focused web product concept featuring a bold modern landing page with a strong emphasis on engaging visual presentation and clear communication of AI capabilities.\n\nThe project explores how AI-powered tools can be positioned effectively for a Sri Lankan and regional market, with a design language that balances technical credibility with approachability.\n\nBuilt with Next.js and React, the site uses Vercel AI Gateway for backend AI features, with careful attention to performance and responsive design across all device types.",
    coverImage: "/api/media/file/mainscreen-1440x760-1.png",
    video: "/api/media/file/__Laptop%20Scene%2002-1.mp4",
    categories: ["AI Web Product"],
    tags: ["AI Web Product", "Next.js", "React", "Landing Page"],
    relatedLinks: [
      {
        label: "Live Demo",
        value: "View Demo",
        url: "#",
        newTab: true
      },
      {
        label: "GitHub",
        value: "View Source",
        url: "https://github.com/RivishaMarambage",
        newTab: true
      }
    ],
    gallery: [
      {
        alt: "taprobit hero",
        url: "/api/media/file/portfolio-snapshot-laptop-1-1.png"
      },
      {
        alt: "taprobit features",
        url: "/api/media/file/portfolio-snapshot-laptop-1-2.png"
      },
      {
        alt: "taprobit dashboard",
        url: "/api/media/file/portfolio-snapshot-laptop-2.png"
      }
    ],
    aspectRatio: "aspect-video",
    gridSpan: "md:col-span-6"
  },
  {
    title: "OceanGuard-GCW",
    slug: "oceanguard-gcw",
    summary: "An environmental awareness web project centered on ocean conservation and the United Nations Sustainable Development Goal 14 — Life Below Water. The project communicates the importance of protecting marine ecosystems through compelling visual storytelling and data presentation.\n\nDesigned to raise awareness among a broad audience, the site presents research-backed information about ocean threats, conservation initiatives, and actions individuals can take, wrapped in an immersive visual experience.\n\nThis project allowed me to explore the intersection of design advocacy and web development, creating something that is both visually impactful and informationally substantive.",
    coverImage: "/api/media/file/testing.jpg",
    categories: ["Environmental", "Web Project"],
    tags: ["Environmental", "Web Design", "Awareness", "SDG"],
    relatedLinks: [
      {
        label: "Live Demo",
        value: "View Demo",
        url: "#",
        newTab: true
      },
      {
        label: "GitHub",
        value: "View Source",
        url: "https://github.com/RivishaMarambage",
        newTab: true
      }
    ],
    gallery: [
      {
        alt: "oceanguard hero",
        url: "/api/media/file/testing.jpg"
      },
      {
        alt: "oceanguard conservation",
        url: "/api/media/file/testing-2.jpg"
      }
    ],
    aspectRatio: "aspect-video",
    gridSpan: "md:col-span-6"
  },
  {
    title: "RHL 2026",
    slug: "rhl-2026",
    summary: "A nine-a-side hockey event website concept built to showcase tournament information, team identities, match schedules, and event photography in a visually dynamic presentation.\n\nThe design focuses on building excitement around the event through bold typographic choices, strong team branding, and an engaging visual hierarchy that guides visitors through all the key information they need.\n\nThis project challenged me to think about sports event design — balancing energy and excitement with clarity and navigability for fans, players, and organizers.",
    coverImage: "/api/media/file/project-group.jpg",
    categories: ["Sports", "Event Website"],
    tags: ["Sports", "Event", "Web Design", "Branding"],
    relatedLinks: [
      {
        label: "Live Demo",
        value: "View Demo",
        url: "#",
        newTab: true
      },
      {
        label: "GitHub",
        value: "View Source",
        url: "https://github.com/RivishaMarambage",
        newTab: true
      }
    ],
    gallery: [
      {
        alt: "rhl tournament",
        url: "/api/media/file/project-group.jpg"
      },
      {
        alt: "rhl teams",
        url: "/api/media/file/project.jpg"
      },
      {
        alt: "rhl event",
        url: "/api/media/file/project-portrait.jpg"
      }
    ],
    aspectRatio: "aspect-square",
    gridSpan: "md:col-span-3"
  },
  {
    title: "Personal Portfolio",
    slug: "personal-portfolio",
    summary: "This personal platform — the very site you are browsing — is itself a project in my portfolio. It represents my current approach to personal brand design, frontend development, and the challenge of presenting creative and technical work in a compelling digital form.\n\nThe site is built with Vite, React 19, TypeScript, and Tailwind CSS v4, following a 12-column architectural grid system with careful attention to motion design, typography, and the cinematic dark aesthetic that defines the rivisha. brand.\n\nKey features include a 3D perspective intro tunnel, real-time world clock marquee with Sri Lanka time highlighted, rolling hover animations, full-page menu with media preview, and detailed case study pages for each project.",
    coverImage: "/api/media/file/portfolio-snapshot-laptop-3.png",
    video: "/api/media/file/Updated%20Portfolio%20Video%20New.mp4",
    categories: ["Personal Brand", "Web Development"],
    tags: ["Personal Brand", "Web Development", "React", "TypeScript"],
    relatedLinks: [
      {
        label: "Live Website",
        value: "You are here",
        url: "/",
        newTab: false
      },
      {
        label: "GitHub",
        value: "View Source",
        url: "https://github.com/RivishaMarambage",
        newTab: true
      }
    ],
    gallery: [
      {
        alt: "portfolio home",
        url: "/api/media/file/portfolio-snapshot-laptop-1-1.png"
      },
      {
        alt: "portfolio works",
        url: "/api/media/file/portfolio-snapshot-laptop-1-2.png"
      },
      {
        alt: "portfolio about",
        url: "/api/media/file/portfolio-snapshot-laptop-2.png"
      },
      {
        alt: "portfolio contact",
        url: "/api/media/file/portfolio-snapshot-laptop-3.png"
      }
    ],
    aspectRatio: "aspect-video",
    gridSpan: "md:col-span-9"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "web development",
    tags: [
      "frontend development",
      "react",
      "next.js",
      "responsive design",
      "api integration",
      "website development"
    ],
    mediaUrl: "/api/media/file/__Laptop%20Scene%2002.mp4",
    mediaType: "video"
  },
  {
    number: "02",
    title: "ui/ux design",
    tags: [
      "figma",
      "wireframes",
      "prototypes",
      "web ui",
      "user flows",
      "interface design"
    ],
    mediaUrl: "/api/media/file/mainscreen-1440x760-1.png",
    mediaType: "image"
  },
  {
    number: "03",
    title: "ai & digital products",
    tags: [
      "ai api integration",
      "saas prototypes",
      "workflow automation",
      "product concepts",
      "interactive dashboards",
      "rapid prototyping"
    ],
    mediaUrl: "/api/media/file/__Laptop%20Scene%2002-1.mp4",
    mediaType: "video"
  }
];

export const TOOLKIT = {
  build: [
    "java",
    "javascript",
    "typescript",
    "python",
    "sql",
    "html",
    "css",
    "react",
    "next.js",
    "tailwind css",
    "spring boot",
    "git",
    "github"
  ],
  design: [
    "figma",
    "ui/ux design",
    "wireframing",
    "prototyping",
    "responsive interface design",
    "user research"
  ],
  explore: [
    "ai-powered products",
    "saas applications",
    "software architecture",
    "creative development",
    "intellij idea",
    "vs code"
  ]
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    period: "2025 — Present",
    role: "BSc (Hons) Computer Science",
    company: "IIT Sri Lanka · University of Westminster, UK",
    companyUrl: "https://www.iit.ac.lk/",
    location: "Sri Lanka",
    type: "Undergraduate"
  },
  {
    period: "2025 — Present",
    role: "Freelance Developer & Designer",
    company: "Independent",
    location: "Sri Lanka · Remote",
    type: "Freelance"
  }
];

export const CERTIFICATES: CertificateItem[] = [
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Google · Coursera",
    year: "2024",
    credentialUrl: "#"
  },
  {
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    year: "2024",
    credentialUrl: "#"
  }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/RivishaMarambage",
  linkedin: "https://www.linkedin.com/in/rivisha-marambage-a39803344/",
  email: "rivishamarambage@gmail.com"
};

export const CONTACT_EMAIL = "rivishamarambage@gmail.com";
