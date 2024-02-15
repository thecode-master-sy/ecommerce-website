"use client"
import { MotionProps, motion } from "framer-motion"
import { cn } from "@/utils/utils";
import { useRef, useState, useEffect } from "react";
import { Cursor } from "@/components/Cursor";


function convertToPercent(value:number, max: number) {
  return ((value/max) * 100)
}

const Slider:React.FC<React.HTMLAttributes<HTMLDivElement> & MotionProps> = ({className, children,...props}) => {
  const sliderElement = useRef<HTMLDivElement | null>(null)
  const constraintsRef = useRef<HTMLDivElement | null>(null) 
  const [constraint, setConstraint] = useState<number>(0);
  const [extraSpace, setExtraSpace] = useState({width: 0, height: 0});
  const [showCursor, setShowCursor] = useState(false)
  const [initialCursorPosition, setInitialCursorPosition] = useState({x: 0, y: 0})
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });
  const [isDragging, setIsDragging] = useState(false);
  
  useEffect(() => {
    setConstraint(constraintsRef.current?.getBoundingClientRect().width ?? 0);
    setExtraSpace({width:sliderElement.current?.getBoundingClientRect().width ?? 0, height: sliderElement.current?.getBoundingClientRect().height ?? 0});
  }, []);

  const mouseEnter = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowCursor(true);   
    const { clientX, clientY } = e;
    const targetElement = sliderElement.current?.getBoundingClientRect();
    const offsetX = clientX - (targetElement?.left ?? 0);
    const offsetY = clientY - (targetElement?.top ?? 0);
    setInitialCursorPosition({x: offsetX, y: offsetY});
  };

  const mouseMove = (e: React.MouseEvent) => {
    e.preventDefault()
    const {clientX, clientY} = e;
    const targetElement = sliderElement.current?.getBoundingClientRect();
    const offsetX = clientX - (targetElement?.left ?? 0);
    const offsetY = clientY - (targetElement?.top ?? 0);
    setCursorPosition({x: offsetX, y: offsetY});
  }

  const mouseLeave = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowCursor(false);
  }
  
  return (
    <div onMouseEnter={(e) => mouseEnter(e)} onMouseMove={(e) => mouseMove(e)} onMouseLeave={(e) => mouseLeave(e)} onMouseDown={(e) => setIsDragging(true)} onMouseUp={(e) => setIsDragging(false)} ref={sliderElement} className={cn("overflow-hidden select-none relative p-2", className)} {...props}>
      <motion.div  ref={constraintsRef} drag="x" dragConstraints={{ left: -(constraint - extraSpace.width), right: 0 }} className="flex gap-10 w-max">
       {children} 
      </motion.div>
      <Cursor visible={showCursor} position={{initialX: initialCursorPosition.x, initialY: initialCursorPosition.y, ...cursorPosition}} className="hidden md:flex">{isDragging ? "release": "drag"}</Cursor>
    </div>
  )
}

 export default Slider
