const asyncHandler = require("express-async-handler");
const User = require("../models/UserModel");

// Créer un utilisateur
const createUser = asyncHandler(async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Veuillez fournir un email et un mot de passe.");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Email déjà utilisé.");
  }

  const user = await User.create({ email, password, name });
  res.status(201).json(user);
});

// Récupérer tous les utilisateurs
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

module.exports = { createUser, getAllUsers };
