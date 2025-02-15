import React, { ReactNode } from "react";

export default function FeatureCard({ children }: { children: ReactNode }) {
  return (
    <div className="hover:cursor-pointer bg-blue-50 relative flex flex-col text-center items-center space-y-8 w-[300px] h-[230px] transition-all border rounded-xl p-8 border-gray-200 hover:border-blue-400 hover:border-[2px]">
      {children}
    </div>
  );
}
