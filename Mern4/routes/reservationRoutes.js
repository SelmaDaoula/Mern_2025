const express = require('express');
const router = express.Router();

const {
    getAllReservations,
    createReservation,
    getReservationById,
    updateReservation,
    deleteReservation
} = require('../controllers/reservationController');

router.get('/', getAllReservations);
router.post('/', createReservation);
router.get('/:id', getReservationById);
router.put('/:id', updateReservation);
router.delete('/:id', deleteReservation);

module.exports = router;
