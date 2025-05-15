"use client";
import { useState } from "react";
import { FaStar, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import DecorativeBackground from "@/components/DecorativeBackground";

const projects = [
  {
    name: "Cambridge Academy",
    description:
      "My first professional project; Cambridge Academy of Languages, made with React JS",
    preview: "https://react-portfolio-preview.vercel.app/cambridge.png",
    vercel: "https://cambridgev.vercel.app/",
    tech: ["React", "CSS", "Vercel"],
    thumb: "https://react-portfolio-preview.vercel.app/cambridge.png",
  },
  {
    name: "Ecommerce",
    description: "A modern ecommerce platform with payments and admin dashboard.",
    preview: "https://react-portfolio-preview.vercel.app/ecommerce.png",
    vercel: "https://ecommerce-demo.vercel.app/",
    tech: ["Next.js", "Stripe", "Tailwind"],
    thumb: "https://react-portfolio-preview.vercel.app/ecommerce.png",
  },
  {
    name: "Hotel Lindo Sueño",
    description:
      "Hotel booking web app for Lindo Sueño, with calendar and reservations.",
    preview: "https://react-portfolio-preview.vercel.app/hotel.png",
    vercel: "https://hotel-lindo.vercel.app/",
    tech: ["React", "Node.js", "MongoDB"],
    thumb: "https://react-portfolio-preview.vercel.app/hotel.png",
  },
  {
    name: "Fullstack To-do",
    description: "A fullstack to-do app with authentication and real-time sync.",
    preview: "https://react-portfolio-preview.vercel.app/todo.png",
    vercel: "https://fullstack-todo.vercel.app/",
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    thumb: "https://react-portfolio-preview.vercel.app/todo.png",
  },
];

export default function ProjectsPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <DecorativeBackground />
      <motion.div
        className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200 flex flex-col items-center py-8 md:py-12 pt-24"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-8 md:mb-12 font-poppins text-center">
          Projects and experience
        </h1>
        <section className="flex flex-col lg:flex-row w-full max-w-6xl gap-8 md:gap-12 px-4 md:px-8">
          {/* Lista de proyectos */}
          <nav className="relative flex flex-col gap-4 md:gap-6 w-full max-w-md mx-auto lg:w-80 min-w-[220px] max-h-[600px] overflow-y-auto py-4 pr-0 md:pr-4 custom-scrollbar">
            <AnimatePresence>
              {selected !== null && (
                <motion.figure
                  layoutId="highlight"
                  className="absolute left-0 top-0 w-full h-20 rounded-2xl bg-blue-300/80 z-0 shadow-xl"
                  style={{ top: `${selected * 88}px` }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </AnimatePresence>
            {projects.map((p, i) => (
              <div key={p.name} className="relative">
                <motion.button
                  onClick={() => setSelected(i)}
                  className={`relative flex items-center gap-4 px-4 md:px-6 py-5 rounded-2xl font-medium transition-all duration-200 z-10 text-base md:text-lg w-full
                    ${
                      selected === i
                        ? "text-blue-900 scale-105"
                        : "bg-white/70 text-black hover:bg-blue-200 hover:scale-105 shadow-lg"
                    }
                    backdrop-blur-md border border-blue-100`}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <article className="flex flex-col items-start">
                    <span className="font-semibold flex items-center gap-2">
                      {p.name} {selected === i && <FaStar className="text-blue-700" />}
                    </span>
                    <ul className="flex flex-wrap gap-1 mt-1">
                      {p.tech.map((t) => (
                        <li
                          key={t}
                          className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full font-semibold shadow-sm border border-blue-200"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </article>
                </motion.button>
                <AnimatePresence>
                  {selected === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="bg-white/90 border border-blue-100 rounded-b-2xl shadow px-4 md:px-6 py-4 text-gray-800 text-sm overflow-hidden"
                    >
                      <div className="font-semibold text-blue-900 mb-1">Acerca del proyecto</div>
                      <div>{p.description}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Preview y detalles */}
          <section className="flex-1 flex flex-col items-center w-full mt-8 lg:mt-0">
            <AnimatePresence mode="wait">
              {selected === null ? (
                <motion.figure
                  key="vercel"
                  className="flex flex-col items-center justify-center h-64 md:h-full w-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <figure className="relative flex items-center justify-center w-full h-44 md:h-96">
                    <figure className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 md:w-96 h-20 md:h-44 bg-blue-200 rounded-full opacity-60" />
                    <svg width="120" height="120" viewBox="0 0 120 120" className="z-10">
                      <circle cx="60" cy="60" r="60" fill="#111" />
                      <polygon points="80,60 50,40 50,80" fill="#fff" />
                    </svg>
                    <span className="absolute left-1/2 top-full mt-6 -translate-x-1/2 text-blue-900 text-base md:text-xl font-medium text-center">
                      Click on project for information and preview on Vercel
                    </span>
                  </figure>
                </motion.figure>
              ) : (
                <motion.article
                  key={projects[selected].name}
                  className="flex flex-col items-center w-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.figure
                    className="relative flex flex-col items-center justify-center w-full max-w-full md:w-[520px]"
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {projects[selected].name === "Cambridge Academy" && (
                      <div className="w-full flex justify-center max-w-5xl h-48 md:h-[400px] rounded-2xl overflow-auto border-4 border-blue-200 shadow-xl mb-4 bg-[#181a1b]">
                        <iframe
                          src="https://cambridgev.vercel.app/"
                          title="Cambridge Academy Live Preview"
                          width="1440"
                          height="900"
                          style={{
                            border: "none",
                            minWidth: "100vw",
                            minHeight: "300px",
                            display: "block",
                            margin: "auto",
                          }}
                          allowFullScreen
                        />
                      </div>
                    )}
                    <a
                      href={projects[selected].vercel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 md:px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center gap-2 text-base md:text-lg font-semibold transition-all duration-200 border-2 border-white mt-2"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Preview on Vercel
                    </a>
                  </motion.figure>
                </motion.article>
              )}
            </AnimatePresence>
          </section>
        </section>
      </motion.div>
    </>
  );
}
