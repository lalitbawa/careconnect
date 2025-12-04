"use client";

import { Logo } from "@/components/logo";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/button";
import { PasswordInput } from "@/components/ui/password-input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type FormValues = z.infer<typeof formSchema>;

export default function SignupPage() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          password: values.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      // Auto-login after successful signup
      const signInResult = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (signInResult?.error) {
        // Still redirect to login if auto-login fails
        router.push("/login");
      } else {
        router.push("/dashboard");
        router.refresh();
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Marketing Section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-emerald-50 to-teal-50 p-12 flex-col items-start">
        <div className="mb-8">
          <Logo />
        </div>

        <div className="py-10">
          <h1 className="text-4xl leading-tight font-semibold">
            Start Your{" "}
            <span className="text-emerald-600">14-Day</span>
            <br />
            <span className="text-emerald-600">Free Trial</span> Today
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Join thousands of UK caregivers who&apos;ve transformed worry into peace of mind.
            Connect your loved one&apos;s wearable and start receiving daily wellbeing insights.
          </p>

          <div className="mt-8 space-y-4">
            <FeatureItem icon="check" text="No credit card required" />
            <FeatureItem icon="check" text="Works with Fitbit & Apple Watch" />
            <FeatureItem icon="check" text="Daily Peace of Mind Score" />
            <FeatureItem icon="check" text="7-day predictive forecasting" />
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-emerald-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            UK-based & GDPR Compliant
          </div>
        </div>
      </div>

      {/* Right Signup Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        {/* Logo (only show on mobile) */}
        <div className="lg:hidden mb-8">
          <Logo />
        </div>

        {/* Signup Container */}
        <div className="w-full max-w-md space-y-6">
          {/* Welcome Text */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Start your free trial</h1>
            <p className="text-gray-500 text-sm mt-1">14 days free, no credit card required</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Signup Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" type="email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="Create password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="Confirm password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Sign Up Button */}
              <Button
                type="submit"
                as="button"
                className="w-full bg-[linear-gradient(195deg,_#34D399_17.78%,_#059669_75.71%)] hover:opacity-90 transition-opacity disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? "Creating Account..." : "Start Free Trial"}
              </Button>

              <hr className="border-gray-200" />

              {/* Google Sign Up */}
              <Button
                type="button"
                as="button"
                className="w-full gap-2 rounded-[6px] bg-[linear-gradient(181deg,_#5E5E5E_18.12%,_#000_99.57%)] hover:opacity-90 transition-opacity"
              >
                <GoogleIcon />
                <span>Or sign up with Google</span>
              </Button>
            </form>
          </Form>

          {/* Sign In Link */}
          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-emerald-600 hover:text-emerald-700">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureItem = ({ icon, text }: { icon: string; text: string }) => (
  <div className="flex items-center gap-3">
    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <span className="text-gray-700">{text}</span>
  </div>
);


const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M19.8684 10.2281C19.8693 9.54663 19.8113 8.8664 19.695 8.19482H10.1992V12.046H15.638C15.5267 12.6611 15.2911 13.2475 14.9455 13.7697C14.5999 14.292 14.1513 14.7393 13.6269 15.0848V17.5846H16.8728C18.7734 15.8444 19.8684 13.271 19.8684 10.2281Z" fill="#4285F4"/>
        <path d="M10.1997 19.9998C12.9169 19.9998 15.2049 19.1137 16.8733 17.586L13.6274 15.0861C12.7239 15.6944 11.5604 16.0416 10.1997 16.0416C7.57328 16.0416 5.34408 14.2834 4.54693 11.9141H1.20312V14.4903C2.0412 16.1465 3.32629 17.5387 4.91494 18.5116C6.50358 19.4844 8.33324 19.9997 10.1997 19.9998Z" fill="#34A853"/>
        <path d="M4.54686 11.9141C4.12543 10.6726 4.12543 9.32806 4.54686 8.08651V5.51025H1.20305C0.498032 6.90345 0.130859 8.44108 0.130859 10.0003C0.130859 11.5595 0.498032 13.0972 1.20305 14.4904L4.54686 11.9141Z" fill="#FBBC04"/>
        <path d="M10.1997 3.95879C11.6356 3.93549 13.0231 4.47429 14.0623 5.45872L16.9362 2.60469C15.1139 0.904883 12.6996 -0.0283412 10.1997 0.000656061C8.33324 0.000740536 6.50358 0.515984 4.91494 1.48886C3.32629 2.46174 2.0412 3.85397 1.20312 5.5101L4.54693 8.08636C5.34408 5.71704 7.57328 3.95879 10.1997 3.95879Z" fill="#EA4335"/>
    </svg>
)
