# TP API Blog avec Express

 ## Dépendances installées

Pour ce TP, nous avons installé les dépendances suivantes :

- **express** : pour créer le serveur et gérer les routes.
- **nodemon** (en développement) : pour redémarrer automatiquement le serveur à chaque modification du code.

Commandes utilisées pour les installer :  
```bash
npm install express
npm install nodemon --save-dev

##  Ce qu’on a fait

1. Création du fichier **server.js** avec Express.
2. Ajout du middleware `express.json()` pour pouvoir lire le `body` des requêtes POST.
3. Mise en place de quelques routes :

   * **GET /** → renvoie une page d’accueil.
   * **GET /api/test** → renvoie un petit message JSON.
   * **POST /api/articles** → reçoit un article (titre, contenu, auteur) et renvoie l’article avec un `id` simulé.

Exemple de code pour la route POST :

```js
app.post("/api/articles", (req, res) => {
  const articleData = req.body;
  res.status(201).json({
    message: "Article créé avec succès !",
    article: {
      id: Date.now(),
      ...articleData,
    },
  });
});
```

---

## Tests réalisés

Avec **Postman** :

* On a vérifié les routes **GET** (accueil et test).
* On a testé la route **POST /api/articles** avec un JSON comme :

  ```json
  {
    "title": "Mon premier article",
    "content": "Ceci est le contenu de mon article",
    "author": "John Doe"
  }
  ```
* La réponse contient bien notre article et un identifiant généré.

---

##  Conclusion

On a maintenant un **serveur Express qui fonctionne**, avec des routes GET et POST de base.
C’est la fondation sur laquelle on pourra construire une vraie API (about, users, contact, etc.).
