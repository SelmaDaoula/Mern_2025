const express = require("express");
const router = express.Router();

const { createUser, getAllUsers } = require("../controllers/userController");

// Routes
router.get("/", getAllUsers);    // GET tous les utilisateurs
router.post("/", createUser);    // POST créer un utilisateur

module.exports = router;
