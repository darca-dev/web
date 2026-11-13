"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Smartphone } from "lucide-react";
import { SKARA_PLAY_URL } from "../lib/site";

const featuredProducts = [
  {
    title: "Skara Punto de Venta",
    description:
      "Sistema de punto de venta para administrar negocios, productos, inventario y ventas. Funciona de forma local, con inicio de sesión opcional con Google.",
    status: "Disponible",
    statusStyle:
      "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    href: "/products/skara",
    image: "/skara/logo.png",
    isImage: true,
  },
  {
    title: "Aika",
    description:
      "Asistente personal de inteligencia artificial de escritorio. Proyecto propio en desarrollo.",
    status: "En desarrollo",
    statusStyle:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    href: "/products",
    image: "",
    emoji: "🤖",
    isImage: false,
  },
  {
    title: "Venta Fácil Manager",
    description:
      "Sistema de gestión de ventas para administrar las operaciones comerciales de un negocio. Desarrollo propio terminado.",
    status: "Terminado",
    statusStyle:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    href: "/products",
    image: "",
    emoji: "🧾",
    isImage: false,
  },
  {
    title: "Sidelink",
    description:
      "Herramienta para pasar aplicaciones iOS programadas desde Windows, desarrollada adaptando herramientas de xtool.",
    status: "Terminado",
    statusStyle:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    href: "/products",
    image: "",
    emoji: "🔗",
    isImage: false,
  },
];

export default function ProductsPreviewSection() {
  return (
    <section id="productos" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestros productos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Software propio, construido y probado en casos de uso reales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col"
            >
              <div className="relative h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 overflow-hidden">
                {product.isImage ? (
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    {product.emoji}
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="font-bold text-gray-900 dark:text-white">
                    {product.title}
                  </h3>
                  <span
                    className={`px-2 py-0.5 text-[11px] font-semibold rounded-full whitespace-nowrap ${product.statusStyle}`}
                  >
                    {product.status}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 flex-1">
                  {product.description}
                </p>
                <Link
                  href={product.href}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 hover:gap-2 transition-all"
                >
                  Ver más <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition font-medium"
          >
            Explorar todos los productos <ArrowRight size={18} />
          </Link>
          <a
            href={SKARA_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg transition font-medium"
          >
            <Smartphone size={18} /> Skara en Google Play
          </a>
        </motion.div>
      </div>
    </section>
  );
}
