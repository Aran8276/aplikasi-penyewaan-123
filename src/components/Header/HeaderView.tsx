import React from "react";
import ApplicationLogo from "../ApplicationLogo";
import Link from "next/link";
import { Button } from "../ui/button";
import { navData } from "./NavData";

export default function HeaderView() {
  return (
    <header className="flex items-center justify-between py-4 px-12">
      <ApplicationLogo />
      <nav className="flex space-x-8 font-medium">
        {navData.map((item, index) => (
          <Link
            className="opacity-50 hover:opacity-100 transition-all"
            key={index}
            href={item.link}
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <section className="flex space-x-3">
        <Button className="px-6" variant={"ghost"}>
          Masuk
        </Button>
        <Button className="px-6 bg-indigo-500">Daftar</Button>
      </section>
    </header>
  );
}
