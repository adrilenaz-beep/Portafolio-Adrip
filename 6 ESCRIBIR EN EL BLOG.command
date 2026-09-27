#!/bin/bash
# Abre el editor del blog. Escribís, guardás, y después Push origin.
cd "$(dirname "$0")"
echo ""
echo "  Arrancando el editor del blog..."
python3 herramienta/servidor.py blog
