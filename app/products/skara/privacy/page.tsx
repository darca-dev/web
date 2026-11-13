import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, Mail } from "lucide-react";
import PageHero from "../../../../components/PageHero";
import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";
import { SITE_URL, CONTACT_EMAIL } from "../../../../lib/site";

export const metadata: Metadata = {
  title: "Política de privacidad de Skara Punto de Venta",
  description:
    "Política de privacidad de Skara Punto de Venta: qué datos recopila la aplicación, cómo se usan, servicios de terceros y cómo eliminar tu cuenta.",
  alternates: { canonical: "/products/skara/privacy" },
  openGraph: {
    title: "Política de privacidad | Skara Punto de Venta",
    description:
      "Qué datos recopila Skara, cómo se usan y cómo eliminar tu cuenta.",
    url: `${SITE_URL}/products/skara/privacy`,
  },
};

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

function ReviewMark({ children }: { children: React.ReactNode }) {
  return (
    <mark className="bg-amber-100 text-amber-900 dark:bg-amber-900/50 dark:text-amber-100 px-1 rounded">
      {children}
    </mark>
  );
}

export default function SkaraPrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Skara · Privacidad"
          title={
            <>
              Política de{" "}
              <span className="text-blue-600 dark:text-blue-400">privacidad</span>
            </>
          }
          description="Skara Punto de Venta — última actualización: 12 de noviembre de 2026."
        />

        <div className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-3xl mx-auto px-6 md:px-10">
            {/* Aviso de revisión */}
            <div className="mb-10 p-5 rounded-xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 flex items-start gap-3">
              <AlertTriangle
                size={22}
                className="text-amber-600 dark:text-amber-400 shrink-0 mt-0.5"
              />
              <div className="text-sm text-amber-900 dark:text-amber-100">
                <strong className="font-semibold">
                  Borrador pendiente de revisión.
                </strong>{" "}
                Este contenido se redactó a partir del código verificado de la
                aplicación. Los puntos marcados en{" "}
                <ReviewMark>amarillo</ReviewMark> deben contrastarse con el
                documento de privacidad original y con el desarrollador antes de
                publicar.
              </div>
            </div>

            {/* 1. Responsable */}
            <Section title="1. Responsable del tratamiento">
              <p>
                La responsable de los datos recopilados por la aplicación Skara
                Punto de Venta es <strong>Arvtech Studio</strong>, estudio
                independiente de desarrollo de software.
              </p>
              <p>
                Correo de contacto:{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p>
                Esta política aplica a la aplicación Skara Punto de Venta
                publicada en Google Play para Android.
              </p>
            </Section>

            {/* 2. Datos que se recopilan */}
            <Section title="2. Qué datos recopila la aplicación">
              <h3 className="font-semibold text-gray-900 dark:text-white">
                a) Datos de cuenta (solo si inicias sesión)
              </h3>
              <p>
                Skara funciona de forma local sin requerir inicio de sesión. Si
                decides iniciar sesión con Google, la aplicación utiliza{" "}
                <strong>Firebase Authentication</strong> y{" "}
                <strong>Google Sign-In</strong> y recibe tu nombre, correo
                electrónico y, si lo tienes configurado, tu foto de perfil.
              </p>
              <p>
                En la nube se almacena tu <strong>perfil</strong> y tu{" "}
                <strong>suscripción</strong> asociados a tu cuenta.
              </p>

              <h3 className="font-semibold text-gray-900 dark:text-white">
                b) Información de tu negocio
              </h3>
              <p>
                La aplicación guarda la información operativa de tu negocio:
                productos, precios, inventario, ventas, clientes, proveedores y
                empleados. <strong>Estos datos se guardan localmente en el
                dispositivo</strong> y permiten usar Skara sin conexión.
              </p>
              <p>
                <ReviewMark>
                  Pendiente de confirmar: verificar con el desarrollador si,
                  en alguna función publicada, estos datos del negocio también
                  se sincronizan con la nube.
                </ReviewMark>
              </p>

              <h3 className="font-semibold text-gray-900 dark:text-white">
                c) Fotografías y archivos
              </h3>
              <p>
                Puedes adjuntar imágenes y archivos (por ejemplo, fotografías de
                productos o de clientes) mediante el selector de imágenes del
                dispositivo. Estos archivos se almacenan junto a la
                información a la que pertenecen.
              </p>

              <h3 className="font-semibold text-gray-900 dark:text-white">
                d) Ubicación
              </h3>
              <p>
                Al registrar o editar un cliente, puedes autorizar a la
                aplicación a obtener la <strong>ubicación del dispositivo</strong>
                . Si la autorizas, las coordenadas se guardan en la ficha de ese
                cliente. Si no la autorizas, la función queda desactivada.
              </p>

              <h3 className="font-semibold text-gray-900 dark:text-white">
                e) Publicidad
              </h3>
              <p>
                Skara integra <strong>Google Mobile Ads (AdMob)</strong> y{" "}
                <strong>Google User Messaging Platform (UMP)</strong> para
                gestionar el consentimiento de anuncios personalizados. Los SDK
                de Google pueden recopilar información del dispositivo (como
                identificadores de publicidad) e información sobre los anuncios
                que ves, conforme a la{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  Política de privacidad de Google
                </a>{" "}
                y a la documentación de{" "}
                <a
                  href="https://support.google.com/admob/answer/6128543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  AdMob
                </a>
                . <strong>No declaramos que estos datos permanezcan únicamente
                en tu dispositivo.</strong>
              </p>

              <h3 className="font-semibold text-gray-900 dark:text-white">
                f) Suscripciones y compras
              </h3>
              <p>
                Si contratas un plan, el pago se procesa a través de{" "}
                <strong>Google Play Billing</strong>. Skara no recibe ni
                almacena los datos de tu tarjeta: esa información la gestiona
                Google Play.
              </p>

              <h3 className="font-semibold text-gray-900 dark:text-white">
                g) Mensajería
              </h3>
              <p>
                La aplicación integra <strong>Firebase Messaging</strong>.
                Actualmente no se envían notificaciones a los usuarios.
              </p>

              <h3 className="font-semibold text-gray-900 dark:text-white">
                h) Analítica y diagnóstico
              </h3>
              <p>
                <strong>Google Analytics está desactivado</strong> en la
                configuración de la aplicación. <strong>Crashlytics</strong> y{" "}
                <strong>Performance Monitoring</strong> de Firebase{" "}
                <strong>no están instalados</strong> en Skara.
              </p>
            </Section>

            {/* 3. Cómo se usan */}
            <Section title="3. Para qué usamos los datos">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Operar la aplicación: registrar ventas, mantener el
                  inventario y gestionar clientes, proveedores y empleados.
                </li>
                <li>
                  Gestionar tu cuenta y tu suscripción si decides iniciar
                  sesión.
                </li>
                <li>Mostrar anuncios y gestionar el consentimiento publicitario.</li>
                <li>
                  Atender solicitudes de soporte y de eliminación de cuenta.
                </li>
              </ul>
              <p>
                <strong>No vendemos tus datos personales</strong> ni los cedemos
                a terceros distintos de los servicios descritos en esta
                política.
              </p>
            </Section>

            {/* 4. Servicios de terceros */}
            <Section title="4. Servicios de terceros">
              <p>Skara integra servicios de Google que pueden tratar datos:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Firebase</strong> (autenticación y base de datos de la
                  cuenta) —{" "}
                  <a
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    política de privacidad de Firebase
                  </a>
                  .
                </li>
                <li>
                  <strong>Google Sign-In</strong> —{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    política de privacidad de Google
                  </a>
                  .
                </li>
                <li>
                  <strong>Google Mobile Ads (AdMob) y UMP</strong> —{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    política de privacidad de Google
                  </a>{" "}
                  y{" "}
                  <a
                    href="https://support.google.com/admob/answer/6128543"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    documentación de AdMob
                  </a>
                  .
                </li>
                <li>
                  <strong>Google Play Billing</strong> —{" "}
                  <a
                    href="https://payments.google.com/paymentsapis-privacy-notice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    aviso de privacidad de pagos de Google
                  </a>
                  .
                </li>
                <li>
                  <strong>Firebase Messaging</strong> —{" "}
                  <a
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    política de privacidad de Firebase
                  </a>
                  .
                </li>
              </ul>
            </Section>

            {/* 5. Conservación */}
            <Section title="5. Conservación de los datos">
              <p>
                Los datos de tu negocio guardados en el dispositivo permanecen
                allí hasta que tú los modifiques o borres la información de la
                aplicación, o desinstales Skara.
              </p>
              <p>
                Los datos de tu cuenta en la nube (perfil y suscripción) se
                conservan mientras tu cuenta exista, y se eliminan cuando
                solicitas la eliminación de la cuenta.
              </p>
              <p>
                <ReviewMark>
                  Pendiente de revisión: únicamente podrían conservarse
                  registros mínimos si una obligación legal lo exige; este
                  párrafo debe validarse antes de publicar.
                </ReviewMark>
              </p>
            </Section>

            {/* 6. Eliminación */}
            <Section title="6. Eliminación de tu cuenta y de tus datos">
              <p>
                Puedes eliminar tu cuenta directamente desde la aplicación en{" "}
                <strong>Preferencias → General → Cuenta → Eliminar cuenta</strong>
                , lo cual borra tu perfil, tu suscripción en la nube y tu cuenta
                de Firebase.
              </p>
              <p>
                Si no tienes la aplicación a mano, también puedes solicitarlo
                por correo. Consulta la página de{" "}
                <Link
                  href="/products/skara/account-deletion"
                  className="text-blue-600 dark:text-blue-400 underline"
                >
                  eliminación de cuenta
                </Link>{" "}
                para el procedimiento completo.
              </p>
            </Section>

            {/* 7. Seguridad */}
            <Section title="7. Seguridad">
              <p>
                Los datos de la cuenta se transmiten mediante conexiones
                cifradas (HTTPS/Firebase). La información de tu negocio se
                guarda localmente en el dispositivo. Recomendamos no compartir tu
                dispositivo con terceros si tienes información sensible
                almacenada.
              </p>
            </Section>

            {/* 8. Cambios */}
            <Section title="8. Cambios en esta política">
              <p>
                Esta política puede actualizarse para reflejar cambios en la
                aplicación o en los servicios que utiliza. La fecha de última
                actualización aparece al inicio de la página.
              </p>
            </Section>

            {/* 9. Contacto */}
            <Section title="9. Contacto">
              <p className="flex items-center gap-2">
                <Mail size={18} className="text-blue-600 dark:text-blue-400" />
                Para preguntas sobre esta política o sobre tus datos, escribe a{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-blue-600 dark:text-blue-400 underline font-medium"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </Section>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-8 flex flex-wrap gap-4 text-sm">
              <Link
                href="/products/skara"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                ← Volver a Skara
              </Link>
              <Link
                href="/products/skara/support"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Soporte
              </Link>
              <Link
                href="/products/skara/account-deletion"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                Eliminación de cuenta
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
