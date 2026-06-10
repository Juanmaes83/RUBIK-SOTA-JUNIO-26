# REPORTE DE CAMBIOS — rama `fix/auditoria`
**Repo:** Juanmaes83/rubiksotamovil · **Fecha:** 10/06/2026 · **Estado:** cambios en working tree, **sin commit ni push** (pendiente de tu aprobación)

---

## 0. Hallazgo no previsto en la auditoría — BUG CRÍTICO REPARADO

Durante la extracción del CSS, LightningCSS reveló que el bloque **«MOBILE RESPONSIVE FIXES» estaba pegado literalmente en medio de la palabra `scale(.66)`** de una declaración de `#equipo .wrap`:

```css
/* ANTES (real, en producción): */
#equipo .wrap {
    transform: s          ← declaración cortada
/* ====== MOBILE RESPONSIVE FIXES ====== */
@media (max-width: 768px) { …todo el bloque móvil… }
…
cale(.66);                ← la otra mitad de "scale", huérfana
```

Por la recuperación de errores del parser CSS, **gran parte de esos fixes móviles no se estaba aplicando en producción**. Es muy probable que esta sea la causa raíz de los problemas de móvil reportados (cubos/donut/hero). Reparado: declaración restaurada a `transform: scale(.66)` (intención original del autor) y bloque móvil liberado. Verificado: el CSS completo ahora **minifica sin un solo error**.

## 1. Preparación
- Rama `fix/auditoria` creada sobre clon limpio.
- `.gitignore`: `VIDEO*.mp4`, `index.backup-*.html`, `node_modules/`. **Nada borrado** (instrucción respetada). Nota: gitignore no des-trackea lo ya trackeado — los huérfanos siguen públicos; la purga (`git filter-repo`) queda documentada en README pendiente de tu aprobación.
- Dev-deps instaladas: `esbuild`, `lightningcss-cli`.

## 2. Refactor y rendimiento
| Cambio | Antes | Después |
|---|---|---|
| index.html | **610 KB**, 1 style + 5 JS inline | **58 KB** limpio |
| CSS | inline | `assets/styles.css` → `styles.min.css` (170 KB) |
| JS clásico | inline | `assets/app.js` → `app.min.js` (33 KB, `defer`) |
| Portafolio 3D | inline | **separado como módulo ES** `portfolio.module.min.js` (197 KB) — usa `import three` vía importmap, no podía concatenarse como script clásico |
| importmap | — | detectado, validado como JSON y **reinsertado en `<head>`** (debe preceder al módulo ✓) |
| Vídeos (4 autoplay) | descarga simultánea | `preload="none"` + `src→data-src` + **IntersectionObserver** (carga/play en viewport, pause fuera; sin play si reduced-motion) |
| Fuentes | 4 familias / 9 pesos | **Caveat y Saira eliminadas** (0 usos en CSS, verificado) + `preload` de los 2 woff2 críticos (Inter var + Oswald 600, URLs reales de gstatic) |
| Extra | — | `theme-color`, **404.html** coherente (negro/oro, Oswald) |

## 3. SEO y semántica
- `<h1 class="sr-only">Rubik Sota — estrategia, creatividad y tecnología</h1>` insertado en el hero (visualmente invisible: no altera el layout animado; los `h2` existentes quedan correctamente subordinados).
- **26/26 imágenes con `alt`**: 15 del marquee decorativo → `alt="" aria-hidden="true"`; la imagen generada por JS en el lightbox → `alt` añadido en el template.
- JSON-LD reescrito: `@type: ProfessionalService` en raíz, con teléfono y descripción (validar en Rich Results Test tras publicar).
- `srcset` 480/960/1440 + `sizes` en las **2 únicas** `<img>` Cloudinary del documento (las del marquee van por jsDelivr y no admiten variantes por URL — documentado, no inventado).
- Librerías: **lucide fijado a 1.17.0** (resolución real de `@latest` hoy) y **SRI sha384 calculado y añadido a las 5 libs** (gsap, CustomEase, ScrollTrigger, Observer, lucide) + `crossorigin`.

## 4. Accesibilidad y UX
- `:focus-visible` dorado global · `@media (prefers-reduced-motion: reduce)` en CSS **+** desactivación de GSAP/ScrollTrigger en JS.
- Burger: `aria-controls="rs-drawer"` añadido; `aria-expanded` sincronizado vía MutationObserver (cubre cualquier vía de apertura/cierre, incluida la existente).
- **Sección activa** resaltada en navegación (IntersectionObserver, clase `.rs-link-active`).
- Formulario: honeypot `name="botcheck"` (tipo checkbox oculto — me desvío del "text" del encargo porque **es el formato que Web3Forms procesa nativamente** como anti-spam) + feedback «Enviando… / Enviado / Error» con `aria-live` y botón deshabilitado durante el envío, implementado **envolviendo `fetch`** para no duplicar el submit existente.
- Política de privacidad ampliada: Web3Forms, Cloudinary, Google Fonts, Microlink y CDNs.

## 5. Correcciones móviles específicas
**Contexto verificado antes de tocar nada:** el "portafolio de cubos" y el "donut" **no son DOM, son WebGL** (Three.js el portafolio; WebGL puro con shaders el donut). El fix prescrito de `scroll-snap` sobre cubos DOM no aplica literalmente; esto es lo aplicado y por qué:
- **Portafolio 3D:** el código del autor **ya implementa drag táctil** (verificado: `pointerdown/pointermove/touchstart/touchmove` presentes en su JS). Lo que estaba roto era el CSS móvil (bug §0, ahora reparado). Añadido además: `height:100svh` (corrige saltos de barra en iOS), overlay de texto con `left/max-width/padding` en `clamp()` para que no desborde en 320 px, y `touch-action:pan-y` para que el drag horizontal no secuestre el scroll vertical.
- **Donut de contacto:** el autor ya tiene `PointerHandler` propio (drag implementado, verificado en código). Añadido: `max-width:100%` y `touch-action:pan-y` al canvas, `overflow-x:hidden` a la sección y padding fluido del wrapper en ≤480 px.

## 6. Seguridad
- **CSP por meta** en `<head>`: `script-src 'self' + cdnjs + unpkg + jsdelivr` (jsdelivr necesario: el importmap carga Three desde ahí), `object-src 'none'`, img/media/connect/font/frame acotados a los dominios reales en uso. Sin `unsafe-inline` en scripts (0 handlers inline tras la extracción, verificado).
- SRI en las 5 librerías externas (§3).

## 7. Calidad y automatización
- `package.json` con scripts: `build` (js+css+dist), `lint`; `.eslintrc.json` + `.prettierrc`.
- `.github/workflows/build.yml`: lint + build + artefacto `dist/` — **sin deploy automático**, a propósito.
- `dist/` generado con los 9 archivos publicables para revisión.
- `README.md` creado: estructura, build local, bug CSS documentado, huérfanos y pendientes.

## 8. Pruebas realizadas y límites honestos
**Hecho en este entorno:** QA automatizado 27/27 (extracción completa, h1 único, alts 26/26, SRI×5, CSP, importmap antes del módulo, vídeos lazy×4 sin autoplay, honeypot, divs/sections balanceados…) · sintaxis JS validada con Node · CSS validado por LightningCSS **sin** error-recovery · build reproducible.
**NO ejecutable aquí (pendiente de ti):** render real en Chrome/Firefox/Safari/Edge y en 320/768/1280 px — especialmente cubos y donut en táctil tras la reparación del CSS. Comando: `npx http-server .` y prueba en dispositivo.

## 9. Cómo revisar y aprobar
```bash
# Los cambios están en tu copia local de la rama fix/auditoria (sin commit)
git status                  # 25 archivos (2 modificados, 23 nuevos)
git diff index.html         # o aplica /tmp/fix-auditoria.diff sobre un clon limpio
npx http-server . -p 8080   # revisar en navegador
# Si lo apruebas:
git add -A && git commit -m "fix: auditoría completa (rendimiento, a11y, SEO, CSP, bug CSS móvil)" 
git push -u origin fix/auditoria   # ← solo con tu OK explícito
```

**Decisiones que requieren tu aprobación:** (1) commit+push de la rama; (2) purga de los 120 MB de huérfanos del historial; (3) el `scale(.66)` restaurado en `#equipo .wrap` ≤520px — era la intención original del autor, pero verifica visualmente que te gusta.
