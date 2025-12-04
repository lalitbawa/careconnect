"use client";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";


// Card type definition
type Card = {
  id: number;
  name: string;
  designation: string;
  content: string;
  gradient: string;
};

// Reusable components
const GradientTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl font-bold mb-4">{children}</h2>
);

const SectionWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[#F9FAFB] rounded-[18px] p-4 border border-[#E1E1E1] shadow-[0px_37px_10px_0px_rgba(0,0,0,0.00),_0px_24px_10px_0px_rgba(0,0,0,0.01),_0px_13px_8px_0px_rgba(0,0,0,0.02),_0px_6px_6px_0px_rgba(0,0,0,0.03),_0px_1px_3px_0px_rgba(0,0,0,0.04)]">
    {children}
  </div>
);

const ContentBox = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "space-y-4 rounded-xl p-4 border border-[#E1E1E1] bg-white h-[320px]",
      className
    )}
  >
    {children}
  </div>
);

const SectionTitle = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <>
    <motion.h3
      whileHover={{ scale: 1.05 }}
      className="text-xl font-bold mt-6 mb-2"
    >
      {title}
    </motion.h3>
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="text-gray-500 text-sm leading-relaxed"
    >
      {description}
    </motion.p>
  </>
);

// Sleep Analysis Section Component
const SleepAnalysisSection = () => {
  const sleepData = [
    { stage: "Deep Sleep", hours: 2.1, color: "bg-indigo-600" },
    { stage: "Light Sleep", hours: 3.8, color: "bg-indigo-300" },
    { stage: "REM", hours: 1.3, color: "bg-purple-400" },
  ];

  return (
    <SectionWrapper>
      <ContentBox>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Last Night&apos;s Sleep</span>
            <span className="text-2xl font-bold text-gray-800">7.2h</span>
          </div>

          {/* Sleep stages bar */}
          <div className="h-8 rounded-full overflow-hidden flex">
            {sleepData.map((stage, idx) => (
              <motion.div
                key={stage.stage}
                initial={{ width: 0 }}
                whileInView={{ width: `${(stage.hours / 7.2) * 100}%` }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className={`${stage.color} h-full`}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="flex justify-between text-xs">
            {sleepData.map((stage) => (
              <div key={stage.stage} className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${stage.color}`} />
                <span className="text-gray-500">{stage.stage}: {stage.hours}h</span>
              </div>
            ))}
          </div>

          {/* Trend indicator */}
          <div className="flex items-center gap-2 pt-2">
            <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M7 17l5-5 5 5M7 7l5 5 5-5" stroke="#10B981" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-xs text-emerald-600">+12% vs last week average</span>
          </div>
        </div>
      </ContentBox>

      <SectionTitle
        title="Sleep Structure Analysis"
        description="We analyse deep sleep, light sleep, and REM cycles to detect changes in rest quality."
      />
    </SectionWrapper>
  );
};

// Heart Health Section Component
const HeartHealthSection = () => {
  const [metrics, setMetrics] = useState<Card[]>([
    {
      id: 1,
      name: "Resting Heart Rate",
      designation: "Normal Range",
      content: "68 BPM",
      gradient: "from-rose-500 to-rose-600",
    },
    {
      id: 2,
      name: "Heart Rate Variability",
      designation: "Good",
      content: "42 ms",
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      id: 3,
      name: "Activity Heart Rate",
      designation: "Healthy",
      content: "92 BPM",
      gradient: "from-blue-500 to-blue-600",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prevMetrics) => {
        const newArray = [...prevMetrics];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper>
      <ContentBox>
        <div className="mb-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#EF4444">
              <path d="M12 21C12 21 4 15 4 9C4 6.23858 6.23858 4 9 4C10.5 4 11.8 4.7 12.7 5.8C12.7 5.8 12.6 5.7 12.3 5.8C13.2 4.7 14.5 4 16 4C18.7614 4 21 6.23858 21 9C21 15 12 21 12 21Z"/>
            </svg>
            <h2 className="text-[28px] font-bold text-gray-800">68</h2>
            <span className="text-gray-500 text-sm">BPM</span>
          </div>
          <p className="text-gray-500 text-sm">Current Resting Heart Rate</p>
        </div>

        <div className="relative h-48">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              className={`absolute w-full h-[140px] rounded-[20px] p-5 text-white bg-gradient-to-br ${metric.gradient}`}
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -8,
                scale: 1 - index * 0.05,
                zIndex: metrics.length - index,
              }}
            >
              <div className="flex justify-between items-start relative z-10">
                <div>
                  <p className="text-white/80 text-xs">{metric.name}</p>
                  <p className="text-2xl font-bold mt-1">{metric.content}</p>
                </div>
                <span className="px-2 py-1 bg-white/20 rounded-full text-xs">
                  {metric.designation}
                </span>
              </div>
              <div className="mt-4 h-12 relative z-10">
                {/* Simple ECG line animation */}
                <svg className="w-full h-full" viewBox="0 0 200 40">
                  <motion.path
                    d="M0 20 L30 20 L35 10 L40 30 L45 5 L50 35 L55 20 L200 20"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0.5 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </ContentBox>

      <SectionTitle
        title="Heart Health Monitoring"
        description="Track resting heart rate and HRV to detect subtle changes that may indicate health shifts."
      />
    </SectionWrapper>
  );
};

// Activity Patterns Section Component
const ActivitySection = () => {
  const hourlyActivity = [
    { hour: "6am", level: 10 },
    { hour: "8am", level: 45 },
    { hour: "10am", level: 70 },
    { hour: "12pm", level: 55 },
    { hour: "2pm", level: 40 },
    { hour: "4pm", level: 60 },
    { hour: "6pm", level: 35 },
    { hour: "8pm", level: 15 },
  ];

  return (
    <SectionWrapper>
      <ContentBox>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium text-gray-700">Today&apos;s Activity</span>
          <div className="flex items-center gap-2">
            <span className="text-emerald-600 font-bold">2,847</span>
            <span className="text-gray-400 text-xs">steps</span>
          </div>
        </div>

        {/* Activity timeline */}
        <div className="h-32 flex items-end justify-between gap-1 mb-4">
          {hourlyActivity.map((item, idx) => (
            <div key={item.hour} className="flex flex-col items-center flex-1">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: `${item.level}%` }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="w-full bg-gradient-to-t from-emerald-500 to-emerald-300 rounded-t"
                style={{ maxHeight: "100%" }}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between text-xs text-gray-400">
          {hourlyActivity.map((item) => (
            <span key={item.hour}>{item.hour}</span>
          ))}
        </div>

        {/* Pattern Alert */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-4 p-3 bg-emerald-50 rounded-lg border border-emerald-100"
        >
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-xs text-emerald-700">Activity patterns match typical routine</span>
          </div>
        </motion.div>
      </ContentBox>

      <SectionTitle
        title="Movement Pattern Tracking"
        description="Monitor daily activity levels and detect unusual changes that might indicate health concerns."
      />
    </SectionWrapper>
  );
};

// Main Features3 component
const Features3 = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <GradientTitle>
            What We <span className="text-emerald-600">Monitor</span>
          </GradientTitle>
          <p className="text-gray-600 max-w-2xl mx-auto">
            CareConnect AI passively analyses three key health dimensions from your
            loved one&apos;s existing wearable &mdash; no lifestyle changes required.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SleepAnalysisSection />
          <HeartHealthSection />
          <ActivitySection />
        </div>
      </div>
    </section>
  );
};

export default Features3;
