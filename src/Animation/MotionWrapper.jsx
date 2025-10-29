import { motion } from "framer-motion";

const MotionWrapper = ({
  children,
  delay = 0.2,
  duration = 0.6,
  y = 20,
  hoverScale = 1.05,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay, duration, ease: "easeOut" }}
      whileHover={{ scale: hoverScale }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
