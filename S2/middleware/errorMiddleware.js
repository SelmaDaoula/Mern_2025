// middleware/errorMiddleware.js

// Middleware pour les routes non trouvées (404)
const notFound = (req, res, next) => {
  const error = new Error(`Route non trouvée – ${req.originalUrl}`);
  res.status(404);
  next(error); // Passe l'erreur au middleware suivant
};

// Middleware global de gestion d'erreurs
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode);
  res.json({
    message: err.message,
    // Affiche la stack trace uniquement en développement
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
};

module.exports = { notFound, errorHandler };
