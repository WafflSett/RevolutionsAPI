const CountryController = require('../controllers/country.controller')
const CountryModel = require('../models/CountryModel')
const httpMocks = require('node-mocks-http')
const newCountry = require('../tests/mock/new-country.json')
const { response } = require('express')

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
    
})

describe('CountryController.updateCountry', () => {
    it('Should be a function', () => {
        expect(typeof CountryController.updateCountry).toBe('function')
    })

})

describe('CountryController.deleteCountry', () => {
    it('Should be a function', () => {
        expect(typeof CountryController.deleteCountry).toBe('function')
    })

})