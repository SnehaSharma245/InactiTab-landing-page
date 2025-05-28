"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Settings,
  Shield,
  Timer,
  Zap,
  Moon,
  Eye,
  Music,
  Archive,
} from "lucide-react";

// Feature data with consistent Lucide React icons
const features = [
  {
    icon: <Timer className="w-5 h-5" />,
    title: "Smart Tab Monitoring",
    desc: "Tracks inactive tabs with customizable timer settings. Set inactivity duration and let InactiTab manage your tabs seamlessly.",
    highlight: "Customizable Timer",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Intelligent Whitelist",
    desc: "Protect important tabs by adding them to your whitelist. Prevent accidental closures and manage clutter effortlessly.",
    highlight: "URL Protection",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "Advanced Configuration",
    desc: "Customize auto-close settings, pinned tab handling, and tab thresholds. Take full control of your browsing experience.",
    highlight: "Full Control",
  },
  {
    icon: <Music className="w-5 h-5" />,
    title: "Media-Safe Tabs",
    desc: "Ensure uninterrupted playback by auto-whitelisting audio and video tabs. Focus on your content while InactiTab organizes the rest.",
    highlight: "Seamless Media Experience",
  },
  {
    icon: <Archive className="w-5 h-5" />,
    title: "Closed Tab Tracker",
    desc: "Track and recover auto-closed tabs effortlessly. Reopen any tab with just a click for uninterrupted workflow.",
    highlight: "Effortless Tab Recovery",
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: "Visual Tab Indicators",
    desc: "Inactive tabs are marked with subtle indicators (💤). Spot inactive tabs instantly without disrupting your workflow.",
    highlight: "Non-intrusive Monitoring",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-12 md:py-16 relative scroll-mt-20">
      <div className="container mx-auto px-3 sm:px-4 max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-[#1a73e8]">
            Powerful Features
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-lg md:max-w-2xl mx-auto">
            Everything you need to manage your tabs efficiently and boost your
            productivity
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="group">
              {/* Medium-large screen card layout (vertical) */}
              <Card className=" md:block h-full bg-[#0f1a34]/80 border border-[#1a73e8]/10 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 select-none overflow-hidden">
                {/* Subtle highlight accent at the top of card */}
                <div className="h-1 w-full bg-gradient-to-r from-[#1a73e8]/80 to-[#4287f5]/30"></div>

                <CardHeader className="text-center pb-3 space-y-2 select-none">
                  <div className="flex justify-center items-center">
                    <div className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-[#1a73e8] mb-2">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-white">
                    {feature.title}
                  </CardTitle>
                  <div className="inline-block px-2 py-0.5 rounded-full text-xs font-medium bg-[#2a4170] text-white">
                    {feature.highlight}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 text-sm leading-relaxed text-center">
                    {feature.desc}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
