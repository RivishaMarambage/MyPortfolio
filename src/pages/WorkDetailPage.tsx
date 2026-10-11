import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { WORKS } from '../data/portfolioData';

export const WorkDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const currentIndex = WORKS.findIndex((w) => w.slug === slug);
  if (currentIndex === -1) {
    return <Navigate to="/works" replace />;
  }

  const work = WORKS[currentIndex];
  const prevWork =
    WORKS[currentIndex === 0 ? WORKS.length - 1 : currentIndex - 1];
  const nextWork =
    WORKS[currentIndex === WORKS.length - 1 ? 0 : currentIndex + 1];

  // YouTube embed helper
  const getYouTubeEmbedUrl = (url?: string) => {
    if (!url) return null;
    const match =
      url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=0&rel=0` : null;
  };

  const ytEmbed = getYouTubeEmbedUrl(work.youtubeUrl);

  return (
    <div className="flex flex-col text-brand-primary">
      {/* 1. PROJECT HERO */}
      <section className="border-b border-brand-primary/50 text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12">
          <div className="col-span-4 md:col-span-12 p-4 md:p-8 py-12 md:py-20 border-b border-brand-primary/50 flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                {work.categories.join(' · ') || 'Project'}
              </span>
              <Link
                to="/works"
                className="text-[0.65rem] tracking-[0.18em] uppercase underline hover:opacity-60 transition-opacity"
              >
                ← Back to works
              </Link>
            </div>

            <h1 className="text-[clamp(2.5rem,10vw,8rem)] leading-[0.88] font-bold tracking-[-0.07em]">
              {work.title}
            </h1>

            {/* Tags badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {work.tags.map((t) => (
                <span
                  key={t}
                  className="border border-brand-primary/50 px-3 py-1 text-[0.65rem] tracking-[0.18em] uppercase font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN MEDIA PRESENTATION */}
      <section className="border-b border-brand-primary/50 bg-brand-dark/5">
        <div className="grid grid-cols-4 md:grid-cols-12">
          <div className="col-span-4 md:col-span-12">
            {/* Action Bar: Direct Live URL button and view controls */}
            {work.liveUrl && (
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 md:p-6 bg-brand-primary text-brand-cream border-b border-brand-primary/50">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-accent"></span>
                  </span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[0.65rem] tracking-[0.18em] uppercase font-bold opacity-80">
                      Live Interactive Project
                    </span>
                    <span className="font-mono text-xs opacity-90 truncate max-w-[280px] sm:max-w-none">
                      {work.liveUrl}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={work.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 sm:px-5 sm:py-2.5 bg-brand-accent text-[#111318] text-xs font-bold tracking-wider uppercase transition-all duration-200 hover:brightness-110 hover:scale-[1.02] shadow-sm"
                  >
                    <span>Visit Live Website</span>
                    <span className="text-sm">↗</span>
                  </a>
                </div>
              </div>
            )}

            {/* Interactive Browser Frame if liveUrl is present */}
            {work.liveUrl ? (
              <div className="flex flex-col border-b border-brand-primary/50 bg-[#15171e]">
                {/* Simulated Browser Chrome Topbar */}
                <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-[#1e2129] border-b border-white/10 select-none gap-2">
                  <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff5f56]/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ffbd2e]/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27c93f]/80 inline-block"></span>
                  </div>
                  
                  {/* Address pill */}
                  <div className="flex items-center gap-1.5 sm:gap-2 bg-[#111318] px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-md border border-white/10 text-[0.65rem] sm:text-xs font-mono text-white/70 max-w-md w-full justify-center min-w-0">
                    <svg className="w-3 h-3 text-brand-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="truncate">{work.liveUrl}</span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={work.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open full page in new tab"
                      className="text-white/60 hover:text-white text-[0.65rem] sm:text-xs font-mono px-2 py-1 border border-white/10 rounded transition-colors"
                    >
                      Open ↗
                    </a>
                  </div>
                </div>

                {/* Embedded scrollable webpage */}
                <div className="relative w-full h-[58vh] sm:h-[70vh] md:h-[82vh] bg-white overflow-hidden">
                  <iframe
                    src={work.liveUrl}
                    title={`${work.title} Live Preview`}
                    className="w-full h-full border-0"
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                    loading="lazy"
                  />
                </div>
                
                {/* Note bar beneath preview */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-3 sm:px-4 py-2 bg-[#1a1d24] text-[0.65rem] font-mono text-white/60 border-t border-white/10">
                  <span>Interactive Preview · Scroll, click and explore the live build above</span>
                  <a
                    href={work.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-brand-accent transition-colors"
                  >
                    Having trouble? Launch in a new tab ↗
                  </a>
                </div>
              </div>
            ) : ytEmbed ? (
              <div className="relative aspect-video w-full overflow-hidden border-b border-brand-primary/50">
                <iframe
                  src={ytEmbed}
                  title={work.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full border-0"
                />
              </div>
            ) : work.video ? (
              <div className="relative aspect-video max-h-[75vh] w-full overflow-hidden border-b border-brand-primary/50">
                <video
                  src={work.video}
                  controls
                  playsInline
                  className="h-full w-full object-cover"
                  poster={work.coverImage}
                />
              </div>
            ) : (
              <div className="relative aspect-video max-h-[75vh] w-full overflow-hidden border-b border-brand-primary/50">
                <img
                  src={work.coverImage}
                  alt={work.title}
                  className="h-full w-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. DETAILS & RELATED FACTS */}
      <section className="border-b border-brand-primary/50 text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12">
          <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50">
            <div className="grid grid-cols-4 md:grid-cols-10">
              {/* Summary Story (Cols 1-6) */}
              <div className="col-span-4 md:col-span-6 p-4 md:p-8 py-12 md:py-16 border-b md:border-b-0 md:border-r border-brand-primary/50 flex flex-col gap-6">
                <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                  overview.
                </p>
                <div className="text-lg md:text-xl leading-relaxed whitespace-pre-line opacity-90 max-w-[60ch]">
                  {work.summary}
                </div>
              </div>

              {/* Related Links & Meta (Cols 7-10) */}
              <div className="col-span-4 md:col-span-4 p-4 md:p-8 py-12 md:py-16 flex flex-col justify-between gap-12">
                <div>
                  <p className="text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75 mb-6">
                    related links.
                  </p>
                  {work.relatedLinks && work.relatedLinks.length > 0 ? (
                    <ul className="flex flex-col divide-y divide-brand-primary/25 border-t border-b border-brand-primary/25">
                      {work.relatedLinks.map((link, idx) => (
                        <li
                          key={idx}
                          className="py-3 flex items-center justify-between gap-4"
                        >
                          <span className="font-mono text-xs opacity-70">
                            {link.label}
                          </span>
                          <a
                            href={link.url.startsWith('http') ? link.url : `https://${link.url}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/link inline-flex items-center gap-1.5 text-sm uppercase tracking-wider underline hover:opacity-70 transition-opacity"
                          >
                            <span>{link.value}</span>
                            <span className="transition-transform group-hover/link:translate-x-1">
                              →
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="font-mono text-xs opacity-50">
                      Private client project
                    </p>
                  )}
                </div>

                <div className="border-t border-brand-primary/25 pt-6 flex flex-col gap-2 text-xs font-mono opacity-70">
                  <div>Categories: {work.categories.join(', ')}</div>
                  <div>Client Project · {new Date().getFullYear()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* 5. PREVIOUS / NEXT WORK FOOTER NAVIGATION */}
      <section className="border-b border-brand-primary/50 text-brand-primary">
        <div className="grid grid-cols-2 divide-x divide-brand-primary/50">
          <Link
            to={`/works/${prevWork.slug}`}
            className="group/prev p-6 md:p-12 flex flex-col gap-2 hover:bg-brand-primary hover:text-brand-cream transition-colors"
          >
            <span className="text-[0.65rem] tracking-[0.18em] uppercase opacity-60">
              ← Previous Work
            </span>
            <span className="text-xl md:text-3xl font-bold tracking-[-0.03em]">
              {prevWork.title}
            </span>
          </Link>
          <Link
            to={`/works/${nextWork.slug}`}
            className="group/next p-6 md:p-12 flex flex-col items-end gap-2 hover:bg-brand-primary hover:text-brand-cream transition-colors text-right"
          >
            <span className="text-[0.65rem] tracking-[0.18em] uppercase opacity-60">
              Next Work →
            </span>
            <span className="text-xl md:text-3xl font-bold tracking-[-0.03em]">
              {nextWork.title}
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
};
