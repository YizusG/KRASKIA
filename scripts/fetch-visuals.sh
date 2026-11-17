#!/usr/bin/env bash
set -euo pipefail
# KRASKIA v3: imágenes fotográficas nuevas, de libre uso Unsplash.
# Se guardan en la compilación para no depender del CDN en tiempo de visita.
DEST="public/images/v3"
mkdir -p "$DEST"
get_photo() {
  local id="$1" file="$2" width="$3"
  mkdir -p "$(dirname "$DEST/$file")"
  curl --fail --location --retry 3 --retry-delay 2 --silent --show-error \
    "https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=78&fm=jpg" \
    --output "$DEST/$file"
  test "$(wc -c < "$DEST/$file")" -gt 2000
}
get_photo "photo-1764588037085-a78240016f8b" "hero.jpg" 1500
get_photo "photo-1746459001269-1dc33c7c5223" "servicios.jpg" 900
get_photo "photo-1793100123514-0396f06a0474" "portafolio.jpg" 900
get_photo "photo-1786616034991-54bcd98ce93c" "contacto.jpg" 900
get_photo "photo-1758553173287-513ad13280b6" "fotografia.jpg" 750
get_photo "photo-1758553173287-513ad13280b6" "video.jpg" 750
get_photo "photo-1786616034991-54bcd98ce93c" "reels.jpg" 750
get_photo "photo-1745302281184-dfdad65fe6cc" "identidad.jpg" 750
get_photo "photo-1754956042737-b011bbbc30ca" "botanico.jpg" 900

# KRASKIA 4.0 — escenarios específicos de la tercera dirección de arte.
# Hero: persona editando video; tarjetas: cámara, hoja con rocío, taza negra.
get_photo "photo-1749410342681-3510f9edb7ad" "v4/hero-editor.jpg" 1600
get_photo "photo-1734543195317-23d8cc045fb6" "v4/servicios-camara.jpg" 900
get_photo "photo-1568751202736-1e96e5dd38b1" "v4/portafolio-hoja.jpg" 900
get_photo "photo-1716425916865-cee1bcfffec7" "v4/contacto-taza.jpg" 900

echo "KRASKIA: colecciones v3 y v4 listas."
