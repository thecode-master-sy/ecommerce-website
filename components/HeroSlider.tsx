import { motion, MotionValue } from "framer-motion";
import SliderElement from "./SliderElement";
import { categoryDatas } from "@/utils/category-data";

export default function HeroSlider({ x }: { x?: MotionValue<string> }) {
  return (
    <motion.div
      style={{ x }}
      className="flex flex-col md:flex-row md:absolute md:top-20 md:left-1/2 gap-28 col-span-12 mt-4 md:mt-0 md:h-[calc(100vh-5.8rem)]"
    >
      {categoryDatas.map((categoryData, index) => (
        <SliderElement
          href={categoryData.href}
          category={categoryData.category}
          key={index}
        />
      ))}
    </motion.div>
  );
}
