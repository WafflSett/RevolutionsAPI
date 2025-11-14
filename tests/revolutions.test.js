const RevolutionModel = require('../models/RevolutionModel');
const httpMocks = require('node-mocks-http');
const newRevolution = require('../tests/mock/new-revolution.json');
const RevolutionsController = require('../controllers/revolution.controller');

RevolutionModel.create = jest.fn();
RevolutionModel.find = jest.fn();
RevolutionModel.findById = jest.fn();
RevolutionModel.findByIdAndUpdate = jest.fn();
RevolutionModel.findByIdAndDelete = jest.fn();

let req, res, next;
beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
    next = null;
    req.body = newRevolution;
});

describe('RevolutionController.getAllRevolutions', () => {
    it('should be a function', () => {
        expect(typeof (RevolutionsController.getAllRevolutions)).toBe('function');
    })
    it('should call the RevolutionModel.find function', () => {
        RevolutionsController.getAllRevolutions(req, res)
        expect(RevolutionModel.find).toHaveBeenCalled()
    })
    it('should return 200 response code', () => {
        RevolutionsController.getAllRevolutions(req, res)
        expect(res.statusCode).toBe(200)
    })
    it('should return json response', () => {
        RevolutionModel.find.mockReturnValue(newRevolution);
        RevolutionsController.getAllRevolutions(req, res);
        expect(res._getJSONData()).toStrictEqual(newRevolution);
    })
})

describe('RevolutionController.getRevolutionById', () => {
    it('should be a function', () => {
        expect(typeof (RevolutionsController.getRevolutionById)).toBe('function');
    })
    it('should call the RevolutionModel.findById function', () => {
        RevolutionsController.getRevolutionById(req, res)
        expect(RevolutionModel.findById).toHaveBeenCalled()
    })
    it('should return 200 response code', () => {
        RevolutionsController.getRevolutionById(req, res)
        expect(res.statusCode).toBe(200)
    })
    it('should return json response', () => {
        RevolutionModel.findById.mockReturnValue(newRevolution);
        RevolutionsController.getRevolutionById(req, res);
        expect(res._getJSONData()).toStrictEqual(newRevolution);
    })
})

describe('RevolutionController.createRevolution', () => {
    it('should be a function', () => {
        expect(typeof (RevolutionsController.createRevolution)).toBe('function');
    })
    it('should call the RevolutionModel.create function', () => {
        RevolutionsController.createRevolution(req, res)
        expect(RevolutionModel.create).toHaveBeenCalled()
    })
    it('should return 201 response code', () => {
        RevolutionsController.createRevolution(req, res)
        expect(res.statusCode).toBe(201)
    })
    it('should return json response', () => {
        RevolutionModel.create.mockReturnValue(newRevolution);
        RevolutionsController.getAllRevolutions(req, res);
        expect(res._getJSONData()).toStrictEqual(newRevolution);
    })
})

describe('RevolutionController.updateRevolution', () => {
    it('should be a function', () => {
        expect(typeof (RevolutionsController.updateRevolution)).toBe('function');
    })
    it('should call the RevolutionModel.findByIdAndUpdate function', () => {
        RevolutionsController.updateRevolution(req, res)
        expect(RevolutionModel.findByIdAndUpdate).toHaveBeenCalled()
    })
    it('should return 200 response code', () => {
        RevolutionsController.updateRevolution(req, res)
        expect(res.statusCode).toBe(200)
    })
    it('should return json response', () => {
        RevolutionModel.findByIdAndUpdate.mockReturnValue(newRevolution);
        RevolutionsController.updateRevolution(req, res);
        expect(res._getJSONData()).toStrictEqual(newRevolution);
    })
})

describe('RevolutionController.deleteRevolution', () => {
    it('should be a function', () => {
        expect(typeof (RevolutionsController.deleteRevolution)).toBe('function');
    })
    it('should call the RevolutionModel.findByIdAndDelete function', () => {
        RevolutionsController.deleteRevolution(req, res)
        expect(RevolutionModel.findByIdAndDelete).toHaveBeenCalled()
    })
    it('should return 200 response code', () => {
        RevolutionsController.deleteRevolution(req, res)
        expect(res.statusCode).toBe(200)
    })
    it('should return json response', () => {
        RevolutionModel.findByIdAndDelete.mockReturnValue({message: 'Revolution deleted'});
        RevolutionsController.deleteRevolution(req, res);
        expect(res._getJSONData()).toStrictEqual({message: 'Revolution deleted'});
    })
})
