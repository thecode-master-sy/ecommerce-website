"use client"
import productOneOfDay from "@/public/productOneOfDay.png";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import {Button} from "./Button";
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react";

export default function ProductOfDaySection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"]
  })
  const baseY = -100
  const y = useTransform(scrollYProgress, [0, 1], [0, baseY]);
  const waterMarkX = useTransform(scrollYProgress, [0, 1], [0, baseY * 1.2])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, baseY * 1.5])
  


  return (
    <motion.div ref={container} className="bg-ecommerce-light col-span-12 pl-2 py-16 grid md:grid-cols-12">
         <motion.div style={{y}} className="md:col-span-5 md:row-start-1 md:row-end-1">
           <h2 className="uppercase text-header-two">Mac book pro 2021</h2> 
           <span className="uppercase p-1 border border-foreground text-[11px] rounded-md mt-2 inline-block">space gray</span>
           <p className="max-w-80 mt-2">Experience the epitome of performance and style with the current MacBook. This sleek and lightweight laptop is powered by Appless cutting-edge M1 chip, delivering unparalleled speed and efficiency..</p>
         </motion.div>
         
         <motion.div style={{y}} className="col-start-1 md:col-start-1 md:col-span-12 row-start-2 self-center overflow-hidden">
           <motion.h1 style={{x: waterMarkX}} className="text-stroke font-bold">Products of the day Products of the day</motion.h1>
         </motion.div>
         <motion.div style={{y: imageY}} className="row-start-2 md:row-end-3 col-start-1 md:col-start-6 md:col-span-6 md:self-center z-10 max-w-xs md:max-w-[480px] place-self-end">
          <Image  className="w-full " src={productOneOfDay} alt="product of the day"/>
         </motion.div>
        

         <div className="row-start-3 row-end-3 md:col-span-12 flex justify-between items-end">
           <span className="flex gap-2">
             <ArrowLeft/> 
             <ArrowRight/>
           </span>

           <div>
             <p className="text-header-two">$999.00</p>
             <Button><span>view product</span><ArrowRight size={16}/></Button>
           </div>
         </div>
    </motion.div>
  )
}
