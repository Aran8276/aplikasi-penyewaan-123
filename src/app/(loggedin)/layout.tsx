import Header from "@/components/Header";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <>{children}</>
      <footer>Footer goes here</footer>
    </>
  );
}
