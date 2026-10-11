import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RollingLink } from './RollingLink';
import { SOCIAL_LINKS } from '../data/portfolioData';

interface HeaderMenuProps {
  open: boolean;
  onClose: () => void;
}

interface NavItem {
  number: string;
  label: string;
  url: string;
  media: {
    url: string;
    type: 'video' | 'image';
    alt: string;
  };
}

const NAV_ITEMS: NavItem[] = [
  {
    number: '01',
    label: 'about',
    url: '/about',
    media: {
      url: '/api/media/file/rivisha-hero-video2.mp4',
      type: 'video',
      alt: 'Rivisha Video Showcase'
    }
  },
  {
    number: '02',
    label: 'works',
    url: '/works',
    media: {
      url: '/api/media/file/rivisha-hero-video2.mp4',
      type: 'video',
      alt: 'Rivisha Projects Reel'
    }
  },
  {
    number: '03',
    label: 'contact',
    url: '/contact',
    media: {
      url: '/api/media/file/Still%202026-08-23%20201645_1.40.1_converted.webp',
      type: 'image',
      alt: 'bike'
    }
  }
];

export const HeaderMenu: React.FC<HeaderMenuProps> = ({ open, onClose }) => {
  const [activeMedia, setActiveMedia] = useState(NAV_ITEMS[0].media);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-brand-cream text-brand-primary animate-in fade-in duration-300 select-none pt-14 md:pt-16"
      style={{
        backgroundColor: 'var(--color-brand-cream)',
        color: 'var(--color-brand-primary)'
      }}
    >
      <div className="flex-1 grid grid-cols-4 md:grid-cols-12 min-h-0">
        {/* Left Links Column */}
        <div className="col-span-4 md:col-span-7 flex flex-col justify-between border-b md:border-b-0 md:border-r border-brand-primary/50">
          <nav className="flex flex-col flex-1 divide-y divide-brand-primary/50 border-b border-brand-primary/50">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.url}
                onClick={onClose}
                onMouseEnter={() => setActiveMedia(item.media)}
                className="group/item flex flex-1 items-center justify-between p-4 md:px-8 text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] uppercase transition-colors hover:bg-brand-primary hover:text-brand-cream"
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="text-xs md:text-sm font-mono opacity-60 tabular-nums">
                    {item.number}
                  </span>
                  <span className="relative block shrink-0 overflow-hidden leading-[1.2]">
                    <span className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/item:translate-y-full">
                      {item.label}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 block -translate-y-full transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/item:translate-y-0"
                    >
                      {item.label}
                    </span>
                  </span>
                </div>
                <span
                  aria-hidden="true"
                  className="text-2xl md:text-4xl transition-transform duration-300 group-hover/item:translate-x-2"
                >
                  →
                </span>
              </Link>
            ))}
          </nav>

          {/* Bottom Socials in Drawer */}
          <div className="p-4 md:px-8 py-6 flex flex-wrap items-center justify-between gap-4">
            <span className="text-[0.65rem] tracking-[0.18em] uppercase opacity-60">
              elsewhere
            </span>
            <div className="flex items-center gap-6">
              <RollingLink
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer noopener"
                showArrow
                className="text-[0.75rem] tracking-[0.18em]"
              >
                GitHub
              </RollingLink>
              <RollingLink
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                showArrow
                className="text-[0.75rem] tracking-[0.18em]"
              >
                LinkedIn
              </RollingLink>
              <RollingLink
                href={`mailto:${SOCIAL_LINKS.email}`}
                showArrow
                className="text-[0.75rem] tracking-[0.18em]"
              >
                Email
              </RollingLink>
            </div>
          </div>
        </div>

        {/* Right Dynamic Media Preview (Desktop) */}
        <div className="hidden md:col-span-5 md:flex flex-col p-8 bg-brand-primary/5">
          <div className="relative w-full h-full overflow-hidden border border-brand-primary/50">
            {activeMedia.type === 'video' ? (
              <video
                key={activeMedia.url}
                src={activeMedia.url}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-opacity duration-500 animate-in fade-in"
              />
            ) : (
              <img
                key={activeMedia.url}
                src={activeMedia.url}
                alt={activeMedia.alt}
                className="w-full h-full object-cover transition-opacity duration-500 animate-in fade-in"
              />
            )}
            <div className="absolute bottom-4 left-4 bg-brand-cream/90 text-brand-primary px-3 py-1 font-mono text-[0.65rem] tracking-[0.18em] uppercase border border-brand-primary/40">
              preview: {activeMedia.alt}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
