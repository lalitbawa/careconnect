import Link from "next/link";
import { Logo } from "./logo";
import {
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandFacebook,
  IconMail,
} from "@tabler/icons-react";

export function Footer() {
  const product = [
    { title: "How It Works", href: "/#how-it-works" },
    { title: "Features", href: "/#features" },
    { title: "Pricing", href: "/#pricing" },
    { title: "FAQ", href: "/#faq" },
  ];

  const resources = [
    { title: "Caregiver Blog", href: "/blog" },
    { title: "Help Centre", href: "/help-centre" },
    { title: "Contact Support", href: "/contact" },
    { title: "Partner With Us", href: "/partners" },
  ];

  const legal = [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "GDPR Compliance", href: "/gdpr" },
    { title: "Data Security", href: "/security" },
  ];

  return (
    <footer className="w-full max-w-7xl mx-auto rounded-xl m-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="flex items-start flex-col max-w-sm">
            <Logo />
            <h2 className="text-xl font-medium mt-8 text-gray-700">
              Predictive eldercare for family caregivers.
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Transform your loved one&apos;s wearable data into peace of mind with
              daily wellbeing scores, plain-English summaries, and proactive alerts.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-emerald-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              UK-based & GDPR Compliant
            </div>
          </div>

          <div className="grid justify-self-end grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h3 className="font-semibold text-gray-800">Product</h3>
              <ul className="space-y-3">
                {product.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-gray-500 hover:text-emerald-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold text-gray-800">Resources</h3>
              <ul className="space-y-3">
                {resources.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-gray-500 hover:text-emerald-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="font-semibold text-gray-800">Legal</h3>
              <ul className="space-y-3">
                {legal.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className="text-gray-500 hover:text-emerald-600 transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} CareConnect AI. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-gray-400 hover:text-emerald-600 transition-colors"
                aria-label="Twitter"
              >
                <IconBrandTwitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-emerald-600 transition-colors"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-emerald-600 transition-colors"
                aria-label="Facebook"
              >
                <IconBrandFacebook size={20} />
              </Link>
              <Link
                href="mailto:hello@careconnect.ai"
                className="text-gray-400 hover:text-emerald-600 transition-colors"
                aria-label="Email"
              >
                <IconMail size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
