# -*- coding: utf-8 -*-
"""
Le pone clave a los PDF de la PBFCC, con cifrado AES de 256 bits.

El archivo que queda en el servidor es ilegible sin la clave. No es una
pantalla que tape el contenido, es el contenido cifrado, así que da lo mismo
que alguien escriba la dirección del PDF a mano.

El original sin clave se queda en esta máquina y está en .gitignore, así que
no puede subirse por error. Lo que se publica es la copia -protegido.pdf.

La clave se pide acá y no se guarda, no se imprime y no sale de esta máquina.
"""
import os, sys, glob, getpass, unicodedata

try:
    import pymupdf
except ImportError:
    try:
        import fitz as pymupdf
    except ImportError:
        print('\n  Falta PyMuPDF. Instalalo con\n     pip3 install pymupdf\n')
        sys.exit(1)

SUFIJO = '-protegido.pdf'
RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CARPETA = os.path.join(RAIZ, 'obra', 'pbfcc')


def normal(t):
    """la clave viaja igual desde cualquier teclado"""
    return unicodedata.normalize('NFC', t)


def fuerza(c):
    """qué tan difícil es de adivinar, en palabras simples"""
    largo = len(c)
    clases = sum([any(x.islower() for x in c), any(x.isupper() for x in c),
                  any(x.isdigit() for x in c), any(not x.isalnum() for x in c)])
    if largo < 8 or clases < 2:
        return 'débil', 'Con el archivo en la mano, una clave así se prueba entera en poco tiempo.'
    if largo < 12 or clases < 3:
        return 'aceptable', 'Sirve, pero una de doce o más caracteres sería bastante mejor.'
    return 'buena', ''


def main():
    print('\n  PROTEGER LOS PDF DE LA PBFCC')
    print('  ' + '-' * 46)

    if not os.path.isdir(CARPETA):
        print('\n  No encuentro la carpeta\n     %s\n' % CARPETA); sys.exit(1)

    todos = [r for r in sorted(glob.glob(os.path.join(CARPETA, '*.pdf')))
             if not r.endswith(SUFIJO)]
    if not todos:
        print('\n  No hay ningún PDF original en obra/pbfcc\n'); sys.exit(1)

    for r in todos:
        print('  a proteger   %s' % os.path.basename(r))
    abiertos = todos

    print('\n  Elegí una clave para abrirlos. No se guarda en ningún lado,')
    print('  así que anotala donde la tengas segura antes de seguir.')
    print('  Si la perdés hay que volver a generar los PDF desde el Escritorio.\n')

    try:
        clave = normal(getpass.getpass('  Clave: '))
        if not clave.strip():
            print('\n  Clave vacía. No hice nada.\n'); return
        otra = normal(getpass.getpass('  Repetila: '))
    except (KeyboardInterrupt, EOFError):
        print('\n\n  Cancelado. No toqué ningún archivo.\n'); return

    if clave != otra:
        print('\n  Las dos claves no coinciden. No toqué ningún archivo.\n'); return

    nivel, aviso = fuerza(clave)
    print('\n  Fuerza de la clave, %s.' % nivel)
    if aviso:
        print('  %s' % aviso)
        try:
            if input('  ¿Sigo igual? (s/n) ').strip().lower() not in ('s', 'si', 'sí'):
                print('\n  Cancelado. No toqué ningún archivo.\n'); return
        except (KeyboardInterrupt, EOFError):
            print('\n\n  Cancelado.\n'); return

    # sin permiso de copiar ni de extraer, aunque lo que protege de verdad
    # es que sin la clave el archivo no se abre
    permisos = (pymupdf.PDF_PERM_PRINT | pymupdf.PDF_PERM_ACCESSIBILITY)

    print()
    hechos = 0
    for r in abiertos:
        nom = os.path.basename(r)
        destino = r[:-4] + SUFIJO
        tmp = destino + '.tmp'
        try:
            d = pymupdf.open(r)
            d.save(tmp, encryption=pymupdf.PDF_ENCRYPT_AES_256,
                   owner_pw=clave, user_pw=clave, permissions=permisos,
                   garbage=4, deflate=True)
            d.close()
            # comprobar que quedó cerrado antes de reemplazar el original
            v = pymupdf.open(tmp)
            if not v.needs_pass:
                v.close(); os.remove(tmp)
                print('  FALLÓ, quedó sin clave   %s' % nom); continue
            ok = v.authenticate(clave)
            paginas = v.page_count
            v.close()
            if not ok or paginas < 1:
                os.remove(tmp)
                print('  FALLÓ, no abre con la clave   %s' % nom); continue
            os.replace(tmp, destino)
            print('  protegido   %-26s %3d páginas  ->  %s'
                  % (nom, paginas, os.path.basename(destino)))
            hechos += 1
        except Exception as e:
            if os.path.exists(tmp):
                os.remove(tmp)
            print('  FALLÓ   %s   %s' % (nom, str(e)[:50]))

    del clave, otra

    print('\n  Listos %d de %d.' % (hechos, len(abiertos)))
    if hechos:
        print('  Ahora abrí GitHub Desktop y dale Push origin.')
    print()


if __name__ == '__main__':
    main()
