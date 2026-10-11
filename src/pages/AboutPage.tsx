import React from 'react';
import { RollingCTA } from '../components/RollingCTA';
import { EXPERIENCES, TOOLKIT, CERTIFICATES } from '../data/portfolioData';
import { Code, Palette, Sparkles } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col text-brand-primary">
      {/* 1. HERO SECTION */}
      <section className="border-b border-brand-primary/50 text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12">
          {/* Left Title */}
          <div className="relative z-10 col-span-4 flex flex-col justify-end px-4 py-8 sm:px-6 md:col-span-8 md:px-4 md:py-12 border-b md:border-b-0 border-brand-primary/50">
            <p className="mb-2 sm:mb-3 md:mb-4 text-[0.85rem] font-bold tracking-[0.18em] uppercase opacity-75 md:text-base">
              the
            </p>
            <h1 className="text-[clamp(3.5rem,20vw,17rem)] leading-[0.8] font-bold tracking-[-0.13em]">
              developer.
            </h1>
          </div>

          {/* Right Video Card */}
          <div className="relative col-span-4 md:col-span-4 md:border-l border-brand-primary/50">
            <div className="relative aspect-[4/3] sm:aspect-square md:aspect-square max-h-[50svh] sm:max-h-[66svh] w-full overflow-hidden bg-brand-dark">
              <video
                src="/api/media/file/rivisha-hero-video2.mp4"
                muted
                loop
                autoPlay
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. BIO & TOOLKIT SECTION */}
      <section className="border-b border-brand-primary/50 text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12 items-start pt-0">
          {/* Sticky Left Sidebar */}
          <aside className="col-span-4 md:col-span-5 p-3 md:p-4 flex flex-col gap-6 md:sticky md:top-16 md:h-[calc(100svh-4rem)] md:gap-8 md:py-8 md:order-1 border-b md:border-b-0 border-brand-primary/50">
            <div>
              <p className="mb-5 md:mb-7 text-[0.85rem] font-bold tracking-[0.18em] uppercase opacity-75 md:text-base">
                Hi, I'm Rivisha!
              </p>
              <h2 className="text-[clamp(2.25rem,4.6vw,4rem)] leading-[0.92] font-bold tracking-[-0.05em] text-balance">
                Turning ideas into digital experiences.
              </h2>
            </div>
            <figure className="flex min-h-0 flex-1 flex-col">
              <div className="relative aspect-4/5 w-full overflow-hidden border border-brand-primary/50 md:aspect-auto md:min-h-0 md:flex-1">
                <img
                  alt="Rivisha Marambage"
                  className="object-cover object-top h-full w-full"
                  src="/api/media/file/rivisha-blazer-portrait.jpg"
                />
              </div>
              <figcaption className="mt-3 shrink-0 opacity-50 text-[0.65rem] tracking-[0.18em] uppercase">
                Rivisha Marambage · Sri Lanka, 2026
              </figcaption>
            </figure>
          </aside>

          {/* Main Story & Toolkit Content */}
          <div className="col-span-4 md:col-span-7 border-brand-primary/50 pb-0 md:self-stretch md:order-2 md:border-l">
            {/* Statement Callout */}
            <div className="p-3 md:p-4 py-14 md:py-20">
              <p className="text-[clamp(1.75rem,3.6vw,3.25rem)] leading-[1.06] font-bold tracking-[-0.04em]">
                Building things that feel as good as they function.
              </p>
            </div>

            {/* Narrative text & CTA */}
            <div className="p-3 md:p-4 py-14 md:py-20 border-t border-brand-primary/50">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="max-w-[62ch] text-lg md:text-xl leading-relaxed">
                    I'm a Computer Science undergraduate at IIT Sri Lanka, affiliated with the
                    University of Westminster, UK, with a growing passion for software engineering,
                    web development, and digital product design.
                  </p>
                </div>
                <div>
                  <p className="max-w-[62ch] text-lg md:text-xl leading-relaxed">
                    I enjoy taking an idea from its earliest concept to a working digital experience.
                    From designing interfaces in Figma to developing interactive applications with
                    modern web technologies, I like understanding how design and engineering work
                    together to create products that are useful, intuitive, and visually engaging.
                    <br />
                    <br />
                    My current focus is expanding my software engineering skills, building meaningful
                    projects, and exploring AI-powered applications. Beyond development, I'm interested
                    in UI/UX design, artificial intelligence, gaming, and creative technology.
                  </p>
                </div>
                <RollingCTA to="/contact" className="self-start mt-2">
                  Get in touch
                </RollingCTA>
              </div>
            </div>

            {/* Toolkit Section */}
            <div className="p-3 md:p-4 py-14 md:py-20 border-t border-brand-primary/50">
              <div className="flex flex-col gap-8">
                <div>
                  <p className="mb-3 text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                    skills & toolkit
                  </p>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                    Toolkit
                  </h3>
                </div>

                <div className="flex flex-col gap-7">
                  {/* 01 Build */}
                  <div>
                    <h4 className="flex items-center gap-2 border-b border-brand-primary/50 pb-2 text-base font-bold tracking-[-0.01em] md:text-lg">
                      <Code className="h-4 w-4 shrink-0 opacity-70" />
                      <span className="tabular-nums">01 — </span>build & code
                    </h4>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {TOOLKIT.build.map((skill) => (
                        <li
                          key={skill}
                          className="inline-flex items-center gap-1.5 border px-2 py-1 leading-none lowercase font-mono text-[0.72rem] tracking-[0.02em] md:text-[0.78rem] border-brand-primary/50 transition-colors duration-300 hover:bg-brand-primary hover:text-brand-cream"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 02 Design */}
                  <div>
                    <h4 className="flex items-center gap-2 border-b border-brand-primary/50 pb-2 text-base font-bold tracking-[-0.01em] md:text-lg">
                      <Palette className="h-4 w-4 shrink-0 opacity-70" />
                      <span className="tabular-nums">02 — </span>design
                    </h4>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {TOOLKIT.design.map((skill) => (
                        <li
                          key={skill}
                          className="inline-flex items-center gap-1.5 border px-2 py-1 leading-none lowercase font-mono text-[0.72rem] tracking-[0.02em] md:text-[0.78rem] border-brand-primary/50 transition-colors duration-300 hover:bg-brand-primary hover:text-brand-cream"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 03 Explore */}
                  <div>
                    <h4 className="flex items-center gap-2 border-b border-brand-primary/50 pb-2 text-base font-bold tracking-[-0.01em] md:text-lg">
                      <Sparkles className="h-4 w-4 shrink-0 opacity-70" />
                      <span className="tabular-nums">03 — </span>explore & tools
                    </h4>
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {TOOLKIT.explore.map((skill) => (
                        <li
                          key={skill}
                          className="inline-flex items-center gap-1.5 border px-2 py-1 leading-none lowercase font-mono text-[0.72rem] tracking-[0.02em] md:text-[0.78rem] border-brand-primary/50 transition-colors duration-300 hover:bg-brand-primary hover:text-brand-cream"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Certificates Section */}
            <div className="p-3 md:p-4 py-14 md:py-20 border-t border-brand-primary/50">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="mb-3 text-[0.7rem] font-bold tracking-[0.18em] uppercase opacity-75">
                    credentials
                  </p>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] md:text-4xl">
                    Certificates
                  </h3>
                </div>
                <ul className="divide-y divide-brand-primary/30 border-t border-brand-primary/50">
                  {CERTIFICATES.map((cert, i) => (
                    <li key={i} className="py-5 flex flex-col gap-1">
                      <p className="font-semibold tracking-[-0.01em] text-base md:text-lg">
                        {cert.title}
                      </p>
                      <p className="font-mono text-[0.72rem] tracking-[0.02em] opacity-60">
                        {cert.issuer} · {cert.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section className="border-b border-brand-primary/50 text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12 items-start pt-0">
          {/* Sticky Sidebar on Desktop */}
          <aside className="col-span-4 md:col-span-5 p-3 md:p-4 flex flex-col gap-6 md:sticky md:top-16 md:h-[calc(100svh-4rem)] md:gap-8 md:py-8 md:order-2 border-b md:border-b-0 border-brand-primary/50">
            <div>
              <p className="mb-5 md:mb-7 text-[0.85rem] font-bold tracking-[0.18em] uppercase opacity-75 md:text-base">
                Education & Experience
              </p>
              <h2 className="text-[clamp(2.25rem,4.6vw,4rem)] leading-[0.92] font-bold tracking-[-0.05em] text-balance">
                Building foundations.
              </h2>
            </div>
            <figure className="flex min-h-0 flex-1 flex-col gap-4">
              {/* Main Hackathon Team Photo */}
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-brand-primary/50 group">
                <img
                  alt="IIT Sri Lanka & University of Westminster Hackathon Team"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  src="/api/media/file/iit-hackathon-team.jpg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[0.6rem] font-mono tracking-wider uppercase px-2 py-1 bg-black/60 backdrop-blur-sm border border-white/10">
                  <span>Hackathon & Tech Life</span>
                  <span className="text-brand-accent">IIT · Westminster</span>
                </div>
              </div>

              {/* Institution Badges Side-by-Side */}
              <div className="grid grid-cols-2 gap-3 w-full">
                <div className="relative h-14 overflow-hidden border border-brand-primary/50 bg-white p-2 flex items-center justify-center">
                  <img
                    alt="Informatics Institute of Technology (IIT)"
                    className="max-h-full max-w-full object-contain"
                    src="/api/media/file/iit-logo.png"
                  />
                </div>

                <div className="relative h-14 overflow-hidden border border-brand-primary/50 bg-white p-2 flex items-center justify-center">
                  <img
                    alt="University of Westminster"
                    className="max-h-full max-w-full object-contain"
                    src="/api/media/file/westminster-logo.webp"
                  />
                </div>
              </div>

              <figcaption className="text-center opacity-60 text-[0.65rem] tracking-[0.18em] uppercase font-mono">
                BSc (Hons) Computer Science · 2025–Present
              </figcaption>
            </figure>
          </aside>

          {/* Timeline List on Desktop */}
          <div className="col-span-4 md:col-span-7 border-brand-primary/50 pb-0 md:self-stretch md:order-1 md:border-r">
            <div className="p-3 md:p-4 py-14 md:py-20">
              <ol className="-mx-3 md:-mx-4 divide-y divide-brand-primary/50 border-t border-b border-brand-primary/50">
                {EXPERIENCES.map((exp, idx) => (
                  <li key={idx} className="transition-colors hover:bg-brand-primary/5">
                    <div className="grid gap-1.5 px-3 py-5 md:grid-cols-[9rem_1fr] md:gap-x-6 md:px-4">
                      <p className="font-mono text-[0.72rem] tracking-[0.02em] md:text-[0.78rem] pt-1 leading-[1.5] opacity-60">
                        {exp.period}
                      </p>
                      <div>
                        <h4 className="text-lg font-semibold tracking-[-0.01em] md:text-xl">
                          {exp.role}
                        </h4>
                        <p className="mt-1.5 font-mono text-[0.72rem] tracking-[0.02em] md:text-[0.78rem] leading-[1.7] opacity-80">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noreferrer noopener"
                              className="underline decoration-from-font underline-offset-4 transition-opacity hover:opacity-60"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            exp.company
                          )}
                          <span className="whitespace-nowrap opacity-60">
                            {' '}
                            · {exp.location}
                          </span>
                          <span className="whitespace-nowrap opacity-60">
                            {' '}
                            · {exp.type}
                          </span>
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WANT TO CHAT SECTION */}
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
                  collaborate?
                </h2>
              </div>
            </div>

              {/* Split CTA & Image */}
            <div className="relative">
              <div className="grid grid-cols-4 md:grid-cols-10">
                <div className="col-span-4 md:col-span-4 md:border-r border-b md:border-b-0 border-brand-primary/50 p-4 sm:p-6 md:p-4 flex flex-col items-start gap-6 md:gap-8 py-10 md:py-20">
                  <p className="max-w-[46ch] text-base sm:text-lg md:text-xl leading-relaxed">
                    Looking for a developer and designer to bring your idea to life? Let's talk.
                  </p>
                  <RollingCTA to="/contact">Contact Me</RollingCTA>
                </div>
                <div className="col-span-4 md:col-span-6 min-h-[260px] sm:min-h-[360px] md:min-h-[560px]">
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      alt="Coffee Aesthetic"
                      src="/api/media/file/coffee-aesthetic.jpg"
                      className="absolute inset-0 h-full w-full object-cover object-center"
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
