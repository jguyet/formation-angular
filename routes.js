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
 * /search_query:
 *   get:
 *     summary: paginated list of carts
 *     tags:
 *       - name: Cart
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
_("GET /search_query ./exposition/controllers/CartResourceController.search()");

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Creation of Cart
 *     tags:
 *       - name: Cart
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: cart
 *         description: The cart to create.
 *         schema:
 *           type: object
 *           required:
 *             - title
 *             - description
 *             - price
 *             - picture
 *           properties:
 *             title:
 *               type: string
 *             description:
 *               type: string
 *             price:
 *               type: integer
 *             picture:
 *               type: string
 *     responses:
 *       200:
 *         description: empty
 *       404:
 *         description: (code 1 - You already have a chain)
 */
_("POST /cart ./exposition/controllers/CartResourceController.create()");

tableRoute[0] = tableRoute[0].sort((a, b) => a.Routes > b.Routes ? 1 : -1);
console.table(tableRoute[0], tableRoute[1]);
};