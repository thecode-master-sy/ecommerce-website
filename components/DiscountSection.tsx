import Image from "next/image";
import jblImage from "@/public/jbl.png";
import Button from "@/components/Button"
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function DiscountSection() {
  return (
    <div className="bg-ecommerce-light col-span-12 grid md:grid-cols-12 gap-7 px-2 py-7">
       
        <h1 className="text-stroke font-bold md:col-span-12 overflow-hidden">Weekly discount. Weekly discount</h1> 

         <Image src={jblImage} className="w-full place-self-center md:place-self-auto md:col-span-3 -mt-24 max-w-[350px]"  alt="discount product"/>

         <div className="md:col-start-6 md:col-span-3 md:self-end grid gap-1 max-w-64">
            <h3 className="uppercase text-header-three">jbl headset</h3>
            <p className="uppercase text-body">30% discount</p>
            <p className="text-header-three">$450</p>
            <Button showArrow>view product</Button>
         </div>

         <div className="flex gap-2 md:row-start-3 md:col-span-12 justify-end">
           <ArrowLeft />
           <ArrowRight/>
         </div>
    </div>
  )
}
