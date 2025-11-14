const mongoose = require('mongoose');

const orszagSchema = new mongoose.Schema({
    country_id: Number,
    name: { type: String, required: true }
});

module.exports = mongoose.model('Orszag', orszagSchema, 'orszagok');
