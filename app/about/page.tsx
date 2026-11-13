import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Code, Layers, HeartHandshake, Target } from "lucide-react";
import PageHero from "../../components/PageHero";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AboutSection from "../../components/AboutSection";
import ExperienceSection from "../../components/ExperienceSection";
import { SITE_URL, CONTACT_EMAIL } from "../../lib/site";

export const metadata: Metadata = {
  title: "Sobre nosotros y el fundador",
  description:
    "Qué es Arvtech Studio, su enfoque de desarrollo y quién es su fundador: Carlos del Ángel, desarrollador de software especializado en Flutter, web y sistemas.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Sobre Arvtech Studio y su fundador",
    description:
      "Estudio independiente de desarrollo de software fundado por Carlos del Ángel.",
    url: `${SITE_URL}/about`,
  },
};

const values = [
  {
    icon: Target,
    title: "Problemas reales",
    text: "Cada proyecto empieza por un problema concreto del negocio, no por una tecnología de moda.",
  },
  {
    icon: Code,
    title: "Código mantenible",
    text: "Arquitectura clara, buenas prácticas y decisiones que se pueden mantener y ampliar con el tiempo.",
  },
  {
    icon: Layers,
    title: "Producto completo",
    text: "Del diseño de la interfaz al backend y la base de datos: nos hacemos cargo de las piezas que trabajan juntas.",
  },
  {
    icon: HeartHandshake,
    title: "Trato directo",
    text: "Hablas con quien construye el producto. Sin capas intermedias ni promesas vacías.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Sobre nosotros"
          title={
            <>
              Arvtech Studio,{" "}
              <span className="text-blue-600 dark:text-blue-400">
                un estudio que construye software.
              </span>
            </>
          }
          description="Estudio independiente de desarrollo de software enfocado en crear aplicaciones, sistemas digitales, herramientas empresariales y soluciones tecnológicas."
        />

        {/* Qué es Arvtech Studio */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <div className="w-10 h-2 bg-blue-600 dark:bg-blue-400 rounded mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Qué es Arvtech Studio
            </h2>
            <div className="space-y-5 text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              <p>
                Arvtech Studio es un estudio independiente de desarrollo de
                software. Trabajamos en aplicaciones móviles, aplicaciones web,
                sistemas administrativos y de punto de venta, automatización de
                procesos, integraciones y soluciones con inteligencia
                artificial.
              </p>
              <p>
                El estudio nace de la evolución de un portafolio personal de
                desarrollo. Los proyectos que empezaron como trabajos propios
                llegaron a Google Play publicados bajo el nombre Arvtech Studio,
                y hoy esa misma práctica se organiza como estudio: productos
                propios, trabajos para clientes y experimentos técnicos, todo
                bajo una misma marca.
              </p>
              <p>
                No presentamos como servicios consolidados aquello que todavía
                no está disponible comercialmente. Preferimos decir lo que
                hacemos bien y lo que está en desarrollo, antes que prometer lo
                que aún no existe.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-12">
              {values.map((value) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={value.title}
                    className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                      <IconComponent
                        size={20}
                        className="text-blue-600 dark:text-blue-400"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {value.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Fundador: sección personal reutilizada del portafolio */}
        <AboutSection />

        {/* Trayectoria */}
        <ExperienceSection />

        {/* CTA */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Quieres trabajar con nosotros?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Cuéntanos qué necesitas construir y te respondemos directamente.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition font-medium"
              >
                Contactar <ArrowRight size={18} />
              </Link>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg transition font-medium"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
