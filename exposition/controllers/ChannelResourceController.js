'use strict';
const { query } = require('express-validator/check');
const { AddRoute, Validation, ValidationStep } = require('../../shared/services/security/Filter');
const { Code } = require('../../shared/services/security/Code');
const { match } = require('../../shared/patternMatching');
const { AuthenticatedFilter } = require('../../shared/services/security/Authentication');

const UserController = require("../../application/controllers/UserController");
const ChannelController = require('../../application/controllers/ChannelController');

const ChannelResourceController = {
    getAll: (app, type, route) => AddRoute(app, type, route,
        [],
        (req, res) => ChannelController.getAll(req, res)),
    get: (app, type, route) => AddRoute(app, type, route,
        [
            //////////////////////////////////////////////////////////
            // Validation ->
            //////////////////////////////////////////////////////////
            Validation('param:title', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE]
            ]),
            ValidationStep,
            /**
             * Check on database if exists
             */
            function(req, res, next) {
                req.models.channel.get(req.params.title, function(err, channel) {
                    match(channel)
                    ([
                        (/* success */) => {
                            req._channel = channel;
                            next();
                        },
                        [undefined, (/* failed */) => {
                            req._validationErrors.push({ param: "channel", msg: { code: 1500 } });
                            next();
                        }]//Doesn't exists
                    ]);
                });
            },
            ValidationStep
        ],
        (req, res) => ChannelController.get(req, res)),
    sendMessage: (app, type, route) => AddRoute(app, type, route,
        [
            //////////////////////////////////////////////////////////
            // Validation ->
            //////////////////////////////////////////////////////////
            AuthenticatedFilter,
            UserController.LoadAccount,
            Validation('body:title', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE]
            ]),
            Validation('body:message', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE]
            ]),
            ValidationStep,
            /**
             * Check on database if exists
             */
            function(req, res, next) {
                req.models.channel.get(req.body.title, function(err, channel) {
                    match(channel)
                    ([
                        (/* success */) => {
                            req._channel = channel;
                            next();
                        },
                        [undefined, (/* failed */) => {
                            req._validationErrors.push({ param: "channel", msg: { code: 1500 } });
                            next();
                        }]//Doesn't exists
                    ]);
                });
            },
            ValidationStep
        ],
        (req, res) => ChannelController.sendMessage(app, req, res, req._channel, req.body.message)),
    updateMessage: (app, type, route) => AddRoute(app, type, route,
        [
            //////////////////////////////////////////////////////////
            // Validation ->
            //////////////////////////////////////////////////////////
            AuthenticatedFilter,
            UserController.LoadAccount,
            Validation('body:title', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE]
            ]),
            Validation('body:message', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE]
            ]),
            Validation('body:messageId', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE]
            ]),
            ValidationStep,
            /**
             * Check on database if exists
             */
            function(req, res, next) {
                req.models.channel.get(req.body.title, function(err, channel) {
                    match(channel)
                    ([
                        (/* success */) => {
                            req._channel = channel;
                            next();
                        },
                        [undefined, (/* failed */) => {
                            req._validationErrors.push({ param: "channel", msg: { code: 1500 } });
                            next();
                        }]//Doesn't exists
                    ]);
                });
            },
            ValidationStep,
            /**
             * Check on channel if messageId exists
             */
            function(req, res, next) {
                if (JSON.parse(req._channel.messages).find(x => x.id == req.body.messageId) === undefined) {
                    req._validationErrors.push({ param: "messageId", msg: { code: 1500 } });
                }
                next();
            },
            ValidationStep
        ],
        (req, res) => ChannelController.updateMessage(app, req, res, req._channel, req.body.message, req.body.messageId)),
        deleteMessage: (app, type, route) => AddRoute(app, type, route,
            [
                //////////////////////////////////////////////////////////
                // Validation ->
                //////////////////////////////////////////////////////////
                AuthenticatedFilter,
                UserController.LoadAccount,
                Validation('param:title', [
                    ['exists', Code.EMPTY_FIELD],
                    ['isString', Code.FIELD_TYPE]
                ]),
                Validation('param:id', [
                    ['exists', Code.EMPTY_FIELD],
                    ['isString', Code.FIELD_TYPE]
                ]),
                ValidationStep,
                /**
                 * Check on database if exists
                 */
                function(req, res, next) {
                    req.models.channel.get(req.params.title, function(err, channel) {
                        match(channel)
                        ([
                            (/* success */) => {
                                req._channel = channel;
                                next();
                            },
                            [undefined, (/* failed */) => {
                                req._validationErrors.push({ param: "channel", msg: { code: 1500 } });
                                next();
                            }]//Doesn't exists
                        ]);
                    });
                },
                ValidationStep,
                /**
                 * Check on channel if messageId exists
                 */
                function(req, res, next) {
                    if (JSON.parse(req._channel.messages).find(x => x.id == req.params.id) === undefined) {
                        req._validationErrors.push({ param: "messageId", msg: { code: 1500 } });
                    }
                    next();
                },
                ValidationStep
            ],
            (req, res) => ChannelController.deleteMessage(app, req, res, req._channel, req.params.id)),
    create: (app, type, route) => AddRoute(app, type, route,
        //////////////////////////////////////////////////////////
        // Validation ->
        //////////////////////////////////////////////////////////
        [
            Validation('body:title', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE]
            ]),
            Validation('body:picture', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE]
            ]),
            ValidationStep,
            /**
             * Check on database if exists
             */
             function(req, res, next) {
                req.models.channel.get(req.body.title, function(err, channel) {
                    if (channel != undefined) {
                        req._validationErrors.push({ param: "channel", msg: { code: 1500 } });
                    }
                    next();
                });
            },
            ValidationStep
        ],
        //////////////////////////////////////////////////////////
        // Entry point ->
        //////////////////////////////////////////////////////////
        (req, res) => ChannelController.create(app, req, res, req.body)),
    delete: (app, type, route) => AddRoute(app, type, route,
        [
            //////////////////////////////////////////////////////////
            // Validation ->
            //////////////////////////////////////////////////////////
            Validation('param:title', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE]
            ]),
            ValidationStep,
            /**
             * Check on database if exists
             */
            function(req, res, next) {
                req.models.channel.get(req.params.title, function(err, channel) {
                    if (channel == undefined) {
                        req._validationErrors.push({ param: "channel", msg: { code: 1500 } });
                    }
                    req._channel = channel;
                    next();
                });
            },
            ValidationStep
        ],
        (req, res) => ChannelController.delete(app, req, res)),
    clean: (app, type, route) => AddRoute(app, type, route,
        [
            //////////////////////////////////////////////////////////
            // Validation ->
            //////////////////////////////////////////////////////////
            Validation('param:title', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE]
            ]),
            ValidationStep,
            /**
             * Check on database if exists
             */
            function(req, res, next) {
                req.models.channel.get(req.params.title, function(err, channel) {
                    switch (channel) {
                        case undefined: { // Doesn't exists
                            req._validationErrors.push({ param: "channel", msg: { code: 1500 } });
                            next();
                        }
                        case channel: {
                            req._channel = channel;
                            next();
                        }
                    }
                });
            },
            ValidationStep
        ],
        (req, res) => ChannelController.clean(app, req, res, req._channel)),
};

module.exports = ChannelResourceController;