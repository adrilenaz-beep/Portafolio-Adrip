#!/bin/bash
# Le pone clave a los PDF de la PBFCC. Doble clic y seguí lo que dice.
cd "$(dirname "$0")"
clear
python3 herramienta/proteger-pdfs.py
echo
echo "  Podés cerrar esta ventana."
echo
read -n 1 -s
