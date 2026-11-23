'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'emblem' | 'wordmark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  inverted?: boolean; // For dark background like Deep Emerald footer (#082920)
}

export function Logo({
  className = '',
  variant = 'full',
  size = 'md',
  inverted = false,
}: LogoProps) {
  const sizeMap = {
    sm: { emblem: 28, text: 'text-base', sub: 'text-[9px]' },
    md: { emblem: 36, text: 'text-lg sm:text-xl', sub: 'text-[10px]' },
    lg: { emblem: 44, text: 'text-xl sm:text-2xl', sub: 'text-[11px]' },
    xl: { emblem: 54, text: 'text-2xl sm:text-3xl', sub: 'text-xs' },
  };

  const currentSize = sizeMap[size];

  const emblemSvg = (
    <svg
      width={currentSize.emblem}
      height={currentSize.emblem}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block transition-transform duration-500 group-hover:rotate-6 flex-shrink-0"
      aria-label="Arova Spices Crest"
    >
      <defs>
        <linearGradient id="arovaGoldEmblem" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E5A024" />
          <stop offset="50%" stopColor="#C97E12" />
          <stop offset="100%" stopColor="#8F3518" />
        </linearGradient>
      </defs>

      {/* Outer Fine Geometric Ring */}
      <circle cx="50" cy="50" r="44" stroke="url(#arovaGoldEmblem)" strokeWidth="1.2" opacity="0.4" />
      <circle cx="50" cy="50" r="40" stroke="url(#arovaGoldEmblem)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />

      {/* Stylized Three-Faceted Fusiform Cardamom Pod Vessel */}
      <g transform="translate(50, 50) rotate(-15) translate(-50, -50)">
        <path
          d="M50 16 C34 30 33 62 50 84 C41 68 41 32 50 16 Z"
          fill="url(#arovaGoldEmblem)"
          opacity="0.95"
        />
        <path
          d="M50 16 C66 30 67 62 50 84 C59 68 59 32 50 16 Z"
          fill="url(#arovaGoldEmblem)"
          opacity="0.75"
        />
        <path
          d="M50 14 L50 86"
          stroke="url(#arovaGoldEmblem)"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </g>

      {/* Compass Star Apex Overlay */}
      <path
        d="M50 20 L52.5 38 L68.5 40.5 L52.5 43 L50 61 L47.5 43 L31.5 40.5 L47.5 38 Z"
        fill={inverted ? '#FFFFFF' : '#0B3B2E'}
        opacity="0.9"
      />
      <circle cx="50" cy="40.5" r="2.2" fill={inverted ? '#082920' : '#FFFFFF'} />
    </svg>
  );

  const wordmark = (
    <div className="flex flex-col leading-none">
      <div className="flex items-center gap-1.5">
        <span
          className={`font-serif tracking-[0.18em] font-semibold uppercase ${currentSize.text} transition-colors ${
            inverted ? 'text-white' : 'text-[#141210]'
          }`}
        >
          Arova
        </span>
        <span
          className={`font-serif tracking-[0.18em] font-light uppercase ${currentSize.text} transition-colors ${
            inverted ? 'text-[#E5A024]' : 'text-[#C97E12]'
          }`}
        >
          Spices
        </span>
      </div>
      <span
        className={`font-sans tracking-[0.28em] uppercase ${currentSize.sub} font-semibold transition-colors mt-1 ${
          inverted ? 'text-white/60' : 'text-[#554D45]'
        }`}
      >
        Bengaluru • India
      </span>
    </div>
  );

  if (variant === 'emblem') return <div className={`group inline-flex ${className}`}>{emblemSvg}</div>;
  if (variant === 'wordmark') return <div className={`group inline-flex ${className}`}>{wordmark}</div>;

  return (
    <div className={`group inline-flex items-center gap-3 select-none ${className}`}>
      {emblemSvg}
      {wordmark}
    </div>
  );
}
