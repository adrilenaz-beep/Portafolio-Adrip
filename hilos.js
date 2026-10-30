// Hilos. Cruzan el sitio por tema y juntan lo que vive en lugares distintos,
// el portafolio, la obra, la trayectoria y lo académico. Reemplazan a las
// etiquetas, que se veían pero no llevaban a ningún lado.
//
// Cada hilo tiene un id, el nombre que se lee, una frase corta y la lista de
// lo que junta. Cada cosa se nombra con su tipo y su id.
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
// Lo que está trabado o escondido no aparece en ningún hilo hasta que se
// abra, y un hilo con menos de dos cosas visibles no se muestra.
// El orden de la lista es el orden en que se leen.

const HILOS = [
 {
  "id": "opinion",
  "nombre": "Opinión",
  "texto": "El periódico de Cochabamba, de 2023 a 2025. Lo diario, el reportaje de investigación, el suplemento y los encargos de la casa.",
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
  "texto": "Trabajo para organizaciones que hacen incidencia, en clima y en género.",
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
  "texto": "Leer cómo se ve y cómo comunica una institución antes de proponerle nada. Auditorías de redes, análisis de competencia y de marca.",
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
  "texto": "Identidades por encargo y la marca propia.",
  "con": [
   "seccion:branding",
   "exp:ice",
   "exp:adrip"
  ]
 },
 {
  "id": "datos",
  "nombre": "Datos",
  "texto": "Cifras puestas en imagen, para prensa y para investigación.",
  "con": [
   "obra:cuarteles-de-la-muerte",
   "obra:pbfcc-biocombustibles",
   "exp:pbfcc"
  ]
 },
 {
  "id": "chixi",
  "nombre": "Ch'ixi y decolonialidad",
  "texto": "La línea de investigación que sale de la tesis de grado y sigue en el artículo y las ponencias.",
  "con": [
   "aca:tesis",
   "aca:articulo-chixi",
   "aca:ponencia-simbolos",
   "aca:ponencia-hiphop",
   "extra:ponente-2025",
   "extra:ponente-2026",
   "extra:titulacion",
   "form:licenciatura"
  ]
 },
 {
  "id": "calle",
  "nombre": "La calle",
  "texto": "Lo que se pega, se pinta y se reparte en Cochabamba.",
  "con": [
   "arte:stickers",
   "arte:rosa-embelleciendo",
   "obra:martadero-y-ayacucho",
   "extra:masterclass-stickers"
  ]
 }
];
