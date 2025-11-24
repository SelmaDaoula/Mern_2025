# 🎬 Movie Gallery - Version Redux Toolkit

Application de galerie de films développée avec React et Redux Toolkit pour la gestion d'état globale.

**Projet :** TP MERN Semaine 8 - Gestion d'État Globale  
**Étudiant :** [Votre Nom]  
**École :** École Polytechnique de Sousse  
**Date :** [Date]

---

## 📋 Description

Application web permettant de rechercher des films via l'API OMDb et de gérer une liste de favoris. Cette version utilise **Redux Toolkit** pour la gestion d'état globale.

---

## ✨ Fonctionnalités

- ✅ **Recherche de films** par titre via l'API OMDb
- ✅ **Système de favoris** avec icône étoile
- ✅ **Filtrage par type** (Tous / Films / Séries / Jeux)
- ✅ **Barre latérale des favoris** avec liste détaillée
- ✅ **Interface responsive** et moderne
- ✅ **Gestion d'état globale** avec Redux Toolkit
- ✅ **Gestion des états async** avec createAsyncThunk
- ✅ **Gestion des erreurs** intégrée

---

## 🛠️ Technologies Utilisées

- **React** 18.2.0
- **Redux Toolkit** 2.0.1
- **React-Redux** 9.0.4
- **Vite** 5.0.8 (Build tool)
- **OMDb API** (Base de données de films)
- **CSS3** (Styling)

---

## 📁 Structure du Projet
```
movies-redux/
├── public/
├── src/
│   ├── store/
│   │   ├── moviesSlice.js          # Slice Redux avec reducers et thunks
│   │   └── store.js                # Configuration du store
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
│   └── main.jsx                    # Point d'entrée avec Provider
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
cd movies-redux
npm install
```

3. **Configurer la clé API**

   - Allez sur [OMDb API](http://www.omdbapi.com/apikey.aspx)
   - Inscrivez-vous gratuitement
   - Vérifiez votre email et récupérez votre clé API
   - Ouvrez `src/store/moviesSlice.js`
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

1. Entrez le titre d'un film dans la barre de recherche
2. Cliquez sur "Rechercher" ou appuyez sur **Enter**
3. Les résultats s'affichent dans la grille

### Ajouter aux favoris

1. Cliquez sur l'icône **☆** sur une carte de film
2. L'icône devient **⭐** (dorée)
3. Le film apparaît dans la barre latérale des favoris

### Filtrer les résultats

Utilisez les boutons de filtre pour afficher uniquement les films, séries ou jeux.

### Retirer des favoris

Cliquez sur **⭐** dans la grille ou sur **✕** dans la barre latérale.

---

## 🏗️ Architecture Redux Toolkit

### Structure du State
```javascript
{
  movies: {
    movies: [],           // Liste des films
    favoritedIds: [],     // IDs des favoris
    filter: 'all',        // Filtre actif
    loading: false,       // État de chargement
    error: null          // Message d'erreur
  }
}
```

### Flux de données
```
Component
   ↓
dispatch(action)
   ↓
Reducer (moviesSlice)
   ↓
Store (state global)
   ↓
useSelector
   ↓
Component (re-render)
```

### Thunks Async
```javascript
// Action async pour rechercher des films
dispatch(searchMovies('batman'))
  ↓
pending → loading = true
  ↓
fulfilled → movies = data, loading = false
  ↓
rejected → error = message, loading = false
```

### Hooks Redux utilisés
```javascript
// Lire le state
const movies = useSelector(selectMovies);

// Dispatcher une action
const dispatch = useDispatch();
dispatch(toggleFavorite(id));
```

---

## 🎯 Points Techniques Redux

### Avantages

✅ **createAsyncThunk** : Gestion élégante des actions async  
✅ **Selectors** : Calcul optimisé des données dérivées  
✅ **DevTools** : Redux DevTools pour debugger facilement  
✅ **Immer** : Mutations "directes" du state (immutabilité automatique)  
✅ **TypeScript ready** : Excellent support TypeScript  
✅ **Scalable** : Parfait pour grandes applications  

### Nouveautés Redux Toolkit

- **createSlice** : Réduit le boilerplate (plus besoin de switch/case)
- **createAsyncThunk** : Simplifie les actions async
- **configureStore** : Configuration automatique du store
- **Immer intégré** : Écriture de code "mutant" qui reste immutable

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

## 🐛 Résolution des Problèmes

### Erreur : "could not find react-redux context value"

**Cause** : App n'est pas entouré du Provider  
**Solution** : Vérifiez que `<App />` est dans `<Provider store={store}>` dans `main.jsx`

### Erreur : "Cannot read property 'movies' of undefined"

**Cause** : Le reducer n'est pas configuré correctement dans le store  
**Solution** : Vérifiez `store.js` → `reducer: { movies: moviesReducer }`

### Redux DevTools ne fonctionne pas

**Solution** : Installez l'extension Redux DevTools dans votre navigateur

### Aucun film ne s'affiche

**Cause** : Clé API incorrecte  
**Solution** : Vérifiez votre clé dans `moviesSlice.js`

---

## 📊 Statistiques du Code

- **Lignes de code** : ~550 lignes
- **Composants** : 7 composants
- **Complexité** : Haute
- **Provider requis** : Oui
- **Gestion async** : createAsyncThunk (intégré)
- **Boilerplate** : Moyen (réduit par Redux Toolkit)

---

## 🔍 Différences avec Context API

| Aspect | Context API | Redux Toolkit |
|--------|-------------|---------------|
| Setup | Simple | Plus complexe |
| Async | Manuel (fetch) | createAsyncThunk |
| DevTools | ❌ | ✅ |
| Performance | Re-renders fréquents | Optimisé |
| Scalabilité | Petits projets | Grandes apps |
| Courbe d'apprentissage | Facile | Moyenne |

---

## 🔗 Ressources

- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React-Redux Hooks](https://react-redux.js.org/api/hooks)
- [createAsyncThunk](https://redux-toolkit.js.org/api/createAsyncThunk)
- [Redux DevTools](https://github.com/reduxjs/redux-devtools)
- [OMDb API](http://www.omdbapi.com/)

---

## 📝 Notes de Développement

### Pourquoi Redux Toolkit ?

1. **Moins de boilerplate** que Redux classique
2. **createAsyncThunk** : gestion async simplifiée
3. **Immer intégré** : code plus lisible
4. **DevTools puissants** : meilleur debugging
5. **Standard de l'industrie** : beaucoup d'offres d'emploi

### Quand utiliser Redux ?

- ✅ Applications complexes avec beaucoup d'état partagé
- ✅ État nécessitant une logique métier complexe
- ✅ Besoin de DevTools avancés
- ✅ Équipe qui connaît Redux

### Quand NE PAS utiliser Redux ?

- ❌ Petites applications simples
- ❌ État local suffisant
- ❌ Projet avec deadline serrée (préférer Zustand)


