"use client";
import React from "react";
import Image from "next/image";
import { Github, Linkedin, Twitter, Mail, Coffee } from "lucide-react";

function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/SnehaSharma245/InactiTab",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/ss0807/",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/SnehaDevs",
    },
    {
      name: "Buy me a coffee",
      icon: <Coffee className="w-5 h-5" />,
      href: "buymeacoffee.com/snehadevs",
    },
    {
      name: "Email",
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:snehav2109@gmail.com",
    },
  ];

  return (
    <footer className="bg-transparent py-8 px-4 mt-12">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-center">
          {/* Logo */}
          <div className="flex items-center space-x-3 mb-6">
            <div className="relative w-7 h-7">
              <Image
                src="/favicon.png"
                alt="InactiTab Logo"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <span className="text-[#1a73e8] font-bold text-xl">InactiTab</span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-5 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-[#0f1a34] hover:bg-[#172443] rounded-full transition-all duration-200 hover:scale-110 text-[#1a73e8] hover:text-white"
                aria-label={link.name}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-xs">
            <p>© {new Date().getFullYear()} InactiTab. All rights reserved.</p>
            <p className="mt-2">Made with ❤️ by Sneha Sharma</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
