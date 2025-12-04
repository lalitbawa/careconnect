"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { LogoIcon } from "./logo";

export function Features2() {
  return (
    <div
      id="features"
      className="w-full max-w-7xl mx-auto py-4 px-4 md:px-8 md:my-20 md:py-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Four Powerful{" "}
          <span className="text-emerald-600">Outputs</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Transform raw physiological and behavioural data from existing wearables
          into actionable insights that give you peace of mind
        </p>
      </div>
      <div className="mt-20  grid cols-1 lg:grid-cols-5 gap-4 auto-rows-[25rem] max-w-3xl mx-auto lg:max-w-none">
        <Card className="flex relative flex-col justify-between lg:col-span-3">
          <div className="absolute inset-0">
            <PeaceOfMindScoreView />
          </div>
          <div className="absolute z-10 inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-white via-white to-transparent" />
          <CardContent className="absolute z-10 bottom-0">
            <CardTitle>Daily Peace of Mind Score</CardTitle>
            <CardDescription>
              A single, easy-to-understand number that summarises your loved one&apos;s
              overall wellbeing based on sleep, activity, and heart health data.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="flex flex-col relative justify-between lg:col-span-2">
          <WellbeingSummary />
          <div className="absolute z-10 inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-white via-white to-transparent" />
          <CardContent className="absolute z-10 bottom-0">
            <CardTitle>Plain-English Summaries</CardTitle>
            <CardDescription>
              No medical jargon &mdash; just clear, actionable insights about your
              loved one&apos;s daily patterns and any changes to watch.
            </CardDescription>
          </CardContent>
        </Card>
        <Card className="flex flex-col relative justify-between lg:col-span-2 bg-transparent">
          <div className="absolute inset-0 flex items-center justify-center">
            <WearableOrbit />
          </div>
          <div className="absolute z-10 inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-white via-white to-transparent" />
          <CardContent className="absolute  z-10 bottom-0">
            <CardTitle>Works with Existing Wearables</CardTitle>
            <CardDescription>
              Connects seamlessly with Fitbit and Apple Watch &mdash; no new devices
              needed for your elderly loved one.
            </CardDescription>
          </CardContent>
          <div className="absolute right-4 bottom-4 opacity-10 md:opacity-100"></div>
        </Card>

        <Card className="flex flex-col justify-between lg:col-span-3">
          <CardSkeletonBody>
            <div className="w-full h-full p-4 rounded-lg px-2 md:px-10 mt-6">
              <PredictiveAlertCard />
            </div>
          </CardSkeletonBody>
          <CardContent className="h-40">
            <CardTitle>7-Day Predictive Forecasting & Alerts</CardTitle>
            <CardDescription>Get proactive alerts when deterioration is likely, not after it happens.</CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export const SkeletonTwo = () => {
  return (
    <div className="h-60 md:h-60  flex flex-col items-center relative bg-transparent mt-10"></div>
  );
};

// Card structure
const CardSkeletonBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("overflow-hidden relative w-full h-full", className)}>
      {children}
    </div>
  );
};

const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-6", className)}>{children}</div>;
};

const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "inline-block text-[22px] font-[500] leading-[31px] font-rubik text-black",
        className
      )}
    >
      {children}
    </h3>
  );
};
const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "font-sans max-w-sm text-sm font-normal tracking-tight mt-2 text-neutral-400",
        className
      )}
    >
      {children}
    </p>
  );
};

const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover="animate"
      className={cn(
        "group relative isolate flex flex-col rounded-2xl !bg-[#F9FAFB] shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)] overflow-hidden",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const PeaceOfMindScoreView = () => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const scores = [82, 85, 78, 91, 87, 89, 92];

  return (
    <div className="relative w-full h-full overflow-hidden p-6">
      <div className="flex flex-col items-center justify-center h-full">
        {/* Main Score Circle */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="relative w-40 h-40 mb-6"
        >
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="8"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#scoreGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${87 * 2.83} 283`}
              transform="rotate(-90 50 50)"
              initial={{ strokeDasharray: "0 283" }}
              whileInView={{ strokeDasharray: `${87 * 2.83} 283` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#059669" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-bold text-gray-800">87</span>
            <span className="text-sm text-gray-500">Peace of Mind</span>
          </div>
        </motion.div>

        {/* Weekly Trend */}
        <div className="flex gap-2 items-end">
          {days.map((day, idx) => (
            <div key={day} className="flex flex-col items-center">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: scores[idx] * 0.6 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-6 bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t"
              />
              <span className="text-xs text-gray-400 mt-1">{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const WellbeingSummary = () => {
  return (
    <div className="p-4 h-full flex flex-col justify-center">
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 8v4l3 3" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="12" r="9" stroke="#10B981" strokeWidth="2"/>
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700">Today&apos;s Summary</span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          &ldquo;Margaret had a <span className="text-emerald-600 font-medium">restful night</span> with
          7.2 hours of sleep, slightly above her weekly average. Her
          <span className="text-emerald-600 font-medium"> morning activity</span> started
          at 7:45am, which is typical. Heart rate variability remains
          <span className="text-emerald-600 font-medium"> stable</span>.&rdquo;
        </p>
        <div className="flex gap-2 mt-3">
          <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full">Sleep: Good</span>
          <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-xs rounded-full">Activity: Normal</span>
          <span className="px-2 py-1 bg-rose-50 text-rose-600 text-xs rounded-full">Heart: Stable</span>
        </div>
      </div>
    </div>
  );
};


const OrbitingIcons = ({
  centerIcon,
  orbits,
  className,
}: {
  centerIcon?: React.ReactNode;
  orbits: Array<{
    icons: React.ReactNode[];
    radius?: number;
    speed?: number;
    rotationDirection?: "clockwise" | "anticlockwise";
    className?: string;
  }>;
  className?: string;
}) => {
  // Precalculate all orbit data
  const orbitData = React.useMemo(() => {
    return orbits.map((orbit, orbitIndex) => {
      const radius = orbit.radius || 100 + orbitIndex * 80;
      const speed = orbit.speed || 1;
      const iconCount = orbit.icons.length;

      // Calculate angles for each icon with even distribution
      const angleStep = 360 / iconCount;
      const angles = Array.from({ length: iconCount }, (_, i) => angleStep * i);

      // Precalculate positions and animations for each icon
      const iconData = angles.map((angle) => {
        const rotationAngle =
          orbit.rotationDirection === "clockwise"
            ? [angle, angle - 360]
            : [angle, angle + 360];

        return {
          angle,
          rotationAngle,
          position: {
            x: radius * Math.cos((angle * Math.PI) / 180),
            y: radius * Math.sin((angle * Math.PI) / 180),
          },
          animation: {
            initial: {
              rotate: angle,
              scale: 1,
              opacity: 1,
            },
            animate: {
              rotate: rotationAngle,
              scale: 1,
              opacity: 1,
            },
            transition: {
              rotate: {
                duration: speed,
                repeat: Infinity,
                ease: "linear",
              },
            },
            counterRotation: {
              initial: { rotate: -angle },
              animate: {
                rotate:
                  orbit.rotationDirection === "clockwise"
                    ? [-angle, -angle + 360]
                    : [-angle, -angle - 360],
              },
              transition: {
                duration: speed,
                repeat: Infinity,
                ease: "linear",
              },
            },
          },
        };
      });

      return {
        radius,
        speed,
        iconData,
        rotationDirection: orbit.rotationDirection,
        className: orbit.className,
      };
    });
  }, [orbits]);

  return (
    <div className={cn("relative w-[200px] h-[200px]", className)}>
      {centerIcon && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          {centerIcon}
        </div>
      )}
      {orbitData.map((orbit, orbitIndex) => (
        <div
          key={orbitIndex}
          className="absolute top-0 left-0 w-full h-full"
          style={{ zIndex: orbits.length - orbitIndex }}
        >
          <div
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full",
              orbit.className
            )}
            style={{
              width: orbit.radius * 2 + "px",
              height: orbit.radius * 2 + "px",
            }}
          />

          {orbit.iconData.map((icon, iconIndex) => (
            <motion.div
              key={iconIndex}
              className="absolute"
              style={{
                width: "40px",
                height: "40px",
                left: `calc(50% - 20px)`,
                top: `calc(50% - 20px)`,
                transformOrigin: "center center",
              }}
              initial={icon.animation.initial}
              animate={icon.animation.animate}
              transition={icon.animation.transition}
            >
              <div
                style={{
                  position: "absolute",
                  left: `${orbit.radius}px`,
                  transformOrigin: "center center",
                }}
              >
                <motion.div
                  initial={icon.animation.counterRotation.initial}
                  animate={icon.animation.counterRotation.animate}
                  transition={icon.animation.counterRotation.transition}
                  className="w-8 h-8 rounded-full bg-gray-700 p-2 flex items-center justify-center border-[0.7px] border-[#E4E4E4] bg-gradient-to-b mix-blend-luminosity shadow-[inset_0px_0px_8px_0px_rgba(248,248,248,0.25)] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.10)]  will-change-transform"
                >
                  {orbits[orbitIndex].icons[iconIndex]}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

const WearableOrbit = () => {
  // Fitbit icon
  const FitbitIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="4" r="2" fill="#00B0B9"/>
      <circle cx="12" cy="12" r="2" fill="#00B0B9"/>
      <circle cx="12" cy="20" r="2" fill="#00B0B9"/>
      <circle cx="6" cy="8" r="2" fill="#00B0B9"/>
      <circle cx="6" cy="16" r="2" fill="#00B0B9"/>
      <circle cx="18" cy="8" r="2" fill="#00B0B9"/>
      <circle cx="18" cy="16" r="2" fill="#00B0B9"/>
    </svg>
  );

  // Apple Watch icon
  const AppleWatchIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
      <rect x="6" y="2" width="12" height="20" rx="3" stroke="#333" strokeWidth="2"/>
      <rect x="8" y="5" width="8" height="10" rx="1" fill="#333"/>
      <path d="M10 18h4" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );

  // Heart rate icon
  const HeartIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#EF4444">
      <path d="M12 21C12 21 4 15 4 9C4 6.23858 6.23858 4 9 4C10.5 4 11.8 4.7 12.7 5.8C12.7 5.8 12.6 5.7 12.3 5.8C13.2 4.7 14.5 4 16 4C18.7614 4 21 6.23858 21 9C21 15 12 21 12 21Z"/>
    </svg>
  );

  // Sleep icon
  const SleepIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#6366F1">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  );

  const orbit1Icons = [
    <FitbitIcon key="fitbit" />,
    <AppleWatchIcon key="apple" />,
    <FitbitIcon key="fitbit2" />,
  ];

  const orbit2Icons = [
    <HeartIcon key="heart" />,
    <SleepIcon key="sleep" />,
    <HeartIcon key="heart2" />,
    <SleepIcon key="sleep2" />,
  ];

  return (
    <OrbitingIcons
      centerIcon={<LogoIcon className="h-10 w-10" />}
      orbits={[
        {
          icons: orbit1Icons,
          rotationDirection: "anticlockwise",
          radius: 50,
          speed: 12,
          className: "bg-white",
        },
        {
          icons: orbit2Icons,
          rotationDirection: "clockwise",
          radius: 90,
          speed: 18,
          className:
            "bg-[radial-gradient(circle,rgba(236,253,245,1)_0%,rgba(167,243,208,1)_50%,rgba(16,185,129,0.3)_100%)]",
        },
        {
          icons: orbit1Icons,
          rotationDirection: "clockwise",
          radius: 140,
          speed: 10,
          className: "bg-white",
        },
        {
          icons: orbit2Icons,
          rotationDirection: "anticlockwise",
          radius: 180,
          speed: 20,
          className:
            "bg-[radial-gradient(circle,rgba(236,253,245,1)_0%,rgba(167,243,208,1)_50%,rgba(16,185,129,0.3)_100%)]",
        },
      ]}
    />
  );
};

const PredictiveAlertCard = () => {
  const forecast = [
    { day: "Today", risk: "Low", color: "bg-emerald-500" },
    { day: "Tomorrow", risk: "Low", color: "bg-emerald-500" },
    { day: "Wed", risk: "Low", color: "bg-emerald-500" },
    { day: "Thu", risk: "Medium", color: "bg-amber-500" },
    { day: "Fri", risk: "Low", color: "bg-emerald-500" },
    { day: "Sat", risk: "Low", color: "bg-emerald-500" },
    { day: "Sun", risk: "Low", color: "bg-emerald-500" },
  ];

  return (
    <div className="w-full h-full p-4 bg-white border border-gray-200 rounded-xl">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-between mb-4"
      >
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">7-Day Risk Forecast</h3>
            <p className="text-xs text-gray-500">AI-powered prediction</p>
          </div>
        </div>
        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full font-medium">
          All Clear
        </span>
      </motion.div>

      {/* Forecast Grid */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {forecast.map((day, idx) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="flex flex-col items-center"
          >
            <span className="text-xs text-gray-500 mb-1">{day.day}</span>
            <div className={`w-8 h-8 rounded-full ${day.color} flex items-center justify-center`}>
              {day.risk === "Low" ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 9v2m0 4h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Alert Preview */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="bg-amber-50 border border-amber-200 rounded-lg p-3"
      >
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 9v2m0 4h.01" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-amber-800">Thursday Alert Preview</p>
            <p className="text-xs text-amber-600 mt-1">
              Based on current sleep pattern trends, Thursday may show slightly reduced
              activity. We&apos;ll notify you if this changes.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

