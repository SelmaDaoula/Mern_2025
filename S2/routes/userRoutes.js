// routes/userRoutes.js
const express = require("express");
const router = express.Router();

// On importe les fonctions du contrôleur
const { getUsers, contact, aboutPage } = require("../controllers/articleController");

// Route GET pour /api/users
router.get("/", getUsers);

// Route POST pour /contact
router.post("/contact", contact);

// Route GET pour /about
router.get("/about", aboutPage);

module.exports = router;
