# ADRIP — Adriano Lenaz Zenteno

Sitio personal y portafolio. HTML, CSS y JavaScript a secas, sin compilación
ni dependencias, publicado en GitHub Pages.

## Los lanzadores

Doble clic, no hace falta terminal.

| | qué hace |
|---|---|
| **1 ORDENAR LA OBRA** | acomoda las secciones y las piezas del portafolio |
| **2 VER LA WEB** | abre el sitio ya publicado |
| **3 VER LA WEB EN MI MAC** | lo abre desde esta computadora, antes de subirlo |
| **4 PROTEGER LOS PDF** | le pone clave a los documentos de la PBFCC |
| **5 GUARDAR LO RESERVADO** | cifra el material que no se publica |
| **6 ESCRIBIR EN EL BLOG** | escribe, ordena y publica las entradas |
| **7 LA CLAVE DEL SITIO** | pone o saca la clave de entrada a toda la página |

Después de cualquiera de ellos, abrir GitHub Desktop y apretar **Push origin**.

## Las páginas

- `index.html` — el escritorio. Perfil, portafolio y blog, todo adentro
- `obra.html` — los títulos flotantes, hoy sin enlazar desde el escritorio

## Los archivos de datos

El sitio se arma solo desde estos. Ninguno se edita a mano si hay una
herramienta que lo haga.

| archivo | qué guarda | lo edita |
|---|---|---|
| `portafolio-datos.js` | grupos, secciones y obras | lanzador 1 |
| `contenido.js` | perfil, trayectoria y el mapa de destinos | a mano |
| `arte.js` | los proyectos artísticos | a mano |
| `blog.js` | las entradas del blog | lanzador 6 |
| `derivadas.js` | medida real y versiones chicas de cada imagen | solo |
| `reservado.enc` | lo que va con clave, cifrado | lanzadores 5 y 6 |

## Lo que va con clave

Hay dos cosas distintas y conviene no confundirlas.

- `[[texto]]` en `contenido.js` **solo se tapa a la vista**. El texto sigue
  viajando en el archivo, así que es un gesto, no una caja fuerte.
- `{{clave}}` y las entradas con clave del blog **sí se esconden**. Viven
  cifradas en `reservado.enc`, con AES de 256 bits, y sin la clave no hay
  nada que leer.

La clave de entrada al sitio, la del lanzador 7, es una tercera cosa y también
es un gesto. Tapa la página antes de que se pinte, pero el contenido viaja
igual en los archivos. Sirve para que nadie entre de casualidad antes del
lanzamiento.

## Nota sobre el audio y el video

Se reproducen por tramos, así que hace falta un servidor que entienda
peticiones por rango. GitHub Pages lo hace; el servidor de Python no, por eso
`herramienta/servidor.py` lo implementa. Si se abre el sitio con cualquier otro
servidor simple, los medios se van a quedar cargando sin sonar.
