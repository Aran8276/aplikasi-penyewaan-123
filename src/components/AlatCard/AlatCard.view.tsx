import React, { FC } from "react";
import { Card } from "../ui/card";
import { AlatCardProps } from "./AlatCard.type";
import Image from "next/image";

const AlatCard: FC<AlatCardProps> = ({ alat }) => {
  if (alat.alatStok < 1) {
    return (
      <Card className="flex opacity-40 flex-col p-8 hover:border-2 cursor-not-allowed">
        <Image
          src="/wrench-placeholder.jpg"
          alt="Alat Placeholder"
          width={300}
          height={300}
        />
        <div className="flex flex-col space-y-2">
          <h4 className="font-medium text-lg">{alat.alatNama}</h4>
          <p className="text-red-500">Stok habis</p>
          <p className="line-clamp-2 text-sm">{alat.alatDeskripsi}</p>
        </div>
      </Card>
    );
  }

  return (
    <Card className="flex reveal-card flex-col p-8 hover:border-2 transition-all hover:border-sky-300">
      <Image
        src="/wrench-placeholder.jpg"
        alt="Alat Placeholder"
        width={300}
        height={300}
      />
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">{alat.alatNama}</h4>

        <div className=""></div>
        {/* <p>{alat.alatStok}</p> */}
        <p className="text-gray-500">
          Rp{alat.alatHargaPerHari.toLocaleString()} / hari
        </p>
        <p className="line-clamp-2 text-sm">{alat.alatDeskripsi}</p>
      </div>
    </Card>
  );
};

export default AlatCard;
