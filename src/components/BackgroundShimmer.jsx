"use client";
import React, { useState, useEffect } from "react";

const BackgroundShimmer = () => {
  // Use state to store the random positions to ensure they remain consistent after hydration
  const [stars, setStars] = useState([]);

  // Generate stars only on the client side to avoid hydration mismatch
  useEffect(() => {
    const generateStars = () => {
      return Array(20)
        .fill(0)
        .map(() => ({
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 2 + 1}px`,
          height: `${Math.random() * 2 + 1}px`,
          opacity: Math.random() * 0.4 + 0.2,
          animationDuration: `${Math.random() * 15 + 20}s`,
          animationDelay: `${Math.random() * 5}s`,
        }));
    };

    setStars(generateStars());
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Enhanced dark gradient background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#081022] via-[#0c1428] to-[#102044] animate-gradient"
        style={{
          backgroundSize: "300% 300%",
        }}
      ></div>

      {/* Subtle shimmer overlay */}
      <div className="shimmer-bg animate-shimmer"></div>

      {/* Top-left pulse with reduced opacity */}
      <div
        className="absolute -top-20 -left-20 w-[25rem] h-[25rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(66,135,245,0.3) 0%, rgba(26,115,232,0.1) 40%, transparent 50%)",
          opacity: 0.08,
          animation: "pulse 8s infinite ease-in-out",
        }}
      ></div>

      {/* Bottom-right pulse with reduced opacity */}
      <div
        className="absolute bottom-0 right-0 w-[20rem] h-[20rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(66,135,245,0.25) 0%, rgba(26,115,232,0.1) 50%, transparent 75%)",
          opacity: 0.1,
          animation: "pulse 8s infinite ease-in-out 2s",
        }}
      ></div>

      {/* Center pulse with higher opacity */}
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(66,135,245,0.3) 0%, rgba(26,115,232,0.1) 40%, transparent 50%)",
          opacity: 0.15,
          animation: "pulse 15s infinite ease-in-out 1s",
        }}
      ></div>

      {/* Enhanced star-like dots - Only render on client side after stars are generated */}
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-blue-400"
          style={{
            top: star.top,
            left: star.left,
            width: star.width,
            height: star.height,
            opacity: star.opacity,
            boxShadow: "0 0 5px rgba(66,135,245,0.5)",
            animation: `float ${star.animationDuration} infinite ease-in-out ${star.animationDelay}`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default BackgroundShimmer;
