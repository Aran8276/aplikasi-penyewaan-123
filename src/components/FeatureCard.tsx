import React, { ReactNode } from "react";

export default function FeatureCard({ children }: { children: ReactNode }) {
  return (
    <div className="w-[300px] h-[230px] md:order-1 relative focus:outline-none p-6 flex flex-col justify-center items-center text-center rounded-xl before:absolute before:inset-0 before:z-10 before:border before:border-gray-200 before:rounded-xl before:transition before:hover:border-2 before:hover:border-blue-600 before:focus:border-2 before:focus:border-blue-600 before:hover:shadow-lg dark:before:border-neutral-800 dark:before:hover:border-blue-500 dark:before:focus:border-blue-500 dark:rounded-xl">
      {children}
    </div>
  );
}
