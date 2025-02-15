import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center pb-24 min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
