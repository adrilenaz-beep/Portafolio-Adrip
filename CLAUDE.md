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
| 5 GUARDAR LO RESERVADO | cifra el material que no se publica |
| 6 ESCRIBIR EN EL BLOG | escribe, ordena y publica entradas |

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

`CERROJOS` en `index.html` guarda una huella SHA-256 por cerrojo, así una clave
puede abrir una cosa y otra clave otra distinta. El cerrojo `secreto` destapa el
pasamontañas y es **un juego, no protección**.

**Regla firme.** En un sitio estático la única protección real es cifrar. Nunca
ofrecerle una contraseña en JavaScript como si fuera seguridad. Y **nunca pedirle
ni aceptar una clave suya**, las herramientas se la piden con `getpass` o en su
navegador y nunca sale de su máquina.

---

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
