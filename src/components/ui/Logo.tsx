'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  inverted?: boolean;
}

export function Logo({
  className = '',
  size = 'md',
  inverted = false,
}: LogoProps) {
  const sizes = {
    sm: { box: 30, title: 'text-base', sub: 'text-[9px]' },
    md: { box: 36, title: 'text-lg', sub: 'text-[10px]' },
    lg: { box: 40, title: 'text-xl', sub: 'text-[10px]' },
  };

  const current = sizes[size];

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Sharp Geometric Executive Emblem */}
      <svg
        width={current.box}
        height={current.box}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        <rect
          width="40"
          height="40"
          rx="6"
          fill={inverted ? '#143159' : '#0B1F3A'}
        />
        <rect
          x="3"
          y="3"
          width="34"
          height="34"
          rx="4"
          stroke="#C59238"
          strokeWidth="1"
          strokeOpacity="0.65"
        />
        <path
          d="M20 8.5L30.5 30H25.9L23.7 25H16.3L14.1 30H9.5L20 8.5ZM20 14.5L17.6 21.2H22.4L20 14.5Z"
          fill="#FFFFFF"
        />
        <rect x="16.5" y="26.5" width="7" height="1.8" rx="0.9" fill="#C59238" />
      </svg>

      {/* Bold Tracked Corporate Wordmark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5 font-heading font-extrabold tracking-[0.14em] uppercase">
          <span className={`${current.title} ${inverted ? 'text-white' : 'text-[#0B1F3A]'}`}>
            AROVA
          </span>
          <span className={`${current.title} text-[#C59238]`}>
            SPICES
          </span>
        </div>
        <span
          className={`font-sans tracking-[0.2em] uppercase font-medium mt-1 ${current.sub} ${
            inverted ? 'text-slate-300' : 'text-slate-500'
          }`}
        >
          Bengaluru • India
        </span>
      </div>
    </div>
  );
}
