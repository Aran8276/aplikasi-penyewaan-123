import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function Sewa() {
    return (
        <div className="container mx-auto p-4 mt-16">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div className="flex flex-col items-center">
            <Image src="/gallery-1.jpg" alt="Product Image" width={400} height={400} />
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-semibold">
              Kabel Data 4 in 1 65W 27W Fast Charging PD TYPE C to C - Kabel Casan 4in1 C to Lightning USB to C USB to Lightning
            </h1>
            <div className="flex items-center gap-2 text-yellow-500">
              <Star size={20} />
              <span className="font-semibold">4.9</span>
              <span className="text-gray-500">(2.485 rating)</span>
            </div>
            <div className="text-red-500 text-lg font-bold">Rp9.400</div>
            <div className="text-gray-500 line-through">Rp17.500</div>
            
<div>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, ullam necessitatibus. Dicta iste molestiae quis ad ut recusandae facilis eum nostrum magnam, hic ipsa qui, eius eveniet. Laudantium, error voluptatum!
    </p>
</div>

            <Card>
              <CardContent className="p-4">
                <p><span className="font-semibold">Kondisi:</span> Baru</p>
                <p><span className="font-semibold">Min. Pemesanan:</span> 1 Buah</p>
                <p><span className="font-semibold">Etalase:</span> Kabel Data</p>
              </CardContent>
            </Card>

            <a href="#" className="text-blue-500 underline text-sm mt-2">Lihat Selengkapnya</a>

            <Button className="bg-blue-500 text-white w-1/2 py-2">+ Keranjang</Button>
          <Button className="border border-blue-500 text-blue-500 w-1/2 py-2">Sewa Sekrang</Button>
          </div>
        </div>
      </div>
    );
}
