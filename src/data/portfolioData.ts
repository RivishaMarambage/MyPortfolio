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
  liveUrl?: string;
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
    coverImage: "/api/media/file/project-echoclipz-cover.png",
    video: "/api/media/file/__Laptop%20Scene%2002.mp4",
    liveUrl: "https://echoclipz.vercel.app/",
    categories: ["AI Product", "SaaS"],
    tags: ["AI Product", "SaaS", "Next.js", "React"],
    relatedLinks: [
      {
        label: "Live Website",
        value: "echoclipz.vercel.app",
        url: "https://echoclipz.vercel.app/",
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
        alt: "echoclipz hero banner",
        url: "/api/media/file/project-echoclipz-cover.png"
      }
    ],
    aspectRatio: "aspect-video",
    gridSpan: "md:col-span-6"
  },
  {
    title: "SteamBerry Café",
    slug: "steamberry-cafe",
    summary: "A full-featured café ordering experience built as a collaborative project, featuring product selection with customizable options, a real-time cart system, loyalty program integration, and a smooth checkout flow.\n\nI led the frontend development and UI/UX design work, creating the interactive prototypes and translating them into a working web application. The visual design balances the warmth of an artisan coffee-shop aesthetic with modern digital usability principles.\n\nThis project deepened my understanding of component-based architecture, state management across a complex user flow, and collaborative development workflows.",
    coverImage: "/api/media/file/project-steamberry-cover.png",
    liveUrl: "https://www.steamsbury.com/",
    categories: ["E-Commerce", "Web Development"],
    tags: ["E-Commerce", "React", "Figma", "UI/UX"],
    relatedLinks: [
      {
        label: "Live Website",
        value: "steamsbury.com",
        url: "https://www.steamsbury.com/",
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
        alt: "steamberry storefront hero",
        url: "/api/media/file/project-steamberry-cover.png"
      }
    ],
    aspectRatio: "aspect-video",
    gridSpan: "md:col-span-4"
  },
  {
    title: "OceanGuard-GCW",
    slug: "oceanguard-gcw",
    summary: "An environmental awareness web project centered on ocean conservation and the United Nations Sustainable Development Goal 14 — Life Below Water. The project communicates the importance of protecting marine ecosystems through compelling visual storytelling and interactive data presentation.\n\nDesigned to raise awareness among a broad audience, the site presents research-backed information about ocean threats, conservation initiatives, and actions individuals can take, wrapped in an immersive digital experience.\n\nThis project allowed me to explore the intersection of design advocacy and modern web development, creating something that is both visually impactful and informationally substantive.",
    coverImage: "/api/media/file/project-oceanguard-cover.png",
    liveUrl: "https://ocean-guard-gcw.vercel.app/",
    categories: ["Environmental", "Web Project"],
    tags: ["Environmental", "Web Design", "Awareness", "SDG 14"],
    relatedLinks: [
      {
        label: "Live Website",
        value: "ocean-guard-gcw.vercel.app",
        url: "https://ocean-guard-gcw.vercel.app/",
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
        alt: "oceanguard hero banner",
        url: "/api/media/file/project-oceanguard-cover.png"
      }
    ],
    aspectRatio: "aspect-video",
    gridSpan: "md:col-span-10"
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
