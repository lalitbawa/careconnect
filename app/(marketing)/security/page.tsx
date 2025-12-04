import { type Metadata } from "next";
import Link from "next/link";
import {
  IconShieldLock,
  IconLock,
  IconServer,
  IconKey,
  IconEyeOff,
  IconRefresh,
  IconBug,
  IconCertificate,
  IconCloudLock,
  IconUserShield,
} from "@tabler/icons-react";

export const metadata: Metadata = {
  title: "Data Security | CareConnect AI",
  description: "Learn how CareConnect AI protects your health data with enterprise-grade security measures, UK data centres, and end-to-end encryption.",
};

const securityFeatures = [
  {
    title: "End-to-End Encryption",
    icon: IconLock,
    description: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256 encryption, the same standard used by banks and healthcare providers.",
  },
  {
    title: "UK Data Centres",
    icon: IconServer,
    description: "Your health data never leaves the UK. We use ISO 27001 certified data centres located in the United Kingdom.",
  },
  {
    title: "Access Controls",
    icon: IconKey,
    description: "Strict role-based access controls ensure only authorised personnel can access systems, with full audit logging.",
  },
  {
    title: "Privacy by Design",
    icon: IconEyeOff,
    description: "Data protection is built into our architecture from the ground up, not added as an afterthought.",
  },
  {
    title: "Regular Security Audits",
    icon: IconRefresh,
    description: "We conduct regular penetration testing and security audits by independent third-party experts.",
  },
  {
    title: "Bug Bounty Programme",
    icon: IconBug,
    description: "We maintain a responsible disclosure programme to identify and fix security vulnerabilities quickly.",
  },
];

const certifications = [
  {
    name: "ISO 27001",
    description: "Information Security Management certification for our infrastructure providers",
  },
  {
    name: "SOC 2 Type II",
    description: "Service Organisation Control certification for security, availability, and confidentiality",
  },
  {
    name: "Cyber Essentials Plus",
    description: "UK government-backed certification for cyber security best practices",
  },
  {
    name: "ICO Registration",
    description: "Registered with the Information Commissioner&apos;s Office as a data controller",
  },
];

const dataProtectionMeasures = [
  {
    title: "Encryption Standards",
    items: [
      "TLS 1.3 for all data in transit",
      "AES-256 encryption for data at rest",
      "Encrypted database backups",
      "Secure key management with HSM",
    ],
  },
  {
    title: "Infrastructure Security",
    items: [
      "UK-based cloud infrastructure",
      "DDoS protection",
      "Web application firewall (WAF)",
      "Network segmentation and isolation",
    ],
  },
  {
    title: "Application Security",
    items: [
      "Secure development lifecycle (SDL)",
      "Regular dependency updates",
      "Input validation and sanitisation",
      "Protection against OWASP Top 10",
    ],
  },
  {
    title: "Operational Security",
    items: [
      "24/7 security monitoring",
      "Incident response procedures",
      "Regular backup and recovery testing",
      "Employee security training",
    ],
  },
];

export default function SecurityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <IconShieldLock className="w-4 h-4" />
            Enterprise-Grade Security
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Data <span className="text-emerald-600">Security</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your loved one&apos;s health data deserves the highest level of protection.
            We implement enterprise-grade security measures to keep it safe.
          </p>
        </div>
      </div>

      {/* Security Features */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How We Protect Your Data</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Security isn&apos;t an afterthought—it&apos;s built into everything we do.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Details */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technical Security Measures</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A detailed look at the security controls we implement across our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataProtectionMeasures.map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <IconCloudLock className="w-5 h-5 text-emerald-600" />
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Certifications & Compliance</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our commitment to security is validated by industry certifications and regulatory compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-white rounded-xl p-6 border border-gray-100 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
                <IconCertificate className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="font-bold mb-2">{cert.name}</h3>
              <p className="text-gray-600 text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Data Handling */}
      <div className="bg-emerald-600 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
            <IconUserShield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Your Data, Your Control</h2>
          <p className="text-emerald-100 max-w-2xl mx-auto mb-8">
            We believe in transparency and giving you control over your data. You can export or delete
            your data at any time through your account settings, or by contacting our support team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/privacy"
              className="bg-white text-emerald-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/gdpr"
              className="bg-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/30 transition-colors"
            >
              GDPR Compliance
            </Link>
          </div>
        </div>
      </div>

      {/* Security Contact */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Report a Security Issue</h3>
              <p className="text-gray-600 text-sm mb-4">
                If you discover a security vulnerability, please report it responsibly.
                We take all reports seriously and will respond promptly.
              </p>
              <a
                href="mailto:security@careconnect.ai"
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                security@careconnect.ai
              </a>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Security Questions</h3>
              <p className="text-gray-600 text-sm mb-4">
                For general security inquiries or to request more information about our security practices.
              </p>
              <a
                href="mailto:trust@careconnect.ai"
                className="text-emerald-600 hover:text-emerald-700 font-medium"
              >
                trust@careconnect.ai
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Notice */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            Last security audit: November 2024 | Security practices reviewed quarterly |{" "}
            <Link href="/contact" className="text-emerald-600 hover:text-emerald-700">
              Contact us
            </Link>{" "}
            with any concerns
          </p>
        </div>
      </div>
    </div>
  );
}
