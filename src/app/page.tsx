"use client";
import { useState } from "react";
import Link from "next/link";
import { FaJs, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

const techs = [
  { icon: <FaJs size={64} className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact size={64} className="text-blue-400" />, name: "ReactJS" },
  { icon: <SiTailwindcss size={64} className="text-cyan-400" />, name: "Tailwind" },
  { icon: <SiTypescript size={64} className="text-blue-600" />, name: "TypeScript" },
];

export default function Home() {
  const [index, setIndex] = useState(0);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);
  const showTechs = techs.slice(index, index + 3);

  const prev = () => setIndex((i) => (i === 0 ? 0 : i - 1));
  const next = () => setIndex((i) => (i + 3 >= techs.length ? i : i + 1));

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-start bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between mt-28 gap-8 px-6 py-8 bg-white/80 rounded-3xl shadow-xl border border-blue-100"
        style={{ backdropFilter: 'blur(6px)' }}
      >
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl md:text-5xl font-bold mb-2 text-black font-poppins"
          >
            Danilo Montezuma
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-xl text-gray-700 mb-2 font-inter"
          >
            Software engineer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-base text-blue-700 mb-6 font-inter"
          >
            Construyendo experiencias digitales memorables
          </motion.p>
          <Link href="/social">
            <motion.button
              whileHover={{ scale: 1.07, boxShadow: "0 4px 24px 0 rgba(59,130,246,0.15)" }}
              className="rounded-full px-6 py-2 bg-blue-200 hover:bg-blue-300 text-black font-semibold shadow flex items-center gap-2 transition-all duration-200 focus:outline-none"
            >
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path fill="#2563eb" d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10C22 6.477 17.523 2 12 2Zm0 18c-4.418 0-8-3.582-8-8 0-1.657.672-3.156 1.757-4.243l10.486 10.486A7.963 7.963 0 0 1 12 20Zm6.243-3.757L7.757 5.757A7.963 7.963 0 0 1 12 4c4.418 0 8 3.582 8 8 0 1.657-.672 3.156-1.757 4.243Z"/></svg>
              Social
            </motion.button>
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hidden md:flex flex-1 items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-72 h-72 rounded-full bg-blue-300 opacity-80 mx-auto shadow-lg border-4 border-blue-200"
          />
        </motion.div>
      </motion.section>
      {/* Divider decorativo */}
      <div className="w-full max-w-2xl h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-full my-10 opacity-70" />
      {/* Carousel */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="w-full flex justify-center"
      >
        <div className="flex items-center bg-blue-100 rounded-full px-6 py-4 shadow-lg max-w-3xl w-full">
          <button onClick={prev} className="focus:outline-none text-3xl text-blue-400 hover:text-blue-600 transition disabled:opacity-30" disabled={index === 0}>
            &#8592;
          </button>
          <div className="flex-1 flex justify-center gap-8">
            {showTechs.map((tech, i) => (
              <div
                key={i}
                className="flex flex-col items-center relative group"
                onMouseEnter={() => setHoveredTech(i)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.12 }}
                  className="w-20 h-20 flex items-center justify-center rounded-full bg-white shadow-md mb-2 transition-all duration-200"
                >
                  {tech.icon}
                </motion.div>
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                {/* Tooltip */}
                {hoveredTech === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-10 left-1/2 -translate-x-1/2 bg-blue-700 text-white text-xs rounded px-3 py-1 shadow-lg z-10"
                  >
                    {tech.name}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
          <button onClick={next} className="focus:outline-none text-3xl text-blue-400 hover:text-blue-600 transition disabled:opacity-30" disabled={index + 3 >= techs.length}>
            &#8594;
          </button>
        </div>
      </motion.section>
      <div className="mt-12 w-full max-w-5xl px-6">
        <h2 className="text-xl font-semibold text-black mb-6">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white/90 rounded-2xl shadow-md p-6 flex flex-col items-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl border border-blue-100">
            <span className="text-4xl mb-3 text-blue-500">🛠️</span>
            <h3 className="font-bold text-lg text-blue-900 mb-1">Responsive Design</h3>
            <p className="text-gray-600 text-center text-sm">Se adapta perfectamente a cualquier dispositivo y tamaño de pantalla.</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white/90 rounded-2xl shadow-md p-6 flex flex-col items-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl border border-blue-100">
            <span className="text-4xl mb-3 text-yellow-400">⚡</span>
            <h3 className="font-bold text-lg text-blue-900 mb-1">Fast Performance</h3>
            <p className="text-gray-600 text-center text-sm">Carga rápida y optimización para una experiencia fluida.</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white/90 rounded-2xl shadow-md p-6 flex flex-col items-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl border border-blue-100">
            <span className="text-4xl mb-3 text-green-500">🔒</span>
            <h3 className="font-bold text-lg text-blue-900 mb-1">Secure</h3>
            <p className="text-gray-600 text-center text-sm">Buenas prácticas de seguridad y protección de datos.</p>
          </div>
          {/* Feature 4 */}
          <div className="bg-white/90 rounded-2xl shadow-md p-6 flex flex-col items-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl border border-blue-100">
            <span className="text-4xl mb-3 text-pink-400">🎨</span>
            <h3 className="font-bold text-lg text-blue-900 mb-1">Modern UI</h3>
            <p className="text-gray-600 text-center text-sm">Interfaz atractiva, minimalista y fácil de usar.</p>
          </div>
          {/* Feature 5 */}
          <div className="bg-white/90 rounded-2xl shadow-md p-6 flex flex-col items-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl border border-blue-100">
            <span className="text-4xl mb-3 text-indigo-500">🔗</span>
            <h3 className="font-bold text-lg text-blue-900 mb-1">Integrations</h3>
            <p className="text-gray-600 text-center text-sm">Fácil integración con APIs y servicios externos.</p>
          </div>
          {/* Feature 6 */}
          <div className="bg-white/90 rounded-2xl shadow-md p-6 flex flex-col items-center transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl border border-blue-100">
            <span className="text-4xl mb-3 text-cyan-500">💡</span>
            <h3 className="font-bold text-lg text-blue-900 mb-1">Innovative</h3>
            <p className="text-gray-600 text-center text-sm">Soluciones creativas y tecnología de vanguardia.</p>
          </div>
        </div>
      </div>
    </main>
  );
}