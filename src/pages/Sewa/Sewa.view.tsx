import React, { memo } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Star } from "lucide-react";

const SewaView = () => {
  return (
    <div className="container mx-auto p-4 mt-16">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center">
          <Image
            src="/palu.jpg"
            alt="Product Image"
            width={400}
            height={400}
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">
            palu
          </h1>
          <div className="flex items-center gap-2 text-yellow-500">
            <Star size={20} />
            <span className="font-semibold">4.9</span>
            <span className="text-gray-500">(2.485 rating)</span>
          </div>
          <div className="text-red-500 text-lg font-bold">Rp1.000</div>
          <div className="text-gray-500 line-through">Rp3.000</div>

          <div>
            <p>
              untuk memukukl paku atau benda keras
            </p>
          </div>

          <Card>
            <CardContent className="p-4">
              <p>
                <span className="font-semibold">Kondisi:</span> Baru
              </p>
              <p>
                <span className="font-semibold">Min. Pemesanan:</span> 1 Buah
              </p>
              <p>
                <span className="font-semibold">Etalase:</span> palu
              </p>
            </CardContent>
          </Card>

          <a href="#" className="text-blue-500 underline text-sm mt-2">
            Lihat Selengkapnya
          </a>

          <Button className="bg-blue-500 hover:bg-blue-600 text-white w-1/2 py-2">
            <Plus />
            Keranjang
          </Button>
          <Button
            variant={"outline"}
            className="border border-blue-500 text-blue-500 hover:text-blue-500 w-1/2 py-2"
          >
            Sewa Langsung
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(SewaView);
