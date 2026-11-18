# Página interior · Fotografía con IA

Estado: **rama de prueba, no publicada**.

## Implementación

- `src/PhotographyAI.jsx`: página interior; conserva las 6 secciones aprobadas.
- `src/photography.css`: estilo encapsulado, responsive, sin alterar `src/styles.css`.
- `src/main.jsx`: muestra la página interior al acceder a `/?servicio=fotografia-con-ia`; en cualquier otro caso, conserva la portada.
- `src/App.jsx`: agrega un enlace superpuesto a toda la tarjeta **01 Fotografía con IA**. No altera el resto de tarjetas.
- Ruta de retorno: `/#servicios`.
- Enlace de contacto: `/#contacto`. No inventa WhatsApp ni datos.

## Recursos visuales incorporados a la rama de prueba

Las nueve imágenes optimizadas aprobadas ya están en `public/images/fotografia-ia/` con estos nombres:

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

La página carga estos archivos directamente. Si faltara alguno, hay una imagen alternativa del sitio únicamente como protección técnica; los nueve archivos están presentes en esta rama.

Las imágenes de **antes y después** son conceptuales, no fotografías de un mismo producto tomadas en dos momentos.

## Verificación antes de incorporar a main

1. Verificar que los nueve recursos carguen correctamente.
2. Revisar en ordenador y móvil, en especial textos, recortes y navegación.
3. Confirmar que la portada de KRASKIA no cambió, salvo la posibilidad de abrir el módulo 01.
4. Aprobar explícitamente la página y entonces fusionar a main y desplegar. No hacerlo automáticamente.

No cambia Pages CMS ni el portafolio o videos.
