"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaHeadset } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactItems = [
    {
      icon: <FaEnvelope className="text-[#2563eb]" />, 
      label: "Email", 
      value: "danilomntzm@gmail.com",
      onClick: () => {},
      type: 'email'
    },
    {
      icon: <FaPhone className="text-[#2563eb]" />, 
      label: "Phone", 
      value: "+57 316 6469685",
      onClick: () => {},
      type: 'phone'
    },
    {
      icon: <FaHeadset className="text-[#2563eb]" />, 
      label: "Habla conmigo", 
      value: "WhatsApp",
      onClick: () => {
        window.open('https://wa.me/573166469685', '_blank');
      },
      type: 'whatsapp'
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Animaciones para los paneles
  const leftVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };
  const rightVariants = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  // Animación de la estrella
  const starVariants = {
    hidden: { scale: 0.7, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 180, damping: 18, delay: 0.2 } },
    hover: { rotate: 10, scale: 1.05, transition: { type: "spring", stiffness: 200, damping: 10 } }
  };

  // Animación escalonada para los ítems de contacto
  const listVariants = {
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.4 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120 } },
    hover: { scale: 1.08, backgroundColor: "#3b82f6" }
  };

  return (
    <main className="min-h-screen w-full flex relative overflow-hidden">
      {/* Lado izquierdo: Estrella y fondo blanco */}
      <motion.section
        className="flex-1 flex flex-col items-center justify-center bg-white"
        initial="hidden"
        animate="visible"
        variants={leftVariants}
      >
        <motion.div
          className="flex flex-col items-center"
          variants={starVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          {/* Estrella regular y más pequeña */}
          <svg width="420" height="400" viewBox="0 0 420 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 8px 32px #7b91e6aa)' }}>
            <polygon points="210,40 258,150 380,160 285,235 310,360 210,295 110,360 135,235 40,160 162,150" fill="#7b91e6" />
          </svg>
          <h1 className="mt-10 text-4xl md:text-5xl font-extrabold text-[#2563eb] tracking-tight text-center drop-shadow-lg select-none">Contáctame</h1>
        </motion.div>
      </motion.section>
      {/* Separador animado */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.7, delay: 0.3, type: "spring" }}
        className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-700 origin-top z-10 rounded-full shadow-lg"
        style={{ minHeight: '100vh' }}
      />
      {/* Lado derecho: Contactos y fondo azul */}
      <motion.section
        className="flex-1 flex flex-col items-center justify-center bg-[#2563eb] relative z-20"
        initial="hidden"
        animate="visible"
        variants={rightVariants}
      >
        <motion.ul
          className="flex flex-col gap-10"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {contactItems.map((item, idx) => (
            <motion.li
              key={idx}
              className="flex flex-col items-start gap-2 px-6 py-4 rounded-2xl transition-colors cursor-pointer group w-full max-w-md"
              variants={itemVariants}
              whileHover="hover"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              onClick={() => {
                if (item.type === 'whatsapp') {
                  item.onClick();
                } else {
                  setOpenIndex(openIndex === idx ? null : idx);
                }
              }}
            >
              <div className="flex items-center gap-5 w-full">
                <span className="bg-white rounded-full p-5 shadow text-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="text-2xl font-bold text-white tracking-wide group-hover:text-blue-200 transition-colors">{item.label}</span>
              </div>
              {/* Desplegable */}
              {openIndex === idx && item.type !== 'whatsapp' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="ml-20 mt-2 bg-white text-[#2563eb] rounded-lg px-4 py-2 shadow text-lg font-semibold select-all"
                >
                  {item.type === 'email' && (
                    <a href={`mailto:${item.value}`} className="hover:underline">{item.value}</a>
                  )}
                  {item.type === 'phone' && (
                    <a href={`tel:${item.value.replace(/\s+/g, '')}`} className="hover:underline">{item.value}</a>
                  )}
                </motion.div>
              )}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
    </main>
  );
} 