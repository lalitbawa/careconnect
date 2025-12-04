import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "CareConnect AI | Predictive Eldercare for Family Caregivers",
  description:
    "Transform your loved one's wearable data into peace of mind. Daily wellbeing scores, plain-English summaries, 7-day predictive forecasting, and proactive alerts. UK-based, GDPR compliant.",
  keywords: ["eldercare", "caregiving", "fitbit", "apple watch", "health monitoring", "elderly care", "UK", "GDPR"],
};

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
