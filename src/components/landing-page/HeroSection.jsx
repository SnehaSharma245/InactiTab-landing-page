"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Chrome } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const handleDownload = () => {
    const fileUrl = process.env.GITHUB_RELEASES_URL;

    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "dist.zip"; // File name user ke PC me
    anchor.click();
    anchor.remove();
  };
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text and CTA */}
          <div className="text-center lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="inline-block rounded-full mb-2">
                <Image
                  src="/icon2.png"
                  alt="InactiTab Logo"
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              InactiTab
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
              Automatically manage inactive tabs to boost your browser's
              performance. Smart, customizable, and designed for productivity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#1a73e8] hover:bg-[#1765cc] text-white px-6 py-5 text-base md:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={handleDownload}
              >
                <Chrome className="w-5 h-5 mr-2" />
                Add to Chrome
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-6 py-5 text-base md:text-lg rounded-lg border-2 border-[#1a73e8] text-[#1a73e8] hover:bg-[#1a73e8]/10"
              >
                View on GitHub
              </Button>
            </div>
          </div>

          {/* Right Content - Wireframe Image */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="relative w-full max-w-md">
              {/* Background glow effects */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-72 h-72 bg-[#1a73e8] rounded-full opacity-5"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#1a73e8] rounded-full opacity-5"></div>

              {/* Wireframe Image from icons folder */}
              <div className="relative bg-[#172038]/70 border border-gray-700 rounded-lg overflow-hidden ">
                <Image
                  src="/wireframe.png"
                  alt="InactiTab Wireframe"
                  width={500}
                  height={375}
                  className="object-contain w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
