"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Tecnologías", items: [
    "JavaScript", "ReactJS", "Tailwind", "TypeScript", "HTML", "Next.js", "Vite", "SQL"
  ] },
  { category: "Tools", items: ["Git", "Figma", "Visual Paradigm"] }
];

export default function About() {
  return (
    <main className="min-h-screen w-full bg-blue-50 flex items-center justify-center relative overflow-hidden">
      {/* Blobs y decorativos de fondo */}
      <motion.div className="pointer-events-none fixed inset-0 -z-10 w-full h-full overflow-hidden" aria-hidden="true">
        {/* Blob principal animado */}
        <motion.div
          initial={{ scale: 1, borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
          animate={{
            y: [0, -20, 0],
            boxShadow: [
              "0 8px 32px 0 rgba(59,130,246,0.15)",
              "0 16px 48px 0 rgba(59,130,246,0.18)",
              "0 8px 32px 0 rgba(59,130,246,0.15)"
            ],
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "20% 60% 30% 70% / 70% 30% 60% 40%",
              "40% 30% 70% 30% / 30% 40% 30% 60%",
              "60% 40% 30% 70% / 60% 30% 70% 40%"
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-[420px] h-[320px] bg-blue-300 blur-[2px] shadow-2xl flex items-center justify-center"
        />
        {/* Círculo decorativo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: [0.12, 0.22, 0.12], scale: [1, 1.2, 1], rotate: [0, 360] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute top-10 right-24 w-24 h-24 bg-blue-200 rounded-full blur-2xl"
        />
        {/* Más decorativos */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: [0.10, 0.18, 0.10], scale: [1, 1.1, 1], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-10 left-1/3 w-24 h-24 bg-blue-100 rounded-full blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: [0.10, 0.18, 0.10], scale: [1, 1.15, 1], x: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-24 right-1/4 w-16 h-16 bg-blue-100 rounded-full blur-xl"
        />
      </motion.div>

      {/* Contenido principal */}
      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center justify-center gap-12 min-h-[60vh] px-4 py-12 mt-8">
        {/* Box circular/distorsionada para el texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 flex items-center justify-center"
        >
          <div
            className="w-full max-w-3xl bg-white/70 shadow-xl border border-blue-200 px-8 py-10 flex flex-col items-center md:items-start gap-6 backdrop-blur-lg"
            style={{
              borderRadius: '2.5rem',
              minHeight: 340,
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
              border: '1.5px solid #c7d2fe',
              background: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-1 text-center md:text-left">Sobre mí</h1>
            <h2 className="text-lg md:text-xl text-blue-700 mb-2 text-center md:text-left font-semibold">Desarrollador Full Stack & Estudiante</h2>
            <p className="text-base md:text-lg text-gray-800 text-center md:text-left">
              ¡Hola! Soy Danilo Montezuma, un apasionado ingeniero de software en formación, actualmente en mi quinto semestre de estudios. Me motiva la curiosidad, la creatividad y el reto de resolver problemas reales a través del código. Mientras continúo construyendo mis habilidades y conocimientos, disfruto explorando áreas como el desarrollo web, la arquitectura de software y el diseño centrado en el usuario.
            </p>
            {/* Skills/intereses */}
            <div className="w-full mt-4">
              <h3 className="text-base font-semibold text-blue-800 mb-2">Tecnologías y Herramientas</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((group, idx) => (
                  <div key={group.category} className="flex flex-col items-center md:items-start">
                    <span className="text-xs font-bold text-blue-500 mb-1 uppercase tracking-wider">{group.category}</span>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item, i) => (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * i + 0.2 * idx }}
                          className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold shadow border border-blue-200 hover:bg-blue-200 transition"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        {/* Figura para la foto al lado */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-56 h-56 bg-white/90 rounded-full shadow-2xl border-4 border-blue-200 flex items-center justify-center overflow-hidden">
            {/* Cuando tengas tu foto, reemplaza el span por <img src='/ruta.jpg' ... /> */}
            <span className="text-blue-400 text-7xl font-bold">:)</span>
          </div>
        </div>
      </div>
    </main>
  );
} 