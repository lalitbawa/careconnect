"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconPlus } from "@tabler/icons-react";

const faqs = [
  {
    question: "Does my elderly relative need to learn new technology?",
    answer: "No. CareConnect AI works passively with wearables they already own, like Fitbit or Apple Watch. They simply continue wearing their device as usual - no apps to open, no buttons to press, no changes to their routine."
  },
  {
    question: "What devices does CareConnect AI work with?",
    answer: "We currently integrate with Fitbit devices and Apple Watch. We analyse data including movement patterns, sleep structure, resting heart rate, and heart rate variability to generate insights."
  },
  {
    question: "How does the 7-day predictive forecasting work?",
    answer: "Our AI analyses patterns in your loved one's physiological and behavioural data over time. When it detects trends that historically precede health changes, it alerts you proactively - often days before symptoms become obvious."
  },
  {
    question: "Is my family's health data secure?",
    answer: "Absolutely. We're UK-based and fully GDPR compliant. All data is encrypted in transit and at rest. We never sell or share your family's health information with third parties."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes. Both our Core Plan (£29/month) and Annual Plan (£290/year) can be cancelled at any time. If you cancel the Annual Plan, you'll retain access until the end of your paid period."
  },
  {
    question: "What makes CareConnect AI different from telecare alarms?",
    answer: "Traditional telecare alarms only react after an incident. CareConnect AI shifts care from reactive to anticipatory - we help you spot potential issues before they become emergencies, using data from wearables your loved one already uses."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">
            Frequently <span className="text-emerald-600">Asked</span> Questions
          </h2>
          <p className="text-neutral-600 max-w-3xl mx-auto">
            Everything you need to know about CareConnect AI and how it helps you
            care for your elderly loved ones with confidence.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 rounded-[22px] bg-[#DCDCDC] p-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-[17px] border border-[#EBEBEB] bg-gradient-to-b from-[#F6F6F6] via-[#FDFDFD] to-[#F6F6F6] shadow-[0px_95px_27px_0px_rgba(0,0,0,0.00),_0px_61px_24px_0px_rgba(0,0,0,0.03),_0px_34px_21px_0px_rgba(0,0,0,0.11),_0px_15px_15px_0px_rgba(0,0,0,0.19),_0px_4px_8px_0px_rgba(0,0,0,0.22)] overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center gap-2 text-left"
              >
                <motion.div
                  initial={false}
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <IconPlus size={20} className="text-emerald-600" />
                </motion.div>
                <span className="text-lg text-neutral-800">{faq.question}</span>
              </button>
              <AnimatePresence mode="sync">
                {openIndex === index && (
                  <motion.div
                    key={`content-${index}`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { 
                        height: "auto",
                        opacity: 1,
                        transition: { 
                          type: "spring",
                          stiffness: 400,
                          damping: 40,
                          mass: 1
                        }
                      },
                      collapsed: { 
                        height: 0,
                        opacity: 0,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 40,
                          mass: 1
                        }
                      }
                    }}
                    className="px-6 overflow-hidden"
                  >
                    <div className="pb-5">
                      <p className="text-neutral-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}