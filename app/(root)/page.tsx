import { Button } from "@/components/ui/button";
import Link from "next/link";
import hero1 from "../../public/assets/images/hero1.jpg";
import hero2 from "../../public/assets/images/hero2.jpeg";
import hero4 from "../../public/assets/images/hero4.jpeg";
import hero6 from "../../public/assets/images/hero6.jpeg";
import ornament8 from "../../public/assets/images/Marketing-Agency-Ornament-8.webp";
import ornament6 from "../../public/assets/images/Marketing-Agency-Ornament-6.webp";
import ornament7 from "../../public/assets/images/Marketing-Agency-Ornament-7.webp";
import Image from "next/image";
import Trusted from "./components/Trusted";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="font-ibm text-7xl max-md:text-4xl tracking-wide leading-[1.3] max-md:leading-[1.3] max-md:min-w-full">
              Celebrating Moments That{" "}
              <span className="relative after:absolute after:bottom-[6px] max-md:after:bottom-[2px] after:w-0 after:h-2 max-md:after:h-[4px] after:bg-primary-500 after:left-0 after:animate-appear">
                Matter
              </span>
              : Your Events, Our Platform!
            </h1>
            <p className="font-light max-w-[500px] max-lg:max-w-[400px] text-black/80">
              From Intimate Gatherings to Grand Galas, We Craft Experiences That
              Transform Ordinary Days into Extraordinary Stories. Book Your Next
              Unforgettable Event and Step into a World of Unique Celebrations.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore now</Link>
            </Button>
          </div>
          <div className="flex gap-4 max-md:mt-4">
            <div className="flex flex-col gap-4 max-w-[250px]">
              <div className="relative">
                <Image
                  src={hero1}
                  alt="hero-img"
                  width={250}
                  className={`rounded-tl-full rounded-tr-full object-cover max-md:w-[180px]`}
                />
                <Image
                  src={ornament8}
                  alt="hero-img"
                  width={70}
                  className={`absolute top-[-20px] max-md:top-[-10px] left-[-28px] max-md:left-[-15px] z-[2] object-cover rotate-[270deg] max-md:w-[45px]`}
                />
              </div>
              <div className="relative ma">
                <Image
                  src={hero2}
                  alt="hero-img"
                  width={250}
                  className={`rounded-tl-full rounded-tr-full rounded-br-full rounded-bl-full object-cover max-md:w-[180px]`}
                />
                <Image
                  src={ornament6}
                  alt="hero-img"
                  width={170}
                  className={`absolute bottom-[-200px] max-md:bottom-[-160px] left-[-160px] max-md:left-[0px] z-[2] object-cover max-md:w-[120px]`}
                />
              </div>
            </div>
            <div className="flex flex-col pt-[100px]">
              <div className="relative">
                <Image
                  src={hero6}
                  alt="hero-img"
                  width={300}
                  className={` object-cover max-md:w-[250px]`}
                />
                <Image
                  src={ornament7}
                  alt="hero-img"
                  width={150}
                  className={`absolute top-[-100px] max-md:top-[-120px] right-[-80px] max-md:right-[0] object-cover`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Trusted />
    </>
  );
}
