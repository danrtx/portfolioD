"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const references = [
  {
    name: "Ruth Stella Montezuma Hernandez",
    testimonial: "Excelente trabajador, estudioso y muy disciplinado",
    phone: "+57 (311) 222333",
    email: "example@hotmail.com",
    avatar: null,
    badge: "Principal",
    role: "Directora"
  },
  {
    name: "Juan Pérez",
    testimonial: "Gran colaborador y siempre dispuesto a aprender.",
    phone: "+57 (312) 1234567",
    email: "juanperez@email.com",
    avatar: null,
    badge: "Recomendado",
    role: "Supervisor"
  },
  {
    name: "María Gómez",
    testimonial: "Responsable, creativo y con gran capacidad de trabajo en equipo.",
    phone: "+57 (313) 7654321",
    email: "mariagomez@email.com",
    avatar: null,
    badge: "Colaboradora",
    role: "Compañera de equipo"
  },
];

export default function ReferencesPage() {
  const [selected, setSelected] = useState(0);
  const [dropdown, setDropdown] = useState(false);
  const ref = references[selected];

  return (
    <main className="min-h-screen w-full bg-blue-50 flex items-center justify-center relative overflow-hidden">
      {/* Difuminado de fondo tipo Projects */}
      <figure className="pointer-events-none fixed inset-0 -z-10 flex items-center justify-center">
        <figure className="w-[900px] h-[400px] bg-blue-200 rounded-full blur-[80px] opacity-60 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
      </figure>
      {/* Blobs y decorativos de fondo (eliminados para dar protagonismo al difuminado) */}

      {/* Contenido principal */}
      <section className="relative z-10 w-full max-w-6xl flex flex-col items-center justify-center gap-8 px-4 py-12">
        {/* Título y subtítulo */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-blue-900 mb-2 text-center drop-shadow-lg"
        >
          Referencias
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-blue-700 mb-8 text-center max-w-2xl"
        >
          Personas que han trabajado conmigo y pueden dar fe de mi ética, profesionalismo y dedicación.
        </motion.p>
        {/* Grid principal */}
        <article className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Columna izquierda: Dropdown y testimonio en tarjeta */}
          <motion.section
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col items-center md:items-start gap-8"
          >
            {/* Dropdown de referentes flotante */}
            <nav className="relative w-full max-w-xs mb-4">
              <button
                className="w-full px-6 py-3 border border-black rounded-full text-base font-medium bg-white/90 flex items-center gap-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => setDropdown((d) => !d)}
                aria-haspopup="listbox"
                aria-expanded={dropdown}
              >
                {ref.avatar && (
                  <img src={ref.avatar} alt={ref.name} className="w-7 h-7 rounded-full mr-2" />
                )}
                <span className="truncate flex-1 text-left">{ref.name}</span>
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <AnimatePresence>
                {dropdown && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-20"
                    tabIndex={-1}
                    role="listbox"
                  >
                    {references.map((r, i) => (
                      <li
                        key={r.name}
                        className={`px-5 py-2 cursor-pointer hover:bg-blue-100 rounded-xl flex items-center gap-2 ${selected === i ? "bg-blue-200 font-semibold" : ""}`}
                        onClick={() => { setSelected(i); setDropdown(false); }}
                        role="option"
                        aria-selected={selected === i}
                        tabIndex={0}
                        onKeyDown={e => { if (e.key === "Enter") { setSelected(i); setDropdown(false); }}}
                      >
                        {r.avatar && (
                          <img src={r.avatar} alt={r.name} className="w-6 h-6 rounded-full mr-2" />
                        )}
                        {r.name}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </nav>
            {/* Testimonio y contacto en tarjeta */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="w-full max-w-md bg-white/80 rounded-3xl shadow-2xl border border-blue-100 px-8 py-10 flex flex-col items-center gap-6 backdrop-blur-md relative"
            >
              {/* Badge de rol */}
              <span className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-300 text-white text-xs font-bold px-6 py-1 rounded-full shadow-lg border-2 border-white uppercase tracking-wider z-10" style={{letterSpacing: 1}}>
                {ref.role}
              </span>
              <motion.p
                key={ref.testimonial}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-2xl md:text-3xl font-light text-center leading-snug text-blue-900"
              >
                {ref.testimonial.split(',').map((line, idx) => (
                  <span key={idx} className="block">{line.trim()}</span>
                ))}
              </motion.p>
              <motion.address
                key={ref.email}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-base text-blue-800 text-center not-italic"
              >
                <p className="mb-1">Phone: {ref.phone}</p>
                <p>Email: {ref.email}</p>
              </motion.address>
            </motion.article>
          </motion.section>
          {/* Columna derecha: Avatar sobre blob */}
          <motion.figure
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col items-center justify-center relative min-h-[350px] py-8"
          >
            <figure className="relative flex flex-col items-center justify-center w-full h-full">
              {/* Avatar grande centrado sobre el blob */}
              <figure className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-white/90 rounded-full shadow-2xl border-4 border-blue-200 flex items-center justify-center overflow-hidden z-10">
                {ref.avatar ? (
                  <img src={ref.avatar} alt={ref.name} className="w-full h-full object-cover rounded-full" />
                ) : (
                  <span className="text-blue-400 text-6xl font-bold">?</span>
                )}
              </figure>
            </figure>
          </motion.figure>
        </article>
        {/* Divisor decorativo */}
        <hr className="w-full h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 rounded-full my-10 opacity-60" />
      </section>
    </main>
  );
} 