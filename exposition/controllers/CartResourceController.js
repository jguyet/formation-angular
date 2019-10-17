'use strict';
const { query } = require('express-validator/check');
const { AddRoute, Validation, ValidationStep } = require('../../shared/services/security/Filter');
const { Code } = require('../../shared/services/security/Code');

const CartController = require('../../application/controllers/CartController');

const CartResourceController = {
    search: (app, type, route) => AddRoute(app, type, route,
        //////////////////////////////////////////////////////////
        // Validation ->
        //////////////////////////////////////////////////////////
        [
            Validation('query:page', [
                ['optional'],
                ['isNumeric', Code.FIELD_TYPE]
            ]),
        ],
        //////////////////////////////////////////////////////////
        // Entry point ->
        //////////////////////////////////////////////////////////
        (req, res) => CartController.searchByPage(req, res, req.query.page, req.query.size)),
    create: (app, type, route) => AddRoute(app, type, route,
        //////////////////////////////////////////////////////////
        // Validation ->
        //////////////////////////////////////////////////////////
        [
            Validation('body:title', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE]
            ]),
            Validation('body:description', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE]
            ]),
            Validation('body:price', [
                ['exists', Code.EMPTY_FIELD],
                ['isInt', Code.FIELD_TYPE]
            ]),
            Validation('body:picture', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE]
            ]),
            ValidationStep
        ],
        //////////////////////////////////////////////////////////
        // Entry point ->
        //////////////////////////////////////////////////////////
        (req, res) => CartController.create(req, res, req.body))
};

module.exports = CartResourceController;