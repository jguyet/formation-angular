'use strict';
const { query } = require('express-validator/check');
const { AddRoute, Validation, ValidationStep } = require('../../shared/services/security/Filter');
const { Code } = require('../../shared/services/security/Code');
const { match } = require('../../shared/patternMatching');

const CardController = require('../../application/controllers/CardController');

const CardResourceController = {
    search: (app, type, route) => AddRoute(app, type, route,
        //////////////////////////////////////////////////////////
        // Validation ->
        //////////////////////////////////////////////////////////
        [
            Validation('query:page', [
                ['optional'],
                ['isNumeric', Code.FIELD_TYPE]
            ]),
            ValidationStep
        ],
        //////////////////////////////////////////////////////////
        // Entry point ->
        //////////////////////////////////////////////////////////
        (req, res) => CardController.searchByPage(req, res, req.query.page, req.query.size)),
    get: (app, type, route) => AddRoute(app, type, route,
        [
            //////////////////////////////////////////////////////////
            // Validation ->
            //////////////////////////////////////////////////////////
            Validation('param:id', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE]
            ]),
            ValidationStep,
            /**
             * Check on database if exists
             */
            function(req, res, next) {
                req.models.card.get(req.params.id, function(err, card) {
                    match(card)
                    ([
                        (/* success */) => {
                            req._card = card;
                            next();
                        },
                        [undefined, (/* failed */) => {
                            req._validationErrors.push({ param: "card", msg: { code: 1500 } });
                            next();
                        }]//Doesn't exists
                    ]);
                });
            },
            ValidationStep
        ],
        (req, res) => CardController.get(req, res)),
    getRandomCardId: (app, type, route) => AddRoute(app, type, route,
        [],
        (req, res) => CardController.getRandomCardId(req, res)),
    create: (app, type, route) => AddRoute(app, type, route,
        //////////////////////////////////////////////////////////
        // Validation ->
        //////////////////////////////////////////////////////////
        [
            Validation('body:title', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE]
            ]),
            Validation('body:price', [
                ['exists', Code.EMPTY_FIELD],
                ['isInt', Code.FIELD_TYPE]
            ]),
            Validation('body:type', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE]
            ]),
            Validation('body:description', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE]
            ]),
            ValidationStep
        ],
        //////////////////////////////////////////////////////////
        // Entry point ->
        //////////////////////////////////////////////////////////
        (req, res) => CardController.create(req, res, req.body)),
    delete: (app, type, route) => AddRoute(app, type, route,
        [
            //////////////////////////////////////////////////////////
            // Validation ->
            //////////////////////////////////////////////////////////
            Validation('param:id', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE]
            ]),
            ValidationStep,
            /**
             * Check on database if exists
             */
            function(req, res, next) {
                req.models.card.get(req.params.id, function(err, card) {
                    switch (card) {
                        case undefined: { // Doesn't exists
                            req._validationErrors.push({ param: "card", msg: { code: 1500 } });
                            next();
                        }
                        case card: {
                            req._card = card;
                            next();
                        }
                    }
                });
            },
            ValidationStep
        ],
        (req, res) => CardController.delete(req, res)),
};

module.exports = CardResourceController;