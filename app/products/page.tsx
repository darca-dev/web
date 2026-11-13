import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Smartphone, ShieldCheck, LifeBuoy, Trash2 } from "lucide-react";
import PageHero from "../../components/PageHero";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { SITE_URL, SKARA_PLAY_URL, CONTACT_EMAIL } from "../../lib/site";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Catálogo de productos de Arvtech Studio: Skara Punto de Venta, Aika, Venta Fácil Manager y Sidelink.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Productos | Arvtech Studio",
    description:
      "Skara Punto de Venta, Aika, Venta Fácil Manager y Sidelink: software propio desarrollado por Arvtech Studio.",
    url: `${SITE_URL}/products`,
  },
};

const otherProducts = [
  {
    title: "Aika",
    emoji: "🤖",
    status: "En desarrollo",
    statusStyle:
      "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    description:
      "Asistente personal de inteligencia artificial de escritorio. Proyecto propio en desarrollo; todavía no es un producto comercial terminado.",
  },
  {
    title: "Venta Fácil Manager",
    emoji: "🧾",
    status: "Terminado",
    statusStyle:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    description:
      "Sistema de gestión de ventas desarrollado como producto propio y dado por terminado para administrar las operaciones comerciales de un negocio.",
  },
  {
    title: "Sidelink",
    emoji: "🔗",
    status: "Terminado",
    statusStyle:
      "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    description:
      "Herramienta para pasar aplicaciones iOS programadas desde Windows, desarrollada adaptando herramientas de xtool para resolver ese flujo de trabajo.",
  },
];

const skaraFeatures = [
  "Aplicación desarrollada con Flutter.",
  "Funcionamiento local sin requerir inicio de sesión.",
  "Inicio de sesión con Google.",
  "Gestión de productos e inventario.",
  "Administración de ventas.",
  "Gestión de clientes y proveedores.",
  "Administración de empleados.",
  "Impresión mediante Bluetooth, USB y Wi-Fi.",
  "Integración con Firebase.",
  "Publicación para Android en Google Play.",
];

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Productos"
          title={
            <>
              Software propio,{" "}
              <span className="text-blue-600 dark:text-blue-400">
                construido para usarse.
              </span>
            </>
          }
          description="Productos desarrollados por Arvtech Studio: desde sistemas de punto de venta hasta asistentes de inteligencia artificial."
        />

        {/* Skara destacado */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg">
              <div className="flex flex-col lg:flex-row">
                {/* Logo */}
                <div className="lg:w-1/3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 flex items-center justify-center p-10 min-h-[260px]">
                  <Image
                    src="/skara/logo.png"
                    alt="Skara Punto de Venta"
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>

                {/* Contenido */}
                <div className="lg:w-2/3 p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300">
                      Disponible
                    </span>
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                      Producto propio
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                    Skara Punto de Venta
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Sistema de punto de venta para administrar negocios,
                    productos, inventario, ventas y operaciones comerciales.
                    Funciona de forma local, sin requerir inicio de sesión, con
                    inicio de sesión opcional mediante Google.
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-8 text-sm text-gray-600 dark:text-gray-300">
                    {skaraFeatures.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-blue-600 dark:text-blue-400 mt-0.5">
                          ✓
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={SKARA_PLAY_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow transition font-medium"
                    >
                      <Smartphone size={18} /> Descargar en Google Play
                    </a>
                    <Link
                      href="/products/skara"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg transition font-medium"
                    >
                      Ver detalle del producto <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Enlaces legales de Skara */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center text-sm">
              <Link
                href="/products/skara/support"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <LifeBuoy size={16} /> Soporte de Skara
              </Link>
              <Link
                href="/products/skara/privacy"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <ShieldCheck size={16} /> Política de privacidad
              </Link>
              <Link
                href="/products/skara/account-deletion"
                className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <Trash2 size={16} /> Eliminación de cuenta
              </Link>
            </div>
          </div>
        </section>

        {/* Otros productos */}
        <section className="py-20 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
              Otros productos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherProducts.map((product) => (
                <div
                  key={product.title}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  <div className="h-36 bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 flex items-center justify-center text-5xl">
                    {product.emoji}
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {product.title}
                      </h3>
                      <span
                        className={`px-2.5 py-1 text-[11px] font-semibold rounded-full whitespace-nowrap ${product.statusStyle}`}
                      >
                        {product.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex-1">
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center space-y-4">
              <p className="text-gray-600 dark:text-gray-400">
                ¿Quieres ver el resto de proyectos, prototipos y experimentos?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition font-medium"
                >
                  Ver portafolio completo <ArrowRight size={18} />
                </Link>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg transition font-medium"
                >
                  Hablar con nosotros
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
