"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Smartphone, ArrowRight } from "lucide-react";
import {
  projects,
  categories,
  statusStyles,
  type ProjectCategory,
} from "../lib/projects";

export default function PortfolioGrid() {
  const [active, setActive] = useState<"Todos" | ProjectCategory>("Todos");

  const filtered =
    active === "Todos"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filtros */}
      <div
        className="flex flex-wrap justify-center gap-3 mb-12"
        role="group"
        aria-label="Filtrar proyectos por categoría"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            aria-pressed={active === cat}
            className={`px-4 py-2 text-sm font-medium rounded-full border transition ${
              active === cat
                ? "bg-blue-600 border-blue-600 text-white shadow-lg"
                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-400 dark:hover:border-blue-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence mode="wait">
          {filtered.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, delay: Math.min(index, 5) * 0.06 }}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col"
            >
              <div className="relative h-44 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 overflow-hidden">
                {project.image.startsWith("/") ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    {project.image}
                  </div>
                )}
                <span
                  className={`absolute top-3 right-3 px-2.5 py-1 text-[11px] font-semibold rounded-full ${statusStyles[project.status]}`}
                >
                  {project.status}
                </span>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
                  {project.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  {project.internal && (
                    <Link
                      href={project.internal}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      <ArrowRight size={16} />
                      <span className="text-sm">Ver página</span>
                    </Link>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                  {project.playstore && (
                    <a
                      href={project.playstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition"
                    >
                      <Smartphone size={16} />
                      <span className="text-sm">Play Store</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400">
          No hay proyectos en esta categoría por el momento.
        </p>
      )}

      <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
        Mostrando {filtered.length} de {projects.length} proyectos.
      </p>
    </div>
  );
}
