// ─────────────────────────────────────────────────────────────
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
//
//  Las dos entradas de abajo son de ejemplo. Borralas cuando
//  escribas la primera de verdad.
// ─────────────────────────────────────────────────────────────

const BLOG = [
 {
  "id": "ejemplo-abierto",
  "fecha": "2026-09-27",
  "titulo": "Entrada de ejemplo",
  "clase": "idea",
  "bajada": "Sirve para ver cómo se lee una entrada. Borrala cuando escribas la primera.",
  "clave": false,
  "piezas": [
   {
    "tipo": "parrafo",
    "texto": "Esta entrada existe para mostrar cómo se ve el blog por dentro. Un párrafo se escribe de corrido y se separa del siguiente con una línea en blanco."
   },
   {
    "tipo": "titulo",
    "texto": "Un subtítulo"
   },
   {
    "tipo": "parrafo",
    "texto": "Debajo de un subtítulo sigue el cuerpo normal. La columna de lectura se mantiene angosta a propósito, porque una línea muy larga cansa la vista."
   },
   {
    "tipo": "cita",
    "texto": "Una cita se distingue del cuerpo y puede llevar de quién es.",
    "quien": "Alguien"
   },
   {
    "tipo": "lista",
    "items": [
     "Las listas sirven para enumerar",
     "Cada punto va en su línea",
     "No hace falta que sean muchos"
    ]
   },
   {
    "tipo": "parrafo",
    "texto": "Una entrada también puede llevar imágenes, audio y video. La herramienta los copia sola a la carpeta del blog y les genera las versiones chicas."
   }
  ]
 },
 {
  "id": "ejemplo-con-clave",
  "fecha": "2026-09-20",
  "titulo": "",
  "clase": "idea",
  "bajada": "",
  "clave": true
 }
];
