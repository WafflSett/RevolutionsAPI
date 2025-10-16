const express = require('express');
const router = express.Router();
const Country = require('../models/CountryModel');

router.get('/', async (req, res) => {
    try {
        const data = await Country.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const data = await Country.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(404).json({ message: 'Country not found' });
    }
});

router.post('/', async (req, res) => {
    const Country = new Country({
        name: req.body.name
    });
    try {
        const newData = await Country.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;