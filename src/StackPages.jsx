import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChristmasPage from "./Christmas";
import BirthdayPage from "./Birthday";

const pages = [
  { component: <BirthdayPage />, key: "birthday" },
  { component: <ChristmasPage />, key: "christmas" },
];

export default function StackPages() {
  const [pageIndex, setPageIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Variants for page animations
  const variants = {
    enter: (direction) => ({
      y: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      y: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  // Helper to measure swipe "power"
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  // When drag ends, check if swipe is strong enough to move to next/previous page
  const handleDragEnd = (event, info) => {
    const { offset, velocity } = info;
    const swipe = swipePower(offset.y, velocity.y);
    if (swipe < -swipeConfidenceThreshold && pageIndex < pages.length - 1) {
      // Swiped up, go to next page
      setDirection(1);
      setPageIndex(pageIndex + 1);
    } else if (swipe > swipeConfidenceThreshold && pageIndex > 0) {
      // Swiped down, go to previous page
      setDirection(-1);
      setPageIndex(pageIndex - 1);
    }
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={pageIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          onDragEnd={handleDragEnd}
          className="absolute h-full w-full"
        >
          {pages[pageIndex].component}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
