# 🎬 Movie Gallery - Version Zustand

Application de galerie de films développée avec React et Zustand pour la gestion d'état globale.

**Projet :** TP MERN Semaine 8 - Gestion d'État Globale  
**Étudiant :** [Votre Nom]  
**École :** École Polytechnique de Sousse  
**Date :** [Date]

---

## 📋 Description

Application web permettant de rechercher des films via l'API OMDb et de gérer une liste de favoris. Cette version utilise **Zustand** pour la gestion d'état globale.

---

## ✨ Fonctionnalités

- ✅ **Recherche de films** par titre via l'API OMDb
- ✅ **Système de favoris** avec icône étoile
- ✅ **Filtrage par type** (Tous / Films / Séries / Jeux)
- ✅ **Barre latérale des favoris** avec liste détaillée
- ✅ **Interface responsive** et moderne
- ✅ **Gestion d'état globale** avec Zustand
- ✅ **Pas de Provider** nécessaire !
- ✅ **Async/await natif** intégré

---

## 🛠️ Technologies Utilisées

- **React** 18.2.0
- **Zustand** 4.4.7
- **Vite** 5.0.8 (Build tool)
- **OMDb API** (Base de données de films)
- **CSS3** (Styling)

---

## 📁 Structure du Projet
```
movies-zustand/
├── public/
├── src/
│   ├── store/
│   │   └── useMoviesStore.js        # Store Zustand (tout en un)
│   ├── components/
│   │   ├── Header.jsx               # En-tête avec badge favoris
│   │   ├── SearchBar.jsx            # Barre de recherche
│   │   ├── FilterBar.jsx            # Filtres par type
│   │   ├── MovieCard.jsx            # Carte d'un film
│   │   ├── MovieGrid.jsx            # Grille de films
│   │   └── FavoritesSidebar.jsx     # Barre latérale favoris
│   ├── styles/
│   │   └── styles.css               # Styles globaux
│   ├── App.jsx                      # Composant principal
│   └── main.jsx                     # Point d'entrée (PAS de Provider!)
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
cd movies-zustand
npm install
```

3. **Configurer la clé API**

   - Allez sur [OMDb API](http://www.omdbapi.com/apikey.aspx)
   - Inscrivez-vous gratuitement
   - Vérifiez votre email et récupérez votre clé API
   - Ouvrez `src/store/useMoviesStore.js`
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

## 🏗️ Architecture Zustand

### Store unique et simple
```javascript
const useMoviesStore = create((set, get) => ({
  // State
  movies: [],
  favoritedIds: [],
  filter: 'all',
  loading: false,
  
  // Actions
  searchMovies: async (term) => { ... },
  toggleFavorite: (id) => { ... },
  setFilter: (filter) => { ... },
  
  // Selectors (computed)
  getFavoritedMovies: () => { ... },
  getFilteredMovies: () => { ... }
}));
```

### Utilisation dans les composants
```javascript
// Sélection granulaire (optimal)
const movies = useMoviesStore(state => state.movies);
const searchMovies = useMoviesStore(state => state.searchMovies);

// Ou multiple
const { movies, loading, searchMovies } = useMoviesStore();
```

### Flux de données
```
Component
   ↓
useMoviesStore(selector)
   ↓
Store Zustand
   ↓
Action modifie le state
   ↓
Re-render automatique
```

---

## 🎯 Points Techniques Zustand

### Avantages majeurs

✅ **Pas de Provider** : Aucun wrapper nécessaire  
✅ **Le plus concis** : ~90 lignes de code total  
✅ **Async natif** : async/await directement dans le store  
✅ **Performance** : Re-renders optimisés automatiquement  
✅ **Simple** : Courbe d'apprentissage très facile  
✅ **TypeScript** : Excellent support TypeScript  
✅ **Flexible** : Middleware disponibles si besoin  
✅ **Pas de boilerplate** : Code minimal  

### Comparaison taille du code
```
Context API  : ~120 lignes
Redux Toolkit: ~150 lignes
Zustand      : ~90 lignes  ← Le plus compact !
```

### Middleware disponibles (optionnel)
```javascript
import { persist, devtools } from 'zustand/middleware';

// Persistance localStorage
const useStore = create(
  persist(
    (set) => ({ ... }),
    { name: 'movies-storage' }
  )
);

// DevTools
const useStore = create(
  devtools((set) => ({ ... }))
);
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

## 🐛 Résolution des Problèmes

### Le store n'est pas accessible

**Cause** : Mauvais import  
**Solution** : Vérifiez `import useMoviesStore from './store/useMoviesStore'`

### Les composants ne se mettent pas à jour

**Cause** : Sélecteur mal utilisé  
**Solution** : 
```javascript
// ❌ Mauvais
const store = useMoviesStore();

// ✅ Bon
const movies = useMoviesStore(state => state.movies);
```

### Aucun film ne s'affiche

**Cause** : Clé API incorrecte  
**Solution** : Vérifiez votre clé dans `useMoviesStore.js`

---

## 📊 Statistiques du Code

- **Lignes de code** : ~450 lignes (le plus compact !)
- **Fichiers** : 9 fichiers
- **Composants** : 7 composants
- **Complexité** : Faible
- **Provider requis** : ❌ NON !
- **Gestion async** : Natif (async/await)
- **Boilerplate** : Minimal

---

## 🔍 Comparaison avec les autres solutions

| Aspect | Context | Redux | Zustand |
|--------|---------|-------|---------|
| **Setup** | Moyen | Complexe | Simple |
| **Provider** | ✅ Requis | ✅ Requis | ❌ Pas besoin |
| **Boilerplate** | Moyen | Important | Minimal |
| **Async** | Manuel | createAsyncThunk | Natif |
| **DevTools** | ❌ | ✅ | ✅ (avec middleware) |
| **Performance** | Moyenne | Excellente | Excellente |
| **Courbe d'apprentissage** | Facile | Difficile | Très facile |
| **Taille bundle** | 0kb (natif) | ~5kb | ~1kb |
| **Lignes de code** | ~120 | ~150 | ~90 |

---

## 💡 Pourquoi Zustand ?

### Points forts

1. **Simplicité extrême** : Pas de Provider, pas de boilerplate
2. **Performance** : Re-renders optimisés par défaut
3. **Flexibilité** : Facile d'ajouter des middleware
4. **Taille** : Seulement 1kb gzippé
5. **DX (Developer Experience)** : Code très lisible

### Quand utiliser Zustand ?

- ✅ **Nouveaux projets** de toute taille
- ✅ **Petits à moyens projets**
- ✅ **Prototypes rapides**
- ✅ **Quand vous voulez de la simplicité**
- ✅ **Migration depuis Context API**

### Quand préférer autre chose ?

- Redux : Si vous avez besoin de DevTools avancés et d'un écosystème riche
- Context : Si vous ne voulez aucune dépendance externe
- MobX : Si vous préférez la programmation réactive

---

## 🔗 Ressources

- [Zustand Documentation](https://zustand-demo.pmnd.rs/)
- [Zustand GitHub](https://github.com/pmndrs/zustand)
- [Zustand Middleware](https://github.com/pmndrs/zustand#middleware)
- [OMDb API](http://www.omdbapi.com/)

---

## 📝 Notes de Développement

### Philosophie Zustand

Zustand suit le principe **KISS** (Keep It Simple, Stupid) :
- Un seul store (ou plusieurs si besoin)
- Pas de Provider
- API minimale
- Performances optimales par défaut

### Pattern recommandé
```javascript
// ✅ Bon : Sélection granulaire
const movies = useMoviesStore(state => state.movies);
const loading = useMoviesStore(state => state.loading);

// ❌ À éviter : Sélectionner tout
const store = useMoviesStore();
```

### Async/await simplifié

Pas besoin de thunks ou de middleware complexe :
```javascript
searchMovies: async (term) => {
  set({ loading: true });
  const data = await fetch(...);
  set({ movies: data, loading: false });
}
```

---

## 🎓 Ce que vous avez appris

- ✅ Créer un store Zustand
- ✅ Gérer des actions async
- ✅ Utiliser des selectors
- ✅ Optimiser les performances
- ✅ Comprendre la différence avec Context et Redux

---

## 👨‍💻 Auteur

**[Votre Nom]**  
École Polytechnique de Sousse  
TP MERN - Semaine 8 - Gestion d'État Globale

---

## 📄 Licence

Ce projet est réalisé dans un cadre pédagogique.
