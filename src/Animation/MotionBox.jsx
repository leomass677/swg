// MotionBox.jsx
import { motion } from "framer-motion";
import { fadeIn, zoomIn, slideLeft, staggerContainer } from "./motionVariants";

const variantMap = {
  fade: fadeIn,
  zoom: zoomIn,
  slide: slideLeft,
  stagger: staggerContainer,
};

const MotionBox = ({
  children,
  type = "fade",
  delay = 0.2,
  duration = 0.6,
  y = 20,
  x = 40,
  scale = 0.95,
  className = "",
  hover = false,
  stagger = false,
}) => {
  const variantFn = variantMap[type] || fadeIn;
  const variants = stagger
    ? staggerContainer(0.15, delay)
    : variantFn(type === "slide" ? x : y, delay, duration);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      whileHover={hover ? { scale: 1.05 } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionBox;
