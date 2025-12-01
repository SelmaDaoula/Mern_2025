const Reservation = require('../models/reservationModel');

// GET /api/reservations
const getAllReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find().populate('voyageId');
        res.status(200).json(reservations);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
};

// POST /api/reservations
const createReservation = async (req, res) => {
    try {
        const reservation = new Reservation(req.body);
        await reservation.save();
        res.status(201).json(reservation);
    } catch (err) {
        res.status(400).json({ message: "Erreur lors de la création de la réservation", error: err.message });
    }
};

// GET /api/reservations/:id
const getReservationById = async (req, res) => {
    try {
        const reservation = await Reservation.findById(req.params.id).populate('voyageId');
        if (!reservation) return res.status(404).json({ message: "Réservation non trouvée" });
        res.status(200).json(reservation);
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
};

// PUT /api/reservations/:id
const updateReservation = async (req, res) => {
    try {
        const updatedReservation = await Reservation.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!updatedReservation) return res.status(404).json({ message: "Réservation non trouvée" });
        res.status(200).json(updatedReservation);
    } catch (err) {
        res.status(400).json({ message: "Erreur lors de la mise à jour", error: err.message });
    }
};

// DELETE /api/reservations/:id
const deleteReservation = async (req, res) => {
    try {
        const deletedReservation = await Reservation.findByIdAndDelete(req.params.id);
        if (!deletedReservation) return res.status(404).json({ message: "Réservation non trouvée" });
        res.status(200).json({ message: "Réservation supprimée avec succès", id: req.params.id });
    } catch (err) {
        res.status(500).json({ message: "Erreur serveur", error: err.message });
    }
};

module.exports = {
    getAllReservations,
    createReservation,
    getReservationById,
    updateReservation,
    deleteReservation
};
