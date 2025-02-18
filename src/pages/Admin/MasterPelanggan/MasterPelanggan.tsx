import React from "react";
import MasterPelangganView from "./MasterPelanggan.view";
import { getPelanggan } from "@/server-actions/pelanggan/Pelanggan.action";

export default async function MasterPelanggan() {
  const pelanggan = await getPelanggan();
  return <MasterPelangganView pelanggan={pelanggan} />;
}
