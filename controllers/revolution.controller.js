const Revolution = require('../models/RevolutionModel');

exports.getAllRevolutions = (req,res,next)=>{
    try {
        const data =  Revolution.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getRevolutionById =  (req,res,next)=>{
    try {
        const data =  Revolution.findById(req.params.id);
        res.json(data);
    } catch (error) {
        res.status(404).json({ message: 'Revolution not found' });
    }
}

exports.createRevolution = (req,res,next)=>{
    // const revolution = new Revolution({
    //         name: req.body.name,
    //         year: req.body.year,
    //         country: req.body.country,
    //         description: req.body.description,
    //         country_id: req.body.country_id
    //     });
    
        try {
            const newRevo = Revolution.create(req.body);
            res.status(201).json(newRevo);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
}

exports.updateRevolution =  (req,res,next)=>{
    try {
        const updated =  Revolution.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.deleteRevolution =  (req,res,next)=>{
    try {
         Revolution.findByIdAndDelete(req.params.id);
        res.json({ message: 'Revolution deleted' });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}