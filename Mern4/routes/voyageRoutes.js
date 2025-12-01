// routes/voyageRoutes.js
const express = require('express');
const router = express.Router();

// Import du controller
const {
    getAllVoyages,
    createVoyage,
    getVoyageById,
    updateVoyage,
    deleteVoyage
} = require('../controllers/voyageController');

// Routes CRUD
router.get('/', getAllVoyages);           // GET /api/voyages -> tous les voyages
router.post('/', createVoyage);           // POST /api/voyages -> créer un voyage
router.get('/:id', getVoyageById);        // GET /api/voyages/:id -> voyage spécifique
router.put('/:id', updateVoyage);         // PUT /api/voyages/:id -> mise à jour
router.delete('/:id', deleteVoyage);      // DELETE /api/voyages/:id -> suppression

module.exports = router;
