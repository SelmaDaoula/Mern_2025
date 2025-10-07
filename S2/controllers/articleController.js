// controllers/articleController.js

const createArticle = (req, res) => {
  const articleData = req.body;
  console.log("Données reçues par le contrôleur :", articleData);

  res.status(201).json({
    message: "Article créé avec succès via le contrôleur !",
    article: { id: Date.now(), ...articleData },
  });
};

const testApi = (req, res) => {
  res.status(200).json({
    message: "Le test depuis le contrôleur a fonctionné !",
    success: true,
  });
};

// Nouvelle fonction pour la route About
const aboutPage = (req, res) => {
  res.status(200).send("<h2>À propos : Ceci est une API de blog pour le cours MERN.</h2>");
};

// Nouvelle fonction pour la route Contact POST
const contact = (req, res) => {
  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(400).json({ error: "Veuillez fournir un email et un message." });
  }

  res.status(200).json({
    message: `Message reçu de ${email} !`,
    content: message,
  });
};

// Nouvelle fonction pour les utilisateurs factices
const getUsers = (req, res) => {
  const users = [
    { id: 1, name: "Alice", email: "alice@example.com" },
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];
  res.status(200).json(users);
};

module.exports = {
  createArticle,
  testApi,
  aboutPage,
  contact,
  getUsers,
};
