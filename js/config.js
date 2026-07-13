const tripConfig = {
  title: "Journée entre amis",
  intro: "RDV à la gare de Baume-les-Dames avec les repas du midi déjà prêts, direction le pont pour baignade, pique-nique, jeux et Burger King le soir.",
  departureDate: "2026-07-19T10:30:00+02:00",
  dateLabel: "Dimanche 19 juillet à 10:30",
  mealScenarioDefault: "picnic",
  mealScenarios: {
    picnic: {
      label: "Sans match",
      description: "On termine après Burger King, chacun rentre chez soi."
    },
    dinner: {
      label: "Avec finale",
      description: "Après Burger King, on trouve un endroit pour regarder la finale."
    }
  },
  participants: [
    { name: "Manon", avatarColor: "violet" },
    { name: "Gaël", avatarColor: "lagoon" },
    { name: "David", avatarColor: "coral" },
    { name: "Cécilia", avatarColor: "mint" },
    { name: "Fanny", avatarColor: "sand" },
    { name: "Pierre", avatarColor: "sunset" },
    { name: "Simon", avatarColor: "blue" },
    { name: "Néo", avatarColor: "forest" },
    { name: "Luca", avatarColor: "red" },
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
    { time: "10:30", title: "Rendez-vous", detail: "Gare de Baume-les-Dames, avec les repas du midi préparés par chacun au préalable.", icon: "pin" },
    { time: "10:45", title: "Direction le pont", detail: "On part vers le spot pour arriver là-bas vers 11h15.", icon: "car" },
    { time: "11:15", title: "Arrivée au pont", detail: "Installation au bord de l'eau et premier coup de baignade.", icon: "wave" },
    { time: "12:30", title: "Pique-nique", detail: "Repas du midi sur place avec le pique-nique de chacun.", icon: "picnic" },
    { time: "14:00", title: "Baignade & jeux", detail: "Re-baignade, jeux de société et après-midi tranquille pour bien profiter.", icon: "wave" },
    { time: "18:30-19:00", title: "Retour à Baume-les-Dames", detail: "On repart du pont en direction de Baume-les-Dames.", icon: "car" },
    { time: "19:30", title: "Burger King", detail: "Repas du soir tous ensemble à Burger King.", icon: "plate" },
    { time: "Après manger", title: "Retour", detail: "Après Burger King, chacun rentre chez soi.", icon: "moon", picnicOnly: true },
    { time: "21:00", title: "Finale de la Coupe du Monde", detail: "On trouve un endroit pour regarder la finale à partir de 21h.", icon: "plate", dinnerOnly: true },
    { time: "Après le match", title: "Retour", detail: "Après la finale, chacun rentre chez soi.", icon: "moon", dinnerOnly: true }
  ],
  shoppingList: [
    "Chacun gère son pique-nique pour le midi"
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
