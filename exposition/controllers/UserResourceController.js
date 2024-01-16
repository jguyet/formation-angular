'use strict';
const { AddRoute, Validation, ValidationStep } = require('../../shared/services/security/Filter');
const { Code } = require('../../shared/services/security/Code');
const { AuthenticatedFilter } = require('../../shared/services/security/Authentication');

const UserController = require("../../application/controllers/UserController");

const UserResourceController = {

    /**
     * /user/login
     * EXPOSED ROUTE
     */
    login: (app, type, route) => AddRoute(app, type, route,
        [
            Validation('body:email', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE],
                ['isLength', {min: 4}, Code.FIELD_LENGTH_IS_TO_SHORT],
                ['isEmail', Code.EMAIL_NOT_VALID]
            ]),
            Validation('body:password', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE],
                ['isLength', {min: 4}, Code.FIELD_LENGTH_IS_TO_SHORT],
            ]),
            ValidationStep,
            /**
             * Check on database if exists
             */
            function(req, res, next) {
                var account = { email: req.body.email };
                req.models.account.exists(account, function (err, exists) {
                    if (!exists) req._validationErrors.push({ msg: { code: 1500 } });//account doens't exists
                    next();
                });
            }
        ],
        (req, res) => UserController.login(req, res, req.body.email, req.body.password)),
    
    /**
     * /user/register
     * EXPOSED ROUTE
     */
    register: (app, type, route) => AddRoute(app, type, route,
        [
            Validation('body:email', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE],
                ['isLength', {min: 4}, Code.FIELD_LENGTH_IS_TO_SHORT],
                ['isEmail', Code.EMAIL_NOT_VALID]
            ]),
            Validation('body:password', [
                ['exists', Code.EMPTY_FIELD],
                ['isString', Code.FIELD_TYPE],
                ['isLength', {min: 4}, Code.FIELD_LENGTH_IS_TO_SHORT]
            ]),
            ValidationStep,
            /**
             * Check on database if exists
             */
            function(req, res, next) {
                var account = { email: req.body.email };
                req.models.account.exists(account, function (err, exists) {
                    if (exists) req._validationErrors.push({ msg: { code: 1501 } });//account already exists
                    next();
                });
            }
        ],
        (req, res) => UserController.register(req, res, req.body.email, req.body.password)),
    
    /**
     * /user
     * EXPOSED ROUTE
     */
    update: (app, type, route) => AddRoute(app, type, route,
        [
            Validation('body:email', [
                ['optional'],
                ['isString', Code.FIELD_TYPE],
                ['isLength', {min: 4}, Code.FIELD_LENGTH_IS_TO_SHORT],
                ['isEmail', Code.EMAIL_NOT_VALID]
            ]),
            Validation('body:password', [
                ['optional'],
                ['isString', Code.FIELD_TYPE],
                ['isLength', {min: 4}, Code.FIELD_LENGTH_IS_TO_SHORT]
            ]),
            Validation('body:repeatPassword', [
                ['optional'],
                ['isString', Code.FIELD_TYPE],
                ['isLength', {min: 4}, Code.FIELD_LENGTH_IS_TO_SHORT]
            ]),
            Validation('body:picture', [
                ['optional'],
                ['isString', Code.FIELD_TYPE]
            ]),
            ValidationStep,
            function(req, res, next) {
                if (req.body.password != undefined) {
                    if (req.body.repeatPassword !== req.body.password) {
                        req._validationErrors.push({ msg: { code: Code.PASSWORD_NOT_EQUALS_TO_REPEATPASSWORD } });//id doesn't exists
                    }
                }
                next();
            },
            ValidationStep,
            function(req, res, next) {
                if (req.body.email != undefined) {
                    const blackListedMails = ['yopmail'];
                    var split = req.body.email.split('@');

                    if (split.length != 2 || blackListedMails.map(x => split[1].indexOf(x) !== -1).filter(x =>  x === true).length != 0) {
                        req._validationErrors.push({ msg: { code: Code.EMAIL_NOT_VALID } });//email not valid or blacklisted
                    }
                }
                next();
            },
            AuthenticatedFilter,
            UserController.LoadAccount
        ],
        (req, res) => UserController.update(req, res, req.body.email, req.body.password, req.body.picture)),
    
    /**
     * /user/{id}
     * EXPOSED ROUTE
     */
    get: (app, type, route) => AddRoute(app, type, route,
        [
            AuthenticatedFilter,
            UserController.LoadAccount
        ],
        (req, res) => {
            var acc = JSON.parse(JSON.stringify(req._account));
            delete acc.password;
            res.status(200).send(acc);
        }),

    getUserById: (app, type, route) => AddRoute(app, type, route,
        [
            AuthenticatedFilter,
            UserController.LoadAccount,
            Validation('param:id', [
                ['exists', Code.EMPTY_FIELD]
            ]),
            ValidationStep,
            /**
             * Check on database if exists
             */
             function(req, res, next) {
                var account = { id: req.params.id };
                req.models.account.find(account, function (err, users) {
                    if (!users || users.length == 0) req._validationErrors.push({ msg: { code: -1 } });//id doesn't exists
                    req._user = users[0];
                    next();
                });
            }
        ],
        (req, res) => {
            var acc = JSON.parse(JSON.stringify(req._user));
            delete acc.password;
            res.status(200).send(acc);
        }),
    getUsersByIds: (app, type, route) => AddRoute(app, type, route,
        [
            AuthenticatedFilter,
            UserController.LoadAccount,
            /**
             * Check on database if exists
             */
            function(req, res, next) {
                req._users = [];
                var accounts = req.body.map(x => ({ id: x }));
                req.models.account.find(accounts, function (err, users) {
                    if (!users) req._validationErrors.push({ msg: { code: -1 } });//id doesn't exists
                    req._users = users.map(x => {
                        delete x.password;
                        return x;
                    });
                    next();
                });
            }
        ],
        (req, res) => {
            var accs = JSON.parse(JSON.stringify(req._users));
            res.status(200).send(accs);
        }),
    /**
     * /user/delete
     * EXPOSED ROUTE
     */
    delete: (app, type, route) => AddRoute(app, type, route,
        [
            Validation('param:id', [
                ['exists', Code.EMPTY_FIELD]
            ]),
            ValidationStep,
            /**
             * Check on database if exists
             */
            function(req, res, next) {
                var account = { id: req.params.id };
                req.models.account.exists(account, function (err, exists) {
                    if (exists) req._validationErrors.push({ msg: { code: -1 } });//id doesn't exists
                    next();
                });
            }
        ],
        (req, res) => {
            res.status(200).send("");
        })
};

module.exports = UserResourceController;