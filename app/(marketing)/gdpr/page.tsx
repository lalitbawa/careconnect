import { type Metadata } from "next";
import Link from "next/link";
import {
  IconShield,
  IconLock,
  IconEye,
  IconTrash,
  IconDownload,
  IconEdit,
  IconBan,
  IconUserCheck,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "GDPR Compliance | CareConnect AI",
  description: "Learn how CareConnect AI complies with UK GDPR and the Data Protection Act 2018. Your data rights and our commitments to data protection.",
};

const rights = [
  {
    title: "Right to Access",
    icon: IconEye,
    description: "Request a copy of all personal data we hold about you and your loved ones.",
  },
  {
    title: "Right to Rectification",
    icon: IconEdit,
    description: "Correct any inaccurate or incomplete personal data in your account.",
  },
  {
    title: "Right to Erasure",
    icon: IconTrash,
    description: "Request deletion of your personal data (\"right to be forgotten\").",
  },
  {
    title: "Right to Portability",
    icon: IconDownload,
    description: "Receive your data in a machine-readable format to transfer elsewhere.",
  },
  {
    title: "Right to Restrict",
    icon: IconBan,
    description: "Limit how we process your data in certain circumstances.",
  },
  {
    title: "Right to Object",
    icon: IconUserCheck,
    description: "Object to processing based on legitimate interests or for marketing.",
  },
];

const commitments = [
  {
    title: "UK-Based Data Storage",
    description: "All health data is stored in UK data centres, subject to UK data protection law.",
  },
  {
    title: "Explicit Consent",
    description: "We process health data only with your explicit, informed consent.",
  },
  {
    title: "Data Minimisation",
    description: "We collect only the data necessary to provide our service.",
  },
  {
    title: "Purpose Limitation",
    description: "Your data is used only for the purposes you&apos;ve agreed to.",
  },
  {
    title: "Security by Design",
    description: "Data protection is built into our systems from the ground up.",
  },
  {
    title: "Regular Audits",
    description: "We conduct regular security and compliance audits.",
  },
];

export default function GDPRPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <IconShield className="w-4 h-4" />
            Data Protection
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            GDPR <span className="text-emerald-600">Compliance</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            CareConnect AI is fully compliant with the UK General Data Protection Regulation (UK GDPR)
            and the Data Protection Act 2018. Your privacy is our priority.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-6">Our Commitment to GDPR</h2>
          <p className="text-gray-600 mb-4">
            As a UK-based company processing health data, we take our GDPR obligations seriously.
            We&apos;ve built CareConnect AI with data protection at its core, ensuring that your personal
            information and the health data of your loved ones is handled with the utmost care.
          </p>
          <p className="text-gray-600 mb-4">
            Health data is classified as &quot;special category data&quot; under GDPR, requiring additional
            protections. We process this data only with your explicit consent and implement robust
            technical and organisational measures to protect it.
          </p>
          <div className="mt-8 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
            <p className="text-emerald-800 text-sm">
              <strong>ICO Registration:</strong> CareConnect AI Ltd is registered with the
              Information Commissioner&apos;s Office (ICO) under registration number ZA123456.
            </p>
          </div>
        </div>
      </div>

      {/* Your Rights */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Your Data Rights</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Under UK GDPR, you have specific rights regarding your personal data.
              We make it easy to exercise these rights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rights.map((right) => (
              <div
                key={right.title}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                  <right.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="font-bold mb-2">{right.title}</h3>
                <p className="text-gray-600 text-sm">{right.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">
              To exercise any of these rights, contact our Data Protection Officer:
            </p>
            <a
              href="mailto:dpo@careconnect.ai"
              className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium"
            >
              dpo@careconnect.ai
            </a>
          </div>
        </div>
      </div>

      {/* Our Commitments */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Data Protection Commitments</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We go beyond minimum compliance to ensure your data is protected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commitments.map((commitment) => (
            <div
              key={commitment.title}
              className="flex items-start gap-4 p-6 bg-white rounded-xl border border-gray-100"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold mb-1">{commitment.title}</h3>
                <p className="text-gray-600 text-sm">{commitment.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legal Basis */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Legal Basis for Processing</h2>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Data Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Legal Basis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">Health data from wearables</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Explicit consent (Article 9(2)(a))</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">Account information</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Contract performance (Article 6(1)(b))</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">Payment information</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Contract performance (Article 6(1)(b))</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">Marketing communications</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Consent (Article 6(1)(a))</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-600">Service improvement analytics</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Legitimate interests (Article 6(1)(f))</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Data Protection Officer */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
            <IconLock className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Data Protection Officer</h2>
          <p className="text-emerald-100 mb-6 max-w-xl mx-auto">
            We have appointed a Data Protection Officer to oversee our GDPR compliance.
            Contact them for any data protection queries or to exercise your rights.
          </p>
          <div className="space-y-2 text-emerald-100">
            <p>Email: <a href="mailto:dpo@careconnect.ai" className="text-white underline">dpo@careconnect.ai</a></p>
            <p>Post: Data Protection Officer, CareConnect AI Ltd, 123 Innovation Way, London, EC2A 4NE</p>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">
            For more information about how we handle your data:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/privacy"
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/security"
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Data Security
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/terms"
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
