import React, { FC } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AlatProps } from "./Alat.type";
import AlatCard from "@/components/AlatCard/AlatCard.view";

const AlatView: FC<AlatProps> = ({ data }) => {
  return (
    <div className="flex flex-col space-y-8">
      <section className="h-[300px] w-screen bg-center bg-[url('/alat-hero-2.jpg')]">
        <div className="flex items-center px-12 bg-[#00000040] text-white w-full h-full">
          <div className="flex flex-col space-y-6 w-[675px]">
            <h2 className="text-white text-5xl font-semibold">
              Pilih Perkakas Anda
            </h2>
            <p>
              Pilih alat-alat yang Anda butuhkan untuk berbagai kebutuhan. Kami
              memiliki pilihan yang luas dan berkualitas tinggi. Jangan ragu
              untuk menghubungi kami jika Anda membutuhkan bantuan lebih lanjut.
            </p>
          </div>
        </div>
      </section>

      <section className="flex px-16 flex-col space-y-8">
        <Select defaultValue="0">
          <SelectTrigger className="w-[220px]">
            <SelectValue placeholder="Semua Kategori" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Kategori Alat</SelectLabel>
              <SelectItem value="0">Semua Kategori</SelectItem>
              <SelectItem value="1">Palu</SelectItem>
              <SelectItem value="2">Gergaji</SelectItem>
              <SelectItem value="3">Elektronik</SelectItem>
              <SelectItem value="4">Alat Mobil</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="grid grid-cols-5 gap-12">
          {data.map((item, index) => (
            <AlatCard alat={item} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AlatView;
