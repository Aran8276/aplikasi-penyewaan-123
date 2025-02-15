import React, { FC } from "react";
import ApplicationLogo from "../ApplicationLogo";
import Link from "next/link";
import { Button } from "../ui/button";
import { adminNavData, navData } from "./NavData";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HeaderViewProps } from "./Header.type";
import { ChevronDown } from "lucide-react";

const HeaderView: FC<HeaderViewProps> = ({ isAdmin }) => {
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

        {isAdmin && (
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center opacity-50 hover:opacity-100 transition-all">
              <ChevronDown />
              <div className="px-2">Admin</div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Menu Admin</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {adminNavData.map((item, index) => (
                <Link key={index} href={item.link}>
                  <DropdownMenuItem
                    className="hover:cursor-pointer"
                    key={index}
                  >
                    {item.name}
                  </DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </nav>
      <section className="flex space-x-3">
        <Link href="/login">
          <Button className="px-6" variant={"ghost"}>
            Masuk
          </Button>
        </Link>
        <Button className="px-6 bg-indigo-500">Daftar</Button>
      </section>
    </header>
  );
};

export default HeaderView;
