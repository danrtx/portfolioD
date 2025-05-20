"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiHtml5, SiNextdotjs, SiVite, SiMysql } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const techs = [
  { icon: <FaJs size={64} className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact size={64} className="text-blue-400" />, name: "ReactJS" },
  { icon: <SiTailwindcss size={64} className="text-cyan-400" />, name: "Tailwind" },
  { icon: <SiTypescript size={64} className="text-blue-600" />, name: "TypeScript" },
  { icon: <SiHtml5 size={64} className="text-orange-500" />, name: "HTML" },
  { icon: <SiNextdotjs size={64} style={{ color: '#111' }} />, name: "Next.js" },
  { icon: <SiVite size={64} className="text-purple-500" />, name: "Vite" },
  { icon: <SiMysql size={64} className="text-blue-700" />, name: "SQL" },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const showTechs = techs.slice(index, index + 4);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoScrollTimeout = useRef<NodeJS.Timeout | null>(null);

  // Cambio automático de página
  useEffect(() => {
    if (autoScrollTimeout.current) clearTimeout(autoScrollTimeout.current);
    autoScrollTimeout.current = setTimeout(() => {
      const totalPages = Math.ceil(techs.length / 4);
      const currentPage = Math.floor(index / 4);
      const nextPage = (currentPage + 1) % totalPages;
      setIndex(nextPage * 4);
    }, 3000);
    return () => {
      if (autoScrollTimeout.current) clearTimeout(autoScrollTimeout.current);
    };
  }, [index, techs.length]);

  // Handler para interacción del usuario (reinicia temporizador)
  const handleUserInteraction = (cb: () => void) => {
    if (autoScrollTimeout.current) clearTimeout(autoScrollTimeout.current);
    cb();
  };

  const prev = () => setIndex((i) => (i === 0 ? 0 : i - 1));
  const next = () => setIndex((i) => (i + 4 >= techs.length ? i : i + 1));

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 dark:from-dark-bg dark:via-dark-bg dark:to-dark-bg">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between mt-28 gap-8 px-6 py-8 bg-white/80 dark:bg-dark-card/80 rounded-3xl shadow-xl dark:shadow-dark-card/50 border border-blue-100 dark:border-dark-border"
        style={{ backdropFilter: 'blur(6px)' }}
      >
        <article className="flex-1">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-2 text-black dark:text-dark-text font-poppins"
          >
            Danilo Montezuma
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-xl text-gray-700 dark:text-gray-300 mb-2 font-inter"
          >
            Ingeniero de software
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-base text-blue-700 dark:text-blue-400 mb-6 font-inter"
          >
            Construyendo experiencias digitales memorables
          </motion.p>
          <Link href="/social">
            <motion.button
              whileHover={{ scale: 1.07, boxShadow: "0 4px 24px 0 rgba(59,130,246,0.15)" }}
              className="rounded-full px-6 py-2 bg-blue-200 dark:bg-blue-700 hover:bg-blue-300 dark:hover:bg-blue-800 text-black dark:text-white font-semibold shadow flex items-center gap-2 transition-all duration-200 focus:outline-none"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="#2563eb" d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10C22 6.477 17.523 2 12 2Zm0 18c-4.418 0-8-3.582-8-8 0-1.657.672-3.156 1.757-4.243l10.486 10.486A7.963 7.963 0 0 1 12 20Zm6.243-3.757L7.757 5.757A7.963 7.963 0 0 1 12 4c4.418 0 8 3.582 8 8 0 1.657-.672 3.156-1.757 4.243Z"/></svg>
              Redes sociales
            </motion.button>
          </Link>
        </article>
        <motion.figure
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hidden md:flex flex-1 items-center justify-center"
        >
          <motion.figure
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative w-72 h-72 rounded-full bg-blue-300 dark:bg-blue-600 opacity-80 shadow-lg dark:shadow-dark-card/50 border-4 border-blue-200 dark:border-blue-800 flex items-center justify-center overflow-hidden"
          >
            <Image 
              src="/img/foto.png"
              alt="Danilo Montezuma"
              layout="fill"
              objectFit="cover"
            />
          </motion.figure>
        </motion.figure>
      </motion.section>
      {/* Divider decorativo */}
      <hr className="w-full max-w-2xl h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 dark:from-blue-800 dark:via-blue-600 dark:to-blue-800 rounded-full my-10 opacity-70" />
      {/* Carousel */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="w-full flex flex-col items-center"
      >
        <nav
          ref={carouselRef}
          className="flex items-center bg-blue-100 dark:bg-dark-card rounded-full px-6 py-4 shadow-lg dark:shadow-dark-card/50 max-w-3xl w-full"
          onWheel={e => {
            e.preventDefault();
            handleUserInteraction(() => {
              if (e.deltaY > 0 || e.deltaX > 0) {
                if (index + 4 < techs.length) setIndex(index + 1);
              } else if (e.deltaY < 0 || e.deltaX < 0) {
                if (index > 0) setIndex(index - 1);
              }
            });
          }}
          style={{ cursor: 'grab' }}
        >
          <div className="flex-1 flex justify-center gap-8 relative min-h-[120px] w-full">
            <AnimatePresence mode="wait" initial={false}>
              <motion.ul
                key={index}
                className="flex justify-center gap-8 w-full"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
              >
                {showTechs.map((tech, i) => (
                  <li
                    key={i}
                    className="flex flex-col items-center relative group"
                    onMouseEnter={() => setHoveredTech(i)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <motion.figure
                      whileHover={{ scale: 1.12 }}
                      className="w-20 h-20 flex items-center justify-center rounded-full bg-white dark:bg-dark-card shadow-md dark:shadow-dark-card/30 mb-2 transition-all duration-200"
                    >
                      {tech.icon}
                    </motion.figure>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</span>
                    {/* Tooltip */}
                    {hoveredTech === i && (
                      <motion.aside
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-700 dark:bg-blue-900 text-white dark:text-white text-xs rounded px-3 py-1 shadow-lg z-10"
                      >
                        {tech.name}
                      </motion.aside>
                    )}
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </nav>
        {/* Puntos indicadores debajo del carousel */}
        <div className="flex justify-center mt-4 gap-2">
          {[...Array(Math.ceil(techs.length / 4))].map((_, pageIdx) => (
            <button
              key={pageIdx}
              onClick={() => handleUserInteraction(() => setIndex(pageIdx * 4))}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${index === pageIdx * 4 ? 'bg-blue-600 dark:bg-blue-400 scale-125' : 'bg-blue-300 dark:bg-blue-700 hover:bg-blue-400 dark:hover:bg-blue-600'}`}
              aria-label={`Ir a la página ${pageIdx + 1}`}
            />
          ))}
        </div>
      </motion.section>
      <section className="mt-12 w-full max-w-5xl px-6 pb-32">
        <h2 className="text-xl font-semibold text-black dark:text-dark-text mb-6">Características</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <li className="bg-white/90 dark:bg-dark-card/90 rounded-2xl shadow-md dark:shadow-dark-card/50 p-6 flex flex-col items-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-dark-card/70 border border-blue-100 dark:border-dark-border">
            <span className="text-4xl mb-3 text-blue-500">🛠️</span>
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-300 mb-1">Diseño responsivo</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center text-sm">Se adapta perfectamente a cualquier dispositivo y tamaño de pantalla.</p>
          </li>
          {/* Feature 2 */}
          <li className="bg-white/90 dark:bg-dark-card/90 rounded-2xl shadow-md dark:shadow-dark-card/50 p-6 flex flex-col items-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-dark-card/70 border border-blue-100 dark:border-dark-border">
            <span className="text-4xl mb-3 text-yellow-400">⚡</span>
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-300 mb-1">Alto rendimiento</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center text-sm">Carga rápida y optimización para una experiencia fluida.</p>
          </li>
          {/* Feature 3 */}
          <li className="bg-white/90 dark:bg-dark-card/90 rounded-2xl shadow-md dark:shadow-dark-card/50 p-6 flex flex-col items-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-dark-card/70 border border-blue-100 dark:border-dark-border">
            <span className="text-4xl mb-3 text-green-500">🔒</span>
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-300 mb-1">Seguro</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center text-sm">Buenas prácticas de seguridad y protección de datos.</p>
          </li>
          {/* Feature 4 */}
          <li className="bg-white/90 dark:bg-dark-card/90 rounded-2xl shadow-md dark:shadow-dark-card/50 p-6 flex flex-col items-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-dark-card/70 border border-blue-100 dark:border-dark-border">
            <span className="text-4xl mb-3 text-pink-400">🎨</span>
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-300 mb-1">Interfaz moderna</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center text-sm">Interfaz atractiva, minimalista y fácil de usar.</p>
          </li>
          {/* Feature 5 */}
          <li className="bg-white/90 dark:bg-dark-card/90 rounded-2xl shadow-md dark:shadow-dark-card/50 p-6 flex flex-col items-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-dark-card/70 border border-blue-100 dark:border-dark-border">
            <span className="text-4xl mb-3 text-indigo-500">🔗</span>
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-300 mb-1">Integraciones</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center text-sm">Fácil integración con APIs y servicios externos.</p>
          </li>
          {/* Feature 6 */}
          <li className="bg-white/90 dark:bg-dark-card/90 rounded-2xl shadow-md dark:shadow-dark-card/50 p-6 flex flex-col items-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl dark:hover:shadow-dark-card/70 border border-blue-100 dark:border-dark-border">
            <span className="text-4xl mb-3 text-cyan-500">💡</span>
            <h3 className="font-bold text-lg text-blue-900 dark:text-blue-300 mb-1">Innovador</h3>
            <p className="text-gray-600 dark:text-gray-400 text-center text-sm">Soluciones creativas y tecnología de vanguardia.</p>
          </li>
        </ul>
      </section>
    </main>
  );
}