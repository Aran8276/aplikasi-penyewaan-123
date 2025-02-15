import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import Link from "next/link";
import { FC, memo } from "react";
import { FaPaperPlane } from "react-icons/fa";

const KontakView: FC = () => {
  return (
    <div className="flex items-center w-full">
      <section className="w-[800px]">
        <Image
          width={800}
          height={1200}
          alt="office"
          className="rounded"
          src="/office.jpg"
        />
      </section>
      <section className="flex justify-center mx-auto flex-col space-y-8">
        <h3 className="font-bold text-5xl">Hubungi kami</h3>
        <p className="text-lg">
          Atau kirimkan pesan ke{" "}
          <Link
            href="mailto:aran8276@gmail.com"
            className="hover:underline text-indigo-500"
          >
            admin@localhost.com
          </Link>
        </p>

        <form className="grid grid-cols-2 gap-x-4 gap-y-5">
          <div className="flex flex-col space-y-3">
            <Label htmlFor="firstName">Nama Awal</Label>
            <Input id="firstName" name="firstName" placeholder="John" />
          </div>
          <div className="flex flex-col space-y-3">
            <Label htmlFor="lastName">Nama Akhir</Label>
            <Input id="lastName" name="lastName" placeholder="Doe" />
          </div>

          <div className="flex flex-col col-span-2 space-y-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="admin@localhost.com"
            />
          </div>

          <div className="flex flex-col col-span-2 space-y-3">
            <Label htmlFor="phone">Nomor Telepon</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="08821234567"
            />
          </div>

          <div className="flex flex-col col-span-2 space-y-3">
            <Label htmlFor="message">Pesan</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Ketik pesan anda disini..."
            />
          </div>

          <Button className=" bg-indigo-500 hover:bg-indigo-400" type="submit">
            Kirim Formulir
            <FaPaperPlane className="ml-3" />
          </Button>
        </form>
      </section>
    </div>
  );
};

export default memo(KontakView);
