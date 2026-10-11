import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { RollingLink } from '../components/RollingLink';
import { RollingCTA } from '../components/RollingCTA';
import { WORKS } from '../data/portfolioData';

const CATEGORIES = [
  'All',
  'AI Product',
  'SaaS',
  'E-Commerce',
  'UI/UX',
  'React',
  'Next.js',
  'Environmental',
  'Sports',
  'Personal Brand',
  'Web Development',
  'Group Project'
];

export const WorksPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const featuredWork = WORKS.find(
    (w) => w.slug === 'echoclipz-ai'
  ) || WORKS[0];

  const filteredWorks = useMemo(() => {
    return WORKS.filter((work) => {
      const matchesSearch =
        searchQuery.trim() === '' ||
        work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        work.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        work.categories.some((c) =>
          c.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === 'All' ||
        work.tags.includes(selectedCategory) ||
        work.categories.includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="flex flex-col text-brand-primary">
      {/* 1. HERO SECTION */}
      <section className="border-b border-brand-primary/50 text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12">
          {/* Left Title */}
          <div className="relative z-10 col-span-4 flex flex-col justify-end px-3 py-8 md:col-span-8 md:px-4 md:py-12">
            <h1 className="text-[clamp(3.5rem,22vw,17rem)] leading-[0.8] font-bold tracking-[-0.13em]">
              works.
            </h1>
          </div>

          {/* Right Vinyl & Portrait Card */}
          <div className="relative col-span-4 md:col-span-4 border-l border-brand-primary/50">
            <div className="relative aspect-square max-h-[66svh] w-full overflow-hidden bg-brand-dark">
              {/* Spinning Vinyl Record SVG */}
              <div
                className="absolute top-1/2 left-1/2 aspect-square h-[62%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                style={{ transform: 'translate(-50%, -50%) scale(0.72)' }}
              >
                <svg
                  viewBox="0 0 200 200"
                  className="animate-vinyl h-full w-full"
                  role="img"
                  aria-label="by me"
                >
                  <defs>
                    <path
                      id="vinyl-path"
                      fill="none"
                      d="M 100,100 m -76,0 a 76,76 0 1,1 152,0 a 76,76 0 1,1 -152,0"
                    />
                  </defs>
                  <circle cx="100" cy="100" r="100" fill="var(--color-brand-cream)" />
                  <circle
                    cx="100"
                    cy="100"
                    r="96"
                    fill="none"
                    stroke="var(--color-brand-primary)"
                    strokeOpacity="0.22"
                    strokeWidth="0.8"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="92"
                    fill="none"
                    stroke="var(--color-brand-primary)"
                    strokeOpacity="0.22"
                    strokeWidth="0.8"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="88"
                    fill="none"
                    stroke="var(--color-brand-primary)"
                    strokeOpacity="0.22"
                    strokeWidth="0.8"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="62"
                    fill="none"
                    stroke="var(--color-brand-primary)"
                    strokeOpacity="0.22"
                    strokeWidth="0.8"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="56"
                    fill="none"
                    stroke="var(--color-brand-primary)"
                    strokeOpacity="0.22"
                    strokeWidth="0.8"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="50"
                    fill="none"
                    stroke="var(--color-brand-primary)"
                    strokeOpacity="0.22"
                    strokeWidth="0.8"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="44"
                    fill="none"
                    stroke="var(--color-brand-primary)"
                    strokeOpacity="0.22"
                    strokeWidth="0.8"
                  />
                  <text
                    fill="var(--color-brand-primary)"
                    fontSize="9"
                    fontWeight="700"
                    letterSpacing="1.6"
                    style={{ textTransform: 'uppercase' }}
                  >
                    <textPath href="#vinyl-path">
                      RIVISHA MARAMBAGE · SOFTWARE DEVELOPER · DESIGNER · CREATOR ·
                    </textPath>
                  </text>
                  <circle cx="100" cy="100" r="34" fill="var(--color-brand-primary)" />
                  <circle cx="100" cy="100" r="4" fill="var(--color-brand-cream)" />
                </svg>
              </div>

              {/* Portrait on top of vinyl */}
              <div className="absolute inset-0">
                <img
                  alt="Rivisha Marambage and Hackathon Team"
                  className="h-full w-full object-cover object-center"
                  src="/api/media/file/works-hackathon-hero.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED WORK SECTION */}
      <section className="text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12 border-b border-brand-primary/50">
          <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50 pt-16 md:pt-40">
            <div className="grid grid-cols-4 md:grid-cols-10">
              <div className="col-span-4 md:col-span-10 p-3 md:p-4">
                <h2 className="text-5xl leading-[0.85] font-bold tracking-[-0.06em] md:text-7xl lg:text-8xl">
                  featured.
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Card */}
        <div className="grid grid-cols-4 md:grid-cols-12 border-b border-brand-primary/50">
          <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50">
            <div className="grid grid-cols-4 md:grid-cols-10">
              {/* Media Card */}
              <div className="col-span-4 aspect-[4/3] border-b md:col-span-5 md:aspect-auto md:min-h-[44rem] md:border-b-0 md:border-r border-brand-primary/50 overflow-hidden group">
                <Link
                  to={`/works/${featuredWork.slug}`}
                  className="block h-full w-full relative"
                >
                  <img
                    src={featuredWork.coverImage}
                    alt={featuredWork.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </Link>
              </div>

              {/* Details Column */}
              <div className="col-span-4 md:col-span-5 p-3 md:p-4 flex flex-col justify-center gap-5 md:gap-6">
                <h3>
                  <Link
                    to={`/works/${featuredWork.slug}`}
                    className="text-2xl font-semibold tracking-[-0.03em] md:text-4xl transition-colors hover:text-brand-primary/60"
                  >
                    {featuredWork.title}
                  </Link>
                </h3>
                <p className="max-w-[46ch] text-lg md:text-xl leading-relaxed">
                  {featuredWork.summary.slice(0, 180)}...
                </p>

                {/* Categories & Tags */}
                <div className="-mx-3 flex flex-wrap gap-x-10 gap-y-4 border-t px-3 md:-mx-4 md:px-4 border-brand-primary/50 pt-5">
                  <ul className="flex flex-col gap-1 text-[0.65rem] tracking-[0.18em] uppercase">
                    {featuredWork.categories.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-1 text-[0.65rem] tracking-[0.18em] uppercase opacity-60">
                    {featuredWork.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="-mx-3 flex items-center justify-between border-t px-3 py-4 md:-mx-4 md:px-4 md:py-5 border-brand-primary/50">
                  {featuredWork.liveUrl ? (
                    <a
                      href={featuredWork.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-brand-accent text-[#111318] text-xs font-bold tracking-wider uppercase transition-transform hover:scale-105"
                    >
                      <span>Visit Live Site ↗</span>
                    </a>
                  ) : <span />}

                  <RollingLink
                    to={`/works/${featuredWork.slug}`}
                    showArrow
                    arrowChar=">"
                    className="text-lg md:text-xl leading-[1.3] tracking-[0.06em] hover:opacity-80 transition-opacity"
                  >
                    learn more
                  </RollingLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE REST (CATALOG & FILTER) */}
      <section className="text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12 border-b border-brand-primary/50">
          <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50 pt-16 md:pt-40">
            <div className="grid grid-cols-4 md:grid-cols-10">
              <div className="col-span-4 md:col-span-10 p-3 md:p-4">
                <h2 className="text-5xl leading-[0.85] font-bold tracking-[-0.06em] md:text-7xl lg:text-8xl">
                  the rest.
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="grid grid-cols-4 md:grid-cols-12 border-b border-brand-primary/50">
          <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50">
            <div className="grid grid-cols-4 md:grid-cols-10">
              {/* Search Bar */}
              <label className="col-span-4 md:col-span-3 border-r border-brand-primary/50 p-3 md:p-4 flex cursor-text items-center gap-3 transition-colors focus-within:bg-brand-primary focus-within:text-brand-cream border-b md:border-b-0">
                <Search className="h-4 w-4 shrink-0" />
                <input
                  type="search"
                  placeholder="Search works"
                  aria-label="Search works"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-[0.65rem] tracking-[0.18em] uppercase placeholder:text-current placeholder:opacity-70 focus:outline-none"
                />
              </label>

              {/* Category Filter Pills */}
              <div className="col-span-4 md:col-span-7 p-3 md:p-4 flex flex-wrap items-center gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={selectedCategory === cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`p-3 md:p-4 py-1.5 text-[0.65rem] tracking-[0.18em] uppercase border border-brand-primary/50 transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-brand-primary text-brand-cream'
                        : 'hover:bg-brand-primary hover:text-brand-cream'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grid of Work Cards */}
        <div className="grid grid-cols-4 md:grid-cols-12 border-b border-brand-primary/50">
          <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50">
            <div className="grid grid-cols-4 md:grid-cols-10">
              {filteredWorks.map((work) => (
                <Link
                  key={work.slug}
                  to={`/works/${work.slug}`}
                  data-work-title={work.title}
                  className={`group/item col-span-4 ${work.gridSpan} flex flex-col md:border-r border-b border-brand-primary/50 transition-colors hover:bg-brand-primary/5`}
                >
                  <div
                    className={`relative w-full grow overflow-hidden ${work.aspectRatio}`}
                  >
                    <img
                      alt={work.title}
                      src={work.coverImage}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover/item:scale-[1.05]"
                    />
                  </div>
                  <div className="p-3 md:p-4 mt-auto border-t border-brand-primary/50 flex items-center justify-between gap-2">
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base font-semibold tracking-[-0.02em] md:text-lg">
                        {work.title}
                      </h3>
                      <p className="text-[0.65rem] tracking-[0.18em] uppercase opacity-60">
                        {work.categories[0] || work.tags[0] || 'Project'}
                      </p>
                    </div>

                    {work.liveUrl && (
                      <span className="shrink-0 px-2.5 py-1 text-[0.6rem] font-bold tracking-wider uppercase bg-brand-accent/20 text-brand-accent border border-brand-accent/40 rounded">
                        Live ↗
                      </span>
                    )}
                  </div>
                </Link>
              ))}

              {filteredWorks.length === 0 && (
                <div className="col-span-4 md:col-span-10 p-12 text-center opacity-60">
                  <p className="text-lg">No works found matching your filter criteria.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WANT TO CHAT SECTION */}
      <section className="text-brand-primary">
        <div className="grid grid-cols-4 md:grid-cols-12">
          <div className="col-span-4 md:col-span-10 md:col-start-2 border-x border-brand-primary/50 pt-12 md:pt-28 pb-0">
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
                  <RollingCTA to="/contact">Contact Me</RollingCTA>
                </div>
                <div className="col-span-4 md:col-span-6 min-h-[360px] md:min-h-[560px]">
                  <div className="relative h-full w-full overflow-hidden">
                    <img
                      alt="Northline Coffee Roasters"
                      src="/api/media/file/hero-image-1.webp"
                      className="absolute inset-0 h-full w-full object-cover"
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
