import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, TrendingUp, Users, DollarSign, Image } from "lucide-react";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      name: "Ugly Ducks",
      description:
        "Supported their NFT sales campaign, helping them sell out nearly their entire collection.",
      icon: Image,
      status: "Completed",
    },
    {
      name: "Bonga Meme",
      description:
        "Drove growth by scaling market cap from $100K to over $5M through targeted engagement and strategy.",
      icon: TrendingUp,
      status: "Completed",
      highlight: "$100K → $5M",
    },
    {
      name: "Backpack Exchange",
      description:
        "Contributed over 500 direct referrals and generated $500K in trading volume within a month.",
      icon: DollarSign,
      status: "Completed",
      highlight: "$500K Volume",
    },
    {
      name: "Golden Donkey",
      description: "Helped successfully sell out 1,000 NFTs from their collection.",
      icon: Image,
      status: "Completed",
      highlight: "1K NFTs Sold",
    },
    {
      name: "Ulalo",
      description:
        "Boosted project visibility and brand awareness within the Web3 community.",
      icon: TrendingUp,
      status: "Completed",
    },
    {
      name: "Onlyplayclub",
      description:
        "Increased their reach by growing followers from 8K to over 15K in a week, significantly enhancing visibility.",
      icon: Users,
      status: "Completed",
      highlight: "8K → 15K in 1 week",
    },
    {
      name: "Babesmemcoin",
      description:
        "Currently driving adoption by supporting VIP badge sales and strengthening community engagement.",
      icon: Users,
      status: "Ongoing",
    },
    {
      name: "Switchive",
      description:
        "Assisting with brand visibility and onboarding new users through active referrals and promotions.",
      icon: TrendingUp,
      status: "Ongoing",
    },
  ];

  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-white mb-8 sm:mb-16 text-center"
        >
          Projects Worked For
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-red-950/30 to-black/50 border border-red-900/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm group cursor-pointer relative overflow-hidden"
            >
              {/* Animated background on hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-red-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />

              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="p-2 sm:p-3 bg-red-900/40 rounded-lg sm:rounded-xl group-hover:bg-red-800/40 transition-colors">
                      <project.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                    </div>
                    <div>
                      <h3 className="text-white mb-1 text-sm sm:text-base">{project.name}</h3>
                      <span
                        className={`inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs ${
                          project.status === "Ongoing"
                            ? "bg-green-900/40 text-green-400 border border-green-700/40"
                            : "bg-red-900/40 text-red-400 border border-red-700/40"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-red-400 transition-colors flex-shrink-0" />
                </div>

                {/* Highlight */}
                {project.highlight && (
                  <div className="mb-2 sm:mb-3 inline-block px-2 sm:px-3 py-1 bg-red-800/30 border border-red-700/50 rounded-lg">
                    <span className="text-red-300 text-xs sm:text-sm">{project.highlight}</span>
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}