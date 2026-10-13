import Image from "next/image";
import logo from "@/public/images/iron-tv-max-logo.png";

type LogoProps = { className?: string; preload?: boolean };

/**
 * Official IRON TV MAX logo (transparent PNG, original proportions).
 * Size it with a height class; width follows the image's aspect ratio.
 */
export function Logo({ className = "h-12", preload = false }: LogoProps) {
  return (
    <Image
      src={logo}
      alt=""
      preload={preload}
      sizes="160px"
      className={`w-auto object-contain ${className}`}
    />
  );
}
