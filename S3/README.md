# TP MERN : Validation et Gestion des Erreurs

## 1. Mise en place
- Installer Node.js, Express, MongoDB.
- Créer `server.js` et connecter MongoDB avec Mongoose.
- Créer les dossiers : `models`, `controllers`, `routes`, `middleware`.
- Installer `dotenv` pour gérer les variables d’environnement.

## 2. Robustification de l’API

### Étape 1 : Validation du modèle
- Modifier `Article.js` :
  - `title` : required, trim, minlength 5, maxlength 100.
  - `content` : required, minlength 20.
  - `author` : valeur par défaut "Anonyme".
- Tester dans Postman : titre trop court → erreur 400.

### Étape 2 : Middleware de gestion d’erreurs
- Créer `middleware/errorMiddleware.js` :
  - `notFound` → gestion des routes non trouvées (404).
  - `errorHandler` → renvoie JSON standard pour toutes les erreurs.

### Étape 3 : Intégration dans `server.js`
- Importer les middlewares.
- Placer `notFound` après toutes les routes.
- Placer `errorHandler` en dernier.

### Étape 4 : Refactorisation des contrôleurs
- Installer `express-async-handler`.
- Refactoriser `articleController.js` :
  - Supprimer `try...catch`.
  - Envelopper toutes les fonctions avec `asyncHandler`.
  - Validation manuelle : vérifier que `title` et `content` existent.

### Étape 5 : Tests finaux
- Route 404 : `/api/nonexistent`.
- Validation : créer article avec titre trop court.
- Erreur d’ID : `/api/articles/123`.

## 3. Travaux complémentaires (Users)
- Créer `User.js` :
  - Validation stricte : email unique, regex pour email, minlength mot de passe.
- Refactoriser `userController.js` avec `asyncHandler`.
- Validation manuelle : vérifier email et mot de passe avant création.
- Tester : email invalide, mot de passe trop court, email déjà existant.

## 4. Résultat
- API CRUD Articles et Users fonctionnelle.
- Validation stricte côté backend.
- Gestion centralisée des erreurs.
- Code propre, contrôleurs simplifiés.
- Tests fonctionnels faits avec Postman.
