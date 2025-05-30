"use client";
import { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaDiscord, FaSlack } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const socials = [
  {
    name: "Instagram",
    user: "@dann.mib",
    color: "bg-gradient-to-br from-pink-500 via-orange-400 to-yellow-400",
    icon: <FaInstagram size={64} className="opacity-80" />,
    url: "https://instagram.com/dann.mib",
    text: "text-white"
  },
  {
    name: "LinkedIn",
    user: "Danilo Montezuma",
    color: "bg-[#0077B5]",
    icon: <FaLinkedin size={64} className="opacity-90" />,
    url: "https://linkedin.com/in/danilomontezuma",
    text: "text-white"
  },
  {
    name: "GitHub",
    user: "@danrtx",
    color: "bg-[#181a1b] dark:bg-dark-card",
    icon: <FaGithub size={64} className="opacity-90" />,
    url: "https://github.com/danrtx",
    text: "text-white dark:text-dark-text"
  },
  {
    name: "Discord",
    user: "dxl#0828",
    color: "bg-[#5865F2]",
    icon: <FaDiscord size={64} className="opacity-90" />,
    url: "https://discord.com/users/dxl#0828",
    text: "text-white"
  },
  {
    name: "Slack",
    user: "Danilo Andres Montezuma Ibarra",
    color: "bg-gradient-to-br from-[#36C5F0] via-[#2EB67D] to-[#ECB22E]",
    icon: <FaSlack size={64} className="opacity-90" />,
    url: "https://slack.com",
    text: "text-white"
  },
];

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.15,
      duration: 0.7,
      ease: "easeInOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function SocialPage() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <main className="w-screen h-screen flex flex-col sm:flex-row items-stretch justify-stretch bg-blue-50 dark:bg-dark-bg overflow-hidden">
      <motion.nav
        className="flex w-full h-full flex-col sm:flex-row"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {socials.map((s, i) => {
          const isActive = active === i;
          const flexValue = active === null ? 1 : isActive ? (window.innerWidth < 640 ? 1.2 : 3) : (window.innerWidth < 640 ? 0.9 : 0.7);
          return (
            <motion.article
              key={s.name}
              className={`flex flex-col items-center justify-center cursor-pointer ${s.color} ${s.text} w-full sm:w-auto min-h-[120px] sm:min-h-0 py-8 sm:py-0`}
              variants={itemVariants}
              animate={{ flex: flexValue }}
              transition={{ type: "spring", stiffness: 80, damping: 18, duration: 0.5 }}
              style={{ minWidth: 0 }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onClick={() => window.open(s.url, "_blank")}
            >
              <figure className="flex flex-col items-center gap-2 sm:gap-4 select-none w-full">
                <span className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-center w-full break-words">{s.user}</span>
                <span className="block text-5xl sm:text-6xl md:text-7xl">{s.icon}</span>
              </figure>
            </motion.article>
          );
        })}
      </motion.nav>
    </main>
  );
} 