import React from 'react';
import { Link } from 'react-router-dom';

interface RollingLinkProps {
  to?: string;
  href?: string;
  children: string;
  className?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  showArrow?: boolean;
  arrowChar?: string;
}

export const RollingLink: React.FC<RollingLinkProps> = ({
  to,
  href,
  children,
  className = '',
  onClick,
  target,
  rel,
  showArrow = false,
  arrowChar = '→'
}) => {
  const content = (
    <>
      <span className="relative block shrink-0 overflow-hidden leading-[1.3]">
        <span className="block transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-full">
          {children}
        </span>
        <span
          aria-hidden="true"
          className="absolute inset-0 block -translate-y-full transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-y-0"
        >
          {children}
        </span>
      </span>
      {showArrow && (
        <span
          aria-hidden="true"
          className="transition-transform duration-[450ms] ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/roll:translate-x-1"
        >
          {arrowChar}
        </span>
      )}
    </>
  );

  const combinedClasses = `group/roll inline-flex items-center gap-2 cursor-pointer uppercase ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <a
      href={href || '#'}
      className={combinedClasses}
      onClick={onClick}
      target={target}
      rel={rel}
    >
      {content}
    </a>
  );
};
