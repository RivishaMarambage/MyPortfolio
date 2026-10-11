import React from 'react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-brand-cream/40 bg-brand-primary text-brand-cream transition-colors duration-300">
      {/* Shibuya crossing looping video banner */}
      <div className="relative h-36 overflow-hidden border-b md:h-52 border-brand-cream/40">
        <video
          className="h-full w-full object-cover"
          src="/api/media/file/rivisha-hero-video2.mp4"
          muted
          loop
          autoPlay
          playsInline
        />
      </div>

      {/* 3 Nav Columns with roll hover and fill */}
      <nav className="flex border-b border-brand-cream/40">
        <Link
          to="/about"
          className="group/roll flex flex-1 items-center justify-center border-r last:border-r-0 border-brand-cream/40 p-3 md:p-4 py-10 md:py-14 text-lg md:text-xl leading-[1.3] tracking-[0.06em] uppercase transition-colors hover:bg-brand-cream hover:text-brand-primary"
        >
          <span className="relative block shrink-0 overflow-hidden">
            <span className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-full">
              about
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 block -translate-y-full transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-0"
            >
              about
            </span>
          </span>
        </Link>
        <Link
          to="/works"
          className="group/roll flex flex-1 items-center justify-center border-r last:border-r-0 border-brand-cream/40 p-3 md:p-4 py-10 md:py-14 text-lg md:text-xl leading-[1.3] tracking-[0.06em] uppercase transition-colors hover:bg-brand-cream hover:text-brand-primary"
        >
          <span className="relative block shrink-0 overflow-hidden">
            <span className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-full">
              works
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 block -translate-y-full transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-0"
            >
              works
            </span>
          </span>
        </Link>
        <Link
          to="/contact"
          className="group/roll flex flex-1 items-center justify-center border-r last:border-r-0 border-brand-cream/40 p-3 md:p-4 py-10 md:py-14 text-lg md:text-xl leading-[1.3] tracking-[0.06em] uppercase transition-colors hover:bg-brand-cream hover:text-brand-primary"
        >
          <span className="relative block shrink-0 overflow-hidden">
            <span className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-full">
              contact
            </span>
            <span
              aria-hidden="true"
              className="absolute inset-0 block -translate-y-full transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-0"
            >
              contact
            </span>
          </span>
        </Link>
      </nav>

      {/* Elsewhere & Colophon Grid */}
      <div className="grid grid-cols-4 md:grid-cols-12">
        <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-cream/40">
          <div className="grid grid-cols-4 md:grid-cols-10 border-b border-brand-cream/40">
            {/* Elsewhere */}
            <div className="col-span-4 md:col-span-6 p-3 md:p-4 flex flex-col justify-between gap-8 py-10 md:min-h-[18rem] md:py-14">
              <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                elsewhere
              </p>
              <ul className="flex flex-col gap-1">
                <li>
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group/roll inline-flex items-center gap-3 text-lg md:text-xl leading-[1.3] tracking-[0.06em] uppercase opacity-80 transition-opacity hover:opacity-100"
                  >
                    <span className="relative block shrink-0 overflow-hidden">
                      <span className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-full">
                        GitHub
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 block -translate-y-full transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-0"
                      >
                        GitHub
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-[450ms] group-hover/roll:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group/roll inline-flex items-center gap-3 text-lg md:text-xl leading-[1.3] tracking-[0.06em] uppercase opacity-80 transition-opacity hover:opacity-100"
                  >
                    <span className="relative block shrink-0 overflow-hidden">
                      <span className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-full">
                        LinkedIn
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 block -translate-y-full transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-0"
                      >
                        LinkedIn
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-[450ms] group-hover/roll:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="group/roll inline-flex items-center gap-3 text-lg md:text-xl leading-[1.3] tracking-[0.06em] uppercase opacity-80 transition-opacity hover:opacity-100"
                  >
                    <span className="relative block shrink-0 overflow-hidden">
                      <span className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-full">
                        Email
                      </span>
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 block -translate-y-full transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-0"
                      >
                        Email
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-[450ms] group-hover/roll:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Colophon */}
            <div className="col-span-4 md:col-span-4 p-3 md:p-4 flex flex-col justify-between gap-8 border-t py-10 md:border-t-0 md:border-l border-brand-cream/40 md:py-14">
              <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                colophon
              </p>
              <div className="flex flex-col gap-2">
                <p className="text-[0.65rem] tracking-[0.18em] uppercase opacity-70">
                  © 2026 rivisha. All rights reserved.
                </p>
                <p className="text-[0.65rem] tracking-[0.18em] uppercase opacity-50">
                  Designed &amp; built by Rivisha Marambage
                </p>
                <p className="text-[0.65rem] tracking-[0.18em] uppercase opacity-50">
                  Sri Lanka · UTC+5:30
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Giant footer wordmark */}
      <div className="grid grid-cols-4 md:grid-cols-12">
        <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-cream/40 overflow-hidden">
          <p className="-mb-[0.14em] px-3 text-center text-[30vw] leading-[0.7] font-bold tracking-[-0.13em] md:px-4 select-none">
            rivisha<span style={{ color: 'var(--color-brand-accent)' }}>.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
