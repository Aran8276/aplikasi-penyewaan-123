import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CircleDollarSign,
  ShieldPlus,
  Truck,
  Users,
  Warehouse,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FC, memo } from "react";
import { HomeViewProps } from "./Home.type";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard.view";
import Link from "next/link";

const HomeView: FC<HomeViewProps> = ({ dummyTestimonials }) => {
  return (
    <div className="flex flex-col py-6 space-y-24">
      <section className="flex space-x-24 items-center px-24">
        <div className="flex-col space-y-12 w-[900px]">
          <h3 className="text-5xl">
            Tidak perlu repot-repot membeli alat yang hanya digunakan sesekali.
          </h3>
          <div>
            <Link href="/alat">
              <Button
                size={"lg"}
                className="bg-blue-500 hover:bg-blue-400 group"
              >
                Sewa Alat
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="">
          <Image
            src="/tools-hero.png"
            alt="Tools Hero"
            width={800}
            height={200}
          />
        </div>
      </section>

      <section className="flex items-center flex-col justify-center space-y-16">
        <h3 className="text-4xl text-center">
          Pilih alat yang sesuai dengan kebutuhan Anda
        </h3>

        <section className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard>
            <Warehouse className="size-16" />
            <h4 className="text-xl">
              Solusi Praktis untuk Semua Kebutuhan Alat
            </h4>
          </FeatureCard>
          <FeatureCard>
            <Wrench className="size-16" />
            <h4 className="text-xl">Beragam Pilihan Alat Tersedia </h4>
          </FeatureCard>
          <FeatureCard>
            <CircleDollarSign className="size-16" />
            <h4 className="text-xl">Harga Terjangkau, Kualitas Terjamin </h4>
          </FeatureCard>
          <FeatureCard>
            <Truck className="size-16" />
            <h4 className="text-xl">Pengiriman Cepat & Layanan Antar Jemput</h4>
          </FeatureCard>
          <FeatureCard>
            <ShieldPlus className="size-16" />
            <h4 className="text-xl">
              Dukungan Profesional untuk Setiap Kebutuhan
            </h4>
          </FeatureCard>
          <FeatureCard>
            <Users className="size-16" />
            <h4 className="text-xl">Testimoni Pelanggan yang Puas</h4>
          </FeatureCard>
        </section>
      </section>

      <section className="flex flex-col px-24 space-y-8">
        <div className="flex flex-col space-y-8">
          <h2 className="text-4xl">Banyak Pelanggan Puas</h2>
          <p className="text-gray-600 text-lg">
            Dengan berbagai pengalaman dan kritik dari pelanggan, kami siap
            memberikan layanan yang terbaik. Mari kita coba bersama-sama untuk
            membuat kehidupan Anda lebih menyenangkan!
          </p>
        </div>
        <Carousel className="h-[220px] w-[1200px]">
          <CarouselContent>
            {dummyTestimonials.map((item, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <TestimonialCard testimonial={item} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute right-12 bottom-0">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>{" "}
      </section>
    </div>
  );
};

export default memo(HomeView);
