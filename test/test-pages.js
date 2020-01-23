var expect = require('chai').expect;
var request = require('request');
let mock = require('./data')

let butlerId = ""
let requestId = ""

it('**** APPLICATION STATUS ****', function (done) {
    request('http://localhost:3000', function (error, response, body) {
        expect(JSON.parse(body).message).to.equal('Welcome to Butlers application.');
        done();
    });
});

// BUTLER API TESTS

it('**** CREATE BUTLER ****', function (done) {
    request.post(mock.BUTLER.post, function (error, response, body) {
        butlerId = JSON.parse(body).data._id
        expect(JSON.parse(body).statusCode).to.equal(200);
        done();
    });
})

it('**** GET ALL BUTLERS ****', function (done) {
    request.get(mock.BUTLER.get, function (error, response, body) {
        expect(JSON.parse(body).statusCode).to.equal(200);
        done();
    });
})

it('**** GET BUTLER BY PARAM ****', function (done) {
    request.get(mock.BUTLER.getByParam, function (error, response, body) {
        expect(JSON.parse(body).statusCode).to.equal(200);
        done();
    });
})

it('**** UPDATE BUTLER BY ID ****', function (done) {
    let option = mock.BUTLER.put
    option.url += butlerId
    request.put(option, function (error, response, body) {
        expect(JSON.parse(body).statusCode).to.equal(200);
        done();
    });
})

// REQUEST API TESTS

it('**** CREATE REQUEST ****', function (done) {
    request.post(mock.REQUEST.post, function (error, response, body) {
        requestId = JSON.parse(body).data._id
        expect(JSON.parse(body).statusCode).to.equal(200);
        done();
    });
})

it('**** GET ALL REQUEST ****', function (done) {
    request.get(mock.REQUEST.get, function (error, response, body) {
        expect(JSON.parse(body).statusCode).to.equal(200);
        done();
    });
})

it('**** GET REQUEST BY PARAM ****', function (done) {
    request.get(mock.REQUEST.getByParam, function (error, response, body) {
        expect(JSON.parse(body).statusCode).to.equal(200);
        done();
    });
})

it('**** UPDATE REQUEST BY ID ****', function (done) {
    let option = mock.REQUEST.put
    option.url += requestId
    request.put(option, function (error, response, body) {
        expect(JSON.parse(body).statusCode).to.equal(200);
        done();
    });
})
