import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import profileImage from "figma:asset/bf02836cfde1eaf859347cb3d1bf4a1b62da75c2.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 md:w-72 md:h-72 bg-gradient-to-r from-red-900 to-red-700 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-56 h-56 md:w-96 md:h-96 bg-gradient-to-l from-red-800 to-red-600 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              duration: 1,
            }}
            className="mb-6 sm:mb-8 inline-block"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <img
                src={profileImage}
                alt="Melissa"
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-red-700 relative z-10"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white mb-4 sm:mb-6 px-4"
          >
            Welcome to Melissa's Portfolio
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto text-base sm:text-lg md:text-xl px-4"
          >
            Your go-to KOL and Web3 marketer, building impact through strategy,
            community, and creativity.
          </motion.p>

          {/* Role badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16 px-4"
          >
            {[
              "KOL",
              "Marketer",
              "Macro Ambassador",
              "Growth Strategist",
              "Space Host",
            ].map((role, index) => (
              <motion.span
                key={role}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-3 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-sm bg-gradient-to-r from-red-900/50 to-red-800/50 border border-red-700 rounded-full text-red-100 backdrop-blur-sm"
              >
                {role}
              </motion.span>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="w-8 h-8 text-red-500" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}