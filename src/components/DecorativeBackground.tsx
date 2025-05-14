"use client";
import { motion } from "framer-motion";

/**
 * DecorativeBackground
 * Fondo decorativo con blobs, ondas y figuras geométricas animadas.
 * Se puede extender con la prop 'variant' para diferentes páginas.
 */
export default function DecorativeBackground() {
  return (
    <section className="pointer-events-none fixed inset-0 -z-10 w-full h-full overflow-hidden">
      {/* Blob grande superior izquierda */}
      <motion.figure
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.4, 0.5, 0.4],
          scale: [1, 1.1, 1],
          y: [0, -20, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -top-32 -left-32 w-[480px] h-[480px] bg-gradient-to-br from-blue-300/40 to-blue-500/40 rounded-full blur-3xl"
      />

      {/* Blob mediano derecha */}
      <motion.figure
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.3, 0.4, 0.3],
          scale: [1, 1.2, 1],
          y: [0, 30, 0]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/4 -right-24 w-[380px] h-[380px] bg-gradient-to-bl from-blue-400/30 to-blue-600/30 rounded-full blur-3xl"
      />

      {/* Círculo flotante central */}
      <motion.figure
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0.2, 0.3, 0.2],
          scale: [1, 1.3, 1],
          rotate: [0, 360]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-300/30 rounded-full blur-2xl"
      />

      {/* Rectángulos flotantes */}
      <motion.figure
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.15, 0.25, 0.15],
          rotate: [0, 45, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 left-1/4 w-40 h-20 bg-blue-400/30 rounded-2xl blur-2xl"
      />

      <motion.figure
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          rotate: [45, 0, 45],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
        className="absolute top-32 right-1/4 w-32 h-32 bg-blue-500/20 rounded-2xl blur-2xl"
      />
    </section>
  );
} 