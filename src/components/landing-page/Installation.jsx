"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Eye, X } from "lucide-react";

const installationSteps = [
  {
    step: "Step 1",
    title: "Click on Add to Chrome",
    description:
      "Start by clicking the 'Add to Chrome' button on the InactiTab website.",
    image: "/installation/Step-1.png",
  },
  {
    step: "Step 2",
    title: "Save dist.zip in your PC",
    description:
      "When prompted, save the dist.zip file to your preferred location.",
    image: "/installation/Step-2.png",
  },
  {
    step: "Step 3",
    title: "Extract the ZIP file",
    description:
      "Right click on the saved zip file and select 'Extract All' option.",
    image: "/installation/Step-3.png",
  },
  {
    step: "Step 4",
    title: "Complete the extraction",
    description:
      "Choose 'Extract All' button on the specified location to unpack all files.",
    image: "/installation/Step-4.png",
  },
  {
    step: "Step 5",
    title: "Open Chrome Extensions",
    description:
      "Go to Chrome Extensions by clicking the three dots menu (⋮) in the top-right corner, then select 'Extensions' and enable Developer Mode.",
    image: "/installation/Step-5.png",
  },
  {
    step: "Step 6",
    title: "Load Unpacked Extension",
    description:
      "Click on 'Load Unpacked' button that appears after enabling Developer Mode.",
    image: "/installation/Step-6.png",
  },
  {
    step: "Step 7",
    title: "Select the dist folder",
    description:
      "Navigate to extracted zip folder, double click on it, then select the dist folder and choose 'Select Folder'.",
    image: "/installation/Step-7.png",
  },
  {
    step: "Step 8",
    title: "Pin the Extension",
    description:
      "Extension will now be installed. Click on Extensions icon in toolbar and pin InactiTab for easy access.",
    image: "/installation/Step-8.png",
  },
];

function Installation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState("right"); // Track animation direction
  const [imageModalOpen, setImageModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const nextStep = () => {
    setDirection("right");
    setCurrentStep((prev) =>
      prev === installationSteps.length - 1 ? 0 : prev + 1
    );
  };

  const prevStep = () => {
    setDirection("left");
    setCurrentStep((prev) =>
      prev === 0 ? installationSteps.length - 1 : prev - 1
    );
  };

  const goToStep = (stepIndex) => {
    setDirection(stepIndex > currentStep ? "right" : "left");
    setCurrentStep(stepIndex);
  };

  const openImageModal = (image) => {
    setSelectedImage(image);
    setImageModalOpen(true);
  };

  return (
    <section id="installation" className="py-12 md:py-16 relative scroll-mt-20">
      <div className="container mx-auto px-3 sm:px-4 max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-[#1a73e8]">
            Installation Guide
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-lg md:max-w-2xl mx-auto">
            Follow these simple steps to install InactiTab in your Chrome
            browser
          </p>
        </div>

        {/* Desktop/Tablet View */}
        <div className="hidden md:block">
          {/* Main Carousel Container */}
          <div className="rounded-xl overflow-hidden bg-[#0f1a34]/50 backdrop-blur-sm p-6 mb-4 border border-[#1a73e8]/10">
            <div className="relative h-[300px]">
              {" "}
              {/* Fixed height container */}
              {installationSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                    idx === currentStep
                      ? "opacity-100 transform translate-x-0"
                      : idx < currentStep ||
                        (currentStep === 0 &&
                          idx === installationSteps.length - 1)
                      ? `opacity-0 transform -translate-x-full ${
                          direction === "right"
                            ? "-translate-x-full"
                            : "translate-x-full"
                        }`
                      : `opacity-0 transform translate-x-full ${
                          direction === "right"
                            ? "translate-x-full"
                            : "-translate-x-full"
                        }`
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Left side - Step information */}
                    <div className="text-left">
                      <div className="inline-block px-3 py-1 mb-4 rounded-full text-xs font-medium bg-[#1a73e8] text-white">
                        {step.step}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Right side - Step image */}
                    <div className="relative h-[300px] bg-[#0c1428]/50 rounded-lg overflow-hidden border border-[#1a73e8]/10">
                      <Image
                        src={step.image}
                        alt={`Installation step ${idx + 1}`}
                        fill
                        className="object-contain p-4 select-none pointer-events-none"
                        draggable="false"
                        unselectable="on"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls - Moved below the content */}
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Button
              onClick={prevStep}
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10 bg-[#0c1428]/50 border border-[#1a73e8]/30 text-[#1a73e8] 
              hover:bg-[#1a73e8]/20 transition duration-200 ease-in-out cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Pagination dots */}
            <div className="flex justify-center items-center space-x-2 mt-2">
              {installationSteps.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentStep === idx ? "bg-[#1a73e8] w-4" : "bg-gray-600"
                  }`}
                  onClick={() => goToStep(idx)}
                  aria-label={`Go to step ${idx + 1}`}
                />
              ))}
            </div>

            <Button
              onClick={nextStep}
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10 bg-[#0c1428]/50 border border-[#1a73e8]/30 text-[#1a73e8] 
              hover:bg-[#1a73e8]/20 transition duration-200 ease-in-out cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile View - Step Cards */}
        <div className="grid grid-cols-1 gap-4 md:hidden">
          {installationSteps.map((step, index) => (
            <div
              key={index}
              className="bg-[#0f1a34]/80 border border-[#1a73e8]/10 backdrop-blur-sm rounded-lg overflow-hidden p-4"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#1a73e8] text-white">
                  {step.step}
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-1.5 h-auto text-[#1a73e8] hover:text-white hover:bg-[#1a73e8]/20"
                      onClick={() => openImageModal(step.image)}
                    >
                      <Eye className="h-4 w-4 mr-1" />
                      <span className="text-xs">Preview</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="p-4 mx-auto">
                    {/* Add DialogTitle for accessibility */}
                    <DialogTitle className="sr-only">
                      {`Installation Step ${index + 1} - ${step.title}`}
                    </DialogTitle>
                    <div className="relative mx-auto w-full aspect-[4/3] max-h-[70vh]">
                      <Image
                        src={step.image}
                        alt={`Installation step ${index + 1}`}
                        fill
                        className="object-contain select-none pointer-events-none"
                        draggable="false"
                        unselectable="on"
                      />
                    </div>
                    <div className="absolute top-3 right-3">
                      <DialogPrimitive.Close className="rounded-full w-7 h-7 inline-flex items-center justify-center border border-[#1a73e8]/30 bg-[#0c1428]/90 text-gray-400 hover:text-white hover:bg-[#1a73e8]/20 focus:outline-none">
                        <X className="h-4 w-4" />
                        <span className="sr-only">Close</span>
                      </DialogPrimitive.Close>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>

              <h3 className="font-bold text-base text-white mb-1">
                {step.title}
              </h3>
              <p className="text-gray-300 text-xs leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Installation;
