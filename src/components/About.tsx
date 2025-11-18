import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Book, Pen, Users, Plane, Cpu } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const hobbies = [
    { icon: Book, text: "Reading" },
    { icon: Pen, text: "Writing thought pieces" },
    { icon: Users, text: "Hosting conversations" },
    { icon: Plane, text: "Traveling" },
    { icon: Cpu, text: "Exploring new tech" },
  ];

  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-red-950/30 to-black/50 backdrop-blur-sm border border-red-900/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12"
        >
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center mb-8 sm:mb-16"
          >
            <div className="text-4xl sm:text-6xl text-red-500 mb-2 sm:mb-4">"</div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 italic mb-2 sm:mb-4 px-2">
              Web3 isn't just the future — it's the present we're building together.
            </p>
            <div className="text-4xl sm:text-6xl text-red-500 rotate-180 inline-block">"</div>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-white mb-6 sm:mb-8 text-center">Hi, I'm Melissa</h2>
            <div className="text-center mb-6 sm:mb-8">
              <span className="inline-block px-6 py-2 sm:px-8 sm:py-3 bg-gradient-to-r from-red-800 to-red-900 text-white rounded-full text-base sm:text-lg md:text-xl">
                Fully in Web3
              </span>
            </div>
          </motion.div>

          {/* Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h3 className="text-white mb-6 sm:mb-8 text-center text-xl sm:text-2xl">Hobbies & Interests</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6">
              {hobbies.map((hobby, index) => (
                <motion.div
                  key={hobby.text}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-gradient-to-br from-red-900/40 to-red-950/40 border border-red-800/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center cursor-pointer group"
                >
                  <hobby.icon className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 mx-auto mb-2 sm:mb-3 group-hover:text-red-300 transition-colors" />
                  <p className="text-gray-300 text-xs sm:text-sm">{hobby.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}