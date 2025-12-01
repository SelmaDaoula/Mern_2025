// models/Article.js
const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Le titre est obligatoire.'],
    trim: true,
    minlength: [5, 'Le titre doit contenir au moins 5 caractères.'],
    maxlength: [100, 'Le titre ne peut pas dépasser 100 caractères.']
  },
  content: {
    type: String,
    required: [true, 'Le contenu est obligatoire.'],
    minlength: [20, 'Le contenu doit contenir au moins 20 caractères.']
  },
  author: {
    type: String,
    default: 'Anonyme',
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Article', articleSchema);
