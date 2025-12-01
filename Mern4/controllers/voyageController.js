const Voyage = require('../models/voyageModel');


// @route GET /api/voyages
const getAllVoyages = async (req, res) => {
    try {
        const voyages = await Voyage.find();
        res.status(200).json(voyages);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
};

// @route POST /api/voyages
const createVoyage = async (req, res) => {
    try {
        const voyage = new Voyage(req.body);
        await voyage.save();
        res.status(201).json(voyage);
    } catch (err) {
        res.status(400).json({ message: "Erreur lors de la création du voyage", error: err.message });
    }
};

// @desc Récupérer un voyage par son ID
// @route GET /api/voyages/:id
const getVoyageById = async (req, res) => {
    try {
        const voyage = await Voyage.findById(req.params.id);
        if (!voyage) {
            return res.status(404).json({ message: "Voyage non trouvé" });
        }
        res.status(200).json(voyage);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
};

// @desc Mettre à jour un voyage
// @route PUT /api/voyages/:id
const updateVoyage = async (req, res) => {
    try {
        const updatedVoyage = await Voyage.findByIdAndUpdate(
            req.params.id,       // ID du voyage à mettre à jour
            req.body,            // nouvelles données
            { new: true, runValidators: true } // options importantes
        );
        if (!updatedVoyage) {
            return res.status(404).json({ message: "Voyage non trouvé" });
        }
        res.status(200).json(updatedVoyage);
    } catch (err) {
        res.status(400).json({ message: "Erreur lors de la mise à jour", error: err.message });
    }
};

// @desc Supprimer un voyage
// @route DELETE /api/voyages/:id
const deleteVoyage = async (req, res) => {
    try {
        const deletedVoyage = await Voyage.findByIdAndDelete(req.params.id);
        if (!deletedVoyage) {
            return res.status(404).json({ message: "Voyage non trouvé" });
        }
        res.status(200).json({ message: "Voyage supprimé avec succès", id: req.params.id });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
};

module.exports = {
    getAllVoyages,
    createVoyage,
    getVoyageById,
    updateVoyage,
    deleteVoyage
};
