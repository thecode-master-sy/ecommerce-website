import { ArrowRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function SliderElement({href, category}: {href:StaticImageData, category:string}) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 w-full">
       <div className="w-full md:w-80 md:aspect-[1/1.1] bg-ecommerce-light flex justify-center items-center">
         <div className="relative w-56 aspect-[1/1.1]">
          <Image fill className="" src={href} alt="category png"/>
         </div> 
       </div> 

       <div className="grid">
          <h2 className="text-header-two uppercase">{category}</h2>
          <Link href="/shop" className="uppercase flex items-center min-w-40 gap-2"><span>shop {category}</span><ArrowRight width={16}/></Link>
       </div>
    </div>
  )
}
