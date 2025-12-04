import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | CareConnect AI",
  description: "CareConnect AI Terms of Service. Read the terms and conditions for using our predictive eldercare platform.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: December 2024</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12 prose prose-gray max-w-none">

          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using CareConnect AI (&quot;the Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, you may not use the Service.
          </p>
          <p>
            CareConnect AI Ltd (&quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a company registered in England and Wales (Company Number: 12345678), with registered address at 123 Innovation Way, London, EC2A 4NE.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            CareConnect AI is a predictive eldercare platform that analyses wearable device data (from Fitbit, Apple Watch, and similar devices) to provide:
          </p>
          <ul>
            <li>Daily Peace of Mind Scores</li>
            <li>Plain-English wellbeing summaries</li>
            <li>7-day predictive health forecasts</li>
            <li>Proactive alerts when patterns change</li>
          </ul>

          <h2>3. Important Limitations</h2>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 not-prose mb-6">
            <h3 className="font-bold text-amber-800 mb-2">Medical Disclaimer</h3>
            <p className="text-amber-700 text-sm">
              CareConnect AI is NOT a medical device. It does not diagnose, treat, cure, or prevent any disease or medical condition. The insights and predictions provided are for informational purposes only and should not replace professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for medical concerns.
            </p>
          </div>
          <p>
            Our Service uses consumer wearable data which has limitations in accuracy. The Peace of Mind Score and predictive forecasts are based on pattern analysis and should be considered supplementary information, not medical guidance.
          </p>

          <h2>4. Eligibility</h2>
          <p>To use the Service, you must:</p>
          <ul>
            <li>Be at least 18 years of age</li>
            <li>Have legal capacity to enter into a binding agreement</li>
            <li>Reside in the United Kingdom or a supported region</li>
            <li>Have appropriate consent from the person being monitored</li>
          </ul>

          <h2>5. User Accounts</h2>
          <h3>5.1 Account Creation</h3>
          <p>
            You must create an account to use the Service. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate.
          </p>

          <h3>5.2 Account Security</h3>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorised use.
          </p>

          <h3>5.3 Account Termination</h3>
          <p>
            We reserve the right to suspend or terminate your account if you violate these Terms or if we reasonably believe your use poses a risk to the Service or other users.
          </p>

          <h2>6. Consent for Monitoring</h2>
          <p>
            By connecting a wearable device to monitor another person (&quot;the Monitored Person&quot;), you represent and warrant that:
          </p>
          <ul>
            <li>You have obtained informed consent from the Monitored Person or their legal guardian</li>
            <li>The Monitored Person understands what data is being collected and how it will be used</li>
            <li>You will promptly disconnect the device if consent is withdrawn</li>
            <li>You will use the information only for the purpose of caring for the Monitored Person</li>
          </ul>

          <h2>7. Subscription and Payment</h2>
          <h3>7.1 Subscription Plans</h3>
          <p>We offer the following subscription options:</p>
          <ul>
            <li><strong>Free Trial:</strong> 14 days, no payment required</li>
            <li><strong>Core Plan:</strong> £29 per month</li>
            <li><strong>Annual Plan:</strong> £290 per year (equivalent to 2 months free)</li>
          </ul>

          <h3>7.2 Billing</h3>
          <p>
            Subscriptions are billed in advance on a recurring basis. By providing payment information, you authorise us to charge the applicable fees to your payment method.
          </p>

          <h3>7.3 Cancellation</h3>
          <p>
            You may cancel your subscription at any time through your account settings. Cancellation takes effect at the end of the current billing period. No refunds are provided for partial billing periods, except as required by law.
          </p>

          <h3>7.4 Price Changes</h3>
          <p>
            We reserve the right to change subscription prices. We will provide at least 30 days&apos; notice of price increases. Continued use after the price change constitutes acceptance.
          </p>

          <h2>8. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the Service for any unlawful purpose</li>
            <li>Monitor anyone without their knowledge or consent</li>
            <li>Attempt to gain unauthorised access to our systems</li>
            <li>Reverse engineer or attempt to extract source code</li>
            <li>Share your account credentials with others</li>
            <li>Use the Service in a way that could harm or overload our infrastructure</li>
            <li>Misrepresent our insights as medical diagnoses</li>
          </ul>

          <h2>9. Intellectual Property</h2>
          <p>
            The Service, including all content, features, and functionality, is owned by CareConnect AI Ltd and protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works without our express written permission.
          </p>

          <h2>10. Third-Party Services</h2>
          <p>
            Our Service integrates with third-party platforms (Fitbit, Apple Health). Your use of these platforms is subject to their respective terms of service and privacy policies. We are not responsible for the actions or policies of third-party services.
          </p>

          <h2>11. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law:
          </p>
          <ul>
            <li>The Service is provided &quot;as is&quot; without warranties of any kind</li>
            <li>We do not guarantee uninterrupted or error-free service</li>
            <li>We are not liable for any indirect, incidental, special, consequential, or punitive damages</li>
            <li>Our total liability shall not exceed the fees you paid in the 12 months preceding the claim</li>
          </ul>
          <p>
            Nothing in these Terms limits our liability for death or personal injury caused by negligence, fraud, or any liability that cannot be excluded by law.
          </p>

          <h2>12. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless CareConnect AI Ltd, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of the Service or violation of these Terms.
          </p>

          <h2>13. Changes to Terms</h2>
          <p>
            We may modify these Terms at any time. We will notify you of material changes via email or in-app notification at least 30 days before they take effect. Your continued use after changes constitutes acceptance.
          </p>

          <h2>14. Governing Law and Disputes</h2>
          <p>
            These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <h2>15. Severability</h2>
          <p>
            If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
          </p>

          <h2>16. Entire Agreement</h2>
          <p>
            These Terms, together with our Privacy Policy and any other policies referenced herein, constitute the entire agreement between you and CareConnect AI Ltd regarding the Service.
          </p>

          <h2>17. Contact Us</h2>
          <p>For questions about these Terms:</p>
          <ul>
            <li>Email: <a href="mailto:legal@careconnect.ai">legal@careconnect.ai</a></li>
            <li>Post: CareConnect AI Ltd, 123 Innovation Way, London, EC2A 4NE</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
