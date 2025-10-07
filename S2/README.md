## Architecture du projet
À la racine, nous avons structuré le projet de manière claire :  

/controllers
/routes
server.js

markdown
Copier le code

- **controllers/** : contient toutes les fonctions qui gèrent la logique métier (articles, utilisateurs).  
- **routes/** : contient les routeurs qui définissent les endpoints et associent les routes aux fonctions des contrôleurs.  
- **server.js** : fichier principal qui configure Express, lie les routeurs et démarre le serveur.  

Cette séparation permet de :  
- faciliter la maintenance et la lecture du code  
- isoler la logique métier des routes  
- ajouter facilement de nouvelles fonctionnalités  

---

## Contrôleurs

### Articles
- `createArticle` : récupère les données depuis `req.body` et crée un article factice avec un ID unique.  
- `testApi` : route de test pour vérifier que le serveur et les routes fonctionnent.  

### Utilisateurs
- `getAllUsers` : retourne un tableau d’utilisateurs factices pour simuler une base de données.  
- `createUser` : crée un utilisateur à partir des données du corps de la requête et renvoie un message de succès.  

Ces contrôleurs **isolent la logique métier**, ce qui rend le code plus clair et permet de réutiliser facilement les fonctions dans différents contextes.

---

## Routeurs

### Articles
- `GET /api/articles/test` → testApi  
- `POST /api/articles` → createArticle  
Le routeur centralise toutes les routes liées aux articles pour simplifier la gestion et éviter d’avoir tout mélangé dans `server.js`.

### Utilisateurs
- `GET /api/users` → getAllUsers  
- `POST /api/users` → createUser  
Chaque routeur gère une ressource distincte, ce qui permet une organisation modulable et prête à évoluer.

---

## Serveur principal (`server.js`)
- Configuration du serveur Express.  
- Middleware `express.json()` pour parser le JSON des requêtes.  
- Liaison des routeurs :  
  - `app.use("/api/articles", articleRoutes)`  
  - `app.use("/api/users", userRoutes)`  
- Route racine `GET /` pour afficher une page d’accueil simple.  

Le serveur devient ainsi **le point d’entrée**, qui orchestre l’ensemble du projet sans contenir de logique métier.

---

## Tests effectués
- **GET /** → affiche la page d’accueil  
- **GET /api/articles/test** → test du contrôleur articles  
- **POST /api/articles** → création d’un article via JSON  
- **GET /api/users** → liste d’utilisateurs factices  
- **POST /api/users** → création d’un utilisateur via JSON  

Tous les tests ont fonctionné correctement, ce qui montre que la refactorisation **n’a pas modifié le comportement de l’API**, mais améliore son organisation.

---