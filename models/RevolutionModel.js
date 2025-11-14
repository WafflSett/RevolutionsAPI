const mongoose = require('mongoose');

const forradalomSchema = new mongoose.Schema({
    name: { type: String, required: true },
    year: Number,
    country: String,
    description: String,
    country_id: Number
});

module.exports = mongoose.model('Forradalom', forradalomSchema, 'forradalmak');
