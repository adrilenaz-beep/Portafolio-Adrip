#!/bin/bash
# Abre el diseño nuevo en el navegador, con servidor local.
cd "$(dirname "$0")"
PUERTO=8123
python3 -m http.server $PUERTO >/dev/null 2>&1 &
SRV=$!
sleep 1
open "http://localhost:$PUERTO/"
echo ""
echo "  Se abrió el diseño nuevo en el navegador."
echo ""
echo "  Mientras esta ventana negra siga abierta, la página funciona."
echo "  Cuando termines de mirar, cerrala."
echo ""
trap "kill $SRV 2>/dev/null" EXIT
wait $SRV
