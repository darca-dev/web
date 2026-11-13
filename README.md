# Arvtech Studio — Sitio oficial

Sitio web oficial de **Arvtech Studio** (https://www.arvtechstudio.com),
evolucionado a partir del portafolio personal de Carlos del Ángel, fundador y
desarrollador del estudio.

Next.js 16 · TypeScript · TailwindCSS 4 · Framer Motion · Deploy en Vercel

## Estructura de rutas

```
/                              Inicio (hero, productos, servicios, fundador, proyectos, contacto)
/products                      Catálogo de productos propios
/products/skara                Skara Punto de Venta
/products/skara/privacy        Política de privacidad de Skara
/products/skara/support        Centro de soporte de Skara
/products/skara/account-deletion  Eliminación de cuenta
/services                      Servicios profesionales (7 categorías)
/about                         Arvtech Studio + fundador + trayectoria
/portfolio                     Portafolio con filtros por categoría
/app-ads.txt                   Verificación AdMob (servido desde la raíz)
/sitemap.xml · /robots.txt     SEO
```

## Características

- Modo oscuro/claro con persistencia
- Navegación responsive (menú móvil incluido)
- Animaciones discretas con Framer Motion
- Metadata SEO por página, canonical `https://www.arvtechstudio.com`
- JSON-LD (Organization, WebSite, SoftwareApplication de Skara)
- Datos estructurados y sitemap generados en build

## Instalación

```powershell
npm install
npm run dev     # http://localhost:3000
npm run build   # compilación de producción
npm run lint    # ESLint
```

## Estructura de carpetas

```
app/                 Páginas (App Router) + layout, sitemap, robots
components/          Componentes de UI y secciones
lib/                 Datos compartidos (site.ts, projects.ts, services.ts)
public/              Imágenes, app-ads.txt
DEPLOYMENT.md        Procedimiento de despliegue con Vercel CLI (sin GitHub)
```

## Despliegue

Ver [DEPLOYMENT.md](./DEPLOYMENT.md). Resumen: `vercel login` → `vercel link`
(proyecto existente) → `npm run build` → `vercel` (Preview) → revisar →
`vercel --prod` **solo con aprobación**.

## Contacto

- Correo: arvtechv@gmail.com
- Skara en Google Play: https://play.google.com/store/apps/details?id=com.ar.punto_venta
