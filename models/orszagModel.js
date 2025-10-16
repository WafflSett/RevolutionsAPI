const mongoose = require('mongoose');

const orszagSchema = new mongoose.Schema({
    name: { type: String, required: true }
});

module.exports = mongoose.model('Orszag', orszagSchema, 'orszagok');
