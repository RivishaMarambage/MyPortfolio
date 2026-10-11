import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
}

export const Header: React.FC<HeaderProps> = ({
  menuOpen,
  setMenuOpen,
  theme,
  setTheme
}) => {
  const [times, setTimes] = useState({
    colombo: '--:--:--',
    london: '--:--:--',
    tokyo: '--:--:--',
    singapore: '--:--:--',
    berlin: '--:--:--',
    newYork: '--:--:--',
    sydney: '--:--:--'
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const formatTime = (timeZone: string) => {
        return new Intl.DateTimeFormat('en-GB', {
          timeZone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        }).format(now);
      };

      setTimes({
        colombo: formatTime('Asia/Colombo'),
        london: formatTime('Europe/London'),
        tokyo: formatTime('Asia/Tokyo'),
        singapore: formatTime('Asia/Singapore'),
        berlin: formatTime('Europe/Berlin'),
        newYork: formatTime('America/New_York'),
        sydney: formatTime('Australia/Sydney')
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    if (nextTheme === 'light') {
      document.documentElement.dataset.theme = 'light';
      localStorage.setItem('rivisha-theme', 'light');
    } else {
      document.documentElement.dataset.theme = 'dark';
      localStorage.setItem('rivisha-theme', 'dark');
    }
  };

  const renderMarqueeSpan = () => (
    <span className="flex shrink-0 items-center">
      <span className="flex shrink-0 items-center whitespace-nowrap">
        <span className="flex items-center gap-2 bg-brand-primary px-2.5 py-1 font-bold text-brand-cream">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
          <span>Colombo</span>
          <span className="tabular-nums">{times.colombo}</span>
          <span className="opacity-70 text-[0.6rem]">UTC+5:30</span>
        </span>
        <span aria-hidden="true" className="px-5 opacity-40">
          /
        </span>
      </span>
      <span className="flex shrink-0 items-center whitespace-nowrap">
        <span className="flex items-center gap-2">
          <span>London</span>
          <span className="tabular-nums">{times.london}</span>
          <span className="opacity-40">GMT</span>
        </span>
        <span aria-hidden="true" className="px-5 opacity-40">
          /
        </span>
      </span>
      <span className="flex shrink-0 items-center whitespace-nowrap">
        <span className="flex items-center gap-2">
          <span>Tokyo</span>
          <span className="tabular-nums">{times.tokyo}</span>
          <span className="opacity-40">JST</span>
        </span>
        <span aria-hidden="true" className="px-5 opacity-40">
          /
        </span>
      </span>
      <span className="flex shrink-0 items-center whitespace-nowrap">
        <span className="flex items-center gap-2">
          <span>Singapore</span>
          <span className="tabular-nums">{times.singapore}</span>
          <span className="opacity-40">SGT</span>
        </span>
        <span aria-hidden="true" className="px-5 opacity-40">
          /
        </span>
      </span>
      <span className="flex shrink-0 items-center whitespace-nowrap">
        <span className="flex items-center gap-2">
          <span>Berlin</span>
          <span className="tabular-nums">{times.berlin}</span>
          <span className="opacity-40">CET</span>
        </span>
        <span aria-hidden="true" className="px-5 opacity-40">
          /
        </span>
      </span>
      <span className="flex shrink-0 items-center whitespace-nowrap">
        <span className="flex items-center gap-2">
          <span>New York</span>
          <span className="tabular-nums">{times.newYork}</span>
          <span className="opacity-40">EST</span>
        </span>
        <span aria-hidden="true" className="px-5 opacity-40">
          /
        </span>
      </span>
      <span className="flex shrink-0 items-center whitespace-nowrap">
        <span className="flex items-center gap-2">
          <span>Sydney</span>
          <span className="tabular-nums">{times.sydney}</span>
          <span className="opacity-40">AEST</span>
        </span>
        <span aria-hidden="true" className="px-5 opacity-40">
          /
        </span>
      </span>
    </span>
  );

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 border-b bg-brand-cream h-14 md:h-16 border-brand-primary/50 grid grid-cols-4 md:grid-cols-12 transition-colors duration-300">
        {/* Brand Logo */}
        <Link
          to="/"
          className="col-span-2 md:col-span-3 flex items-center border-r px-3 text-2xl font-bold tracking-[-0.06em] md:px-4 md:text-3xl border-brand-primary/50 text-brand-primary hover:opacity-80 transition-opacity"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-heading font-bold text-2xl md:text-3xl tracking-[-0.07em]">
            rivisha<span className="text-brand-accent">.</span>
          </span>
        </Link>

        {/* Desktop World Times Marquee */}
        <div className="hidden md:col-span-6 md:block border-r border-brand-primary/50">
          <div
            className="group relative h-full overflow-hidden"
            role="status"
            aria-live="off"
          >
            <div
              className="animate-marquee flex h-full w-max items-center text-[0.65rem] tracking-[0.18em] uppercase group-hover:[animation-play-state:paused]"
              aria-hidden="true"
            >
              {renderMarqueeSpan()}
              {renderMarqueeSpan()}
            </div>
          </div>
        </div>

        {/* Theme Toggle Button */}
        <div className="col-span-2 md:col-span-3 flex items-stretch justify-end">
          <button
            type="button"
            onClick={toggleTheme}
            aria-pressed={theme === 'dark'}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="group group/roll flex h-full cursor-pointer items-center gap-2.5 px-4 transition-colors hover:bg-brand-primary hover:text-brand-cream disabled:cursor-default mr-14 md:mr-16"
          >
            <span className="relative block shrink-0 overflow-hidden leading-[1.4] text-[0.65rem] tracking-[0.18em] uppercase">
              <span className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-full">
                {theme === 'dark' ? 'Dark' : 'Light'}
              </span>
              <span
                aria-hidden="true"
                className="absolute inset-0 block -translate-y-full transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-0"
              >
                {theme === 'dark' ? 'Dark' : 'Light'}
              </span>
            </span>
            <span
              className="relative block h-3 w-3 overflow-hidden border border-brand-primary transition-colors group-hover:border-brand-cream"
              aria-hidden="true"
            >
              <span
                className="absolute inset-0 bg-brand-primary transition-transform duration-300 group-hover:bg-brand-cream"
                style={{
                  transform: theme === 'dark' ? 'translateX(0%)' : 'translateX(-100%)'
                }}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Top-Right Hamburger Toggle Button */}
      <button
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        className="group fixed top-0 right-0 z-[52] flex h-14 md:h-16 w-14 md:w-16 cursor-pointer items-center justify-center border-b border-l bg-brand-cream transition-colors hover:bg-brand-primary border-brand-primary/50"
      >
        <span className="relative block h-4 w-6">
          <span
            className={`absolute left-0 block h-px w-full bg-brand-primary transition-all duration-300 group-hover:bg-brand-cream ${
              menuOpen ? 'top-1/2 rotate-45' : 'top-0'
            }`}
          />
          <span
            className={`absolute top-1/2 left-0 block h-px w-full bg-brand-primary transition-all duration-300 group-hover:bg-brand-cream ${
              menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
            }`}
          />
          <span
            className={`absolute left-0 block h-px w-full bg-brand-primary transition-all duration-300 group-hover:bg-brand-cream ${
              menuOpen ? 'top-1/2 -rotate-45' : 'bottom-0'
            }`}
          />
        </span>
      </button>
    </>
  );
};
