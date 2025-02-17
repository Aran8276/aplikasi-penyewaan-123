import React from "react";
import MasterAlatView from "./MasterAlat.view";
import { getAlat } from "@/server-actions/alat/Alat.action";

export default async function MasterAlat() {
  const alat = await getAlat();

  return <MasterAlatView alat={alat} />;
}
