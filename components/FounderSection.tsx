"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const specialties = [
  "Flutter y desarrollo Android e iOS",
  "Aplicaciones de escritorio",
  "Python y bases de datos SQL",
  "Backend y desarrollo web",
  "Interés activo en inteligencia artificial",
];

export default function FounderSection() {
  return (
    <section id="fundador" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            El fundador
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Detrás de Arvtech Studio hay una persona que construye cada proyecto.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/3 flex justify-center"
          >
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-xl">
              <Image
                src="/avatar.jpg"
                alt="Carlos del Ángel, fundador de Arvtech Studio"
                width={256}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="w-full lg:w-2/3 text-center lg:text-left"
          >
            <div className="w-10 h-2 bg-blue-600 dark:bg-blue-400 rounded mb-4 mx-auto lg:mx-0" />
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Carlos del Ángel
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
              Fundador y desarrollador de Arvtech Studio
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-6">
              Desarrollador de software especializado en crear aplicaciones y
              sistemas completos: desde la interfaz hasta el backend. Su trabajo
              reúne desarrollo móvil multiplataforma, aplicaciones web,
              herramientas de escritorio y sistemas de gestión para negocios.
            </p>

            <ul className="space-y-2 text-gray-600 dark:text-gray-300 text-sm md:text-base inline-block text-left mb-8">
              {specialties.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-blue-600 dark:text-blue-400 mt-1">▸</span>
                  {item}
                </li>
              ))}
            </ul>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-base md:text-lg hover:gap-4 transition-all"
              >
                Conoce más sobre Arvtech Studio y su fundador{" "}
                <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
