import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Smartphone,
  Printer,
  Wifi,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";
import PageHero from "../../../../components/PageHero";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import { SITE_URL, SKARA_PLAY_URL, CONTACT_EMAIL } from "../../../../lib/site";

export const metadata: Metadata = {
  title: "Soporte de Skara Punto de Venta",
  description:
    "Ayuda de Skara Punto de Venta: problemas frecuentes con inicio de sesión, impresión, inventario, ventas, funcionamiento local y canal de contacto.",
  alternates: { canonical: "/products/skara/support" },
  openGraph: {
    title: "Soporte | Skara Punto de Venta",
    description: "Problemas frecuentes y canal de contacto de Skara.",
    url: `${SITE_URL}/products/skara/support`,
  },
};

const faqs = [
  {
    q: "No puedo iniciar sesión con Google",
    a: "Verifica que tengas conexión a internet y que la cuenta de Google esté activa en tu dispositivo. Si la aplicación te pide volver a iniciar sesión por seguridad, entra de nuevo con Google y repite la acción. Recuerda que iniciar sesión es opcional: Skara funciona de forma local sin cuenta.",
    icon: Smartphone,
  },
  {
    q: "¿Cómo funciona sin internet?",
    a: "Skara está diseñado para funcionar de forma local: la información de tu negocio se guarda en el dispositivo y puedes seguir operando sin conexión. El inicio de sesión con Google es opcional y solo es necesario si quieres usar una cuenta.",
    icon: Wifi,
  },
  {
    q: "No puedo imprimir tickets",
    a: "Comprueba que la impresora esté encendida y correctamente vinculada a tu dispositivo por Bluetooth, USB o Wi-Fi. Skara soporta los tres tipos de conexión; si la impresora no responde, vuelve a emparejarla desde la configuración de tu dispositivo e inténtalo de nuevo.",
    icon: Printer,
  },
  {
    q: "El inventario o las ventas no cuadran",
    a: "Revisa que los productos se hayan registrado con el nombre, precio y stock correctos, y que cada venta se haya capturado una sola vez. Los datos se guardan localmente en el dispositivo; si compartes el equipo con otras personas, confirma que cada quien opere con su propio perfil de uso.",
    icon: ShieldCheck,
  },
  {
    q: "Quiero eliminar mi cuenta",
    a: "Puedes hacerlo desde la aplicación en Preferencias → General → Cuenta → Eliminar cuenta. Si no tienes la app a mano, solicítalo por correo. Consulta la página de eliminación de cuenta para conocer qué se borra y qué ocurre con los datos locales.",
    icon: ShieldCheck,
  },
  {
    q: "Tengo un problema con mi suscripción",
    a: "Las suscripciones de Skara se contratan y gestionan a través de Google Play. Para ver, modificar o cancelar tu plan, usa la sección Pagos y suscripciones de la aplicación de Google Play en tu dispositivo.",
    icon: Smartphone,
  },
];

export default function SkaraSupportPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Skara · Soporte"
          title={
            <>
              Centro de{" "}
              <span className="text-blue-600 dark:text-blue-400">soporte</span>
            </>
          }
          description="Skara Punto de Venta es un sistema de punto de venta para administrar negocios, productos, inventario y ventas desde tu dispositivo Android."
        />

        {/* Problemas frecuentes */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
              Problemas frecuentes
            </h2>

            <div className="space-y-4">
              {faqs.map((faq) => {
                const IconComponent = faq.icon;
                return (
                  <details
                    key={faq.q}
                    className="group bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"
                  >
                    <summary className="flex items-center gap-3 p-5 cursor-pointer list-none hover:bg-gray-100 dark:hover:bg-gray-700/60 transition">
                      <span className="w-9 h-9 shrink-0 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <IconComponent
                          size={18}
                          className="text-blue-600 dark:text-blue-400"
                        />
                      </span>
                      <span className="flex-1 font-semibold text-gray-900 dark:text-white">
                        {faq.q}
                      </span>
                      <ChevronDown
                        size={18}
                        className="text-gray-400 group-open:rotate-180 transition-transform"
                      />
                    </summary>
                    <div className="px-5 pb-5 text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                );
              })}
            </div>

            {/* Canal de contacto */}
            <div className="mt-14 p-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/40 rounded-2xl text-center">
              <Mail
                size={32}
                className="mx-auto mb-4 text-blue-600 dark:text-blue-400"
              />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                ¿No encontraste tu solución?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Escríbenos describiendo el problema, el modelo de tu dispositivo
                y qué estabas haciendo cuando ocurrió.
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg transition font-medium"
              >
                <Mail size={18} /> {CONTACT_EMAIL}
              </a>
            </div>

            {/* Enlaces */}
            <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm">
              <a
                href={SKARA_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 underline"
              >
                <Smartphone size={16} /> Skara en Google Play
              </a>
              <Link
                href="/products/skara/privacy"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 underline"
              >
                <ShieldCheck size={16} /> Política de privacidad
              </Link>
              <Link
                href="/products/skara/account-deletion"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 underline"
              >
                Eliminación de cuenta
              </Link>
              <Link
                href="/products/skara"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 underline"
              >
                Volver a Skara
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
