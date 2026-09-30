#!/bin/bash
# Le pone o le saca la clave de entrada a todo el sitio. Doble clic y seguí lo que dice.
cd "$(dirname "$0")"
clear
python3 herramienta/clave-del-sitio.py
echo
echo "  Podés cerrar esta ventana."
echo
read -n 1 -s
