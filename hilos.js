// Hilos. Lo que comparten cosas que el sitio presenta separadas, una obra del
// portafolio, una entrada de la trayectoria, una ponencia, una distinción.
// Reemplazan a las etiquetas, que se veían pero no llevaban a ningún lado.
//
// Un hilo no es un lugar. No tiene página ni rama en el escritorio. Al pie de
// cada cosa aparece «Se cruza con» y, por cada hilo que pasa por ella, las
// otras cosas del hilo que viven en otro lugar del sitio, cada una con su
// enlace derecho a donde está. Lo de la misma página no se repite, ya está a
// la vista, y una cosa que comparte dos hilos se nombra una sola vez.
//
// Cada hilo tiene un id, el nombre de lo que comparten y la lista de lo que
// junta. Cada cosa se nombra con su tipo y su id.
//
//   seccion:<id>   una sección entera del portafolio, en portafolio-datos.js
//   obra:<id>      una obra del portafolio, en portafolio-datos.js
//   arte:<id>      un proyecto de obra propia, en arte.js
//   exp:<id>       una entrada de la trayectoria, en contenido.js
//   form:<id>      una formación, en contenido.js
//   aca:<id>       un artículo, ponencia o tesis, en contenido.js
//   extra:<id>     una entrada de voluntariado o distinciones, en contenido.js
//   blog:<id>      una entrada del blog
//
// Lo que está trabado o escondido no aparece en ningún cruce hasta que se abra.
// El orden de la lista es el orden en que se leen.

const HILOS = [
 {
  "id": "opinion",
  "nombre": "Opinión",
  "con": [
   "exp:opinion",
   "seccion:periodismo",
   "obra:cuarteles-de-la-muerte",
   "arte:la-ramona",
   "obra:calendario-empleados-opini-n-2026",
   "obra:poster-a1-adrip",
   "extra:beca-connectas"
  ]
 },
 {
  "id": "sociedad-civil",
  "nombre": "Sociedad civil",
  "con": [
   "exp:pbfcc",
   "obra:pbfcc-compromisos",
   "obra:pbfcc-biocombustibles",
   "obra:pbfcc-boletin-07",
   "obra:pbfcc-boletin-08",
   "obra:pbfcc-analisis-medios",
   "obra:coordinadora-de-la-mujer",
   "extra:triple-impacto"
  ]
 },
 {
  "id": "diagnostico",
  "nombre": "Diagnóstico y medios",
  "con": [
   "obra:ice-ingenieros",
   "exp:ice",
   "obra:pbfcc-analisis-medios",
   "exp:pbfcc"
  ]
 },
 {
  "id": "marca",
  "nombre": "Marca",
  "con": [
   "seccion:branding",
   "exp:ice",
   "exp:adrip"
  ]
 },
 {
  "id": "datos",
  "nombre": "Datos",
  "con": [
   "obra:cuarteles-de-la-muerte",
   "obra:pbfcc-biocombustibles",
   "exp:pbfcc"
  ]
 },
 {
  "id": "chixi",
  "nombre": "Lo ch'ixi",
  "con": [
   "aca:tesis",
   "aca:articulo-chixi",
   "aca:ponencia-simbolos",
   "aca:ponencia-hiphop",
   "extra:premio-ensayo",
   "extra:ponente-2025",
   "extra:ponente-2026",
   "extra:titulacion",
   "form:licenciatura"
  ]
 },
 {
  "id": "calle",
  "nombre": "La calle",
  "con": [
   "arte:stickers",
   "arte:rosa-embelleciendo",
   "obra:martadero-y-ayacucho",
   "extra:masterclass-stickers"
  ]
 }
];
