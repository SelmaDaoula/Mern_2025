# 🎬 Movie Gallery - Version Context API

Application de galerie de films développée avec React et Context API pour la gestion d'état globale.

**Projet :** TP MERN Semaine 8 - Gestion d'État Globale  
**Étudiant :** [Votre Nom]  
**École :** École Polytechnique de Sousse  
**Date :** [Date]

---

## 📋 Description

Application web permettant de rechercher des films via l'API OMDb et de gérer une liste de favoris. Cette version utilise **React Context API** pour la gestion d'état globale.

---

## ✨ Fonctionnalités

- ✅ **Recherche de films** par titre via l'API OMDb
- ✅ **Système de favoris** avec icône étoile
- ✅ **Filtrage par type** (Tous / Films / Séries / Jeux)
- ✅ **Barre latérale des favoris** avec liste détaillée
- ✅ **Interface responsive** et moderne
- ✅ **Gestion d'état globale** avec Context API

---

## 🛠️ Technologies Utilisées

- **React** 18.2.0
- **Vite** 5.0.8 (Build tool)
- **Context API** (Gestion d'état)
- **OMDb API** (Base de données de films)
- **CSS3** (Styling)

---

## 📁 Structure du Projet
```
movies-context/
├── public/
├── src/
│   ├── context/
│   │   └── MoviesContext.jsx       # Context et Provider
│   ├── components/
│   │   ├── Header.jsx              # En-tête avec badge favoris
│   │   ├── SearchBar.jsx           # Barre de recherche
│   │   ├── FilterBar.jsx           # Filtres par type
│   │   ├── MovieCard.jsx           # Carte d'un film
│   │   ├── MovieGrid.jsx           # Grille de films
│   │   └── FavoritesSidebar.jsx    # Barre latérale favoris
│   ├── styles/
│   │   └── styles.css              # Styles globaux
│   ├── App.jsx                     # Composant principal
│   └── main.jsx                    # Point d'entrée
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Installation

### Prérequis

- Node.js (version 16 ou supérieure)
- npm ou yarn

### Étapes d'installation

1. **Cloner ou télécharger le projet**

2. **Installer les dépendances**
```bash
cd movies-context
npm install
```

3. **Configurer la clé API**

   - Allez sur [OMDb API](http://www.omdbapi.com/apikey.aspx)
   - Inscrivez-vous gratuitement
   - Vérifiez votre email et récupérez votre clé API
   - Ouvrez `src/context/MoviesContext.jsx`
   - Remplacez `VOTRE_CLE_API` par votre vraie clé :
```javascript
   const API_KEY = 'votre_cle_ici';
```

4. **Lancer le projet**
```bash
npm run dev
```

5. **Ouvrir dans le navigateur**
```
http://localhost:5173
```

---

## 📖 Utilisation

### Rechercher des films

1. Entrez le titre d'un film dans la barre de recherche (ex: "Batman", "Avatar", "Matrix")
2. Cliquez sur "Rechercher" ou appuyez sur **Enter**
3. Les résultats s'affichent dans la grille

### Ajouter aux favoris

1. Cliquez sur l'icône **☆** sur une carte de film
2. L'icône devient **⭐** (dorée)
3. Le film apparaît dans la barre latérale des favoris
4. Le compteur de favoris s'incrémente dans l'en-tête

### Filtrer les résultats

1. Utilisez les boutons de filtre :
   - **🎬 Tous** : Affiche tous les résultats
   - **🎥 Films** : Affiche uniquement les films
   - **📺 Séries** : Affiche uniquement les séries
   - **🎮 Jeux** : Affiche uniquement les jeux vidéo

### Retirer des favoris

- **Option 1** : Cliquez à nouveau sur **⭐** dans la grille
- **Option 2** : Cliquez sur **✕** dans la barre latérale

---

## 🎨 Architecture Context API

### Flux de données
```
MoviesProvider (Context)
    │
    ├─► State Global
    │   ├── movies (liste des films)
    │   ├── favoritedIds (IDs des favoris)
    │   ├── filter (filtre actif)
    │   └── loading (état de chargement)
    │
    ├─► Actions
    │   ├── searchMovies()
    │   ├── toggleFavorite()
    │   ├── setFilter()
    │   ├── getFavoritedMovies()
    │   └── getFilteredMovies()
    │
    └─► Composants enfants
        ├── Header
        ├── SearchBar
        ├── FilterBar
        ├── MovieGrid
        │   └── MovieCard
        └── FavoritesSidebar
```

### Hook personnalisé : useMovies()
```javascript
const {
  movies,              // Liste des films
  favoritedIds,        // IDs des favoris
  filter,              // Filtre actif
  loading,             // État de chargement
  searchMovies,        // Fonction de recherche
  toggleFavorite,      // Basculer favori
  setFilter,           // Changer le filtre
  getFavoritedMovies,  // Obtenir les favoris
  getFilteredMovies    // Obtenir films filtrés
} = useMovies();
```

---

## 🔧 Commandes Disponibles
```bash
# Lancer en mode développement
npm run dev

# Créer un build de production
npm run build

# Prévisualiser le build de production
npm run preview
```

---

## 🎯 Points Techniques

### Avantages de Context API

✅ **Simple à comprendre** : Moins de boilerplate que Redux  
✅ **Intégré à React** : Pas de dépendance externe  
✅ **Parfait pour projets moyens** : Équilibre simplicité/puissance  

### Limitations

⚠️ **Re-renders** : Tous les consommateurs re-rendent à chaque changement  
⚠️ **Pas de DevTools** : Difficile de debugger l'état  
⚠️ **Gestion async manuelle** : Pas de middleware intégré  

---

## 🐛 Résolution des Problèmes

### Erreur : "useMovies must be used within MoviesProvider"

**Cause** : Un composant utilise `useMovies()` en dehors du Provider  
**Solution** : Vérifiez que `<App />` est bien entouré de `<MoviesProvider>` dans `main.jsx`

### Erreur : "Cannot read property 'Search' of undefined"

**Cause** : Clé API invalide ou non configurée  
**Solution** : Vérifiez votre clé API dans `MoviesContext.jsx`

### Aucun film ne s'affiche

**Cause** : Clé API incorrecte ou problème réseau  
**Solution** :
1. Vérifiez la console pour les erreurs
2. Testez votre clé API manuellement :  
   `http://www.omdbapi.com/?s=batman&apikey=VOTRE_CLE`
3. Vérifiez votre connexion internet

### L'import de useMovies est en rouge

**Cause** : Faute de frappe dans le nom du fichier  
**Solution** : Le fichier doit s'appeler exactement `MoviesContext.jsx` (pas `MoviesCOntext.jsx`)

---

## 📊 Statistiques du Code

- **Lignes de code** : ~450 lignes
- **Composants** : 7 composants
- **Complexité** : Moyenne
- **Provider requis** : Oui
- **Gestion async** : Manuelle (fetch + async/await)

---

## 🔗 Ressources

- [React Context Documentation](https://react.dev/reference/react/useContext)
- [OMDb API Documentation](http://www.omdbapi.com/)
- [Vite Documentation](https://vitejs.dev/)
- [React Hooks](https://react.dev/reference/react)

---

## 📝 Notes de Développement

### Choix techniques

1. **Context API** : Choisi pour sa simplicité et son intégration native à React
2. **Vite** : Build tool moderne et rapide
3. **Fetch API** : API native du navigateur pour les requêtes HTTP
4. **CSS pur** : Pas de dépendance CSS pour rester simple

### Améliorations possibles

- 🔄 Pagination des résultats
- 💾 Persistence des favoris dans localStorage
- 🔍 Recherche avancée avec filtres multiples
- 🎨 Thème clair/sombre
- 📱 Amélioration du responsive mobile
- ⚡ Optimisation des re-renders avec useMemo

---

## 👨‍💻 Auteur

**[Votre Nom]**  
École Polytechnique de Sousse  
TP MERN - Semaine 8 - Gestion d'État Globale

---

## 📄 Licence

Ce projet est réalisé dans un cadre pédagogique.

---

