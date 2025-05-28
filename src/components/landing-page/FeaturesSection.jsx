"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Shield, Timer, Zap } from "lucide-react";

// Feature data
const features = [
  {
    icon: <Timer className="w-10 h-10" />,
    title: "Smart Tab Monitoring",
    desc: "Automatically tracks inactive tabs with customizable timer settings. Set your preferred inactivity duration and let InactiTab handle the rest.",
    highlight: "Customizable Timer",
  },
  {
    icon: <Shield className="w-10 h-10" />,
    title: "Intelligent Whitelist",
    desc: "Add important websites to your whitelist to prevent accidental closure. Keep your essential tabs safe while managing the clutter.",
    highlight: "URL Protection",
  },
  {
    icon: <Settings className="w-10 h-10" />,
    title: "Advanced Configuration",
    desc: "Fine-tune your experience with comprehensive settings. Control auto-close behavior, pinned tab handling, and notification preferences.",
    highlight: "Full Control",
  },
  {
    icon: <Zap className="w-10 h-10" />,
    title: "Performance Boost",
    desc: "Free up system resources by automatically closing inactive tabs. Experience faster browsing and improved system performance.",
    highlight: "Resource Optimization",
  },
  {
    icon: "🌙",
    title: "Modern Interface",
    desc: "Beautiful light and dark themes with a responsive React-based interface. Seamlessly integrates with your Chrome browser.",
    highlight: "Sleek Design",
  },
  {
    icon: "📊",
    title: "Usage Analytics",
    desc: "Track your browsing patterns and see how InactiTab improves your productivity. Get insights into your tab management habits.",
    highlight: "Productivity Insights",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a73e8]">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to manage your tabs efficiently and boost your
            productivity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <Card className="h-full bg-[#0f1a34]/80 border border-[#1a73e8]/10 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="inline-block p-4 rounded-full bg-[#1a73e8] mb-4 text-white mx-auto">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    {feature.title}
                  </CardTitle>
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-[#2a4170] text-white">
                    {feature.highlight}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 leading-relaxed">
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
