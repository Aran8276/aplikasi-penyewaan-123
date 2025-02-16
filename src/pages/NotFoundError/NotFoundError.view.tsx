"use client";

import { Button } from "@/components/ui/button";
import React, { FC, memo } from "react";
import { NotFoundProps } from "./NotFound.type";
import Image from "next/image";
import Link from "next/link";

const NotFound: FC<NotFoundProps> = ({ router }) => {
  return (
    <main className="mx-24">
      <section className="bg-white dark:bg-gray-900 ">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
          <div className="wf-ull lg:w-1/2">
            <p className="text-sm font-medium text-blue-500 dark:text-blue-400">
              Error 404
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Halaman tidak ditemukan
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Maaf halaman yang anda ingin kunjungi tidak ditemukan. Silakan
              coba kembali atau periksa URL Anda.
            </p>
            <div className="flex items-center mt-6 gap-x-3">
              <Button
                onClick={() => router.back()}
                className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>
                <span>Kembali</span>
              </Button>
              <Link href="/">
                <Button className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                  Beranda
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative w-full mt-8 lg:w-1/2 lg:mt-0">
            <Image
              width={800}
              height={800}
              className=" w-full lg:h-[32rem] h-80 md:h-96 rounded-lg object-contain "
              src="/404.jpg"
              alt="gambar"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default memo(NotFound);
