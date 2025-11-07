import React from 'react';

export default function Logo({ size = 36 }) {
  return (
    <div className="flex items-center gap-3 select-none">
      <div
        className="relative grid place-items-center rounded-xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 shadow-[0_0_30px_-10px_rgba(99,102,241,0.6)]"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 200 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-[70%] h-[70%]"
          aria-hidden
        >
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            d="M30,50 C30,30 50,20 70,35 C85,45 95,55 110,65 C130,80 150,70 150,50 C150,30 130,20 110,35 C95,45 85,55 70,65 C50,80 30,70 30,50 Z"
            fill="none"
            stroke="url(#grad)"
            strokeWidth="12"
            strokeLinecap="round"
            filter="url(#glow)"
          />
        </svg>
      </div>
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-cyan-200 font-semibold tracking-tight">
        Thesis Writing PK
      </span>
    </div>
  );
}
