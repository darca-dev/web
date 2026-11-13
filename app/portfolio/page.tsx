import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageHero from "../../components/PageHero";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PortfolioGrid from "../../components/PortfolioGrid";
import { SITE_URL } from "../../lib/site";

export const metadata: Metadata = {
  title: "Portafolio de proyectos",
  description:
    "Proyectos de Arvtech Studio: productos propios, trabajos para clientes, prototipos y experimentos personales con su estado real y tecnologías utilizadas.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    title: "Portafolio | Arvtech Studio",
    description:
      "Productos propios, proyectos de clientes, prototipos y experimentos de Arvtech Studio.",
    url: `${SITE_URL}/portfolio`,
  },
};

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Portafolio"
          title={
            <>
              Proyectos, con su{" "}
              <span className="text-blue-600 dark:text-blue-400">
                estado real.
              </span>
            </>
          }
          description="Productos propios, trabajos para clientes, prototipos y experimentos personales. Cada proyecto muestra su estado verdadero: disponible, en desarrollo, terminado o prototipo."
        />

        <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <PortfolioGrid />

            <div className="mt-16 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                Si alguno de estos proyectos resuelve un problema parecido al
                tuyo, hablemos. No publicamos información privada de clientes
                ni credenciales.
              </p>
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition font-medium"
              >
                Contactar con Arvtech Studio <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
