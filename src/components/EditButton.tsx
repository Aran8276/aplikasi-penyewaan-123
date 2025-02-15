import React from "react";
import { Button } from "./ui/button";
import { SquarePen } from "lucide-react";
import Link from "next/link";

export default function EditButton({ href }: { href: string }) {
  return (
    <Link href={href}>
      <Button className="bg-blue-500 text-white rounded-md px-4 py-2 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
        <SquarePen />
      </Button>
    </Link>
  );
}
