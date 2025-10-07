require('dotenv').config();
const express = require("express");
const connectDB = require( './config/db') ;
connectDB();
const app = express();
const PORT = 4000;
const articleRoutes = require ('./routes/articleRoutes');
const userRoutes = require ('./routes/userRoutes');

app.use(express.json());

// --- Routes GET ---
app.get("/", (req, res) => {
  res.status(200).send("<h1>Page d'accueil de notre API de Blog !</h1>");
});


// --- Route POST pour créer un article ---
app. use('/api/articles', articleRoutes);

app.use("/api/users", userRoutes);

// --- Lancer le serveur ---
app.listen(PORT, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});
