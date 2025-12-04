"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";
import Link from "next/link";
import { Button } from "./button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { IphoneMockup } from "./iphone-mockup";
import { useSession } from "next-auth/react";

export function Hero() {
  const parentRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <div
      ref={parentRef}
      className="relative flex max-w-7xl rounded-b-3xl my-2 md:my-20  mx-auto flex-col items-center justify-center pt-32 overflow-hidden px-4 md:px-8 bg-gradient-to-t from-[rgba(16,185,129,0.3)] via-[rgba(236,253,245,1)] to-[rgba(255,255,255,1)]"
    >
      <div className="text-balance relative z-20 mx-auto mb-4 max-w-6xl text-center text-4xl font-semibold tracking-tight text-gray-700  md:text-7xl">
        <Balancer>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "inline-block bg-gradient-to-b  from-[rgba(94,94,94,1)] to-[rgba(0,0,0,1)]",
              "bg-clip-text text-transparent"
            )}
          >
            Predictive{" "}
            <span className="bg-gradient-to-b from-[#10B981] to-[#059669] bg-clip-text text-transparent">
              Eldercare
            </span>
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "inline-block bg-gradient-to-b from-[rgba(94,94,94,1)] to-[rgba(0,0,0,1)]",
              "bg-clip-text text-transparent py-2"
            )}
          >
            Peace of Mind for{" "}
            <span className="bg-gradient-to-b from-[#10B981] to-[#059669] bg-clip-text text-transparent">
              Family Caregivers
            </span>
          </motion.h2>
        </Balancer>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.5 }}
        className="relative z-20 mx-auto mt-4 max-w-2xl px-4 text-center text-base/6 text-gray-600  sm:text-base"
      >
        Transform your loved one&apos;s Fitbit or Apple Watch data into daily wellbeing insights,
        7-day risk forecasts, and proactive alerts. No new devices needed &mdash; just peace of mind.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 0.7 }}
        className="mb-8 mt-6 z-10 sm:mb-10 sm:mt-8 flex w-full flex-col items-center justify-center gap-4 px-4 sm:px-8 sm:flex-row md:mb-20"
      >
        <Button
          as={Link}
          href={isAuthenticated ? "/dashboard" : "/signup"}
          variant="primary"
          className="w-full sm:w-48 h-12 flex items-center justify-center bg-gradient-to-b from-emerald-500 to-emerald-700"
        >
          {isAuthenticated ? "Go to Dashboard" : "Start Free Trial"}
        </Button>
        <Button
          as={Link}
          href="#how-it-works"
          variant="secondary"
          className="w-full sm:w-40 h-12 flex items-center justify-center"
        >
          How It Works
        </Button>
      </motion.div>

      <div className="pt-[2rem] w-full min-h-[21rem] relative">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute top-0 left-0 right-0  z-10"
        >
          <IphoneMockup>
            <MockScreen />
          </IphoneMockup>
        </motion.div>
        <BackgroundShape />
      </div>
    </div>
  );
}

function BackgroundShape({
  mobileBreakpoint = "(max-width: 768px)",
  sizes = {
    mobile: {
      outer: 800,
      middle: 600,
      inner: 400,
    },
    desktop: {
      outer: 1400,
      middle: 1100,
      inner: 800,
    },
  },
  animations = {
    middle: {
      scale: [1, 1.02, 1],
      y: [0, -5, 0],
      duration: 2,
    },
    inner: {
      scale: [1, 1.03, 1],
      y: [0, -7, 0],
      duration: 2.5,
    },
  },
  gradientColors = {
    start: "rgba(236,253,245,1)",
    mid1: "rgba(209,250,229,0.8)",
    mid2: "rgba(167,243,208,0.4)",
    end: "rgba(255,255,255,0)",
  },
}) {
  const isMobile = useMediaQuery(mobileBreakpoint);
  const { outer, middle, inner } = isMobile ? sizes.mobile : sizes.desktop;

  return (
    <div className="absolute inset-0 z-0 flex items-center justify-center">
      <div
        className="absolute z-0 rounded-full border border-white/30"
        style={{
          width: outer,
          height: outer,
        }}
      />
      <motion.div
        className="absolute z-0 rounded-full border border-white"
        style={{
          width: middle,
          height: middle,
          clipPath: "circle(50% at 50% 50%)",
          background: `
            radial-gradient(
              circle at center,
              ${gradientColors.start} 0%,
              ${gradientColors.mid1} 20%,
              ${gradientColors.mid2} 40%,
              ${gradientColors.end} 60%
            )
          `,
        }}
        animate={{
          scale: animations.middle.scale,
          y: animations.middle.y,
        }}
        transition={{
          duration: animations.middle.duration,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
      ></motion.div>
      <motion.div
        className="absolute bg-white/5 z-2
          rounded-full
          border border-[rgba(255,255,255,0.1)]
          shadow-[0_0_200px_80px_rgba(255,255,255,0.1)]"
        style={{
          width: inner,
          height: inner,
        }}
        animate={{
          scale: animations.inner.scale,
          y: animations.inner.y,
        }}
        transition={{
          duration: animations.inner.duration,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
      />
    </div>
  );
}

const MockScreen = () => {
  return (
    <div className="flex w-full flex-col items-center bg-gradient-to-b from-emerald-50 to-white">
      <div className="flex justify-between w-full p-2 gap-2">
        <div className="flex gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 21C12 21 4 15 4 9C4 6.23858 6.23858 4 9 4C10.5 4 11.8 4.7 12.7 5.8C12.7 5.8 12.6 5.7 12.3 5.8C13.2 4.7 14.5 4 16 4C18.7614 4 21 6.23858 21 9C21 15 12 21 12 21Z"
              stroke="#10B981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <span className="font-medium text-gray-700">Mum&apos;s Dashboard</span>
        </div>
        <div className="flex gap-1 items-center text-emerald-600">
          <span className="text-xs">Live</span>
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        </div>
      </div>

      {/* Peace of Mind Score */}
      <div className="w-full px-2 py-2">
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-3 w-full text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-emerald-100 text-xs">Today&apos;s Peace of Mind Score</p>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-4xl font-bold">87</span>
                <span className="text-emerald-200 text-sm">/100</span>
              </div>
            </div>
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
          </div>
          <p className="text-emerald-100 text-xs mt-2">All vitals within normal range</p>
        </div>
      </div>

      {/* Daily Summary */}
      <div className="w-full px-2 py-2">
        <div className="bg-white rounded-xl p-3 w-full border border-gray-100 shadow-sm">
          <h3 className="text-gray-700 text-sm font-medium mb-2">Today&apos;s Summary</h3>
          <p className="text-gray-500 text-xs leading-relaxed">
            Margaret had a restful night with 7.2 hours of sleep. Morning activity levels are normal.
            Heart rate steady at 68 bpm.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="w-full px-2 py-2">
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-blue-50 rounded-lg p-2 text-center">
            <p className="text-blue-600 text-lg font-semibold">7.2h</p>
            <p className="text-blue-400 text-xs">Sleep</p>
          </div>
          <div className="bg-rose-50 rounded-lg p-2 text-center">
            <p className="text-rose-600 text-lg font-semibold">68</p>
            <p className="text-rose-400 text-xs">Heart Rate</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-2 text-center">
            <p className="text-amber-600 text-lg font-semibold">2.4k</p>
            <p className="text-amber-400 text-xs">Steps</p>
          </div>
        </div>
      </div>
    </div>
  );
};
