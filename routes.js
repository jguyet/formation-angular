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
 *   get:
 *     summary: get user information
 *     tags:
 *       - name: User
 *     consumes:
 *       - application/json
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
 *       404:
 *         description: empty
 */
 _("GET /user/:id ./exposition/controllers/UserResourceController.getUserById()");

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
 *             description:
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
 * /random-card-id:
 *   get:
 *     summary: get random card id
 *     tags:
 *       - name: Card
 *     responses:
 *       200:
 *         description: integer id
 *       404:
 *         description: empty
 */
 _("GET /random-card-id ./exposition/controllers/CardResourceController.getRandomCardId()");

/**
 * @swagger
 * /card/{id}:
 *   delete:
 *     summary: delete card by id
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
 _("DELETE /card/:id ./exposition/controllers/CardResourceController.delete()");

/**
 * //@swagger
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
 * //@swagger
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


/**
 * @swagger
 * /formulaire:
 *   get:
 *     summary: retrieve form data
 *     tags:
 *       - name: Formulaire
 *     responses:
 *       200:
 *         description: []
 *       404:
 *         description: (code 1 - You already have a chain)
 */
 _("GET /formulaire ./exposition/controllers/FormulaireResourceController.get()");

/**
 * @swagger
 * /formulaire:
 *   post:
 *     summary: Post result
 *     tags:
 *       - name: Formulaire
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: result
 *         description: The Result 
 *     responses:
 *       200:
 *         description: empty
 *       404:
 *         description: (code 1 - You already have a chain)
 */
 _("POST /formulaire ./exposition/controllers/FormulaireResourceController.post()");

/**
 * @swagger
 * /formulaire/stats:
 *   get:
 *     summary: retrieve formulaire stats
 *     tags:
 *       - name: Formulaire
 *     responses:
 *       200:
 *         description: []
 *       404:
 *         description: (code 1 - You already have a chain)
 */
 _("GET /formulaire/stats ./exposition/controllers/FormulaireResourceController.getStats()");

/**
 * @swagger
 * /formulaire/stats:
 *   delete:
 *     summary: remove formulaire stats
 *     tags:
 *       - name: Formulaire
 *     responses:
 *       200:
 *         description: empty
 */
 _("DELETE /formulaire/stats ./exposition/controllers/FormulaireResourceController.clean()");

/**
 * @swagger
 * /get-ip:
 *   get:
 *     summary: retrieve ip information
 *     tags:
 *       - name: Ip Protocol Information
 *     responses:
 *       200:
 *         description: { "ip": "127.0.0.1" }
 *       404:
 *         description: Error
 */
 _("GET /get-ip ./exposition/controllers/IpResourceController.get()");

/**
 * @swagger
 * /channels:
 *   get:
 *     summary: get all channels
 *     tags:
 *       - name: Channel
 *     responses:
 *       200:
 *         description: empty
 *       404:
 *         description: empty
 */
_("GET /channels ./exposition/controllers/ChannelResourceController.getAll()");

/**
 * @swagger
 * /channel:
 *   post:
 *     summary: Creation of one Channel
 *     tags:
 *       - name: Channel
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: channel
 *         description: The channel to create.
 *         schema:
 *           type: object
 *           required:
 *             - title
 *             - type
 *           properties:
 *             title:
 *               type: string
 *             picture:
 *               type: string
 *               example: "https://ninja.png"
 *     responses:
 *       200:
 *         description: empty
 *       404:
 *         description: (code 1 - You already have a chain)
 */
 _("POST /channel ./exposition/controllers/ChannelResourceController.create()");

 /**
 * @swagger
 * /channel/{title}/message/add:
 *   post:
 *     summary: Send new Message to Channel
 *     tags:
 *       - name: Channel
 *     consumes:
 *       - application/json
 *     security:
 *      - authentication: []
 *     parameters:
 *       - in: body
 *         name: message
 *         description: The message you want add in
 *         schema:
 *           type: object
 *           required:
 *             - title
 *             - message
 *           properties:
 *             title:
 *               type: string
 *             message:
 *               type: string
 *     responses:
 *       200:
 *         description: empty
 *       404:
 *         description: (code 1 - You already have a chain)
 */
  _("POST /channel/:title/message/add ./exposition/controllers/ChannelResourceController.sendMessage()");

/**
 * @swagger
 * /channel/{title}/message/update:
 *   post:
 *     summary: Update specific message in one Channel
 *     tags:
 *       - name: Channel
 *     consumes:
 *       - application/json
 *     security:
 *      - authentication: []
 *     parameters:
 *       - in: body
 *         name: message
 *         description: The message you want add in
 *         schema:
 *           type: object
 *           required:
 *             - messageId
 *             - title
 *             - message
 *           properties:
 *             messageId:
 *               type: string
 *             title:
 *               type: string
 *             message:
 *               type: string
 *     responses:
 *       200:
 *         description: empty
 *       404:
 *         description: (code 1 - You already have a chain)
 */
 _("POST /channel/:title/message/update ./exposition/controllers/ChannelResourceController.updateMessage()");

/**
 * @swagger
 * /channel/{title}/message/{id}/delete:
 *   delete:
 *     summary: Delete specific message in one Channel
 *     tags:
 *       - name: Channel
 *     consumes:
 *       - application/json
 *     security:
 *      - authentication: []
 *     parameters:
 *       - in: path
 *         name: title
 *         description: channel title
 *         schema:
 *          type: string
 *       - in: path
 *         name: id
 *         description: message id
 *         schema:
 *          type: string
 *     responses:
 *       200:
 *         description: empty
 *       404:
 *         description: (code 1 - You already have a chain)
 */
 _("DELETE /channel/:title/message/:id/delete ./exposition/controllers/ChannelResourceController.deleteMessage()");

 /**
  * @swagger
  * /channel/{title}:
  *   get:
  *     summary: get channel by title
  *     tags:
  *       - name: Channel
  *     parameters:
  *       - in: path
  *         name: title
  *         description: channel title
  *         schema:
  *          type: string
  *     responses:
  *       200:
  *         description: empty
  *       404:
  *         description: empty
  */
 _("GET /channel/:title ./exposition/controllers/ChannelResourceController.get()");
 
 /**
  * @swagger
  * /channel/{title}:
  *   delete:
  *     summary: delete channel by title
  *     tags:
  *       - name: Channel
  *     parameters:
  *       - in: path
  *         name: title
  *         description: channel title
  *         schema:
  *          type: string
  *     responses:
  *       200:
  *         description: empty
  *       404:
  *         description: empty
  */
  _("DELETE /channel/:title ./exposition/controllers/ChannelResourceController.delete()");

/**
 * @swagger
 * /channel/{title}/messages:
 *   delete:
 *     summary: remove all messages from one channel
 *     tags:
 *       - name: Channel
 *     security:
 *      - authentication: []
 *     parameters:
 *       - in: path
 *         name: title
 *         description: channel title
 *         schema:
 *          type: string
 *     responses:
 *       200:
 *         description: empty
 *       404:
 *         description: empty
 */
_("DELETE /channel/:title/messages ./exposition/controllers/ChannelResourceController.clean()");

 /**
 * @swagger
 * /ws:
 *   get:
 *     summary: websocket with channels messages
 *     tags:
 *       - name: WebSocket Channel messages
 *     responses:
 *       200:
 *         description: Connected
 *       404:
 *         description: Error
 */
// nothing


_("GET /.well-known/openid-configuration ./exposition/controllers/OpenIdResourceController.get()");
_("GET /o/oauth2/v2/auth ./exposition/controllers/OpenIdResourceController.auth()");
_("GET /o/oauth2/v2/certs ./exposition/controllers/OpenIdResourceController.certs()");
_("POST /token ./exposition/controllers/OpenIdResourceController.token()");
_("GET /v1/userinfo ./exposition/controllers/OpenIdResourceController.userinfo()");


tableRoute[0] = tableRoute[0].sort((a, b) => a.Routes > b.Routes ? 1 : -1);
console.table(tableRoute[0], tableRoute[1]);
};