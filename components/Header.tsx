"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "/products" },
  { label: "Servicios", href: "/services" },
  { label: "Portafolio", href: "/portfolio" },
  { label: "Sobre nosotros", href: "/about" },
  { label: "Contacto", href: "/#contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  // Cerrar el menú móvil al cambiar de página (ajuste durante el render,
  // patrón recomendado por React para derivar estado de props).
  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    setOpen(false);
  }

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl md:text-2xl font-bold cursor-pointer"
          aria-label="Arvtech Studio — Inicio"
        >
          <span className="text-blue-600 dark:text-blue-400">&lt;/&gt;</span>
          <span className="text-gray-900 dark:text-gray-100">
            ARVTECH <span className="text-blue-600 dark:text-blue-400">STUDIO</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-sm" aria-label="Navegación principal">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`transition ${
                isActive(item.href) && item.href !== "/#contacto"
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition text-gray-700 dark:text-gray-300"
            aria-label="Cambiar tema"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700 dark:text-gray-300"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav
          className="md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-lg border-t border-gray-200 dark:border-white/10 text-center py-6"
          aria-label="Navegación móvil"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`block py-3 transition ${
                isActive(item.href) && item.href !== "/#contacto"
                  ? "text-blue-600 dark:text-blue-400 font-semibold"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
