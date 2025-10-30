import { motion } from "framer-motion";
export default function AvailabilityBadge() {
  return (
    <div className="flex items-center space-x-2">
      {" "}
      <motion.div
        className="w-[15px] h-[15px] rounded-full bg-green-500"
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />{" "}
    </div>
  );
}
