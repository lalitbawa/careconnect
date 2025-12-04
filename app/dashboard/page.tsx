"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/button";

type DeviceType = "fitbit" | "applewatch" | "other" | null;
type ModalStep = "searching" | "devices" | "questions" | "connecting" | null;

interface FoundDevice {
  id: string;
  name: string;
  type: string;
  signal: "strong" | "medium" | "weak";
}

interface SetupAnswers {
  personName: string;
  relationship: string;
  age: string;
  healthConditions: string[];
}

const sampleDevices: Record<string, FoundDevice[]> = {
  fitbit: [
    { id: "fb1", name: "Fitbit Charge 5", type: "fitbit", signal: "strong" },
    { id: "fb2", name: "Fitbit Sense 2", type: "fitbit", signal: "medium" },
    { id: "fb3", name: "Fitbit Versa 4", type: "fitbit", signal: "weak" },
  ],
  applewatch: [
    { id: "aw1", name: "Apple Watch Series 9", type: "applewatch", signal: "strong" },
    { id: "aw2", name: "Apple Watch SE", type: "applewatch", signal: "medium" },
    { id: "aw3", name: "Apple Watch Ultra 2", type: "applewatch", signal: "weak" },
  ],
  other: [
    { id: "ot1", name: "Garmin Venu 3", type: "garmin", signal: "strong" },
    { id: "ot2", name: "Samsung Galaxy Watch 6", type: "samsung", signal: "medium" },
    { id: "ot3", name: "Xiaomi Smart Band 8", type: "xiaomi", signal: "weak" },
  ],
};

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [showDeviceModal, setShowDeviceModal] = useState(false);
  const [selectedDeviceType, setSelectedDeviceType] = useState<DeviceType>(null);
  const [modalStep, setModalStep] = useState<ModalStep>(null);
  const [foundDevices, setFoundDevices] = useState<FoundDevice[]>([]);
  const [selectedDevice, setSelectedDevice] = useState<FoundDevice | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [setupAnswers, setSetupAnswers] = useState<SetupAnswers>({
    personName: "",
    relationship: "",
    age: "",
    healthConditions: [],
  });
  const [isDeviceConnected, setIsDeviceConnected] = useState(false);
  const [connectedDevice, setConnectedDevice] = useState<FoundDevice | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const openDeviceModal = (device: DeviceType) => {
    setSelectedDeviceType(device);
    setShowDeviceModal(true);
    setModalStep("searching");
    setSelectedDevice(null);
    setCurrentQuestion(0);
    setSetupAnswers({
      personName: "",
      relationship: "",
      age: "",
      healthConditions: [],
    });

    // Simulate searching for 2-3 seconds
    setTimeout(() => {
      setFoundDevices(sampleDevices[device || "other"]);
      setModalStep("devices");
    }, 2500);
  };

  const closeModal = () => {
    setShowDeviceModal(false);
    setSelectedDeviceType(null);
    setModalStep(null);
    setFoundDevices([]);
    setSelectedDevice(null);
  };

  const handleDeviceSelect = (device: FoundDevice) => {
    setSelectedDevice(device);
    setModalStep("questions");
    setCurrentQuestion(0);
  };

  const handleAnswerSelect = (answer: string) => {
    const questions = getQuestions();
    const currentQ = questions[currentQuestion];

    if (currentQ.field === "healthConditions") {
      const conditions = [...setupAnswers.healthConditions];
      if (conditions.includes(answer)) {
        conditions.splice(conditions.indexOf(answer), 1);
      } else {
        conditions.push(answer);
      }
      setSetupAnswers({ ...setupAnswers, healthConditions: conditions });
    } else {
      setSetupAnswers({ ...setupAnswers, [currentQ.field]: answer });

      // Move to next question or finish
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Finish setup - show connecting animation then complete
        setModalStep("connecting");
        setTimeout(() => {
          setIsDeviceConnected(true);
          setConnectedDevice(selectedDevice);
          closeModal();
        }, 2000);
      }
    }
  };

  const handleNextQuestion = () => {
    const questions = getQuestions();
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setModalStep("connecting");
      setTimeout(() => {
        setIsDeviceConnected(true);
        setConnectedDevice(selectedDevice);
        closeModal();
      }, 2000);
    }
  };

  const getQuestions = () => [
    {
      field: "personName",
      question: "Who will be wearing this device?",
      options: ["Mum", "Dad", "Grandma", "Grandpa", "Other"],
    },
    {
      field: "relationship",
      question: "What is your relationship to them?",
      options: ["Son/Daughter", "Grandchild", "Spouse", "Caregiver", "Other"],
    },
    {
      field: "age",
      question: "What is their approximate age?",
      options: ["60-69", "70-79", "80-89", "90+"],
    },
    {
      field: "healthConditions",
      question: "Do they have any health conditions we should monitor? (Select all that apply)",
      options: ["Heart condition", "Diabetes", "Mobility issues", "Memory concerns", "None"],
      multiSelect: true,
    },
  ];

  const getDeviceName = (device: DeviceType) => {
    switch (device) {
      case "fitbit":
        return "Fitbit";
      case "applewatch":
        return "Apple Watch";
      case "other":
        return "Wearable Device";
      default:
        return "Device";
    }
  };

  const getSignalIcon = (signal: "strong" | "medium" | "weak") => {
    return (
      <div className="flex items-end gap-0.5">
        <div className={`w-1 h-2 rounded-sm ${signal === "weak" || signal === "medium" || signal === "strong" ? "bg-emerald-500" : "bg-gray-300"}`}></div>
        <div className={`w-1 h-3 rounded-sm ${signal === "medium" || signal === "strong" ? "bg-emerald-500" : "bg-gray-300"}`}></div>
        <div className={`w-1 h-4 rounded-sm ${signal === "strong" ? "bg-emerald-500" : "bg-gray-300"}`}></div>
      </div>
    );
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600"></div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  // Sample data for connected device
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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Logo />
            <div className="flex items-center gap-4">
              <span className="text-gray-600 text-sm">
                Welcome, {session.user?.name}
              </span>
              <Button
                as="button"
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-gray-800 text-white hover:bg-gray-900 text-sm px-4 py-2"
              >
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!isDeviceConnected ? (
          /* No Device Connected State */
          <div className="bg-white rounded-xl p-12 border border-gray-100 text-center">
            <div className="max-w-md mx-auto">
              {/* Watch Icon */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-emerald-50 flex items-center justify-center">
                <svg className="w-12 h-12 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                No Device Connected
              </h2>
              <p className="text-gray-500 mb-8">
                Connect your loved one&apos;s wearable device to start receiving real-time health insights, daily Peace of Mind scores, and proactive alerts.
              </p>

              {/* Device Connection Buttons */}
              <div className="space-y-3">
                <Button
                  as="button"
                  onClick={() => openDeviceModal("fitbit")}
                  className="w-full bg-[linear-gradient(195deg,_#34D399_17.78%,_#059669_75.71%)] px-6 py-3 flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                  Connect Fitbit
                </Button>

                <Button
                  as="button"
                  onClick={() => openDeviceModal("applewatch")}
                  className="w-full bg-gray-800 text-white hover:bg-gray-900 px-6 py-3 flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Connect Apple Watch
                </Button>

                <Button
                  as="button"
                  variant="secondary"
                  onClick={() => openDeviceModal("other")}
                  className="w-full !text-emerald-600 border-emerald-200 hover:bg-emerald-50 px-6 py-3 flex items-center justify-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Connect Other Watches
                </Button>
              </div>

              {/* Supported Devices Info */}
              <p className="text-xs text-gray-400 mt-6">
                Supports Fitbit, Apple Watch, Garmin, Samsung Galaxy Watch, and more
              </p>
            </div>
          </div>
        ) : (
          /* Connected Device Dashboard */
          <>
            {/* Connected Device Banner */}
            <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-6 mb-8 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">
                      {connectedDevice?.name} Connected
                    </h2>
                    <p className="text-emerald-100 text-sm">
                      Monitoring {setupAnswers.personName || "your loved one"}&apos;s wellbeing
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  <span className="text-sm">Live</span>
                </div>
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Peace of Mind Score */}
              <div className="lg:col-span-2 bg-white rounded-xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray-500">{setupAnswers.personName || "Your Loved One"}&apos;s Wellbeing</p>
                    <h3 className="text-xl font-semibold text-gray-800">Daily Overview</h3>
                  </div>
                  <div className="bg-emerald-50 px-3 py-1 rounded-full">
                    <span className="text-emerald-600 text-sm font-medium">Live</span>
                  </div>
                </div>

                {/* Score Card */}
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl p-6 mb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-emerald-100 text-sm">Peace of Mind Score</p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-white">87</span>
                        <span className="text-emerald-200 text-lg">/ 100</span>
                      </div>
                      <p className="text-emerald-100 text-sm mt-2">Looking good today</p>
                    </div>
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Weekly Trend */}
                <div>
                  <p className="text-sm text-gray-500 mb-3">This Week</p>
                  <div className="flex items-end justify-between gap-3 h-32">
                    {weeklyData.map((day, i) => (
                      <div key={i} className="flex flex-col items-center flex-1">
                        <div
                          className={`w-full rounded-t transition-all ${
                            day.status === "excellent" ? "bg-emerald-500" :
                            day.status === "good" ? "bg-emerald-400" :
                            "bg-amber-400"
                          }`}
                          style={{ height: `${day.score}px` }}
                        />
                        <span className="text-xs text-gray-400 mt-2">{day.day}</span>
                        <span className="text-xs font-medium text-gray-600">{day.score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-4">Today&apos;s Stats</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Sleep</p>
                          <p className="font-semibold text-gray-800">7.2 hours</p>
                        </div>
                      </div>
                      <span className="text-emerald-600 text-sm">Good</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Steps</p>
                          <p className="font-semibold text-gray-800">4,521</p>
                        </div>
                      </div>
                      <span className="text-emerald-600 text-sm">Active</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Heart Rate</p>
                          <p className="font-semibold text-gray-800">68 bpm</p>
                        </div>
                      </div>
                      <span className="text-emerald-600 text-sm">Normal</span>
                    </div>
                  </div>
                </div>

                {/* All Clear Card */}
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-emerald-800">All Clear</p>
                      <p className="text-sm text-emerald-600">No concerns detected</p>
                    </div>
                  </div>
                  <p className="text-sm text-emerald-700">
                    Everything looks normal. {setupAnswers.personName || "Your loved one"} had a restful night and is moving about as expected.
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </main>

      {/* Device Connection Modal */}
      {showDeviceModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Searching Step */}
            {modalStep === "searching" && (
              <div className="text-center">
                {/* Animated Searching Icon */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full border-4 border-emerald-200 animate-ping opacity-20"></div>
                  <div className="absolute inset-2 rounded-full border-4 border-emerald-300 animate-ping opacity-30" style={{ animationDelay: "200ms" }}></div>
                  <div className="absolute inset-4 rounded-full border-4 border-emerald-400 animate-ping opacity-40" style={{ animationDelay: "400ms" }}></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center animate-pulse">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                      </svg>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Searching for {getDeviceName(selectedDeviceType)}
                </h3>

                <p className="text-gray-500 mb-6">
                  Looking for nearby available devices...
                </p>

                <div className="bg-blue-50 rounded-lg p-4 mb-6">
                  <div className="flex items-center justify-center gap-2 text-blue-700">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.71 7.71L12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"/>
                    </svg>
                    <span className="text-sm font-medium">Please keep your Bluetooth on</span>
                  </div>
                </div>

                <div className="flex justify-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>

                <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-sm">
                  Cancel
                </button>
              </div>
            )}

            {/* Devices Found Step */}
            {modalStep === "devices" && (
              <div>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-100 flex items-center justify-center">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    Devices Found
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Select the device you want to connect
                  </p>
                </div>

                <div className="space-y-3">
                  {foundDevices.map((device) => (
                    <button
                      key={device.id}
                      onClick={() => handleDeviceSelect(device)}
                      className="w-full p-4 rounded-xl border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-all flex items-center justify-between text-left"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{device.name}</p>
                          <p className="text-xs text-gray-500">Ready to connect</p>
                        </div>
                      </div>
                      {getSignalIcon(device.signal)}
                    </button>
                  ))}
                </div>

                <button onClick={closeModal} className="w-full mt-4 text-gray-500 hover:text-gray-700 text-sm">
                  Cancel
                </button>
              </div>
            )}

            {/* Questions Step */}
            {modalStep === "questions" && (
              <div>
                <div className="text-center mb-6">
                  <div className="flex justify-center gap-1 mb-4">
                    {getQuestions().map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full ${i <= currentQuestion ? "bg-emerald-500" : "bg-gray-200"}`}
                      />
                    ))}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {getQuestions()[currentQuestion].question}
                  </h3>
                </div>

                <div className="space-y-3">
                  {getQuestions()[currentQuestion].options.map((option) => {
                    const currentQ = getQuestions()[currentQuestion];
                    const isSelected = currentQ.field === "healthConditions"
                      ? setupAnswers.healthConditions.includes(option)
                      : setupAnswers[currentQ.field as keyof SetupAnswers] === option;

                    return (
                      <button
                        key={option}
                        onClick={() => handleAnswerSelect(option)}
                        className={`w-full p-4 rounded-xl border transition-all text-left ${
                          isSelected
                            ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                            : "border-gray-200 hover:border-emerald-300 hover:bg-gray-50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{option}</span>
                          {isSelected && (
                            <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {getQuestions()[currentQuestion].multiSelect && (
                  <Button
                    as="button"
                    onClick={handleNextQuestion}
                    className="w-full mt-4 bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    Continue
                  </Button>
                )}

                <button onClick={closeModal} className="w-full mt-4 text-gray-500 hover:text-gray-700 text-sm">
                  Cancel
                </button>
              </div>
            )}

            {/* Connecting Step */}
            {modalStep === "connecting" && (
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg className="w-10 h-10 text-emerald-600 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Connecting to {selectedDevice?.name}
                </h3>
                <p className="text-gray-500">
                  Please wait while we set up your device...
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
