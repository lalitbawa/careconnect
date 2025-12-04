import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CareConnect AI | Sign In",
  description:
    "Sign in to CareConnect AI to monitor your loved one's wellbeing with daily Peace of Mind scores and predictive health insights.",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
