import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import AuthSessionProvider from "@/components/providers/session-provider";
import { MVPBanner } from "@/components/mvp-banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CareConnect AI | Predictive Eldercare for Family Caregivers",
  description:
    "Transform your loved one's wearable data into peace of mind. Daily wellbeing scores, plain-English summaries, 7-day predictive forecasting, and proactive alerts. UK-based, GDPR compliant.",
  keywords: ["eldercare", "caregiving", "fitbit", "apple watch", "health monitoring", "elderly care", "UK", "GDPR"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("antialiased", inter.className)}>
        <AuthSessionProvider>
          <MVPBanner />
          {children}
        </AuthSessionProvider>
      </body>
    </html>
  );
}
