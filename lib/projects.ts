// Catálogo compartido de proyectos: lo usan la página de inicio (/) y /portfolio.
// Reglas: solo proyectos con material verificable; enlaces solo si existen y fueron verificados;
// estados reales (Disponible / En desarrollo / Terminado / Prototipo / Investigación).

import { CALC_PLAY_URL, LUNA_DEMO_URL, SKARA_PLAY_URL } from "./site";

export type ProjectStatus =
  | "Disponible"
  | "En desarrollo"
  | "Terminado"
  | "Prototipo"
  | "Investigación";

export type ProjectCategory =
  | "Producto propio"
  | "Proyecto de cliente"
  | "Prototipo"
  | "Experimento personal";

export interface Project {
  id: number;
  title: string;
  description: string;
  /** Ruta de imagen en /public, o un emoji si no hay captura disponible. */
  image: string;
  tags: string[];
  status: ProjectStatus;
  category: ProjectCategory;
  /** Enlace interno del sitio (ej. página de producto). */
  internal?: string;
  /** Demo pública verificada. */
  demo?: string;
  /** Ficha de Google Play verificada. */
  playstore?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Skara Punto de Venta",
    description:
      "Sistema de punto de venta para administrar negocios, productos, inventario, ventas y operaciones comerciales. Desarrollado con Flutter, funciona de forma local sin requerir inicio de sesión e integra Firebase. Publicado en Google Play para Android.",
    image: "/skara/logo.png",
    tags: ["Flutter", "Firebase", "POS"],
    status: "Disponible",
    category: "Producto propio",
    internal: "/products/skara",
    playstore: SKARA_PLAY_URL,
  },
  {
    id: 2,
    title: "Aika — Asistente de escritorio",
    description:
      "Asistente personal de inteligencia artificial de escritorio. Proyecto propio en desarrollo: no es un producto comercial terminado.",
    image: "🤖",
    tags: ["IA", "Escritorio", "Asistente"],
    status: "En desarrollo",
    category: "Producto propio",
    internal: "/products",
  },
  {
    id: 3,
    title: "Venta Fácil Manager",
    description:
      "Sistema de gestión de ventas desarrollado como producto propio y dado por terminado. Cubre la administración de las operaciones comerciales de un negocio.",
    image: "🧾",
    tags: ["Gestión", "Ventas", "Sistema"],
    status: "Terminado",
    category: "Producto propio",
  },
  {
    id: 4,
    title: "Sidelink",
    description:
      "Herramienta propia para pasar aplicaciones iOS programadas desde Windows, desarrollada adaptando herramientas de xtool para resolver ese flujo de trabajo.",
    image: "🔗",
    tags: ["iOS", "Windows", "Herramientas"],
    status: "Terminado",
    category: "Producto propio",
  },
  {
    id: 5,
    title: "Eloisa",
    description:
      "Sistema completo de hospital y alcaldía con inicio de sesión y atención a pacientes. Proyecto de trabajo presentado como referencia de experiencia.",
    image: "🏥",
    tags: ["Web", "Sistema", "Institucional"],
    status: "Terminado",
    category: "Proyecto de cliente",
  },
  {
    id: 6,
    title: "Calculadora de Propinas",
    description:
      "Calculadora científica con calculadora de propinas, préstamo e índice de masa corporal, historial de operaciones con edición y exportación de resultados. Publicada en Google Play por Arvtech Studio.",
    image: "/calculadora.png",
    tags: ["Flutter", "Dart", "Hive"],
    status: "Disponible",
    category: "Producto propio",
    playstore: CALC_PLAY_URL,
  },
  {
    id: 7,
    title: "Nomad Manager",
    description:
      "Producto propio para controlar ventas, inventario y tickets desde el celular, disponible en Android, Windows y Web.",
    image: "/nomadmanager.png",
    tags: ["Flutter", "Android", "Windows", "Web"],
    status: "Disponible",
    category: "Producto propio",
  },
  {
    id: 8,
    title: "Niddo App",
    description:
      "Aplicación móvil educativa en desarrollo para gestión y control de estudiantes de nivel preescolar y primaria: asistencia, comunicaciones con familias, reportes académicos y seguimiento del progreso, con perfiles diferenciados.",
    image: "/niddo.webp",
    tags: ["Flutter", "Firebase", "Educación"],
    status: "En desarrollo",
    category: "Producto propio",
  },
  {
    id: 9,
    title: "Punto Control Desk",
    description:
      "Versión de escritorio de Punto Control (Skara) con manejo de inventario y operación en equipos.",
    image: "/nmDesk.png",
    tags: ["Flutter", "Desktop", "Inventario"],
    status: "En desarrollo",
    category: "Producto propio",
  },
  {
    id: 10,
    title: "Luna Segura App",
    description:
      "Aplicación inteligente de asistencia, monitoreo y automatización en tiempo real mediante inteligencia artificial, con una experiencia moderna para acceder a información, recibir alertas y gestionar tareas.",
    image: "/appluna.png",
    tags: ["Flutter", "Firebase", "IA"],
    status: "Disponible",
    category: "Producto propio",
    demo: LUNA_DEMO_URL,
  },
  {
    id: 11,
    title: "Luna Segura iA",
    description:
      "Asistente inteligente enfocado en seguridad, monitoreo y asistencia en tiempo real, diseñado para ofrecer alertas, análisis de información y soporte personalizado desde cualquier dispositivo.",
    image: "/lunaseguraia.png",
    tags: ["Flutter", "IA", "Seguridad"],
    status: "Prototipo",
    category: "Producto propio",
  },
  {
    id: 12,
    title: "Sitio Web Corporativo",
    description:
      "Sitio web corporativo moderno con diseño responsivo, modo oscuro/claro con persistencia de preferencias, animaciones fluidas y estructura SEO. Este mismo sitio forma parte del proyecto.",
    image: "/infoanuncioshort.png",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    status: "Disponible",
    category: "Producto propio",
    demo: "https://www.arvtechstudio.com",
  },
  {
    id: 13,
    title: "Snake Classic Revival",
    description:
      "Recreación moderna del clásico juego Snake desarrollada en Flutter, con gráficos renovados, controles táctiles optimizados, sistema de puntuación y una experiencia de juego fiel al original.",
    image: "/classicsnake.png",
    tags: ["Flutter", "Dart", "Games"],
    status: "Prototipo",
    category: "Experimento personal",
  },
  {
    id: 14,
    title: "Carreras K-POP",
    description:
      "Videojuego endless runner desarrollado en Unity con generación procedural de pistas, sistema de carriles, físicas móviles, animaciones, puntuación y dificultad progresiva en una estética inspirada en el K-POP.",
    image: "/ckpop.png",
    tags: ["Unity", "C#", "Game Dev"],
    status: "Prototipo",
    category: "Experimento personal",
  },
  {
    id: 15,
    title: "Comparador de Mercados",
    description:
      "Aplicación multiplataforma en Flutter para comparar precios de productos entre establecimientos: comerciantes publican productos con imágenes y categorías, y los usuarios encuentran ofertas en su área.",
    image: "🛒",
    tags: ["Flutter", "Firebase", "Mobile"],
    status: "Prototipo",
    category: "Prototipo",
  },
  {
    id: 16,
    title: "Login Flutter",
    description:
      "Módulo de autenticación en Flutter integrado con Firebase Authentication: diseño moderno, validación de formularios en tiempo real, manejo seguro de credenciales y arquitectura modular reutilizable.",
    image: "/login.webp",
    tags: ["Flutter", "Firebase Auth", "UI/UX"],
    status: "Prototipo",
    category: "Prototipo",
  },
  {
    id: 17,
    title: "Spa Serenity",
    description:
      "Embudo de conversión web para un centro de bienestar y spa enfocado en el agendamiento automático de citas, construido con HTML5, CSS3, PHP y MySQL y optimizado para dispositivos móviles.",
    image: "/spa.jpg",
    tags: ["PHP", "MySQL", "HTML/CSS"],
    status: "Terminado",
    category: "Proyecto de cliente",
  },
];

/** Categorías para los filtros de /portfolio. */
export const categories: ("Todos" | ProjectCategory)[] = [
  "Todos",
  "Producto propio",
  "Proyecto de cliente",
  "Prototipo",
  "Experimento personal",
];

/** Clases de badge según el estado del proyecto. */
export const statusStyles: Record<ProjectStatus, string> = {
  Disponible: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  "En desarrollo":
    "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  Terminado: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  Prototipo: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  Investigación: "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300",
};
