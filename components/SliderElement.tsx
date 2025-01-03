import Image, { StaticImageData } from "next/image";
import { Button } from "./Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SliderElement({
  href,
  category,
}: {
  href: StaticImageData;
  category: string;
}) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 w-full h-full">
      <div className="w-full md:h-full md:aspect-[1/1.3] bg-ecommerce-light flex justify-center items-center">
        <div className="relative w-56 md:w-3/4 aspect-[1/1.1]">
          <Image fill className="" src={href} alt="category png" />
        </div>
      </div>

      <div className="grid">
        <h2 className="text-header-two uppercase">{category}</h2>
        <Button asChild>
          <Link href="/shop" className="flex items-center gap-1">
            <span>shop {category}</span>
            <ArrowRight size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
