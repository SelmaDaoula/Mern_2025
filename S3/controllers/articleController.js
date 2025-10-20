const asyncHandler = require("express-async-handler");
const Article = require("../models/ArticleModel");

// @desc Récupérer tous les articles
// @route GET /api/articles
const getAllArticles = asyncHandler(async (req, res) => {
  const articles = await Article.find();
  res.status(200).json(articles);
});

// @desc Créer un nouvel article
// @route POST /api/articles
const createArticle = asyncHandler(async (req, res) => {
  const { title, content, author } = req.body;

  // Validation manuelle
  if (!title || !content) {
    res.status(400);
    throw new Error("Veuillez fournir un titre et un contenu.");
  }

  const article = await Article.create({ title, content, author });
  res.status(201).json(article);
});

// @desc Récupérer un article par ID
// @route GET /api/articles/:id
const getArticleById = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);
  if (!article) {
    res.status(404);
    throw new Error("Article non trouvé.");
  }
  res.status(200).json(article);
});

// @desc Mettre à jour un article
// @route PUT /api/articles/:id
const updateArticle = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);
  if (!article) {
    res.status(404);
    throw new Error("Article non trouvé.");
  }

  const updatedArticle = await Article.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  res.status(200).json(updatedArticle);
});

// @desc Supprimer un article
// @route DELETE /api/articles/:id
const deleteArticle = asyncHandler(async (req, res) => {
  const article = await Article.findById(req.params.id);
  if (!article) {
    res.status(404);
    throw new Error("Article non trouvé.");
  }

  await article.deleteOne();
  res.status(200).json({ message: "Article supprimé avec succès." });
});

module.exports = {
  getAllArticles,
  createArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
};
