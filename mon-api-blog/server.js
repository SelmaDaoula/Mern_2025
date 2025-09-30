const express = require("express");
const app = express();
const PORT = 3000;

// --- Middleware pour parser le JSON ---
// Cette ligne DOIT être placée AVANT la définition des routes POST
app.use(express.json());

// --- Routes GET ---
app.get("/", (req, res) => {
  res.status(200).send("<h1>Page d'accueil de notre API de Blog !</h1>");
});

app.get("/api/test", (req, res) => {
  res.status(200).json({
    message: "Le test a fonctionné !",
    success: true,
  });
});

// --- Route POST pour créer un article ---
app.post("/api/articles", (req, res) => {
  // Grâce à express.json(), req.body contient les données envoyées par le client
  const articleData = req.body;
  console.log("Données reçues :", articleData);

  // On simule la création d’un article en renvoyant les données reçues
  res.status(201).json({
    message: "Article créé avec succès !",
    article: {
      id: Date.now(), // génération d’un ID simulé
      ...articleData,
    },
  });
});

// --- Lancer le serveur ---
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
