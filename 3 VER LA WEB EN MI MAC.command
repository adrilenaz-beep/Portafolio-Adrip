#!/bin/bash
# Abre el sitio como se vería publicado, pero desde esta computadora.
cd "$(dirname "$0")"
echo ""
echo "  Abriendo el sitio en esta computadora..."
python3 herramienta/servidor.py ver
