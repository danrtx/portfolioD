"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

/**
 * DecorativeBackground
 * Fondo decorativo con blobs, ondas y figuras geométricas animadas.
 * Se puede extender con la prop 'variant' para diferentes páginas.
 */
export default function DecorativeBackground({ variant = "default" }: { variant?: string }) {
  // Animación de onda infinita para el SVG inferior
  const waveControls = useAnimation();
  useEffect(() => {
    waveControls.start({
      y: [0, -20, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut" }
    });
  }, [waveControls]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 w-full h-full overflow-hidden">
      {/* Blob grande superior izquierda con animación float */}
      <motion.svg
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1, y: [0, -24, 0] }}
        transition={{ duration: 1.2, delay: 0.2, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        className="absolute -top-32 -left-32 w-[480px] h-[480px]"
        viewBox="0 0 480 480"
        fill="none"
      >
        <defs>
          <radialGradient id="blueBlob" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" stopOpacity="0.7" />
          </radialGradient>
        </defs>
        <ellipse cx="240" cy="240" rx="220" ry="180" fill="url(#blueBlob)" />
      </motion.svg>
      {/* Onda inferior derecha animada */}
      <motion.svg
        animate={waveControls}
        initial={{ opacity: 0, y: 60 }}
        className="absolute bottom-0 right-0 w-[600px] h-[220px]"
        viewBox="0 0 600 220"
        fill="none"
      >
        <motion.path
          d="M0 120 Q 150 200 300 120 T 600 120 V220 H0Z"
          fill="#3b82f6"
          fillOpacity="0.25"
          animate={{
            d: [
              "M0 120 Q 150 200 300 120 T 600 120 V220 H0Z",
              "M0 120 Q 150 180 300 140 T 600 120 V220 H0Z",
              "M0 120 Q 150 200 300 120 T 600 120 V220 H0Z"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
      {/* Figura geométrica decorativa (círculo) con rotación lenta */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.18, scale: 1, rotate: [0, 360] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/4 w-40 h-40 bg-blue-300 rounded-full blur-2xl"
      />
      {/* Figura geométrica decorativa (rectángulo rotado) con animación de escala y opacidad */}
      <motion.div
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: [0.12, 0.22, 0.12], rotate: [18, 24, 18], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-24 right-1/3 w-32 h-16 bg-blue-200 rounded-2xl blur-xl rotate-12"
      />
    </div>
  );
} 