// Catálogo de servicios de Arvtech Studio.
// Redactado a partir del brief del proyecto: sin precios ni tiempos de entrega.

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  problem: string;
  client: string;
  icon: string; // nombre de icono lucide (se resuelve en los componentes)
}

export const services: Service[] = [
  {
    slug: "apps-moviles",
    title: "Desarrollo de aplicaciones móviles",
    short: "Apps Android e iOS con Flutter, pensadas para uso real.",
    description:
      "Diseñamos y desarrollamos aplicaciones móviles multiplataforma con Flutter para Android e iOS, desde la interfaz hasta la lógica de negocio, con foco en rendimiento, estabilidad y una experiencia de uso cuidada.",
    problem:
      "Necesitas que tu negocio o tu idea esté en el bolsillo de tus usuarios, pero una app mal construida se rompe, consume batería y aleja a los clientes.",
    client:
      "Negocios, emprendedores y equipos que quieren llevar su producto a Android e iOS sin duplicar esfuerzos.",
    icon: "smartphone",
  },
  {
    slug: "apps-web",
    title: "Desarrollo de aplicaciones web",
    short: "Sitios y plataformas rápidas, responsivas y bien construidas.",
    description:
      "Construimos sitios corporativos, landings y aplicaciones web con tecnologías modernas (Next.js, React, TypeScript), con diseño responsivo, buen rendimiento y estructura SEO desde el primer día.",
    problem:
      "Tu presencia actual es lenta, difícil de mantener o no convierte visitantes en clientes.",
    client:
      "Marcas, profesionales y negocios que necesitan una web que cargue rápido, se vea bien en móvil y se posicione en buscadores.",
    icon: "globe",
  },
  {
    slug: "sistemas-gestion",
    title: "Sistemas de gestión y punto de venta",
    short: "POS y administración de ventas, inventario y operaciones.",
    description:
      "Desarrollamos sistemas de punto de venta y administración comercial: ventas, productos, inventario, clientes, proveedores e impresión de tickets, funcionando en móvil y escritorio.",
    problem:
      "Las ventas se registran en libretas o hojas de cálculo, el inventario nunca cuadra y no sabes qué se vende ni cuándo.",
    client:
      "Comercios, restaurantes, ferreterías, papelerías y cualquier negocio que necesite control real de sus operaciones.",
    icon: "store",
  },
  {
    slug: "automatizacion",
    title: "Automatización de procesos",
    short: "Menos tareas repetitivas, menos errores manuales.",
    description:
      "Identificamos tareas repetitivas de tu operación y las automatizamos con software a medida: generación de reportes, sincronización de información, notificaciones y flujos de aprobación.",
    problem:
      "Tu equipo pierde horas en trabajos manuales que una máquina podría hacer en segundos, con riesgo de error humano.",
    client:
      "Equipos operativos que dedican demasiado tiempo a tareas repetitivas y necesitan escalar sin contratar más personal.",
    icon: "workflow",
  },
  {
    slug: "software-a-medida",
    title: "Desarrollo de software personalizado",
    short: "Software que se ajusta a tu proceso, no al revés.",
    description:
      "Construimos herramientas a medida para tu operación específica: portales internos, módulos de control, aplicaciones de escritorio y sistemas que se adaptan a la forma en que ya trabajas.",
    problem:
      "El software genérico del mercado no cubre tu flujo real y terminas adaptando tu negocio a la herramienta.",
    client:
      "Negocios y organizaciones con procesos propios que ya probaron soluciones genéricas y necesitan algo que se ajuste.",
    icon: "code",
  },
  {
    slug: "integraciones-backend",
    title: "Integraciones y backend",
    short: "APIs, bases de datos y servicios que conectan tus sistemas.",
    description:
      "Desarrollamos la parte que no se ve pero sostiene todo: APIs REST, servicios backend, bases de datos (SQL y NoSQL), autenticación e integración entre tus aplicaciones y servicios de terceros.",
    problem:
      "Tus sistemas no se hablan entre sí: la información se captura varias veces, en distintos lugares, y nunca está sincronizada.",
    client:
      "Productos y negocios que ya tienen una aplicación y necesitan una base sólida o conectarla con otras herramientas.",
    icon: "server",
  },
  {
    slug: "inteligencia-artificial",
    title: "Soluciones de inteligencia artificial",
    short: "Asistentes y automatización con IA, a medida de tu producto.",
    description:
      "Incorporamos inteligencia artificial a productos y procesos: asistentes de escritorio, atención automatizada, análisis de información y flujos que aprenden de tus datos. Es un área en la que seguimos invirtiendo activamente.",
    problem:
      "Tienes datos y consultas repetitivas que hoy resuelves a mano, y quieres dar un salto de eficiencia sin reinventar tu operación.",
    client:
      "Productos y equipos que quieren explorar IA aplicada a un problema concreto, con un alcance claro y medible.",
    icon: "brain",
  },
];
