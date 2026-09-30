# Sitio de ADRIP · notas para trabajar acá

Portafolio personal de Adriano Lenaz Zenteno, diseñador gráfico e investigador
en Cochabamba. Se publica en **https://adrilenaz-beep.github.io/Portafolio-Adrip/**
con un workflow de Jekyll que corre en cada push a `main`.

HTML, CSS y JavaScript a secas. **Sin compilación y sin dependencias**, y así se
queda. El JS va en ES5, `var` y `function`, dentro de un IIFE. Nada de módulos.

---

## Cómo trabaja él

**Nunca darle comandos de terminal.** Él trabaja con lanzadores `.command` de
doble clic que viven en la raíz. Si hace falta una operación nueva, se le hace un
lanzador, no se le documenta un comando.

| lanzador | qué hace |
|---|---|
| 1 ORDENAR LA OBRA | secciones y piezas del portafolio |
| 2 VER LA WEB | abre el sitio publicado |
| 3 VER LA WEB EN MI MAC | vista local, con rangos y tipos MIME correctos |
| 4 PROTEGER LOS PDF | cifra los PDF de la PBFCC con AES-256 |
| 5 GUARDAR LO RESERVADO | cifra el material que no se publica, guarda solo |
| 6 ESCRIBIR EN EL BLOG | escribe, ordena y publica entradas |
| 7 LA CLAVE DEL SITIO | la cortina de entrada y las claves de cada sección trabada |

**Publica con GitHub Desktop**, apretando Push origin. Desde acá se puede
commitear pero conviene avisarle cuántos commits quedan sin subir.

**Cómo escribirle.** Español rioplatense, voseo. En la prosa que se redacta para
él, **sin dos puntos ni guiones** como signo de puntuación. Sin emojis. El texto
de interfaz va en minúscula y en tono hablado, «hay cambios sin guardar»,
«guardado, 12 obras».

---

## La arquitectura

`index.html` es **el escritorio** y contiene todo el sitio. `portafolio.html` y
`escritorio.html` son redirecciones que quedaron de versiones anteriores.
`obra.html` es la página de títulos flotantes, hoy sin enlazar desde el
escritorio, guardada para reusar la idea al customizar cada sección artística.

Los títulos del escritorio **se arrastran como ventanas**. Al abrir una rama los
demás se corren para hacerle lugar.

### Las carpetas de una hoja

Una hoja puede tener **carpetas adentro**. Un item con `carpeta:'x'` en vez de
`d:'...'` **se despliega en su propio lugar**, abajo del título y sangrado,
igual que los títulos del escritorio con sus ramas. Sus items salen de
`CARPETAS`. Hoy hay dos, `fotos` y `pasamontanas`.

**Se abre una carpeta a la vez.** No es capricho, con las dos abiertas la lista
se pasa del alto de la pantalla.

**Los items de una carpeta cerrada igual se dibujan**, solo están en
`display:none`. Es a propósito. Si se dibujaran recién al abrirla, `destapar()`
y `marcarTrabas()` no encontrarían los botones, y el pasamontañas escondido vive
justamente adentro de una carpeta.

Los clics de toda la mesa los toma **un solo oyente** en `#escritorio`, así da
lo mismo cuándo se dibujó el botón. Una carpeta se traba con el prefijo
`carpeta:` en `TRABAS`.

### Los archivos de datos

Se cargan como scripts globales, sin `defer`, y el IIFE tolera que falte
cualquiera (`hayMapa`, `hayPerfil`, `hayObras`, `hayBlog`).

| archivo | qué guarda | lo edita |
|---|---|---|
| `portafolio-datos.js` | `GRUPOS`, `SECCIONES`, `OBRAS` | lanzador 1 |
| `contenido.js` | `PERFIL` y `MAPA` | a mano |
| `arte.js` | `ARTE`, los proyectos artísticos | a mano |
| `blog.js` | `BLOG` | lanzador 6 |
| `proyectos.js` | `PROYECTOS`, solo lo usa `obra.html` | a mano |
| `derivadas.js` | medida real y versiones chicas de cada imagen | solo |
| `reservado.enc` | lo cifrado, no está en el repo hasta que él lo genere | lanzadores 5 y 6 |

Los que escribe una herramienta van con `json.dumps(..., ensure_ascii=False, indent=1)`.
**El orden del array es el orden de la página.**

### Cómo se llega a cada cosa

`MAPA` en `contenido.js` es el único índice de destinos. `leer(destino)` resuelve
tres formas, el prefijo `arte:<id>`, el prefijo `blog:<id>`, y todo lo demás por
`MAPA`. Los tipos de `MAPA` son `perfil`, `secciones`, `obras`, `academico`,
`blog` y `texto`.

Cualquier elemento con `data-ir="<destino>"` dentro del lector salta a ese
destino sin cerrarlo. Así funcionan los puentes entre secciones que comparten una
obra, por ejemplo La Ramona con Periodismo gráfico.

---

## Lo que va con clave

Hay **dos cosas distintas** y confundirlas sería grave.

```
[[texto]]    solo se tapa a la vista. El texto sigue viajando dentro del
             archivo, así que quien mire el código lo encuentra. Es un gesto.

{{clave}}    el dato NO está en la página. Vive cifrado en reservado.enc y
             aparece recién al descifrarlo. Esto sí lo esconde.
```

Lo mismo con las entradas del blog. Una entrada con `clave: true` **no lleva su
cuerpo en `blog.js`**, solo su fecha y su clase.

**`reservado.enc` lo escriben dos herramientas y el archivo se reemplaza entero.**
Adentro conviven tres cosas, `datos` y `bloques`, que son de la 5, y `entradas`,
que son las del blog con clave y las escribe la 6. Hasta el 2026-09-30 cada una
pisaba lo de la otra sin avisar. Ahora las dos abren primero lo que ya hay con la
misma clave y se llevan lo ajeno tal cual. La 5 además **traba el botón de
guardar** hasta que abras el archivo existente. Si alguna vez se toca una de las
dos, hay que mantener eso o se pierde material cifrado, que no tiene vuelta.

Las dos pasan por el POST `/reservado` de `servidor.py` y el archivo queda solo
en la raíz, no se descarga nada. `reservar.html` conserva una salida de
emergencia, si la abrís a mano en vez de con el lanzador no hay servidor del otro
lado y entonces sí descarga.

`CERROJOS` en `index.html` guarda una huella SHA-256 por cerrojo, así una clave
puede abrir una cosa y otra clave otra distinta. El cerrojo `secreto` destapa el
pasamontañas y es **un juego, no protección**.

**Regla firme.** En un sitio estático la única protección real es cifrar. Nunca
ofrecerle una contraseña en JavaScript como si fuera seguridad. Y **nunca pedirle
ni aceptar una clave suya**, las herramientas se la piden con `getpass` o en su
navegador y nunca sale de su máquina.

### La cortina de la portada

Desde el 2026-09-30 el sitio entero puede quedar detrás de una pantalla negra
que pide la clave, antes del escritorio. Es **una cortina, no una cerradura**,
y así hay que nombrarla siempre. El contenido viaja igual dentro de
`contenido.js`, `arte.js` y las imágenes, así que quien mire el código lo
encuentra sin la clave. Sirve para que nadie entre de casualidad antes del
lanzamiento.

`window.PORTADA` vive en un guión de cabecera, arriba de todo en `index.html`,
y guarda la **huella SHA-256** de la clave. Vacío quiere decir sitio abierto.
Se decide antes de que la página se pinte, por eso el guión va en el `<head>`
y no dentro del IIFE, y lo único que hace es ponerle `class="cerrado"` al
`<html>`. El CSS esconde todo lo que no sea `#portada`.

**No editar esa línea a mano.** La escribe el lanzador 7, que pide la clave con
`getpass` y nunca la deja salir de su máquina. Quien pasa queda anotado en
`localStorage` con la propia huella, así que cambiar la clave vuelve a pedirla
a todos.

Si alguna vez quiere protección de verdad, no hay forma en GitHub Pages con
repositorio público. Eso es mudar el sitio a algo que tenga autenticación
propia, tipo Cloudflare Access.

### Las trabas, lo que todavía no se abre

Arriba del IIFE hay dos mapas chicos.

```
TRABAS   destino → con qué cerrojo se abre
NOTAS    cerrojo → qué se lee mientras esté cerrado
```

**Lo trabado no abre nada.** Ni el lector, ni la carpeta. Lo pidió así el
2026-09-30, antes había una pantalla genérica que decía hace falta la clave y no
la quiso. El clic muere en dos lugares, en el oyente de la mesa si el botón
tiene la clase `trabado`, y al principio de `leer()` para los puentes de adentro
del lector.

El aviso es el sello **EN OBRAS** que `marcarTrabas()` le pone a los `hoja-item`,
y se destraba desde **CONTRASEÑAS**, arriba a la derecha. Al acertar la clave,
`probar()` llama a `marcarTrabas()` y la sección queda clickeable.

**Trabar una sección nueva son tres líneas.** Una en `TRABAS`, una en `NOTAS`
si querés un texto propio, y una en `CERROJOS` con la huella, que la escribe el
lanzador 7. Destrabarla es borrar su línea de `TRABAS`. Un cerrojo vacío en
`CERROJOS` quiere decir que **ninguna clave lo abre**, ni la suya.

Al 2026-09-30 hay seis cosas trabadas y **cada una con su propia clave**, que fue
lo que él eligió. `anarky`, `evp`, `fanzine01`, `fanzinemascara`, `fotos` y
`blog`. Las entradas sueltas `blog:<id>` siguen el cerrojo de su índice.

`tituloDe(destino)` resuelve el nombre para la pantalla de la clave, y sabe de
carpetas, de proyectos de `arte.js` y de destinos del `MAPA`.

Igual que lo velado, **esto tapa a la vista**. Los datos de la sección viajan en
los archivos del sitio. Es un freno, no una caja fuerte.

---

## La anchura de la letra

Todo el texto del sitio va **aplastado al 75%**, que es lo que en Illustrator
es el campo Anchura del panel Carácter. IBM Plex Mono no trae eje de anchura y
no existe una versión condensada, así que no hay `font-stretch` que sirva, hay
que escalarla.

Se hace con la propiedad **`scale`, no con `transform`**. Son propiedades
distintas y se componen, así que los arrastres del escritorio, los espejos y
las animaciones que ya estaban siguen funcionando sin tocarlas. Si alguna vez
se cambia a `transform`, todo eso se pisa.

La regla de oro. **Cada caja de texto se dibuja un tercio más ancha**,
`width:133.3333%`, para que al aplastarse ocupe justo el ancho que ocupaba
antes. Por eso las medidas de columna están multiplicadas por 1.3333, `70ch`
quedó en `93ch` y `1300px` en `1733px`. Y `transform-origin` va `left` para lo
alineado a la izquierda y `right` para la ficha, el acceso y el pie derecho.

**Las imágenes no se aplastan.** El lector entero se aplasta de una sola vez
en `#lec-cuerpo`, y después las cajas que llevan imagen, video o audio se
desaplastan con `scale:1.333333` y `width:75%`. La cuenta da 1 exacto, así que
adentro todo vuelve a medir lo que medía. Sus pies de foto vuelven a
aplastarse, porque son texto. Si aparece una caja con imagen nueva, hay que
sumarla a esa lista o la foto sale deformada.

Todo sale de `--anchura` en `:root`. Cambiarla cambia el sitio entero.

## Las imágenes

Todas pasan por `attrImg(src)`, que da carga diferida propia, `srcset` y la
proporción real desde `derivadas.js`. Reglas que costaron encontrarse.

- **Nunca `object-fit: cover` con una proporción fija.** Recorta carteles
  verticales y pliegos apaisados. Cada imagen lleva su `aspect-ratio` real.
- **Las rejillas llevan tope**, `minmax(230px, 340px)` y parecidos. Sin tope, una
  obra de una sola imagen se estira a toda la caja y se ve mal.
- **`loading="lazy"` no dispara** si la imagen se inserta mientras su contenedor
  está oculto. Por eso el lector arma su propio `IntersectionObserver` con
  `armarVigia()`, y las imágenes se emiten con `data-src`, no con `src`.
- **Nunca subir archivos de trabajo**, ni `.psd` ni `.ai` ni `.af`. Se exporta a
  JPG con lado mayor de 1600 px. El arte vectorial negro sobre transparencia hay
  que componerlo sobre blanco o desaparece.

---

## El audio y el video

Se sirven por tramos, así que **hace falta un servidor que entienda peticiones
por rango**. GitHub Pages lo hace. El servidor de Python no, por eso
`herramienta/servidor.py` lo implementa y el lanzador 3 lo usa.

Python también mapea `.m4a` a `audio/mp4a-latm`, que el navegador no reconoce.
`servidor.py` lo corrige a `audio/mp4`.

El video va con `preload="none"` y portada. Se comprime con
`avconvert --preset Preset1280x720 --multiPass`.

---

## El peso

El sitio publica unos **371 MB** y el límite blando de GitHub Pages es 1 GB. El
repositorio entero pesa 767 MB contando el historial. El audio y el video del
blog son lo que más rápido lo va a consumir.

---

## Cosas que hay que preguntarle, no decidir

- Qué se tapa de su biografía. El mecanismo está, los fragmentos los marca él.
- Los nombres y contextos de sus piezas. Ya hubo varios mal, «Wild Edge» no era
  Wild Edge y el cartel de las manos es Alasitas.
- La entrada de la PBFCC en su CV **tiene errores que corrige él**, no rehacerla.

## La fuente de verdad de su currículum

`~/Desktop/Adrip the only/CV/CV actualizado/cv v2.html`. El PDF publicado en
`documentos/` sale de ahí.

## Sus colores de marca

Celeste gota `#28B8EA`, rosa pasamontañas `#E8428E`, naranja zapatos de gota
`#E49F37`. Muestreados de sus propios archivos. Usar estos, no inventar.
