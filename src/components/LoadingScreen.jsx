"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function LoadingScreen() {
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loadingProgress < 100) {
        setLoadingProgress((prev) => Math.min(prev + Math.random() * 10, 100));
      } else {
        setLoadingComplete(true);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [loadingProgress]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0c1428]">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="mb-8 relative w-24 h-24">
          <Image
            src="/favicon.png"
            alt="InactiTab Logo"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a73e8] tracking-tight">
          InactiTab
        </h1>

        {/* Loading Progress Bar */}
        <div className="w-64 md:w-80 h-2 bg-gray-700 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-[#1a73e8]"
            style={{ width: `${loadingProgress}%` }}
          />
        </div>

        {/* Loading Text */}
        <p className="text-gray-300 text-sm">
          {loadingComplete
            ? "Ready to manage your tabs!"
            : loadingMessages[
                Math.floor((loadingProgress / 100) * loadingMessages.length)
              ]}
        </p>
      </div>

      {/* Footer text */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-gray-500 text-xs">
        <p>© {new Date().getFullYear()} InactiTab</p>
      </div>
    </div>
  );
}

// Array of loading messages that change during the loading process
const loadingMessages = [
  "Initializing...",
  "Scanning tabs...",
  "Analyzing browser performance...",
  "Preparing tab management...",
  "Almost there...",
  "Ready to boost your productivity!",
];

export default LoadingScreen;
