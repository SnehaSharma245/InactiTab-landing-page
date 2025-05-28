"use client";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

// Benefits list
const benefits = [
  "Reduce browser memory usage by up to 80%",
  "Improve system performance and battery life",
  "Stay focused with automatic tab cleanup",
  "Protect important tabs with smart whitelist",
  "Customize settings to match your workflow",
  "Works seamlessly in the background",
];

export default function BenefitsSection() {
  return (
    <section
      id="installation"
      className="py-20 bg-[#0f1a34]/50 backdrop-blur-sm scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#1a73e8]">
              Why Choose InactiTab?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Transform your browsing experience with intelligent tab management
              that works automatically in the background.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#1a73e8] flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="bg-[#1a73e8] rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="mb-6 opacity-90">
                Join thousands of users who have already improved their browsing
                experience
              </p>
              <Button
                size="lg"
                className="bg-white text-[#1a73e8] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold"
              >
                Install Now - It's Free
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
