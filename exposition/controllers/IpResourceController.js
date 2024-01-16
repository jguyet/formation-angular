'use strict';
const { query } = require('express-validator/check');
const { AddRoute, Validation, ValidationStep } = require('../../shared/services/security/Filter');
const { Code } = require('../../shared/services/security/Code');
const { match } = require('../../shared/patternMatching');

const IpResourceController = {
    get: (app, type, route) => AddRoute(app, type, route,
        [],
        (req, res) => {
            const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
            res.send({
                ip: ip.split(',')[0]
            });
        }),
};

module.exports = IpResourceController;