"use client";

import Footer from "@/components/Footer";

import LoadingScreen from "@/components/LoadingScreen";
import Header from "@/components/Header";

export default function ClientWrapper({ children }) {
  return (
    <>
      {<Header />}
      <main>{children || <p>No children to render</p>}</main>
      {<Footer />}
    </>
  );
}
