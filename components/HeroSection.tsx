"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-20 min-h-screen flex items-center"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black" />
      <div className="absolute -left-28 -top-24 w-72 h-72 rounded-full bg-blue-500/10 dark:bg-blue-500/20 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-96 h-72 rounded-full bg-purple-500/10 dark:bg-purple-500/20 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* LEFT: Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex justify-center md:justify-start"
              >
                <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs md:text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/40 rounded-full">
                  <span className="text-blue-600 dark:text-blue-400">&lt;/&gt;</span>
                  Arvtech Studio
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-gray-900 dark:text-white">
                  Construimos software que convierte ideas en{" "}
                </span>
                <span className="text-blue-600 dark:text-blue-400">
                  soluciones reales.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0"
              >
                Desarrollamos aplicaciones, plataformas y herramientas digitales
                para resolver problemas reales y ayudar a los negocios a crecer.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start pt-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition font-medium"
                  >
                    Explorar productos
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg transition font-medium"
                  >
                    Conocer nuestros servicios
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* RIGHT: Decorative Element */}
          <div className="w-full md:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full max-w-md h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-2xl backdrop-blur-sm border border-gray-200 dark:border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden">
                <Image
                  src="/inicial.webp"
                  alt="Aplicaciones y plataformas desarrolladas por Arvtech Studio"
                  width={400}
                  height={400}
                  className="object-contain w-full h-full"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
