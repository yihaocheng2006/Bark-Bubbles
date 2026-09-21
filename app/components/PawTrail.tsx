"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const PAW_TRAIL_COUNT = 12;

function PawPrint({
  scrollYProgress,
  index,
  total,
}: {
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
}) {
  const topPercent = 4 + (index / (total - 1)) * 88;
  const threshold = index / (total - 1);
  const appearStart = Math.max(0, threshold - 0.035);
  const opacity = useTransform(scrollYProgress, [appearStart, threshold], [0, 0.55]);
  const scale = useTransform(scrollYProgress, [appearStart, threshold], [0.3, 1]);
  const isLeftFoot = index % 2 === 0;

  return (
    <motion.div
      aria-hidden="true"
      style={{
        top: `${topPercent}%`,
        opacity,
        scale,
        x: isLeftFoot ? -2 : 12,
        rotate: isLeftFoot ? -22 : 22,
      }}
      className="pointer-events-none fixed right-4 z-30 h-3.5 w-3.5 -translate-y-1/2 text-[#6b4423] sm:right-6"
    >
      <div className="h-full w-full rotate-180">
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
          <ellipse cx="12" cy="16" rx="6" ry="5" />
          <ellipse cx="5" cy="8" rx="2.2" ry="3" />
          <ellipse cx="10" cy="5" rx="2.2" ry="3" />
          <ellipse cx="14" cy="5" rx="2.2" ry="3" />
          <ellipse cx="19" cy="8" rx="2.2" ry="3" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function PawTrail() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {Array.from({ length: PAW_TRAIL_COUNT }).map((_, i) => (
        <PawPrint
          key={i}
          scrollYProgress={scrollYProgress}
          index={i}
          total={PAW_TRAIL_COUNT}
        />
      ))}
    </>
  );
}
