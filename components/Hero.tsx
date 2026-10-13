import Image from "next/image";
import Link from "next/link";
import heroImage from "@/public/images/hero-salon.jpg";
import { ArrowRightIcon } from "./icons";

/**
 * Full-width photo hero. It is pulled up under the sticky header (negative top margin),
 * which renders transparent on the homepage until the visitor scrolls.
 */
export function Hero() {
  return (
    <section className="relative isolate -mt-16 flex min-h-[520px] items-center justify-center overflow-hidden lg:-mt-[4.5rem] lg:min-h-[640px]">
      <Image
        src={heroImage}
        alt="Un groupe d'amis réunis sur un canapé regarde la télévision dans un salon lumineux"
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      {/* Navy overlay: darkens the photo for a cinematic look and keeps white text readable. */}
      <div className="absolute inset-0 -z-10 bg-[#16304d]/[0.8]" aria-hidden="true" />
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-[#0b1628]/70 to-transparent" aria-hidden="true" />

      <div className="mx-auto w-full max-w-4xl px-4 pb-14 pt-28 text-center sm:px-6 lg:pt-32">
        <h1 className="font-display text-[1.75rem] font-bold uppercase leading-tight tracking-normal text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)] sm:text-4xl lg:text-[2.6rem]">
          Bienvenue sur <span className="text-[#4cc3f5]">IRON TV MAX</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-balance text-base text-white/95 sm:text-lg lg:text-xl">
          Découvrez nos offres et consultez nos tarifs en quelques clics.
        </p>
        <Link
          href="/tarifs"
          className="group mt-8 inline-flex items-center gap-2 rounded-md bg-[#1a7fb5] px-7 py-3 text-base font-medium text-white shadow-lg shadow-black/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#1690d0] hover:shadow-xl"
        >
          Découvrir nos tarifs
          <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}
