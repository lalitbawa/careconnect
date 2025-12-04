"use client";
import React from "react";
import { Button } from "./button";

const PricingCard = ({
  tier,
  price,
  period,
  savings,
  isHighlighted = false,
  features,
  buttonText,
  disabled = false,
}: {
  tier: string;
  price: number;
  period: string;
  savings?: string;
  isHighlighted?: boolean;
  features: string[];
  buttonText: string;
  disabled?: boolean;
}) => {
  return (
    <div
      className={`relative rounded-[37px] flex flex-col gap-3 p-4 ${
        isHighlighted
          ? "border border-white bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-600"
          : "bg-[#DCDCDC]"
      }`}
    >
      {savings && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 px-4 py-1 rounded-full text-sm font-medium">
          {savings}
        </div>
      )}
      <div className="space-y-8 p-4 bg-[#F5F5F5] rounded-[28px] shadow-[0px_95px_27px_0px_rgba(0,0,0,0.00),_0px_61px_24px_0px_rgba(0,0,0,0.03),_0px_34px_21px_0px_rgba(0,0,0,0.11),_0px_15px_15px_0px_rgba(0,0,0,0.19),_0px_4px_8px_0px_rgba(0,0,0,0.22)] pb-20 px-4">
        <div className="flex flex-col">
          <h3 className="text-[18px] w-fit font-medium text-gray-900 rounded-[9999px] border border-[#DCDCDC] bg-white flex justify-center items-center px-[14.32px] py-1">
            {tier}
          </h3>
          <div className="mt-2 flex items-baseline">
            <span className="text-[40px] font-bold">£</span>
            <span className="text-[40px] font-bold">{price}</span>
            <span className="ml-1 text-gray-500">/{period}</span>
          </div>
          {period === "year" && (
            <p className="text-sm text-emerald-600 font-medium">
              Equivalent to £24.17/month
            </p>
          )}
        </div>

        <Button
          as="button"
          disabled={disabled}
          className={`w-full py-4 px-6 text-white text-md font-medium shadow-sm transition-colors ${
            disabled
              ? "bg-gray-400 cursor-not-allowed opacity-60"
              : isHighlighted
              ? "bg-emerald-600 hover:bg-emerald-700"
              : "bg-gray-900 hover:bg-gray-800"
          }`}
        >
          {disabled ? "Coming Soon" : buttonText}
        </Button>

        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                />
              </svg>
              <span className="text-[14px] text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Pricing() {
  const coreFeatures = [
    "Daily Peace of Mind Score",
    "Plain-English wellbeing summaries",
    "7-day predictive risk forecasting",
    "Proactive deterioration alerts",
    "Fitbit & Apple Watch integration",
    "Sleep, heart rate & activity tracking",
    "Email & push notifications",
    "Cancel anytime",
  ];

  const annualFeatures = [
    "Everything in Core Plan",
    "2 months FREE (save £58)",
    "Daily Peace of Mind Score",
    "Plain-English wellbeing summaries",
    "7-day predictive risk forecasting",
    "Proactive deterioration alerts",
    "Fitbit & Apple Watch integration",
    "Sleep, heart rate & activity tracking",
    "Email & push notifications",
    "Priority email support",
  ];

  const trialFeatures = [
    "Full access to all features",
    "No credit card required",
    "Daily Peace of Mind Score",
    "Plain-English summaries",
    "7-day risk forecasting",
  ];

  return (
    <div id="pricing" className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-emerald-600">Simple</span> Pricing for Peace of Mind
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Validated with 134 UK caregivers. Premium quality between low-tech telecare
          alarms and expensive sensor ecosystems. No hidden fees.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4 items-start">
        <PricingCard
          tier="14-Day Free Trial"
          price={0}
          period="start"
          features={trialFeatures}
          buttonText="Start Free Trial"
          disabled
        />
        <PricingCard
          tier="Annual Plan"
          price={290}
          period="year"
          savings="Save £58 (2 months free)"
          features={annualFeatures}
          isHighlighted
          buttonText="Best Value - Get Started"
          disabled
        />
        <PricingCard
          tier="Core Plan"
          price={29}
          period="month"
          features={coreFeatures}
          buttonText="Subscribe Monthly"
          disabled
        />
      </div>

      {/* Trust indicators */}
      <div className="mt-12 text-center">
        <p className="text-gray-500 text-sm mb-4">
          61% of surveyed UK caregivers indicated they would subscribe at this price point
        </p>
        <div className="flex justify-center gap-8 text-sm text-gray-400">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            Secure payments
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Cancel anytime
          </span>
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            UK-based support
          </span>
        </div>
      </div>
    </div>
  );
}
