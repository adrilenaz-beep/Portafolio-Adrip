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
  "cuenta": "5 series",
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
  "id": "periodismo",
  "titulo": "Periodismo Gráfico · Opinión",
  "cuenta": "28+ registros",
  "oculta": false,
  "abierta": false,
  "aMano": true,
  "grupo": "encargo"
 },
 {
  "id": "posters",
  "titulo": "Cartel",
  "cuenta": "8 proyectos",
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
  "cuenta": "1 proyecto",
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
  "id": "qu-malo-todo",
  "seccion": "ilustracion",
  "fecha": "2024",
  "titulo": "Quémalo todo",
  "nota": "Cartel ilustrado. De las cenizas renace, dicho con un esqueleto y dos tintas.",
  "layout": "single",
  "tags": [
   "Ilustración",
   "Cartel"
  ],
  "imgs": [
   {
    "src": "obra/quemalo-gato.jpg",
    "alt": "Quémalo todo"
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
  "id": "am-still-holding-on",
  "seccion": "posters",
  "fecha": "2025",
  "titulo": "Am still holding on",
  "nota": "Puño y rosa con espinas. Dos carteles hermanos, uno gráfico y otro tipográfico, sobre aguantar.",
  "layout": "2col",
  "tags": [
   "Cartel",
   "Tipografía",
   "Ilustración"
  ],
  "imgs": [
   {
    "src": "obra/rosa-mano-01.jpg",
    "alt": "Am still holding on"
   },
   {
    "src": "obra/rosa-mano-02.jpg",
    "alt": "To the blooming of hope"
   }
  ]
 },
 {
  "id": "la-ramona",
  "seccion": "posters",
  "fecha": "2024",
  "titulo": "La Ramona",
  "nota": "Portadas para el suplemento La Ramona de Opinión. Manos, stickers y ciudad, con la cabecera como parte del dibujo.",
  "layout": "3col",
  "tags": [
   "Cartel",
   "Editorial",
   "Opinión"
  ],
  "imgs": [
   {
    "src": "obra/la-ramona-alasitas.jpg",
    "alt": "Alasitas"
   },
   {
    "src": "obra/la-ramona-monky.jpg",
    "alt": "Monky"
   },
   {
    "src": "obra/poster-a1-adriano.jpg",
    "alt": "Poster A1"
   },
   {
    "src": "obra/adrip-face-book-composicion-cultural.jpg",
    "alt": "Composición cultural"
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
 }
];

