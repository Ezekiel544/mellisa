import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { TrendingUp, Users, Radio, Target } from "lucide-react";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    { icon: TrendingUp, number: "3+", text: "Years in Web3" },
    { icon: Target, number: "50+", text: "Projects Supported" },
    { icon: Users, number: "100+", text: "Community Activations" },
    { icon: Radio, number: "100+", text: "Twitter Spaces Hosted" },
  ];

  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-white mb-8 sm:mb-16 text-center"
        >
          Experience
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-8 sm:mb-16">
          {highlights.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-red-900/50 to-black/50 border border-red-700/50 rounded-xl sm:rounded-2xl p-4 sm:p-8 text-center backdrop-blur-sm group cursor-pointer"
            >
              <item.icon className="w-8 h-8 sm:w-12 sm:h-12 text-red-400 mx-auto mb-2 sm:mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-2xl sm:text-4xl text-white mb-1 sm:mb-2">{item.number}</div>
              <p className="text-gray-400 text-xs sm:text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Experience Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-gradient-to-br from-red-950/40 to-black/60 border border-red-900/40 rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur-sm"
        >
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
           With over three years of hands-on experience in the Web3 space, I help projects grow by building strong communities, crafting clear and engaging narratives, and driving strategic partnerships. I’ve supported 50+ teams across growth, content strategy, and community activation.


          I’ve hosted 100+ Twitter Spaces, led 100+ community campaigns, and helped projects achieve real results from NFT sellouts to community growth in the thousands and driving millions in market cap growth. 

My focus is simple: connect users to products through communication that feels human, authentic, and impactful.

          </p>
        </motion.div>
      </div>
    </section>
  );
}