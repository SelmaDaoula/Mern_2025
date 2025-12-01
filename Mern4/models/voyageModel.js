// models/voyageModel.js
const mongoose = require('mongoose');

const voyageSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true,
        trim: true
    },
    destination: {
        type: String,
        required: true,
        trim: true
    },
    dateDepart: {
        type: Date,
        required: true
    },
    dateRetour: {
        type: Date,
        required: true
    },
    prix: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        type: String,
        trim: true
    },
    transport: {
        type: String,
        enum: ['Avion', 'Train', 'Voiture', 'Bateau', 'Autre'],
        default: 'Autre'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Voyage = mongoose.model('Voyage', voyageSchema);

module.exports = Voyage;
