import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Create OG image path with full URL to ensure it works on social media
const ogImageUrl = "/twitter_icon.jpg";
const twitterImageUrl = "=/twitter_icon.jpg";

export const metadata = {
  title: "InactiTab - Smart Tab Management for Chrome",
  description:
    "Automatically manage and close inactive browser tabs to boost performance and productivity. A free, open-source Chrome extension.",
  keywords:
    "tab management, browser extension, productivity, Chrome extension, inactive tabs, browser performance",
  authors: [{ name: "Sneha Sharma", url: "https://github.com/SnehaSharma245" }],
  creator: "Sneha Sharma",
  publisher: "InactiTab",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inactitab.vercel.app",
    siteName: "InactiTab",
    title: "InactiTab - Smart Tab Management for Chrome",
    description:
      "Automatically manage inactive tabs to boost browser performance and productivity",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "InactiTab - Smart Tab Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@SnehaDevs",
    creator: "@SnehaDevs",
    title: "InactiTab - Smart Tab Management",
    description:
      "Boost browser productivity by automatically managing inactive tabs",
    images: [twitterImageUrl],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://inactitab.vercel.app",
  },
  category: "technology",
};

// Add structured data for rich search results
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://inactitab.vercel.app/#software",
      name: "InactiTab",
      url: "https://inactitab.vercel.app",
      applicationCategory: "BrowserApplication",
      operatingSystem: "Chrome",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      description:
        "A Chrome extension that automatically manages inactive tabs to boost browser performance",
      image: "https://inactitab.vercel.app/icon2.png",
      author: {
        "@type": "Person",
        name: "Sneha Sharma",
        url: "https://github.com/SnehaSharma245",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://inactitab.vercel.app/#website",
      url: "https://inactitab.vercel.app",
      name: "InactiTab - Smart Tab Management",
      description: "Browser extension for automatic tab management",
      publisher: {
        "@type": "Person",
        name: "Sneha Sharma",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://inactitab.vercel.app" />
        {/* Add favicon link explicitly */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
