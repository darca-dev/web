"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, statusStyles, type Project } from "../lib/projects";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-4">
      {project.internal && (
        <Link
          href={project.internal}
          className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          <ArrowRight size={18} />
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
          <ExternalLink size={18} />
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
          <Smartphone size={18} />
          <span className="text-sm">Play Store</span>
        </a>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const startIndex = currentPage * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <section id="portafolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Proyectos destacados
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Productos propios, trabajos para clientes, prototipos y experimentos
            que demuestran nuestra experiencia en desarrollo.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          {projects.length > projectsPerPage && (
            <>
              <button
                onClick={prevPage}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="Proyectos anteriores"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextPage}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all hover:scale-110 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                aria-label="Siguientes proyectos"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <AnimatePresence mode="wait">
              {currentProjects.map((project, index) => (
                <motion.div
                  key={`${currentPage}-${project.id}`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col"
                >
                  <div className="relative h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 overflow-hidden">
                    {project.image.startsWith("/") ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-2"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-6xl">
                        {project.image}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    <span
                      className={`absolute top-3 right-3 px-2.5 py-1 text-[11px] font-semibold rounded-full ${statusStyles[project.status]}`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                    </div>
                    <span className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wide mb-2">
                      {project.category}
                    </span>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm line-clamp-3 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ProjectLinks project={project} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Page Indicators */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentPage === index
                      ? "bg-blue-600 dark:bg-blue-400 w-8"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                  aria-label={`Ir a página ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Project Counter */}
          <div className="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
            Mostrando {startIndex + 1}-{Math.min(endIndex, projects.length)} de{" "}
            {projects.length} proyectos
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-4 transition-all"
          >
            Ver el portafolio completo <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
