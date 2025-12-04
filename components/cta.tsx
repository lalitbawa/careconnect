"use client";
import { Button } from "./button";
import React from "react";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";
import { useSession } from "next-auth/react";
import Link from "next/link";


const ShieldIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="89"
    height="89"
    viewBox="0 0 89 89"
    fill="none"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M37.3547 12.9244C38.7341 12.1725 40.3391 11.9457 41.8728 12.2858L65.5929 17.5493C66.8849 17.8358 68.0587 18.51 68.9574 19.4815C69.856 20.4531 70.4367 21.6758 70.6217 22.9863L73.061 40.2445C73.8213 45.6232 73.0688 51.1073 70.8878 56.0824C68.7069 61.0574 65.1835 65.3269 60.7127 68.4123L50.6818 75.3312C50.0588 75.7613 49.3441 76.0403 48.5946 76.1463C47.845 76.2522 47.081 76.1821 46.3632 75.9416L34.8072 72.0705C29.6564 70.3449 25.0879 67.2192 21.6136 63.0434C18.1392 58.8677 15.8963 53.8069 15.1362 48.4282L12.6979 31.1764C12.5118 29.8655 12.7304 28.5291 13.3246 27.3459C13.9187 26.1627 14.86 25.1891 16.0225 24.5555L37.3547 12.9244ZM47.1695 42.8405C48.2963 41.9587 49.1006 40.7297 49.4577 39.3441C49.8148 37.9586 49.7048 36.4939 49.1447 35.1773C48.5846 33.8607 47.6057 32.7656 46.3599 32.062C45.114 31.3584 43.6708 31.0855 42.2541 31.2857C40.8373 31.486 39.5263 32.1482 38.5242 33.1695C37.5222 34.1908 36.8851 35.5143 36.7118 36.9345C36.5386 38.3548 36.8388 39.7926 37.5659 41.0249C38.293 42.2572 39.4064 43.2151 40.7335 43.7502L42.2198 54.2666C42.3405 55.1201 42.7952 55.8907 43.484 56.4089C44.1728 56.9271 45.0392 57.1504 45.8927 57.0298C46.7461 56.9092 47.5167 56.4545 48.0349 55.7657C48.5531 55.0769 48.7765 54.2104 48.6559 53.357L47.1695 42.8405Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M37.3547 12.9244C38.7341 12.1725 40.3391 11.9457 41.8728 12.2858L65.5929 17.5493C66.8849 17.8358 68.0587 18.51 68.9574 19.4815C69.856 20.4531 70.4367 21.6758 70.6217 22.9863L73.061 40.2445C73.8213 45.6232 73.0688 51.1073 70.8878 56.0824C68.7069 61.0574 65.1835 65.3269 60.7127 68.4123L50.6818 75.3312C50.0588 75.7613 49.3441 76.0403 48.5946 76.1463C47.845 76.2522 47.081 76.1821 46.3632 75.9416L34.8072 72.0705C29.6564 70.3449 25.0879 67.2192 21.6136 63.0434C18.1392 58.8677 15.8963 53.8069 15.1362 48.4282L12.6979 31.1764C12.5118 29.8655 12.7304 28.5291 13.3246 27.3459C13.9187 26.1627 14.86 25.1891 16.0225 24.5555L37.3547 12.9244ZM47.1695 42.8405C48.2963 41.9587 49.1006 40.7297 49.4577 39.3441C49.8148 37.9586 49.7048 36.4939 49.1447 35.1773C48.5846 33.8607 47.6057 32.7656 46.3599 32.062C45.114 31.3584 43.6708 31.0855 42.2541 31.2857C40.8373 31.486 39.5263 32.1482 38.5242 33.1695C37.5222 34.1908 36.8851 35.5143 36.7118 36.9345C36.5386 38.3548 36.8388 39.7926 37.5659 41.0249C38.293 42.2572 39.4064 43.2151 40.7335 43.7502L42.2198 54.2666C42.3405 55.1201 42.7952 55.8907 43.484 56.4089C44.1728 56.9271 45.0392 57.1504 45.8927 57.0298C46.7461 56.9092 47.5167 56.4545 48.0349 55.7657C48.5531 55.0769 48.7765 54.2104 48.6559 53.357L47.1695 42.8405Z"
      fill="url(#paint0_linear_966_2191)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_966_2191"
        x1="41.1982"
        y1="23.6006"
        x2="48.1167"
        y2="76.2091"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5E5E5E" />
        <stop offset="1" />
      </linearGradient>
    </defs>
  </svg>
);

const CTA = () => {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-48">
      {/* Floating Icons */}
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          {/* Top row */}
          <div className="absolute top-0 left-1/4 transform -translate-x-1/2 p-4">
            <IconCircle
              icon={<HeartPulseIcon className="w-10 h-10 md:w-22 md:h-22 p-1" />}
            />
          </div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-4">
            <IconCircle
              icon={<SleepIcon className="w-10 h-10 md:w-22 md:h-22 p-1" />}
            />
          </div>
          <div className="absolute top-0 right-1/4 transform translate-x-1/2 p-4">
            <IconCircle
              icon={<ActivityIcon className="w-10 h-10 md:w-22 md:h-22 p-1" />}
            />
          </div>

          {/* Middle row */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4">
            <IconCircle
              icon={<ShieldIcon className="w-10 h-10 md:w-22 md:h-22 p-1" />}
            />
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4">
            <IconCircle
              icon={<AlertIcon className="w-10 h-10 md:w-22 md:h-22 p-1" />}
            />
          </div>

          {/* Bottom row */}
          <div className="absolute bottom-0 left-1/4 transform -translate-x-1/2 p-4">
            <IconCircle
              icon={<WatchIcon className="w-10 h-10 md:w-22 md:h-22 p-1" />}
            />
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4">
            <IconCircle
              icon={<ChartIcon className="w-10 h-10 md:w-22 md:h-22 p-1" />}
            />
          </div>
          <div className="absolute bottom-0 right-1/4 transform translate-x-1/2 p-4">
            <IconCircle
              icon={<FamilyIcon className="w-10 h-10 md:w-22 md:h-22 p-1" />}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Give Your Family the Gift of{" "}
          <span className="text-emerald-600">Peace of Mind</span>
        </h1>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          {isAuthenticated
            ? "View your loved one's wellbeing dashboard and stay connected."
            : "Start your free 14-day trial today. Connect your loved one's wearable and see their first Peace of Mind Score within minutes."}
        </p>
        <Button
          as={Link}
          href={isAuthenticated ? "/dashboard" : "/signup"}
          variant="primary"
          className="bg-gradient-to-b from-emerald-500 to-emerald-700"
        >
          {isAuthenticated ? "Go to Dashboard" : "Start Free Trial"}
        </Button>
        {!isAuthenticated && (
          <p className="text-sm text-gray-400 mt-4">No credit card required</p>
        )}
        <div className="absolute -z-10 rounded-full max-w-3xl mx-auto bottom-0 w-full left-1/2 -translate-x-1/2 flex items-center justify-center">
          <CanvasRevealEffect
            colors={[[16, 185, 129]]}
            dotSize={3}
            animationSpeed={1}
          />
          <div className="absolute inset-0 h-full bg-radial/[in_oklch] from-white/80 via-white/90 to-white" />
        </div>
      </div>
    </div>
  );
};

// New CareConnect-specific icons
const HeartPulseIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M39 68C39 68 12 50 12 28C12 18.06 20.06 10 30 10C35.5 10 40.4 12.5 44 16.5C44 16.5 43.5 16 42.5 16.5C46.6 12.5 51.5 10 57 10C66.94 10 75 18.06 75 28C75 50 39 68 39 68Z" fill="url(#heartGrad)" />
    <path d="M10 39H25L30 29L39 49L48 35L53 39H68" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="heartGrad" x1="39" y1="10" x2="39" y2="68" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FCA5A5"/>
        <stop offset="1" stopColor="#EF4444"/>
      </linearGradient>
    </defs>
  </svg>
);

const SleepIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M65 39C65 53.36 53.36 65 39 65C24.64 65 13 53.36 13 39C13 24.64 24.64 13 39 13C42 13 50 13 56.5 19.5C50 13 39 24.64 39 39C39 53.36 50 65 65 39Z" fill="url(#sleepGrad)"/>
    <circle cx="52" cy="20" r="4" fill="#6366F1"/>
    <circle cx="62" cy="28" r="3" fill="#6366F1"/>
    <circle cx="58" cy="14" r="2" fill="#6366F1"/>
    <defs>
      <linearGradient id="sleepGrad" x1="39" y1="13" x2="39" y2="65" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A5B4FC"/>
        <stop offset="1" stopColor="#6366F1"/>
      </linearGradient>
    </defs>
  </svg>
);

const ActivityIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="39" cy="20" r="10" fill="url(#actGrad)"/>
    <path d="M39 33C26 33 16 43 16 56H62C62 43 52 33 39 33Z" fill="url(#actGrad)"/>
    <path d="M24 60L34 50L39 55L54 40" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <defs>
      <linearGradient id="actGrad" x1="39" y1="10" x2="39" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FCD34D"/>
        <stop offset="1" stopColor="#F59E0B"/>
      </linearGradient>
    </defs>
  </svg>
);

const AlertIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M39 10L68 60H10L39 10Z" fill="url(#alertGrad)"/>
    <path d="M39 30V42" stroke="white" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="39" cy="50" r="3" fill="white"/>
    <defs>
      <linearGradient id="alertGrad" x1="39" y1="10" x2="39" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FCD34D"/>
        <stop offset="1" stopColor="#F59E0B"/>
      </linearGradient>
    </defs>
  </svg>
);

const WatchIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="15" width="38" height="48" rx="8" fill="url(#watchGrad)"/>
    <rect x="25" y="22" width="28" height="28" rx="4" fill="#1F2937"/>
    <path d="M39 30V40L45 44" stroke="#10B981" strokeWidth="3" strokeLinecap="round"/>
    <rect x="32" y="10" width="14" height="5" rx="2" fill="#374151"/>
    <rect x="32" y="63" width="14" height="5" rx="2" fill="#374151"/>
    <defs>
      <linearGradient id="watchGrad" x1="39" y1="15" x2="39" y2="63" gradientUnits="userSpaceOnUse">
        <stop stopColor="#9CA3AF"/>
        <stop offset="1" stopColor="#4B5563"/>
      </linearGradient>
    </defs>
  </svg>
);

const ChartIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="50" width="12" height="18" rx="2" fill="#10B981"/>
    <rect x="26" y="35" width="12" height="33" rx="2" fill="#34D399"/>
    <rect x="42" y="20" width="12" height="48" rx="2" fill="#10B981"/>
    <rect x="58" y="28" width="12" height="40" rx="2" fill="#34D399"/>
    <path d="M10 15L30 25L50 18L68 10" stroke="#059669" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const FamilyIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="39" cy="20" r="10" fill="url(#famGrad)"/>
    <circle cx="20" cy="35" r="8" fill="url(#famGrad)"/>
    <circle cx="58" cy="35" r="8" fill="url(#famGrad)"/>
    <path d="M39 33C28 33 20 42 20 52H58C58 42 50 33 39 33Z" fill="url(#famGrad)"/>
    <path d="M20 45C12 45 6 52 6 60H34C34 52 28 45 20 45Z" fill="#A7F3D0"/>
    <path d="M58 45C50 45 44 52 44 60H72C72 52 66 45 58 45Z" fill="#A7F3D0"/>
    <defs>
      <linearGradient id="famGrad" x1="39" y1="10" x2="39" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#6EE7B7"/>
        <stop offset="1" stopColor="#10B981"/>
      </linearGradient>
    </defs>
  </svg>
);

// Helper component for the circular icons
const IconCircle = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className="flex shadow-lg h-12 w-12 md:h-24 md:w-24 animate-float items-center justify-center rounded-full bg-linear-180 from-[#ECECEC] from-5.38% to-white to-100.77% p-10 drop-shadow-[0px_30px_10px_rgba(224,224,224,0.02)]">
      <span className="text-xl">{icon}</span>
    </div>
  );
};

export default CTA;
