// 1. Charger les variables d'environnement en premier
require('dotenv').config(); 

// 2. Importer Express
const express = require('express'); 

// 3. Importer la fonction de connexion à la base de données
const connectDB = require('./config/db'); 

// 4. Connexion à MongoDB
connectDB(); 

// 5. Initialiser l'application Express
const app = express(); 
const PORT = process.env.PORT || 3000; 

// 6. Middlewares
app.use(express.json()); // pour parser le JSON
// ici tu peux ajouter CORS ou autres middlewares si besoin
// app.use(cors());

// 7. Routes
// Exemple : si tu as un fichier voyageRoutes.js
const voyageRoutes = require('./routes/voyageRoutes');
app.use('/api/voyages', voyageRoutes);

const reservationRoutes = require('./routes/reservationRoutes');
app.use('/api/reservations', reservationRoutes);


// 8. Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});
