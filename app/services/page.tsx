import type { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  Globe,
  Store,
  Zap,
  Code,
  Server,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import PageHero from "../../components/PageHero";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { services } from "../../lib/services";
import { SITE_URL } from "../../lib/site";

export const metadata: Metadata = {
  title: "Servicios de desarrollo de software",
  description:
    "Aplicaciones móviles, aplicaciones web, sistemas de gestión y punto de venta, automatización, software a medida, integraciones y soluciones de inteligencia artificial.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Servicios | Arvtech Studio",
    description:
      "Siete categorías de desarrollo de software para resolver problemas reales de negocios y productos.",
    url: `${SITE_URL}/services`,
  },
};

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  smartphone: Smartphone,
  globe: Globe,
  store: Store,
  workflow: Zap,
  code: Code,
  server: Server,
  brain: Sparkles,
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Servicios"
          title={
            <>
              Servicios de desarrollo{" "}
              <span className="text-blue-600 dark:text-blue-400">
                pensados para tu problema.
              </span>
            </>
          }
          description="No vendemos tecnología por tecnología: cada servicio nace de un problema concreto que hay que resolver."
        />

        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-5xl mx-auto px-6 md:px-10 space-y-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] ?? Code;
              return (
                <article
                  key={service.slug}
                  id={service.slug}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 md:p-10 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <IconComponent
                        size={22}
                        className="text-blue-600 dark:text-blue-400"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                        Servicio {index + 1} de {services.length}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                        Qué resolvemos
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {service.problem}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                        Para quién
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {service.client}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6 border-l-4 border-blue-500 pl-4">
                    {service.description}
                  </p>

                  <Link
                    href="/#contacto"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-4 transition-all"
                  >
                    Hablemos de este servicio <ArrowRight size={16} />
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        {/* CTA final */}
        <section className="py-20 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-3xl mx-auto px-6 md:px-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿No ves tu caso aquí?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Cuéntanos qué problema necesitas resolver y te diremos si podemos
              ayudarte. No prometemos precios ni plazos por adelantado: primero
              entendemos el problema.
            </p>
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition font-medium"
            >
              Contactar con Arvtech Studio <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
