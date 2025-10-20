require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// Connexion à la base de données
connectDB();

const app = express();
const PORT = process.env.PORT || 4000;

// --- Middlewares globaux ---
app.use(express.json());

// --- Import des routes ---
const articleRoutes = require("./routes/articleRoutes");
const userRoutes = require("./routes/userRoutes");

// --- Routes principales ---
app.get("/", (req, res) => {
  res.status(200).send("<h1>Page d'accueil de notre API de Blog !</h1>");
});

app.use("/api/articles", articleRoutes);
app.use("/api/users", userRoutes);

// --- Middlewares de gestion d’erreurs ---
// 1️⃣ Si aucune route ne correspond
app.use(notFound);

// 2️⃣ Middleware global pour gérer toutes les erreurs
app.use(errorHandler);

// --- Démarrage du serveur ---
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
