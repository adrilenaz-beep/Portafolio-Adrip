#!/bin/bash
# Abre el ordenador de obra del portafolio.
cd "$(dirname "$0")"
echo ""
echo "  Arrancando el ordenador de obra..."
python3 herramienta/servidor.py
