import KategoriAlat from "@/pages/Crud3/Kategorialat";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kategorialat - Aplikasi Sewa Alat",
  description: "Generated by create next app",
};

export default function page() {
  return <KategoriAlat />;
}