"use client";

import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-dark-card shadow-lg border border-blue-100 dark:border-blue-900"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <FaMoon className="text-blue-600 dark:text-blue-400 text-xl" />
      ) : (
        <FaSun className="text-yellow-500 text-xl" />
      )}
    </motion.button>
  );
} 