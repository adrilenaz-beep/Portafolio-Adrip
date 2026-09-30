# -*- coding: utf-8 -*-
"""
Le pone o le saca la clave de entrada a todo el sitio.

Ojo con qué es esto. Es una CORTINA, no una cerradura. Tapa la página antes
de que se pinte, y sirve para que nadie entre de casualidad antes del
lanzamiento. Pero el contenido del sitio viaja igual dentro de contenido.js,
arte.js y las imágenes, así que quien sepa mirar el código lo encuentra sin
la clave. Lo que de verdad no puede verse va cifrado, en reservado.enc, que
es otra cosa y se hace con el lanzador 5.

La clave se pide acá, no se guarda, no se imprime y no sale de esta máquina.
Lo único que se escribe en index.html es su huella SHA-256, que no se puede
dar vuelta para recuperar la clave.
"""
import os, re, sys, getpass, hashlib, unicodedata

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAGINA = os.path.join(RAIZ, 'index.html')
PATRON = re.compile(r"window\.PORTADA\s*=\s*'([0-9a-f]*)'\s*;")


def normal(t):
    """la clave viaja igual desde cualquier teclado"""
    return unicodedata.normalize('NFC', t)


def fuerza(c):
    """qué tan difícil es de adivinar, en palabras simples"""
    largo = len(c)
    clases = sum([any(x.islower() for x in c), any(x.isupper() for x in c),
                  any(x.isdigit() for x in c), any(not x.isalnum() for x in c)])
    if largo < 8 or clases < 2:
        return 'débil', 'Para una cortina alcanza, pero se adivina rápido.'
    if largo < 12 or clases < 3:
        return 'aceptable', 'Sirve. Una de doce o más sería mejor.'
    return 'buena', ''


def escribir(huella):
    texto = open(PAGINA, encoding='utf-8').read()
    if not PATRON.search(texto):
        print('\n  No encuentro la línea window.PORTADA dentro de index.html.')
        print('  Alguien la movió o la borró. Pará acá y avisá.\n')
        sys.exit(1)
    texto = PATRON.sub("window.PORTADA = '%s';" % huella, texto, count=1)
    open(PAGINA, 'w', encoding='utf-8').write(texto)


def main():
    print('\n  LA CLAVE DEL SITIO')
    print('  ' + '-' * 46)
    print()
    print('  Esto le pone una cortina a todo el sitio, antes del escritorio.')
    print('  Quien entre ve una pantalla negra que pide la clave.')
    print()
    print('  Es una cortina, no una cerradura. El contenido de la página')
    print('  viaja igual en los archivos, así que alguien que sepa mirar el')
    print('  código lo encuentra sin la clave. Sirve para que nadie entre de')
    print('  casualidad antes del lanzamiento, nada más.')
    print()

    actual = PATRON.search(open(PAGINA, encoding='utf-8').read())
    puesta = bool(actual and actual.group(1))
    print('  Ahora mismo el sitio está %s.' % ('con clave' if puesta else 'abierto'))
    print()
    print('  1   ponerle clave, o cambiar la que tiene')
    print('  2   sacarle la clave y dejarlo abierto')
    print('  3   salir sin tocar nada')
    print()

    try:
        que = input('  Qué hago   ').strip()
    except (EOFError, KeyboardInterrupt):
        print('\n  Listo, no toqué nada.\n'); return

    if que == '3' or que == '':
        print('\n  Listo, no toqué nada.\n'); return

    if que == '2':
        if not puesta:
            print('\n  Ya estaba abierto, no hice nada.\n'); return
        escribir('')
        print()
        print('  Listo, el sitio quedó abierto.')
        print('  Falta subirlo. Abrí GitHub Desktop y apretá Push origin.')
        print()
        return

    if que != '1':
        print('\n  No entendí. Volvé a abrir el lanzador.\n'); return

    print()
    try:
        a = normal(getpass.getpass('  Clave nueva   '))
        b = normal(getpass.getpass('  De nuevo      '))
    except (EOFError, KeyboardInterrupt):
        print('\n  Listo, no toqué nada.\n'); return

    if not a:
        print('\n  No escribiste nada, no toqué nada.\n'); return
    if a != b:
        print('\n  Las dos no son iguales. Volvé a abrir el lanzador.\n'); return

    nivel, nota = fuerza(a)
    print('\n  Clave %s. %s' % (nivel, nota))

    escribir(hashlib.sha256(a.encode('utf-8')).hexdigest())
    print()
    print('  Listo, el sitio quedó con clave.')
    print()
    print('  Esa clave es la de la cortina y no tiene nada que ver con las')
    print('  otras dos, la de lo velado y la de lo reservado. Anotala donde')
    print('  la tengas a mano, acá no queda guardada en ninguna parte.')
    print()
    print('  A quien le pases la clave solo se la va a pedir una vez por')
    print('  navegador. Si la cambiás, se la vuelve a pedir a todos.')
    print()
    print('  Falta subirlo. Abrí GitHub Desktop y apretá Push origin.')
    print()


if __name__ == '__main__':
    main()
