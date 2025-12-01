const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    client: {
        type: String,
        required: true,
        trim: true
    },
    voyageId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Voyage',
        required: true
    },
    nombrePersonnes: {
        type: Number,
        required: true,
        min: 1
    },
    dateReservation: {
        type: Date,
        default: Date.now
    },
    statut: {
        type: String,
        enum: ['En attente', 'Confirmée', 'Annulée'],
        default: 'En attente'
    }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
