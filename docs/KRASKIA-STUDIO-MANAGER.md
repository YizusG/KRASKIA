# KRASKIA Studio Manager · Etapa 1

Este es el prototipo de contenidos para el estudio. **No está conectado al sitio público**, no sustituye el diseño existente y no modifica Hostinger. Los cambios están aislados en la rama `feature/kraskia-pages-cms-stage1-2026-11-18`.

## Estructura

- `.pages.yml`: define el formulario del editor Pages CMS.
- `content/projects/*.json`: ficha independiente por proyecto.
- `public/images/projects/`: imágenes nuevas administradas mediante el gestor, cuando se conecte.
- `content/projects/cafe-san-jose.json`: registro de ejemplo en estado **draft**.

## Activación (requiere autorización del propietario de GitHub)

1. Abrir https://app.pagescms.org/ e iniciar sesión con GitHub.
2. Instalar/autorizar la aplicación Pages CMS para el repositorio `YizusG/KRASKIA`; elegir acceso limitado a ese repositorio.
3. Seleccionar la rama de prueba `feature/kraskia-pages-cms-stage1-2026-11-18` si la interfaz ofrece selección de rama.
4. Revisar/editar el registro Café San José. **No pasar aún a publicación pública.**

## Límite de esta etapa

El editor de Pages CMS utiliza su propia interfaz. La paleta y tipografía exactas de KRASKIA solo se podrían reproducir desarrollando posteriormente una interfaz propia. Ninguna modificación al campo `status` se reflejará en kraskia.com hasta implementar y verificar la fase 2, que deberá leer los registros, filtrar los publicados y mantener intacta la retícula y la sección de videos.

No almacenar claves o tokens de GitHub en este repositorio.
