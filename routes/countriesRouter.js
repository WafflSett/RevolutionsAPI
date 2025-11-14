const express = require('express');
const router = express.Router();
const CountryController = require('../controllers/country.controller')

router.get('/', (req, res) => {
    CountryController.getAllCountry(req, res)
});

router.get('/:id', (req, res) => {
    CountryController.getCountryById(req, res)
});

router.post('/', (req, res) => {
    CountryController.postCountry(req, res)
});

router.put('/:id', (req, res) => {
    CountryController.updateCountry(req, res)
});

router.delete('/:id', (req, res) => {
    CountryController.deleteCountry(req, res)
});

module.exports = router;