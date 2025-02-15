import Header from "@/components/Header";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center py-6">{children}</main>
      <footer>Footer goes here</footer>
    </>
  );
}
