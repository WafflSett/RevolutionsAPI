const express = require('express');
const router = express.Router();
const RevolutionController = require('../controllers/revolution.controller');

router.get('/', (req, res) => {
    RevolutionController.getAllRevolutions(req, res);
});

router.get('/:id', (req, res) => {
    RevolutionController.getRevolutionById(req, res)
});

router.post('/', (req, res) => {
    RevolutionController.createRevolution(req, res)
});

router.put('/:id', (req, res) => {
    RevolutionController.updateRevolution(req, res)
});

router.delete('/:id', (req, res) => {
    RevolutionController.deleteRevolution(req, res)
});

module.exports = router;
