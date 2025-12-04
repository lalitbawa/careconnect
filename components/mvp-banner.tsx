"use client";

export function MVPBanner() {
  return (
    <div className="bg-emerald-600 text-white text-center py-2 px-4 text-sm font-medium fixed top-0 left-0 right-0 z-[200]">
      <span className="hidden sm:inline">
        This is a non-functional MVP only to demonstrate the features of CareConnect. Use desktop for the best experience.
      </span>
      <span className="sm:hidden">
        Non-functional MVP demo. Best viewed on desktop.
      </span>
    </div>
  );
}
