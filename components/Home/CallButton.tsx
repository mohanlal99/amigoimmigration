"use client";

import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "@nextui-org/link";

const CallButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const ringAnimation = {
    opacity: [0.5, 0],
    scale: [1, 1.5],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeOut",
    },
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Ripple effect rings */}
        <div className="absolute inset-0">
          <motion.div
            animate={ringAnimation}
            className="absolute inset-0 rounded-full bg-primary/20"
          />
          <motion.div
            animate={ringAnimation}
            className="absolute inset-0 rounded-full bg-primary/20"
            style={{ animationDelay: "-0.5s" }}
          />
        </div>

        {/* Main button */}
        <Link
          aria-label="Call +91-9887699703"
          href="tel:+91-9887699703" // Add tel link here to initiate a call
        >
          <motion.button
            aria-label="Call Button"
            className="relative h-16 w-16 rounded-full bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg hover:shadow-xl"
            name="Contact Call Button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div
              animate={pulseAnimation}
              className="absolute inset-0 rounded-full bg-primary/20"
            />
            <motion.div
              animate={{ rotate: isHovered ? [0, -15, 15, -15, 15, 0] : 0 }}
              className="relative z-10 flex h-full items-center justify-center"
              transition={{ duration: 0.5 }}
            >
              <Phone className="h-7 w-7" />
            </motion.div>
          </motion.button>
        </Link>

        {/* Phone number popup */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              animate={{ opacity: 1, scale: 1, x: 0 }}
              className="absolute right-20 top-0 -translate-y-1/2 whitespace-nowrap"
              exit={{ opacity: 0, scale: 0.8, x: -10 }}
              initial={{ opacity: 0, scale: 0.8, x: -10 }}
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary/90 p-[2px]">
                <div className="relative rounded-xl bg-background/10 px-6 py-3 backdrop-blur-sm">
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-primary-foreground"
                    initial={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.1 }}
                  >
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">+91-9887699703</span>
                  </motion.div>
                </div>
                {/* Animated border gradient */}
                <motion.div
                  animate={{
                    x: ["0%", "100%"],
                  }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/50 via-primary to-primary/50"
                  style={{ filter: "blur(8px)" }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CallButton;
