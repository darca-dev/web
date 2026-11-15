"use client";

import { Linkedin, Mail, Smartphone } from "lucide-react";
import Link from "next/link";
import { CONTACT_EMAIL, PHONE_DISPLAY, PHONE_HREF, SKARA_PLAY_URL } from "../lib/site";

const quickLinks = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/products" },
  { label: "Servicios", href: "/services" },
  { label: "Portafolio", href: "/portfolio" },
  { label: "Sobre nosotros", href: "/about" },
];

const skaraLinks = [
  { label: "Página de Skara", href: "/products/skara" },
  { label: "Soporte de Skara", href: "/products/skara/support" },
  { label: "Política de privacidad", href: "/products/skara/privacy" },
  { label: "Eliminación de cuenta", href: "/products/skara/account-deletion" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/carlosdart",
  },
  {
    name: "Email",
    icon: Mail,
    href: `mailto:${CONTACT_EMAIL}`,
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-xl font-bold text-white mb-4">
              <span className="text-blue-400">&lt;/&gt;</span>
              <span>
                ARVTECH <span className="text-blue-400">STUDIO</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Estudio independiente de desarrollo de software: aplicaciones,
              sistemas digitales, herramientas empresariales y soluciones
              tecnológicas.
            </p>
            <p className="text-gray-500 text-sm mt-4">
              Carlos del Ángel — Fundador y desarrollador.
            </p>
            <div className="mt-4 space-y-1 text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="block text-gray-400 hover:text-white transition"
              >
                {CONTACT_EMAIL}
              </a>
              <a
                href={PHONE_HREF}
                className="block text-gray-400 hover:text-white transition"
              >
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/#contacto"
                  className="text-gray-400 hover:text-white transition text-sm"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Skara */}
          <div>
            <h3 className="text-white font-semibold mb-4">Skara Punto de Venta</h3>
            <ul className="space-y-2 mb-6">
              {skaraLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={SKARA_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition text-sm"
                >
                  <Smartphone size={14} />
                  Descargar en Google Play
                </a>
              </li>
            </ul>

            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition text-gray-400 hover:text-white"
                    aria-label={social.name}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
              <a
                href={SKARA_PLAY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition text-gray-400 hover:text-white"
                aria-label="Skara en Google Play"
              >
                <Smartphone size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>
            © {currentYear} Arvtech Studio. Todos los derechos reservados.
          </p>
          <p className="mt-1">
            Fundado por Carlos del Ángel ·{" "}
            <Link href="/products/skara/privacy" className="hover:text-white transition">
              Política de privacidad
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
