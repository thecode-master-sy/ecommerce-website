"use client"
import { MotionProps, motion } from "framer-motion"
import { cn } from "@/utils/utils";
import { useRef, useState, useEffect } from "react";
import { Cursor } from "@/components/Cursor";

const Slider:React.FC<React.HTMLAttributes<HTMLDivElement> & MotionProps> = ({className, children,...props}) => {
  const sliderElement = useRef<HTMLDivElement | null>(null)
  const constraintsRef = useRef<HTMLDivElement | null>(null) 
  const [constraint, setConstraint] = useState<number>(0);
  const [extraSpace, setExtraSpace] = useState<number>(0);
  
  useEffect(() => {
    setConstraint(constraintsRef.current?.getBoundingClientRect().width ?? 0);
    setExtraSpace(sliderElement.current?.getBoundingClientRect().width ?? 0);
  }, []);


  
  return (
    <div ref={sliderElement} className={cn("overflow-hidden select-none", className)} {...props}>
      <motion.div ref={constraintsRef} drag="x" dragConstraints={{ left: -(constraint - extraSpace), right: 0 }} className="flex gap-10 w-max">
       {children} 
      </motion.div>
      <Cursor className="hidden md:flex"/>
    </div>
  )
}

 export default Slider
