// ─────────────────────────────────────────────────────────────
//  OBRA · PROYECTOS
//  Cada proyecto tiene su firma de color y su modo de aparecer.
//  pos.x y pos.y son porcentajes del espacio, pos.z es la
//  profundidad, de 0.6 lejos a 1.3 cerca.
//  efecto, uno de bloom, resplandor, luces, trama, desfase, banda, gota
// ─────────────────────────────────────────────────────────────

const PROYECTOS = [
 {
  id: 'rosas',
  titulo: 'Rosas',
  anio: '2022',
  colores: ['#3f9147', '#d63a2f', '#ece5d8'],
  efecto: 'bloom',
  ascii: true,
  pos: { x: 21, y: 30, z: 1.18 },
  linea: 'Patrón floral sobre William Morris, llevado al muro',
  abierto: true,
  texto: 'Un patrón de rosas y espinas construido desde los principios ornamentales de William Morris, ' +
         'impreso en pliegos, cortado a mano y pegado en muros de Cochabamba. ' +
         'Morris quería devolverle dignidad al trabajo del artesano en plena Revolución Industrial. ' +
         'Acá el mismo gesto se repite un siglo y medio después, en una ciudad donde el ornamento ' +
         'no llega y el muro está para otra cosa. La rosa como belleza y la espina como advertencia, ' +
         'las dos en el mismo tallo.',
  etapas: [
   { nombre: 'El patrón', imgs: ['01-patron.jpg', '02-pliego-a1.jpg'] },
   { nombre: 'La producción', imgs: ['03-impreso.jpg', '04-corte.jpg'] },
   { nombre: 'La intervención', imgs: ['05-pegado-01.jpg', '06-pegado-02.jpg', '07-muro-01.jpg', '08-muro-02.jpg', '09-muro-03.jpg'] },
   { nombre: 'Lo que salió de ahí', imgs: ['10-rosa-suelta.jpg', '11-rosas-puas.jpg', '12-sticker.jpg', '13-holding-on.jpg', '14-blooming-of-hope.jpg'] }
  ]
 },
 {
  id: 'pasamontanas',
  titulo: 'Pasamontañas',
  anio: '2022 → 2024',
  colores: ['#e8409a', '#0c0c0a', '#f2efe9'],
  efecto: 'resplandor',
  pos: { x: 63, y: 20, z: 1.05 },
  linea: 'Podría ser tu, podría ser yo',
  oculto: true,
  abierto: false
 },
 {
  id: 'room-g',
  titulo: 'Room G',
  anio: '2025',
  colores: ['#2ee6a8', '#ff3b30'],
  efecto: 'luces',
  pos: { x: 72, y: 56, z: 0.92 },
  linea: 'Una sala entera como soporte',
  abierto: false
 },
 {
  id: 'martadero',
  titulo: 'Martadero',
  anio: '2026',
  colores: ['#2b6fd6', '#f07c22', '#38b36b'],
  efecto: 'trama',
  pos: { x: 34, y: 66, z: 1.0 },
  linea: 'Muro, hiphop ch’ixi, signos de la calle',
  abierto: false
 },
 {
  id: 'cowboys',
  titulo: 'Cowboys',
  anio: '2023',
  colores: ['#e0219a', '#ffd23f'],
  efecto: 'desfase',
  pos: { x: 13, y: 78, z: 0.78 },
  linea: 'Duotono, entre la foto de viaje y la estampa',
  abierto: false
 },
 {
  id: 'tiwanaku',
  titulo: 'Tiwanaku',
  anio: '2024',
  colores: ['#c9a227', '#7fa8d4'],
  efecto: 'banda',
  pos: { x: 79, y: 84, z: 0.74 },
  linea: 'El altiplano sin nadie adentro',
  abierto: false
 },
 {
  id: 'gotas',
  titulo: 'Gotas',
  anio: '2022 → 2024',
  colores: ['#4ec3e0', '#f2a03d'],
  efecto: 'gota',
  pos: { x: 51, y: 44, z: 0.86 },
  linea: 'Una forma simple que aguanta todo',
  abierto: false
 }
];
