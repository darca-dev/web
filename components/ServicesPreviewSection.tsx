"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Smartphone,
  Globe,
  Store,
  Zap,
  Code,
  Server,
  Sparkles,
} from "lucide-react";
import { services } from "../lib/services";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  smartphone: Smartphone,
  globe: Globe,
  store: Store,
  workflow: Zap,
  code: Code,
  server: Server,
  brain: Sparkles,
};

export default function ServicesPreviewSection() {
  return (
    <section id="servicios" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Servicios
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Siete formas de resolver problemas concreto con software bien
            construido.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] ?? Code;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
                className={`group p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 ${
                  index === 6 ? "lg:col-span-1" : ""
                }`}
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <IconComponent
                    size={22}
                    className="text-blue-600 dark:text-blue-400 group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {service.short}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition font-medium"
          >
            Conocer nuestros servicios <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
