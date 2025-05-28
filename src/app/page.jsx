"use client";

import BackgroundShimmer from "@/components/BackgroundShimmer";
import HeroSection from "@/components/landing-page/HeroSection";
import FeaturesSection from "@/components/landing-page/FeaturesSection";
import Installation from "@/components/landing-page/Installation";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Add the shimmer background */}
      <BackgroundShimmer />

      {/* Main content sections */}
      <HeroSection />
      <FeaturesSection />
      <Installation />
    </main>
  );
}
