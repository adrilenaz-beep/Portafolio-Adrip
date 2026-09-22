#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Servidor chiquito para ordenar la obra del portafolio.

Sirve la carpeta del sitio y acepta un POST en /guardar que reescribe obra.js.
No sale a internet, solo escucha en esta computadora.
"""
import http.server, socketserver, json, os, io, shutil, datetime, webbrowser, threading, sys

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUERTO = 8899
DATOS = os.path.join(RAIZ, 'obra.js')
COPIAS = os.path.join(RAIZ, 'herramienta', 'copias')

CABECERA = """// ─────────────────────────────────────────────────────────────
//  DATOS DEL PORTAFOLIO
//  El sitio se arma solo desde este archivo.
//  Lo edita la herramienta, ORDENAR LA OBRA.command
// ─────────────────────────────────────────────────────────────

"""


class Manejador(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=RAIZ, **kw)

    def log_message(self, *a):
        pass                                   # sin ruido en la ventana

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def do_POST(self):
        if self.path != '/guardar':
            self.send_error(404)
            return
        try:
            n = int(self.headers.get('Content-Length', 0))
            datos = json.loads(self.rfile.read(n).decode('utf-8'))
            for clave in ('GRUPOS', 'SECCIONES', 'OBRAS'):
                if clave not in datos:
                    raise ValueError('faltan datos, ' + clave)
            if not datos['OBRAS']:
                raise ValueError('no llegó ninguna obra, no guardo nada')

            os.makedirs(COPIAS, exist_ok=True)
            if os.path.exists(DATOS):
                sello = datetime.datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
                shutil.copy(DATOS, os.path.join(COPIAS, f'obra_{sello}.js'))

            cuerpo = CABECERA
            for clave in ('GRUPOS', 'SECCIONES', 'OBRAS'):
                cuerpo += f'const {clave} = ' + json.dumps(
                    datos[clave], ensure_ascii=False, indent=1) + ';\n\n'
            io.open(DATOS, 'w', encoding='utf-8').write(cuerpo)

            self.responder(200, {'ok': True, 'obras': len(datos['OBRAS'])})
            print(f'  guardado · {len(datos["OBRAS"])} obras en {len(datos["SECCIONES"])} secciones')
        except Exception as e:
            self.responder(400, {'ok': False, 'error': str(e)})
            print('  ERROR al guardar:', e)

    def responder(self, codigo, cuerpo):
        b = json.dumps(cuerpo).encode('utf-8')
        self.send_response(codigo)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(b)))
        self.end_headers()
        self.wfile.write(b)


def sueltas():
    """imágenes en obra/ que no usa ninguna obra, para el banco"""
    import re
    try:
        d = io.open(DATOS, encoding='utf-8').read()
        usadas = set(re.findall(r'"src":\s*"obra/([^"]+)"', d))
    except OSError:
        usadas = set()
    carpeta = os.path.join(RAIZ, 'obra')
    if not os.path.isdir(carpeta):
        return []
    todas = [f for f in sorted(os.listdir(carpeta))
             if not f.startswith('.') and not f.lower().endswith('.pdf')]
    return [f for f in todas if f not in usadas]


if __name__ == '__main__':
    io.open(os.path.join(RAIZ, 'herramienta', 'sueltas.json'), 'w', encoding='utf-8').write(
        json.dumps(sueltas(), ensure_ascii=False))
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(('127.0.0.1', PUERTO), Manejador) as srv:
        url = f'http://localhost:{PUERTO}/herramienta/ordenar.html'
        print('')
        print('  Ordenador de obra en marcha.')
        print('  Se abrió en el navegador. Si no, entrá a')
        print('  ' + url)
        print('')
        print('  Cuando termines, cerrá esta ventana negra.')
        print('')
        threading.Timer(1.0, lambda: webbrowser.open(url)).start()
        try:
            srv.serve_forever()
        except KeyboardInterrupt:
            print('\n  Listo, servidor detenido.\n')
