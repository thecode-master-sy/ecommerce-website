import Image, { StaticImageData } from "next/image";
import Button from "./Button";

export default function SliderElement({href, category}: {href:StaticImageData, category:string}) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 w-full">
       <div className="w-full md:w-80 md:aspect-[1/1.3] bg-ecommerce-light flex justify-center items-center">
         <div className="relative w-56 aspect-[1/1.1]">
          <Image fill className="" src={href} alt="category png"/>
         </div> 
       </div> 

       <div className="grid">
          <h2 className="text-header-two uppercase">{category}</h2>
          <Button showArrow>shop {category}</Button>
       </div>
    </div>
  )
}
