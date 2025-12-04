"use client";
import { IconCheck } from "@tabler/icons-react";
import { motion } from "motion/react";
import React from "react";
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

