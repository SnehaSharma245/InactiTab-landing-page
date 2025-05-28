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

export const metadata = {
  title: "InactiTab",
  description:
    "Automatically manage and close inactive browser tabs to boost performance and productivity. A free, open-source Chrome extension.",
  keywords:
    "tab management, browser extension, productivity, Chrome extension, inactive tabs, browser performance",
  authors: [{ name: "Sneha Sharma", url: "https://github.com/SnehaSharma245" }],
  creator: "Sneha Sharma",
  publisher: "InactiTab",
  openGraph: {
    title: "InactiTab - Smart Tab Management for Chrome",
    description:
      "Automatically manage inactive tabs to boost browser performance and productivity",
    url: "https://inacti-tab.vercel.app",
    siteName: "InactiTab",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "InactiTab - Smart Tab Management",
    description:
      "Boost browser productivity by automatically managing inactive tabs",
    creator: "@SnehaDevs",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
