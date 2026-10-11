import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RollingLink } from '../components/RollingLink';
import { RollingCTA } from '../components/RollingCTA';
import { WORKS, SERVICES } from '../data/portfolioData';

export const HomePage: React.FC = () => {
  // Selected works slider index (0 to 4)
  const featuredWorks = WORKS.slice(0, 5);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeWork = featuredWorks[activeIndex] || featuredWorks[0];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? featuredWorks.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === featuredWorks.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col text-brand-primary">
      {/* 1. HERO SECTION */}
      <section className="flex flex-col border-b md:min-h-[calc(100svh-4rem)] border-brand-primary/50">
        {/* Top Media Split */}
        <div className="grid grid-cols-4 md:grid-cols-12 md:min-h-[40svh] md:flex-1 border-b border-brand-primary/50">
          {/* Hero Video Card (Cols 1-8) */}
          <div
            id="hero-media-card"
            className="relative col-span-4 md:col-span-8 aspect-[4/3] md:aspect-auto md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-brand-primary/50"
          >
            <video
              className="absolute inset-0 h-full w-full object-cover"
              muted
              loop
              playsInline
              autoPlay
              preload="auto"
              poster="/api/media/file/project-echoclipz-cover.png"
            >
              <source
                src="/api/media/file/rivisha-hero-video.mp4"
                type="video/mp4"
              />
            </video>
            <div className="pointer-events-none absolute inset-0" />
          </div>

          {/* Hero Portrait (Cols 9-12) */}
          <div className="relative col-span-4 md:col-span-4 aspect-[3/4] md:aspect-auto md:h-full overflow-hidden">
            <div className="absolute inset-0">
              <img
                alt="Rivisha Marambage"
                className="object-cover object-top h-full w-full"
                src="/api/media/file/rivisha-profile.jpg"
              />
            </div>
          </div>
        </div>

        {/* Bottom Giant Typography & Roles Split */}
        <div className="grid grid-cols-4 md:grid-cols-12">
          {/* Main Title 'rivisha.' */}
          <div className="col-span-4 flex items-end px-3 py-3 md:col-span-7 md:px-4 md:py-5">
            <h1
              id="hero-heading"
              className="text-[clamp(3.5rem,22vw,17rem)] leading-[0.8] font-bold tracking-[-0.13em] select-none"
              aria-label="rivisha."
            >
              {'rivisha'.split('').map((char, index) => (
                <span
                  key={index}
                  className="inline-block transition-transform duration-700 ease-out"
                  style={{
                    animation: `fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                    animationDelay: `${index * 80}ms`
                  }}
                >
                  {char}
                </span>
              ))}
              <span style={{ color: 'var(--color-brand-accent)' }}>.</span>
            </h1>
          </div>

          {/* Roles */}
          <ul className="col-span-3 md:col-span-3 md:border-l border-brand-primary/50 p-3 md:p-4 flex flex-col justify-end gap-1 text-base leading-[1.15] font-medium tracking-[-0.02em] md:text-xl lg:text-2xl">
            <li className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-300">
              Software Developer
            </li>
            <li className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-400">
              UI/UX Designer
            </li>
            <li className="animate-in fade-in slide-in-from-bottom-2 duration-500 delay-500">
              Creator
            </li>
          </ul>

          {/* Availability Badge */}
          <div className="col-span-1 md:col-span-2 md:border-l border-brand-primary/50 p-3 md:p-4 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 text-center">
              <span className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-[0.55rem] md:text-[0.6rem] font-mono tracking-[0.15em] uppercase opacity-70 leading-tight">
                Available<br />Freelance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE DEVELOPER STATEMENT SECTION */}
      <section className="text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12">
          <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50 pt-16 md:pt-40 pb-0">
            {/* Header */}
            <div className="grid grid-cols-4 md:grid-cols-10 border-b border-brand-primary/50">
              <div className="col-span-4 md:col-span-10 p-3 md:p-4">
                <p className="mb-3 md:mb-4 text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                  the
                </p>
                <h2 className="text-5xl leading-[0.85] font-bold tracking-[-0.06em] md:text-7xl lg:text-8xl">
                  developer.
                </h2>
              </div>
            </div>

            {/* Split Bio & CTA */}
            <div className="relative">
              <div className="grid grid-cols-4 md:grid-cols-10 border-b border-brand-primary/50">
                <div className="col-span-4 md:col-span-4 border-r border-brand-primary/50 p-3 md:p-4 flex flex-col items-start gap-8 py-14 md:py-20">
                  <p className="max-w-[46ch] text-lg md:text-xl leading-relaxed">
                    I'm Rivisha Marambage — a Computer Science undergraduate at IIT Sri Lanka,
                    affiliated with the University of Westminster, UK. I build modern web
                    applications, design intuitive digital experiences, and explore how AI can
                    turn creative ideas into practical products.
                  </p>
                  <RollingCTA to="/about">learn more</RollingCTA>
                </div>
                <div className="col-span-4 md:col-span-6 min-h-[220px] md:min-h-[300px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SELECTED WORKS SECTION (SLIDER) */}
      <section className="border-b border-brand-primary/50 text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12">
          <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50 pt-16 md:pt-40">
            {/* Section Header */}
            <div className="grid grid-cols-4 md:grid-cols-10 border-b border-brand-primary/50">
              <div className="col-span-4 md:col-span-10 p-3 md:p-4">
                <p className="mb-2 md:mb-3 text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                  selected
                </p>
                <h2 className="text-5xl leading-[0.85] font-bold tracking-[-0.06em] md:text-7xl lg:text-8xl">
                  works.
                </h2>
              </div>
            </div>

            {/* Slider Row */}
            <div className="grid grid-cols-4 md:grid-cols-10">
              <div className="relative z-10 col-span-4 md:col-span-10 lg:col-span-6 lg:border-r border-brand-primary/50">
                <div className="flex border-b border-brand-primary/50">
                  {/* Left Thumbnails Strip */}
                  <div className="flex w-24 shrink-0 flex-col border-r md:w-36 lg:w-40 border-brand-primary/50">
                    {featuredWorks.map((work, idx) => (
                      <button
                        key={work.slug}
                        type="button"
                        aria-label={`Show ${work.title}`}
                        aria-current={activeIndex === idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`relative w-full flex-1 cursor-pointer overflow-hidden border-b last:border-b-0 border-brand-primary/50 transition-opacity min-h-[70px] md:min-h-[90px] ${
                          activeIndex === idx
                            ? 'opacity-100 ring-2 ring-brand-primary inset-0'
                            : 'opacity-40 hover:opacity-80'
                        }`}
                      >
                        <img
                          alt={work.title}
                          src={work.coverImage}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  {/* Active Work Card */}
                  <div className="min-w-0 flex-1">
                    <article className="flex h-full flex-col">
                      {/* Top Info Box */}
                      <div className="bg-brand-primary text-brand-cream p-3 md:p-4 flex flex-col gap-5 py-6 md:py-8 transition-colors">
                        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                          <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                            {activeWork.title}
                          </h3>
                          <ul className="text-[0.65rem] tracking-[0.18em] uppercase opacity-70 sm:shrink-0 sm:text-right">
                            {activeWork.categories.map((c) => (
                              <li key={c}>{c}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Tags */}
                        <ul className="flex flex-wrap gap-2">
                          {activeWork.tags.map((t) => (
                            <li
                              key={t}
                              className="border border-brand-cream/50 px-3 py-1 text-[0.65rem] tracking-[0.18em] uppercase"
                            >
                              {t}
                            </li>
                          ))}
                        </ul>

                        {/* Links row */}
                        <div className="mt-auto flex items-center justify-between gap-4 pt-2">
                          {activeWork.liveUrl ? (
                            <a
                              href={activeWork.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-accent text-[#111318] text-[0.65rem] font-bold tracking-wider uppercase transition-transform hover:scale-105"
                            >
                              <span>Live Site ↗</span>
                            </a>
                          ) : <span />}

                          {/* Learn more roll link */}
                          <RollingLink
                            to={`/works/${activeWork.slug}`}
                            showArrow
                            arrowChar=">"
                            className="self-end text-lg md:text-xl leading-[1.3] tracking-[0.06em]"
                          >
                            learn more
                          </RollingLink>
                        </div>
                      </div>

                      {/* Cover Image Link */}
                      <Link
                        to={`/works/${activeWork.slug}`}
                        className="relative block w-full flex-1 overflow-hidden min-h-[320px] md:min-h-[420px] lg:min-h-[520px] group"
                      >
                        <img
                          alt={activeWork.title}
                          src={activeWork.coverImage}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        />
                      </Link>
                    </article>
                  </div>
                </div>

                {/* Arrow Controls */}
                <div className="flex h-16 md:h-20">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous work"
                    className="flex flex-1 cursor-pointer items-center justify-center border-r border-brand-primary/50 transition-colors hover:bg-brand-primary hover:text-brand-cream text-xl"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next work"
                    className="flex flex-1 cursor-pointer items-center justify-center transition-colors hover:bg-brand-primary hover:text-brand-cream text-xl"
                  >
                    →
                  </button>
                </div>
              </div>

              {/* Side Image on Desktop (Cols 7-10) */}
              <div className="group/side relative z-0 hidden min-h-[320px] lg:col-span-4 lg:block overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    transform: 'scale(1.05)',
                    transformOrigin: 'right bottom'
                  }}
                >
                  <div className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/side:-translate-x-[2%]">
                    <img
                      alt="Developer workspace"
                      src="/api/media/file/hero-image-2.webp"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Works Marquee Ticker */}
        <Link
          to="/works"
          aria-label="view all works"
          className="group/marquee relative block h-10 overflow-hidden border-t md:h-12 border-brand-primary/50 transition-colors hover:bg-brand-primary hover:text-brand-cream"
        >
          <div
            aria-hidden="true"
            className="animate-marquee-view-all flex h-full w-max items-center text-[0.65rem] tracking-[0.18em] uppercase group-hover/marquee:[animation-play-state:paused]"
          >
            {Array.from({ length: 2 }).map((_, loopIdx) => (
              <span key={loopIdx} className="flex shrink-0 items-center">
                {Array.from({ length: 16 }).map((_, itemIdx) => (
                  <span
                    key={itemIdx}
                    className="flex shrink-0 items-center whitespace-nowrap"
                  >
                    view all works
                    <span className="px-6 opacity-40">/</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </Link>
      </section>

      {/* 4. SERVICES SECTION */}
      <section className="text-brand-primary pb-0">
        <div className="grid grid-cols-4 md:grid-cols-12">
          <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50 pt-16 md:pt-40">
            <div className="grid grid-cols-4 md:grid-cols-10">
              <div className="col-span-4 md:col-span-10 p-3 md:p-4">
                <p className="mb-2 md:mb-3 text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                  my
                </p>
                <h2 className="text-5xl leading-[0.85] font-bold tracking-[-0.06em] md:text-7xl lg:text-8xl">
                  services.
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Service Rows */}
        {SERVICES.map((srv, idx) => (
          <div
            key={srv.number}
            className={`group grid grid-cols-4 md:grid-cols-12 border-b transition-[min-height] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:min-h-[250px] md:hover:min-h-[360px] border-brand-primary/50 ${
              idx === 0 ? 'border-t' : ''
            }`}
          >
            {/* Number */}
            <span className="col-span-1 p-3 md:p-4 flex items-start tabular-nums opacity-60 text-[0.65rem] tracking-[0.18em] uppercase">
              {srv.number}
            </span>

            {/* Title */}
            <h3 className="col-span-3 md:col-span-6 border-l border-brand-primary/50 md:border-r p-3 md:p-4 flex items-center text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
              {srv.title}
            </h3>

            {/* Tags */}
            <ul className="col-span-3 col-start-2 md:col-span-2 md:col-start-auto border-l border-brand-primary/50 md:border-r md:border-l-0 p-3 md:p-4 flex flex-col justify-center gap-1 text-[0.65rem] tracking-[0.18em] uppercase">
              {srv.tags.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            {/* Hover preview container */}
            <div className="relative col-span-4 h-48 overflow-hidden md:col-span-3 md:h-auto">
              <div className="absolute inset-0 -translate-y-[3%] scale-110 transition-transform duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0 group-hover:scale-100">
                {srv.mediaType === 'video' ? (
                  <video
                    src={srv.mediaUrl}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <img
                    src={srv.mediaUrl}
                    alt={srv.title}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 5. WANT TO CHAT SECTION */}
      <section className="text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12">
          <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50 pt-16 md:pt-40 pb-0">
            {/* Header */}
            <div className="grid grid-cols-4 md:grid-cols-10 border-b border-brand-primary/50">
              <div className="col-span-4 md:col-span-10 p-3 md:p-4">
                <p className="mb-3 md:mb-4 text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                  want to
                </p>
                <h2 className="text-5xl leading-[0.85] font-bold tracking-[-0.06em] md:text-7xl lg:text-8xl">
                  chat?
                </h2>
              </div>
            </div>

            {/* Split CTA & Image */}
            <div className="relative">
              <div className="grid grid-cols-4 md:grid-cols-10">
                <div className="col-span-4 md:col-span-4 border-r border-brand-primary/50 p-3 md:p-4 flex flex-col items-start gap-8 py-14 md:py-20">
                  <p className="max-w-[46ch] text-lg md:text-xl leading-relaxed">
                    Got a project in mind? I'd love to hear about it.
                  </p>
                  <RollingCTA to="/contact">contact me</RollingCTA>
                </div>
                <div className="col-span-4 md:col-span-6 min-h-[360px] md:min-h-[560px]">
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      alt="Rivisha Marambage"
                      src="/api/media/file/rivisha-profile.jpg"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
