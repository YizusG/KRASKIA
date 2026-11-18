# KRASKIA · Integración de Pages CMS (fase 2)

**Estado:** rama de prueba; no está en producción.

## Origen de los datos

- Fichas: `content/projects/*.json` (colección de Pages CMS).
- Imágenes: `public/images/projects/`.
- Vite importa las fichas al compilar y las adapta mediante `src/managedProjects.js`.
- Solo muestra entradas `status: published` **y** `authorized: true`; los borradores quedan ocultos.
- Los videos necesitan una URL válida de YouTube.
- `order` controla el orden de las fichas.

## Conservación del diseño

Las secciones 02 y 03 mantienen su estructura y clases originales.
Cuando se publica un proyecto de video, reemplaza la tarjeta de muestra de video en la sección 02; la portada es la imagen cargada en Pages CMS.
La sección 03 mantiene su contenedor 16:10; el video se ajusta dentro a 9:16 o 16:9 con bandas libres, sin estirar la imagen. El primer clic en la tarjeta lleva a #videos y solicita autoplay silenciado, sujeto a las restricciones del navegador.
Sin proyectos publicados, la sección 03 continúa diciendo «PRÓXIMAMENTE» y las tarjetas demostrativas permanecen.

## Flujo de publicación cuando se apruebe esta integración

1. Revisar PR y compilar.
2. Fusionar el PR aprobado a `main`; la acción de GitHub construirá `production`.
3. Conectar la rama **main** en Pages CMS; la rama inicial `feature/kraskia-pages-cms-stage1-2026-11-18` seguirá siendo de pruebas y **no publica al sitio**.
4. Modificar un proyecto en Pages CMS y marcarlo `published`; hacer Save para generar un commit en `main`.
5. GitHub Actions recompila el sitio; Hostinger debe desplegar la rama `production` siguiendo la configuración existente. No es tiempo real: depende de la ejecución del flujo y de la actualización del hosting.
6. Comprobar desktop/móvil y el enlace a sección 03.

**No** se deben publicar cambios directos a producción desde esta rama de pruebas. Conservar siempre respaldo del último diseño aprobado.
