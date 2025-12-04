"use client";

import { Logo } from "@/components/logo";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { Switch } from "@/components/ui/switch";
import { PasswordInput } from "@/components/ui/password-input";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberMe: z.boolean().default(false),
});

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setError(null);
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      if (result?.error) {
        setError(result.error);
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
            Predictive{" "}
            <span className="text-emerald-600">Eldercare</span>
            <br />
            Peace of Mind for{" "}
            <span className="text-emerald-600">Caregivers</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Check on your loved one&apos;s wellbeing anytime. View their daily Peace of Mind Score,
            activity patterns, and get alerts when something changes.
          </p>
          <div className="h-[400px] py-10 relative">
            <WellbeingPreview />
          </div>

          <div className="flex items-center gap-2 text-sm text-emerald-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            UK-based & GDPR Compliant
          </div>
        </div>
      </div>

      {/* Right Login Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        {/* Logo (only show on mobile) */}
        <div className="lg:hidden mb-8">
          <Logo />
        </div>

        {/* Login Container */}
        <div className="w-full max-w-md space-y-6">
          {/* Welcome Text */}
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Nice to see you again</h1>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Login Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                      <PasswordInput placeholder="Enter password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <div className="flex items-center space-x-2">
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-emerald-500"
                      />
                      <Label>Remember me</Label>
                    </div>
                  )}
                />
                <Link
                  href="/forgot-password"
                  className="text-sm text-emerald-600 hover:text-emerald-700"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign In Button */}
              <Button
                as="button"
                type="submit"
                disabled={isLoading}
                className="w-full bg-[linear-gradient(195deg,_#34D399_17.78%,_#059669_75.71%)] hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
              <hr className="border-gray-200" />
              {/* Google Sign In */}
              <Button
                as="button"
                type="button"
                className="w-full gap-2 rounded-[6px] bg-[linear-gradient(181deg,_#5E5E5E_18.12%,_#000_99.57%)] hover:opacity-90 transition-opacity"
              >
                <GoogleIcon />
                <span>Or sign in with Google</span>
              </Button>
            </form>
          </Form>

          {/* Sign Up Link */}
          <div className="text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-emerald-600 hover:text-emerald-700">
              Start your free trial
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const WellbeingPreview = () => {
  const weeklyData = [
    { day: "Mon", score: 85, status: "good" },
    { day: "Tue", score: 82, status: "good" },
    { day: "Wed", score: 78, status: "fair" },
    { day: "Thu", score: 88, status: "good" },
    { day: "Fri", score: 91, status: "excellent" },
    { day: "Sat", score: 87, status: "good" },
    { day: "Sun", score: 89, status: "good" },
  ];

  return (
    <div className="relative w-full h-full">
      {/* Main Dashboard Card */}
      <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-gray-500">Mum&apos;s Wellbeing</p>
            <h3 className="text-xl font-semibold text-gray-800">Daily Overview</h3>
          </div>
          <div className="bg-emerald-50 px-3 py-1 rounded-full">
            <span className="text-emerald-600 text-sm font-medium">Live</span>
          </div>
        </div>

        {/* Peace of Mind Score */}
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm">Peace of Mind Score</p>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-white">87</span>
                <span className="text-emerald-200 text-sm">/ 100</span>
              </div>
              <p className="text-emerald-100 text-xs mt-1">Looking good today</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Weekly Trend */}
        <div className="mb-4">
          <p className="text-sm text-gray-500 mb-3">This Week</p>
          <div className="flex items-end justify-between gap-2 h-20">
            {weeklyData.map((day, i) => (
              <div key={i} className="flex flex-col items-center flex-1">
                <div
                  className={`w-full rounded-t transition-all ${
                    day.status === "excellent" ? "bg-emerald-500" :
                    day.status === "good" ? "bg-emerald-400" :
                    "bg-amber-400"
                  }`}
                  style={{ height: `${day.score * 0.6}px` }}
                />
                <span className="text-xs text-gray-400 mt-1">{day.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-500">Sleep</p>
            <p className="font-semibold text-gray-800">7.2h</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-500">Steps</p>
            <p className="font-semibold text-gray-800">4,521</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <p className="text-xs text-gray-500">Heart</p>
            <p className="font-semibold text-gray-800">68 bpm</p>
          </div>
        </div>
      </div>

      {/* Floating Alert Card */}
      <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-3 border border-gray-100 max-w-[200px]">
        <div className="flex items-start gap-2">
          <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <p className="text-xs font-medium text-gray-800">All Clear</p>
            <p className="text-xs text-gray-500">No concerns detected</p>
          </div>
        </div>
      </div>
    </div>
  );
};


const GoogleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M19.8684 10.2281C19.8693 9.54663 19.8113 8.8664 19.695 8.19482H10.1992V12.046H15.638C15.5267 12.6611 15.2911 13.2475 14.9455 13.7697C14.5999 14.292 14.1513 14.7393 13.6269 15.0848V17.5846H16.8728C18.7734 15.8444 19.8684 13.271 19.8684 10.2281Z" fill="#4285F4"/>
        <path d="M10.1997 19.9998C12.9169 19.9998 15.2049 19.1137 16.8733 17.586L13.6274 15.0861C12.7239 15.6944 11.5604 16.0416 10.1997 16.0416C7.57328 16.0416 5.34408 14.2834 4.54693 11.9141H1.20312V14.4903C2.0412 16.1465 3.32629 17.5387 4.91494 18.5116C6.50358 19.4844 8.33324 19.9997 10.1997 19.9998Z" fill="#34A853"/>
        <path d="M4.54686 11.9141C4.12543 10.6726 4.12543 9.32806 4.54686 8.08651V5.51025H1.20305C0.498032 6.90345 0.130859 8.44108 0.130859 10.0003C0.130859 11.5595 0.498032 13.0972 1.20305 14.4904L4.54686 11.9141Z" fill="#FBBC04"/>
        <path d="M10.1997 3.95879C11.6356 3.93549 13.0231 4.47429 14.0623 5.45872L16.9362 2.60469C15.1139 0.904883 12.6996 -0.0283412 10.1997 0.000656061C8.33324 0.000740536 6.50358 0.515984 4.91494 1.48886C3.32629 2.46174 2.0412 3.85397 1.20312 5.5101L4.54693 8.08636C5.34408 5.71704 7.57328 3.95879 10.1997 3.95879Z" fill="#EA4335"/>
    </svg>
)
