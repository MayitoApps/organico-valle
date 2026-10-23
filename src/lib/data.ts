export interface RoomData {
  id: string;
  slug: string;
  name: string;
  subtitle: string;
  description: string;
  price: string;
  capacity: string;
  bedType: string;
  features: string[];
  image: string;
  gallery: string[];
  bookingType: import("./whatsapp").BookingServiceType;
}

export interface SpaceData {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface MomentData {
  id: string;
  category: "rebeldia" | "compartir" | "intimos";
  categoryTitle: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  bookingType: import("./whatsapp").BookingServiceType;
  items: string[];
}

export const HOTEL_INFO = {
  name: "Orgánico Hotel Boutique Valle de Bravo",
  tagline: "Así se siente el lago, Así se siente Orgánico Valle",
  description:
    "El hotel boutique donde naturaleza, bienestar y experiencias se encuentran en Valle de Bravo. Un refugio de lujo rústico con 40 suites privadas, alberca, restaurante Milagro, Bar Bienaventurado, capilla, jardines y espacios pet-friendly a 5 minutos del centro de Valle de Bravo.",
  address: "Carretera del Manguito 121, Sin Nombre, 51200 Valle de Bravo, Estado de México",
  coordinates: {
    lat: 19.1936,
    lng: -100.1317,
  },
  phone: "(55) 9691-0966",
  businessPhones: [
    { num1: "(55) 9691-0966", tel1: "+525596910966", num2: "(55) 9696-9073", tel2: "+525596969073" },
    { num1: "(55) 5645-5347", tel1: "+525556455347", num2: "(55) 5573-7822", tel2: "+525555737822" },
  ],
  whatsapp: "525574555091",
  bookingUrl: "https://booking.easy-rez.com/organico-hotel-boutique-valle-de-bravo/es/home",
  social: {
    instagram: "https://www.instagram.com/organicohotelboutique_valle",
    facebook: "https://www.facebook.com/profile.php?id=100089703597990",
  },
  partners: {
    grupoOrganicoUrl: "https://www.gohb.com.mx/",
    origenSpaUrl: "https://www.origencentroholisticoyspa.com/",
  },
  dayPass: {
    price: "$1,200.00 MXN por persona",
    note: "Menores de 6 años no pagan",
    includes: [
      "Desayuno completo a la carta o buffet",
      "Bebida de cortesía de bienvenida",
      "Acceso a la alberca",
      "Acceso a Casa Club y jardines botánicos",
      "Cinema Orgánico al aire libre (sujeto a disponibilidad)",
    ],
  },
};

export const ROOMS: RoomData[] = [
  {
    id: "suite-master",
    slug: "suite-master",
    name: "Suite Master",
    subtitle: "Terraza privada, salita de estar y máximo confort",
    description:
      "Las habitaciones Master cuentan con terraza privada, salita de estar, regadera, tele con cable e internet, caja fuerte, 2 botellas con agua, 2 refrescos, toallas, batas y un pequeño closet.",
    price: "$5,220.00 MXN",
    capacity: "2 personas (Adultos)",
    bedType: "1 Cama King Size",
    features: [
      "Terraza privada",
      "Salita de estar",
      "Tele con cable e internet",
      "Caja fuerte",
      "Regadera",
      "2 botellas con agua y 2 refrescos",
      "Toallas y batas",
      "Pequeño closet",
    ],
    image: "/images/suites/master-1.webp",
    gallery: [
      "/images/suites/master-1.webp",
      "/images/suites/master-2.webp",
      "/images/suites/master-3.webp",
    ],
    bookingType: "master_suite",
  },
  {
    id: "suite-premium",
    slug: "suite-premium",
    name: "Suite Premium",
    subtitle: "Confort contemporáneo y balcón con vistas a los jardines",
    description:
      "Diseñada para reconectar con el silencio. Su armonía entre maderas, fibras naturales y luz filtrada crea el ambiente ideal para una estancia en pareja o un descanso individual regenerador tras un día explorando el lago.",
    price: "$4,060.00 MXN",
    capacity: "2 personas",
    bedType: "1 Cama King Size o 2 Camas Queen",
    features: [
      "Balcón privado hacia jardines interiores",
      "Iluminación cálida y acústica aislada",
      "Mobiliario de diseño y sillones de piel",
      "Amenidades biodegradables exclusivas",
      "Acceso directo a senderos del hotel",
      "Pet friendly con cargo de bienvenida",
    ],
    image: "/images/suites/premium-1.webp",
    gallery: [
      "/images/suites/premium-1.webp",
      "/images/suites/premium-2.webp",
      "/images/suites/premium-3.webp",
    ],
    bookingType: "premium_suite",
  },
  {
    id: "suite-familiar",
    slug: "suite-familiar",
    name: "Suite Familiar",
    subtitle: "Espacio amplio para compartir en familia",
    description:
      "Las habitaciones familiares cuentan con 1 cama king size con baño individual, una salita de estar, una litera con cama matrimonial e individual, no tiene vista, algunas cuentan con aire acondicionado.",
    price: "$6,380.00 MXN",
    capacity: "Hasta 5 personas",
    bedType: "1 Cama King Size + 1 Litera (Matrimonial e Individual)",
    features: [
      "1 cama King Size con baño individual",
      "Litera con cama matrimonial e individual",
      "Salita de estar",
      "Algunas cuentan con aire acondicionado",
      "Habitación sin vista exterior",
      "Tele con cable e internet",
      "Toallas y amenidades",
      "100% Pet friendly",
    ],
    image: "/images/suites/familiar-1.webp",
    gallery: [
      "/images/suites/familiar-1.webp",
      "/images/suites/familiar-2.webp",
      "/images/suites/familiar-3.webp",
    ],
    bookingType: "familiar_suite",
  },
];

export const SPACES: SpaceData[] = [
  {
    id: "alberca",
    name: "Alberca & Asoleadero",
    category: "Bienestar",
    tagline: "El Agua en Armonía",
    description:
      "Nuestra alberca está enmarcada por la exuberante vegetación de Valle de Bravo. Un espacio de relajación pura para tomar el sol, disfrutar un coctel de autor o sumergirte bajo el cielo azul.",
    image: "/images/espacios/alberca-1.webp",
    highlights: ["Alberca al aire libre", "Asoleadero con camastros", "Servicio de bebidas y snacks"],
  },
  {
    id: "restaurante-milagro",
    name: "Restaurante Milagro",
    category: "Gastronomía",
    tagline: "Sabores que se disfrutan sin prisas",
    description:
      "Fusión culinaria que honra los ingredientes locales, recetas reconfortantes de campo y brunch de fin de semana con vistas espectaculares.",
    image: "/images/restaurante/milagro-1.webp",
    highlights: ["Cocina de origen", "Brunch los fines de semana", "Cenas románticas privadas"],
  },
  {
    id: "bar-bienaventurado",
    name: "Bar Bienaventurado & Fogateros",
    category: "Mixología",
    tagline: "Cocteles con alma, música, karaoke y fogateros",
    description:
      "Mixología botánica de autor, veladas nocturnas junto al fuego, música en vivo y noches de karaoke para cantar entre amigos.",
    image: "/images/mixologia/bar-1.webp",
    highlights: ["Mixología artesanal", "Música en vivo & Karaoke", "Fogateros al aire libre"],
  },
  {
    id: "casa-club",
    name: "Casa Club",
    category: "Convivencia",
    tagline: "Un rincón para disfrutar a tu propio ritmo",
    description:
      "Mesa de billar, juegos de mesa, biblioteca curada, póker, chimenea y barra de snacks en un entorno que se siente como en casa pero mucho mejor.",
    image: "/images/espacios/casa-club.webp",
    highlights: ["Mesa de billar", "Librería & juegos", "Espacio lounge cálido"],
  },
  {
    id: "capilla",
    name: "La Capilla",
    category: "Ceremonias",
    tagline: "Mística y espiritualidad entre los árboles",
    description:
      "Un espacio consagrado de serenidad arquitectónica ideal para bodas íntimas, bendiciones familiares y momentos de introspección.",
    image: "/images/espacios/capilla.webp",
    highlights: ["Capilla consagrada", "Bodas íntimas", "Ceremonias espirituales"],
  },
  {
    id: "salon-porvenir",
    name: "Salón Porvenir",
    category: "Eventos",
    tagline: "El escenario donde las grandes ideas cobran vida",
    description:
      "Salón versátil para convenciones, retiros de bienestar, juntas ejecutivas o banquetes privados, equipado con tecnología audiovisual completa.",
    image: "/images/espacios/salon-porvenir.webp",
    highlights: ["Capacidad modular", "Audio y proyección", "Iluminación natural"],
  },
  {
    id: "jardines",
    name: "Jardines & Senderos",
    category: "Naturaleza",
    tagline: "Más de 6 hectáreas de bosque y aire puro",
    description:
      "Jardín Casa Antigua, Jardín Casa Nueva y Jardín Casa Club: senderos empedrados y rincones verdes diseñados como una extensión viva de la sierra de Valle de Bravo.",
    image: "/images/espacios/jardin-antigua.webp",
    highlights: ["Más de 6 hectáreas", "Fogateros al aire libre", "Pet friendly"],
  },
];

export const MOMENTS: MomentData[] = [
  {
    id: "momentos-rebeldia",
    category: "rebeldia",
    categoryTitle: "Momentos de Rebeldía",
    title: "Aventura & Adrenalina en Valle",
    subtitle: "Porque a veces lo mejor que puedes hacer es salir de la rutina",
    description:
      "Conecta con la energía viva de Valle de Bravo a través de experiencias emocionantes: vuelos en parapente sobre el lago, rutas en cuatrimotos y RZR entre los senderos boscosos, kayak, paddle board y avistamiento de mariposas monarca en temporada.",
    image: "/images/momentos/rebeldia-parapente.webp",
    bookingType: "parapente",
    items: [
      "Vuelo en Parapente sobre el Lago y el Peñón",
      "Rutas Guiadas en Cuatrimoto y RZR",
      "Kayak y Paddle Board en el Lago de Valle",
      "Senderismo y Trekking por Miradores Naturales",
      "Temporada de Mariposa Monarca y Búsqueda de Hongos Silvestres",
    ],
  },
  {
    id: "momentos-compartir",
    category: "compartir",
    categoryTitle: "Momentos Para Compartir",
    title: "Sobremesa, Fuego y Amistad",
    subtitle: "Los mejores recuerdos siempre suceden alrededor de una mesa",
    description:
      "Crea memorias entrañables con quienes más quieres: fogatadas nocturnas con bombones e historias bajo las estrellas, noches de karaoke y música en vivo en el bar y celebraciones especiales entre amigos.",
    image: "/images/momentos/compartir-fogata.webp",
    bookingType: "fogatada",
    items: [
      "Fogatada Entre Amigos con bombones y fogata al aire libre",
      "Noches de Música en Vivo y Karaoke en Bar Bienaventurado",
      "Tardes de Picnic en los Jardines del Hotel",
      "Brunch Dominical con Música en Vivo",
    ],
  },
  {
    id: "momentos-intimos",
    category: "intimos",
    categoryTitle: "Momentos Íntimos",
    title: "Amor, Silencio y Conexión",
    subtitle: "Arquitectos de tu historia de amor",
    description:
      "Cenas privadas a la luz de las velas bajo el manto estelar, ambientaciones románticas para aniversarios o pedidas de mano con menú de autor diseñado exclusivamente para dos.",
    image: "/images/momentos/intimos-cena.webp",
    bookingType: "cena_romantica",
    items: [
      "Cena Romántica Privada en Jardín Secreto",
      "Montaje Exclusivo de Pedida de Mano",
      "Rituales de Pareja en conexión con la Naturaleza",
      "Desayuno en la Cama con Champaña y Flores",
    ],
  },
];
