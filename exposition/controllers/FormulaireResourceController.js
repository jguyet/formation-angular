'use strict';
const { query } = require('express-validator/check');
const { AddRoute, Validation, ValidationStep } = require('../../shared/services/security/Filter');
const { Code } = require('../../shared/services/security/Code');
const { match } = require('../../shared/patternMatching');

const FormulaireController = require('../../application/controllers/FormulaireController');

const FormulaireResourceController = {
    get: (app, type, route) => AddRoute(app, type, route,
        [],
        (req, res) => FormulaireController.get(req, res)),
    getStats: (app, type, route) => AddRoute(app, type, route,
        [],
        (req, res) => FormulaireController.getStats(req, res)),
    clean: (app, type, route) => AddRoute(app, type, route,
        [],
        (req, res) => FormulaireController.clean(req, res)),
    post: (app, type, route) => AddRoute(app, type, route,
        //////////////////////////////////////////////////////////
        // Validation ->
        //////////////////////////////////////////////////////////
        [],
        //////////////////////////////////////////////////////////
        // Entry point ->
        //////////////////////////////////////////////////////////
        (req, res) => FormulaireController.post(req, res, req.body)),
};

module.exports = FormulaireResourceController;