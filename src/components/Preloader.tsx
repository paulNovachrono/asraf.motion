"use client";

import { useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AppleHelloEffectEnglish } from "@/components/apple-hello-effect-english";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const dismissed = useRef(false);
  const animDone = useRef(false);

  const tryDismiss = () => {
    if (animDone.current) {
      onComplete();
      dismissed.current = true;
    }
  };

  const handleAnimationComplete = () => {
    animDone.current = true;
    setTimeout(tryDismiss, 1200);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <AppleHelloEffectEnglish
          className="h-24 text-canvas"
          durationScale={0.5}
          onAnimationComplete={handleAnimationComplete}
        />
      </motion.div>
    </AnimatePresence>
  );
}
