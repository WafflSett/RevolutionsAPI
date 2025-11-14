const express = require('express');
const router = express.Router();
const Revolution = require('../models/RevolutionModel');

router.get('/', async (req, res) => {
    try {
        const data = await Revolution.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const data = await Revolution.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(404).json({ message: 'Revolution not found' });
    }
});

router.post('/', async (req, res) => {
    const revolution = new Revolution({
        name: req.body.name,
        year: req.body.year,
        country: req.body.country,
        description: req.body.description,
        country_id: req.body.country_id
    });

    try {
        const newData = await revolution.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const updated = await Revolution.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Revolution.findByIdAndDelete(req.params.id);
        res.json({ message: 'Revolution deleted' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

module.exports = router;
