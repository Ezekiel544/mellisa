import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Copy, Check, Twitter, Send, MessageCircle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Socials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [copiedSolana, setCopiedSolana] = useState(false);
  const [copiedEVM, setCopiedEVM] = useState(false);

  const solanaAddress = "7165rzMTpR1ruu185nHnBfetQ4b1aeGSRpn29sA5U7FX";
  const evmAddress = "0x2f80d74b39bb18d29202f36bbdbff494f4787e65";

  const copyToClipboard = (text: string, type: "solana" | "evm") => {
    navigator.clipboard.writeText(text);
    if (type === "solana") {
      setCopiedSolana(true);
      setTimeout(() => setCopiedSolana(false), 2000);
    } else {
      setCopiedEVM(true);
      setTimeout(() => setCopiedEVM(false), 2000);
    }
  };

  const socialLinks = [
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/melissa",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:border-blue-500",
    },
    {
      name: "Telegram",
      icon: Send,
      url: "https://t.me/melissa",
      color: "from-sky-600 to-sky-800",
      hoverColor: "hover:border-sky-500",
    },
    {
      name: "Discord",
      icon: MessageCircle,
      url: "https://discord.com/users/melissa",
      color: "from-indigo-600 to-indigo-800",
      hoverColor: "hover:border-indigo-500",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/1234567890",
      color: "from-green-600 to-green-800",
      hoverColor: "hover:border-green-500",
    },
  ];

  return (
    <section ref={ref} className="py-12 sm:py-20 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-4xl">
        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-white mb-8 sm:mb-12 text-center">Get in Touch</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className={`bg-gradient-to-br ${social.color} border border-white/20 ${social.hoverColor} rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center cursor-pointer group transition-all`}
              >
                <social.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-white text-xs sm:text-sm">{social.name}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* On-Chain Identity */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-white mb-8 sm:mb-12 text-center"
        >
          On-Chain Identity
        </motion.h2>

        <div className="space-y-4 sm:space-y-6">
          {/* Solana Address */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-gradient-to-br from-red-950/40 to-black/60 border border-red-900/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm group hover:border-red-700/60 transition-colors"
          >
            <div className="flex items-center justify-between gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="px-3 py-1 sm:px-4 sm:py-1 bg-purple-900/40 border border-purple-700/40 rounded-full">
                    <span className="text-purple-300 text-xs sm:text-sm">SOLANA</span>
                  </div>
                </div>
                <p className="text-gray-300 break-all font-mono text-xs sm:text-sm">
                  {solanaAddress}
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(solanaAddress, "solana")}
                className="p-2 sm:p-3 bg-red-900/40 hover:bg-red-800/60 rounded-lg sm:rounded-xl transition-colors flex-shrink-0"
              >
                {copiedSolana ? (
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                )}
              </button>
            </div>
          </motion.div>

          {/* EVM Address */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gradient-to-br from-red-950/40 to-black/60 border border-red-900/40 rounded-xl sm:rounded-2xl p-4 sm:p-6 backdrop-blur-sm group hover:border-red-700/60 transition-colors"
          >
            <div className="flex items-center justify-between gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <div className="px-3 py-1 sm:px-4 sm:py-1 bg-blue-900/40 border border-blue-700/40 rounded-full">
                    <span className="text-blue-300 text-xs sm:text-sm">EVM</span>
                  </div>
                </div>
                <p className="text-gray-300 break-all font-mono text-xs sm:text-sm">
                  {evmAddress}
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(evmAddress, "evm")}
                className="p-2 sm:p-3 bg-red-900/40 hover:bg-red-800/60 rounded-lg sm:rounded-xl transition-colors flex-shrink-0"
              >
                {copiedEVM ? (
                  <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 sm:w-5 sm:h-5 text-red-400" />
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}