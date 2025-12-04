"use client";
import { IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { useSession } from "next-auth/react";
import Link from "next/link";

const features = [
  "Peace of mind knowing Mum is okay, even from miles away",
  "Spot potential health changes before they become emergencies",
  "No need to ask elderly parents to learn new technology",
];

const testimonialQuotes = [
  {
    quote: "I used to call Mum three times a day just to check she was alright. Now I glance at my phone and know she had a good night's sleep and is moving about normally.",
    name: "Sarah M.",
    role: "Caring for mother, 78",
    location: "Manchester"
  },
  {
    quote: "The 7-day forecast alerted us that Dad's activity was declining. We visited early and caught a UTI before it became serious.",
    name: "James T.",
    role: "Caring for father, 82",
    location: "Bristol"
  },
  {
    quote: "Mum didn't have to change anything - she just keeps wearing her Fitbit like always. But now I have actual data instead of 'I'm fine, dear'.",
    name: "Emma W.",
    role: "Caring for mother, 75",
    location: "Edinburgh"
  }
];

export function Testimonials() {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <section className="relative w-full py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-0 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 px-4">
            <h2 className="text-4xl font-semibold">
              <span className="text-emerald-600">Caregivers</span> Love Us
            </h2>

            <p className="text-neutral-600 text-lg max-w-md">
              Join thousands of UK family caregivers who&apos;ve transformed worry into
              confidence with CareConnect AI.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center">
                    <IconCheck className="w-3 h-3 text-emerald-600" />
                  </div>
                  <span className="text-neutral-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              as={Link}
              href={isAuthenticated ? "/dashboard" : "/signup"}
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-full hover:bg-emerald-700 transition-all duration-200 shadow-[0_1px_2px_rgba(0,0,0,0.2)]"
            >
              {isAuthenticated ? "Go to Dashboard" : "Start Your Free Trial"}
            </Button>
          </div>

          {/* Right Side - Testimonial Cards */}
          <div className="relative h-[600px] overflow-hidden">
            <div className="absolute inset-0 flex flex-col gap-4 py-4">
              {testimonialQuotes.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mx-4"
                >
                  <div className="flex items-center gap-1 mb-3">
                    {[1,2,3,4,5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-800">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.role}</p>
                    </div>
                    <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                      {testimonial.location}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-white via-transparent to-white" />
          </div>
        </div>
      </div>
    </section>
  );
}

const LightningIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn("w-6 h-6 text-[#FF6B2B]", className)}
      viewBox="0 0 49 67"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_di_966_1395)">
        <motion.path
          d="M37.6792 21.5018H29.1957C28.5839 21.5018 28.1155 20.9573 28.2069 20.3523L29.8985 9.16102C29.954 8.79514 29.9365 8.4203 29.8473 8.06263C29.758 7.70496 29.5991 7.37304 29.3817 7.08999C29.1643 6.80694 28.8935 6.57957 28.5883 6.42371C28.283 6.26785 27.9507 6.18724 27.6143 6.1875H15.6911C15.1436 6.18768 14.6139 6.4019 14.1961 6.7921C13.7783 7.18231 13.4995 7.72322 13.4092 8.31874L9.55125 33.8425C9.49578 34.2082 9.51322 34.5828 9.60233 34.9403C9.69145 35.2978 9.85012 35.6296 10.0673 35.9126C10.2845 36.1956 10.5549 36.423 10.8599 36.5791C11.1649 36.7351 11.497 36.816 11.8331 36.8161H20.0903C20.6426 36.8161 21.0903 37.2638 21.0903 37.8161V53.534C21.0903 54.5549 22.4401 54.9196 22.9542 54.0376L39.6278 25.435C39.8528 25.0493 39.9794 24.6038 39.9942 24.1455C40.0091 23.6871 39.9117 23.2328 39.7123 22.8303C39.5129 22.4278 39.2189 22.092 38.8611 21.8583C38.5033 21.6245 38.095 21.5013 37.6792 21.5018Z"
          fill="#D4611E"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        <motion.path
          d="M37.6792 21.5018H29.1957C28.5839 21.5018 28.1155 20.9573 28.2069 20.3523L29.8985 9.16102C29.954 8.79514 29.9365 8.4203 29.8473 8.06263C29.758 7.70496 29.5991 7.37304 29.3817 7.08999C29.1643 6.80694 28.8935 6.57957 28.5883 6.42371C28.283 6.26785 27.9507 6.18724 27.6143 6.1875H15.6911C15.1436 6.18768 14.6139 6.4019 14.1961 6.7921C13.7783 7.18231 13.4995 7.72322 13.4092 8.31874L9.55125 33.8425C9.49578 34.2082 9.51322 34.5828 9.60233 34.9403C9.69145 35.2978 9.85012 35.6296 10.0673 35.9126C10.2845 36.1956 10.5549 36.423 10.8599 36.5791C11.1649 36.7351 11.497 36.816 11.8331 36.8161H20.0903C20.6426 36.8161 21.0903 37.2638 21.0903 37.8161V53.534C21.0903 54.5549 22.4401 54.9196 22.9542 54.0376L39.6278 25.435C39.8528 25.0493 39.9794 24.6038 39.9942 24.1455C40.0091 23.6871 39.9117 23.2328 39.7123 22.8303C39.5129 22.4278 39.2189 22.092 38.8611 21.8583C38.5033 21.6245 38.095 21.5013 37.6792 21.5018Z"
          fill="url(#paint0_linear_966_1395)"
          fillOpacity="0.7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </g>
      <defs>
        <filter
          id="filter0_di_966_1395"
          x="0.519531"
          y="0.1875"
          width="48.4766"
          height="66.3482"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="4.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_966_1395"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_966_1395"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1.24444" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_966_1395"
          />
        </filter>
        <linearGradient
          id="paint0_linear_966_1395"
          x1="18.227"
          y1="2.45231"
          x2="56.1912"
          y2="37.6499"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE0CF" />
          <stop offset="1" stopColor="#F68340" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
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
      };
    });
  }, [orbits]);

  return (
    <div className={cn("relative", className)}>
      {centerIcon && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
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
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
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
