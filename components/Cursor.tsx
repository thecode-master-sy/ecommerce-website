import { AnimatePresence, MotionProps, motion } from "framer-motion";
import { cn } from "@/utils/utils";

type CursorProps = {
  position: { initialX: number; initialY: number; x: number; y: number };
  visible: boolean;
} & React.HTMLAttributes<HTMLDivElement> &
  MotionProps;

const Cursor: React.FC<CursorProps> = ({
  className,
  position: { x, y, initialX, initialY },
  visible,
  children,
}) => {
  const cursorVariants = {
    initial: {
      scale: 0,
      x: initialX - 40 <= 0 ? 0 : initialX - 40,
      y: initialY - 40 <= 0 ? 0 : initialY - 40,
      opacity: 0,
    },
    animate: {
      scale: 1,
      x: x - 40 <= 0 ? 0 : x - 40,
      y: y - 40 <= 0 ? 0 : y - 40,
      opacity: 1,
    },
    exit: {
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          variants={cursorVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className={cn(
            `w-20 h-20 flex justify-center items-center bg-ecommerce-light border border-foreground rounded-full absolute top-0 left-0 pointer-events-none`,
            className,
          )}
        >
          <p className="uppercase">{children}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { Cursor };
