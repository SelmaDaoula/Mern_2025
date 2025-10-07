// controllers/userController.js

// Fonction pour renvoyer tous les utilisateurs factices
const getAllUsers = (req, res) => {
  const users = [
    { id: 1, nom: "Selma", email: "selma@example.com" },
    { id: 2, nom: "Ali", email: "ali@example.com" },
    { id: 3, nom: "Mouna", email: "mouna@example.com" },
  ];

  res.status(200).json({
    message: "Liste des utilisateurs récupérée avec succès",
    users,
  });
};



// Fonction pour créer un utilisateur
const createUser = (req, res) => {
  const userData = req.body;
  console.log("Données reçues par le contrôleur :", userData);

  res.status(201).json({
    message: "Utilisateur créé avec succès !",
    user: { id: Date.now(), ...userData },
  });
};

module.exports = {
  getAllUsers,
  createUser,
};
