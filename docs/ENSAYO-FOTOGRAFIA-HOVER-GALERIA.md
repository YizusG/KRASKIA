# Ensayo visual: repostería, refrescos y realce al cursor

Esta rama está en **revisión**, sin publicar en Hostinger. Conserva la página aprobada y cambia solo la página interior Fotografía con IA.

## Nuevas fotografías de galería

Se reemplazan las imágenes 1 y 2 por:
- `public/images/fotografia-ia/galeria-reposteria.webp`: cupcake de chocolate con frambuesas.
- `public/images/fotografia-ia/galeria-refrescos.webp`: bebidas de frutas con hielo y menta.

**Pendiente:** incorporar físicamente los archivos WebP al repositorio antes de fusionar la rama. Existen en un paquete ZIP de recursos listo para subir. No fusionar mientras falten: el navegador mostraría imágenes alternativas. La tercera imagen actual se conserva.

## Interacción

Las imágenes hero, Antes/Después, Aplicaciones y Galería tienen una transición CSS discreta al pasar el cursor: escala 1.035 o 1.065, saturación y luminosidad suaves. El efecto está encapsulado dentro de `.photo-page`; no modifica la home. En dispositivos táctiles no obliga a un hover artificial. Respeta `prefers-reduced-motion`.

## Validaciones para publicar

1. Subir las dos imágenes al directorio indicado.
2. Revisar que se vean bien en desktop/iPad/móvil y que no haya duplicados.
3. Confirmar compilación de la rama.
4. Fusionar con `main`, sincronizar `production` y desplegar en Hostinger solo después de validación visual.
