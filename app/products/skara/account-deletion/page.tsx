import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Smartphone, AlertTriangle, CheckCircle2 } from "lucide-react";
import PageHero from "../../../../components/PageHero";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import { SITE_URL, SKARA_PLAY_URL, CONTACT_EMAIL } from "../../../../lib/site";

export const metadata: Metadata = {
  title: "Eliminación de cuenta de Skara",
  description:
    "Cómo solicitar la eliminación de tu cuenta de Skara Punto de Venta desde la aplicación o desde fuera de ella, qué datos se eliminan y qué ocurre con los datos locales y las suscripciones de Google Play.",
  alternates: { canonical: "/products/skara/account-deletion" },
  openGraph: {
    title: "Eliminación de cuenta | Skara Punto de Venta",
    description:
      "Procedimiento para eliminar tu cuenta de Skara y tus datos asociados.",
    url: `${SITE_URL}/products/skara/account-deletion`,
  },
};

const steps = [
  "Abre Skara en tu dispositivo.",
  "Entra en Preferencias → General → Cuenta.",
  "Toca «Eliminar cuenta» y confirma la acción.",
  "Si la aplicación te lo pide, vuelve a iniciar sesión con Google por seguridad y repite el paso anterior.",
];

const deletedItems = [
  "Tu perfil de usuario en la nube.",
  "Tu suscripción asociada a la cuenta en la nube.",
  "Tu cuenta de Firebase Authentication, y con ella el acceso con esa cuenta.",
];

const keptItems = [
  "Los datos guardados localmente en el dispositivo no se borran desde la nube: permanecen en tu teléfono o tableta hasta que los borres o desinstales la aplicación.",
  "Google Play conserva el historial de compras de tu cuenta de Google conforme a sus propias políticas.",
];

export default function SkaraAccountDeletionPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Skara · Tu cuenta"
          title={
            <>
              Eliminación de{" "}
              <span className="text-blue-600 dark:text-blue-400">cuenta</span>
            </>
          }
          description="Puedes eliminar tu cuenta de Skara desde la propia aplicación o solicitarlo desde fuera de ella."
        />

        <div className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            {/* Aviso importante */}
            <div className="mb-10 p-5 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 flex items-start gap-3">
              <AlertTriangle
                size={22}
                className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5"
              />
              <div className="text-sm text-blue-900 dark:text-blue-100">
                <strong className="font-semibold">
                  La eliminación no se puede deshacer.
                </strong>{" "}
                Recomendamos exportar o anotar la información que necesites
                antes de continuar.
              </div>
            </div>

            {/* 1. Desde la aplicación */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Smartphone
                  size={22}
                  className="text-blue-600 dark:text-blue-400"
                />
                1. Desde la aplicación
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {steps.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
                Esta es la vía rápida: borra tus datos en la nube al momento.
              </p>
            </section>

            {/* 2. Desde fuera de la aplicación */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Mail size={22} className="text-blue-600 dark:text-blue-400" />
                2. Desde fuera de la aplicación
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Si no tienes la aplicación a mano, solicita la eliminación por
                correo electrónico al desarrollador:
              </p>
              <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Solicitud%20de%20eliminaci%C3%B3n%20de%20cuenta%20-%20Skara`}
                  className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold underline"
                >
                  <Mail size={18} /> {CONTACT_EMAIL}
                </a>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  Incluye en el correo el <strong>correo electrónico</strong>{" "}
                  con el que iniciaste sesión en Skara para que podamos
                  identificar y eliminar tu cuenta.
                </p>
              </div>
              <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <strong>Nota:</strong> actualmente no existe un formulario web
                automatizado ni un sistema que reciba solicitudes en línea.{" "}
                <strong>
                  Cada solicitud se procesa manualmente al recibir el correo
                </strong>
                , y te confirmaremos la eliminación por la misma vía.
              </p>
            </section>

            {/* 3. Qué se elimina */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                3. Qué información se elimina
              </h2>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                {deletedItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2
                      size={18}
                      className="text-green-500 shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Qué se conserva */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                4. Qué información puede conservarse
              </h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                {keptItems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <AlertTriangle
                      size={18}
                      className="text-amber-500 shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Únicamente podrían conservarse registros mínimos si una
                obligación legal lo exige, limitándose a lo estrictamente
                necesario.
              </p>
            </section>

            {/* 5. Datos locales */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                5. Qué ocurre con los datos locales del dispositivo
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Skara guarda la información de tu negocio en el dispositivo.
                Eliminar la cuenta borra tus datos en la nube, pero{" "}
                <strong>no borra automáticamente la información local</strong>:
                permanece en tu teléfono o tableta. Puedes borrarla desde la
                aplicación o desinstalando Skara; ten en cuenta que, si
                desinstalas la app, esos datos locales pueden perderse.
              </p>
            </section>

            {/* 6. Suscripciones */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                6. Suscripciones de Google Play
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Eliminar tu cuenta <strong>no cancela automáticamente</strong>{" "}
                una suscripción activa contratada en Google Play. Para
                cancelarla, ve a la aplicación de Google Play en tu dispositivo,
                entra en <strong>Pagos y suscripciones</strong> y cancela el
                plan de Skara. La gestión de pagos y reembolsos corresponde a
                Google Play según sus políticas.
              </p>
              <a
                href={SKARA_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-blue-600 dark:text-blue-400 underline"
              >
                <Smartphone size={16} /> Ver Skara en Google Play
              </a>
            </section>

            {/* Resumen */}
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 text-center">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Resumen
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
                Eliminación desde la app: Preferencias → General → Cuenta →
                Eliminar cuenta. Eliminación externa: correo a{" "}
                {CONTACT_EMAIL}. Sin formularios automatizados.
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Link
                  href="/products/skara/privacy"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  Política de privacidad
                </Link>
                <Link
                  href="/products/skara/support"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  Soporte
                </Link>
                <Link
                  href="/products/skara"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  Volver a Skara
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
