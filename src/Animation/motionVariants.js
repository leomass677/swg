// motionVariants.js
export const fadeIn = (y = 20, delay = 0.2, duration = 0.6) => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration, ease: "easeOut" },
  },
});

export const zoomIn = (scale = 0.95, delay = 0.2, duration = 0.5) => ({
  hidden: { opacity: 0, scale },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { delay, duration, ease: "easeOut" },
  },
});

export const slideLeft = (x = 40, delay = 0.2, duration = 0.6) => ({
  hidden: { opacity: 0, x },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay, duration, ease: "easeOut" },
  },
});

export const staggerContainer = (stagger = 0.15, delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});
