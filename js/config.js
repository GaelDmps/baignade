const tripConfig = {
  title: "Journée entre amis",
  intro: "RDV à Baume-les-Dames, courses, puis direction le pont pour sauter dans l'eau, pique-nique et aprem baignade entre amis.",
  departureDate: "2026-07-18T10:00:00+02:00",
  dateLabel: "Dimanche 19 Juillet",
  mealScenarioDefault: "picnic",
  mealScenarios: {
    picnic: {
      label: "Retour l'après-midi",
      description: "On rentre en fin d'après-midi après la baignade et les jeux."
    },
    dinner: {
      label: "Repas du soir ensemble",
      description: "On prolonge la journée avec un repas tranquille tous ensemble."
    }
  },
  participants: [
    { name: "Gaël", avatarColor: "lagoon" },
    { name: "Manon", avatarColor: "coral" },
    { name: "Cécilia", avatarColor: "mint" },
    { name: "Fanny", avatarColor: "sand" },
    { name: "Pierre", avatarColor: "sunset" },
    { name: "Simon", avatarColor: "blue" }
  ],
  location: {
    name: "Spot au pont",
    address: "Bord de l'eau — coin pour se poser, avec un pont pour sauter dans l'eau.",
    mapsUrl: "https://www.google.com/maps?q=47.48330938727526,6.308412946638873",
    coordinates: {
      lat: 47.48330938727526,
      lng: 6.308412946638873
    }
  },
  schedule: [
    { time: "10:00", title: "Rendez-vous", detail: "Gare de Baume-les-Dames.", icon: "pin" },
    { time: "10:30", title: "Courses", detail: "Achat du pique-nique et des boissons.", icon: "basket" },
    { time: "11:15", title: "Direction le pont", detail: "On part vers le spot au bord de l'eau.", icon: "car" },
    { time: "12:30", title: "Pique-nique", detail: "Repas sur place.", icon: "picnic" },
    { time: "14:00", title: "Baignade & jeux", detail: "Sauts depuis le pont, baignade et jeux l'après-midi.", icon: "wave" },
    { time: "19:00", title: "Repas du soir", detail: "Repas tranquille tous ensemble", icon: "plate", dinnerOnly: true },
    { time: "21:00", title: "Soirée Match", detail: "On regarde la finale de la Coupe du Monde", icon: "plate", dinnerOnly: true },
    { time: "23:00-00:00", title: "Retour", detail: "Retour après le dîner et le match.", icon: "moon", dinnerOnly: true },
    { time: "18:00", title: "Retour", detail: "Retour en fin d'après-midi.", icon: "moon", picnicOnly: true }
  ],
  shoppingList: [
    "Pain",
    "Boissons",
    "Chips",
    "Charcuterie",
    "Fromage",
    "Fruits",
    "Desserts",
    "Glaçons"
  ],
  rememberList: [
    "Serviette",
    "Maillot",
    "Crème solaire",
    "Casquette",
    "Lunettes de soleil",
    "Chaussures pour aller dans l'eau",
    "Enceinte Bluetooth",
    "Glacière",
    "Eau",
    "Jeux (jeu de cartes, Uno ...)",
    "Chargeur portable"
  ],
  playlist: {
    title: "Playlist de la journée",
    description: "La bande-son pour l'ambiance au bord de l'eau.",
    ctaLabel: "Ouvrir sur Spotify",
    spotifyUrl: "https://open.spotify.com/playlist/34WywiVcXlg0nruC54GUto",
    spotifyEmbedUrl: "https://open.spotify.com/embed/playlist/34WywiVcXlg0nruC54GUto?utm_source=generator"
  },
  navigation: [
    { id: "programme", label: "Programme", icon: "calendar" },
    { id: "participants", label: "Equipe", icon: "users" },
    { id: "lieu", label: "Lieu", icon: "pin" },
    { id: "courses", label: "Courses", icon: "basket" },
    { id: "memo", label: "Memo", icon: "check" }
  ]
};
