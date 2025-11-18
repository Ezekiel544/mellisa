import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="py-12 sm:py-16 px-4 sm:px-6 relative border-t border-red-900/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Quote */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-gray-400 italic text-sm sm:text-base md:text-lg mb-6 sm:mb-8 px-4"
          >
            "Building the decentralized future, one block at a time."
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-red-800 to-red-600 mx-auto mb-6 sm:mb-8 rounded-full"
          />

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-gray-500 text-sm sm:text-base"
          >
            © 2025 Melissa | All Rights Reserved
          </motion.p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-1 bg-gradient-to-r from-transparent via-red-700 to-transparent" />
    </footer>
  );
}