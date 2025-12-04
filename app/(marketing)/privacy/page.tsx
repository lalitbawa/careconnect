import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | CareConnect AI",
  description: "CareConnect AI Privacy Policy. Learn how we collect, use, and protect your personal and health data in compliance with UK GDPR.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: December 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12 prose prose-gray max-w-none">

          <h2>1. Introduction</h2>
          <p>
            CareConnect AI Ltd (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy and the privacy of your loved ones. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our predictive eldercare platform.
          </p>
          <p>
            We are registered in England and Wales (Company Number: 12345678) and comply fully with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>

          <h2>2. Information We Collect</h2>

          <h3>2.1 Account Information</h3>
          <p>When you create an account, we collect:</p>
          <ul>
            <li>Name and email address</li>
            <li>Password (encrypted)</li>
            <li>Phone number (optional)</li>
            <li>Billing information for paid subscriptions</li>
          </ul>

          <h3>2.2 Health Data from Wearable Devices</h3>
          <p>With your explicit consent, we collect the following data from connected wearable devices (Fitbit, Apple Watch):</p>
          <ul>
            <li>Sleep data (duration, stages, quality metrics)</li>
            <li>Activity data (steps, active minutes, sedentary time)</li>
            <li>Heart rate data (resting heart rate, heart rate variability)</li>
            <li>Device battery and sync status</li>
          </ul>

          <h3>2.3 Information About Your Loved One</h3>
          <p>To provide our service, we collect:</p>
          <ul>
            <li>Name of the person being monitored</li>
            <li>Relationship to account holder</li>
            <li>Age range (for health context)</li>
            <li>Health data from their connected wearable</li>
          </ul>

          <h3>2.4 Usage Information</h3>
          <p>We automatically collect:</p>
          <ul>
            <li>App usage patterns and feature interactions</li>
            <li>Device information (operating system, app version)</li>
            <li>Log data for troubleshooting</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li><strong>Provide our core service:</strong> Generate Peace of Mind Scores, wellbeing summaries, and predictive forecasts</li>
            <li><strong>Send alerts:</strong> Notify you when patterns suggest concern</li>
            <li><strong>Improve our algorithms:</strong> Enhance the accuracy of our predictive models (using anonymised, aggregated data only)</li>
            <li><strong>Communicate with you:</strong> Send service updates, support responses, and optional marketing (with consent)</li>
            <li><strong>Process payments:</strong> Manage subscriptions through our payment provider</li>
            <li><strong>Comply with legal obligations:</strong> Meet regulatory and legal requirements</li>
          </ul>

          <h2>4. Legal Basis for Processing</h2>
          <p>We process your data under the following legal bases:</p>
          <ul>
            <li><strong>Consent:</strong> For processing health data and optional marketing communications</li>
            <li><strong>Contract:</strong> For providing our service as agreed in our Terms of Service</li>
            <li><strong>Legitimate interests:</strong> For service improvement, security, and fraud prevention</li>
            <li><strong>Legal obligation:</strong> For compliance with applicable laws</li>
          </ul>

          <h2>5. Health Data: Special Category Data</h2>
          <p>
            Health data is classified as &quot;special category data&quot; under UK GDPR. We only process this data with your explicit consent, which you provide when connecting a wearable device.
          </p>
          <p>
            You can withdraw consent at any time by disconnecting the wearable device in your account settings. This will stop future data collection, though historical data may be retained as described in Section 8.
          </p>

          <h2>6. Data Sharing</h2>
          <p>We do not sell your personal or health data. We share data only with:</p>
          <ul>
            <li><strong>Wearable platform providers:</strong> To access data you&apos;ve authorised (Fitbit/Google, Apple)</li>
            <li><strong>Cloud infrastructure providers:</strong> To securely store and process data (AWS/Google Cloud, UK data centres)</li>
            <li><strong>Payment processors:</strong> To handle subscription payments (Stripe)</li>
            <li><strong>Analytics providers:</strong> Anonymised usage data only</li>
            <li><strong>Legal authorities:</strong> When required by law or to protect safety</li>
          </ul>

          <h2>7. Data Security</h2>
          <p>We implement robust security measures including:</p>
          <ul>
            <li>Encryption of data in transit (TLS 1.3) and at rest (AES-256)</li>
            <li>UK-based data centres with ISO 27001 certification</li>
            <li>Regular security audits and penetration testing</li>
            <li>Access controls and authentication requirements</li>
            <li>Employee training on data protection</li>
          </ul>

          <h2>8. Data Retention</h2>
          <p>We retain your data for:</p>
          <ul>
            <li><strong>Account data:</strong> Duration of account plus 2 years</li>
            <li><strong>Health data:</strong> Duration of account plus 1 year (for continuity if you return)</li>
            <li><strong>Billing records:</strong> 7 years (legal requirement)</li>
            <li><strong>Anonymised analytics:</strong> Indefinitely</li>
          </ul>
          <p>You can request earlier deletion as described in Section 9.</p>

          <h2>9. Your Rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of your personal data</li>
            <li><strong>Rectification:</strong> Correct inaccurate information</li>
            <li><strong>Erasure:</strong> Request deletion of your data (&quot;right to be forgotten&quot;)</li>
            <li><strong>Restriction:</strong> Limit how we process your data</li>
            <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
            <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
            <li><strong>Withdraw consent:</strong> At any time, without affecting prior processing</li>
          </ul>
          <p>To exercise these rights, contact us at <a href="mailto:privacy@careconnect.ai">privacy@careconnect.ai</a>.</p>

          <h2>10. International Transfers</h2>
          <p>
            Your data is primarily stored and processed in the UK. If we transfer data outside the UK, we ensure appropriate safeguards are in place, such as Standard Contractual Clauses approved by the ICO.
          </p>

          <h2>11. Children&apos;s Privacy</h2>
          <p>
            Our service is designed for adult caregivers monitoring elderly relatives. We do not knowingly collect data from children under 18. Our service should not be used to monitor anyone under 18 years of age.
          </p>

          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. We will notify you of material changes via email or in-app notification. Continued use of our service after changes constitutes acceptance.
          </p>

          <h2>13. Contact Us</h2>
          <p>For privacy-related enquiries:</p>
          <ul>
            <li>Email: <a href="mailto:privacy@careconnect.ai">privacy@careconnect.ai</a></li>
            <li>Data Protection Officer: dpo@careconnect.ai</li>
            <li>Post: CareConnect AI Ltd, 123 Innovation Way, London, EC2A 4NE</li>
          </ul>

          <h2>14. Supervisory Authority</h2>
          <p>
            You have the right to lodge a complaint with the Information Commissioner&apos;s Office (ICO) if you believe we have not handled your data appropriately:
          </p>
          <p>
            Information Commissioner&apos;s Office<br />
            Wycliffe House, Water Lane<br />
            Wilmslow, Cheshire, SK9 5AF<br />
            <a href="https://ico.org.uk">ico.org.uk</a>
          </p>
        </div>
      </div>
    </div>
  );
}
