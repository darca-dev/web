# DEPLOYMENT — Arvtech Studio

Instrucciones para mantener y desplegar **www.arvtechstudio.com** usando
**Vercel CLI**, sin depender de GitHub.

> **Regla de oro:** nunca se despliega a producción sin aprobación expresa
> del propietario. Primero Preview, después validación, y solo luego
> Production.

---

## 0. Requisitos

- Node.js 20+ instalado (`node -v`).
- Cuenta de Vercel con acceso al proyecto existente
  (la misma que conserva el dominio `arvtechstudio.com`).
- Dependencias del proyecto instaladas:

```powershell
cd "D:\02_Dev\Web\portafolio"
npm install
```

---

## 1. Instalar o verificar Vercel CLI

```powershell
npm install -g vercel
vercel --version
```

---

## 2. Autenticar la cuenta

```powershell
vercel login
```

Sigue el flujo en el navegador con la cuenta de Vercel que tiene acceso al
dominio. Si usas un token alternativo:

```powershell
$env:VERCEL_TOKEN = "tu-token"
```

---

## 3. Vincular al proyecto EXISTENTE (no crear uno nuevo)

```powershell
cd "D:\02_Dev\Web\portafolio"
vercel link
```

- Cuando pregunte por el proyecto, elige **el proyecto existente** de tu
  cuenta de Vercel (el que ya sirve `www.arvtechstudio.com`).
- **No** aceptes crear un proyecto nuevo.
- Esto genera el archivo `.vercel/` (ya está en `.gitignore`).

Para verificar cuál quedó vinculado:

```powershell
vercel project ls
```

---

## 4. Variables de entorno

El sitio funciona sin variables de entorno. Solo son necesarias si quieres
activar el formulario de contacto con EmailJS.

> **Decisión de lanzamiento (P0-4, 17 nov 2026):** se lanza con el fallback
> honesto del formulario (aviso + correo directo, sin variables). Activar
> EmailJS es opcional y posterior al lanzamiento.

| Variable | Descripción | Estado |
|---|---|---|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | ID del servicio EmailJS | Opcional — sin configurar |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | ID de la plantilla | Opcional — sin configurar |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Clave pública de EmailJS | Opcional — sin configurar |

Sin ellas, el formulario muestra un aviso honesto con el correo
`arvtechv@gmail.com` (no simula envíos).

Configúralas en: Vercel Dashboard → tu proyecto → Settings → Environment
Variables, o localmente con `vercel env add`.

---

## 5. Compilación local (siempre antes de desplegar)

```powershell
npm run build
npm run lint
```

Ambos deben terminar sin errores.

---

## 6. Desplegar a PREVIEW (primera fase)

```powershell
vercel
```

- `vercel` sin flags despliega a **Preview**.
- Al final imprime una URL tipo `https://proyecto-xxxx.vercel.app`.
- **No** uses `--prod` en esta fase.

---

## 7. Comprobar la Preview

Abre la URL de Preview y verifica:

- [ ] `/` — home (hero, productos, servicios, fundador, proyectos, contacto)
- [ ] `/products`
- [ ] `/products/skara`
- [ ] `/products/skara/privacy`
- [ ] `/products/skara/support`
- [ ] `/products/skara/account-deletion`
- [ ] `/services`
- [ ] `/about`
- [ ] `/portfolio` (filtros por categoría)
- [ ] `/app-ads.txt` → debe responder `google.com, pub-9111138619766884, DIRECT, f08c47fec0942fa0`
- [ ] `/robots.txt` y `/sitemap.xml`
- [ ] Menú móvil, modo claro/oscuro y formulario de contacto
- [ ] Sin errores en la consola del navegador (F12)

---

## 8. Desplegar a PRODUCTION (solo con aprobación)

```powershell
vercel --prod
```

**Ejecutar únicamente cuando:**

1. Tú hayas revisado la Preview y aprobado por escrito, y
2. Los pendientes de este proyecto estén resueltos (ver sección final).

---

## 9. Información del proyecto en Vercel

- **Dominio:** `www.arvtechstudio.com` — **no tocar** (DNS, certificados ni
  alias).
- **Proyecto:** usar el existente; no crear otro.
- **Deployment anterior:** no eliminarlo (sirve de red de seguridad).
- **Rama de producción:** el CLI despliega lo que tienes en local; el sitio
  no depende de GitHub.

---

## 10. Copia de seguridad en GitHub (opcional, sin efecto en el despliegue)

El repositorio `https://github.com/darca-dev/web.git` guarda el historial
del proyecto. Actualizarlo es opcional y **no** está conectado a Vercel:

```powershell
cd "D:\02_Dev\Web\portafolio"
git add -A
git commit -m "descripcion del cambio"
git push origin main
```

---

## 11. Solución de problemas

| Problema | Solución |
|---|---|
| `vercel: command not found` | `npm install -g vercel` |
| Pide login cada vez | `vercel login` o variable `VERCEL_TOKEN` |
| Despliega a un proyecto equivocado | `vercel link` y elegir el proyecto existente |
| `app-ads.txt` no encontrado | Confirmar que el archivo está en `public/app-ads.txt` |
| Formulario no envía | Configurar las 3 variables EmailJS (sección 4) |
| Build falla | `npm run build` en local y corregir antes de desplegar |
