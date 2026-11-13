import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "../components/ThemeProvider";
import { SITE_NAME, SITE_URL, CONTACT_EMAIL } from "../lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arvtech Studio | Desarrollo de software, aplicaciones y sistemas",
    template: "%s | Arvtech Studio",
  },
  description:
    "Estudio independiente de desarrollo de software. Creamos aplicaciones móviles, plataformas web, sistemas de gestión y punto de venta, automatización e integraciones.",
  keywords: [
    "Arvtech Studio",
    "desarrollo de software",
    "aplicaciones móviles",
    "Flutter",
    "desarrollo Android e iOS",
    "aplicaciones web",
    "punto de venta",
    "POS",
    "sistemas de gestión",
    "automatización de procesos",
    "backend",
    "inteligencia artificial",
    "Skara Punto de Venta",
  ],
  authors: [{ name: "Carlos del Ángel", url: SITE_URL }],
  creator: "Carlos del Ángel",
  openGraph: {
    title: "Arvtech Studio | Desarrollo de software, aplicaciones y sistemas",
    description:
      "Creamos aplicaciones, plataformas y herramientas digitales para resolver problemas reales y ayudar a los negocios a crecer.",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: "/inicial.webp",
        width: 1200,
        height: 630,
        alt: "Arvtech Studio",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arvtech Studio | Desarrollo de software",
    description:
      "Aplicaciones, plataformas y herramientas digitales para resolver problemas reales.",
    images: ["/inicial.webp"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <ThemeProvider>
          {children}
          {/* JSON-LD: organización + sitio */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    "@id": `${SITE_URL}/#organization`,
                    name: SITE_NAME,
                    url: SITE_URL,
                    email: CONTACT_EMAIL,
                    founder: {
                      "@type": "Person",
                      name: "Carlos del Ángel",
                      jobTitle: "Fundador y desarrollador",
                    },
                    description:
                      "Estudio independiente de desarrollo de software enfocado en crear aplicaciones, sistemas digitales, herramientas empresariales y soluciones tecnológicas.",
                  },
                  {
                    "@type": "WebSite",
                    "@id": `${SITE_URL}/#website`,
                    name: SITE_NAME,
                    url: SITE_URL,
                    inLanguage: "es",
                    publisher: { "@id": `${SITE_URL}/#organization` },
                  },
                ],
              }),
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
