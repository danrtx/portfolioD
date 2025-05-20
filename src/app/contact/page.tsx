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
      icon: <FaEnvelope className="text-[#2563eb] dark:text-blue-400" />, 
      label: "Email", 
      value: "danilomntzm@gmail.com",
      onClick: () => {},
      type: 'email'
    },
    {
      icon: <FaPhone className="text-[#2563eb] dark:text-blue-400" />, 
      label: "Phone", 
      value: "+57 316 6469685",
      onClick: () => {},
      type: 'phone'
    },
    {
      icon: <FaHeadset className="text-[#2563eb] dark:text-blue-400" />, 
      label: "Habla conmigo", 
      value: "WhatsApp",
      onClick: () => {
        window.open('https://wa.me/573166469685', '_blank');
      },
      type: 'whatsapp'
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Animaciones modernas
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } }
  };
  const glowHover = {
    hover: {
      boxShadow: "0 4px 32px 0 rgba(59,130,246,0.25), 0 0 0 4px #2563eb33",
      scale: 1.04,
      transition: { type: "spring", stiffness: 180, damping: 14 }
    }
  };
  const iconPulse = {
    initial: { filter: "drop-shadow(0 0 0 #2563eb)" },
    hover: {
      filter: "drop-shadow(0 0 12px #2563ebcc)",
      scale: 1.12,
      transition: { duration: 0.4, yoyo: Infinity }
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col md:flex-row relative overflow-hidden bg-blue-50 dark:bg-dark-bg">
      {/* Lado izquierdo: Estrella y fondo blanco */}
      <motion.section
        className="flex-1 flex flex-col items-center justify-center bg-white dark:bg-dark-card px-4 py-8 md:py-0"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
      >
        <motion.div
          className="flex flex-col items-center"
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Estrella regular y más pequeña */}
          <svg width="220" height="200" viewBox="0 0 420 400" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter: 'drop-shadow(0 8px 32px #7b91e6aa)' }} className="w-32 h-32 md:w-[420px] md:h-[400px] fill-blue-400 dark:fill-blue-600">
            <polygon points="210,40 258,150 380,160 285,235 310,360 210,295 110,360 135,235 40,160 162,150" />
          </svg>
          <h1 className="mt-6 md:mt-10 text-3xl md:text-5xl font-extrabold text-[#2563eb] dark:text-blue-400 tracking-tight text-center drop-shadow-lg select-none">Contáctame</h1>
        </motion.div>
      </motion.section>
      {/* Separador animado */}
      <motion.div
        initial={{ scaleY: 0, opacity: 0.5, filter: "blur(2px)" }}
        animate={{ scaleY: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.2, type: "spring" }}
        className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-700 dark:from-blue-700 dark:via-blue-500 dark:to-blue-700 origin-top z-10 rounded-full shadow-lg hidden md:block"
        style={{ minHeight: '100vh' }}
      />
      {/* Lado derecho: Contactos y fondo azul */}
      <motion.section
        className="flex-1 flex flex-col items-center justify-center bg-[#2563eb] dark:bg-dark-primary relative z-20 px-4 py-8 md:py-0"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
      >
        <motion.ul
          className="flex flex-col gap-6 md:gap-10 w-full max-w-md"
          variants={{ visible: { transition: { staggerChildren: 0.18, delayChildren: 0.5 } } }}
          initial="hidden"
          animate="visible"
        >
          {contactItems.map((item, idx) => (
            <motion.li
              key={idx}
              className="flex flex-col items-start gap-2 px-4 md:px-6 py-4 rounded-2xl transition-colors cursor-pointer group w-full bg-white/10 dark:bg-dark-card/50 backdrop-blur-md border border-transparent dark:border-blue-900"
              variants={fadeUpVariants}
              whileHover="hover"
              {...glowHover}
              onClick={() => {
                if (item.type === 'whatsapp') {
                  item.onClick();
                } else {
                  setOpenIndex(openIndex === idx ? null : idx);
                }
              }}
            >
              <div className="flex items-center gap-4 md:gap-5 w-full">
                <motion.span
                  className="bg-white dark:bg-dark-bg rounded-full p-4 md:p-5 shadow dark:shadow-dark-card text-2xl md:text-3xl flex items-center justify-center group-hover:scale-110 transition-transform"
                  variants={iconPulse}
                  initial="initial"
                  whileHover="hover"
                >
                  {item.icon}
                </motion.span>
                <span className="text-lg md:text-2xl font-bold text-white dark:text-dark-text tracking-wide group-hover:text-blue-200 dark:group-hover:text-blue-400 transition-colors">{item.label}</span>
              </div>
              {/* Desplegable */}
              {openIndex === idx && item.type !== 'whatsapp' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="ml-12 md:ml-20 mt-2 bg-white dark:bg-dark-card text-[#2563eb] dark:text-blue-400 rounded-lg px-4 py-2 shadow dark:shadow-dark-card text-base md:text-lg font-semibold select-all"
                >
                  {item.type === 'email' && (
                    <a href={`mailto:${item.value}`} className="hover:underline dark:text-blue-400">{item.value}</a>
                  )}
                  {item.type === 'phone' && (
                    <a href={`tel:${item.value.replace(/\s+/g, '')}`} className="hover:underline dark:text-blue-400">{item.value}</a>
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