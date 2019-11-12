'use strict';
const { AddRoute, Validation, ValidationStep } = require('../../shared/services/security/Filter');
const { Code } = require('../../shared/services/security/Code');
const multer  = require('multer');
const MID = require('monotonic-id');
const jwt = require('jsonwebtoken');

const STORAGE_PATH = '/mnt/storage/';

const OpenIdResourceController = {

    /**
     * /token/.well-known/openid-configuration
     * EXPOSED ROUTE
     */
    get: (app, type, route) => AddRoute(app, type, route,
        [
            // Validation('param:id', [
            //     ['exists', Code.EMPTY_FIELD]
            // ]),
            // ValidationStep
        ],
        (req, res) => {
            res.status(200).send({
                "issuer": "http://localhost:8080",
                "authorization_endpoint": "http://localhost:8080/o/oauth2/v2/auth",
                "token_endpoint": "http://localhost:8080/token",
                "userinfo_endpoint": "http://localhost:8080/v1/userinfo",
                "revocation_endpoint": "http://localhost:8080/revoke",
                "jwks_uri": "http://localhost:8080/o/oauth2/v2/certs",
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
     * /v1/userinfo
     * EXPOSED ROUTE
     */
    userinfo: (app, type, route) => AddRoute(app, type, route,
        [
            // Validation('param:id', [
            //     ['exists', Code.EMPTY_FIELD]
            // ]),
            // ValidationStep
        ],
        (req, res) => {
            console.log('userinfo');
        }),
    /**
     * /o/oauth2/v2/certs
     * EXPOSED ROUTE
     */
    certs: (app, type, route) => AddRoute(app, type, route,
        [
            // Validation('param:id', [
            //     ['exists', Code.EMPTY_FIELD]
            // ]),
            // ValidationStep
        ],
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
            // Validation('param:id', [
            //     ['exists', Code.EMPTY_FIELD]
            // ]),
            // ValidationStep
        ],
        (req, res) => {
            console.log('Auth', req.query['redirect_uri']);
            var token = jwt.sign({
                aud: req.query['client_id'],
                nonce: req.query['nonce'],
                sub: {},
                iss: 'http://localhost:8080',
                at_hash: 'HS256'
                //issuer: req.query['issuer']
            }, 'secretToken', {
                expiresIn: 86400 // expires in 24 hours
            })
            res.redirect(302 , `${req.query['redirect_uri']}#response_type=id_token&access_token=${token}&token_type=Bearer&expires_in=86400&scope=${req.query['scope']}&id_token=${token}&state=${req.query['state']}`);
            /**
             * #
access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik5HVEZ2ZEstZnl0aEV1Q...
&token_type=Bearer
&expires_in=3599
&scope=https%3a%2f%2fgraph.microsoft.com%2fuser.read 
&id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik5HVEZ2ZEstZnl0aEV1Q...
&state=12345
             */
            res.end();
        }),
    /**
     * /token
     * EXPOSED ROUTE
     */
    token: (app, type, route) => AddRoute(app, type, route,
        [

        ],
        (req, res) => {
            console.log('token');
            res.status(200).send({
                "access_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
                "expires_in": 3000,
                "token_type":"Bearer"
            });
        })
};

module.exports = OpenIdResourceController;