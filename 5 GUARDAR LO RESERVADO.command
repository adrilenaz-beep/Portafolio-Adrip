#!/bin/bash
# Cifra el material que no se publica. Guarda solo, no hay que arrastrar nada.
cd "$(dirname "$0")"
echo ""
echo "  Abriendo el cifrador de lo reservado..."
python3 herramienta/servidor.py reservar
