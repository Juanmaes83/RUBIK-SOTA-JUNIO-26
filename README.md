# Rubik Sota — Web (rubiksotamovil)

Web de la agencia. **Rama `fix/auditoria`**: refactor de rendimiento, accesibilidad, SEO y fixes móviles según informe de auditoría 10/06/2026.

## Estructura
```
index.html                      HTML (58 KB; antes 610 KB monolíticos)
assets/styles.css|.min.css      CSS extraído + correcciones (BUG crítico reparado, ver abajo)
assets/app.js|.min.js           JS clásico extraído + mejoras (a11y, lazy vídeo, form UX)
assets/portfolio.module.js|.min.js  Portafolio 3D (módulo ES + Three.js vía importmap)
404.html · aviso-legal.html · politica-privacidad.html
.github/workflows/build.yml     CI: lint + build a dist/ (sin deploy automático)
```

## Build local
```bash
npm install
npm run build        # minifica a assets/*.min.* y copia artefactos a dist/
npm run lint         # eslint + prettier --check
npx http-server .    # o python3 -m http.server — abrir http://localhost:8080
```

## Bug crítico reparado en CSS
El bloque «MOBILE RESPONSIVE FIXES» estaba **pegado en medio de la palabra `scale(.66)`** de una declaración (`transform: s` … `cale(.66);`). Por la recuperación de errores del parser CSS, gran parte de esos fixes móviles **no se aplicaban en producción**. Reparado en `assets/styles.css` (búscar «FIX/AUDITORIA»).

## Recursos huérfanos (no borrados, por instrucción)
`VIDEO1–19.mp4` (~120 MB) e `index.backup-*.html` (8 archivos) **no se referencian desde ninguna página**: los vídeos reales se sirven desde Cloudinary. Están añadidos a `.gitignore` para no crecer más, pero siguen trackeados y públicos. **Recomendación pendiente de aprobación:** purgarlos del historial con `git filter-repo` (comando en el informe de auditoría).

## Pendiente de verificación manual (no automatizable aquí)
Safari iOS/Chrome Android reales: portafolio 3D (drag táctil ya implementado vía pointer/touch events del autor + `touch-action: pan-y` para no bloquear scroll) y donut de contacto (PointerHandler propio del autor + contención CSS añadida).
