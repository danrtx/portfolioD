"use client";

import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Figma"] }
];

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
          
          <div className="prose prose-invert max-w-none mb-16">
            <p className="text-xl text-gray-300 mb-6">
              I'm a passionate Full Stack Developer with a keen eye for design and user experience.
              With several years of experience in web development, I specialize in creating
              modern, responsive, and user-friendly applications.
            </p>
            <p className="text-xl text-gray-300">
              My journey in tech has led me to work on various projects, from small business
              websites to complex web applications. I'm constantly learning and exploring
              new technologies to stay at the forefront of web development.
            </p>
          </div>

          <div className="space-y-12">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-4">{skillGroup.category}</h2>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
} 