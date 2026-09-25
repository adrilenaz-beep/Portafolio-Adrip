// ─────────────────────────────────────────────────────────────
//  DATOS DEL PORTAFOLIO
//  El sitio se arma solo desde este archivo.
//  Lo edita la herramienta, ORDENAR LA OBRA.command
// ─────────────────────────────────────────────────────────────

const GRUPOS = [
 {
  "id": "obra",
  "nombre": "Obra propia",
  "sub": "trabajo de autor"
 },
 {
  "id": "encargo",
  "nombre": "Por encargo",
  "sub": "prensa, marca y cartel"
 },
 {
  "id": "documentos",
  "nombre": "Documentos",
  "sub": "para leer completos"
 }
];

const SECCIONES = [
 {
  "id": "pasamontanas",
  "titulo": "Pasamontañas · Serie",
  "cuenta": "5 capítulos",
  "oculta": true,
  "abierta": false,
  "aMano": false,
  "grupo": "obra"
 },
 {
  "id": "fotografia",
  "titulo": "Fotografía",
  "cuenta": "4 series",
  "oculta": false,
  "abierta": true,
  "aMano": false,
  "grupo": "obra"
 },
 {
  "id": "intervencion",
  "titulo": "Intervención · Calle",
  "cuenta": "3 proyectos",
  "oculta": false,
  "abierta": false,
  "aMano": false,
  "grupo": "obra"
 },
 {
  "id": "ilustracion",
  "titulo": "Ilustración",
  "cuenta": "4 series",
  "oculta": false,
  "abierta": false,
  "aMano": false,
  "grupo": "obra"
 },
 {
  "id": "instalacion",
  "titulo": "Instalación · Arte",
  "cuenta": "2 proyectos",
  "oculta": false,
  "abierta": false,
  "aMano": false,
  "grupo": "obra"
 },
 {
  "id": "connectas",
  "titulo": "Periodismo de datos · CONNECTAS",
  "cuenta": "1 investigación",
  "oculta": false,
  "abierta": false,
  "aMano": false,
  "grupo": "encargo"
 },
 {
  "id": "periodismo",
  "titulo": "Periodismo Gráfico · Opinión",
  "cuenta": "32 registros",
  "oculta": false,
  "abierta": false,
  "aMano": false,
  "grupo": "encargo"
 },
 {
  "id": "posters",
  "titulo": "Cartel",
  "cuenta": "7 proyectos",
  "oculta": false,
  "abierta": false,
  "aMano": false,
  "grupo": "encargo"
 },
 {
  "id": "branding",
  "titulo": "Identidad · Branding",
  "cuenta": "6 proyectos",
  "oculta": false,
  "abierta": false,
  "aMano": false,
  "grupo": "encargo"
 },
 {
  "id": "editorial",
  "titulo": "Editorial · Publicación",
  "cuenta": "6 proyectos",
  "oculta": false,
  "abierta": false,
  "aMano": false,
  "grupo": "encargo"
 },
 {
  "id": "publicaciones",
  "titulo": "Publicaciones · Editorial & Fanzines",
  "cuenta": "",
  "oculta": false,
  "abierta": false,
  "aMano": true,
  "grupo": "documentos"
 }
];

const OBRAS = [
 {
  "id": "el-personaje",
  "seccion": "pasamontanas",
  "fecha": "2022 → 2024",
  "titulo": "El personaje",
  "nota": "El pasamontañas rosa nace como cara de ADRIP. Un rostro que tapa el rostro, una identidad que se afirma escondiéndose. Aparece dibujado, se cruza con la gota de La Gotera y termina siendo una figura que se repite hasta volverse signo.",
  "layout": "3col",
  "tags": [
   "Personaje",
   "Identidad",
   "ADRIP"
  ],
  "imgs": [
   {
    "src": "obra/comic-02-adrip.jpg",
    "alt": "El personaje dibujado"
   },
   {
    "src": "obra/pasa-02-gota-mascara.jpg",
    "alt": "La gota con pasamontañas"
   },
   {
    "src": "obra/pasa-16-masks-rev.jpg",
    "alt": "Hoja de máscaras"
   }
  ]
 },
 {
  "id": "podr-a-ser-tu-podr-a-ser-yo",
  "seccion": "pasamontanas",
  "fecha": "2023",
  "titulo": "Podría ser tu, podría ser yo",
  "nota": "El cartel que da nombre a la serie. Sobre la lana rosa se bordan las cifras que el barrio lee sin explicación, <em>1312</em>, <em>4:20</em>, <em>666</em>, y la palabra aliados repetida en tres idiomas. La frase abre y cierra la imagen, y el que mira queda adentro de la pregunta.",
  "layout": "3col",
  "tags": [
   "Cartel",
   "Serigrafía",
   "Tipografía"
  ],
  "imgs": [
   {
    "src": "obra/mask-print.jpg",
    "alt": "Cartel completo"
   },
   {
    "src": "obra/pasa-04-detalle-cara.jpg",
    "alt": "Detalle del rostro"
   },
   {
    "src": "obra/pasa-05-detalle-ojos.jpg",
    "alt": "Detalle de los ojos"
   },
   {
    "src": "obra/pasa-06-detalle-boca.jpg",
    "alt": "Detalle de la boca"
   }
  ]
 },
 {
  "id": "la-figura",
  "seccion": "pasamontanas",
  "fecha": "2023",
  "titulo": "La figura",
  "nota": "El cuerpo que lleva la máscara, sacado a alto contraste hasta dejarlo en mancha. Sin rostro y sin fondo, la figura deja de ser alguien y pasa a ser cualquiera, que es exactamente lo que el cartel propone.",
  "layout": "3col",
  "tags": [
   "Fotografía",
   "Alto contraste",
   "Serie"
  ],
  "imgs": [
   {
    "src": "obra/pasa-07-figura-01.jpg",
    "alt": "Figura 01"
   },
   {
    "src": "obra/pasa-08-figura-02.jpg",
    "alt": "Figura 02"
   },
   {
    "src": "obra/pasa-09-figura-03.jpg",
    "alt": "Figura 03"
   },
   {
    "src": "obra/pasa-10-en-la-calle.jpg",
    "alt": "La figura en la calle"
   }
  ]
 },
 {
  "id": "la-intervenci-n-en-la-calle",
  "seccion": "pasamontanas",
  "fecha": "2023",
  "titulo": "La intervención en la calle",
  "nota": "La serie sale del taller y se pega en Cochabamba. Pliegos sobre madera, sobre muro, y stickers en las señales de la ciudad. Acá la obra deja de ser una imagen y pasa a ser una aparición, que es donde la pregunta del cartel se contesta sola.",
  "layout": "3col",
  "tags": [
   "Intervención",
   "Calle",
   "Cochabamba",
   "Pegatina"
  ],
  "imgs": [
   {
    "src": "obra/20230624-144806-exported-12030.jpg",
    "alt": "Pliego sobre madera"
   },
   {
    "src": "obra/20230705-211027-2.jpg",
    "alt": "Pegado en muro"
   },
   {
    "src": "obra/20230705-211129-2.jpg",
    "alt": "La figura junto al cartel"
   },
   {
    "src": "obra/pasa-13-senal-catedral.jpg",
    "alt": "Sticker en señal, Catedral Metropolitana"
   },
   {
    "src": "obra/pasa-14-poste.jpg",
    "alt": "Sticker en poste"
   }
  ]
 },
 {
  "id": "me-when",
  "seccion": "pasamontanas",
  "fecha": "2023",
  "titulo": "Me when",
  "nota": "Una pieza aparte dentro de la misma familia. Texto de internet y estampa dura, el ciclo del odio dicho en la lengua del meme.",
  "layout": "single",
  "tags": [
   "Gráfica",
   "Texto",
   "Meme"
  ],
  "imgs": [
   {
    "src": "obra/pasa-15-mewhen.jpg",
    "alt": "Me when"
   }
  ]
 },
 {
  "id": "tiwanaku",
  "seccion": "fotografia",
  "fecha": "2024",
  "titulo": "Tiwanaku",
  "nota": "El altiplano sin nadie adentro, y después con alguien. Tres tomas donde el paisaje pesa más que la figura.",
  "layout": "3col",
  "tags": [
   "Fotografía",
   "Paisaje",
   "Altiplano"
  ],
  "imgs": [
   {
    "src": "obra/foto-tiwa1.jpg",
    "alt": "Tiwanaku 01"
   },
   {
    "src": "obra/foto-tiwa2.jpg",
    "alt": "Tiwanaku 02"
   },
   {
    "src": "obra/foto-tiwa3.jpg",
    "alt": "Tiwanaku 03"
   }
  ]
 },
 {
  "id": "cowboys",
  "seccion": "fotografia",
  "fecha": "2023",
  "titulo": "Cowboys",
  "nota": "Serie tratada en duotono y virados de color, entre la foto de viaje y la estampa. El color deja de describir y pasa a decidir el clima de la imagen.",
  "layout": "3col",
  "tags": [
   "Fotografía",
   "Duotono",
   "Serie"
  ],
  "imgs": [
   {
    "src": "obra/cow03.jpg",
    "alt": "Cowboys 01"
   },
   {
    "src": "obra/cow03-2.jpg",
    "alt": "Cowboys 02"
   },
   {
    "src": "obra/cow04.jpg",
    "alt": "Cowboys 03"
   },
   {
    "src": "obra/cow05.jpg",
    "alt": "Cowboys 04"
   }
  ]
 },
 {
  "id": "c-mara",
  "seccion": "fotografia",
  "fecha": "2022 → 2024",
  "titulo": "Cámara",
  "nota": "Registro suelto de cuatro años. Lo que sostiene la serie no es el tema sino la mirada, encuadres cerrados y luz encontrada.",
  "layout": "3col",
  "tags": [
   "Fotografía",
   "Registro"
  ],
  "imgs": [
   {
    "src": "obra/20220121-img-7148-2.jpg",
    "alt": "Registro 01"
   },
   {
    "src": "obra/20220123-img-7253-2.jpg",
    "alt": "Registro 02"
   },
   {
    "src": "obra/20241107.jpg",
    "alt": "Registro 03"
   },
   {
    "src": "obra/20241108.jpg",
    "alt": "Registro 04"
   }
  ]
 },
 {
  "id": "range-bros",
  "seccion": "fotografia",
  "fecha": "2023",
  "titulo": "Range Bros",
  "nota": "El vehículo como personaje. Dos piezas donde el objeto se retrata con la seriedad que se le da a una persona.",
  "layout": "2col",
  "tags": [
   "Fotografía",
   "Composición"
  ],
  "imgs": [
   {
    "src": "obra/adrip-01-jeep.jpg",
    "alt": "Range Bros 01"
   },
   {
    "src": "obra/jeeps.jpg",
    "alt": "Range Bros 02"
   }
  ]
 },
 {
  "id": "martadero-y-ayacucho",
  "seccion": "intervencion",
  "fecha": "2026",
  "titulo": "Martadero y Ayacucho",
  "nota": "Registro de muro en Cochabamba. Cuatro paredes que forman parte de la investigación sobre hiphop ch’ixi, donde el graffiti se lee como sistema de signos y no como decoración.",
  "layout": "3col",
  "tags": [
   "Graffiti",
   "Muro",
   "Investigación",
   "Cochabamba"
  ],
  "imgs": [
   {
    "src": "obra/martadero-alien-01.jpg",
    "alt": "Martadero, alien"
   },
   {
    "src": "obra/martadero-mujeres-01.jpg",
    "alt": "Martadero, mujeres"
   },
   {
    "src": "obra/martadero-taki-01.jpg",
    "alt": "Martadero, taki"
   },
   {
    "src": "obra/ayacucho01.jpg",
    "alt": "Ayacucho"
   }
  ]
 },
 {
  "id": "embelleciendo-la-ciudad-con-flores",
  "seccion": "intervencion",
  "fecha": "2022",
  "titulo": "Embelleciendo la ciudad con flores",
  "nota": "Patrón floral inspirado en William Morris, llevado a la calle. La rosa como símbolo de resistencia y el ornamento como forma de reclamar el trabajo del artesano en un espacio que no lo reconoce.",
  "layout": "3col",
  "tags": [
   "Intervención",
   "Patrón",
   "William Morris",
   "Calle"
  ],
  "imgs": [
   {
    "src": "obra/rosas-01.jpg",
    "alt": "Intervención 01"
   },
   {
    "src": "obra/rosas-02.jpg",
    "alt": "Intervención 02"
   },
   {
    "src": "obra/rosas-03.jpg",
    "alt": "Intervención 03"
   },
   {
    "src": "obra/2022-03-27-rosas-1-0.jpg",
    "alt": "El patrón"
   },
   {
    "src": "obra/recurso-2rosa.jpg",
    "alt": "La rosa"
   }
  ]
 },
 {
  "id": "stickers",
  "seccion": "intervencion",
  "fecha": "2023 → 2025",
  "titulo": "Stickers",
  "nota": "Producción y circulación. El sticker es el formato más barato de aparecer en la ciudad, y por eso el más honesto. De la plancha impresa al poste, sin permiso de nadie.",
  "layout": "3col",
  "tags": [
   "Sticker",
   "Producción",
   "Calle"
  ],
  "imgs": [
   {
    "src": "obra/stickers-new-copia.jpg",
    "alt": "Plancha de stickers"
   },
   {
    "src": "obra/2023-02-16-stickers.jpg",
    "alt": "Producción"
   },
   {
    "src": "obra/img-1468.jpg",
    "alt": "Paquetes 01"
   },
   {
    "src": "obra/img-1470.jpg",
    "alt": "Paquetes 02"
   },
   {
    "src": "obra/img-1433.jpg",
    "alt": "Pieza suelta"
   }
  ]
 },
 {
  "id": "gotas",
  "seccion": "ilustracion",
  "fecha": "2022 → 2024",
  "titulo": "Gotas",
  "nota": "El personaje de La Gotera en sus variantes. Una forma simple que aguanta el cambio de color, de gesto y de contexto sin dejar de reconocerse.",
  "layout": "3col",
  "tags": [
   "Ilustración",
   "Personaje",
   "La Gotera"
  ],
  "imgs": [
   {
    "src": "obra/adrip-07.jpg",
    "alt": "Gota 01"
   },
   {
    "src": "obra/adrip-08.jpg",
    "alt": "Gota 02"
   },
   {
    "src": "obra/gotita.jpg",
    "alt": "Gotita"
   }
  ]
 },
 {
  "id": "read",
  "seccion": "ilustracion",
  "fecha": "2024",
  "titulo": "Read",
  "nota": "Serie de composiciones sobre lectura y encierro, con tipografía encontrada y trama de semitono.",
  "layout": "3col",
  "tags": [
   "Ilustración",
   "Semitono",
   "Tipografía"
  ],
  "imgs": [
   {
    "src": "obra/read02-01.jpg",
    "alt": "Read 01"
   },
   {
    "src": "obra/read02-03.jpg",
    "alt": "Read 02"
   },
   {
    "src": "obra/read02-04.jpg",
    "alt": "Read 03"
   }
  ]
 },
 {
  "id": "wip",
  "seccion": "ilustracion",
  "fecha": "2025",
  "titulo": "WIP",
  "nota": "Cuaderno abierto. Piezas sin terminar que muestran cómo se arma una imagen antes de que decida qué quiere decir.",
  "layout": "3col",
  "tags": [
   "Proceso",
   "Dibujo",
   "Cuaderno"
  ],
  "imgs": [
   {
    "src": "obra/wip011.jpg",
    "alt": "WIP 01"
   },
   {
    "src": "obra/wip02.jpg",
    "alt": "WIP 02"
   },
   {
    "src": "obra/wip04.jpg",
    "alt": "WIP 03"
   }
  ]
 },
 {
  "id": "centu-y-pico",
  "seccion": "ilustracion",
  "fecha": "2023",
  "titulo": "Centu y Pico",
  "nota": "Grilla de viñetas en blanco y negro. El perro como protagonista y la repetición como recurso narrativo.",
  "layout": "2col",
  "tags": [
   "Ilustración",
   "Viñeta",
   "Blanco y negro"
  ],
  "imgs": [
   {
    "src": "obra/centu-y-pico02.jpg",
    "alt": "Centu y Pico"
   },
   {
    "src": "obra/img-2586.jpg",
    "alt": "Dibujo"
   }
  ]
 },
 {
  "id": "imposible-ft-300",
  "seccion": "instalacion",
  "fecha": "2025",
  "titulo": "\"Imposible\" (ft. 300)",
  "nota": "",
  "layout": "2col",
  "tags": [
   "Instalación",
   "Arte",
   "Colaboración"
  ],
  "imgs": [
   {
    "src": "",
    "alt": "Imposible - vista general"
   },
   {
    "src": "",
    "alt": "Imposible - CANSADO"
   },
   {
    "src": "",
    "alt": "Imposible - detalle 1"
   },
   {
    "src": "",
    "alt": "Imposible - detalle 2"
   },
   {
    "src": "",
    "alt": "Imposible - detalle 3"
   }
  ]
 },
 {
  "id": "room-g",
  "seccion": "instalacion",
  "fecha": "2025",
  "titulo": "ROOM G",
  "nota": "Sala intervenida con luz de color y carteles propios. El espacio entero funciona como soporte, y el visitante entra adentro de la pieza en vez de mirarla de frente.",
  "layout": "3col",
  "tags": [
   "Instalación",
   "Luz",
   "Espacio"
  ],
  "imgs": [
   {
    "src": "obra/base-room-full.jpg",
    "alt": "Sala completa"
   },
   {
    "src": "obra/rojo-still.jpg",
    "alt": "Luz roja"
   },
   {
    "src": "obra/verde-still.jpg",
    "alt": "Luz verde"
   },
   {
    "src": "obra/still.jpg",
    "alt": "Gradiente"
   }
  ]
 },
 {
  "id": "cuarteles-de-la-muerte",
  "seccion": "connectas",
  "fecha": "2024",
  "titulo": "Cuarteles de la muerte",
  "nota": "Reportaje de investigación sobre las muertes de jóvenes durante el servicio militar en Bolivia, desarrollado con el <em>CONNECTAS Fellowship</em> junto al periódico Opinión. Estuve a cargo de la construcción gráfica completa, la ilustración editorial y las infografías que ordenan los casos por departamento, por edad y por año. La pieza de apertura es un render del depósito, con los ataúdes alineados en estantería.",
  "layout": "strip",
  "tags": [
   "Periodismo de datos",
   "Investigación",
   "CONNECTAS",
   "Infografía",
   "Ilustración editorial"
  ],
  "imgs": [
   {
    "src": "obra/connectas-01-deposito.jpg",
    "alt": "Depósito, ilustración de apertura"
   },
   {
    "src": "obra/connectas-02-parasitos.jpg",
    "alt": "Parásitos, 60 víctimas"
   },
   {
    "src": "obra/connectas-03-bang.jpg",
    "alt": "Bang, 60 vidas de jóvenes perdidas"
   },
   {
    "src": "obra/connectas-04-departamento.jpg",
    "alt": "Soldados fallecidos por departamento"
   },
   {
    "src": "obra/connectas-05-edad.jpg",
    "alt": "Soldados fallecidos según la edad"
   },
   {
    "src": "obra/connectas-06-ano.jpg",
    "alt": "Soldados fallecidos según el año"
   }
  ],
  "enlace": {
   "destino": "distinciones",
   "texto": "Ver la beca CONNECTAS en Distinciones"
  }
 },
 {
  "id": "vaticano-y-p",
  "seccion": "periodismo",
  "fecha": "24/07/2024",
  "titulo": "Vaticano y P++++++",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774906357/Vaticano_iqc3t6.jpg",
    "alt": "Vaticano"
   }
  ]
 },
 {
  "id": "crisis-de-combustible-cochabamba-bloqueada",
  "seccion": "periodismo",
  "fecha": "31/07/2024",
  "titulo": "Crisis de combustible, Cochabamba bloqueada",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774906356/Llajta_Bloqueada_tkdgyb.jpg",
    "alt": "Cochabamba bloqueada"
   }
  ]
 },
 {
  "id": "estreno-alien-romulus",
  "seccion": "periodismo",
  "fecha": "15/08/2024",
  "titulo": "Estreno, Alien Romulus",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774916612/Alien02_qg9yib.jpg",
    "alt": "Alien Romulus"
   }
  ]
 },
 {
  "id": "amor-por-internet",
  "seccion": "periodismo",
  "fecha": "19/08/2024",
  "titulo": "Amor por internet",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774964410/internet02_w9rkx7.jpg",
    "alt": "Amor por internet"
   }
  ]
 },
 {
  "id": "se-debate-el-precio-del-pasaje",
  "seccion": "periodismo",
  "fecha": "22/08/2024",
  "titulo": "Se debate el precio del pasaje",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774964433/ChoferesPiden01_afbxwz.jpg",
    "alt": "Precio pasaje"
   }
  ]
 },
 {
  "id": "diesel-de-material-reciclado",
  "seccion": "periodismo",
  "fecha": "30/08/2024",
  "titulo": "¿Diesel de material reciclado?",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774964926/Diesel_reciclado_bwslbv.jpg",
    "alt": "Diesel reciclado"
   }
  ]
 },
 {
  "id": "incendios-en-el-oriente-boliviano",
  "seccion": "periodismo",
  "fecha": "03/09/2024",
  "titulo": "Incendios en el oriente boliviano",
  "nota": "",
  "layout": "strip",
  "tags": [
   "Incendios en la Amazonía",
   "Carrusel"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774964970/Incendios01_xyu7dt.jpg",
    "alt": "Imagen 1"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774964973/Incendios02_vamujz.jpg",
    "alt": "Imagen 2"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774964971/Incendios03_d61nba.jpg",
    "alt": "Imagen 3"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774964971/Incendios04_ezdfry.jpg",
    "alt": "Imagen 4"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774964970/Incendios05_q5ffkl.jpg",
    "alt": "Imagen 5"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774964969/Incendios06-2.0_h9uvm9.jpg",
    "alt": "Imagen 6"
   }
  ]
 },
 {
  "id": "alphaville-en-oruro",
  "seccion": "periodismo",
  "fecha": "05/09/2024",
  "titulo": "¿Alphaville, en Oruro?",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774916521/Alphaville02_gcllkg.jpg",
    "alt": "Alphaville en Oruro"
   }
  ]
 },
 {
  "id": "bolivia-acusada-por-israel",
  "seccion": "periodismo",
  "fecha": "23/10/2024",
  "titulo": "Bolivia acusada por Israel",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774964996/Israelacusa01_qrpkve.jpg",
    "alt": "Bolivia acusada"
   }
  ]
 },
 {
  "id": "bloqueos-evistas-dia-10",
  "seccion": "periodismo",
  "fecha": "23/10/2024",
  "titulo": "Bloqueos evistas, día 10",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774964995/Bloquos10dias_zcnh6k.jpg",
    "alt": "Bloqueos día 10"
   }
  ]
 },
 {
  "id": "exguerrillero-chileno-en-bolivia",
  "seccion": "periodismo",
  "fecha": "07/01/2025",
  "titulo": "Exguerrillero chileno en Bolivia",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775010111/exguerrillero_1_eoyiw4.jpg",
    "alt": "Exguerrillero chileno"
   }
  ]
 },
 {
  "id": "el-pasaje-del-trufi-sube",
  "seccion": "periodismo",
  "fecha": "08/01/2025",
  "titulo": "El pasaje del trufi sube",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774965035/Pasaje-_2_yzdjk0.jpg",
    "alt": "Pasaje trufi"
   }
  ]
 },
 {
  "id": "liberacion-de-auschwitz",
  "seccion": "periodismo",
  "fecha": "27/01/2025",
  "titulo": "Liberación de Auschwitz",
  "nota": "",
  "layout": "strip",
  "tags": [
   "80+ Años",
   "Carrusel"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774916468/Ausch01_tjkzkv.jpg",
    "alt": "Imagen 1"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774916469/Ausch02_f8y27d.jpg",
    "alt": "Imagen 2"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774916479/Ausch03_cg91ph.jpg",
    "alt": "Imagen 3"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774916477/Ausch04_ib8jg4.jpg",
    "alt": "Imagen 4"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774916474/Ausch05_awsxsh.jpg",
    "alt": "Imagen 5"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774916472/Ausch06_ytlebt.jpg",
    "alt": "Imagen 6"
   }
  ]
 },
 {
  "id": "accidente-aereo-en-washington",
  "seccion": "periodismo",
  "fecha": "30/01/2025",
  "titulo": "Accidente aéreo en Washington",
  "nota": "",
  "layout": "strip",
  "tags": [
   "Accidente",
   "Carrusel"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775052079/ChoqueAereo01_l30l4a.jpg",
    "alt": "Imagen 1"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775052079/ChoqueAereo02_mrcpes.jpg",
    "alt": "Imagen 2"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775052079/ChoqueAereo03_rfxbdo.jpg",
    "alt": "Imagen 3"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775052079/ChoqueAereo04_yfo9b2.jpg",
    "alt": "Imagen 4"
   }
  ]
 },
 {
  "id": "g-contra-el-contrabando",
  "seccion": "periodismo",
  "fecha": "04/02/2025",
  "titulo": "G***** contra el contrabando",
  "nota": "",
  "layout": "strip",
  "tags": [
   "Contrabando",
   "Carrusel"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774906437/Contrabando01_b3atf3.jpg",
    "alt": "Imagen 1"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774906439/Contrabando02_qfqejb.jpg",
    "alt": "Imagen 2"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774906436/Contrabando03_01_aipinx.jpg",
    "alt": "Imagen 3"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774906435/Contrabando03_02_i4nmkx.jpg",
    "alt": "Imagen 4"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774906440/Contrabando04_ckuvr6.jpg",
    "alt": "Imagen 5"
   }
  ]
 },
 {
  "id": "punk-no-esta-muerto",
  "seccion": "periodismo",
  "fecha": "10/02/2025",
  "titulo": "Punk, no está muerto",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775053486/Misfits01_z4uts6.jpg",
    "alt": "Punk no está muerto"
   }
  ]
 },
 {
  "id": "se-busca",
  "seccion": "periodismo",
  "fecha": "10/02/2025",
  "titulo": "Se busca:",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775053486/Recompensa03_p2gyrp.jpg",
    "alt": "Se busca"
   }
  ]
 },
 {
  "id": "debate-entre-candidatos",
  "seccion": "periodismo",
  "fecha": "10/02/2025",
  "titulo": "Debate entre candidatos",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775053485/DebatePres01_ggsmmz.jpg",
    "alt": "Debate candidatos"
   }
  ]
 },
 {
  "id": "gobierno-aguarda",
  "seccion": "periodismo",
  "fecha": "11/02/2025",
  "titulo": "Gobierno aguarda",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774906381/HayOrden02_rijfqw.jpg",
    "alt": "Gobierno aguarda"
   }
  ]
 },
 {
  "id": "incendios-en-hollywood",
  "seccion": "periodismo",
  "fecha": "11/02/2025",
  "titulo": "Incendios en Hollywood",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775052549/Hollywood-_2_kfdla3.jpg",
    "alt": "Incendios Hollywood"
   }
  ]
 },
 {
  "id": "rosalia-x-euphoria",
  "seccion": "periodismo",
  "fecha": "18/02/2025",
  "titulo": "Rosalía x Euphoria",
  "nota": "",
  "layout": "single",
  "tags": [
   "Farandula"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775053115/Rosa01_gfw6kg.jpg",
    "alt": "Rosalía x Euphoria"
   }
  ]
 },
 {
  "id": "cine-por-los-gatos",
  "seccion": "periodismo",
  "fecha": "21/02/2025",
  "titulo": "Cine por los gatos",
  "nota": "",
  "layout": "strip",
  "tags": [
   "Gatitos",
   "Carrusel"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774905994/Gatos-Neko_01_x2o4z9.jpg",
    "alt": "Imagen 1 de 3"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775052990/Gatos-Neko_02_pqf4lk.jpg",
    "alt": "Imagen 2 de 3"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775052991/Gatos-Neko_03_tkqi2y.jpg",
    "alt": "Imagen 3 de 3"
   }
  ]
 },
 {
  "id": "caso-golpe",
  "seccion": "periodismo",
  "fecha": "26/03/2025",
  "titulo": "Caso golpe",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775053230/Golpe01_y7yncp.jpg",
    "alt": "Caso golpe"
   }
  ]
 },
 {
  "id": "guerra-de-la-basura-cbba",
  "seccion": "periodismo",
  "fecha": "03/04/2025",
  "titulo": "Guerra de la basura, Cbba",
  "nota": "",
  "layout": "strip",
  "tags": [
   "Basura",
   "Carrusel"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774905968/Guerra-Basura_01_qsdgqo.jpg",
    "alt": "Imagen 1 de 2"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774905967/Guerra-Basura_02_eereii.jpg",
    "alt": "Imagen 2 de 2"
   }
  ]
 },
 {
  "id": "laguna-alalay-fauna",
  "seccion": "periodismo",
  "fecha": "03/04/2025",
  "titulo": "Laguna Alalay, fauna",
  "nota": "",
  "layout": "strip",
  "tags": [
   "Fauna",
   "Carrusel"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775052890/ALALAY-AVES_01_c53gez.jpg",
    "alt": "Imagen 1 de 4"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775052891/Alalay-Aves01_02_p7pbpi.jpg",
    "alt": "Imagen 2 de 4"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775052889/Alalay-Aves01_03_yrrydu.jpg",
    "alt": "Imagen 3 de 4"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775052891/Alalay-Aves01_04_rncnei.jpg",
    "alt": "Imagen 4 de 4"
   }
  ]
 },
 {
  "id": "cbba-dia-del-peaton-cancelado",
  "seccion": "periodismo",
  "fecha": "04/04/2025",
  "titulo": "Cbba, día del peatón cancelado",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774906309/SuspendidoDi%CC%81aPeato%CC%81n03_m6vhou.jpg",
    "alt": "Día del peatón cancelado"
   }
  ]
 },
 {
  "id": "kenia-abejas-protegen-cultivos",
  "seccion": "periodismo",
  "fecha": "08/05/2025",
  "titulo": "Kenia, abejas protegen cultivos",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774906259/AbejasElefantes01_rdbsge.jpg",
    "alt": "Abejas Kenya"
   }
  ]
 },
 {
  "id": "despues-de-15-dias-dia-del-peaton",
  "seccion": "periodismo",
  "fecha": "14/05/2025",
  "titulo": "Después de 15 días, día del peatón",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775056076/Di%CC%81aPeato%CC%81n18deMayo03_tia1z0.jpg",
    "alt": "Día del peatón"
   }
  ]
 },
 {
  "id": "marchas-en-la-paz-reclaman-combustible",
  "seccion": "periodismo",
  "fecha": "04/06/2025",
  "titulo": "Marchas en La Paz, reclaman combustible",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774906226/MasivaMovilizacio%CC%81n01_lhp2fg.jpg",
    "alt": "Marchas La Paz"
   }
  ]
 },
 {
  "id": "conflictos-cobran-vidas",
  "seccion": "periodismo",
  "fecha": "25/06/2025",
  "titulo": "Conflictos cobran vidas",
  "nota": "",
  "layout": "single",
  "tags": [
   "Noticias"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774906116/PresidenteAsesinatodePolici%CC%81as02_dm8jf0.jpg",
    "alt": "Conflictos"
   }
  ]
 },
 {
  "id": "masacre-de-la-calle-harrington",
  "seccion": "periodismo",
  "fecha": "15/01/2026",
  "titulo": "Masacre de la calle Harrington",
  "nota": "",
  "layout": "strip",
  "tags": [
   "45 Años",
   "Carrusel"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774905889/masacre-harrington_01_j7hqz5.jpg",
    "alt": "Imagen 1 de 3"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774905887/masacre-harrington_02_kp5fp2.jpg",
    "alt": "Imagen 2 de 3"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1774905885/masacre-harrington_03_jaovaa.jpg",
    "alt": "Imagen 3 de 3"
   }
  ]
 },
 {
  "id": "serie-de-posters-adrip",
  "seccion": "posters",
  "fecha": "2022→",
  "titulo": "Serie de Posters ADRIP",
  "nota": "",
  "layout": "4col",
  "tags": [
   "Poster",
   "Diseño",
   "Experimental"
  ],
  "imgs": [
   {
    "src": "",
    "alt": "Poster 01"
   },
   {
    "src": "",
    "alt": "Poster 02"
   },
   {
    "src": "",
    "alt": "Poster 03"
   },
   {
    "src": "",
    "alt": "Poster 04"
   },
   {
    "src": "",
    "alt": "Poster 05"
   },
   {
    "src": "",
    "alt": "Poster 06"
   },
   {
    "src": "",
    "alt": "Poster 07"
   },
   {
    "src": "",
    "alt": "Poster 08"
   }
  ]
 },
 {
  "id": "le-fond-de-l-air-est-rouge",
  "seccion": "posters",
  "fecha": "2024",
  "titulo": "Le fond de l’air est rouge",
  "nota": "Cartel para la proyección de Chris Marker en la UPB. Rojo plano, collage y una bolsa que sostiene la imagen entera.",
  "layout": "single",
  "tags": [
   "Cartel",
   "Cine",
   "Collage"
  ],
  "imgs": [
   {
    "src": "obra/le-fond-de-l-air-est-rouge-a1.jpg",
    "alt": "Le fond de l’air est rouge"
   }
  ]
 },
 {
  "id": "ciclo-de-cine-wild-edge",
  "seccion": "posters",
  "fecha": "2025",
  "titulo": "Ciclo de cine · Wild Edge",
  "nota": "Cartelería para el ciclo. Tres películas de boxeo leídas como una sola imagen de manos abiertas.",
  "layout": "single",
  "tags": [
   "Cartel",
   "Cine",
   "Ciclo"
  ],
  "imgs": [
   {
    "src": "obra/ciclo-adrip.jpg",
    "alt": "Wild Edge"
   }
  ]
 },
 {
  "id": "cansado",
  "seccion": "posters",
  "fecha": "2025",
  "titulo": "CANSADO",
  "nota": "Pieza de intervención sobre gato y texto corrido. El animal grita y el cuerpo de texto no lo deja.",
  "layout": "single",
  "tags": [
   "Cartel",
   "Intervención",
   "Crítica"
  ],
  "imgs": [
   {
    "src": "obra/gato-cansadooo.jpg",
    "alt": "CANSADO"
   }
  ]
 },
 {
  "id": "coordinadora-de-la-mujer",
  "seccion": "posters",
  "fecha": "2025",
  "titulo": "Coordinadora de la Mujer",
  "nota": "Piezas para la Coordinadora de la Mujer. Señalética apropiada y vuelta política.",
  "layout": "3col",
  "tags": [
   "Cartel",
   "Género",
   "Campaña"
  ],
  "imgs": [
   {
    "src": "obra/coordinadora-3.jpg",
    "alt": "Juntas"
   },
   {
    "src": "obra/grupo-4.jpg",
    "alt": "Grupo 01"
   },
   {
    "src": "obra/grupo-5.jpg",
    "alt": "Hablemos de política"
   }
  ]
 },
 {
  "id": "bosque-biceb",
  "seccion": "posters",
  "fecha": "2023",
  "titulo": "Bosque BICeBé",
  "nota": "Cartel para la Bienal del Cartel de Bolivia. Árbol pintado en rojo y una figura que lo sostiene desde abajo.",
  "layout": "2col",
  "tags": [
   "Cartel",
   "BICeBé",
   "Pintura"
  ],
  "imgs": [
   {
    "src": "obra/adrip-bosque-bicebe.jpg",
    "alt": "Bosque BICeBé"
   },
   {
    "src": "obra/sentado-adrip.jpg",
    "alt": "Sentado"
   }
  ]
 },
 {
  "id": "manual-de-marca-guiza",
  "seccion": "branding",
  "fecha": "2023",
  "titulo": "Manual de marca Guiza",
  "nota": "",
  "layout": "4col",
  "tags": [
   "Identidad",
   "Branding",
   "Salon de belleza masculino"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775597161/Manual_Oficial-Guiza_Mesa_de_trabajo_1_dpdwww.jpg",
    "alt": "Salon GUIZA - Primera página"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775597163/Manual_Oficial-Guiza-02_zlr2nk.jpg",
    "alt": "Tabla de contenidos"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775597159/Manual_Oficial-Guiza-04_mpruxc.jpg",
    "alt": "Misión y Visión"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775597182/Captura_de_pantalla_2026-04-07_a_la_s_5.19.22_p._m._ayssjg.png",
    "alt": "Componentes"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775597185/Captura_de_pantalla_2026-04-07_a_la_s_5.19.27_p._m._j6szzb.png",
    "alt": "Detalles 02"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775597181/Captura_de_pantalla_2026-04-07_a_la_s_5.19.35_p._m._s5wrey.png",
    "alt": "Construcción de marca"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775597179/Captura_de_pantalla_2026-04-07_a_la_s_5.19.39_p._m._tqkehj.png",
    "alt": "Composición de marca"
   }
  ]
 },
 {
  "id": "mmm-llama",
  "seccion": "branding",
  "fecha": "2024",
  "titulo": "\"MMM LLAMA\"",
  "nota": "",
  "layout": "4col",
  "tags": [
   "Identidad",
   "Branding",
   "Restaurante"
  ],
  "imgs": [
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775598494/Captura_de_pantalla_2026-04-07_a_la_s_5.46.04_p._m._hdbudq.png",
    "alt": "Conceptualización"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775598495/Captura_de_pantalla_2026-04-07_a_la_s_5.45.24_p._m._r7jfyq.png",
    "alt": "Señalización"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775598494/Captura_de_pantalla_2026-04-07_a_la_s_5.45.32_p._m._xjyvkn.png",
    "alt": "Señalización"
   },
   {
    "src": "https://res.cloudinary.com/dmvmqykud/image/upload/v1775598522/Menu%CC%81_LLAMA-02_hvxyvx.jpg",
    "alt": "Menú"
   }
  ]
 },
 {
  "id": "astroboy-xl",
  "seccion": "branding",
  "fecha": "2024",
  "titulo": "ASTROBOY XL",
  "nota": "Identidad y cartelería para la listening party. El personaje prestado se vuelve anfitrión, con paleta corta y mucho aire.",
  "layout": "2col",
  "tags": [
   "Identidad",
   "Cartel",
   "Música"
  ],
  "imgs": [
   {
    "src": "obra/astroxl-full-color.jpg",
    "alt": "ASTROBOY XL, versión color"
   },
   {
    "src": "obra/astroboy01.jpg",
    "alt": "ASTROBOY XL, cartel"
   }
  ]
 },
 {
  "id": "evp",
  "seccion": "branding",
  "fecha": "2023",
  "titulo": "EVP",
  "nota": "Etiqueta y gráfica para EVP. Alambre de púas como marco, tipografía dura y una rata por mascota.",
  "layout": "2col",
  "tags": [
   "Identidad",
   "Etiqueta",
   "Packaging"
  ],
  "imgs": [
   {
    "src": "obra/etiqueta-evp.png",
    "alt": "Etiqueta EVP"
   },
   {
    "src": "obra/rata01.jpg",
    "alt": "Atar a la rata"
   }
  ]
 },
 {
  "id": "arete",
  "seccion": "branding",
  "fecha": "2023",
  "titulo": "Arete",
  "nota": "Pieza de producto dibujada como plano técnico. La estructura queda a la vista y esa es la decisión de diseño.",
  "layout": "single",
  "tags": [
   "Producto",
   "Plano",
   "Objeto"
  ],
  "imgs": [
   {
    "src": "obra/arete-01-final.jpg",
    "alt": "Arete, plano"
   }
  ]
 },
 {
  "id": "reas-de-dise-o",
  "seccion": "branding",
  "fecha": "2022",
  "titulo": "Áreas de Diseño",
  "nota": "Serie de cartas para el mundial, una por selección y año. Sistema cerrado, figura geométrica y dos colores por pieza.",
  "layout": "3col",
  "tags": [
   "Sistema",
   "Cartel",
   "Fútbol"
  ],
  "imgs": [
   {
    "src": "obra/carta-1-300x-100.jpg",
    "alt": "España 2010"
   },
   {
    "src": "obra/carta-2-300x-100.jpg",
    "alt": "Alemania 2014"
   },
   {
    "src": "obra/carta-4-300x-100.jpg",
    "alt": "Argentina 1986"
   },
   {
    "src": "obra/carta-5-300x-100.jpg",
    "alt": "Brasil 2002"
   }
  ]
 },
 {
  "id": "calendario-empleados-opini-n-2026",
  "seccion": "editorial",
  "fecha": "2025",
  "titulo": "Calendario Empleados Opinión 2026",
  "nota": "",
  "layout": "strip",
  "tags": [
   "Editorial",
   "Calendario",
   "Opinión"
  ],
  "imgs": [
   {
    "src": "",
    "alt": "Calendario - portada"
   },
   {
    "src": "",
    "alt": "Calendario - interior"
   },
   {
    "src": "",
    "alt": "Calendario - detalle"
   }
  ]
 },
 {
  "id": "pbfcc-boletin-07",
  "seccion": "editorial",
  "fecha": "2026",
  "titulo": "Boletín PBFCC · 7ma edición",
  "nota": "Boletín electrónico de la Plataforma Boliviana Frente al Cambio Climático, edición de febrero a abril. Diagramación completa, jerarquía de notas, tratamiento de fotografía documental y sistema de enlaces dentro del PDF.",
  "layout": "2col",
  "tags": [
   "Editorial",
   "Boletín",
   "PBFCC"
  ],
  "doc": {
   "src": "obra/pbfcc/boletin-07-protegido.pdf",
   "paginas": 14,
   "clave": true
  },
  "imgs": [
   {
    "src": "obra/pbfcc/boletin-07-01.jpg",
    "alt": "Portada, 7ma edición"
   },
   {
    "src": "obra/pbfcc/boletin-07-02.jpg",
    "alt": "Incidencia política y pública"
   },
   {
    "src": "obra/pbfcc/boletin-07-03.jpg",
    "alt": "Interior"
   },
   {
    "src": "obra/pbfcc/boletin-07-04.jpg",
    "alt": "Interior"
   }
  ]
 },
 {
  "id": "pbfcc-boletin-08",
  "seccion": "editorial",
  "fecha": "2026",
  "titulo": "Boletín PBFCC · 8va edición",
  "nota": "Octava edición, de mayo a agosto. Reconstruida fuera de Affinity para poder corregirla hasta el cierre. Portada con el mapa de la región y cuerpo a dos columnas.",
  "layout": "2col",
  "tags": [
   "Editorial",
   "Boletín",
   "PBFCC"
  ],
  "doc": {
   "src": "obra/pbfcc/boletin-08-protegido.pdf",
   "paginas": 10,
   "clave": true
  },
  "imgs": [
   {
    "src": "obra/pbfcc/boletin-08-01.jpg",
    "alt": "Portada, 8va edición"
   },
   {
    "src": "obra/pbfcc/boletin-08-02.jpg",
    "alt": "Acción global"
   },
   {
    "src": "obra/pbfcc/boletin-08-03.jpg",
    "alt": "Interior"
   },
   {
    "src": "obra/pbfcc/boletin-08-04.jpg",
    "alt": "Interior"
   }
  ]
 },
 {
  "id": "pbfcc-biocombustibles",
  "seccion": "editorial",
  "fecha": "2026",
  "titulo": "Impactos de los biocombustibles en Bolivia",
  "nota": "Investigación de Marielle Cauthin y Karen Mercado para la PBFCC, llevada a publicación A5 de 104 páginas. Diagramación, portadas de capítulo e infografía de apoyo.",
  "layout": "2col",
  "tags": [
   "Editorial",
   "Investigación",
   "PBFCC"
  ],
  "doc": {
   "src": "obra/pbfcc/biocombustibles-protegido.pdf",
   "paginas": 104,
   "clave": true
  },
  "imgs": [
   {
    "src": "obra/pbfcc/biocombustibles-01.jpg",
    "alt": "Portada"
   },
   {
    "src": "obra/pbfcc/biocombustibles-02.jpg",
    "alt": "Interior"
   },
   {
    "src": "obra/pbfcc/biocombustibles-03.jpg",
    "alt": "Portada de capítulo"
   },
   {
    "src": "obra/pbfcc/biocombustibles-04.jpg",
    "alt": "Interior"
   },
   {
    "src": "obra/pbfcc/biocombustibles-05.jpg",
    "alt": "Interior"
   }
  ]
 },
 {
  "id": "pbfcc-compromisos",
  "seccion": "editorial",
  "fecha": "2026",
  "titulo": "Compromisos por el Clima · Manual de uso",
  "nota": "Manual de uso gráfico y key visual de la campaña. Construcción de la marca, área de seguridad, variantes y aplicaciones.",
  "layout": "2col",
  "tags": [
   "Manual",
   "Identidad",
   "PBFCC"
  ],
  "doc": {
   "src": "obra/pbfcc/compromisos-protegido.pdf",
   "paginas": 15,
   "clave": true
  },
  "imgs": [
   {
    "src": "obra/pbfcc/compromisos-01.jpg",
    "alt": "Key visual"
   },
   {
    "src": "obra/pbfcc/compromisos-02.jpg",
    "alt": "Construcción y área de seguridad"
   },
   {
    "src": "obra/pbfcc/compromisos-03.jpg",
    "alt": "Variantes"
   },
   {
    "src": "obra/pbfcc/compromisos-04.jpg",
    "alt": "Aplicaciones"
   }
  ]
 },
 {
  "id": "pbfcc-analisis-medios",
  "seccion": "editorial",
  "fecha": "2026",
  "titulo": "Análisis de medios desde el diseño gráfico",
  "nota": "Diagnóstico de la comunicación visual de la PBFCC en redes sociales. Informe propio, de la investigación a la diagramación, con auditoría de piezas y recomendaciones de sistema.",
  "layout": "2col",
  "tags": [
   "Informe",
   "Investigación",
   "PBFCC"
  ],
  "doc": {
   "src": "obra/pbfcc/analisis-medios-protegido.pdf",
   "paginas": 9,
   "clave": true
  },
  "imgs": [
   {
    "src": "obra/pbfcc/analisis-medios-01.jpg",
    "alt": "Portada"
   },
   {
    "src": "obra/pbfcc/analisis-medios-02.jpg",
    "alt": "Interior"
   },
   {
    "src": "obra/pbfcc/analisis-medios-03.jpg",
    "alt": "Lo que ya funciona"
   },
   {
    "src": "obra/pbfcc/analisis-medios-04.jpg",
    "alt": "Interior"
   }
  ]
 },
 {
  "id": "composicion-cultural",
  "seccion": "periodismo",
  "fecha": "2024",
  "titulo": "Composición cultural",
  "nota": "Composición para una página del periódico impreso de Opinión. Signos de la ciudad, música y juego armados como un solo plano de color.",
  "layout": "1col",
  "tags": [
   "Opinión",
   "Ilustración",
   "Impreso"
  ],
  "enlace": {
   "destino": "arte:la-ramona",
   "texto": "Del mismo tiempo en Opinión, ver La Ramona"
  },
  "imgs": [
   {
    "src": "obra/adrip-face-book-composicion-cultural.jpg",
    "alt": "Composición cultural"
   }
  ]
 },
 {
  "id": "poster-a1-adrip",
  "seccion": "posters",
  "fecha": "2023",
  "titulo": "Manos",
  "nota": "Cartel A1. Manos sosteniendo stickers y objetos, en semitono.",
  "layout": "1col",
  "tags": [
   "Cartel",
   "Semitono",
   "A1"
  ],
  "imgs": [
   {
    "src": "obra/poster-a1-adriano.jpg",
    "alt": "Cartel A1, manos"
   }
  ]
 }
];

