import { MotionProps, motion } from "framer-motion"
import { cn } from "@/utils/utils"

type CursorProps = {

} & React.HTMLAttributes<HTMLDivElement> & MotionProps

const Cursor:React.FC<CursorProps> = ({className}) => {
  return (
    <motion.div className={cn("w-24 h-24 flex justify-center items-center bg-ecommerce-light border border-foreground rounded-full", className)}>
        <p className="uppercase">Drag</p>
    </motion.div>
  )
}

export { Cursor }
