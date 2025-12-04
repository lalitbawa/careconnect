import { type Metadata } from "next";
import Link from "next/link";
import {
  IconDeviceWatch,
  IconHeartRateMonitor,
  IconMoon,
  IconActivity,
  IconBell,
  IconCreditCard,
  IconQuestionMark,
  IconMail,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Help Centre | CareConnect AI",
  description: "Get help with CareConnect AI. Find answers to common questions about connecting wearables, understanding your Peace of Mind Score, and managing your account.",
};

const helpCategories = [
  {
    title: "Getting Started",
    icon: IconDeviceWatch,
    articles: [
      { title: "How to connect a Fitbit device", href: "#" },
      { title: "How to connect an Apple Watch", href: "#" },
      { title: "Setting up your first family member", href: "#" },
      { title: "Understanding the dashboard", href: "#" },
    ],
  },
  {
    title: "Peace of Mind Score",
    icon: IconHeartRateMonitor,
    articles: [
      { title: "What is the Peace of Mind Score?", href: "#" },
      { title: "How is the score calculated?", href: "#" },
      { title: "What affects the daily score?", href: "#" },
      { title: "Understanding score trends", href: "#" },
    ],
  },
  {
    title: "Sleep Monitoring",
    icon: IconMoon,
    articles: [
      { title: "How sleep data is collected", href: "#" },
      { title: "Understanding sleep stages", href: "#" },
      { title: "What changes to watch for", href: "#" },
      { title: "Sleep score vs Peace of Mind Score", href: "#" },
    ],
  },
  {
    title: "Activity Tracking",
    icon: IconActivity,
    articles: [
      { title: "How activity is measured", href: "#" },
      { title: "Understanding activity patterns", href: "#" },
      { title: "What low activity might mean", href: "#" },
      { title: "Setting activity expectations", href: "#" },
    ],
  },
  {
    title: "Alerts & Notifications",
    icon: IconBell,
    articles: [
      { title: "Types of alerts explained", href: "#" },
      { title: "Customising alert settings", href: "#" },
      { title: "What to do when you receive an alert", href: "#" },
      { title: "Managing notification preferences", href: "#" },
    ],
  },
  {
    title: "Account & Billing",
    icon: IconCreditCard,
    articles: [
      { title: "Managing your subscription", href: "#" },
      { title: "Updating payment details", href: "#" },
      { title: "Cancelling your subscription", href: "#" },
      { title: "Understanding your invoice", href: "#" },
    ],
  },
];

const popularArticles = [
  "How do I connect my parent's Fitbit?",
  "What does a low Peace of Mind Score mean?",
  "How accurate is the sleep tracking?",
  "Can I add multiple family members?",
  "How do I change my notification settings?",
  "What happens if the wearable runs out of battery?",
];

export default function HelpCentrePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            How can we <span className="text-emerald-600">help</span>?
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Search our help centre or browse categories below
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for help..."
                className="w-full px-6 py-4 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Help Categories */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {helpCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.articles.map((article) => (
                  <li key={article.title}>
                    <Link
                      href={article.href}
                      className="text-gray-600 hover:text-emerald-600 text-sm flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Articles */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Popular Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {popularArticles.map((article) => (
              <Link
                key={article}
                href="#"
                className="bg-white p-4 rounded-lg border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all flex items-center gap-3"
              >
                <IconQuestionMark className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span className="text-gray-700">{article}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Support CTA */}
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Still need help?</h2>
        <p className="text-gray-600 mb-6">
          Our support team is here to assist you with any questions
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors"
        >
          <IconMail className="w-5 h-5" />
          Contact Support
        </Link>
      </div>
    </div>
  );
}
