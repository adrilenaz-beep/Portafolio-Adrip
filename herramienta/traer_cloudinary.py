#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Trae la lista de imágenes de Cloudinary.

La clave te la pide a vos, la usa para una sola consulta de lectura y
no la guarda en ningún lado. No se escribe en disco ni se muestra.
"""
import atexit, base64, getpass, json, os, ssl, subprocess, sys, tempfile
import urllib.request, urllib.error

NUBE = 'dmvmqykud'
SALIDA = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'cloudinary.json')


def contexto_seguro():
    """Python en macOS no usa los certificados del sistema. Se prueban en orden,
    los suyos, los de certifi si está, y por último los del llavero de macOS.
    En ningún caso se desactiva la verificación."""
    try:
        ctx = ssl.create_default_context()
        urllib.request.urlopen('https://api.cloudinary.com/', timeout=12, context=ctx)
        return ctx
    except urllib.error.HTTPError:
        return ctx                      # respondió, el certificado sirve
    except Exception:
        pass
    try:
        import certifi
        return ssl.create_default_context(cafile=certifi.where())
    except Exception:
        pass
    pem = subprocess.run(
        ['/usr/bin/security', 'find-certificate', '-a', '-p',
         '/System/Library/Keychains/SystemRootCertificates.keychain'],
        capture_output=True, text=True).stdout
    if 'BEGIN CERTIFICATE' not in pem:
        raise RuntimeError('no encontré certificados en el sistema')
    f = tempfile.NamedTemporaryFile('w', suffix='.pem', delete=False)
    f.write(pem); f.close()
    atexit.register(lambda: os.path.exists(f.name) and os.unlink(f.name))
    print('  (usando los certificados de macOS)')
    return ssl.create_default_context(cafile=f.name)


CTX = None


def pedir(texto, oculto=False, porDefecto=None):
    try:
        v = (getpass.getpass(texto) if oculto else input(texto)).strip()
    except (EOFError, KeyboardInterrupt):
        print('\n  Cancelado.')
        sys.exit(1)
    if not v:
        if porDefecto is not None:
            return porDefecto
        print('  Eso no puede quedar vacío. Probá de nuevo.')
        return pedir(texto, oculto, porDefecto)
    return v


def consultar(clave, secreto, etiqueta, siguiente=None):
    url = (f'https://api.cloudinary.com/v1_1/{NUBE}/resources/by_tag/{etiqueta}'
           f'?max_results=500')
    if siguiente:
        url += '&next_cursor=' + siguiente
    auth = base64.b64encode(f'{clave}:{secreto}'.encode()).decode()
    pedido = urllib.request.Request(url, headers={'Authorization': 'Basic ' + auth})
    with urllib.request.urlopen(pedido, timeout=60, context=CTX) as r:
        return json.loads(r.read().decode())


def main():
    print()
    print('  Traer la lista de imágenes de Cloudinary')
    print('  ────────────────────────────────────────')
    print()
    print('  Necesito la clave de tu cuenta para leer la lista.')
    print('  Está en Cloudinary, en Settings y después Access Keys.')
    print()
    print('  La clave NO se guarda, NO se escribe en disco y NO se muestra.')
    print('  Se usa para una sola consulta de lectura y se descarta.')
    print()

    etiqueta = pedir('  Etiqueta que les pusiste [obra]: ', porDefecto='obra')
    clave = pedir('  API Key: ')
    secreto = pedir('  API Secret (no se va a ver mientras escribís): ', oculto=True)

    print()
    print('  Consultando...')
    global CTX
    try:
        CTX = contexto_seguro()
    except Exception as e:
        print(f'\n  No pude preparar la conexión segura. {e}')
        print('  Probá abriendo /Applications/Python 3.13/Install Certificates.command')
        sys.exit(1)
    recursos, cursor = [], None
    try:
        while True:
            d = consultar(clave, secreto, etiqueta, cursor)
            recursos += d.get('resources', [])
            cursor = d.get('next_cursor')
            if not cursor:
                break
    except urllib.error.HTTPError as e:
        print()
        if e.code == 401:
            print('  La clave o el secreto no son correctos. Volvé a intentar.')
        elif e.code == 404:
            print(f'  No hay nada con la etiqueta "{etiqueta}". Fijate cómo la escribiste.')
        else:
            print(f'  Cloudinary respondió con un error {e.code}.')
        sys.exit(1)
    except Exception as e:
        print(f'\n  No se pudo conectar. {e}')
        sys.exit(1)

    # solo lo necesario para rutear, nada de la cuenta
    limpio = [{'public_id': r.get('public_id'), 'format': r.get('format'),
               'version': r.get('version'), 'width': r.get('width'),
               'height': r.get('height'), 'bytes': r.get('bytes'),
               'folder': r.get('asset_folder') or r.get('folder', ''),
               'url': r.get('secure_url')} for r in recursos]
    with open(SALIDA, 'w', encoding='utf-8') as f:
        json.dump(limpio, f, ensure_ascii=False, indent=1)

    del clave, secreto

    print()
    print(f'  Listo. {len(limpio)} imágenes guardadas en')
    print(f'  {SALIDA}')
    print()
    print('  Ese archivo solo tiene nombres y medidas, ninguna clave.')
    print('  Avisame y yo hago el ruteo.')
    print()


if __name__ == '__main__':
    main()
