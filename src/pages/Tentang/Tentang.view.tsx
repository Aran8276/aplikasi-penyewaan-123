import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React, { memo } from "react";
import { tentangFeatures } from "./Tentang.data";
import Link from "next/link";

const Tentang = () => {
  return (
    <div className="px-24 py-12">
      <section className="mb-16 text-center animate-fade-in">
        <h2 className="text-4xl font-bold mb-4 text-blue-900">Tentang Kami</h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Kami menyediakan solusi penyewaan alat perkakas yang mudah dan
          terjangkau untuk proyek Anda.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-16">
        {tentangFeatures.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-slide-up"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <item.icon className="w-12 h-12 text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-blue-800">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="text-center mb-16 animate-fade-in">
        <h2 className="text-3xl font-bold mb-4 text-blue-900">
          Mengapa Memilih Kami?
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          Dengan pengalaman bertahun-tahun, kami memahami kebutuhan Anda. Kami
          berkomitmen untuk memberikan layanan terbaik dan alat yang selalu siap
          pakai.
        </p>
        <Link href="/alat">
          <Button className="bg-blue-500 hover:bg-blue-400 group">
            Mulai Sewa Sekarang
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </section>

      <section className="animate-fade-in">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-900">
          Galeri Alat
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((__, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image
                src={`/gallery-${index + 1}.jpg`}
                alt={`Alat ${index + 1}`}
                width={200}
                height={200}
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default memo(Tentang);
