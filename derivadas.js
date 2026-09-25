// Índice de imágenes. Para cada una, m es su medida real en píxeles,
// que sirve para reservarle el hueco exacto y no recortarla, y a son
// los anchos chicos disponibles, si los tiene.
// Lo genera el script de optimización, no hace falta tocarlo a mano.
const DERIVADAS = {
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774905885/masacre-harrington_03_jaovaa.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774905887/masacre-harrington_02_kp5fp2.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774905889/masacre-harrington_01_j7hqz5.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774905967/Guerra-Basura_02_eereii.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774905968/Guerra-Basura_01_qsdgqo.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774905994/Gatos-Neko_01_x2o4z9.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774906116/PresidenteAsesinatodePolici%CC%81as02_dm8jf0.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774906226/MasivaMovilizacio%CC%81n01_lhp2fg.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774906259/AbejasElefantes01_rdbsge.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774906309/SuspendidoDi%CC%81aPeato%CC%81n03_m6vhou.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774906356/Llajta_Bloqueada_tkdgyb.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774906357/Vaticano_iqc3t6.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774906381/HayOrden02_rijfqw.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774906435/Contrabando03_02_i4nmkx.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774906436/Contrabando03_01_aipinx.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774906437/Contrabando01_b3atf3.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774906439/Contrabando02_qfqejb.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774906440/Contrabando04_ckuvr6.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774916468/Ausch01_tjkzkv.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774916469/Ausch02_f8y27d.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774916472/Ausch06_ytlebt.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774916474/Ausch05_awsxsh.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774916477/Ausch04_ib8jg4.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774916479/Ausch03_cg91ph.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774916521/Alphaville02_gcllkg.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774916612/Alien02_qg9yib.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774964410/internet02_w9rkx7.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774964433/ChoferesPiden01_afbxwz.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774964926/Diesel_reciclado_bwslbv.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774964969/Incendios06-2.0_h9uvm9.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774964970/Incendios01_xyu7dt.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774964970/Incendios05_q5ffkl.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774964971/Incendios03_d61nba.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774964971/Incendios04_ezdfry.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774964973/Incendios02_vamujz.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774964995/Bloquos10dias_zcnh6k.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774964996/Israelacusa01_qrpkve.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1774965035/Pasaje-_2_yzdjk0.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775010111/exguerrillero_1_eoyiw4.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775052079/ChoqueAereo01_l30l4a.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775052079/ChoqueAereo02_mrcpes.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775052079/ChoqueAereo03_rfxbdo.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775052079/ChoqueAereo04_yfo9b2.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775052549/Hollywood-_2_kfdla3.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775052889/Alalay-Aves01_03_yrrydu.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775052890/ALALAY-AVES_01_c53gez.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775052891/Alalay-Aves01_02_p7pbpi.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775052891/Alalay-Aves01_04_rncnei.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775052990/Gatos-Neko_02_pqf4lk.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775052991/Gatos-Neko_03_tkqi2y.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775053115/Rosa01_gfw6kg.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775053230/Golpe01_y7yncp.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775053485/DebatePres01_ggsmmz.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775053486/Misfits01_z4uts6.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775053486/Recompensa03_p2gyrp.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775056076/Di%CC%81aPeato%CC%81n18deMayo03_tia1z0.jpg": {
"m": [
80,
100
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775597159/Manual_Oficial-Guiza-04_mpruxc.jpg": {
"m": [
80,
64
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775597161/Manual_Oficial-Guiza_Mesa_de_trabajo_1_dpdwww.jpg": {
"m": [
80,
64
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775597163/Manual_Oficial-Guiza-02_zlr2nk.jpg": {
"m": [
80,
64
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775597179/Captura_de_pantalla_2026-04-07_a_la_s_5.19.39_p._m._tqkehj.png": {
"m": [
80,
65
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775597181/Captura_de_pantalla_2026-04-07_a_la_s_5.19.35_p._m._s5wrey.png": {
"m": [
80,
65
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775597182/Captura_de_pantalla_2026-04-07_a_la_s_5.19.22_p._m._ayssjg.png": {
"m": [
80,
65
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775597185/Captura_de_pantalla_2026-04-07_a_la_s_5.19.27_p._m._j6szzb.png": {
"m": [
80,
65
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775598494/Captura_de_pantalla_2026-04-07_a_la_s_5.45.32_p._m._xjyvkn.png": {
"m": [
80,
53
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775598494/Captura_de_pantalla_2026-04-07_a_la_s_5.46.04_p._m._hdbudq.png": {
"m": [
80,
81
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775598495/Captura_de_pantalla_2026-04-07_a_la_s_5.45.24_p._m._r7jfyq.png": {
"m": [
80,
65
]
},
"https://res.cloudinary.com/dmvmqykud/image/upload/v1775598522/Menu%CC%81_LLAMA-02_hvxyvx.jpg": {
"m": [
80,
52
]
},
"obra/2022-03-27-rosas-1-0.jpg": {
"a": [
320,
640
],
"m": [
1600,
1225
]
},
"obra/20220121-img-7148-2.jpg": {
"a": [
320,
640
],
"m": [
1600,
1125
]
},
"obra/20220123-img-7253-2.jpg": {
"a": [
320,
640
],
"m": [
1202,
1600
]
},
"obra/2023-02-16-stickers.jpg": {
"a": [
320,
640
],
"m": [
1600,
1200
]
},
"obra/20230624-144806-exported-12030.jpg": {
"a": [
320,
640
],
"m": [
900,
1600
]
},
"obra/20230705-211027-2.jpg": {
"a": [
320,
640
],
"m": [
794,
1600
]
},
"obra/20230705-211129-2.jpg": {
"a": [
320,
640
],
"m": [
1011,
1600
]
},
"obra/20241107.jpg": {
"a": [
320,
640
],
"m": [
1200,
1600
]
},
"obra/20241108.jpg": {
"a": [
320,
640
],
"m": [
1600,
1200
]
},
"obra/adrip-01-jeep.jpg": {
"a": [
320,
640
],
"m": [
1080,
1440
]
},
"obra/adrip-07.jpg": {
"a": [
320
],
"m": [
674,
599
]
},
"obra/adrip-08.jpg": {
"a": [
320
],
"m": [
674,
599
]
},
"obra/adrip-bosque-bicebe.jpg": {
"a": [
320,
640
],
"m": [
1120,
1600
]
},
"obra/adrip-face-book-composicion-cultural.jpg": {
"a": [
320,
640
],
"m": [
1600,
1108
]
},
"obra/arete-01-final.jpg": {
"a": [
320,
640
],
"m": [
1237,
1600
]
},
"obra/arte/anarky-jaket-video-chaqueta-wip-portada.jpg": {
"a": [
320
],
"m": [
675,
1200
]
},
"obra/arte/cansado-can.jpg": {
"a": [
320,
640
],
"m": [
900,
1600
]
},
"obra/arte/cansado-can01.jpg": {
"a": [
320,
640
],
"m": [
900,
1600
]
},
"obra/arte/cansado-can02.jpg": {
"a": [
320,
640
],
"m": [
900,
1600
]
},
"obra/arte/cansado-can03.jpg": {
"a": [
320,
640
],
"m": [
900,
1600
]
},
"obra/arte/cansado-can04.jpg": {
"a": [
320,
640
],
"m": [
900,
1600
]
},
"obra/arte/evp-atar.jpg": {
"a": [
320,
640
],
"m": [
1067,
1600
]
},
"obra/arte/evp-evp-1-portada.jpg": {
"a": [
320
],
"m": [
640,
480
]
},
"obra/arte/evp-evp-2-portada.jpg": {
"a": [
320
],
"m": [
640,
480
]
},
"obra/arte/evp-img-1445-2.jpg": {
"a": [
320,
640
],
"m": [
1600,
1067
]
},
"obra/arte/evp-img-1456.jpg": {
"a": [
320,
640
],
"m": [
1600,
1067
]
},
"obra/arte/evp-img-1468.jpg": {
"a": [
320,
640
],
"m": [
1600,
1067
]
},
"obra/arte/evp-img-1470.jpg": {
"a": [
320,
640
],
"m": [
1600,
1067
]
},
"obra/arte/evp-img-2315.jpg": {
"a": [
320,
640
],
"m": [
1067,
1600
]
},
"obra/arte/evp-img-2316.jpg": {
"a": [
320,
640
],
"m": [
1067,
1600
]
},
"obra/arte/fanzine-01-crear-es-resisitir.jpg": {
"a": [
320,
640
],
"m": [
1164,
1600
]
},
"obra/arte/fanzine-01-fanzine-001-terimnado-portada.jpg": {
"a": [
320,
640
],
"m": [
1100,
1424
]
},
"obra/arte/fanzine-01-video-final-portada.jpg": {
"a": [
320
],
"m": [
675,
1200
]
},
"obra/arte/fanzine-historia-del-pasamontanas-fanzine-qirba-recuperado-portada.jpg": {
"a": [
320,
640
],
"m": [
1100,
1556
]
},
"obra/arte/fanzine-historia-del-pasamontanas-img-2512.jpg": {
"a": [
320,
640
],
"m": [
1600,
1067
]
},
"obra/arte/fanzine-historia-del-pasamontanas-img-2586.jpg": {
"a": [
320,
640
],
"m": [
1067,
1600
]
},
"obra/arte/fotos-paloma-01.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/arte/fotos-paloma-02.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/arte/fotos-paloma-03.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/arte/fotos-paloma-04.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/arte/fotos-viaje-auto-20220121-img-7141-2.jpg": {
"a": [
320,
640
],
"m": [
1350,
1600
]
},
"obra/arte/fotos-viaje-auto-20220121-img-7148-2.jpg": {
"a": [
320,
640
],
"m": [
1600,
1125
]
},
"obra/arte/fotos-viaje-auto-20220121-img-7154-2.jpg": {
"a": [
320,
640
],
"m": [
1600,
1067
]
},
"obra/arte/fotos-viaje-auto-20220123-img-7240-2.jpg": {
"a": [
320,
640
],
"m": [
1600,
1133
]
},
"obra/arte/fotos-viaje-auto-20220123-img-7253-2.jpg": {
"a": [
320,
640
],
"m": [
1202,
1600
]
},
"obra/arte/la-ramona-la-ramona-alasitas.jpg": {
"a": [
320,
640
],
"m": [
1080,
1454
]
},
"obra/arte/la-ramona-la-ramona-monky.jpg": {
"a": [
320,
640
],
"m": [
1079,
1486
]
},
"obra/arte/la-ramona-la-ramona-santiago.jpg": {
"a": [
320,
640
],
"m": [
1077,
1418
]
},
"obra/arte/la-ramona-la-ramona-tantawawas.jpg": {
"a": [
320,
640
],
"m": [
1211,
1600
]
},
"obra/arte/la-ramona-save-la-ramona-portada.jpg": {
"a": [
320
],
"m": [
675,
1200
]
},
"obra/arte/pasamontanas-historia-20230625-151757-portada.jpg": {
"a": [
320
],
"m": [
675,
1200
]
},
"obra/arte/pasamontanas-historia-20230705-211027-2.jpg": {
"a": [
320,
640
],
"m": [
794,
1600
]
},
"obra/arte/pasamontanas-historia-20230705-211129-2.jpg": {
"a": [
320,
640
],
"m": [
1011,
1600
]
},
"obra/arte/pasamontanas-historia-2024.jpg": {
"a": [
320,
640
],
"m": [
1600,
1200
]
},
"obra/arte/pasamontanas-historia-20241108.jpg": {
"a": [
320,
640
],
"m": [
1600,
1200
]
},
"obra/arte/pasamontanas-historia-adrip-yeye-portada.jpg": {
"a": [
320,
640
],
"m": [
1200,
675
]
},
"obra/arte/pasamontanas-historia-all-lights-portada.jpg": {
"a": [
320
],
"m": [
675,
1200
]
},
"obra/arte/pasamontanas-historia-boceto-original.jpg": {
"a": [
320,
640
],
"m": [
1200,
1600
]
},
"obra/arte/pasamontanas-historia-img-20230625-wa0007.jpg": {
"a": [
320
],
"m": [
576,
1024
]
},
"obra/arte/pasamontanas-historia-lluvia-portada.jpg": {
"a": [
320,
640
],
"m": [
735,
1200
]
},
"obra/arte/pasamontanas-historia-mask-print.jpg": {
"a": [
320,
640
],
"m": [
1130,
1600
]
},
"obra/arte/pasamontanas-historia-r-we-doomed-portada.jpg": {
"a": [
320
],
"m": [
675,
1200
]
},
"obra/arte/pasamontanas-historia-reel-01-portada.jpg": {
"a": [
320
],
"m": [
675,
1200
]
},
"obra/arte/pasamontanas-historia-secuencia-gatooo-1-portada.jpg": {
"a": [
320
],
"m": [
675,
1200
]
},
"obra/arte/pasamontanas-historia-vid-20251015-155652-1-portada.jpg": {
"a": [
320
],
"m": [
675,
1200
]
},
"obra/arte/rosa-embelleciendo-20220729-img-8280-2.jpg": {
"a": [
320,
640
],
"m": [
1600,
1135
]
},
"obra/arte/rosa-embelleciendo-recurso-1.jpg": {
"a": [
320,
640
],
"m": [
724,
1177
]
},
"obra/arte/rosa-embelleciendo-rosa-mano-01.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/arte/rosa-embelleciendo-rosa-mano-02.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/arte/rosa-embelleciendo-rosas-01.jpg": {
"a": [
320,
640
],
"m": [
1200,
1600
]
},
"obra/arte/rosa-embelleciendo-rosas-02.jpg": {
"a": [
320,
640
],
"m": [
1109,
1600
]
},
"obra/arte/rosa-embelleciendo-rosas-03.jpg": {
"a": [
320,
640
],
"m": [
1200,
1600
]
},
"obra/arte/stickers-20230622-220058-portada.jpg": {
"a": [
320
],
"m": [
675,
1200
]
},
"obra/arte/stickers-20230712-142933-portada.jpg": {
"a": [
320
],
"m": [
675,
1200
]
},
"obra/arte/stickers-20230717-143321-portada.jpg": {
"a": [
320
],
"m": [
675,
1200
]
},
"obra/arte/stickers-20230718-150724-portada.jpg": {
"a": [
320
],
"m": [
675,
1200
]
},
"obra/arte/stickers-20230724-142755-2-portada.jpg": {
"a": [
320
],
"m": [
675,
1200
]
},
"obra/arte/stickers-dreamdontsleep-1-portada.jpg": {
"a": [
320
],
"m": [
675,
1200
]
},
"obra/arte/stickers-img-2607.jpg": {
"a": [
320,
640
],
"m": [
1067,
1600
]
},
"obra/arte/stickers-img-2617.jpg": {
"a": [
320,
640
],
"m": [
1067,
1600
]
},
"obra/arte/stickers-metal-adrip-portada.jpg": {
"a": [
320,
640
],
"m": [
1100,
1097
]
},
"obra/arte/stickers-mvi-2609-portada.jpg": {
"a": [
320,
640
],
"m": [
1200,
675
]
},
"obra/astroboy01.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/astroxl-full-color.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/ayacucho01.jpg": {
"a": [
320,
640
],
"m": [
1600,
882
]
},
"obra/base-room-full.jpg": {
"a": [
320,
640
],
"m": [
1067,
1600
]
},
"obra/carta-1-300x-100.jpg": {
"a": [
320,
640
],
"m": [
792,
1088
]
},
"obra/carta-2-300x-100.jpg": {
"a": [
320,
640
],
"m": [
793,
1088
]
},
"obra/carta-4-300x-100.jpg": {
"a": [
320,
640
],
"m": [
792,
1088
]
},
"obra/carta-5-300x-100.jpg": {
"a": [
320,
640
],
"m": [
793,
1088
]
},
"obra/centu-y-pico02.jpg": {
"a": [
320,
640
],
"m": [
900,
1600
]
},
"obra/ciclo-adrip.jpg": {
"a": [
320,
640
],
"m": [
1130,
1600
]
},
"obra/comic-02-adrip.jpg": {
"a": [
320,
640
],
"m": [
1280,
1600
]
},
"obra/connectas-01-deposito.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/connectas-02-parasitos.jpg": {
"a": [
320,
640
],
"m": [
900,
1600
]
},
"obra/connectas-03-bang.jpg": {
"a": [
320,
640
],
"m": [
1600,
900
]
},
"obra/connectas-04-departamento.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/connectas-05-edad.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/connectas-06-ano.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/coordinadora-3.jpg": {
"a": [
320,
640
],
"m": [
1131,
1600
]
},
"obra/cow03-2.jpg": {
"a": [
320,
640
],
"m": [
1131,
1600
]
},
"obra/cow03.jpg": {
"a": [
320,
640
],
"m": [
1131,
1600
]
},
"obra/cow04.jpg": {
"a": [
320,
640
],
"m": [
1131,
1600
]
},
"obra/cow05.jpg": {
"a": [
320,
640
],
"m": [
1131,
1600
]
},
"obra/cv/cv-01.jpg": {
"a": [
320,
640
],
"m": [
1160,
1500
]
},
"obra/cv/cv-02.jpg": {
"a": [
320,
640
],
"m": [
1160,
1500
]
},
"obra/cv/cv-03.jpg": {
"a": [
320,
640
],
"m": [
1160,
1500
]
},
"obra/etiqueta-evp.png": {
"a": [
320,
640
],
"m": [
1237,
1600
]
},
"obra/foto-tiwa1.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/foto-tiwa2.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/foto-tiwa3.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/gato-cansadooo.jpg": {
"a": [
320,
640
],
"m": [
1201,
1600
]
},
"obra/gotita.jpg": {
"a": [
320,
640
],
"m": [
1132,
1600
]
},
"obra/grupo-4.jpg": {
"a": [
320,
640
],
"m": [
1131,
1600
]
},
"obra/grupo-5.jpg": {
"a": [
320,
640
],
"m": [
1131,
1600
]
},
"obra/img-1433.jpg": {
"a": [
320,
640
],
"m": [
1600,
1065
]
},
"obra/img-1468.jpg": {
"a": [
320,
640
],
"m": [
1600,
1067
]
},
"obra/img-1470.jpg": {
"a": [
320,
640
],
"m": [
1600,
1067
]
},
"obra/img-2586.jpg": {
"a": [
320,
640
],
"m": [
1067,
1600
]
},
"obra/jeeps.jpg": {
"a": [
320,
640
],
"m": [
1080,
1440
]
},
"obra/le-fond-de-l-air-est-rouge-a1.jpg": {
"a": [
320,
640
],
"m": [
1130,
1600
]
},
"obra/martadero-alien-01.jpg": {
"a": [
320,
640
],
"m": [
1600,
1067
]
},
"obra/martadero-mujeres-01.jpg": {
"a": [
320,
640
],
"m": [
1600,
882
]
},
"obra/martadero-taki-01.jpg": {
"a": [
320,
640
],
"m": [
1600,
1067
]
},
"obra/mask-print.jpg": {
"a": [
320,
640
],
"m": [
1130,
1600
]
},
"obra/pasa-02-gota-mascara.jpg": {
"a": [
320
],
"m": [
500,
636
]
},
"obra/pasa-04-detalle-cara.jpg": {
"a": [
320,
640
],
"m": [
1130,
1600
]
},
"obra/pasa-05-detalle-ojos.jpg": {
"a": [
320,
640
],
"m": [
1130,
1600
]
},
"obra/pasa-06-detalle-boca.jpg": {
"a": [
320,
640
],
"m": [
1130,
1600
]
},
"obra/pasa-07-figura-01.jpg": {
"a": [
320,
640
],
"m": [
1200,
1600
]
},
"obra/pasa-08-figura-02.jpg": {
"a": [
320,
640
],
"m": [
1200,
1600
]
},
"obra/pasa-09-figura-03.jpg": {
"a": [
320,
640
],
"m": [
1200,
1600
]
},
"obra/pasa-10-en-la-calle.jpg": {
"a": [
320,
640
],
"m": [
1200,
1600
]
},
"obra/pasa-13-senal-catedral.jpg": {
"a": [
320,
640
],
"m": [
900,
1600
]
},
"obra/pasa-14-poste.jpg": {
"a": [
320,
640
],
"m": [
900,
1600
]
},
"obra/pasa-15-mewhen.jpg": {
"a": [
320,
640
],
"m": [
1600,
800
]
},
"obra/pasa-16-masks-rev.jpg": {
"a": [
320,
640
],
"m": [
1067,
1600
]
},
"obra/pbfcc/analisis-medios-01.jpg": {
"a": [
320,
640
],
"m": [
1061,
1500
]
},
"obra/pbfcc/analisis-medios-02.jpg": {
"a": [
320,
640
],
"m": [
1061,
1500
]
},
"obra/pbfcc/analisis-medios-03.jpg": {
"a": [
320,
640
],
"m": [
1061,
1500
]
},
"obra/pbfcc/analisis-medios-04.jpg": {
"a": [
320,
640
],
"m": [
1061,
1500
]
},
"obra/pbfcc/biocombustibles-01.jpg": {
"a": [
320,
640
],
"m": [
1059,
1500
]
},
"obra/pbfcc/biocombustibles-02.jpg": {
"a": [
320,
640
],
"m": [
1059,
1500
]
},
"obra/pbfcc/biocombustibles-03.jpg": {
"a": [
320,
640
],
"m": [
1059,
1500
]
},
"obra/pbfcc/biocombustibles-04.jpg": {
"a": [
320,
640
],
"m": [
1059,
1500
]
},
"obra/pbfcc/biocombustibles-05.jpg": {
"a": [
320,
640
],
"m": [
1059,
1500
]
},
"obra/pbfcc/boletin-07-01.jpg": {
"a": [
320,
640
],
"m": [
1061,
1500
]
},
"obra/pbfcc/boletin-07-02.jpg": {
"a": [
320,
640
],
"m": [
1061,
1500
]
},
"obra/pbfcc/boletin-07-03.jpg": {
"a": [
320,
640
],
"m": [
1061,
1500
]
},
"obra/pbfcc/boletin-07-04.jpg": {
"a": [
320,
640
],
"m": [
1061,
1500
]
},
"obra/pbfcc/boletin-08-01.jpg": {
"a": [
320,
640
],
"m": [
1061,
1500
]
},
"obra/pbfcc/boletin-08-02.jpg": {
"a": [
320,
640
],
"m": [
1061,
1500
]
},
"obra/pbfcc/boletin-08-03.jpg": {
"a": [
320,
640
],
"m": [
1061,
1500
]
},
"obra/pbfcc/boletin-08-04.jpg": {
"a": [
320,
640
],
"m": [
1061,
1500
]
},
"obra/pbfcc/compromisos-01.jpg": {
"a": [
320,
640
],
"m": [
1500,
1214
]
},
"obra/pbfcc/compromisos-02.jpg": {
"a": [
320,
640
],
"m": [
1500,
1214
]
},
"obra/pbfcc/compromisos-03.jpg": {
"a": [
320,
640
],
"m": [
1500,
1214
]
},
"obra/pbfcc/compromisos-04.jpg": {
"a": [
320,
640
],
"m": [
1500,
1214
]
},
"obra/poster-a1-adriano.jpg": {
"a": [
320,
640
],
"m": [
1131,
1600
]
},
"obra/quemalo-gato.jpg": {
"a": [
320,
640
],
"m": [
1120,
1600
]
},
"obra/rata01.jpg": {
"a": [
320,
640
],
"m": [
1067,
1600
]
},
"obra/read02-01.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/read02-03.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/read02-04.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/recurso-2rosa.jpg": {
"a": [
320,
640
],
"m": [
985,
1600
]
},
"obra/rojo-still.jpg": {
"a": [
320,
640
],
"m": [
900,
1600
]
},
"obra/rosas-01.jpg": {
"a": [
320,
640
],
"m": [
1200,
1600
]
},
"obra/rosas-02.jpg": {
"a": [
320,
640
],
"m": [
1109,
1600
]
},
"obra/rosas-03.jpg": {
"a": [
320,
640
],
"m": [
1200,
1600
]
},
"obra/sentado-adrip.jpg": {
"a": [
320,
640
],
"m": [
1600,
1067
]
},
"obra/stickers-new-copia.jpg": {
"a": [
320,
640
],
"m": [
1132,
1600
]
},
"obra/still.jpg": {
"a": [
320,
640
],
"m": [
900,
1600
]
},
"obra/verde-still.jpg": {
"a": [
320,
640
],
"m": [
900,
1600
]
},
"obra/wip011.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/wip02.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
},
"obra/wip04.jpg": {
"a": [
320,
640
],
"m": [
1080,
1350
]
}
};
