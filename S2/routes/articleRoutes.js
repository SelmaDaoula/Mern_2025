const express = require('express');
const router = express.Router();

// Import des fonctions du contrôleur
const {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
} = require('../controllers/articleController');

// Routes
router.get('/', getAllArticles);         // GET tous les articles
router.get('/:id', getArticleById);      // GET article par ID
router.post('/', createArticle);         // POST nouvel article
router.put('/:id', updateArticle);       // PUT mettre à jour
router.delete('/:id', deleteArticle);    // DELETE article

module.exports = router;
