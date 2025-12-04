"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const LogoIcon = ({ className }: { className?: string }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Heart with pulse line - eldercare symbol */}
    <defs>
      <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10B981" />
        <stop offset="100%" stopColor="#059669" />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15"/>
      </filter>
    </defs>
    <g filter="url(#shadow)">
      {/* Heart shape */}
      <path
        d="M16 28C16 28 4 20 4 12C4 8.13401 7.13401 5 11 5C13.2091 5 15.2091 6.04285 16.5 7.67157C16.5 7.67157 16.3333 7.44772 16 7.67157C17.7909 6.04285 19.7909 5 22 5C25.866 5 29 8.13401 29 12C29 20 16 28 16 28Z"
        fill="url(#heartGradient)"
      />
      {/* Pulse line */}
      <path
        d="M6 15H10L12 11L15 19L18 13L20 15H26"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        "font-normal flex gap-2 justify-center items-center text-sm text-black px-2 py-1 shrink-0 relative z-20",
        className
      )}
    >
      <LogoIcon />
      <span className="font-semibold text-black text-lg">CareConnect<span className="text-emerald-600">AI</span></span>
    </Link>
  );
};
