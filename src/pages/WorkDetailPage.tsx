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
            {ytEmbed ? (
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

      {/* 4. GALLERY STILLS */}
      {work.gallery && work.gallery.length > 0 && (
        <section className="border-b border-brand-primary/50 text-brand-primary">
          <div className="grid grid-cols-4 md:grid-cols-12">
            <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50 pt-12 md:pt-20">
              <div className="p-4 md:p-8 border-b border-brand-primary/50">
                <p className="mb-2 text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                  selected
                </p>
                <h2 className="text-4xl md:text-6xl font-bold tracking-[-0.05em]">
                  stills &amp; mockups.
                </h2>
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x border-b border-brand-primary/50">
                {work.gallery.map((img, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden aspect-[4/3] border-b border-brand-primary/50"
                  >
                    <img
                      src={img.url}
                      alt={img.alt || `${work.title} still ${idx + 1}`}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    {img.alt && (
                      <div className="absolute bottom-2 left-2 bg-brand-cream/90 text-brand-primary px-2.5 py-1 text-[0.65rem] font-mono tracking-wider uppercase border border-brand-primary/40 opacity-0 group-hover:opacity-100 transition-opacity">
                        {img.alt}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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
