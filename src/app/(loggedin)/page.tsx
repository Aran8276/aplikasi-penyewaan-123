import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="flex space-x-8 px-12 items-center">
        <div className="flex-1 w-[800px]">
          <h3 className="text-5xl">
            Discover the joy of borrowing tools and learning new skills.
          </h3>
        </div>
        <div>
          <Image
            src="/tools-hero.png"
            alt="Tools Hero"
            width={500}
            height={300}
          />
        </div>
      </section>
    </>
  );
}
