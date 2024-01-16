'use strict';
const { AddRoute, Validation, ValidationStep } = require('../../shared/services/security/Filter');
const { Code } = require('../../shared/services/security/Code');
const multer  = require('multer');
const MID = require('monotonic-id');
const jwt = require('jsonwebtoken');
const { GetToken } = require("../../shared/services/security/Authentication");
const { AuthenticatedFilter } = require('../../shared/services/security/Authentication');
const UserController = require("../../application/controllers/UserController");

const STORAGE_PATH = '/mnt/storage/';

const OpenIdResourceController = {

    /**
     * /token/.well-known/openid-configuration
     * EXPOSED ROUTE
     */
    get: (app, type, route) => AddRoute(app, type, route,
        [],
        (req, res) => {
            console.log('openid-configuration');
            var host = "http://localhost:8080";//"http://formationangular.eu-gb.mybluemix.net";
            res.status(200).send({
                "issuer": host,
                "authorization_endpoint": `${host}/o/oauth2/v2/auth`,
                "token_endpoint": `${host}/token`,
                "userinfo_endpoint": `${host}/v1/userinfo`,
                "revocation_endpoint": `${host}/revoke`,
                "jwks_uri": `${host}/o/oauth2/v2/certs`,
                "response_types_supported": [
                 "code",
                 "token",
                 "id_token",
                 "code token",
                 "code id_token",
                 "token id_token",
                 "code token id_token",
                 "none"
                ],
                "subject_types_supported": [
                 "public"
                ],
                "id_token_signing_alg_values_supported": [
                 "RS256"
                ],
                "scopes_supported": [
                 "openid",
                 "email",
                 "profile"
                ],
                "token_endpoint_auth_methods_supported": [
                 "client_secret_post",
                 "client_secret_basic"
                ],
                "claims_supported": [
                 "aud",
                 "email",
                 "email_verified",
                 "exp",
                 "family_name",
                 "given_name",
                 "iat",
                 "iss",
                 "locale",
                 "name",
                 "picture",
                 "sub"
                ],
                "code_challenge_methods_supported": [
                 "plain",
                 "S256"
                ]
               });
        }),
    /**
     * /o/oauth2/v2/certs
     * EXPOSED ROUTE
     */
    certs: (app, type, route) => AddRoute(app, type, route,
        [],
        (req, res) => {
            console.log('certs');
            res.status(200).send({
                "keys": [
                    // {
                    //   "alg": "RS256",
                    //   "n": "tUXNIN6LZJX5ra23GAWzPQ2zJfjwQxztau6bKDQH_ehhJ5CCBDpBcIyHebG5WCOIN_N_vqZUoeYvqXKVfpmUIW4O_rFnKgP7K-Mal4VBqOtmDs0z9HKz712wU6GmWqQnJBIDzToTgK5EORSMZHtZvZr6jvryZYzZly8Bit2bMauQt3OYlGlYArDK2Gy6E6orqIzY2O_mRQE0uENwuxtZHBIo8joOwEFfFjN6kURNjT0KqFeO28z-0FosiiyTrq2NrjhXdiRxus0t1fq_xJ14AHNaPzLjzYb6UJ0EJE5x_wuUvBDMbjvS1Zlr8EV8pCBzeqMnHxvvw9lkWCK0zKOukw",
                    //   "use": "sig",
                    //   "kid": "9cef5340642b157fa8a4f0d874fe7900362d82db",
                    //   "e": "AQAB",
                    //   "kty": "RSA"
                    // },
                    // {
                    //   "e": "AQAB",
                    //   "kty": "RSA",
                    //   "alg": "RS256",
                    //   "n": "tMrCJilHFRNB7Op6bhBSTpEEFCT4CM7zIOPT-HhjBhJ2bYahinC8FblyxE9rw889cS4eIAed9_614cQHUzv1lAgd3f-c0bonuMo_gGFJIOp5M4HlBz7yqimDDwYcSznSwtUziKM1pSCQr9IE-M-oNHd6ocXRhwKijzCIXIPvD4lPIjU5vR9rNziIume0AxfL8kAOIl2Rjcae8UmX24ydlLG1VGTiHuTcOzBZkGe5cAGHf4p4807PCihaSExWRQTbVrIfCIgBMehe1B99yf7ApKsHXVFN3pMsBso53jpL4XslJkOFI7SR0-gAvn89ieY5rGJ479srPDUBsZlSNtEiaw",
                    //   "use": "sig",
                    //   "kid": "a06824b79e3982394d5ce7ac75bf92cba30a2e25"
                    // }
                  ]
            });
        }),
    /**
     * /o/oauth2/v2/auth
     * EXPOSED ROUTE
     */
    auth: (app, type, route) => AddRoute(app, type, route,
        [
            /**
             * Check on database if exists
             */
            function(req, res, next) {
                req.models.account.find({ id: req.query['client_id'] }, function (err, accounts) {
                    if (accounts == undefined || accounts.length == 0) {
                        var redirectTo = req.session.redirectTo || '/';
                        delete req.session.redirectTo;
                        res.redirect(redirectTo);
                    } else {
                        req._account = accounts[0];
                        next();
                    }
                });
            }
        ],
        (req, res) => {
            console.log('Auth', req.query['redirect_uri']);

            var token = GetToken({
                aud: req.query['client_id'],
                nonce: req.query['nonce'],
                sub: {},
                iss: 'http://localhost:8080',
                at_hash: 'HS256',
                email: req._account.email
            }, 86400 /* expire in 24h */);

            res.redirect(302 , `${req.query['redirect_uri']}#response_type=id_token&access_token=${token}&token_type=Bearer&expires_in=86400&scope=${req.query['scope']}&id_token=${token}&state=${req.query['state']}`);
            res.end();
        }),
    /**
     * /v1/userinfo
     * EXPOSED ROUTE
     */
    userinfo: (app, type, route) => AddRoute(app, type, route,
        [
            AuthenticatedFilter,
            UserController.LoadAccount
        ],
        (req, res) => {
            console.log('userinfo');
            res.send({
                sub: {
                    id: req._account.id,
                    email: req._account.email
                }
            });
        }),
    /**
     * /token
     * EXPOSED ROUTE
     */
     token: (app, type, route) => AddRoute(app, type, route,
        [
            /**
             * Check on database if exists
             */
             function(req, res, next) {
                req.models.account.find({ id: req.body['clientId'], password: req.body['clientSecret']  }, function (err, accounts) {
                    if (accounts == undefined || accounts.length == 0) {
                        if (exists) req._validationErrors.push({ msg: { code: 401 } });//account not exists
                        next();
                    } else {
                        req._account = accounts[0];
                        next();
                    }
                });
            }
        ],
        (req, res) => {
            console.log('token', req.query, req.body);

            var token = GetToken({
                aud: req.body['client_id'],
                nonce: 1,
                sub: {
                    id: req._account.id,
                    email: req._account.email
                },
                iss: 'http://localhost:8080',
                at_hash: 'HS256'
            }, 86400 /* expire in 24h */);

            res.status(200).send({
                "access_token": token,
                "expires_in": 86400,
                "token_type":"Bearer"
            });
        })
};

module.exports = OpenIdResourceController;