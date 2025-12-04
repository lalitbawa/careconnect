"use client";
import React from "react";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";

export function LogoCloud() {
  const integrations = [
    {
      name: "Fitbit",
      icon: FitbitIcon,
    },
    {
      name: "Apple Watch",
      icon: AppleWatchIcon,
    },
    {
      name: "NHS",
      icon: NHSIcon,
    },
    {
      name: "GDPR",
      icon: GDPRIcon,
    },
  ];

  return (
    <div className="relative w-full py-12 md:py-4 overflow-hidden">
      <div className="text-balance relative z-20 mx-auto mb-4 max-w-4xl text-center text-lg font-semibold tracking-tight text-gray-700  md:text-3xl px-4">
        <h2
          className={cn(
            "inline-block text-center text-[#3D3D3D] font-inter text-[22px] font-semibold"
          )}
        >
          <Balancer>
            Trusted Integrations & Compliance
          </Balancer>
        </h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 md:gap-10 w-full max-w-3xl mx-auto relative px-4">
        {integrations.map((item, idx) => (
          <div
            key={item.name + idx}
            className="flex flex-col items-center justify-center gap-2"
          >
            <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100">
              <item.icon />
            </div>
            <span className="text-sm text-gray-600 font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const FitbitIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="4" r="2" fill="#00B0B9"/>
    <circle cx="12" cy="9" r="2" fill="#00B0B9"/>
    <circle cx="12" cy="14" r="2" fill="#00B0B9"/>
    <circle cx="12" cy="19" r="2" fill="#00B0B9"/>
    <circle cx="7" cy="7" r="1.5" fill="#00B0B9"/>
    <circle cx="7" cy="11" r="1.5" fill="#00B0B9"/>
    <circle cx="7" cy="15" r="1.5" fill="#00B0B9"/>
    <circle cx="17" cy="7" r="1.5" fill="#00B0B9"/>
    <circle cx="17" cy="11" r="1.5" fill="#00B0B9"/>
    <circle cx="17" cy="15" r="1.5" fill="#00B0B9"/>
  </svg>
);

const AppleWatchIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="2" width="12" height="20" rx="3" stroke="#1D1D1F" strokeWidth="1.5" fill="none"/>
    <rect x="8" y="5" width="8" height="14" rx="1.5" fill="#1D1D1F"/>
    <path d="M12 10L14 12L12 14" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="12" r="1" fill="#4ADE80"/>
  </svg>
);

const NHSIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="6" width="20" height="12" rx="1" fill="#005EB8"/>
    <text x="12" y="15" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="Arial">NHS</text>
  </svg>
);

const GDPRIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="#10B981" strokeWidth="1.5" fill="none"/>
    <circle cx="12" cy="12" r="6" fill="#10B981" fillOpacity="0.1"/>
    <path d="M12 7V12L15 14" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="1.5" fill="#10B981"/>
    <path d="M8 5L6 3" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M16 5L18 3" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
