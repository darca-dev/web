import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Smartphone,
  ShieldCheck,
  LifeBuoy,
  Trash2,
  MapPin,
  Wifi,
  Users,
  Package,
  Receipt,
  Printer,
  CheckCircle2,
} from "lucide-react";
import PageHero from "../../../components/PageHero";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { SITE_URL, SKARA_PLAY_URL, CONTACT_EMAIL } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Skara Punto de Venta",
  description:
    "Skara Punto de Venta: sistema de punto de venta en Flutter para administrar negocios, productos, inventario, ventas, clientes y proveedores. Disponible en Google Play para Android.",
  alternates: { canonical: "/products/skara" },
  openGraph: {
    title: "Skara Punto de Venta | Arvtech Studio",
    description:
      "Administra tu negocio: productos, inventario, ventas, clientes y proveedores desde tu dispositivo. Disponible en Google Play.",
    url: `${SITE_URL}/products/skara`,
    images: [{ url: "/skara/logo.png", width: 512, height: 512, alt: "Skara Punto de Venta" }],
  },
};

const features = [
  {
    icon: Package,
    title: "Productos e inventario",
    text: "Gestiona tu catálogo de productos, precios y niveles de stock.",
  },
  {
    icon: Receipt,
    title: "Ventas",
    text: "Registra y consulta las ventas y el historial de transacciones.",
  },
  {
    icon: Users,
    title: "Clientes y proveedores",
    text: "Administra la información de tus clientes y proveedores.",
  },
  {
    icon: Users,
    title: "Empleados",
    text: "Gestión de empleados dentro de la aplicación.",
  },
  {
    icon: Printer,
    title: "Impresión",
    text: "Impresión de tickets mediante Bluetooth, USB y Wi-Fi.",
  },
  {
    icon: Wifi,
    title: "Funcionamiento local",
    text: "Opera de forma local sin requerir inicio de sesión; la cuenta con Google es opcional.",
  },
];

export default function SkaraPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Producto propio · Disponible"
          title={
            <>
              Skara Punto de{" "}
              <span className="text-blue-600 dark:text-blue-400">Venta</span>
            </>
          }
          description="Sistema de punto de venta para administrar negocios, productos, inventario, ventas y operaciones comerciales. Desarrollado con Flutter y publicado en Google Play para Android."
        />

        {/* Descripción + acciones */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Tu punto de venta, en tu dispositivo
                </h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                  <p>
                    Skara está diseñado para que un negocio pueda comenzar a
                    operar de forma local, sin obligar al usuario a crear una
                    cuenta al abrir la aplicación. Los datos se guardan en el
                    dispositivo y el inicio de sesión con Google es opcional.
                  </p>
                  <p>
                    Con Skara puedes registrar ventas, mantener tu inventario
                    al día, administrar clientes, proveedores y empleados, e
                    imprimir tickets desde tu teléfono o tableta.
                  </p>
                  <p>
                    La aplicación integra Firebase y está disponible en Google
                    Play para Android.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <a
                    href={SKARA_PLAY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition font-medium"
                  >
                    <Smartphone size={18} /> Descargar en Google Play
                  </a>
                  <Link
                    href="/products/skara/support"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-lg transition font-medium"
                  >
                    <LifeBuoy size={18} /> Soporte
                  </Link>
                </div>
              </div>

              {/* Logo / captura */}
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 flex flex-col items-center">
                <Image
                  src="/skara/logo.png"
                  alt="Icono de Skara Punto de Venta"
                  width={200}
                  height={200}
                  className="object-contain mb-6"
                />
                <Image
                  src="/skara/play-listing.png"
                  alt="Ficha de Google Play de Skara (publicación anterior como Punto Control) con capturas de la aplicación"
                  width={640}
                  height={366}
                  className="rounded-lg w-full h-auto"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                  Captura de la ficha de Google Play (publicación anterior como
                  «Punto Control») con las pantallas de la aplicación.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Características confirmadas */}
        <section className="py-20 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
              Características confirmadas
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
              Todo lo que aparece aquí está implementado y publicado en la
              aplicación.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-3">
                      <IconComponent
                        size={20}
                        className="text-blue-600 dark:text-blue-400"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {feature.text}
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
              <MapPin size={16} className="mt-0.5 shrink-0" />
              <p>
                Al registrar clientes, la aplicación puede solicitar tu
                ubicación si tú lo autorizas. Ese dato se guarda junto a la
                ficha del cliente en el dispositivo. Consulta la{" "}
                <Link
                  href="/products/skara/privacy"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  política de privacidad
                </Link>{" "}
                para el detalle completo.
              </p>
            </div>
          </div>
        </section>

        {/* Enlaces legales y soporte */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10">
              Soporte, privacidad y tu cuenta
            </h2>

            <div className="grid sm:grid-cols-3 gap-6">
              <Link
                href="/products/skara/support"
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all text-center"
              >
                <LifeBuoy
                  size={28}
                  className="mx-auto mb-3 text-blue-600 dark:text-blue-400"
                />
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  Soporte
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Problemas frecuentes, inicio de sesión, impresión e
                  inventario.
                </p>
              </Link>

              <Link
                href="/products/skara/privacy"
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all text-center"
              >
                <ShieldCheck
                  size={28}
                  className="mx-auto mb-3 text-blue-600 dark:text-blue-400"
                />
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  Política de privacidad
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Qué datos recopila la aplicación y cómo se usan.
                </p>
              </Link>

              <Link
                href="/products/skara/account-deletion"
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all text-center"
              >
                <Trash2
                  size={28}
                  className="mx-auto mb-3 text-blue-600 dark:text-blue-400"
                />
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">
                  Eliminación de cuenta
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Cómo eliminar tu cuenta desde la app o solicitándolo por
                  correo.
                </p>
              </Link>
            </div>

            <div className="mt-12 text-center">
              <ul className="inline-flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li className="inline-flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-green-500" /> Android
                </li>
                <li className="inline-flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-green-500" /> Flutter
                </li>
                <li className="inline-flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-green-500" /> Google
                  Play
                </li>
                <li className="inline-flex items-center gap-1">
                  <CheckCircle2 size={14} className="text-green-500" /> Soporte:{" "}
                  {CONTACT_EMAIL}
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* JSON-LD del producto */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Skara Punto de venta",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Android",
            softwareVersion: "2.0.1",
            url: SKARA_PLAY_URL,
            description:
              "Sistema de punto de venta para administrar negocios, productos, inventario, ventas y operaciones comerciales.",
            author: {
              "@type": "Organization",
              name: "Arvtech Studio",
              url: SITE_URL,
            },
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          }),
        }}
      />
    </>
  );
}
