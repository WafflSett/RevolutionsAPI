const Country = require("../models/CountryModel")
const express = require('express');
const router = express.Router();

exports.getAllCountries = (req, res, next) => {
    try {
        const data = Country.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getCountryById = (req, res, next) => {
    try {
        const data = Country.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(404).json({ message: 'Country not found' });
    }
}

exports.createCountry = (req, res, next) => {
    try {
        const newCountry = Country.create(req.body);
        res.status(201).json(newCountry);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.updateCountry = (req, res, next) => {
    try {
        const updated = Country.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.deleteCountry = (req, res, next) => {
    try {
        Country.findByIdAndDelete(req.params.id);
        res.status(204).json({ message: 'Country deleted' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}