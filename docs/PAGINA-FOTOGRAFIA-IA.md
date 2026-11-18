# Página interior · Fotografía con IA

Estado: **rama de prueba, no publicada**.

## Implementación

- `src/PhotographyAI.jsx`: página interior; conserva las 6 secciones aprobadas.
- `src/photography.css`: estilo encapsulado, responsive, sin alterar `src/styles.css`.
- `src/main.jsx`: muestra la página interior al acceder a `/?servicio=fotografia-con-ia`; en cualquier otro caso, conserva la portada.
- `src/App.jsx`: agrega un enlace superpuesto a toda la tarjeta **01 Fotografía con IA**. No altera el resto de tarjetas.
- Ruta de retorno: `/#servicios`.
- Enlace de contacto: `/#contacto`. No inventa WhatsApp ni datos.

## Recursos visuales pendientes de añadir antes de publicación

La imagen de referencia fue aprobada y el paquete de fotografías optimizadas está listo para revisión por separado. Este repositorio **aún no contiene** los archivos fotográficos nuevos. Deben colocarse en `public/images/fotografia-ia/` con estos nombres:

```
hero.webp
antes.webp
despues.webp
aplicacion-cafe.webp
aplicacion-cosmetica.webp
aplicacion-artesanal.webp
galeria-perfume.webp
galeria-granos.webp
galeria-crema.webp
```

Mientras esos archivos estén pendientes, la página usa imágenes alternativas del sitio para evitar imágenes rotas en la rama de prueba; no se debe aprobar publicación por apariencia hasta completar los recursos.

Las imágenes de **antes y después** son conceptuales, no fotografías de un mismo producto tomadas en dos momentos.

## Verificación antes de incorporar a main

1. Cargar los archivos optimizados aprobados en esta misma rama.
2. Revisar en ordenador y móvil, en especial textos, recortes y navegación.
3. Confirmar que la portada de KRASKIA no cambió, salvo la posibilidad de abrir el módulo 01.
4. Aprobar explícitamente la página y entonces fusionar a main y desplegar. No hacerlo automáticamente.

No cambia Pages CMS ni el portafolio o videos.
