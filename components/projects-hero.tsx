"use client"

import { motion } from "framer-motion"

export default function ProjectsHero() {
  return (
    <section className="min-h-[40vh] flex items-center justify-center px-6 py-20">
      <div className="text-center space-y-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Projects
        </motion.h1>
        <motion.p
          className="text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore our collection of web applications, tools, and experiments. Each project represents our commitment to
          innovation and quality code.
        </motion.p>
      </div>
    </section>
  )
}

