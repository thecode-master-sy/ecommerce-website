import productOneOfDay from "@/public/productOneOfDay.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import {Button} from "./Button";

export default function ProductOfDaySection() {
  return (
    <div className="bg-ecommerce-light col-span-12 pl-2 py-16 grid md:grid-cols-12">
         <div className="md:col-span-5 md:row-start-1 md:row-end-1">
           <h2 className="uppercase text-header-two">Mac book pro 2021</h2> 
           <span className="uppercase p-1 border border-foreground text-[11px] rounded-md mt-2 inline-block">space gray</span>
           <p className="max-w-80 mt-2">Experience the epitome of performance and style with the current MacBook. This sleek and lightweight laptop is powered by Appless cutting-edge M1 chip, delivering unparalleled speed and efficiency..</p>
         </div>
         
         <div className="col-start-1 md:col-start-1 md:col-span-12 row-start-2 md:self-center overflow-hidden">
           <h1 className="text-stroke font-bold">Products of the day Products of the day</h1>
         </div>
         <Image className="w-full row-start-2 md:row-end-3 col-start-1 md:col-start-6 md:col-span-6 md:self-center z-10 max-w-xs md:max-w-[480px] place-self-end" src={productOneOfDay} alt="product of the day"/>

         <div className="row-start-3 row-end-3 md:col-span-12 flex justify-between items-end">
           <span className="flex gap-2">
             <ArrowLeft/> 
             <ArrowRight/>
           </span>

           <div>
             <p className="text-header-two">$999.00</p>
             <Button showArrow>view product</Button>
           </div>
         </div>
    </div>
  )
}
