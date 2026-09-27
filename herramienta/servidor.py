#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Servidor chiquito para las herramientas del sitio.

Sirve la carpeta del sitio y acepta unos pocos POST que reescriben archivos de
datos. No sale a internet, solo escucha en esta computadora.

  /guardar    reescribe portafolio-datos.js
  /blog       reescribe blog.js
  /reservado  escribe reservado.enc, que llega ya cifrado desde el navegador
  /subir      recibe una imagen, audio o video, lo guarda en blog/ y le genera
              las versiones chicas

Se arranca de dos maneras
  python3 herramienta/servidor.py         abre el ordenador de obra
  python3 herramienta/servidor.py blog    abre el editor del blog
"""
import http.server, socketserver, json, os, io, re, shutil, datetime, webbrowser, threading, sys, unicodedata
import mimetypes

# Python mapea .m4a a audio/mp4a-latm, que el navegador no reconoce y no suena.
mimetypes.add_type('audio/mp4', '.m4a')
mimetypes.add_type('audio/wav', '.wav')

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUERTO = 8899
DATOS = os.path.join(RAIZ, 'portafolio-datos.js')
BLOG = os.path.join(RAIZ, 'blog.js')
SOBRE = os.path.join(RAIZ, 'reservado.enc')
MEDIOS = os.path.join(RAIZ, 'blog')
INDICE = os.path.join(RAIZ, 'derivadas.js')
COPIAS = os.path.join(RAIZ, 'herramienta', 'copias')

CABECERA_BLOG = """// ─────────────────────────────────────────────────────────────
//  BLOG
//  Lo edita la herramienta, 6 ESCRIBIR EN EL BLOG.command
//
//  clase, una de estas tres
//    lectura      lo que leí y qué me dejó
//    idea         algo en proceso, sin terminar de pensar
//    experimento  audio, video, pruebas
//
//  clave true significa que el cuerpo NO está acá. Vive cifrado
//  dentro de reservado.enc y aparece recién con la clave correcta.
// ─────────────────────────────────────────────────────────────

"""

CABECERA = """// ─────────────────────────────────────────────────────────────
//  DATOS DEL PORTAFOLIO
//  El sitio se arma solo desde este archivo.
//  Lo edita la herramienta, ORDENAR LA OBRA.command
// ─────────────────────────────────────────────────────────────

"""


class Parcial(io.RawIOBase):
    """Deja leer solo el tramo pedido de un archivo."""

    def __init__(self, f, largo):
        self.f, self.queda = f, largo

    def read(self, n=-1):
        if self.queda <= 0:
            return b''
        if n is None or n < 0 or n > self.queda:
            n = self.queda
        b = self.f.read(n)
        self.queda -= len(b)
        return b

    def close(self):
        self.f.close()
        super().close()


class Manejador(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **kw):
        super().__init__(*a, directory=RAIZ, **kw)

    def log_message(self, *a):
        pass                                   # sin ruido en la ventana

    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def send_head(self):
        """Igual que el de siempre, pero entendiendo rangos.

        El servidor de Python devuelve el archivo entero e ignora el rango que
        le piden. El audio y el video de Chrome piden por rango, así que sin
        esto se quedan cargando para siempre y nunca suenan. GitHub Pages sí lo
        hace bien, o sea que el problema es solo de la vista local.
        """
        rango = self.headers.get('Range')
        if not rango:
            return super().send_head()
        m = re.match(r'bytes=(\d*)-(\d*)$', rango.strip())
        if not m:
            return super().send_head()

        ruta = self.translate_path(self.path)
        if os.path.isdir(ruta) or not os.path.exists(ruta):
            return super().send_head()

        total = os.path.getsize(ruta)
        desde, hasta = m.group(1), m.group(2)
        if desde == '':                                  # los últimos N bytes
            largo = min(int(hasta or 0), total)
            desde, hasta = total - largo, total - 1
        else:
            desde = int(desde)
            hasta = int(hasta) if hasta else total - 1
        hasta = min(hasta, total - 1)
        if desde > hasta or desde >= total:
            self.send_response(416)
            self.send_header('Content-Range', f'bytes */{total}')
            self.end_headers()
            return None

        f = open(ruta, 'rb')
        f.seek(desde)
        self.send_response(206)
        self.send_header('Content-Type', self.guess_type(ruta))
        self.send_header('Content-Range', f'bytes {desde}-{hasta}/{total}')
        self.send_header('Content-Length', str(hasta - desde + 1))
        self.send_header('Accept-Ranges', 'bytes')
        self.end_headers()
        return Parcial(f, hasta - desde + 1)

    def do_POST(self):
        if self.path == '/blog':
            return self.post_blog()
        if self.path == '/reservado':
            return self.post_reservado()
        if self.path == '/subir':
            return self.post_subir()
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
                shutil.copy(DATOS, os.path.join(COPIAS, f'portafolio-datos_{sello}.js'))

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

    def leer_cuerpo(self):
        n = int(self.headers.get('Content-Length', 0))
        if n > 400 * 1024 * 1024:
            raise ValueError('el archivo es demasiado grande')
        return self.rfile.read(n)

    def copia(self, ruta, nombre):
        """guarda una copia con sello de tiempo antes de pisar nada"""
        os.makedirs(COPIAS, exist_ok=True)
        if os.path.exists(ruta):
            sello = datetime.datetime.now().strftime('%Y-%m-%d_%H-%M-%S')
            shutil.copy(ruta, os.path.join(COPIAS, f'{nombre}_{sello}'))

    def post_blog(self):
        try:
            datos = json.loads(self.leer_cuerpo().decode('utf-8'))
            entradas = datos.get('BLOG')
            if not isinstance(entradas, list):
                raise ValueError('no llegó la lista de entradas')
            for e in entradas:
                for campo in ('id', 'fecha', 'clase'):
                    if not e.get(campo):
                        raise ValueError(f'una entrada quedó sin {campo}')
                if not e.get('clave') and not e.get('piezas'):
                    raise ValueError(f'la entrada {e["id"]} quedó vacía')
            ids = [e['id'] for e in entradas]
            if len(ids) != len(set(ids)):
                raise ValueError('hay dos entradas con el mismo id')

            self.copia(BLOG, 'blog.js')
            io.open(BLOG, 'w', encoding='utf-8').write(
                CABECERA_BLOG + 'const BLOG = ' +
                json.dumps(entradas, ensure_ascii=False, indent=1) + ';\n')
            self.responder(200, {'ok': True, 'entradas': len(entradas)})
            print(f'  blog guardado · {len(entradas)} entradas')
        except Exception as e:
            self.responder(400, {'ok': False, 'error': str(e)})
            print('  ERROR al guardar el blog:', e)

    def post_reservado(self):
        """El sobre llega ya cifrado. Acá no se puede leer, y está bien así."""
        try:
            crudo = self.leer_cuerpo()
            sobre = json.loads(crudo.decode('utf-8'))
            for campo in ('sal', 'iv', 'datos'):
                if not sobre.get(campo):
                    raise ValueError('el sobre llegó incompleto, falta ' + campo)
            self.copia(SOBRE, 'reservado.enc')
            io.open(SOBRE, 'wb').write(crudo)
            self.responder(200, {'ok': True, 'bytes': len(crudo)})
            print(f'  reservado guardado · {len(crudo)} bytes cifrados')
        except Exception as e:
            self.responder(400, {'ok': False, 'error': str(e)})
            print('  ERROR al guardar lo reservado:', e)

    def post_subir(self):
        """Recibe un archivo del navegador, lo deja en blog/ y lo prepara."""
        try:
            nombre = self.headers.get('X-Nombre', '')
            nombre = re.sub(r'[^A-Za-z0-9._-]', '-', unicodedata.normalize('NFKD', nombre)
                            .encode('ascii', 'ignore').decode()).strip('-.').lower()
            if not nombre or '.' not in nombre:
                raise ValueError('nombre de archivo inválido')
            ext = os.path.splitext(nombre)[1]
            if ext not in ('.jpg', '.jpeg', '.png', '.mp4', '.m4a', '.mp3', '.wav'):
                raise ValueError('ese tipo de archivo no va al blog, ' + ext)

            os.makedirs(MEDIOS, exist_ok=True)
            destino = os.path.join(MEDIOS, nombre)
            base, i = os.path.splitext(nombre)[0], 2
            while os.path.exists(destino):
                destino = os.path.join(MEDIOS, f'{base}-{i}{ext}')
                i += 1
            io.open(destino, 'wb').write(self.leer_cuerpo())

            rel = 'blog/' + os.path.basename(destino)
            medida = derivar(destino) if ext in ('.jpg', '.jpeg', '.png') else None
            self.responder(200, {'ok': True, 'src': rel, 'medida': medida})
            print(f'  subido · {rel}')
        except Exception as e:
            self.responder(400, {'ok': False, 'error': str(e)})
            print('  ERROR al subir:', e)


def derivar(ruta):
    """Genera las versiones chicas de una imagen y la anota en derivadas.js.

    Es el mismo circuito que usa el resto del sitio, así que una foto del blog
    se carga diferida, pide el ancho que le corresponde y no se recorta.
    """
    try:
        from PIL import Image
        Image.MAX_IMAGE_PIXELS = None
    except ImportError:
        return None

    rel = 'blog/' + os.path.basename(ruta)
    base = os.path.splitext(ruta)[0]
    with Image.open(ruta) as im:
        im.load()
        medida = [im.width, im.height]
        if im.mode not in ('RGB', 'L'):
            im = im.convert('RGB')
        anchos = []
        for a in (320, 640):
            if im.width <= a * 1.1:
                continue
            c = im.copy()
            c.thumbnail((a, a * 4), Image.LANCZOS)
            c.save(f'{base}-{a}.jpg', 'JPEG', quality=78, optimize=True, progressive=True)
            anchos.append(a)

    # releer el índice, agregar esta y volver a escribirlo entero
    try:
        crudo = io.open(INDICE, encoding='utf-8').read()
        cabeza, cuerpo = crudo.split('const DERIVADAS = ', 1)
        indice = json.loads(cuerpo.rstrip().rstrip(';'))
    except Exception:
        cabeza = ('// Índice de imágenes. Para cada una, m es su medida real en píxeles,\n'
                  '// que sirve para reservarle el hueco exacto y no recortarla, y a son\n'
                  '// los anchos chicos disponibles, si los tiene.\n'
                  '// Lo genera el script de optimización, no hace falta tocarlo a mano.\n')
        indice = {}
    indice[rel] = {'a': anchos, 'm': medida} if anchos else {'m': medida}
    io.open(INDICE, 'w', encoding='utf-8').write(
        cabeza + 'const DERIVADAS = ' +
        json.dumps(indice, ensure_ascii=False, indent=0, sort_keys=True) + ';\n')
    return medida


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
    cual = sys.argv[1] if len(sys.argv) > 1 else 'obra'
    pagina = {'blog': 'herramienta/escribir.html',
              'ver':  ''}.get(cual, 'herramienta/ordenar.html')
    titulo = {'blog': 'Editor del blog',
              'ver':  'El sitio, como se vería publicado'}.get(cual, 'Ordenador de obra')

    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(('127.0.0.1', PUERTO), Manejador) as srv:
        url = f'http://localhost:{PUERTO}/{pagina}'
        print('')
        print(f'  {titulo} en marcha.')
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
