"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Chrome } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const handleDownload = () => {
    const fileUrl = process.env.NEXT_PUBLIC_GITHUB_RELEASE_URL;

    const anchor = document.createElement("a");
    anchor.href = fileUrl;
    anchor.download = "inactitab.zip"; // File name user ke PC me
    anchor.click();
    anchor.remove();
  };
  return (
    <section className="relative py-16 md:py-16 flex items-center min-h-[85vh]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content - Text and CTA */}
          <div className="text-center lg:text-left">
            <div className="mb-4 flex justify-center lg:justify-start">
              <div className="inline-block rounded-full">
                <Image
                  src="/icon2.png"
                  alt="InactiTab Logo"
                  width={130}
                  height={130}
                  className="object-contain"
                />
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              InactiTab
            </h1>

            <p className="text-base md:text-lg text-gray-300 mb-6 max-w-xl leading-relaxed">
              Automatically manage inactive tabs to boost your browser's
              performance. Smart, customizable, and designed for productivity.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#1a73e8] hover:bg-[#2b5ec6] text-white px-5 py-2 text-sm md:text-base rounded-lg 
             shadow-lg hover:shadow-2xl transform  transition-all duration-300 cursor-pointer"
                onClick={handleDownload}
              >
                <Chrome className="w-4 h-4 mr-2" />
                Add to Chrome
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Link
                href="https://github.com/SnehaSharma245/InactiTab-landing-page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-[#1a73e8] bg-transparent px-5 py-2 text-sm md:text-base font-medium text-[#1a73e8] hover:bg-[#1a73e8]/10 transition-all duration-300 cursor-pointer"
              >
                View on GitHub
              </Link>
            </div>
          </div>

          {/* Right Content - Wireframe Image */}
          <div className="hidden lg:flex justify-end items-center">
            <div className="relative w-full max-w-sm">
              {/* Background glow effects */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 w-56 h-56 bg-[#1a73e8] rounded-full opacity-5"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#1a73e8] rounded-full opacity-5"></div>

              {/* Wireframe Image from icons folder */}
              <div className="relative bg-[#172038]/70 border border-gray-700 rounded-lg overflow-hidden">
                <Image
                  src="/wireframe.png"
                  alt="InactiTab Wireframe"
                  width={400}
                  height={300}
                  className="object-contain w-full select-none pointer-events-none"
                  draggable="false"
                  unselectable="on"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
