import React, { FC } from "react";
import { Card } from "../ui/card";
import { AlatCardProps } from "./AlatCard.type";
import Image from "next/image";

const AlatCard: FC<AlatCardProps> = ({ alat }) => {
  const gambarAlat = alat.alatGambar;

  return (
    <Card
      className={`flex flex-col p-8 hover:border-2 transition-all ${
        alat.alatStok < 1 ? "opacity-40 cursor-not-allowed" : "hover:border-sky-300"
      }`}
    >
      <Image src={gambarAlat} alt={alat.alatNama} width={300} height={300} />
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">{alat.alatNama}</h4>
        {alat.alatStok < 1 ? (
          <p className="text-red-500">Stok habis</p>
        ) : (
          <p className="text-gray-500">
            Rp{alat.alatHargaPerHari.toLocaleString()} / hari
          </p>
        )}
        <p className="line-clamp-2 text-sm">{alat.alatDeskripsi}</p>
      </div>
    </Card>
  );
};

export default AlatCard;