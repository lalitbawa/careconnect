import { type Metadata } from "next";
import Link from "next/link";
import {
  IconBuilding,
  IconHeartHandshake,
  IconDeviceWatch,
  IconBuildingHospital,
  IconHome,
  IconCheck,
  IconArrowRight,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Partner With Us | CareConnect AI",
  description: "Join the CareConnect AI partner network. We work with care homes, NHS trusts, housing associations, and technology providers to improve elderly care across the UK.",
};

const partnerTypes = [
  {
    title: "Care Homes & Residential Facilities",
    icon: IconBuilding,
    description: "Enhance resident monitoring with passive wearable integration that works alongside your existing care protocols.",
    benefits: [
      "Early warning alerts for staff",
      "Family communication portal",
      "Compliance documentation",
      "Reduced emergency incidents",
    ],
  },
  {
    title: "NHS Trusts & Healthcare Providers",
    icon: IconBuildingHospital,
    description: "Support patient discharge and remote monitoring programmes with our validated predictive technology.",
    benefits: [
      "Post-discharge monitoring",
      "Reduced readmission rates",
      "GP integration capabilities",
      "Clinical dashboard access",
    ],
  },
  {
    title: "Housing Associations",
    icon: IconHome,
    description: "Help elderly residents maintain independence in sheltered and supported housing environments.",
    benefits: [
      "Non-invasive monitoring",
      "Warden alert integration",
      "Tenant wellbeing insights",
      "Community care support",
    ],
  },
  {
    title: "Technology & Wearable Partners",
    icon: IconDeviceWatch,
    description: "Integrate your devices or platforms with CareConnect AI to expand your eldercare offering.",
    benefits: [
      "API integration support",
      "White-label options",
      "Co-marketing opportunities",
      "Technical collaboration",
    ],
  },
];

const benefits = [
  {
    title: "Proven Technology",
    description: "Validated with 134 UK caregivers and built on peer-reviewed research in predictive health analytics.",
  },
  {
    title: "GDPR Compliant",
    description: "UK-based, fully GDPR compliant with NHS Digital standards for data security and privacy.",
  },
  {
    title: "Flexible Integration",
    description: "REST APIs, webhooks, and customisable dashboards to fit your existing workflows.",
  },
  {
    title: "Dedicated Support",
    description: "Partner success team with implementation support, training, and ongoing account management.",
  },
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <IconHeartHandshake className="w-4 h-4" />
            Partnership Opportunities
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Partner With <span className="text-emerald-600">CareConnect AI</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Join the growing network of care providers, NHS trusts, and technology partners
            transforming elderly care across the UK.
          </p>
          <Link
            href="#contact-form"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-colors font-medium"
          >
            Become a Partner
            <IconArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Partner Types */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Who We Partner With</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work with organisations across the care ecosystem to improve outcomes for elderly people and their families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partnerTypes.map((partner) => (
            <div
              key={partner.title}
              className="bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">
                <partner.icon className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{partner.title}</h3>
              <p className="text-gray-600 mb-6">{partner.description}</p>
              <ul className="space-y-2">
                {partner.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 text-sm text-gray-700">
                    <IconCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Why Partner */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Partner With Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              CareConnect AI brings proven technology, dedicated support, and a shared mission to improve elderly care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">134+</div>
            <p className="text-gray-600">UK Caregivers Validated</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">87%</div>
            <p className="text-gray-600">Reduced Caregiver Anxiety</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">7 Days</div>
            <p className="text-gray-600">Predictive Forecasting</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-emerald-600 mb-2">24/7</div>
            <p className="text-gray-600">Passive Monitoring</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="bg-gradient-to-br from-emerald-600 to-emerald-700 py-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s Talk</h2>
            <p className="text-emerald-100">
              Tell us about your organisation and how we might work together.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <input
              type="text"
              placeholder="Organisation Name"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-white/50">
              <option value="" className="text-gray-800">Organisation Type</option>
              <option value="care-home" className="text-gray-800">Care Home / Residential Facility</option>
              <option value="nhs" className="text-gray-800">NHS Trust / Healthcare Provider</option>
              <option value="housing" className="text-gray-800">Housing Association</option>
              <option value="technology" className="text-gray-800">Technology / Wearable Partner</option>
              <option value="other" className="text-gray-800">Other</option>
            </select>
            <textarea
              rows={4}
              placeholder="Tell us about your partnership interest..."
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-white text-emerald-600 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              Submit Partnership Enquiry
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
