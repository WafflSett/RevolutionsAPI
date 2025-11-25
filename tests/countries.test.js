const CountryController = require('../controllers/country.controller')
const CountryModel = require('../models/CountryModel')
const httpMocks = require('node-mocks-http')
const newCountry = require('../tests/mock/new-country.json')
const { response } = require('express')

CountryModel.create = jest.fn();
CountryModel.find = jest.fn()
CountryModel.findById = jest.fn()
CountryModel.findByIdAndDelete = jest.fn()
CountryModel.findByIdAndUpdate = jest.fn()


let req, res, next
beforeEach(() => {
    req = httpMocks.createRequest()
    res = httpMocks.createResponse()
    next = null
    req.body = newCountry
})

describe('CountryController.getAllCountries', () => {
    it('Should be a function', () => {
        expect(typeof CountryController.getAllCountries).toBe('function')
    })
    it('Should call the CountryModel.find function', () => {
        CountryController.getAllCountries(req, res, next)
        expect(CountryModel.find).toHaveBeenCalled()
    })
    it('Should return 200 response code', () => {
        CountryController.getAllCountries(req, res)
        expect(res.statusCode).toBe(200)
    })
    it('Should return json response', () => {
        CountryModel.find.mockReturnValue(newCountry);
        CountryController.getAllCountries(req, res);
        expect(res._getJSONData()).toStrictEqual(newCountry);
    })
})

describe('CountryController.getCountryById', () => {
    it('Should be a function', () => {
        expect(typeof CountryController.getCountryById).toBe('function')
    })
    it('Should call the CountryModel.find function', () => {
        CountryController.getCountryById(req, res, next)
        expect(CountryModel.findById).toHaveBeenCalled()
    })
    it('Should return 200 response code', () => {
        CountryController.getCountryById(req, res)
        expect(res.statusCode).toBe(200)
    })
    it('Should return json response', () => {
        CountryModel.findById.mockReturnValue(newCountry);
        CountryController.getCountryById(req, res);
        expect(res._getJSONData()).toStrictEqual(newCountry);
    })
})

describe('CountryController.createCountry', () => {
    it('Should be a function', () => {
        expect(typeof CountryController.createCountry).toBe('function')
    })
    it('Should call the CountryModel.create function', () => {
        CountryController.createCountry(req, res)
        expect(CountryModel.create).toHaveBeenCalled()
    })
    it('Should return 201 response code', () => {
        CountryController.createCountry(req, res)
        expect(res.statusCode).toBe(201)
    })
    it('Should return json response', () => {
        CountryModel.create.mockReturnValue(newCountry);
        CountryController.createCountry(req, res);
        expect(res._getJSONData()).toStrictEqual(newCountry);
    })
})

describe('CountryController.updateCountry', () => {
    it('Should be a function', () => {
        expect(typeof CountryController.updateCountry).toBe('function')
    })
    it('Should call the CountryModel.findByIdAndUpdate function', () => {
        CountryController.updateCountry(req, res)
        expect(CountryModel.findByIdAndUpdate).toHaveBeenCalled()
    })
    it('Should return 200 response code', () => {
        CountryController.updateCountry(req, res)
        expect(res.statusCode).toBe(200)
    })
    it('Should return json response', () => {
        CountryModel.findByIdAndUpdate.mockReturnValue(newCountry);
        CountryController.updateCountry(req, res);
        expect(res._getJSONData()).toStrictEqual(newCountry);
    })
})

describe('CountryController.deleteCountry', () => {
    it('Should be a function', () => {
        expect(typeof CountryController.deleteCountry).toBe('function')
    })
    it('Should call the CountryModel.findByIdAndDelete function', () => {
        CountryController.deleteCountry(req, res)
        expect(CountryModel.findByIdAndDelete).toHaveBeenCalled()
    })
    it('Should return 204 response code', () => {
        CountryController.deleteCountry(req, res)
        expect(res.statusCode).toBe(204)
    })
    it('Should return json response', () => {
        CountryModel.findByIdAndDelete.mockReturnValue({ message: 'Country deleted' });
        CountryController.deleteCountry(req, res);
        expect(res._getJSONData()).toStrictEqual({ message: 'Country deleted' });
    })
})