import React, { useEffect, useState } from 'react';

interface IntroOverlayProps {
  onComplete?: () => void;
}

export const IntroOverlay: React.FC<IntroOverlayProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Only run on initial session or if requested
    const hasSeenIntro = sessionStorage.getItem('rivisha-intro-seen');
    if (hasSeenIntro) {
      setHidden(true);
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 8) + 3;
        return next > 100 ? 100 : next;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (progress === 100 && !exiting) {
      const exitTimer = setTimeout(() => {
        setExiting(true);
        sessionStorage.setItem('rivisha-intro-seen', 'true');
        setTimeout(() => {
          setHidden(true);
          if (onComplete) onComplete();
        }, 1100);
      }, 350);

      return () => clearTimeout(exitTimer);
    }
  }, [progress, exiting, onComplete]);

  if (hidden) return null;

  const paddedProgress = progress.toString().padStart(3, '0');

  return (
    <div
      id="intro-overlay"
      className="fixed inset-0 z-[100] overflow-hidden select-none"
      style={{
        pointerEvents: exiting ? 'none' : 'auto'
      }}
    >
      {/* 12 Vertical Cream Pillars with staggered wipe-up clip-path */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute top-0 h-full bg-brand-cream border-l border-brand-primary/25"
          style={{
            left: `${(i * 100) / 12}%`,
            width: '8.384%',
            clipPath: exiting ? 'inset(0% 0% 100% 0%)' : 'inset(0% 0% 0% 0%)',
            transition: 'clip-path 850ms cubic-bezier(0.65, 0, 0.35, 1)',
            transitionDelay: `${i * 35}ms`
          }}
        />
      ))}

      {/* 3D Perspective Grid Tunnel */}
      <div
        className="absolute inset-0 z-10 transition-opacity duration-700"
        style={{
          perspective: '1000px',
          perspectiveOrigin: '50% 50%',
          opacity: exiting ? 0 : 1
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translateZ(-260px) rotateX(-3deg) rotateY(7deg)'
          }}
        >
          {/* Bottom Grid Floor */}
          <div
            className="absolute backface-hidden left-0 w-full"
            style={{
              top: '100%',
              height: '1100px',
              transformOrigin: '50% 0%',
              transform: 'rotateX(-90deg)',
              backgroundImage:
                'repeating-linear-gradient(to right, color-mix(in srgb, var(--color-brand-primary) 38%, transparent) 0 1px, transparent 1px calc(100% / 12)), repeating-linear-gradient(to bottom, color-mix(in srgb, var(--color-brand-primary) 38%, transparent) 0 1px, transparent 1px calc(100% / 6))',
              opacity: 0.65
            }}
          />

          {/* Top Grid Ceiling */}
          <div
            className="absolute backface-hidden left-0 w-full"
            style={{
              bottom: '100%',
              height: '1100px',
              transformOrigin: '50% 100%',
              transform: 'rotateX(90deg)',
              backgroundImage:
                'repeating-linear-gradient(to right, color-mix(in srgb, var(--color-brand-primary) 38%, transparent) 0 1px, transparent 1px calc(100% / 12)), repeating-linear-gradient(to bottom, color-mix(in srgb, var(--color-brand-primary) 38%, transparent) 0 1px, transparent 1px calc(100% / 6))',
              opacity: 0.65
            }}
          />

          {/* Left Wall */}
          <div
            className="absolute backface-hidden top-0 left-0 h-full"
            style={{
              width: '1100px',
              transformOrigin: '0% 50%',
              transform: 'rotateY(90deg)',
              backgroundImage:
                'repeating-linear-gradient(to right, color-mix(in srgb, var(--color-brand-primary) 38%, transparent) 0 1px, transparent 1px calc(100% / 6)), repeating-linear-gradient(to bottom, color-mix(in srgb, var(--color-brand-primary) 38%, transparent) 0 1px, transparent 1px calc(100% / 7))',
              opacity: 0.65
            }}
          />

          {/* Right Wall */}
          <div
            className="absolute backface-hidden top-0 right-0 h-full"
            style={{
              width: '1100px',
              transformOrigin: '100% 50%',
              transform: 'rotateY(-90deg)',
              backgroundImage:
                'repeating-linear-gradient(to right, color-mix(in srgb, var(--color-brand-primary) 38%, transparent) 0 1px, transparent 1px calc(100% / 6)), repeating-linear-gradient(to bottom, color-mix(in srgb, var(--color-brand-primary) 38%, transparent) 0 1px, transparent 1px calc(100% / 7))',
              opacity: 0.65
            }}
          />

          {/* Back Plane */}
          <div
            className="absolute inset-0"
            style={{
              transformStyle: 'preserve-3d',
              transform: 'translateZ(-1100px)'
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'repeating-linear-gradient(to right, color-mix(in srgb, var(--color-brand-primary) 38%, transparent) 0 1px, transparent 1px calc(100% / 12)), repeating-linear-gradient(to bottom, color-mix(in srgb, var(--color-brand-primary) 38%, transparent) 0 1px, transparent 1px calc(100% / 7))',
                clipPath: 'inset(0% 0% 0% 0%)'
              }}
            />

            <div className="absolute inset-0">
              {/* Logo in Tunnel */}
              <div
                className="absolute"
                style={{
                  left: '8.333%',
                  top: '57.142%'
                }}
              >
                <img
                  src="/api/media/file/rivisha-site-logo-primary.svg"
                  alt="rivisha."
                  className="h-[10vh] w-auto transition-opacity duration-700"
                  style={{ opacity: progress > 15 ? 1 : 0 }}
                />
              </div>

              {/* Progress counter & bar at bottom */}
              <div className="absolute inset-x-0 bottom-0 flex h-[calc(100%/7)] flex-col">
                <div
                  className="h-px w-full origin-left bg-brand-primary transition-transform duration-100 ease-out"
                  style={{ transform: `scaleX(${progress / 100})` }}
                />
                <div className="grid grid-cols-4 md:grid-cols-12 min-h-0 flex-1">
                  <div className="col-span-2 md:col-span-3 border-r border-brand-primary/50 p-3 md:p-4 flex items-end">
                    <span className="block text-[clamp(2rem,6vw,4.5rem)] leading-none font-bold tabular-nums text-brand-primary">
                      {paddedProgress}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
