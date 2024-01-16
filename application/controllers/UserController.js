'use stricts';

const { GetToken } = require("../../shared/services/security/Authentication");
const { match } = require('../../shared/patternMatching');
const CryptoJS = require('crypto-js');
var MID = require('monotonic-id');

/**
 * @Function Filter
 * Get account with token loaded before from database.
 */
exports.LoadAccount = function(req, res, next) {
    var accountId = req._token.sub != undefined ? req._token.sub.id : req._token.id;

    req.models.account.get(accountId, function(err, account) {
        match(account)
        ([
            (/* success */) => {
                req._account = account;
                next();
            },
            [undefined, (/* failed */) => res.status(404).send(err)]
        ]);
    });
}

/**
 * @Controller
 * Login Account and return a Future[SignedToken](200) or Future[false](404)
 */
exports.login = function(req, res, email, password) {
    req.models.account.find({
        email: email,
        password: CryptoJS.SHA256(password).toString()
    }, 1, function (err, accounts) {
        match(accounts)
        ([
            [() => accounts && accounts.length == 1, (/* success */) => {
                res.status(200).send({ auth: true, clientId: accounts[0].id, clientSecret: CryptoJS.SHA256(password).toString()});//, token: GetToken({ id: accounts[0].id, email: accounts[0].email }) });
            }],
            (/* failed */) => {
                res.status(404).send({ auth: false });
            }
        ]);
    });
};

/**
 * @Controller
 * Register a new Account and return Future[Succcesfull](200) or Future[Failure](404) 
 */
exports.register = function(req, res, email, password) {
    req.models.account.create({
        id: new MID().toUUID(),
        email: email,
        password: CryptoJS.SHA256(password).toString(),
        picture: 'https://app.checkdot.io/assets/no-icon2.png'
    }, function (err, account) {
        match(account)
        ([
            (/* success */) => {
                account.save();
                res.status(200).send({ account: JSON.parse(JSON.stringify(account)), auth: true, clientId: account.id, clientSecret: CryptoJS.SHA256(password).toString() });//, token: GetToken({ id: account.id, email: account.email }) });
            },
            [undefined, (/* failed */) => res.status(404).send(err)]
        ]);
    });
};

/**
 * @Controller
 * Attatch picture id (picture on storage) to account
 */
 exports.update = function(req, res, email, password, picture) {
    if (email != undefined) {
        req._account.email = email;
    }
    if (password != undefined) {
        req._account.password = password;
    }
    if (picture != undefined) {
        req._account.picture = picture;
    }
    req._account.save(function(err) {
        res.status(200).send(JSON.parse(JSON.stringify(req._account)));
    });
}