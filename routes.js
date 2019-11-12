'use strict';

module.exports = function(app) {

var tableRoute = [
    [],//data
    ["Routes", "MethodType"]//fields
];
/**
 * Method for create routes 
 * @param {*} exp 
 */
const _ = function(exp) {
    var split = exp.split(' ');
    var methodType = split[0];
    var route = split[1];
    var s = split[2].split('.').filter(x => !!x);
    var func = s[s.length - 1].split('(')[0];
    var classe = '.' + s[0];
    var resourceController = require(classe);

    tableRoute[0].push({ Routes: route, MethodType: methodType });
    resourceController[func](app, methodType, route);
};

/**
 * @swagger
 * securityDefinitions:
 *   authentication:
 *     type: apiKey
 *     name: Authorization
 *     in: header
 */

/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: authenticate to the application
 *     tags:
 *       - name: User
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user logging
 *         schema:
 *           type: object
 *           required:
 *             - email
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: empty
 */
_("POST /user/login ./exposition/controllers/UserResourceController.login()");

/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: register to the application
 *     tags:
 *       - name: User
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         schema:
 *           type: object
 *           required:
 *             - email
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *     responses:
 *       200:
 *         description: empty
 *       404:
 *         description: empty
 */
_("POST /user/register ./exposition/controllers/UserResourceController.register()");

/**
 * @swagger
 * /user:
 *   patch:
 *     summary: update user information
 *     tags:
 *       - name: User
 *     consumes:
 *       - application/json
 *     security:
 *      - authentication: []
 *     parameters:
 *       - in: body
 *         name: user
 *         schema:
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *             picture:
 *               description: uuid
 *               type: string
 *     responses:
 *       200:
 *         description: empty
 *       404:
 *         description: empty
 */
_("PATCH /user ./exposition/controllers/UserResourceController.update()");

/**
 * @swagger
 * /user:
 *   get:
 *     summary: get user information
 *     tags:
 *       - name: User
 *     consumes:
 *       - application/json
 *     security:
 *      - authentication: []
 *     responses:
 *       200:
 *         description: empty
 *       404:
 *         description: empty
 */
_("GET /user ./exposition/controllers/UserResourceController.get()");

/**
 * @swagger
 * /user/{id}:
 *   delete:
 *     summary: remove user from id parameter
 *     tags:
 *       - name: User
 *     security:
 *      - authentication: []
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The user logging
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: empty
 */
_("DELETE /user/:id ./exposition/controllers/UserResourceController.delete()");

/**
 * @swagger
 * /search_query:
 *   get:
 *     summary: paginated list of cards
 *     tags:
 *       - name: Card
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: page
 *         description: default 1
 *         required: false
 *         type: string
 *         in: query
 *       - name: size
 *         description: default 20
 *         required: false
 *         type: string
 *         in: query
 *     responses:
 *       200:
 *         description: empty
 *       404:
 *         description: empty
 */
_("GET /search_query ./exposition/controllers/CardResourceController.search()");

/**
 * @swagger
 * /card:
 *   post:
 *     summary: Creation of Card
 *     tags:
 *       - name: Card
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: card
 *         description: The card to create.
 *         schema:
 *           type: object
 *           required:
 *             - title
 *             - description
 *             - price
 *             - type
 *           properties:
 *             title:
 *               type: string
 *             price:
 *               type: integer
 *             type:
 *               type: string
 *     responses:
 *       200:
 *         description: empty
 *       404:
 *         description: (code 1 - You already have a chain)
 */
_("POST /card ./exposition/controllers/CardResourceController.create()");

/**
 * @swagger
 * /card/{id}:
 *   get:
 *     summary: get card by id
 *     tags:
 *       - name: Card
 *     parameters:
 *       - in: path
 *         name: id
 *         description: card id
 *         schema:
 *          type: UUID
 *     responses:
 *       200:
 *         description: empty
 *       404:
 *         description: empty
 */
_("GET /card/:id ./exposition/controllers/CardResourceController.get()");

/**
 * @swagger
 * /storage/{id}:
 *   get:
 *     summary: retrieve file from data storage
 *     tags:
 *       - name: Storage
 *     parameters:
 *       - in: path
 *         name: id
 *         description: The file uuid
 *         schema:
 *           type: UUID
 *     responses:
 *       200:
 *         description: empty
 *       404:
 *         description: (code 1 - You already have a chain)
 */
_("GET /storage/:id ./exposition/controllers/StorageResourceController.get()");

/**
 * @swagger
 * /storage:
 *   post:
 *     summary: Upload file to the data storage
 *     tags:
 *       - name: Storage
 *     responses:
 *       200:
 *         description: empty
 *       404:
 *         description: (code 1 - You already have a chain)
 */
_("GET /storage ./exposition/controllers/StorageResourceController.preUpload()");
_("POST /storage ./exposition/controllers/StorageResourceController.upload()");


_("GET /.well-known/openid-configuration ./exposition/controllers/OpenIdResourceController.get()");
_("GET /o/oauth2/v2/auth ./exposition/controllers/OpenIdResourceController.auth()");
_("GET /v1/userinfo ./exposition/controllers/OpenIdResourceController.userinfo()");
_("GET /o/oauth2/v2/certs ./exposition/controllers/OpenIdResourceController.certs()");
_("POST /token ./exposition/controllers/OpenIdResourceController.token()");

tableRoute[0] = tableRoute[0].sort((a, b) => a.Routes > b.Routes ? 1 : -1);
console.table(tableRoute[0], tableRoute[1]);
};