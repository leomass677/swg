import { motion } from "framer-motion";
export default function AvailabilityBadge() {
  return (
    <div className="flex items-center space-x-2">
      {" "}
      <motion.div
        className="w-[4px] h-[4px] rounded-full bg-green-500 animate-pulse"
        animate={{ scale: [1, 2.5, 3.5], opacity: [1, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />{" "}
    </div>
  );
}
