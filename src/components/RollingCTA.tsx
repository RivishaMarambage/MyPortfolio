import React from 'react';
import { Link } from 'react-router-dom';

interface RollingCTAProps {
  to?: string;
  href?: string;
  children: string;
  className?: string;
  onClick?: () => void;
}

export const RollingCTA: React.FC<RollingCTAProps> = ({
  to,
  href,
  children,
  className = '',
  onClick
}) => {
  const content = (
    <>
      <span className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/cta:-translate-y-[200%]">
        {children}
      </span>
      <span
        className="absolute inset-0 flex translate-y-full items-center justify-center transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/cta:translate-y-0"
        aria-hidden="true"
      >
        {children}
      </span>
    </>
  );

  const baseClasses = `group/cta relative inline-block overflow-hidden border border-brand-primary/50 px-4 py-2 md:px-5 md:py-2.5 text-lg md:text-xl leading-[1.3] tracking-[0.06em] uppercase transition-colors hover:bg-brand-primary hover:text-brand-cream text-center cursor-pointer ${className}`;

  if (to) {
    return (
      <Link to={to} className={baseClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href || '#'} className={baseClasses} onClick={onClick}>
      {content}
    </a>
  );
};
