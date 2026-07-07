# Journee entre amis

Petite application web mobile-first pour organiser une journee au bord de l'eau entre 6 amis. Le projet utilise uniquement HTML5, CSS3 et JavaScript ES6, sans framework ni dependance.

## Structure

```text
/
|-- index.html
|-- server.js
|-- css/
|   |-- variables.css
|   |-- reset.css
|   |-- animations.css
|   |-- components.css
|   |-- layout.css
|   `-- style.css
|-- js/
|   |-- app.js
|   |-- config.js
|   |-- ui.js
|   |-- storage.js
|   |-- animations.js
|   `-- utils.js
|-- assets/
|   |-- images/
|   |-- icons/
|   `-- illustrations/
`-- README.md
```

## Modifier les donnees

Toutes les informations principales sont dans `js/config.js`.

- Date de depart : modifier `departureDate`.
- Texte d'accueil : modifier `intro`.
- Participants : ajouter ou modifier les objets dans `participants`.
- Horaires : modifier les objets dans `schedule`.
- Voitures : modifier `transport`.
- Lieu, adresse, distance, duree et Google Maps : modifier `location`.
- Courses : modifier `shoppingList`.
- A ne pas oublier : modifier `rememberList`.
- Qui apporte quoi : modifier `bringItems`.
- Meteo fictive : modifier `weather`.
- Playlist : modifier `playlist`.

## Scenarios de repas

Le composant de choix est branche sur `mealScenarios`.

Dans `schedule`, utiliser :

- `dinnerOnly: true` pour afficher une etape uniquement avec le scenario "pique-nique + repas du soir".
- `picnicOnly: true` pour afficher une etape uniquement avec le scenario "pique-nique uniquement".

Le choix de scenario est sauvegarde dans le LocalStorage du navigateur.

## Checklists

Les sections "Courses" et "A ne pas oublier" sont sauvegardees automatiquement dans le LocalStorage. Les libelles viennent de `shoppingList` et `rememberList` dans `js/config.js`.

## Remplacer les images

L'image principale est `assets/images/hero-water.png`. Elle est appelee dans `index.html`. Pour la remplacer, garder le meme nom ou modifier le chemin dans la balise `<img>` du hero.

Les dossiers `assets/icons` et `assets/illustrations` sont prets pour recevoir de nouveaux fichiers si besoin.

## Ajouter une API meteo

La carte meteo est rendue par `renderWeather()` dans `js/ui.js`, a partir de `weather` dans `js/config.js`.

Pour brancher une API plus tard :

1. Creer une fonction de recuperation dans un module dedie, par exemple `js/weather-api.js`.
2. Remplacer ou enrichir `tripConfig.weather` au chargement.
3. Appeler `renderWeather()` avec les donnees reelles.

## Integrer une carte

L'emplacement est dans la section `Lieu`, rendu par `renderLocation()` dans `js/ui.js`.

Pour Google Maps ou OpenStreetMap, remplacer le contenu de `.map-placeholder` par une iframe ou un composant de carte, puis ajuster `location.mapEmbedLabel` dans `js/config.js`.

## Ajouter une playlist Spotify

Modifier `playlist.spotifyUrl` dans `js/config.js`, puis remplacer le bouton par une iframe Spotify dans `renderPlaylist()` si vous voulez afficher le player directement.

## Lancer le site

Le site fonctionne avec un serveur statique simple. Depuis le dossier du projet, lancer :

```bash
node server.js
```

Puis ouvrir `http://127.0.0.1:8010`.
